import {
  BlockMove,
  __commonJS,
  __toModule,
  blockMoveToString,
  expand
} from "./chunk.NSRFVJAK.js";

// src/cubing/kpuzzle/parser/parser-pegjs.js
var require_parser_pegjs = __commonJS((exports, module) => {
  "use strict";
  function peg$subclass(child, parent) {
    function C() {
      this.constructor = child;
    }
    C.prototype = parent.prototype;
    child.prototype = new C();
  }
  function peg$SyntaxError(message, expected, found, location) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.location = location;
    this.name = "SyntaxError";
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }
  peg$subclass(peg$SyntaxError, Error);
  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
      literal: function(expectation) {
        return '"' + literalEscape(expectation.text) + '"';
      },
      class: function(expectation) {
        var escapedParts = expectation.parts.map(function(part) {
          return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
        });
        return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
      },
      any: function() {
        return "any character";
      },
      end: function() {
        return "end of input";
      },
      other: function(expectation) {
        return expectation.description;
      },
      not: function(expectation) {
        return "not " + describeExpectation(expectation.expected);
      }
    };
    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }
    function literalEscape(s) {
      return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
    }
    function classEscape(s) {
      return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
        return "\\x0" + hex(ch);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
        return "\\x" + hex(ch);
      });
    }
    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }
    function describeExpected(expected2) {
      var descriptions = expected2.map(describeExpectation);
      var i, j;
      descriptions.sort();
      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }
      switch (descriptions.length) {
        case 1:
          return descriptions[0];
        case 2:
          return descriptions[0] + " or " + descriptions[1];
        default:
          return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
      }
    }
    function describeFound(found2) {
      return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
    }
    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };
  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};
    var peg$FAILED = {};
    var peg$startRuleFunctions = {start: peg$parsestart};
    var peg$startRuleFunction = peg$parsestart;
    var peg$c0 = " ";
    var peg$c1 = "Name";
    var peg$c2 = "Set";
    var peg$c3 = "\n";
    var peg$c4 = "Solved";
    var peg$c5 = "End";
    var peg$c6 = "Move";
    var peg$r0 = /^[A-Za-z0-9<>]/;
    var peg$r1 = /^[A-Za-z]/;
    var peg$r2 = /^[A-Za-z0-9]/;
    var peg$r3 = /^[0-9]/;
    var peg$e0 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"], "<", ">"], false, false);
    var peg$e1 = peg$classExpectation([["A", "Z"], ["a", "z"]], false, false);
    var peg$e2 = peg$classExpectation([["A", "Z"], ["a", "z"], ["0", "9"]], false, false);
    var peg$e3 = peg$classExpectation([["0", "9"]], false, false);
    var peg$e4 = peg$literalExpectation(" ", false);
    var peg$e5 = peg$literalExpectation("Name", false);
    var peg$e6 = peg$literalExpectation("Set", false);
    var peg$e7 = peg$literalExpectation("\n", false);
    var peg$e8 = peg$literalExpectation("Solved", false);
    var peg$e9 = peg$literalExpectation("End", false);
    var peg$e10 = peg$literalExpectation("Move", false);
    var peg$f0 = function(def) {
      return fixMoves(def);
    };
    var peg$f1 = function(characters) {
      return characters.join("");
    };
    var peg$f2 = function(first, rest) {
      return [first].concat(rest).join("");
    };
    var peg$f3 = function(characters) {
      return parseInt(characters.join(""), 10);
    };
    var peg$f4 = function(identifier) {
      return identifier;
    };
    var peg$f5 = function(set_identifier, num_pieces, num_orientations) {
      return [set_identifier, {numPieces: num_pieces, orientations: num_orientations}];
    };
    var peg$f6 = function(orbit, orbits) {
      orbits[orbit[0]] = orbit[1];
      return orbits;
    };
    var peg$f7 = function(orbit) {
      const orbits = {};
      orbits[orbit[0]] = orbit[1];
      return orbits;
    };
    var peg$f8 = function(num, nums) {
      return [num].concat(nums);
    };
    var peg$f9 = function(num) {
      return [num];
    };
    var peg$f10 = function(nums) {
      return fixPermutation(nums);
    };
    var peg$f11 = function(set_identifier, permutation, nums) {
      return [set_identifier, {permutation, orientation: nums}];
    };
    var peg$f12 = function(set_identifier, permutation) {
      return [set_identifier, {permutation, orientation: new Array(permutation.length).fill(0)}];
    };
    var peg$f13 = function(definition, definitions) {
      definitions[definition[0]] = definition[1];
      return definitions;
    };
    var peg$f14 = function(definition) {
      const definitions = {};
      definitions[definition[0]] = definition[1];
      return definitions;
    };
    var peg$f15 = function(definitions) {
      return definitions;
    };
    var peg$f16 = function(identifier, definitions) {
      return [identifier, definitions];
    };
    var peg$f17 = function(move, moves) {
      moves[move[0]] = move[1];
      return moves;
    };
    var peg$f18 = function(move) {
      const moves = {};
      moves[move[0]] = move[1];
      return moves;
    };
    var peg$f19 = function(name, orbits, start_pieces, moves) {
      return {name, orbits, moves, startPieces: start_pieces};
    };
    var peg$currPos = 0;
    var peg$savedPos = 0;
    var peg$posDetailsCache = [{line: 1, column: 1}];
    var peg$expected = [];
    var peg$silentFails = 0;
    var peg$result;
    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
      }
      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }
    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }
    function offset() {
      return peg$savedPos;
    }
    function range() {
      return [peg$savedPos, peg$currPos];
    }
    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }
    function expected(description, location2) {
      location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
      throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location2);
    }
    function error(message, location2) {
      location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
      throw peg$buildSimpleError(message, location2);
    }
    function peg$literalExpectation(text2, ignoreCase) {
      return {type: "literal", text: text2, ignoreCase};
    }
    function peg$classExpectation(parts, inverted, ignoreCase) {
      return {type: "class", parts, inverted, ignoreCase};
    }
    function peg$anyExpectation() {
      return {type: "any"};
    }
    function peg$endExpectation() {
      return {type: "end"};
    }
    function peg$otherExpectation(description) {
      return {type: "other", description};
    }
    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos];
      var p;
      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }
        details = peg$posDetailsCache[p];
        details = {
          line: details.line,
          column: details.column
        };
        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }
          p++;
        }
        peg$posDetailsCache[pos] = details;
        return details;
      }
    }
    var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
    function peg$computeLocation(startPos, endPos) {
      var loc = {};
      if (peg$VALIDFILENAME)
        loc.filename = options.filename;
      var startPosDetails = peg$computePosDetails(startPos);
      loc.start = {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      };
      var endPosDetails = peg$computePosDetails(endPos);
      loc.end = {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      };
      return loc;
    }
    function peg$begin() {
      peg$expected.push({pos: peg$currPos, variants: []});
    }
    function peg$expect(expected2) {
      var top = peg$expected[peg$expected.length - 1];
      if (peg$currPos < top.pos) {
        return;
      }
      if (peg$currPos > top.pos) {
        top.pos = peg$currPos;
        top.variants = [];
      }
      top.variants.push(expected2);
    }
    function peg$end(invert) {
      var expected2 = peg$expected.pop();
      var top = peg$expected[peg$expected.length - 1];
      var variants = expected2.variants;
      if (top.pos !== expected2.pos) {
        return;
      }
      if (invert) {
        variants = variants.map(function(e) {
          return e.type === "not" ? e.expected : {type: "not", expected: e};
        });
      }
      Array.prototype.push.apply(top.variants, variants);
    }
    function peg$buildSimpleError(message, location2) {
      return new peg$SyntaxError(message, null, null, location2);
    }
    function peg$buildStructuredError(expected2, found, location2) {
      return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found), expected2, found, location2);
    }
    function peg$buildError() {
      var expected2 = peg$expected[0];
      var failPos = expected2.pos;
      return peg$buildStructuredError(expected2.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
    }
    function peg$parsestart() {
      var s0, s1;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseDEFINITION_FILE();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f0(s1);
      }
      s0 = s1;
      return s0;
    }
    function peg$parseIDENTIFIER() {
      var s0, s1, s2;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = [];
      rule$expects(peg$e0);
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          rule$expects(peg$e0);
          if (peg$r0.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f1(s1);
      }
      s0 = s1;
      return s0;
    }
    function peg$parseSET_IDENTIFIER() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      rule$expects(peg$e1);
      if (peg$r1.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        rule$expects(peg$e2);
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          rule$expects(peg$e2);
          if (peg$r2.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }
        }
        peg$savedPos = s0;
        s0 = peg$f2(s1, s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseNUMBER() {
      var s0, s1, s2;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = [];
      rule$expects(peg$e3);
      if (peg$r3.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          rule$expects(peg$e3);
          if (peg$r3.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f3(s1);
      }
      s0 = s1;
      return s0;
    }
    function peg$parseSPACE() {
      var s0;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      rule$expects(peg$e4);
      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c0;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseNAME() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      rule$expects(peg$e5);
      if (input.substr(peg$currPos, 4) === peg$c1) {
        s1 = peg$c1;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSPACE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseIDENTIFIER();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseORBIT() {
      var s0, s1, s2, s3, s4, s5, s6, s7;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      rule$expects(peg$e6);
      if (input.substr(peg$currPos, 3) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 3;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSPACE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseSET_IDENTIFIER();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseSPACE();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseNUMBER();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseSPACE();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseNUMBER();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f5(s3, s5, s7);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseORBITS() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseORBIT();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseORBITS();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s1, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseORBIT();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f7(s1);
        }
        s0 = s1;
      }
      return s0;
    }
    function peg$parseNEWLINE() {
      var s0;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      rule$expects(peg$e7);
      if (input.charCodeAt(peg$currPos) === 10) {
        s0 = peg$c3;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseNEWLINES() {
      var s0, s1;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = [];
      rule$expects(peg$e7);
      if (input.charCodeAt(peg$currPos) === 10) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          rule$expects(peg$e7);
          if (input.charCodeAt(peg$currPos) === 10) {
            s1 = peg$c3;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseOPTIONAL_NEWLINES() {
      var s0, s1;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = [];
      rule$expects(peg$e7);
      if (input.charCodeAt(peg$currPos) === 10) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        rule$expects(peg$e7);
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c3;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }
      }
      return s0;
    }
    function peg$parseNUMBERS() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseNUMBER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSPACE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseNUMBERS();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f8(s1, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseNUMBER();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f9(s1);
        }
        s0 = s1;
      }
      return s0;
    }
    function peg$parsePERMUTATION() {
      var s0, s1;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseNUMBERS();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f10(s1);
      }
      s0 = s1;
      return s0;
    }
    function peg$parseDEFINITION() {
      var s0, s1, s2, s3, s4, s5;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseSET_IDENTIFIER();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsePERMUTATION();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseNEWLINE();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseNUMBERS();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f11(s1, s3, s5);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseSET_IDENTIFIER();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseNEWLINE();
          if (s2 !== peg$FAILED) {
            s3 = peg$parsePERMUTATION();
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f12(s1, s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      return s0;
    }
    function peg$parseDEFINITIONS() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseDEFINITION();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEFINITIONS();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f13(s1, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseDEFINITION();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f14(s1);
        }
        s0 = s1;
      }
      return s0;
    }
    function peg$parseSTART_PIECES() {
      var s0, s1, s2, s3, s4, s5;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      rule$expects(peg$e8);
      if (input.substr(peg$currPos, 6) === peg$c4) {
        s1 = peg$c4;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseDEFINITIONS();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseNEWLINE();
            if (s4 !== peg$FAILED) {
              rule$expects(peg$e9);
              if (input.substr(peg$currPos, 3) === peg$c5) {
                s5 = peg$c5;
                peg$currPos += 3;
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f15(s3);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseMOVE() {
      var s0, s1, s2, s3, s4, s5, s6, s7;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      rule$expects(peg$e10);
      if (input.substr(peg$currPos, 4) === peg$c6) {
        s1 = peg$c6;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseSPACE();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseIDENTIFIER();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseNEWLINE();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseDEFINITIONS();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseNEWLINE();
                if (s6 !== peg$FAILED) {
                  rule$expects(peg$e9);
                  if (input.substr(peg$currPos, 3) === peg$c5) {
                    s7 = peg$c5;
                    peg$currPos += 3;
                  } else {
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f16(s3, s5);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function peg$parseMOVES() {
      var s0, s1, s2, s3;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseMOVE();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINES();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseMOVES();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f17(s1, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseMOVE();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f18(s1);
        }
        s0 = s1;
      }
      return s0;
    }
    function peg$parseDEFINITION_FILE() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
      var rule$expects = function(expected2) {
        if (peg$silentFails === 0)
          peg$expect(expected2);
      };
      s0 = peg$currPos;
      s1 = peg$parseNAME();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseNEWLINES();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseORBITS();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseNEWLINES();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseSTART_PIECES();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseNEWLINES();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseMOVES();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseOPTIONAL_NEWLINES();
                    peg$savedPos = s0;
                    s0 = peg$f19(s1, s3, s5, s7);
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      return s0;
    }
    function fixPermutation(permutation) {
      return permutation.map((x) => x - 1);
    }
    function fixMoves(def) {
      for (const moveName in def.moves) {
        const move = def.moves[moveName];
        for (const orbitName in def.orbits) {
          const moveOrbit = move[orbitName];
          const oldOrientation = moveOrbit.orientation;
          const perm = moveOrbit.permutation;
          const newOrientation = new Array(oldOrientation.length);
          for (let i = 0; i < perm.length; i++) {
            newOrientation[i] = oldOrientation[perm[i]];
          }
          moveOrbit.orientation = newOrientation;
        }
      }
      return def;
    }
    peg$begin();
    peg$result = peg$startRuleFunction();
    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$expect(peg$endExpectation());
      }
      throw peg$buildError();
    }
  }
  module.exports = {
    SyntaxError: peg$SyntaxError,
    parse: peg$parse
  };
});

// src/cubing/kpuzzle/transformations.ts
function Combine(def, t1, t2) {
  const newTrans = {};
  for (const orbitName in def.orbits) {
    const oDef = def.orbits[orbitName];
    const o1 = t1[orbitName];
    const o2 = t2[orbitName];
    const newPerm = new Array(oDef.numPieces);
    const newOri = new Array(oDef.numPieces);
    for (let idx = 0; idx < oDef.numPieces; idx++) {
      newOri[idx] = (o1.orientation[o2.permutation[idx]] + o2.orientation[idx]) % oDef.orientations;
      newPerm[idx] = o1.permutation[o2.permutation[idx]];
    }
    newTrans[orbitName] = {permutation: newPerm, orientation: newOri};
  }
  return newTrans;
}
function Multiply(def, t, amount) {
  if (amount < 0) {
    return Multiply(def, Invert(def, t), -amount);
  }
  if (amount === 0) {
    return IdentityTransformation(def);
  }
  if (amount === 1) {
    return t;
  }
  const halfish = Multiply(def, t, Math.floor(amount / 2));
  const twiceHalfish = Combine(def, halfish, halfish);
  if (amount % 2 === 0) {
    return twiceHalfish;
  } else {
    return Combine(def, t, twiceHalfish);
  }
}
function IdentityTransformation(definition) {
  const transformation = {};
  for (const orbitName in definition.orbits) {
    const orbitDefinition = definition.orbits[orbitName];
    const newPermutation = new Array(orbitDefinition.numPieces);
    const newOrientation = new Array(orbitDefinition.numPieces);
    for (let i = 0; i < orbitDefinition.numPieces; i++) {
      newPermutation[i] = i;
      newOrientation[i] = 0;
    }
    const orbitTransformation = {
      permutation: newPermutation,
      orientation: newOrientation
    };
    transformation[orbitName] = orbitTransformation;
  }
  return transformation;
}
function Invert(def, t) {
  const newTrans = {};
  for (const orbitName in def.orbits) {
    const oDef = def.orbits[orbitName];
    const o = t[orbitName];
    const newPerm = new Array(oDef.numPieces);
    const newOri = new Array(oDef.numPieces);
    for (let idx = 0; idx < oDef.numPieces; idx++) {
      const fromIdx = o.permutation[idx];
      newPerm[fromIdx] = idx;
      newOri[fromIdx] = (oDef.orientations - o.orientation[idx] + oDef.orientations) % oDef.orientations;
    }
    newTrans[orbitName] = {permutation: newPerm, orientation: newOri};
  }
  return newTrans;
}

// src/cubing/kpuzzle/kpuzzle.ts
function stateForBlockMove(def, blockMove) {
  const move = getNotationLayer(def).lookupMove(blockMove);
  if (!move) {
    throw new Error("Unknown move: " + blockMoveToString(blockMove));
  }
  return move;
}
function getNotationLayer(def) {
  if (!def.moveNotation) {
    def.moveNotation = new KPuzzleMoveNotation(def);
  }
  return def.moveNotation;
}
var KPuzzleMoveNotation = class {
  constructor(def) {
    this.def = def;
    this.cache = {};
  }
  lookupMove(move) {
    const key = blockMoveToString(move);
    let r = this.cache[key];
    if (r) {
      return r;
    }
    const baseMove = new BlockMove(move.outerLayer, move.innerLayer, move.family, 1);
    const baseKey = blockMoveToString(baseMove);
    r = this.def.moves[baseKey];
    if (r) {
      r = Multiply(this.def, r, move.amount);
      this.cache[key] = r;
    }
    return r;
  }
};
var KPuzzle = class {
  constructor(definition) {
    this.definition = definition;
    this.state = IdentityTransformation(definition);
  }
  reset() {
    this.state = IdentityTransformation(this.definition);
  }
  serialize() {
    let output = "";
    for (const orbitName in this.definition.orbits) {
      output += orbitName + "\n";
      output += this.state[orbitName].permutation.join(" ") + "\n";
      output += this.state[orbitName].orientation.join(" ") + "\n";
    }
    output = output.slice(0, output.length - 1);
    return output;
  }
  applyBlockMove(blockMove) {
    this.state = Combine(this.definition, this.state, stateForBlockMove(this.definition, blockMove));
  }
  applyAlg(a) {
    for (const move of expand(a).nestedUnits) {
      this.applyBlockMove(move);
    }
  }
};

// src/cubing/kpuzzle/parser/parser-shim.js
var parser_pegjs = __toModule(require_parser_pegjs());

export {
  parser_pegjs,
  Combine,
  stateForBlockMove,
  Multiply,
  KPuzzle,
  IdentityTransformation,
  Invert
};
//# sourceMappingURL=chunk.ODTGEHK7.js.map
