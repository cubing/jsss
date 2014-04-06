scrambler = function () {
    function getRandomScramble() {
        var posit = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var p = 'dU';
        var pegs = [
                0,
                0,
                0,
                0
            ];
        var seq = [];
        var i, j;
        for (i = 0; i < 14; i++) {
            seq[i] = Math.floor(randomSource.random() * 12) - 5;
        }
        var scrambleString = '';
        var turnToString = function (turn, amount) {
            var suffix;
            if (amount === 0) {
                return '';
            } else if (amount === 1) {
                suffix = '';
            } else if (amount === -1) {
                suffix = '\'';
            } else if (amount >= 0) {
                suffix = '' + amount + '';
            } else {
                suffix = '' + -amount + '\'';
            }
            return ' ' + turn + suffix;
        };
        var addToScrambleString = function (pegs, UAmount, dAmount) {
            scrambleString += '[' + pegs + ']' + turnToString('U', UAmount) + turnToString('d', dAmount) + ' ';
        };
        addToScrambleString('UU/dd', seq[0], seq[4]);
        addToScrambleString('dU/dU', seq[1], seq[5]);
        addToScrambleString('dd/UU', seq[2], seq[6]);
        addToScrambleString('Ud/Ud', seq[3], seq[7]);
        addToScrambleString('dU/UU', seq[8], 0);
        addToScrambleString('Ud/UU', seq[9], 0);
        addToScrambleString('UU/Ud', seq[10], 0);
        addToScrambleString('UU/dU', seq[11], 0);
        addToScrambleString('UU/UU', seq[12], 0);
        addToScrambleString('dd/dd', 0, seq[13]);
        addToScrambleString(p[pegs[0]] + p[pegs[1]] + '/' + p[pegs[2]] + p[pegs[3]], 0, 0);
        return { scramble_string: scrambleString };
    }
    var randomSource;
    var setRandomSource = function (src) {
        randomSource = src;
    };
    var initializeFull = function (continuation, iniRandomSource) {
        setRandomSource(iniRandomSource);
        if (continuation) {
            setTimeout(continuation, 0);
        }
    };
    return {
        version: 'December 30, 2011',
        initialize: initializeFull,
        setRandomSource: setRandomSource,
        getRandomScramble: getRandomScramble
    };
}();
module.exports = scrambler;