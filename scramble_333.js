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

  var $gwt_version = "2.4.0";
  var $wnd = this;
  var randomcube;
  var $doc = $wnd.document;
  var $moduleName, $moduleBase;
  var $strongName = '8A83A3B7FFBB280B626B5D118BF2F1B8';
  var $stats = $wnd.__gwtStatsEvent ?
  function (a) {
      return $wnd.__gwtStatsEvent(a);
  } : null, $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
  $stats && $stats({
      moduleName: 'min2phase',
      sessionId: $sessionId,
      subSystem: 'startup',
      evtGroup: 'moduleStartup',
      millis: (new Date()).getTime(),
      type: 'moduleEvalStart'
  });
  
  function F() {}
  
  function J() {}
  
  function I() {}
  
  function H() {}
  
  function G() {}
  
  function M() {}
  
  function X() {}
  
  function S() {}
  
  function sf() {}
  
  function fb() {}
  
  function bb() {}
  
  function kb() {}
  
  function rb() {}
  
  function jb() {}
  
  function wb() {}
  
  function Ab() {}
  
  function xb() {}
  
  function Cb() {}
  
  function Bb() {}
  
  function vc() {}
  
  function uc() {}
  
  function bd() {}
  
  function je() {}
  
  function Qe() {}
  
  function Pe() {}
  
  function Re() {}
  
  function Te() {}
  
  function Ye() {}
  
  function $e() {}
  
  function ef() {}
  
  function kf() {}
  
  function _e(a) {}
  
  function Se() {
      db()
  }
  
  function Ue() {
      db()
  }
  
  function Ze() {
      db()
  }
  
  function yb(a, b) {
      a.b += b
  }
  
  function zb(a, b) {
      a.b += b
  }
  
  function We(a, b) {
      return a > b ? a : b
  }
  
  function Xe(a, b) {
      return a < b ? a : b
  }
  
  function Nb(a, b) {
      return a.cM && !! a.cM[b]
  }
  
  function Pb(a, b) {
      return a != null && Nb(a, b)
  }
  
  function Ve(a) {
      return Math.floor(a)
  }
  
  function bf(b, a) {
      return b.indexOf(a)
  }
  
  function hf() {
      this.b = new Ab
  }
  
  function U() {
      U = sf;
      T = new X
  }
  
  function Zd() {
      zd();
      Ad(this)
  }
  
  function gf(a, b) {
      zb(a.b, b);
      return a
  }
  
  function ff(a, b) {
      yb(a.b, b);
      return a
  }
  
  function eb() {
      try {
          null.a()
      } catch (a) {
          return a
      }
  }
  
  function jf() {
      return (new Date).getTime()
  }
  
  function cf(b, a) {
      return b.substr(a, b.length - a)
  }
  
  function O(a, b, c) {
      return a.apply(b, c);
      var d
  }
  
  function Fb(a, b, c, d, e, f) {
      return Gb(a, b, c, d, 0, e, f)
  }
  
  function ec(a) {
      if (Pb(a, 4)) {
          return a
      }
      return new L(a)
  }
  
  function L(a) {
      db();
      this.b = a;
      cb(new rb, this)
  }
  
  function Kb() {
      Kb = sf;
      Ib = [];
      Jb = [];
      Lb(new Cb, Ib, Jb)
  }
  
  function ae(a) {
      $d.call(this, a.c, a.b, a.e, a.d)
  }
  
  function jc(a, b) {
      return gc(a.l & b.l, a.m & b.m, a.h & b.h)
  }
  
  function oc(a, b) {
      return gc(a.l | b.l, a.m | b.m, a.h | b.h)
  }
  
  function nc(a, b) {
      return a.l != b.l || a.m != b.m || a.h != b.h
  }
  
  function Qb(a) {
      return a != null && a.tM != sf && !Nb(a, 1)
  }
  
  function gc(a, b, c) {
      return _ = new vc, _.l = a, _.m = b, _.h = c, _
  }
  
  function ie(a, b, c, d, e) {
      return oe(new pe, a, b, lc(c), d, e)
  }
  
  function Eb(a, b, c, d, e) {
      var f;
      f = Db(e, d);
      Hb(a, b, c, f);
      return f
  }
  
  function Hb(a, b, c, d) {
      Kb();
      Mb(d, Ib, Jb);
      d.cM = b;
      return d
  }
  
  function Y(a, b) {
      !a && (a = []);
      a[a.length] = b;
      return a
  }
  
  function ab(a, b) {
      a.length >= b && a.splice(0, b);
      return a
  }
  
  function Wd(a, b, c) {
      Yd(dd[md[b]], a, vd);
      Yd(vd, dd[b], c)
  }
  
  function be(a, b, c) {
      zd();
      ce(dd[md[b]], a, vd);
      ce(vd, dd[b], c)
  }
  
  function Mb(a, b, c) {
      Kb();
      for (var d = 0, e = b.length; d < e; ++d) {
          a[b[d]] = c[d]
      }
  }
  
  function Lb(a, b, c) {
      var d = 0,
          e;
      for (var f in a) {
          if (e = a[f]) {
              b[d] = f;
              c[d] = e;
              ++d
          }
      }
  }
  
  function R(a, b, c) {
      var d;
      d = P();
      try {
          return O(a, b, c)
      } finally {
          d && W((U(), T));
          --N
      }
  }
  
  function qb(a, b) {
      var c;
      c = lb(a, b);
      return c.length == 0 ? (new fb).J(b) : ab(c, 1)
  }
  
  function af(a, b) {
      if (b == null) {
          return false
      }
      return String(a) == b
  }
  
  function P() {
      if (N++ == 0) {
          V((U(), T));
          return true
      }
      return false
  }
  
  function Ob(a) {
      if (a != null && (a.tM == sf || Nb(a, 1))) {
          throw new Se
      }
      return a
  }
  
  function Rb(a) {
      return ~~Math.max(Math.min(a, 2147483647), -2147483648)
  }
  
  function Xc() {
      var a, b;
      a = new Zd;
      for (b = 0; b < 24; ++b) {
          Rd(a, b);
          Hc[Jd(a) % 24] = b
      }
  }
  
  function Gd(a) {
      var b, c;
      c = 0;
      for (b = 0; b < 11; ++b) {
          c = (c | a.d[b] << b) & 65535
      }
      return c
  }
  
  function Kd(a) {
      var b, c;
      c = 0;
      for (b = 0; b < 7; ++b) {
          c = c * 3 & 65535;
          c = c + a.b[b] & 65535
      }
      return c
  }
  
  function Md(a) {
      var b, c, d;
      c = 0;
      d = 4;
      for (b = 0; b < 12; ++b) {
          a.e[b] >= 8 && (c = c + (Ge(), te)[11 - b][d--])
      }
      return c
  }
  
  function pb(a) {
      var b;
      b = ab(qb(a, eb()), 3);
      b.length == 0 && (b = ab((new fb).H(), 1));
      return b
  }
  
  function V(a) {
      var b, c;
      if (a.b) {
          c = null;
          do {
              b = a.b;
              a.b = null;
              c = Z(b, c)
          } while (a.b);
          a.b = c
      }
  }
  
  function W(a) {
      var b, c;
      if (a.c) {
          c = null;
          do {
              b = a.c;
              a.c = null;
              c = Z(b, c)
          } while (a.c);
          a.c = c
      }
  }
  
  function Q(b) {
      return function () {
          try {
              return R(b, this, arguments)
          } catch (a) {
              throw a
          }
      }
  }
  
  function tc() {
      tc = sf;
      qc = gc(4194303, 4194303, 524287);
      rc = gc(0, 0, 524288);
      lc(1);
      lc(2);
      sc = lc(0)
  }
  
  function fc(a) {
      var b, c, d;
      b = a & 4194303;
      c = ~~a >> 22 & 4194303;
      d = a < 0 ? 1048575 : 0;
      return gc(b, c, d)
  }
  
  function Qd(a, b) {
      var c;
      a.d[11] = Je(b);
      for (c = 0; c < 11; ++c) {
          a.d[c] = ~~ ((b & 1) << 24) >> 24;
          b = ~~b >>> 1 & 65535
      }
  }
  
  function ce(a, b, c) {
      zd();
      var d;
      for (d = 0; d < 12; ++d) {
          c.e[d] = a.e[b.e[d]];
          c.d[d] = ~~ ((b.d[d] ^ a.d[b.e[d]]) << 24) >> 24
      }
  }
  
  function Xd(a, b, c) {
      zd();
      var d;
      for (d = 0; d < 8; ++d) {
          c.c[d] = a.c[b.c[d]];
          c.b[d] = ~~ ((a.b[b.c[d]] + b.b[d]) % 3 << 24) >> 24
      }
  }
  
  function Bd(a, b) {
      var c;
      for (c = 0; c < 8; ++c) {
          a.c[c] = b.c[c];
          a.b[c] = b.b[c]
      }
      for (c = 0; c < 12; ++c) {
          a.e[c] = b.e[c];
          a.d[c] = b.d[c]
      }
  }
  
  function lb(a, b) {
      var c, d, e;
      e = b && b.stack ? b.stack.split('\n') : [];
      for (c = 0, d = e.length; c < d; ++c) {
          e[c] = a.I(e[c])
      }
      return e
  }
  
  function db() {
      var a, b, c, d;
      c = pb(new rb);
      d = Eb(Zb, {}, 0, c.length, 0);
      for (a = 0, b = d.length; a < b; ++a) {
          d[a] = new _e(c[a])
      }
      K(d)
  }
  
  function K(a) {
      var b, c, d;
      c = Eb(Zb, {}, 0, a.length, 0);
      for (d = 0, b = a.length; d < b; ++d) {
          if (!a[d]) {
              throw new Ze
          }
          c[d] = a[d]
      }
  }
  
  function Fd(a) {
      var b, c, d, e;
      d = 1 << a.e[11];
      c = 0;
      for (b = 10; b >= 0; --b) {
          e = 1 << a.e[b];
          c += Ie(d & e - 1) * (Ge(), Ae)[11 - b];
          d |= e
      }
      return c
  }
  
  function Ke(a) {
      Ge();
      var b, c;
      c = 0;
      for (b = 10; b >= 0; --b) {
          c = ~~ (c + a % (12 - b) << 24) >> 24;
          a = ~~ (a / (12 - b))
      }
      c = ~~ ((c & 1) << 24) >> 24;
      return c
  }
  
  function Me(a) {
      Ge();
      var b, c;
      c = 0;
      for (b = 6; b >= 0; --b) {
          c = ~~ (c + a % (8 - b) << 24) >> 24;
          a = ~~ (a / (8 - b)) & 65535
      }
      c = ~~ ((c & 1) << 24) >> 24;
      return c
  }
  
  function Le(a) {
      var b, c;
      c = 0;
      for (b = 2; b >= 0; --b) {
          c = ~~ (c + a % (4 - b) << 24) >> 24;
          a = ~~ (~~ (a / (4 - b)) << 24) >> 24
      }
      c = ~~ ((c & 1) << 24) >> 24;
      return c
  }
  
  function Td(a, b) {
      var c, d;
      d = 0;
      for (c = 6; c >= 0; --c) {
          d = d + (a.b[c] = ~~ (b % 3 << 24) >> 24) & 65535;
          b = ~~ (b / 3) & 65535
      }
      a.b[7] = ~~ ((15 - d) % 3 << 24) >> 24
  }
  
  function Qc() {
      var a;
      for (a = 0; a < 2768; ++a) {
          zc[~~a >>> 3] = ~~ ((zc[~~a >>> 3] | Me((zd(), cd)[a]) << (a & 7)) << 24) >> 24
      }
  }
  
  function Vc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 24; ++c) {
          Rd(a, c);
          for (d = 0; d < 16; ++d) {
              be(a, (zd(), md)[d], b);
              Fc[c][d] = Id(b)
          }
      }
  }
  
  function Yc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 1320; ++c) {
          Sd(a, c);
          for (d = 0; d < 18; ++d) {
              ce(a, (zd(), ud)[d], b);
              Ic[c][d] = Jd(b)
          }
      }
  }
  
  function ad() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 495; ++c) {
          Ud(a, c);
          for (d = 0; d < 18; ++d) {
              ce(a, (zd(), ud)[d], b);
              Nc[c][d] = Md(b)
          }
      }
  }
  
  function Tc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 336; ++c) {
          Qd(a, (zd(), hd)[c]);
          for (d = 0; d < 18; ++d) {
              ce(a, ud[d], b);
              Cc[c][d] = Hd(b)
          }
      }
  }
  
  function $c() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 324; ++c) {
          Td(a, (zd(), rd)[c]);
          for (d = 0; d < 18; ++d) {
              Xd(a, ud[d], b);
              Kc[c][d] = Ld(b)
          }
      }
  }
  
  function $d(a, b, c, d) {
      var e;
      Ad(this);
      for (e = 0; e < 8; ++e) {
          this.c[e] = a[e];
          this.b[e] = b[e]
      }
      for (e = 0; e < 12; ++e) {
          this.e[e] = c[e];
          this.d[e] = d[e]
      }
  }
  
  function _d(a, b, c, d) {
      zd();
      Ad(this);
      he(this.c, a & 65535);
      Td(this, b & 65535);
      Pd(this, c);
      Qd(this, d & 65535)
  }
  
  function gwtOnLoad(callback, b, c, d, e) {
      $moduleName = c;
      $moduleBase = d;
      if (b) try {
          vf(dc)()
      } catch (a) {
          b(c)
      } else {
          vf(dc)()
      }
      if (callback) {
        setTimeout(callback, 0);
      }
  }
  
  function ic(a, b) {
      var c, d, e;
      c = a.l + b.l;
      d = a.m + b.m + (~~c >> 22);
      e = a.h + b.h + (~~d >> 22);
      return gc(c & 4194303, d & 4194303, e & 1048575)
  }
  
  function Id(a) {
      var b, c, d, e;
      d = 1 << a.e[11];
      c = 0;
      for (b = 10; b >= 8; --b) {
          e = 1 << a.e[b];
          c += Ie(d & e - 1) * (Ge(), Ae)[11 - b];
          d |= e
      }
      return ~~ (c << 24) >> 24
  }
  
  function de(a) {
      zd();
      var b, c, d, e;
      c = 0;
      e = 1985229328;
      for (b = 0; b < 7; ++b) {
          d = a[b] << 2;
          c = (8 - b) * c + (~~e >> d & 7);
          e -= 286331152 << d
      }
      return c & 65535
  }
  
  function Rc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 2768; ++c) {
          he(a.c, (zd(), cd)[c]);
          for (d = 0; d < 18; ++d) {
              Xd(a, ud[d], b);
              Ac[c][d] = Cd(b)
          }
      }
  }
  
  function Wc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 24; ++c) {
          Rd(a, c);
          for (d = 0; d < 10; ++d) {
              ce(a, (zd(), ud)[(Ge(), Fe)[d]], b);
              Gc[c][d] = Id(b)
          }
      }
  }
  
  function Sc() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 2768; ++c) {
          he(a.e, (zd(), fd)[c]);
          for (d = 0; d < 10; ++d) {
              ce(a, ud[(Ge(), Fe)[d]], b);
              Bc[c][d] = Ed(b)
          }
      }
  }
  
  function _c() {
      var a, b, c, d;
      a = new Zd;
      b = new Zd;
      for (c = 0; c < 495; ++c) {
          Ud(a, c);
          for (d = 0; d < 16; d = d + 2 & 65535) {
              be(a, (zd(), md)[d], b);
              Lc[c][~~d >>> 1] = Md(b)
          }
      }
  }
  
  function Ie(a) {
      Ge();
      a = a - (~~a >>> 1 & 1431655765);
      a = (a & 858993459) + (~~a >>> 2 & 858993459);
      return a + (~~a >>> 8) + (~~a >>> 4) & 15
  }
  
  function Je(a) {
      Ge();
      a = (a ^ ~~a >>> 1) & 65535;
      a = (a ^ ~~a >>> 2) & 65535;
      a = (a ^ ~~a >>> 4) & 65535;
      a = (a ^ ~~a >>> 8) & 65535;
      return ~~ ((a & 1) << 24) >> 24
  }
  
  function lc(a) {
      var b, c;
      if (a > -129 && a < 128) {
          b = a + 128;
          hc == null && (hc = Eb(Xb, {}, 0, 256, 0));
          c = hc[b];
          !c && (c = hc[b] = fc(a));
          return c
      }
      return fc(a)
  }
  
  function cb(a, b) {
      var c, d, e, f;
      e = qb(a, Qb(b.b) ? Ob(b.b) : null);
      f = Eb(Zb, {}, 0, e.length, 0);
      for (c = 0, d = f.length; c < d; ++c) {
          f[c] = new _e(e[c])
      }
      K(f)
  }
  
  function df(c) {
      if (c.length == 0 || c[0] > Df && c[c.length - 1] > Df) {
          return c
      }
      var a = c.replace(/^(\s*)/, wf);
      var b = a.replace(/\s*$/, wf);
      return b
  }
  
  function $(a) {
      var b, c, d;
      d = wf;
      a = df(a);
      b = a.indexOf(xf);
      if (b != -1) {
          c = a.indexOf('function') == 0 ? 8 : 0;
          d = df(a.substr(c, b - c))
      }
      return d.length > 0 ? d : yf
  }
  
  function se() {
      var a, b, c;
      c = new rf;
      do {
          b = pf(c, 479001600);
          a = pf(c, 40320) & 65535
      } while ((Me(a) ^ Ke(b)) != 0);
      return Oe(new _d(a, pf(c, 2187), b, pf(c, 2048)));
  }
  
  function Pd(a, b) {
      var c, d;
      a.e[11] = 0;
      for (c = 10; c >= 0; --c) {
          a.e[c] = ~~ (b % (12 - c) << 24) >> 24;
          b = ~~ (b / (12 - c));
          for (d = c + 1; d < 12; ++d) {
              a.e[d] >= a.e[c] && ++a.e[d]
          }
      }
  }
  
  function Rd(a, b) {
      var c, d;
      a.e[11] = 8;
      for (c = 10; c >= 8; --c) {
          a.e[c] = ~~ (b % (12 - c) + 8 << 24) >> 24;
          b = ~~ (~~ (b / (12 - c)) << 24) >> 24;
          for (d = c + 1; d < 12; ++d) {
              a.e[d] >= a.e[c] && ++a.e[d]
          }
      }
  }
  
  function Ud(a, b) {
      var c, d;
      d = 4;
      for (c = 0; c < 12; ++c) {
          if (b >= (Ge(), te)[11 - c][d]) {
              b = b - te[11 - c][d--];
              a.e[c] = ~~ (11 - d << 24) >> 24
          } else {
              a.e[c] = ~~ (c + d - 4 << 24) >> 24
          }
      }
  }
  
  function Sd(a, b) {
      var c, d, e;
      c = (Ge(), De)[b % 6];
      b = ~~ (b / 6) & 65535;
      e = 3;
      for (d = 11; d >= 0; --d) {
          if (b >= te[d][e]) {
              b = b - te[d][e--];
              a.e[d] = c[2 - e]
          } else {
              a.e[d] = ~~ (8 - d + e << 24) >> 24
          }
      }
  }
  
  function Z(b, c) {
      var a, d, e, f;
      for (d = 0, e = b.length; d < e; ++d) {
          f = b[d];
          try {
              f[1] ? f[0].L() && (c = Y(c, f)) : f[0].L()
          } catch (a) {
              a = ec(a);
              if (!Pb(a, 3)) throw a
          }
      }
      return c
  }
  
  function pf(a, b) {
      var c, d;
      if (b > 0) {
          if ((b & -b) == b) {
              return Rb(b * qf(a) * 4.6566128730773926E-10)
          }
          do {
              c = qf(a);
              d = c % b
          } while (c - d + (b - 1) < 0);
          return Rb(d)
      }
      throw new Ue
  }
  
  function Ed(a) {
      var b, c;
      if (ed != null) {
          return ed[de(a.e)]
      }
      for (c = 0; c < 16; ++c) {
          be(a, md[c], a.f);
          b = He(fd, de(a.f.e));
          if (b != 65535) {
              return (b << 4 | c) & 65535
          }
      }
      return 0
  }
  
  function Hd(a) {
      var b, c;
      if (gd != null) {
          return gd[Gd(a)]
      }
      for (c = 0; c < 16; c = c + 2 & 65535) {
          be(a, md[c], a.f);
          b = He(hd, Gd(a.f));
          if (b != 65535) {
              return (b << 3 | ~~c >>> 1) & 65535
          }
      }
      return 0
  }
  
  function Ld(a) {
      var b, c;
      if (qd != null) {
          return qd[Kd(a)]
      }
      for (c = 0; c < 16; c = c + 2 & 65535) {
          Wd(a, md[c], a.f);
          b = Kd(a.f);
          b = He(rd, b);
          if (b != 65535) {
              return (b << 3 | ~~c >>> 1) & 65535
          }
      }
      return 0
  }
  
  function Cd(a) {
      var b, c;
      if (ed != null) {
          b = ed[de(a.c)];
          b = (b ^ sd[b & 15]) & 65535;
          return b
      }
      for (c = 0; c < 16; ++c) {
          Wd(a, md[c], a.f);
          b = He(cd, de(a.f.c));
          if (b != 65535) {
              return (b << 4 | c) & 65535
          }
      }
      return 0
  }
  
  function Gb(a, b, c, d, e, f, g) {
      var i, j, k, n;
      k = d[e];
      j = e == f - 1;
      n = Db(j ? g : 0, k);
      Kb();
      Mb(n, Ib, Jb);
      n.cM = b[e];
      if (!j) {
          ++e;
          for (i = 0; i < k; ++i) {
              n[i] = Gb(a, b, c, d, e, f, g)
          }
      }
      return n
  }
  
  function rf() {
      of();
      var a, b, c;
      c = nf+++(new Date).getTime();
      a = Rb(Math.floor(c * 5.9604644775390625E-8)) & 16777215;
      b = Rb(c - a * 16777216);
      this.b = a ^ 1502;
      this.c = b ^ 15525485
  }
  
  function of() {
      of = sf;
      var a, b, c;
      lf = Eb(Ub, {}, -1, 25, 1);
      mf = Eb(Ub, {}, -1, 33, 1);
      c = 1.52587890625E-5;
      for (a = 32; a >= 0; --a) {
          mf[a] = c;
          c *= 0.5
      }
      b = 1;
      for (a = 24; a >= 0; --a) {
          lf[a] = b;
          b *= 0.5
      }
  }
  
  function He(a, b) {
      Ge();
      var c, d, e, f, g;
      d = a.length;
      if (b <= a[d - 1]) {
          c = 0;
          f = d - 1;
          while (c <= f) {
              e = ~~ (c + f) >>> 1;
              g = a[e];
              if (b > g) {
                  c = e + 1
              } else if (b < g) {
                  f = e - 1
              } else {
                  return e & 65535
              }
          }
      }
      return 65535
  }
  
  function Ad(a) {
      a.c = Hb(Sb, {}, -1, [0, 1, 2, 3, 4, 5, 6, 7]);
      a.b = Hb(Sb, {}, -1, [0, 0, 0, 0, 0, 0, 0, 0]);
      a.e = Hb(Sb, {}, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
      a.d = Hb(Sb, {}, -1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }
  
  function Jd(a) {
      var b, c, d, e, f, g;
      c = 0;
      d = 0;
      e = 0;
      f = 3;
      for (b = 11; b >= 0; --b) {
          if (a.e[b] >= 9) {
              c = c + (Ge(), te)[b][f--];
              g = 1 << a.e[b];
              d = d + Ie(e & g - 1) * Ae[2 - f] & 65535;
              e = (e | g) & 65535
          }
      }
      return c * 6 + d & 65535
  }
  
  function Nd(a) {
      var b, c, d, e, f, g;
      c = 0;
      d = 0;
      e = 0;
      f = 3;
      for (b = 11; b >= 0; --b) {
          if (a.e[b] <= 2) {
              c = c + (Ge(), te)[b][f--];
              g = 1 << a.e[b];
              d = d + Ie(e & g - 1) * Ae[2 - f] & 65535;
              e = (e | g) & 65535
          }
      }
      return c * 6 + d & 65535
  }
  
  function Dd(a) {
      var b, c, d, e, f, g;
      c = 0;
      d = 0;
      e = 0;
      f = 3;
      for (b = 11; b >= 0; --b) {
          if (4 <= a.e[b] && a.e[b] <= 6) {
              c = c + (Ge(), te)[b][f--];
              g = 1 << a.e[b];
              d = d + Ie(e & g - 1) * Ae[2 - f] & 65535;
              e = (e | g) & 65535
          }
      }
      return c * 6 + d & 65535
  }
  
  function Db(a, b) {
      var c = new Array(b);
      if (a == 3) {
          for (var d = 0; d < b; ++d) {
              var e = new Object;
              e.l = e.m = e.h = 0;
              c[d] = e
          }
      } else if (a > 0) {
          var e = [null, 0, false][a];
          for (var d = 0; d < b; ++d) {
              c[d] = e
          }
      }
      return c
  }
  
  function Yd(a, b, c) {
      zd();
      var d, e, f, g;
      for (d = 0; d < 8; ++d) {
          c.c[d] = a.c[b.c[d]];
          f = a.b[b.c[d]];
          g = b.b[d];
          e = f;
          e = ~~ (e + (f < 3 ? g : 3 - g) << 24) >> 24;
          e = ~~ (e % 3 << 24) >> 24;
          f < 3 ^ g < 3 && (e = ~~ (e + 3 << 24) >> 24);
          c.b[d] = e
      }
  }
  
  function wc(a) {
      return $stats({
          moduleName: $moduleName,
          sessionId: $sessionId,
          subSystem: 'startup',
          evtGroup: 'moduleStartup',
          millis: (new Date).getTime(),
          type: 'onModuleLoadStart',
          className: a
      })
  }
  
  function mc(a, b) {
      var c, d;
      c = ~~a.h >> 19;
      d = ~~b.h >> 19;
      return c == 0 ? d != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l : !(d == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l)
  }
  
  function he(a, b) {
      zd();
      var c, d, e, f, g;
      g = 1985229328;
      for (c = 0; c < 7; ++c) {
          e = (Ge(), Ae)[7 - c];
          f = ~~ (b / e);
          b = b - f * e & 65535;
          f <<= 2;
          a[c] = ~~ ((~~g >> f & 7) << 24) >> 24;
          d = (1 << f) - 1;
          g = (g & d) + (~~g >> 4 & ~d)
      }
      a[7] = ~~ (g << 24) >> 24
  }
  
  function re() {
      if (qe) return;
      zd();
      gd = Eb(Tb, {}, -1, 2048, 1);
      qd = Eb(Tb, {}, -1, 2187, 1);
      ed = Eb(Tb, {}, -1, 40320, 1);
      ge();
      Pc();
      Rc();
      Sc();
      Tc();
      $c();
      ed = null;
      gd = null;
      qd = null;
      ad();
      _c();
      Yc();
      Xc();
      Qc();
      Wc();
      Vc();
      Zc();
      Uc();
      qe = true
  }
  
  function pc(a, b) {
      var c, d, e;
      b &= 63;
      if (b < 22) {
          c = a.l << b;
          d = a.m << b | ~~a.l >> 22 - b;
          e = a.h << b | ~~a.m >> 22 - b
      } else if (b < 44) {
          c = 0;
          d = a.l << b - 22;
          e = a.m << b - 22 | ~~a.l >> 44 - b
      } else {
          c = 0;
          d = 0;
          e = a.l << b - 44
      }
      return gc(c & 4194303, d & 4194303, e & 1048575)
  }
  
  function qf(a) {
      var b, c, d, e, f, g;
      e = a.b * 15525485 + a.c * 1502;
      g = a.c * 15525485 + 11;
      b = Math.floor(g * 5.9604644775390625E-8);
      e += b;
      g -= b * 16777216;
      e %= 16777216;
      a.b = e;
      a.c = g;
      d = a.b * 128;
      f = Ve(a.c * mf[31]);
      c = d + f;
      c >= 2147483648 && (c -= 4294967296);
      return c
  }
  
  function Od(a) {
      var b, c, d;
      for (c = 0; c < 12; ++c) a.f.e[a.e[c]] = c;
      for (c = 0; c < 12; ++c) a.f.d[c] = a.d[a.f.e[c]];
      for (b = 0; b < 8; ++b) a.f.c[a.c[b]] = b;
      for (b = 0; b < 8; ++b) {
          d = a.b[a.f.c[b]];
          a.f.b[b] = -d;
          a.f.b[b] < 0 && (a.f.b[b] = ~~ (a.f.b[b] + 3 << 24) >> 24)
      }
      Bd(a, a.f)
  }
  
  function Vd(a) {
      var b, c, d, e, f, g;
      g = 0;
      e = 0;
      for (d = 0; d < 12; ++d) e = (e | 1 << a.e[d]) & 65535;
      if (e != 4095) return -2;
      for (f = 0; f < 12; ++f) g = g ^ a.d[f];
      if (g % 2 != 0) return -3;
      c = 0;
      for (b = 0; b < 8; ++b) c = (c | 1 << a.c[b]) & 65535;
      if (c != 255) return -4;
      g = 0;
      for (f = 0; f < 8; ++f) g = g + a.b[f];
      if (g % 3 != 0) return -5;
      if ((Ke(Fd(a)) ^ Me(de(a.c))) != 0) return -6;
      return 0
  }
  
  function Oe(a) {
      Ge();
      var b, c, d, e, f, g, i, j;
      d = Eb(Tb, {}, -1, 54, 1);
      j = Hb(Tb, {}, -1, [85, 82, 70, 68, 76, 66]);
      for (e = 0; e < 54; ++e) {
          d[e] = j[~~ (e / 9)]
      }
      for (b = 0; b < 8; ++b) {
          f = a.c[b];
          i = a.b[b];
          for (g = 0; g < 3; ++g) d[xe[b][(g + i) % 3]] = j[we[f][g]]
      }
      for (c = 0; c < 12; ++c) {
          f = a.e[c];
          i = a.d[c];
          for (g = 0; g < 2; ++g) d[ze[c][(g + i) % 2]] = j[ye[f][g]]
      }
      return String.fromCharCode.apply(null, d)
  }
  
  function ee() {
      var a, b, c;
      b = Eb(Yb, {}, 0, 18, 0);
      ud = Hb(Yb, {}, 0, [new _d(15120, 0, 119750400, 0), new _d(21021, 1494, 323403417, 0), new _d(8064, 1236, 29441808, 802), new _d(9, 0, 5880, 0), new _d(1230, 412, 2949660, 0), new _d(224, 137, 328552, 1160)]);
      for (a = 0; a < 6; ++a) {
          b[a * 3] = ud[a];
          for (c = 0; c < 2; ++c) {
              b[a * 3 + c + 1] = new Zd;
              ce(b[a * 3 + c], ud[a], b[a * 3 + c + 1]);
              Xd(b[a * 3 + c], ud[a], b[a * 3 + c + 1])
          }
      }
      ud = b
  }
  
  function ne(a, b, c, d, e, f, g, i, j) {
      var k, n, o, p, q, r;
      if (b == 0 && d == 0 && f == 0) {
          return true
      }
      for (q = 0; q < 10; ++q) {
          if ((Ge(), ve)[j][q]) {
              continue
          }
          r = (Pc(), Gc)[f][q];
          o = Bc[b][(zd(), od)[c][q]];
          p = pd[o & 15][c];
          o >>>= 4;
          if (Ec[o * 24 + Fc[r][p]] >= g) {
              continue
          }
          k = Ac[d][nd[e][Fe[q]]];
          n = pd[k & 15][e];
          k >>>= 4;
          if (Dc[k * 24 + Fc[r][n]] >= g) {
              continue
          }
          a.v[i] = Fe[q];
          if (ne(a, o, p, k, n, r, g - 1, i + 1, q)) {
              return true
          }
      }
      return false
  }
  
  function me(a, b, c, d, e, f, g, i) {
      var j, k, n, o, p, q;
      if (b == 0 && d == 0 && f == 0 && g < 5) {
          return g == 0 && le(a)
      }
      for (n = 0; n < 18; ++n) {
          if ((Ge(), ue)[i][n]) {
              n += 2;
              continue
          }
          o = (Pc(), Nc)[f][n];
          q = Kc[b][(zd(), jd)[c][n]];
          p = kd[q & 7][c];
          q >>>= 3;
          if (Oc[q * 495 + Lc[o][p]] >= g) {
              continue
          }
          j = Cc[d][jd[e][n]];
          k = kd[j & 7][e];
          j >>>= 3;
          if (Jc[q * 2688 + (j << 3 | ld[k][p])] >= g || Mc[j * 495 + Lc[o][k]] >= g) {
              continue
          }
          a.v[a.r - g] = n;
          a.F = Xe(a.F, a.r - g);
          if (me(a, q, p, j, k, o, g - 1, n)) {
              return true
          }
      }
      return false
  }
  
  function kc(a) {
      var b, c, d, e, f, g, i, j;
      if (isNaN(a)) {
          return tc(), sc
      }
      if (a < -9223372036854775808) {
          return tc(), rc
      }
      if (a >= 9223372036854775807) {
          return tc(), qc
      }
      e = false;
      if (a < 0) {
          e = true;
          a = -a
      }
      d = 0;
      if (a >= 17592186044416) {
          d = Rb(a / 17592186044416);
          a -= d * 17592186044416
      }
      c = 0;
      if (a >= 4194304) {
          c = Rb(a / 4194304);
          a -= c * 4194304
      }
      b = Rb(a);
      f = gc(b, c, d);
      e && (g = ~f.l + 1 & 4194303, i = ~f.m + (g == 0 ? 1 : 0) & 4194303, j = ~f.h + (g == 0 && i == 0 ? 1 : 0) & 1048575, f.l = g, f.m = i, f.h = j, undefined);
      return f
  }
  
  function dc() {
      var a; !! $stats && wc('com.google.gwt.user.client.UserAgentAsserter');
      a = yc();
      af(zf, a) || ($wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + a + '). Expect more errors.\n'), undefined); !! $stats && wc('com.google.gwt.user.client.DocumentModeAsserter');
      xc(); !! $stats && wc('cs.min2phase.client.Min2phase');
      re();
      randomcube = vf(se);
      $wnd.solve = vf(ie)
  }
  
  function pe() {
      this.v = Eb(Vb, {}, -1, 31, 1);
      this.b = Eb(Vb, {}, -1, 20, 1);
      this.e = Eb(Vb, {}, -1, 20, 1);
      this.t = Eb(Vb, {}, -1, 20, 1);
      this.g = Eb(Vb, {}, -1, 20, 1);
      this.j = Eb(Vb, {}, -1, 20, 1);
      this.C = Eb(Vb, {}, -1, 6, 1);
      this.B = Eb(Vb, {}, -1, 6, 1);
      this.o = Eb(Vb, {}, -1, 6, 1);
      this.p = Eb(Vb, {}, -1, 6, 1);
      this.x = Eb(Vb, {}, -1, 6, 1);
      this.c = Eb(Vb, {}, -1, 6, 1);
      this.f = Eb(Vb, {}, -1, 6, 1);
      this.u = Eb(Vb, {}, -1, 6, 1);
      this.i = Eb(Vb, {}, -1, 6, 1);
      this.k = Eb(Vb, {}, -1, 6, 1);
      this.w = Eb(Vb, {}, -1, 6, 1);
      this.d = Eb(Vb, {}, -1, 6, 1);
      this.n = Eb(Sb, {}, -1, 54, 1)
  }
  
  function oe(b, c, d, e, f, g) {
      var a, i, j, k;
      re();
      for (j = 0; j < 6; b.d[j++] = 0);
      try {
          for (j = 0; j < 54; ++j) {
              switch (c.charCodeAt(j)) {
              case 85:
                  b.n[j] = 0;
                  break;
              case 82:
                  b.n[j] = 1;
                  break;
              case 70:
                  b.n[j] = 2;
                  break;
              case 68:
                  b.n[j] = 3;
                  break;
              case 76:
                  b.n[j] = 4;
                  break;
              case 66:
                  b.n[j] = 5;
                  break;
              default:
                  return Ff;
              }++b.d[b.n[j]]
          }
      } catch (a) {
          a = ec(a);
          if (Pb(a, 2)) {
              return Ff
          } else throw a
      }
      for (j = 0; j < 6; ++j) if (b.d[j] != 9) {
          return Ff
      }
      i = Ne(b.n);
      if ((k = Vd(i)) != 0) return 'Error ' + (k < 0 ? -k : k);
      b.E = f;
      b.q = g;
      b.A = ic(kc(jf()), e);
      b.y = d + 1;
      return ke(b, i)
  }
  
  function Ne(a) {
      Ge();
      var b, c, d, e, f, g;
      b = new Zd;
      for (e = 0; e < 8; ++e) b.c[e] = 0;
      for (e = 0; e < 12; ++e) b.e[e] = 0;
      for (e = 0; e < 8; ++e) {
          for (g = 0; g < 3; ++g) if (a[xe[e][g]] == 0 || a[xe[e][g]] == 3) break;
          c = a[xe[e][(g + 1) % 3]];
          d = a[xe[e][(g + 2) % 3]];
          for (f = 0; f < 8; ++f) {
              if (c == we[f][1] && d == we[f][2]) {
                  b.c[e] = f;
                  b.b[e] = ~~ (g % 3 << 24) >> 24;
                  break
              }
          }
      }
      for (e = 0; e < 12; ++e) {
          for (f = 0; f < 12; ++f) {
              if (a[ze[e][0]] == ye[f][0] && a[ze[e][1]] == ye[f][1]) {
                  b.e[e] = f;
                  b.d[e] = 0;
                  break
              }
              if (a[ze[e][0]] == ye[f][1] && a[ze[e][1]] == ye[f][0]) {
                  b.e[e] = f;
                  b.d[e] = 1;
                  break
              }
          }
      }
      return b
  }
  
  function Pc() {
      Pc = sf;
      Nc = Fb([bc, Tb], [{}, {}], [0, -1], [495, 18], 2, 1);
      Kc = Fb([bc, Tb], [{}, {}], [0, -1], [324, 18], 2, 1);
      Cc = Fb([bc, Tb], [{}, {}], [0, -1], [336, 18], 2, 1);
      Lc = Fb([bc, Tb], [{}, {}], [0, -1], [495, 8], 2, 1);
      Oc = Eb(Sb, {}, -1, 160380, 1);
      Mc = Eb(Sb, {}, -1, 166320, 1);
      Jc = Eb(Sb, {}, -1, 870912, 1);
      Ic = Fb([bc, Tb], [{}, {}], [0, -1], [1320, 18], 2, 1);
      Hc = Eb(Sb, {}, -1, 24, 1);
      zc = Eb(Sb, {}, -1, 346, 1);
      Ac = Fb([bc, Tb], [{}, {}], [0, -1], [2768, 18], 2, 1);
      Bc = Fb([bc, Tb], [{}, {}], [0, -1], [2768, 10], 2, 1);
      Gc = Fb([ac, Sb], [{}, {}], [0, -1], [24, 10], 2, 1);
      Fc = Fb([ac, Sb], [{}, {}], [0, -1], [24, 16], 2, 1);
      Dc = Eb(Sb, {}, -1, 66432, 1);
      Ec = Eb(Sb, {}, -1, 66432, 1)
  }
  
  function ke(a, b) {
      var c;
      b.f = new Zd;
      for (c = 0; c < 6; ++c) {
          a.C[c] = Ld(b);
          a.B[c] = a.C[c] & 7;
          a.C[c] >>>= 3;
          a.o[c] = Hd(b);
          a.p[c] = a.o[c] & 7;
          a.o[c] >>>= 3;
          a.x[c] = Md(b);
          a.c[c] = Cd(b);
          a.f[c] = a.c[c] & 15;
          a.c[c] >>>= 4;
          a.u[c] = Jd(b);
          a.i[c] = Nd(b);
          a.k[c] = Dd(b);
          a.w[c] = We(We((Pc(), Oc)[a.C[c] * 495 + Lc[a.x[c]][a.B[c]]], Mc[a.o[c] * 495 + Lc[a.x[c]][a.p[c]]]), Jc[a.C[c] * 2688 + (a.o[c] << 3 | (zd(), ld)[a.p[c]][a.B[c]])]);
          Xd(xd, b, b.f);
          Xd(b.f, wd, b);
          ce(xd, b, b.f);
          ce(b.f, wd, b);
          c == 2 && Od(b)
      }
      a.z = null;
      for (a.r = 0; a.r < a.y; ++a.r) {
          a.s = Xe(~~ (a.y / 2) + 1, a.y - a.r);
          for (a.D = 0; a.D < 6; ++a.D) {
              a.b[0] = a.c[a.D];
              a.e[0] = a.f[a.D];
              a.t[0] = a.u[a.D];
              a.g[0] = a.i[a.D];
              a.j[0] = a.k[a.D];
              if (a.w[a.D] <= a.r && me(a, a.C[a.D], a.B[a.D], a.o[a.D], a.p[a.D], a.x[a.D], a.r, 18)) {
                  return a.z == null ? 'Error 8' : a.z
              }
          }
      }
      return 'Error 7'
  }
  
  function yc() {
      var c = navigator.userAgent.toLowerCase();
      var d = function (a) {
              return parseInt(a[1]) * 1000 + parseInt(a[2])
          };
      if (function () {
          return c.indexOf(Bf) != -1
      }()) return Bf;
      if (function () {
          return c.indexOf('webkit') != -1 ||
          function () {
              if (c.indexOf('chromeframe') != -1) {
                  return true
              }
              if (typeof window['ActiveXObject'] != 'undefined') {
                  try {
                      var b = new ActiveXObject('ChromeTab.ChromeFrame');
                      if (b) {
                          b.registerBhoIfNeeded();
                          return true
                      }
                  } catch (a) {}
              }
              return false
          }()
      }()) return zf;
      if (function () {
          return c.indexOf(Cf) != -1 && $doc.documentMode >= 9
      }()) return 'ie9';
      if (function () {
          return c.indexOf(Cf) != -1 && $doc.documentMode >= 8
      }()) return 'ie8';
      if (function () {
          var a = /msie ([0-9]+)\.([0-9]+)/.exec(c);
          if (a && a.length == 3) return d(a) >= 6000
      }()) return 'ie6';
      if (function () {
          return c.indexOf('gecko') != -1
      }()) return 'gecko1_8';
      return 'unknown'
  }
  
  function xc() {
    /*
      var a, b, c;
      b = $doc.compatMode;
      a = Hb($b, {}, 1, [Af]);
      for (c = 0; c < a.length; ++c) {
          if (af(a[c], b)) {
              return
          }
      }
      a.length == 1 && af(Af, a[0]) && af('BackCompat', b) ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + b + '"/&gt;' : "Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + b + "').<br>Modify your application's host HTML page doctype, or update your custom 'document.compatMode' configuration property settings."
      */
  }
  
  function zd() {
      zd = sf;
      vd = new Zd;
      dd = Eb(Yb, {}, 0, 16, 0);
      md = Eb(Sb, {}, -1, 16, 1);
      pd = Fb([ac, Sb], [{}, {}], [0, -1], [16, 16], 2, 1);
      nd = Fb([ac, Sb], [{}, {}], [0, -1], [16, 18], 2, 1);
      kd = Fb([ac, Sb], [{}, {}], [0, -1], [8, 8], 2, 1);
      jd = Fb([ac, Sb], [{}, {}], [0, -1], [8, 18], 2, 1);
      ld = Fb([ac, Sb], [{}, {}], [0, -1], [8, 8], 2, 1);
      od = Fb([ac, Sb], [{}, {}], [0, -1], [16, 10], 2, 1);
      hd = Eb(Tb, {}, -1, 336, 1);
      rd = Eb(Tb, {}, -1, 324, 1);
      cd = Eb(Tb, {}, -1, 2768, 1);
      fd = cd;
      id = Eb(Tb, {}, -1, 40320, 1);
      td = Fb([ac, Sb], [{}, {}], [0, -1], [56, 56], 2, 1);
      sd = Hb(Sb, {}, -1, [0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 3, 0, 0, 0, 0]);
      wd = new _d(2531, 1373, 67026819, 1877);
      xd = new _d(2089, 1906, 322752913, 255);
      yd = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), Hb(Sb, {}, -1, [6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10, 11, 12, 13, 14]), Hb(Sb, {}, -1, [3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16, 17, 9, 10, 11]), Hb(Sb, {}, -1, [2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13, 12, 17, 16, 15]), Hb(Sb, {}, -1, [8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10, 9, 14, 13, 12]), Hb(Sb, {}, -1, [5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16, 15, 11, 10, 9])]);
      ee();
      fe()
  }
  
  function ge() {
      var a, b, c, d, e, f, g, i, j, k, n, o;
      c = new Zd;
      e = new Zd;
      n = Eb(Vb, {}, -1, 1260, 1);
      d = 0;
      for (f = 0; f < 64; n[f++] = 0);
      for (f = 0; f < 2048; ++f) {
          if ((n[~~f >>> 5] & 1 << (f & 31)) == 0) {
              Qd(c, f);
              for (o = 0; o < 16; o = ~~ (o + 2 << 24) >> 24) {
                  ce(dd[md[o]], c, vd);
                  ce(vd, dd[o], e);
                  g = Gd(e);
                  n[~~g >>> 5] |= 1 << (g & 31);
                  gd[g] = (d << 3 | ~~o >>> 1) & 65535
              }
              hd[d++] = f
          }
      }
      d = 0;
      for (f = 0; f < 69; n[f++] = 0);
      for (f = 0; f < 2187; ++f) {
          if ((n[~~f >>> 5] & 1 << (f & 31)) == 0) {
              Td(c, f);
              for (o = 0; o < 16; o = ~~ (o + 2 << 24) >> 24) {
                  Yd(dd[md[o]], c, vd);
                  Yd(vd, dd[o], e);
                  g = Kd(e);
                  n[~~g >>> 5] |= 1 << (g & 31);
                  qd[g] = (d << 3 | ~~o >>> 1) & 65535
              }
              rd[d++] = f
          }
      }
      k = Eb(Wb, {}, -1, 56, 3);
      for (f = 0; f < 40320; ++f) {
          he(c.e, f);
          a = ~~ (Nd(c) / 6);
          b = ~~ (Dd(c) / 6);
          k[a] = oc(k[a], pc(tf, b))
      }
      for (f = 0; f < 56; ++f) {
          d = 0;
          for (i = 0; i < 56; ++i) {
              nc(jc(k[f], pc(tf, i)), uf) && (td[f][i] = ~~ (d++ << 24) >> 24)
          }
      }
      d = 0;
      for (f = 0; f < 1260; n[f++] = 0);
      for (f = 0; f < 40320; ++f) {
          if ((n[~~f >>> 5] & 1 << (f & 31)) == 0) {
              he(c.e, f);
              for (o = 0; o < 16; ++o) {
                  ce(dd[md[o]], c, vd);
                  ce(vd, dd[o], e);
                  g = de(e.e);
                  n[~~g >>> 5] |= 1 << (g & 31);
                  a = Nd(e);
                  b = Dd(e);
                  j = td[~~ (a / 6)][~~ (b / 6)] * 4032 + a * 12 + b % 6 * 2 + Me(g) & 65535;
                  id[j] = (d << 4 | o) & 65535;
                  ed[g] = (d << 4 | o) & 65535
              }
              fd[d++] = f
          }
      }
  }
  
  function fe() {
      var a, b, c, d, e, f, g, i, j, k, n;
      a = new Zd;
      b = new Zd;
      c = new _d(28783, 0, 259268407, 0);
      n = new _d(15138, 0, 119765538, 1792);
      g = new _d(5167, 0, 83473207, 0);
      g.b = Hb(Sb, {}, -1, [3, 3, 3, 3, 3, 3, 3, 3]);
      for (d = 0; d < 16; ++d) {
          dd[d] = new ae(a);
          Yd(a, n, b);
          ce(a, n, b);
          k = b;
          b = a;
          a = k;
          if (d % 4 == 3) {
              Yd(k, g, b);
              ce(k, g, b);
              k = b;
              b = a;
              a = k
          }
          if (d % 8 == 7) {
              Yd(k, c, b);
              ce(k, c, b);
              k = b;
              b = a;
              a = k
          }
      }
      for (e = 0; e < 16; ++e) {
          for (f = 0; f < 16; ++f) {
              Yd(dd[e], dd[f], a);
              if (a.c[0] == 0 && a.c[1] == 1 && a.c[2] == 2) {
                  md[e] = f;
                  break
              }
          }
      }
      for (d = 0; d < 16; ++d) {
          for (e = 0; e < 16; ++e) {
              Yd(dd[d], dd[e], a);
              for (f = 0; f < 16; ++f) {
                  if (dd[f].c[0] == a.c[0] && dd[f].c[1] == a.c[1] && dd[f].c[2] == a.c[2]) {
                      pd[d][e] = f;
                      break
                  }
              }
          }
      }
      for (e = 0; e < 18; ++e) {
          for (j = 0; j < 16; ++j) {
              Wd(ud[e], md[j], a);
              o: for (i = 0; i < 18; ++i) {
                  for (d = 0; d < 8; ++d) {
                      if (a.c[d] != ud[i].c[d] || a.b[d] != ud[i].b[d]) {
                          continue o
                      }
                  }
                  nd[j][e] = i
              }
          }
      }
      for (e = 0; e < 10; ++e) {
          for (j = 0; j < 16; ++j) {
              od[j][e] = (Ge(), Ee)[nd[j][Fe[e]]]
          }
      }
      for (e = 0; e < 8; ++e) {
          for (j = 0; j < 8; ++j) {
              kd[j][e] = ~~ (~~pd[j << 1][e << 1] >>> 1 << 24) >> 24
          }
      }
      for (e = 0; e < 18; ++e) {
          for (j = 0; j < 8; ++j) {
              jd[j][e] = nd[j << 1][e]
          }
      }
      for (e = 0; e < 8; ++e) {
          for (j = 0; j < 8; ++j) {
              ld[e][j] = kd[e][~~md[j << 1] >> 1]
          }
      }
  }
  
  function Uc() {
      var a, b, c, d, e, f, g, i, j, k, n, o, p, q, r, s, t, u, v, w, x;
      b = new Zd;
      f = new Zd;
      g = 0;
      i = 1;
      a = Eb(Tb, {}, -1, 2768, 1);
      for (n = 0; n < 2768; ++n) {
          he(b.e, (zd(), fd)[n]);
          for (r = 1; r < 16; ++r) {
              ce(dd[md[r]], b, vd);
              ce(vd, dd[r], f);
              He(fd, de(f.e)) != 65535 && (a[n] = (a[n] | 1 << r) & 65535)
          }
      }
      for (n = 0; n < 66432; ++n) {
          Ec[n] = -1
      }
      Ec[0] = 0;
      while (i < 66432) {
          q = g > 7;
          v = q ? -1 : g;
          c = q ? g : -1;
          ++g;
          for (n = 0; n < 66432; ++n) {
              if (Ec[n] == v) {
                  t = n % 24;
                  j = ~~ (n / 24);
                  for (s = 0; s < 10; ++s) {
                      k = Bc[j][s];
                      x = k & 15;
                      u = Fc[Gc[t][s]][x];
                      k >>>= 4;
                      o = k * 24 + u;
                      if (Ec[o] == c) {
                          ++i;
                          if (q) {
                              Ec[n] = g;
                              break
                          } else {
                              Ec[o] = g;
                              w = a[k];
                              if (w != 0) {
                                  for (r = 1; r < 16; ++r) {
                                      w = ~~w >> 1 & 65535;
                                      if ((w & 1) == 1) {
                                          p = k * 24 + Fc[u][r];
                                          if (Ec[p] == -1) {
                                              Ec[p] = g;
                                              ++i
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      for (n = 0; n < 66432; ++n) {
          Dc[n] = -1
      }
      Dc[0] = 0;
      g = 0;
      i = 1;
      while (i < 66432) {
          q = g > 7;
          v = q ? -1 : g;
          c = q ? g : -1;
          ++g;
          for (n = 0; n < 66432; ++n) {
              if (Dc[n] == v) {
                  t = ~~ (n % 24 << 24) >> 24;
                  d = ~~ (n / 24) & 65535;
                  for (s = 0; s < 10; ++s) {
                      e = Ac[d][(Ge(), Fe)[s]];
                      x = ~~ ((e & 15) << 24) >> 24;
                      u = Fc[Gc[t][s]][x];
                      e = ~~e >>> 4 & 65535;
                      o = e * 24 + u;
                      if (Dc[o] == c) {
                          ++i;
                          if (q) {
                              Dc[n] = g;
                              break
                          } else {
                              Dc[o] = g;
                              w = a[e];
                              if (w != 0) {
                                  for (r = 1; r < 16; ++r) {
                                      w = ~~w >> 1 & 65535;
                                      if ((w & 1) == 1) {
                                          p = e * 24 + Fc[u][r ^ (zd(), sd)[r]];
                                          if (Dc[p] == -1) {
                                              Dc[p] = g;
                                              ++i
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  
  function le(a) {
      var b, c, d, e, f, g, i, j, k, n, o, p;
      if (mc(kc(jf()), a.A)) {
          return true
      }
      a.G = Xe(a.G, a.F);
      for (f = a.F; f < a.r; ++f) {
          i = a.v[f];
          a.b[f + 1] = (Pc(), Ac)[a.b[f]][(zd(), nd)[a.e[f]][i]];
          a.e[f + 1] = pd[a.b[f + 1] & 15][a.e[f]];
          a.b[f + 1] >>>= 4;
          a.t[f + 1] = Ic[a.t[f]][i]
      }
      a.F = a.r;
      j = (Pc(), Hc)[a.t[a.r] % 24];
      k = Dc[a.b[a.r] * 24 + Fc[j][a.e[a.r]]];
      if (k >= a.s) {
          return false
      }
      for (f = a.G; f < a.r; ++f) {
          a.g[f + 1] = Ic[a.g[f]][a.v[f]];
          a.j[f + 1] = Ic[a.j[f]][a.v[f]]
      }
      a.G = a.r;
      b = a.b[a.r];
      e = (zd(), td)[~~ (a.g[a.r] / 6)][~~ (a.j[a.r] / 6)] * 4032 + a.g[a.r] * 12 + a.j[a.r] % 6 * 2 + (~~zc[~~b >>> 3] >>> (b & 7) & 1 ^ (Ge(), Ce)[j]);
      c = id[e];
      d = c & 15;
      c >>>= 4;
      k = We(Ec[c * 24 + Fc[j][d]], k);
      if (k >= a.s) {
          return false
      }
      g = a.r == 0 ? 10 : Ee[~~ (a.v[a.r - 1] / 3) * 3 + 1];
      for (f = k; f < a.s; ++f) {
          if (ne(a, c, d, a.b[a.r], a.e[a.r], j, f, a.r, g)) {
              a.y = a.r + f;
              o = new hf;
              p = a.D;
              a.q && (p = (p + 3) % 6);
              if (p < 3) {
                  for (n = 0; n < a.r; ++n) {
                      gf(o, Be[yd[p][a.v[n]]]);
                      o.b.b += Df
                  }
                  a.E && (o.b.b += Ef, o);
                  for (n = a.r; n < a.y; ++n) {
                      gf(o, Be[yd[p][a.v[n]]]);
                      o.b.b += Df
                  }
              } else {
                  for (n = a.y - 1; n >= a.r; --n) {
                      gf(o, Be[yd[p][a.v[n]]]);
                      o.b.b += Df
                  }
                  a.E && (o.b.b += Ef, o);
                  for (n = a.r - 1; n >= 0; --n) {
                      gf(o, Be[yd[p][a.v[n]]]);
                      o.b.b += Df
                  }
              }
              o.b.b += xf;
              ff(o, a.y);
              o.b.b += 'f)';
              a.z = o.b.b;
              return true
          }
      }
      return false
  }
  
  function Zc() {
      var a, b, c, d, e, f, g, i, j, k, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E;
      a = Eb(Sb, {}, -1, 324, 1);
      c = new Zd;
      e = new Zd;
      for (p = 0; p < 324; ++p) {
          Td(c, (zd(), rd)[p]);
          for (t = 0; t < 8; ++t) {
              Yd(dd[md[t << 1]], c, vd);
              Yd(vd, dd[t << 1], e);
              He(rd, Kd(e)) != 65535 && (a[p] = ~~ ((a[p] | 1 << t) << 24) >> 24)
          }
      }
      b = Eb(Sb, {}, -1, 336, 1);
      for (p = 0; p < 336; ++p) {
          Qd(c, (zd(), hd)[p]);
          for (t = 0; t < 8; ++t) {
              ce(dd[md[t << 1]], c, vd);
              ce(vd, dd[t << 1], e);
              He(hd, Gd(e)) != 65535 && (b[p] = ~~ ((b[p] | 1 << t) << 24) >> 24)
          }
      }
      for (p = 0; p < 870912; ++p) {
          Jc[p] = -1
      }
      for (p = 0; p < 8; ++p) {
          Jc[p] = 0
      }
      f = 0;
      g = 8;
      while (g < 870912) {
          s = f > 6;
          w = s ? -1 : f;
          d = s ? f : -1;
          ++f;
          for (p = 0; p < 870912; ++p) {
              if (Jc[p] != w) continue;
              D = ~~ (p / 2688);
              i = p % 2688;
              k = p & 7;
              i >>>= 3;
              for (v = 0; v < 18; ++v) {
                  E = Kc[D][v];
                  C = E & 7;
                  E >>>= 3;
                  j = Cc[i][(zd(), jd)[k][v]];
                  n = ld[kd[j & 7][k]][C];
                  j >>>= 3;
                  q = E * 2688 + (j << 3 | n);
                  if (Jc[q] == d) {
                      ++g;
                      if (s) {
                          Jc[p] = f;
                          break
                      } else {
                          Jc[q] = f;
                          z = a[E];
                          A = b[j];
                          if (z != 1 || A != 1) {
                              for (t = 0; t < 8; ++t, A = ~~ (~~A >> 1 << 24) >> 24) {
                                  if ((A & 1) == 1) {
                                      o = ld[n][t];
                                      for (u = 0; u < 8; ++u) {
                                          if ((z & 1 << u) != 0) {
                                              r = E * 2688 + (j << 3 | ld[o][u]);
                                              if (Jc[r] == -1) {
                                                  Jc[r] = f;
                                                  ++g
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      for (p = 0; p < 160380; ++p) {
          Oc[p] = -1
      }
      Oc[0] = 0;
      f = 0;
      g = 1;
      while (g < 160380) {
          s = f > 6;
          w = s ? -1 : f;
          d = s ? f : -1;
          ++f;
          for (p = 0; p < 160380; ++p) {
              if (Oc[p] == w) {
                  x = p % 495;
                  D = ~~ (p / 495);
                  for (v = 0; v < 18; ++v) {
                      E = Kc[D][v];
                      B = E & 7;
                      y = Lc[Nc[x][v]][B];
                      E >>>= 3;
                      q = E * 495 + y;
                      if (Oc[q] == d) {
                          ++g;
                          if (s) {
                              Oc[p] = f;
                              break
                          } else {
                              Oc[q] = f;
                              z = a[E];
                              if (z != 1) {
                                  for (t = 1; t < 8; ++t) {
                                      z = ~~ (~~z >> 1 << 24) >> 24;
                                      if ((z & 1) == 1) {
                                          r = E * 495 + Lc[y][t];
                                          if (Oc[r] == -1) {
                                              Oc[r] = f;
                                              ++g
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
      for (p = 0; p < 166320; ++p) {
          Mc[p] = -1
      }
      Mc[0] = 0;
      f = 0;
      g = 1;
      while (g < 166320) {
          s = f > 6;
          w = s ? -1 : f;
          d = s ? f : -1;
          ++f;
          for (p = 0; p < 166320; ++p) {
              if (Mc[p] == w) {
                  x = p % 495;
                  i = ~~ (p / 495);
                  for (v = 0; v < 18; ++v) {
                      j = Cc[i][v];
                      B = j & 7;
                      y = Lc[Nc[x][v]][B];
                      j >>>= 3;
                      q = j * 495 + y;
                      if (Mc[q] == d) {
                          ++g;
                          if (s) {
                              Mc[p] = f;
                              break
                          } else {
                              Mc[q] = f;
                              z = b[j];
                              if (z != 1) {
                                  for (t = 1; t < 8; ++t) {
                                      z = ~~ (~~z >> 1 << 24) >> 24;
                                      if ((z & 1) == 1) {
                                          r = j * 495 + Lc[y][t];
                                          if (Mc[r] == -1) {
                                              Mc[r] = f;
                                              ++g
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }
  
  function Ge() {
      Ge = sf;
      var a, b;
      xe = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [8, 9, 20]), Hb(Sb, {}, -1, [6, 18, 38]), Hb(Sb, {}, -1, [0, 36, 47]), Hb(Sb, {}, -1, [2, 45, 11]), Hb(Sb, {}, -1, [29, 26, 15]), Hb(Sb, {}, -1, [27, 44, 24]), Hb(Sb, {}, -1, [33, 53, 42]), Hb(Sb, {}, -1, [35, 17, 51])]);
      ze = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [5, 10]), Hb(Sb, {}, -1, [7, 19]), Hb(Sb, {}, -1, [3, 37]), Hb(Sb, {}, -1, [1, 46]), Hb(Sb, {}, -1, [32, 16]), Hb(Sb, {}, -1, [28, 25]), Hb(Sb, {}, -1, [30, 43]), Hb(Sb, {}, -1, [34, 52]), Hb(Sb, {}, -1, [23, 12]), Hb(Sb, {}, -1, [21, 41]), Hb(Sb, {}, -1, [50, 39]), Hb(Sb, {}, -1, [48, 14])]);
      we = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [0, 1, 2]), Hb(Sb, {}, -1, [0, 2, 4]), Hb(Sb, {}, -1, [0, 4, 5]), Hb(Sb, {}, -1, [0, 5, 1]), Hb(Sb, {}, -1, [3, 2, 1]), Hb(Sb, {}, -1, [3, 4, 2]), Hb(Sb, {}, -1, [3, 5, 4]), Hb(Sb, {}, -1, [3, 1, 5])]);
      ye = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [0, 1]), Hb(Sb, {}, -1, [0, 2]), Hb(Sb, {}, -1, [0, 4]), Hb(Sb, {}, -1, [0, 5]), Hb(Sb, {}, -1, [3, 1]), Hb(Sb, {}, -1, [3, 2]), Hb(Sb, {}, -1, [3, 4]), Hb(Sb, {}, -1, [3, 5]), Hb(Sb, {}, -1, [2, 1]), Hb(Sb, {}, -1, [2, 4]), Hb(Sb, {}, -1, [5, 4]), Hb(Sb, {}, -1, [5, 1])]);
      te = Fb([bc, Tb], [{}, {}], [0, -1], [12, 12], 2, 1);
      Ae = Hb(Vb, {}, -1, [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600]);
      Be = Hb($b, {}, 1, ['U ', 'U2', "U'", 'R ', 'R2', "R'", 'F ', 'F2', "F'", 'D ', 'D2', "D'", 'L ', 'L2', "L'", 'B ', 'B2', "B'"]);
      Fe = Hb(Sb, {}, -1, [0, 1, 2, 4, 7, 9, 10, 11, 13, 16]);
      Ee = Eb(Sb, {}, -1, 18, 1);
      ue = Fb([cc, _b], [{}, {}], [0, -1], [19, 18], 2, 2);
      ve = Fb([cc, _b], [{}, {}], [0, -1], [11, 10], 2, 2);
      Ce = Eb(Sb, {}, -1, 24, 1);
      De = Hb(ac, {}, 0, [Hb(Sb, {}, -1, [11, 10, 9]), Hb(Sb, {}, -1, [10, 11, 9]), Hb(Sb, {}, -1, [11, 9, 10]), Hb(Sb, {}, -1, [9, 11, 10]), Hb(Sb, {}, -1, [10, 9, 11]), Hb(Sb, {}, -1, [9, 10, 11])]);
      for (a = 0; a < 10; ++a) {
          Ee[Fe[a]] = a
      }
      for (a = 0; a < 18; ++a) {
          for (b = 0; b < 18; ++b) {
              ue[a][b] = ~~ (a / 3) == ~~ (b / 3) || ~~ (a / 3) % 3 == ~~ (b / 3) % 3 && a >= b
          }
          ue[18][a] = false
      }
      for (a = 0; a < 10; ++a) {
          for (b = 0; b < 10; ++b) {
              ve[a][b] = ue[Fe[a]][Fe[b]]
          }
          ve[10][a] = false
      }
      for (a = 0; a < 12; ++a) {
          te[a][0] = 1;
          te[a][a] = 1;
          for (b = 1; b < a; ++b) {
              te[a][b] = te[a - 1][b - 1] + te[a - 1][b] & 65535
          }
      }
      for (a = 0; a < 24; ++a) {
          Ce[a] = Le(a)
      }
  }
  var wf = '',
      Df = ' ',
      xf = '(',
      Ef = '.',
      Af = 'CSS1Compat',
      Ff = 'Error 1',
      yf = 'anonymous',
      Cf = 'msie',
      Bf = 'opera',
      zf = 'safari';
  var _, uf = {
      l: 0,
      m: 0,
      h: 0
  },
      tf = {
          l: 1,
          m: 0,
          h: 0
      };
  _ = F.prototype = {};
  _.tM = sf;
  _.cM = {};
  _ = J.prototype = new F;
  _.cM = {
      4: 1
  };
  _ = I.prototype = new J;
  _.cM = {
      2: 1,
      4: 1
  };
  _ = H.prototype = new I;
  _.cM = {
      2: 1,
      3: 1,
      4: 1
  };
  _ = L.prototype = G.prototype = new H;
  _.cM = {
      2: 1,
      3: 1,
      4: 1
  };
  _.b = null;
  _ = M.prototype = new F;
  var N = 0;
  _ = X.prototype = S.prototype = new M;
  _.b = null;
  _.c = null;
  var T;
  _ = fb.prototype = bb.prototype = new F;
  _.H = function gb() {
      var a = {};
      var b = [];
      var c = arguments.callee.caller.caller;
      while (c) {
          var d = this.I(c.toString());
          b.push(d);
          var e = ':' + d;
          var f = a[e];
          if (f) {
              var g, i;
              for (g = 0, i = f.length; g < i; g++) {
                  if (f[g] === c) {
                      return b
                  }
              }
          }(f || (a[e] = [])).push(c);
          c = c.caller
      }
      return b
  };
  _.I = function hb(a) {
      return $(a)
  };
  _.J = function ib(a) {
      return []
  };
  _ = kb.prototype = new bb;
  _.H = function mb() {
      return ab(this.J(eb()), this.K())
  };
  _.J = function nb(a) {
      return lb(this, a)
  };
  _.K = function ob() {
      return 2
  };
  _ = rb.prototype = jb.prototype = new kb;
  _.H = function sb() {
      return pb(this)
  };
  _.I = function tb(a) {
      var b, c;
      if (a.length == 0) {
          return yf
      }
      c = df(a);
      c.indexOf('at ') == 0 && (c = cf(c, 3));
      b = c.indexOf('[');
      b == -1 && (b = c.indexOf(xf));
      if (b == -1) {
          return yf
      } else {
          c = df(c.substr(0, b - 0))
      }
      b = bf(c, String.fromCharCode(46));
      b != -1 && (c = cf(c, b + 1));
      return c.length > 0 ? c : yf
  };
  _.J = function ub(a) {
      return qb(this, a)
  };
  _.K = function vb() {
      return 3
  };
  _ = wb.prototype = new F;
  _ = Ab.prototype = xb.prototype = new wb;
  _.b = wf;
  _ = Cb.prototype = Bb.prototype = new F;
  var Ib, Jb;
  var hc = null;
  var qc, rc, sc;
  _ = vc.prototype = uc.prototype = new F;
  var zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc;
  _ = ae.prototype = _d.prototype = Zd.prototype = bd.prototype = new F;
  _.f = null;
  var cd, dd, ed = null,
      fd, gd = null,
      hd, id, jd, kd, ld, md, nd, od, pd, qd = null,
      rd, sd, td, ud = null,
      vd, wd, xd, yd;
  _ = pe.prototype = je.prototype = new F;
  _.q = false;
  _.r = 0;
  _.s = 0;
  _.y = 999;
  _.z = null;
  _.A = uf;
  _.D = 0;
  _.E = false;
  _.F = 0;
  _.G = 0;
  var qe = false;
  var te, ue, ve, we, xe, ye, ze, Ae, Be, Ce, De, Ee, Fe;
  _ = Qe.prototype = Pe.prototype = new F;
  _ = Se.prototype = Re.prototype = new H;
  _.cM = {
      2: 1,
      3: 1,
      4: 1
  };
  _ = Ue.prototype = Te.prototype = new H;
  _.cM = {
      2: 1,
      3: 1,
      4: 1
  };
  _ = Ze.prototype = Ye.prototype = new H;
  _.cM = {
      2: 1,
      3: 1,
      4: 1
  };
  _ = _e.prototype = $e.prototype = new F;
  _ = String.prototype;
  _.cM = {
      1: 1
  };
  _ = hf.prototype = ef.prototype = new F;
  _ = rf.prototype = kf.prototype = new F;
  _.b = 0;
  _.c = 0;
  var lf, mf, nf = 0;
  var vf = Q;
  var Vb = new Qe,
      _b = new Qe,
      Zb = new Qe,
      $b = new Qe,
      Xb = new Qe,
      Tb = new Qe,
      bc = new Qe,
      Sb = new Qe,
      ac = new Qe,
      Yb = new Qe,
      Wb = new Qe,
      cc = new Qe,
      Ub = new Qe;
  $stats && $stats({
      moduleName: 'min2phase',
      sessionId: $sessionId,
      subSystem: 'startup',
      evtGroup: 'moduleStartup',
      millis: (new Date()).getTime(),
      type: 'moduleEvalEnd'
  });
  if ($wnd.min2phase) $wnd.min2phase.onScriptLoad();

  /* Methods added by Lucas. */


  var randomSource = undefined;

  // If we have a better (P)RNG:
  var setRandomSource = function(src) {
    console.error("WARNING. The random source for this 3x3x3 scrambler cannot currently be set because it is obfuscated Javascript.");
    randomSource = src;
  }

  //"UF UR UB UL DF DR DB DL FR FL BR BL UFR URB UBL ULF DRF DFL DLB DBR URFLBD";
   //0  3  6  9  12 15 18 21 24 27 30 33 36  40  44  48  52  56  60  64  68

  var drawingStickerMap = [
    [   // U
      [ 0, 1, 2],
      [ 3, 4, 5],
      [ 6, 7, 8]
    ],[ // R
      [ 9,10,11],
      [12,13,14],
      [15,16,17]
    ],[ // F
      [18,19,20],
      [21,22,23],
      [24,25,26]
    ],[ // L
      [36,37,38],
      [39,40,41],
      [42,43,44]
    ],[ // B
      [45,46,47],
      [48,49,50],
      [51,52,53]
    ],[ // D
      [27,28,29],
      [30,31,32],
      [33,34,35]
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

  var initialized = false;

  var ini = function(callback, iniRandomSource) {

    if (!initialized) {
      gwtOnLoad();
      setRandomSource(iniRandomSource);
    }
    if(callback) setTimeout(callback, 0);
  };

  var getRandomScramble = function() {
    
    var posit = randomcube();
    var solution = solve(posit, 21, 100000, 0, 1);

    return {
      state: posit,
      scramble: solution
    };
  }


  return {
    /* mark2 interface */
    version: "November 22, 2011",
    initialize: ini,
    setRandomSource: setRandomSource,
    getRandomScramble: getRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
  };

})();