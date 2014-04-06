/* Base script written by Jaap Scherphuis, jaapsch a t yahoo d o t com */
/* Javascript written by Syoji Takamatsu, , red_dragon a t honki d o t net */
/* Random-State modification by Lucas Garron (lucasg a t gmx d o t de / garron.us) in collaboration with Michael Gottlieb (mzrg.com)*/
/* Optimal modification by Michael Gottlieb (qqwref a t gmail d o t com) from Jaap's code */
/* Version 1.0*/

scrambler = function () {
  var numcub = 1;
  var seq = [];
  var scramblestring = [];
  function scramble() {
      var i, j, n, ls, t;
      for (n = 0; n < numcub; n++) {
          initbrd();
          dosolve();
          scramblestring[n] = '';
          for (i = 0; i < sol.length; i++) {
              scramblestring[n] += [
                  'U',
                  'L',
                  'R',
                  'B'
              ][sol[i] & 7] + [
                  '',
                  '\''
              ][(sol[i] & 8) / 8] + ' ';
          }
          var tips = [
                  'l',
                  'r',
                  'b',
                  'u'
              ];
          for (i = 0; i < 4; i++) {
              var j = Math.floor(randomSource.random() * 3);
              if (j < 2) {
                  scramblestring[n] += tips[i] + [
                      '',
                      '\''
                  ][j] + ' ';
              }
          }
      }
  }
  var posit = [];
  var mode;
  var edt;
  var perm = [];
  var twst = [];
  var permmv = [];
  var twstmv = [];
  var sol = [];
  var pcperm = [];
  var pcori = [];
  var soltimer;
  function initbrd(){
      if( mode==4 ) clearTimeout(soltimer);
      posit = [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3];
      mode=0;
      sol.length=0;
  }
  function solved(){
      for (var i=1;i<9; i++){
          if( posit[i   ]!=posit[0 ] ) return(false);
          if( posit[i+9 ]!=posit[9 ] ) return(false);
          if( posit[i+18]!=posit[18] ) return(false);
          if( posit[i+27]!=posit[27] ) return(false);
      }
      return(true);
  }
  var edges = [2,11, 1,20, 4,31, 10,19, 13,29, 22,28];
  var movelist=[];
  movelist[0]=[0, 18,9,   6, 24,15,  1, 19,11,  2, 20,10];  //U
  movelist[1]=[23,3, 30,  26,7, 34,  22,1, 31,  20,4, 28];  //L
  movelist[2]=[5, 14,32,  8, 17,35,  4, 11,29,  2, 13,31];  //R
  movelist[3]=[12,21,27,  16,25,33,  13,19,28,  10,22,29];  //B
  function domove(m) {
      for (var i = 0; i < movelist[m].length; i += 3) {
          var c = posit[movelist[m][i]];
          posit[movelist[m][i]] = posit[movelist[m][i + 2]];
          posit[movelist[m][i + 2]] = posit[movelist[m][i + 1]];
          posit[movelist[m][i + 1]] = c;
      }
  }
  function dosolve() {
      var a, b, c, l, t = 0, q = 0;
      var parity = 0;
      pcperm = [0,1,2,3,4,5];
      for (var i = 0; i < 4; i++) {
          var other = i + Math.floor((6 - i) * randomSource.random());
          var temp = pcperm[i];
          pcperm[i] = pcperm[other];
          pcperm[other] = temp;
          if (i != other)
              parity++;
      }
      if (parity % 2 == 1) {
          var temp = pcperm[4];
          pcperm[4] = pcperm[5];
          pcperm[5] = temp;
      }
      parity = 0;
      pcori = [];
      for (var i = 0; i < 5; i++) {
          pcori[i] = Math.floor(2 * randomSource.random());
          parity += pcori[i];
      }
      pcori[5] = parity % 2;
      for (var i = 6; i < 10; i++) {
          pcori[i] = Math.floor(3 * randomSource.random());
      }
      for (a = 0; a < 6; a++) {
          b = 0;
          for (c = 0; c < 6; c++) {
              if (pcperm[c] == a)
                  break;
              if (pcperm[c] > a)
                  b++;
          }
          q = q * (6 - a) + b;
      }
      for (a = 9; a >= 6; a--) {
          t = t * 3 + pcori[a];
      }
      for (a = 4; a >= 0; a--) {
          t = t * 2 + pcori[a];
      }
      if (q != 0 || t != 0) {
          for (l = 7; l < 12; l++) {
              if (search(q, t, l, -1))
                  break;
          }
      }
  }
  function search(q, t, l, lm) {
      if (l == 0) {
          if (q == 0 && t == 0) {
              return true;
          }
      } else {
          if (perm[q] > l || twst[t] > l)
              return false;
          var p, s, a, m;
          for (m = 0; m < 4; m++) {
              if (m != lm) {
                  p = q;
                  s = t;
                  for (a = 0; a < 2; a++) {
                      p = permmv[p][m];
                      s = twstmv[s][m];
                      sol[sol.length] = m + 8 * a;
                      if (search(p, s, l - 1, m))
                          return true;
                      sol.length--;
                  }
              }
          }
      }
      return false;
  }
  function calcperm() {
      var c, p, q, l, m, n;
      for (p = 0; p < 720; p++) {
          perm[p] = -1;
          permmv[p] = [];
          for (m = 0; m < 4; m++) {
              permmv[p][m] = getprmmv(p, m);
          }
      }
      perm[0] = 0;
      for (l = 0; l <= 6; l++) {
          n = 0;
          for (p = 0; p < 720; p++) {
              if (perm[p] == l) {
                  for (m = 0; m < 4; m++) {
                      q = p;
                      for (c = 0; c < 2; c++) {
                          q = permmv[q][m];
                          if (perm[q] == -1) {
                              perm[q] = l + 1;
                              n++;
                          }
                      }
                  }
              }
          }
      }
      for (p = 0; p < 2592; p++) {
          twst[p] = -1;
          twstmv[p] = [];
          for (m = 0; m < 4; m++) {
              twstmv[p][m] = gettwsmv(p, m);
          }
      }
      twst[0] = 0;
      for (l = 0; l <= 5; l++) {
          n = 0;
          for (p = 0; p < 2592; p++) {
              if (twst[p] == l) {
                  for (m = 0; m < 4; m++) {
                      q = p;
                      for (c = 0; c < 2; c++) {
                          q = twstmv[q][m];
                          if (twst[q] == -1) {
                              twst[q] = l + 1;
                              n++;
                          }
                      }
                  }
              }
          }
      }
  }
  function getprmmv(p, m) {
      var a, b, c;
      var ps = [];
      var q = p;
      for (a = 1; a <= 6; a++) {
          c = Math.floor(q / a);
          b = q - a * c;
          q = c;
          for (c = a - 1; c >= b; c--)
              ps[c + 1] = ps[c];
          ps[b] = 6 - a;
      }
      if (m == 0) {
          cycle3(ps, 0, 3, 1);
      } else if (m == 1) {
          cycle3(ps, 1, 5, 2);
      } else if (m == 2) {
          cycle3(ps, 0, 2, 4);
      } else if (m == 3) {
          cycle3(ps, 3, 4, 5);
      }
      q = 0;
      for (a = 0; a < 6; a++) {
          b = 0;
          for (c = 0; c < 6; c++) {
              if (ps[c] == a)
                  break;
              if (ps[c] > a)
                  b++;
          }
          q = q * (6 - a) + b;
      }
      return q;
  }
  function gettwsmv(p, m) {
      var a, b, c, d = 0;
      var ps = [];
      var q = p;
      for (a = 0; a <= 4; a++) {
          ps[a] = q & 1;
          q >>= 1;
          d ^= ps[a];
      }
      ps[5] = d;
      for (a = 6; a <= 9; a++) {
          c = Math.floor(q / 3);
          b = q - 3 * c;
          q = c;
          ps[a] = b;
      }
      if (m == 0) {
          ps[6]++;
          if (ps[6] == 3)
              ps[6] = 0;
          cycle3(ps, 0, 3, 1);
          ps[1] ^= 1;
          ps[3] ^= 1;
      } else if (m == 1) {
          ps[7]++;
          if (ps[7] == 3)
              ps[7] = 0;
          cycle3(ps, 1, 5, 2);
          ps[2] ^= 1;
          ps[5] ^= 1;
      } else if (m == 2) {
          ps[8]++;
          if (ps[8] == 3)
              ps[8] = 0;
          cycle3(ps, 0, 2, 4);
          ps[0] ^= 1;
          ps[2] ^= 1;
      } else if (m == 3) {
          ps[9]++;
          if (ps[9] == 3)
              ps[9] = 0;
          cycle3(ps, 3, 4, 5);
          ps[3] ^= 1;
          ps[4] ^= 1;
      }
      q = 0;
      for (a = 9; a >= 6; a--) {
          q = q * 3 + ps[a];
      }
      for (a = 4; a >= 0; a--) {
          q = q * 2 + ps[a];
      }
      return q;
  }
  function cycle3(arr, i1, i2, i3) {
      var c = arr[i1];
      arr[i1] = arr[i2];
      arr[i2] = arr[i3];
      arr[i3] = c;
  }
  var randomSource;
  var setRandomSource = function (src) {
      randomSource = src;
  };
  var getRandomScramble = function () {
      scramble();
      return { scramble_string: scramblestring[0] };
  };
  var initializeFull = function (continuation, iniRandomSource) {
      setRandomSource(iniRandomSource);
      calcperm();
      if (continuation) {
          setTimeout(continuation, 0);
      }
  };
  return {
      initialize: initializeFull,
      setRandomSource: setRandomSource,
      getRandomScramble: getRandomScramble
  };
}();
module.exports = scrambler;