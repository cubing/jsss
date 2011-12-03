/*

scramble_333.js

3x3x3 Solver / Scramble Generator in Javascript.

Code taken from QBX by Evan Gates.
Ported by Lucas Garron, November 23, 2011.

 */


if (typeof scramblers == "undefined") {
  var scramblers = {};
}

scramblers["333fm"] = scramblers["333ft"] = scramblers["333bf"] = scramblers["333oh"] = scramblers["333"] = (function() {

  var names = [ "UFU", "URU", "UBU", "ULU", "DFD", "DRD", "DBD", "DLD", "FRF", "FLF", "BRB", "BLB",
                "UFRUF", "URBUR", "UBLUB", "ULFUL", "DRFDR", "DFLDF", "DLBDL", "DBRDB" ];

  var co_trans  = new Array( 2187 * 6);
  var eo_trans  = new Array( 2048 * 6);
  var ud1_trans = new Array(  495 * 6);
  var cp_trans  = new Array(40320 * 6);
  var ep_trans  = new Array(40320 * 6);
  var ud2_trans = new Array(   24 * 6);

  var co_prune  = new Array( 2187);
  var eo_prune  = new Array( 2048);
  var ud1_prune = new Array(  495);
  var cp_prune  = new Array(40320);
  var ep_prune  = new Array(40320);
  var ud2_prune = new Array(   24);

  var co = new Array( 8);
  var eo = new Array(12);
  var cp = new Array( 8);
  var ep = new Array(12);

  var co_coord, eo_coord, ud1_coord;
  var cp_coord, co_coord, ud2_coord;

  var phase_1_moves = new Array(12);
  var phase_2_moves = new Array(18);

  var c_cycles = [
    [ 0, 1, 2, 3 ], // U
    [ 4, 5, 6, 7 ], // D
    [ 0, 3, 5, 4 ], // F
    [ 1, 7, 6, 2 ], // B
    [ 0, 4, 7, 1 ], // R
    [ 2, 6, 5, 3 ], // L
  ];
  var e_cycles = [
    [ 0,  1, 2,  3 ], // U
    [ 4,  7, 6,  5 ], // D
    [ 0,  9, 4,  8 ], // F
    [ 2, 10, 6, 11 ], // B
    [ 1,  8, 5, 10 ], // R
    [ 3, 11, 7,  9 ], // L
  ];
  var c_twists = [
    [ 0, 0, 0, 0 ], // U
    [ 0, 0, 0, 0 ], // D
    [ 2, 1, 2, 1 ], // F
    [ 1, 2, 1, 2 ], // B
    [ 1, 2, 1, 2 ], // R
    [ 1, 2, 1, 2 ], // L
  ];
  var e_twists = [
    [ 0, 0, 0, 0 ], // U
    [ 0, 0, 0, 0 ], // D
    [ 1, 1, 1, 1 ], // F
    [ 1, 1, 1, 1 ], // B
    [ 0, 0, 0, 0 ], // R
    [ 0, 0, 0, 0 ], // L
  ];

  function move_pieces(perm, orie, cycle, twist, mod)
  {
    var otmp, ptmp, i;

    ptmp = perm[cycle[0]];
    otmp = orie[cycle[0]];

    for (i = 0; i < 3; i++) {
      orie[cycle[i]] = (orie[cycle[i + 1]] + twist[i + 1]) % mod;
      perm[cycle[i]] = perm[cycle[i + 1]];
    }
    orie[cycle[3]] = (otmp + twist[0]) % mod;
    perm[cycle[3]] = ptmp;
  }

  function do_move(mv)
  {
    var i, face;

    face = Math.floor(mv / 3);

    for (i = 0; i < (mv % 3) + 1; i++) {
      move_pieces(cp, co, c_cycles[face], c_twists[face], 3);
      move_pieces(ep, eo, e_cycles[face], e_twists[face], 2);
    }
  }

  function fact(n)
  {
    var i;

    for (i = 1; n > 1; n--)
      i *= n;

    return i;
  }

  function choose(n, k)
  {
    return fact(n) / (fact(k) * fact(n - k));
  }

  function set_eo_coord(coord)
  {
    var i;

    eo[11] = 0;
    for (i = 10; i >= 0; i--, coord >>= 1) {
      eo[i] = coord & 1;
      eo[11] ^= eo[i];
    }
  }

  function get_eo_coord()
  {
    var i, coord;

    for (i = coord = 0; i < 11; i++, coord <<= 1)
      coord |= eo[i];

    return coord >> 1;
  }

  function set_co_coord(coord)
  {
    var i, p = 729;

    co[7] = 0;
    for (i = 6; i >= 0; i--, p = Math.floor(p / 3)) {
      co[i] = Math.floor(coord / p);
      coord -= co[i] * p;
      co[7] = (co[7] + 3 - co[i]) % 3;
    }
  }

  function get_co_coord()
  {
    var i, p, coord;

    for (i = coord = 0, p = 1; i < 7; i++, p *= 3)
      coord += co[i] * p;

    return coord;
  }

  function set_ud1_coord(coord)
  {
    var i, j;

    for (i = 0; i < 12; i++)
      ep[i] = 0;
    for (i = 11, j = 4; i >= 0 && j; i--) {
      if (coord >= choose(i, j - 1)) {
        coord -= choose(i, j - 1);
      } else {
        ep[i] = 8;
        j--;
      }
    }
  }

  function get_ud1_coord()
  {
    var i, j = 0, coord = 0;

    for (i = 0; i < 12; i++) {
      if (ep[i] > 7)
        j++;
      if (j && ep[i] < 8)
        coord += choose(i, j - 1);
    }
    return coord;
  }

  // set a permutation coordinate: cp, ep, ud2
  function set_p_coord(perm, start, len, coord)
  {
    var val = 076543210;
    var p = fact(len);
    var i;
    for (i = 0; i < len; i++) {
      p /= (len - i);
      var v = 3 * Math.floor(coord / p);
      coord %= p;
      perm[start + ((val >> v) & 07)] = i ;
      var m = (1 << v) - 1;
      val = (val & m) + ((val >> 3) & ~m);
    }
  }
  function get_p_coord(iperm, start, len)
  {
          var perm = new Array(8) ;
    var r = 0;
    var val = 076543210;
    var i;
    var m = len - 1;
          for (i=0; i<len; i++)
             perm[iperm[start+i] & m] = i ;
    for (i = 0; i + 1 < len; i++) {
      var v = 3 * perm[i];
      r = (len - i) * r + ((val >> v) & 07);
      val -= 011111110 << v;
    }
    return r;
  }

  function set_cp_coord (coord) { set_p_coord(cp, 0, 8, coord); }
  function set_ep_coord (coord) { set_p_coord(ep, 0, 8, coord); }
  function set_ud2_coord(coord) { set_p_coord(ep, 8, 4, coord); }

  function get_cp_coord () { return get_p_coord(cp, 0, 8); }
  function get_ep_coord () { return get_p_coord(ep, 0, 8); }
  function get_ud2_coord() { return get_p_coord(ep, 8, 4); }

  function get_bits(perm) {
     var r = 0 ;
     var i ;
     for (i=0; i<7; i++)
        r |= (perm[i] & 4) << i ;
     return r >> 2 ;
  }

  function init_trans2(group, tran_table, len, set_coord, get_coord, perm)
  {
    var i, j, k, b, t, klim ;
          var base = new Array(128) ;
    for (i=0; i<len; i+=24) {
      set_coord(i) ;
      b = get_bits(perm) ;
      if (base[b] == undefined) {
        base[b] = i ;
        klim = 24 ;
      } else {
        klim = 1 ;
      }
      b = base[b] * 6 ;
      for (k=0; k<klim; k++) {
        for (j=0; j<6; j++) {
          set_coord(i + k) ;
          if (group && j >= 2) {
            do_move(j*3+1) ;
          } else {
            do_move(j*3) ;
          }
          tran_table[(i+k)*6+j] = get_coord() ;
        }
      }
      for (j=0; j<6; j++) {
        t = tran_table[i*6+j] - tran_table[b+j] ;
        for (k=klim; k<24; k++)
          tran_table[(i+k)*6+j] = t + tran_table[b+k*6+j] ;
      }
    }
  }

  function init_trans(group, tran_table, len, set_coord, get_coord)
  {
    var i, j;
    for (i = 0; i < len; i++) {
      for (j = 0; j < 6; j++) {
        if (tran_table[i * 6 + j] == undefined) {
          var start = i;
          var face = j;
          set_coord(start);
          while (tran_table[start * 6 + face] == undefined) {
            if (group && face >= 2) // double turns on F, B, R, L, in G1
              do_move(3 * face + 1);
            else
              do_move(3 * face);
            var newpos = get_coord();
            tran_table[start * 6 + face] = newpos;
            if (len == 40320) {
              tran_table[(len - 1 - start) * 6 + face] = len - 1 - newpos;
            }
            start = newpos;
            face = 0;
            while (face < 5 && tran_table[start * 6 + face] != undefined) {
              face++;
            }
          }
        }
      }
    }
  }

  function init_trans_tables(continuation, statusCallback)
  {
    if (!continuation) {
      init_trans(0, eo_trans, 2048, set_eo_coord,  get_eo_coord );
      init_trans(0, co_trans, 2187, set_co_coord,  get_co_coord );
      init_trans(0, ud1_trans, 495, set_ud1_coord, get_ud1_coord);

      init_trans2(1, ep_trans, 40320, set_ep_coord,  get_ep_coord, ep);
      init_trans2(1, cp_trans, 40320, set_cp_coord,  get_cp_coord, cp);
      init_trans(1, ud2_trans,   24, set_ud2_coord, get_ud2_coord);
    }
    else {
      var ini1, ini2, ini3, ini4, ini5, ini6;

      ini1 = function() {statusCallback("Prune table initialization: Step 1 of 6."); init_trans(0, eo_trans, 2048, set_eo_coord,  get_eo_coord ); setTimeout(ini2, 0);};
      ini2 = function() {statusCallback("Prune table initialization: Step 2 of 6."); init_trans(0, co_trans, 2187, set_co_coord,  get_co_coord ); setTimeout(ini3, 0);};
      ini3 = function() {statusCallback("Prune table initialization: Step 3 of 6."); init_trans(0, ud1_trans, 495, set_ud1_coord, get_ud1_coord); setTimeout(ini4, 0);};

      ini4 = function() {statusCallback("Prune table initialization: Step 4 of 6."); init_trans2(1, ep_trans, 40320, set_ep_coord,  get_ep_coord, ep); setTimeout(ini5, 0);};
      ini5 = function() {statusCallback("Prune table initialization: Step 5 of 6."); init_trans2(1, cp_trans, 40320, set_cp_coord,  get_cp_coord, cp); setTimeout(ini6, 0);};
      ini6 = function() {statusCallback("Prune table initialization: Step 6 of 6."); init_trans(1, ud2_trans,   24, set_ud2_coord, get_ud2_coord); setTimeout(continuation, 0);};

      statusCallback("Initializing 3x3x3 transition tables.");
      setTimeout(ini1); 
    }
  }

  function init_prune(group, coord, prune_table, tran_table, mdepth, depth, last)
  {
    var i, mv;

    if (depth == mdepth)
      return;
    prune_table[coord] = depth;

    for (mv = 0; mv < 18; mv += 3) {
      var thisface = mv / 3;
      if (thisface == last || ((last & 1) == 0 && thisface == last + 1)) // don't do two moves in a row on the same face
        continue;
      var coord2 = coord;
      for (i = 0; i < 3; i++) {
        if (group && mv >= 6 && i) // double turns in G1
          break;
        coord2 = tran_table[coord2 * 6 + thisface];
        if (!(prune_table[coord2] <= depth + 1))
          init_prune(group, coord2, prune_table, tran_table, mdepth, depth + 1, thisface);
      }
    }
  }

  function init_prune2(group, prune_table, tran_table, mdepth)
  {
    var i;
    for (i = prune_table.length - 1; i >= 0; i--) {
      prune_table[i] = mdepth;
    }
    init_prune(group, 0, prune_table, tran_table, mdepth - 1, 0, 18);
  }

  function init_prune_tables(continuation, statusCallback)
  {
    if (!continuation) {
      init_prune2(0, eo_prune,  eo_trans,  8);
      init_prune2(0, co_prune,  co_trans,  7);
      init_prune2(0, ud1_prune, ud1_trans, 6);

      init_prune2(1, ep_prune,  ep_trans,  9);
      init_prune2(1, cp_prune,  cp_trans, 14);
      init_prune2(1, ud2_prune, ud2_trans, 5);
    }
    else {
      var ini1, ini2, ini3, ini4, ini5, ini6;

      ini1 = function() {statusCallback("Prune table initialization: Step 1 of 6."); init_prune2(0, eo_prune,  eo_trans,  8); setTimeout(ini2, 0);};
      ini2 = function() {statusCallback("Prune table initialization: Step 2 of 6."); init_prune2(0, co_prune,  co_trans,  7); setTimeout(ini3, 0);};
      ini3 = function() {statusCallback("Prune table initialization: Step 3 of 6."); init_prune2(0, ud1_prune, ud1_trans, 6); setTimeout(ini4, 0);};

      ini4 = function() {statusCallback("Prune table initialization: Step 4 of 6."); init_prune2(1, ep_prune,  ep_trans,  9); setTimeout(ini5, 0);};
      ini5 = function() {statusCallback("Prune table initialization: Step 5 of 6."); init_prune2(1, cp_prune,  cp_trans, 14); setTimeout(ini6, 0);};
      ini6 = function() {statusCallback("Prune table initialization: Step 6 of 6."); init_prune2(1, ud2_prune, ud2_trans, 5); setTimeout(continuation, 0);};

      statusCallback("Initializing 3x3x3 prune tables.");
      setTimeout(ini1); 
    }
  }

  function phase_1(eo_coord, co_coord, ud1_coord, depth, last)
  {
    var face, i;

    if (depth == 0)
      return (eo_coord == 0 && co_coord == 0 && ud1_coord == 0) ;
    depth-- ;
    for (face=0; face<6; face++) {
      // no two moves in a row on same face, no move on same axis after U, F, R
      if (face == last || (face == last + 1 && (last & 1) == 0))
        continue;
      var eo_coord2  = eo_coord;
      var co_coord2  = co_coord;
      var ud1_coord2 = ud1_coord;
      for (i = 0; i < 3; i++) {
        eo_coord2  = eo_trans [eo_coord2  * 6 + face];
        co_coord2  = co_trans [co_coord2  * 6 + face];
        ud1_coord2 = ud1_trans[ud1_coord2 * 6 + face];
        if (co_prune[co_coord2] <= depth &&
                              eo_prune[eo_coord2] <= depth &&
                              ud1_prune[ud1_coord2] <= depth &&
                        phase_1(eo_coord2, co_coord2, ud1_coord2, depth, face)) {
          phase_1_moves[depth] = 3*face + i;
          return 1;
        }
      }
    }
    return 0;
  }

  function phase_2(ep_coord, cp_coord, ud2_coord, depth, last)
  {
    var mv, face, i;

    if (depth == 0)
      return (ep_coord == 0 && cp_coord == 0 && ud2_coord == 0) ;
    depth-- ;
    for (face=0; face<6; face++) {
      // no two moves in a row on same face, no move on same axis after U, F, R
      if (face == last || (face == last + 1 && (last & 1) == 0))
        continue;
      var ep_coord2  = ep_coord;
      var cp_coord2  = cp_coord;
      var ud2_coord2 = ud2_coord;
      for (i=0; i<3; i++) {
        ep_coord2  = ep_trans [ep_coord2  * 6 + face];
        cp_coord2  = cp_trans [cp_coord2  * 6 + face];
        ud2_coord2 = ud2_trans[ud2_coord2 * 6 + face];
        if (ep_prune[ep_coord2] <= depth &&
                              cp_prune[cp_coord2] <= depth &&
                              ud2_prune[ud2_coord2] <= depth &&
                        phase_2(ep_coord2, cp_coord2, ud2_coord2, depth, face)) {
          phase_2_moves[depth] = 3*face + (face >= 2 ? 1 : i) ;
          return 1;
        }
        if (face >= 2)
          break;
      }
    }
    return 0;
  }

  function set_cube(cube)
  {
    var i, j, p, t;

    for (i = 0; i < 12; i++) {
      p = cube.substring(i * 3, i * 3 + 2);
      for (j = 0; j < 12; j++) {
        if ((t = names[j].indexOf(p)) != -1) {
          ep[i] = j;
          eo[i] = t;
        }
      }
    }

    for (i = 0; i < 8; i++) {
      p = cube.substring((12 * 3) + (i * 4), (12 * 3) + (i * 4) + 3);
      for (j = 0; j < 8; j++) {
        if ((t = names[j + 12].indexOf(p)) != -1) {
          cp[i] = j;
          co[i] = t;
        }
      }
    }

    co_coord  = get_co_coord();
    eo_coord  = get_eo_coord();
    ud1_coord = get_ud1_coord();
  }

  function print_move(mv)
  {
    var faces = [ "U", "D", "F", "B", "R", "L" ];
    var num   = [ "", "2", "'" ];
    if (mv == undefined) return "";
    return faces[Math.floor(mv / 3)] + num[mv % 3] + " ";
  }

  var initialized = false;

  function init_cube(continuation, iniRandomSource, statusCallback)
  {
  
    setRandomSource(iniRandomSource);
    
    if (!initialized) {
      var i;

      ep_coord = cp_coord = ud2_coord = 0;

      if (!continuation) {
        init_trans_tables();

        init_prune_tables();
        
        initialized = true;
      }
      else {
        var safeStatusCallback = statusCallback;
        if (!safeStatusCallback) {
          safeStatusCallback = function(){};
        }
        var ini3 = function() {
          initialized = true;
          safeStatusCallback("Done initializing 3x3x3.");
          setTimeout(continuation, 0);
        };
        var ini2 = init_prune_tables.bind(null, ini3, safeStatusCallback);
        var ini1 = init_trans_tables.bind(null, ini2, safeStatusCallback);
        setTimeout(ini1, 0);
      }
    }
    else {
        if (continuation) {
        setTimeout(continuation, 0);
      }
    }
  }

  function benchmark()
  {
    var very_beg, very_end, beg, end, res = "";
    var cubes = [
      "BD FU FR DF LB LF RU LU BR DL RD BU RDB RFD BLU LFU LDF LBD BUR RUF",
      "RB DL LF FR UL BL UB UF FD DR BD UR BRD FRU FLD RFD RBU ULF DLB BLU",
      "DL BD LU DR UR FD BR FL RF LB UB FU LDF BRD DLB DRF LFU UBL RUF URB",
      "FU LB LD FR DR LU RU UB FD FL RB BD LUB RUF RBU DRF DBR BDL ULF LDF",
    ];

    co_trans  = new Array( 2187 * 6);
    eo_trans  = new Array( 2048 * 6);
    ud1_trans = new Array(  495 * 6);
    cp_trans  = new Array(40320 * 6);
    ep_trans  = new Array(40320 * 6);
    ud2_trans = new Array(   24 * 6);
    
    co_prune  = new Array( 2187);
    eo_prune  = new Array( 2048);
    ud1_prune = new Array(  495);
    cp_prune  = new Array(40320);
    ep_prune  = new Array(40320);
    ud2_prune = new Array(   24);

    very_beg = beg = new Date();
    init_trans_tables();
    end = new Date();
    res += "initializing transition tables took " + (end - beg) + " ms<br>";

    beg = new Date();
    init_prune_tables();
    end = new Date();
    res += "initializing pruning tables took " + (end - beg) + " ms<br>";
    res += "<br>";

    for (i = 0; i < cubes.length; i++) {
      res += "solving cube " + i + " (" + cubes[i] + ")<br>";
      res += solvecube_benchmark(cubes[i]);
      res += "<br>";
    }

    very_end = new Date();

    res += "Total time: " + (very_end - very_beg) + " ms";

    return res;
  }

  function solvecube_benchmark(pos) {
    phase_1_moves = new Array(12);
    phase_2_moves = new Array(18);
    set_cube(pos);
    var i, beg, end;
    var sol = "";

    beg = new Date();
    for (i = 0; phase_1(eo_coord, co_coord, ud1_coord, i, 6) == 0; i++) {}
    end = new Date();
    sol += "phase 1 searched to depth " + i + " and took " + (end - beg) + " ms<br>";
    for (i = 11; i > -1; i--)
      if (phase_1_moves[i] != undefined)
        do_move(phase_1_moves[i]);

    ep_coord  = get_ep_coord();
    cp_coord  = get_cp_coord();
    ud2_coord = get_ud2_coord();

    beg = new Date();
    for (i = 0; phase_2(ep_coord, cp_coord, ud2_coord, i, 18) == 0; i++) {}
    end = new Date();
    sol += "phase 2 searched to depth " + i + " and took " + (end - beg) + " ms<br>";
    return sol;
  }

  function solvecube(pos, invert) {
    phase_1_moves = new Array(12);
    phase_2_moves = new Array(18);
    set_cube(pos);
    var i, sol = "";

    for (i = 0; phase_1(eo_coord, co_coord, ud1_coord, i, 6) == 0; i++) {}
    for (i = 11; i > -1; i--)
      if (phase_1_moves[i] != undefined)
        do_move(phase_1_moves[i]);

    ep_coord  = get_ep_coord();
    cp_coord  = get_cp_coord();
    ud2_coord = get_ud2_coord();

    for (i = 0; phase_2(ep_coord, cp_coord, ud2_coord, i, 18) == 0; i++) {}

    if (invert) {
      for (i = 0; i < 18; i++)
        if (phase_2_moves[i] != undefined)
          sol += print_move(phase_2_moves[i] + 2 - 2 * (phase_2_moves[i] % 3));
      for (i = 0; i < 12; i++)
        if (phase_1_moves[i] != undefined)
          sol += print_move(phase_1_moves[i] + 2 - 2 * (phase_1_moves[i] % 3));
    } else {
      for (i = 11; i > -1; i--)
        sol += print_move(phase_1_moves[i]);
      for (i = 17; i > -1; i--)
        sol += print_move(phase_2_moves[i]);
    }
    return sol;
  }

  /* Methods added by Lucas. */


  var randomSource = undefined;

  // If we have a better (P)RNG:
  var setRandomSource = function(src) {
    randomSource = src;
  }

  var identityState = "UF UR UB UL DF DR DB DL FR FL BR BL UFR URB UBL ULF DRF DFL DLB DBR";

  function randomize() {
     var pos = identityState;
     var st = 0;

     var a = pos.split(" ") ;
     var i, j, s=0, p=0, t ;
     for (i=0; i<11; i++) {
        j = i + Math.floor((12-i)*randomSource.random()) ;
        if (i != j) {
           t = a[i] ; a[i] = a[j] ; a[j] = t ; // swap
           p++ ;
        }
        if (randomSource.random() < 0.5) {
           a[i] = a[i].charAt(1) + a[i].charAt(0) ;
           s++ ;
        }
     }
     if (s & 1) {
        a[11] = a[11].charAt(1) + a[11].charAt(0) ;
     }
     s = 0 ;
     for (i=0; i<7; i++) {
        j = i + Math.floor((8-i)*randomSource.random()) ;
        if (i != j) {
           t = a[i+12]; a[i+12] = a[j+12] ; a[j+12] = t ;
           p++ ;
        }
        var o = Math.floor(3*randomSource.random()) ;
        while (o-- > 0) {
           a[i+12] = a[i+12].substring(1) + a[i+12].charAt(0) ;
           s++ ;
        }
     }
     while (s % 3 > 0) {
        a[19] = a[19].substring(1) + a[19].charAt(0) ;
        s++ ;
     }
     if (p & 1) {
        t = a[0] ; a[0] = a[1] ; a[1] = t ;
     }
     pos = a.join(" ");
     var sol = solvecube(pos, 1);

     //console.log(pos);
     //console.log(sol);
     
    return {
      state: pos,
      scramble: sol
    };
  };

  //"UF UR UB UL DF DR DB DL FR FL BR BL UFR URB UBL ULF DRF DFL DLB DBR URFLBD";
   //0  3  6  9  12 15 18 21 24 27 30 33 36  40  44  48  52  56  60  64  68

  var drawingStickerMap = [
    [   // U
      [44, 6,40],
      [ 9,68, 3],
      [48, 0,36]
    ],[ // R
      [38, 4,41],
      [25,69,31],
      [53,16,66]
    ],[ // F
      [50, 1,37],
      [27,70,24],
      [57,13,54]
    ],[ // L
      [46,10,49],
      [34,71,28],
      [61,22,58]
    ],[ // B
      [42, 7,45],
      [30,72,33],
      [65,19,62]
    ],[ // D
      [56,12,52],
      [21,73,15],
      [60,18,64]
    ]
  ];

  var border = 2;
  var width = 12;
  //URFLBD
  var drawingCenters = [
    [border + width/2*9 ,  border + width/2*3 ],
    [border + width/2*15,  border + width/2*9 ],
    [border + width/2*9 ,  border + width/2*9 ],
    [border + width/2*3 ,  border + width/2*9 ],
    [border + width/2*21,  border + width/2*9 ],
    [border + width/2*9 ,  border + width/2*15],
  ];


  function colorGet(col){
    if (col=="r") return ("#FF0000");
    if (col=="o") return ("#FF8000");
    if (col=="b") return ("#0000FF");
    if (col=="g") return ("#00FF00");
    if (col=="y") return ("#FFFF00");
    if (col=="w") return ("#FFFFFF");
    if (col=="x") return ("#000000");
  }

function drawSquare(r, cx, cy, w, fillColor) {

  var arrx = [cx - w, cx - w, cx + w, cx + w];
  var arry = [cy - w, cy + w, cy + w, cy - w];

  var pathString = "";
  for (var i = 0; i < arrx.length; i++) {
    pathString += ((i==0) ? "M" : "L") + arrx[i] + "," + arry[i];
  }
  pathString += "z";
    
  r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
}

  var drawScramble = function(parentElement, state) {

    var colorString = "wrgoby"; // UFRLBD
    var colorScheme = {
      "U": colorString[0],
      "R": colorString[1],
      "F": colorString[2],
      "L": colorString[3],
      "B": colorString[4],
      "D": colorString[5],
    };

    var r = Raphael(parentElement, border*2+width*12, border*2+width*9);
    parentElement.width = border*2+width*12;

    var stateWithCenters = state + " URFLBD";

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          var face = stateWithCenters[drawingStickerMap[i][j][k]];
          drawSquare(r, drawingCenters[i][0] + (k-1)*width, drawingCenters[i][1] + (j-1)*width, width/2, colorScheme[face]);
        }
      }
    }
        
  };

  return {
    /* mark2 interface */
    version: "November 22, 2011",
    initialize: init_cube,
    setRandomSource: setRandomSource,
    getRandomScramble: randomize,
    drawScramble: drawScramble,

    /* Other methods */
    benchmark: benchmark,
  };

})();