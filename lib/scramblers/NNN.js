var seqlen = 0;
var generate_NNN_scrambler = function (size, mult) {
    return function () {
        var numcub = 1;
        var cubeorient = false;
        var seq = [];
        function appendmoves(sq, axsl, tl, la) {
            for (var sl = 0; sl < tl; sl++) {
                if (axsl[sl]) {
                    var q = axsl[sl] - 1;
                    var sa = la;
                    var m = sl;
                    if (sl + sl + 1 >= tl) {
                        sa += 3;
                        m = tl - 1 - m;
                        q = 2 - q;
                    }
                    sq[sq.length] = (m * 6 + sa) * 4 + q;
                }
            }
        }
        function scramble() {
            var tl = size;
            if (mult || (size & 1) != 0)
                tl--;
            var axsl = new Array(tl);
            var axam = new Array(0, 0, 0);
            var la;
            for (var n = 0; n < numcub; n++) {
                la = -1;
                seq[n] = [];
                for (var i = 0; i < tl; i++)
                    axsl[i] = 0;
                axam[0] = axam[1] = axam[2] = 0;
                var moved = 0;
                while (seq[n].length + moved < seqlen) {
                    var ax, sl, q;
                    do {
                        do {
                            ax = Math.floor(randomSource.random() * 3);
                            sl = Math.floor(randomSource.random() * tl);
                            q = Math.floor(randomSource.random() * 3);
                        } while (ax === la && axsl[sl] != 0);
                    } while (ax === la && !mult && tl === size && (2 * axam[0] === tl || 2 * axam[1] === tl || 2 * axam[2] === tl || 2 * (axam[q] + 1) === tl && axam[0] + axam[1] + axam[2] - axam[q] > 0));
                    if (ax != la) {
                        appendmoves(seq[n], axsl, tl, la);
                        for (var i = 0; i < tl; i++)
                            axsl[i] = 0;
                        axam[0] = axam[1] = axam[2] = 0;
                        moved = 0;
                        la = ax;
                    }
                    axam[q]++;
                    moved++;
                    axsl[sl] = q + 1;
                }
                appendmoves(seq[n], axsl, tl, la);
                seq[n][seq[n].length] = cubeorient ? Math.floor(randomSource.random() * 24) : 0;
            }
        }
        function scramblestring(n) {
            var s = '', j;
            for (var i = 0; i < seq[n].length - 1; i++) {
                if (i != 0)
                    s += ' ';
                var k = seq[n][i] >> 2;
                j = k % 6;
                k = (k - j) / 6;
                if (k && size <= 5 && !mult) {
                    s += 'dlburf'.charAt(j);
                } else {
                    if (size <= 5 && mult) {
                        s += 'DLBURF'.charAt(j);
                        if (k)
                            s += 'w';
                    } else {
                        if (k)
                            s += k + 1;
                        s += 'DLBURF'.charAt(j);
                    }
                }
                j = seq[n][i] & 3;
                if (j != 0)
                    s += ' 2\''.charAt(j);
            }
            if (cubeorient) {
                var ori = seq[n][seq[n].length - 1];
                s = 'Top:' + colorList[2 + colors[colorPerm[ori][3]]] + '&nbsp;&nbsp;&nbsp;Front:' + colorList[2 + colors[colorPerm[ori][5]]] + '<br>' + s;
            }
            return s;
        }
        var randomSource;
        var setRandomSource = function (src) {
            randomSource = src;
        };
        var getRandomScramble = function () {
            scramble();
            return { scramble_string: scramblestring(0) };
        };
        var initializeFull = function (continuation, iniRandomSource) {
            setRandomSource(iniRandomSource);
        };
        var setScrambleLength = function (length) {
            seqlen = length;
        };
        return {
            initialize: initializeFull,
            setRandomSource: setRandomSource,
            getRandomScramble: getRandomScramble,
            setScrambleLength: setScrambleLength
        };
    }();
};
module.exports['222'] = generate_NNN_scrambler(2, true);
module.exports['333'] = generate_NNN_scrambler(3, true);
module.exports['444'] = generate_NNN_scrambler(4, true);
module.exports['555'] = generate_NNN_scrambler(5, true);
module.exports['666'] = generate_NNN_scrambler(6, true);
module.exports['777'] = generate_NNN_scrambler(7, true);