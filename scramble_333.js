/*

scramble_333.js

3x3x3 Solver / Scramble Generator in Javascript.

The core 3x3x3 code is from a min2phase solver by Shuang Chen.
Compiled to Javascript using GWT.
(There may be a lot of redundant code right now, but it's still really fast.)

 */


if (typeof scramblers == "undefined") {
  var scramblers = {};
}

scramblers["333fm"] = scramblers["333ft"] = scramblers["333bf"] = scramblers["333oh"] = scramblers["333"] = (function() {



var $gwt_version = "2.4.0";
var $wnd = {};
var $doc = {};
var $moduleName, $moduleBase;
var $strongName = '91CC0579ED54A0710896425AE0387146';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null,
$sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'gwt333',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});



var _, P0_longLit = {l:0, m:0, h:0}, P1_longLit = {l:1, m:0, h:0}, P186a0_longLit = {l:100000, m:0, h:0}, Q$Object = 0, Q$String = 1, Q$boolean_$1 = 2, Q$byte_$1 = 3, Q$char_$1 = 4, Q$AnimationScheduler$AnimationHandle = 5, Q$AnimationSchedulerImplTimer$AnimationHandleImpl = 6, Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1 = 7, Q$JavaScriptException = 8, Q$Style$Display = 9, Q$Style$HasCssName = 10, Q$Style$Overflow = 11, Q$Style$Unit = 12, Q$ClickHandler = 13, Q$DomEvent$Type = 14, Q$KeyUpHandler = 15, Q$MouseDownHandler = 16, Q$MouseMoveHandler = 17, Q$MouseOutHandler = 18, Q$MouseOverHandler = 19, Q$MouseUpHandler = 20, Q$CloseHandler = 21, Q$HasAttachHandlers = 22, Q$ResizeHandler = 23, Q$ValueChangeHandler = 24, Q$EventHandler = 25, Q$HasHandlers = 26, Q$RequestException = 27, Q$HasDirection$Direction = 28, Q$LongLibBase$LongEmul = 29, Q$Command = 30, Q$Event$NativePreviewHandler = 31, Q$EventListener = 32, Q$Timer = 33, Q$SerializationException = 34, Q$RequestCallbackAdapter$ResponseReader = 35, Q$DialogBox$MouseHandler = 36, Q$HasVisibility = 37, Q$IsWidget = 38, Q$RootPanel = 39, Q$UIObject = 40, Q$ValueBoxBase$TextAlignment = 41, Q$Widget = 42, Q$SimpleEventBus$Command = 43, Q$UmbrellaException = 44, Q$Serializable = 45, Q$CharSequence = 46, Q$Comparable = 47, Q$Enum = 48, Q$Exception = 49, Q$Integer = 50, Q$Number = 51, Q$RuntimeException = 52, Q$StackTraceElement = 53, Q$Throwable = 54, Q$Throwable_$1 = 55, Q$List = 56, Q$Map = 57, Q$Map$Entry = 58, Q$Set = 59, Q$CubieCube = 60;
function makeCastMap(a){
  var result = {};
  for (var i = 0, c = a.length; i < c; ++i) {
    result[a[i]] = 1;
  }
  return result;
}

function nullMethod(){
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return this.getClass$().typeName + '@' + toPowerOfTwoString(this.hashCode$());
}
;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.castableTypeMap$ = {};
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $run(this$static, startTime){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = 200;
  this$static.startTime = startTime;
  this$static.element = null;
  ++this$static.runId;
  $execute(this$static.callback, currentTimeMillis());
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.offsetHeight = $getPropertyInt(this$static.curPanel.element, 'offsetHeight');
    this$static.offsetWidth = $getPropertyInt(this$static.curPanel.element, 'offsetWidth');
    this$static.curPanel.element.style['overflow'] = 'hidden';
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation_0(scheduler){
  this.callback = new Animation$1_0(this);
  this.scheduler = scheduler;
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = function getClass_1(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}
;
_.duration = -1;
_.element = null;
_.isRunning = false;
_.isStarted = false;
_.requestHandle = null;
_.runId = -1;
_.scheduler = null;
_.startTime = -1;
_.wasStarted = false;
function $execute(this$static, timestamp){
  $update(this$static.this$0, timestamp)?(this$static.this$0.requestHandle = this$static.this$0.scheduler.requestAnimationFrame(this$static.this$0.callback, this$static.this$0.element)):(this$static.this$0.requestHandle = null);
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType == 3) {
    for (var i = 0; i < length_0; ++i) {
      var value = new Object;
      value.l = value.m = value.h = 0;
      array[i] = value;
    }
  }
   else if (seedType > 0) {
    var value = [null, 0, false][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, castableTypeMap, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  //initValues(arrayClass, castableTypeMap, queryId, result); // This seems to make Firefox fail. It appears to be unnecessary for Mark 2 functionality.
  return result;
}

function initDims(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, count, seedType){
  return initDims_0(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, 0, count, seedType);
}

function initDims_0(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, index, count, seedType){
  var i, isLastDim, length_0, result;
  length_0 = dimExprs[index];
  isLastDim = index == count - 1;
  result = createFromSeed(isLastDim?seedType:0, length_0);
//  initValues(arrayClasses[index], castableTypeMapExprs[index], queryIdExprs[index], result);
  if (!isLastDim) {
    ++index;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, index, count, seedType);
    }
  }
  return result;
}

function create0(l_0, m_0, h_0){
  return _ = new LongLibBase$LongEmul_0 , _.l = l_0 , _.m = m_0 , _.h = h_0 , _;
}
function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return create0(a.l | b.l, a.m | b.m, a.h | b.h);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return create0(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}

var boxedValues = null;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = nullMethod;
  MAX_VALUE = create0(4194303, 4194303, 524287);
  MIN_VALUE = create0(0, 0, 524288);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function LongLibBase$LongEmul_0(){
}

function LongLibBase$LongEmul(){
}

_ = LongLibBase$LongEmul_0.prototype = LongLibBase$LongEmul.prototype = new Object_0;

function Class_0(){
}

function createForArray(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className, enumConstantsFunc){
  var clazz;
  clazz = new Class_0;
  clazz.typeName = packageName + className;
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function Class(){
}

_ = Class_0.prototype = Class.prototype = new Object_0;
_.getClass$ = function getClass_181(){
  return Ljava_lang_Class_2_classLit;
}
;
_.toString$ = function toString_8(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}
;
_.modifiers = 0;
_.typeName = null;
function ClassCastException_0(){
  $fillInStackTrace();
}

function ClassCastException(){
}

//_ = ClassCastException_0.prototype = ClassCastException.prototype = new RuntimeException;
_.getClass$ = function getClass_182(){
  return Ljava_lang_ClassCastException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);


function $clinit_CoordCube(){
  $clinit_CoordCube = nullMethod;
  UDSliceMove = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [495, 18], 2, 1);
  TwistMove = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [324, 18], 2, 1);
  FlipMove = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [336, 18], 2, 1);
  UDSliceConj = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [495, 8], 2, 1);
  UDSliceTwistPrun = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 160380, 1);
  UDSliceFlipPrun = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 166320, 1);
  TwistFlipPrun = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 870912, 1);
  Mid3Move = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [1320, 18], 2, 1);
  Mid32MPerm = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 24, 1);
  CParity = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 346, 1);
  CPermMove = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [2768, 18], 2, 1);
  EPermMove = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [2768, 10], 2, 1);
  MPermMove = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [24, 10], 2, 1);
  MPermConj = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [24, 16], 2, 1);
  MCPermPrun = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 66432, 1);
  MEPermPrun = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 66432, 1);
}

function initCParity(){
  var i;
  for (i = 0; i < 2768; ++i) {
    CParity[i >>> 3] = (CParity[i >>> 3] | get8Parity(($clinit_CubieCube() , CPermS2R)[i]) << (i & 7));
  }
}

function initCPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 2768; ++i) {
    set8Perm(c.cp, ($clinit_CubieCube() , CPermS2R)[i]);
    for (j = 0; j < 18; ++j) {
      CornMult(c, moveCube[j], d);
      CPermMove[i][j] = $getCPermSym(d);
    }
  }
}

function initEPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 2768; ++i) {
    set8Perm(c.ep, ($clinit_CubieCube() , EPermS2R)[i]);
    for (j = 0; j < 10; ++j) {
      EdgeMult(c, moveCube[($clinit_Util() , ud2std)[j]], d);
      EPermMove[i][j] = $getEPermSym(d);
    }
  }
}

function initFlipMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 336; ++i) {
    $setFlip(c, ($clinit_CubieCube() , FlipS2R)[i]);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, moveCube[j], d);
      FlipMove[i][j] = $getFlipSym(d);
    }
  }
}

function initMCEPermPrun(){
  var SymState, c, check, corn, cornx, d, depth, done, edge, edgex, i, idx, idxx, inv, j, m_0, mid, midx, select, sym, symx;
  c = new CubieCube_0;
  d = new CubieCube_0;
  depth = 0;
  done = 1;
  SymState = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 2768, 1);
  for (i = 0; i < 2768; ++i) {
    set8Perm(c.ep, ($clinit_CubieCube() , EPermS2R)[i]);
    for (j = 1; j < 16; ++j) {
      EdgeMult(CubeSym[SymInv[j]], c, temp_0);
      EdgeMult(temp_0, CubeSym[j], d);
      binarySearch(EPermS2R, get8Perm(d.ep)) != 65535 && (SymState[i] = (SymState[i] | 1 << j));
    }
  }
  for (i = 0; i < 66432; ++i) {
    MEPermPrun[i] = -1;
  }
  MEPermPrun[0] = 0;
  while (done < 66432) {
    inv = depth > 7;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 66432; ++i) {
      if (MEPermPrun[i] == select) {
        mid = i % 24;
        edge = ~~(i / 24);
        for (m_0 = 0; m_0 < 10; ++m_0) {
          edgex = EPermMove[edge][m_0];
          symx = edgex & 15;
          midx = MPermConj[MPermMove[mid][m_0]][symx];
          edgex >>>= 4;
          idx = edgex * 24 + midx;
          if (MEPermPrun[idx] == check) {
            ++done;
            if (inv) {
              MEPermPrun[i] = depth;
              break;
            }
             else {
              MEPermPrun[idx] = depth;
              sym = SymState[edgex];
              if (sym != 0) {
                for (j = 1; j < 16; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) == 1) {
                    idxx = edgex * 24 + MPermConj[midx][j];
                    if (MEPermPrun[idxx] == -1) {
                      MEPermPrun[idxx] = depth;
                      ++done;
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
  for (i = 0; i < 66432; ++i) {
    MCPermPrun[i] = -1;
  }
  MCPermPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 66432) {
    inv = depth > 7;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 66432; ++i) {
      if (MCPermPrun[i] == select) {
        mid = i % 24;
        corn = ~~(i / 24);
        for (m_0 = 0; m_0 < 10; ++m_0) {
          cornx = CPermMove[corn][($clinit_Util() , ud2std)[m_0]];
          symx = (cornx & 15);
          midx = MPermConj[MPermMove[mid][m_0]][symx];
          cornx = cornx >>> 4;
          idx = cornx * 24 + midx;
          if (MCPermPrun[idx] == check) {
            ++done;
            if (inv) {
              MCPermPrun[i] = depth;
              break;
            }
             else {
              MCPermPrun[idx] = depth;
              sym = SymState[cornx];
              if (sym != 0) {
                for (j = 1; j < 16; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) == 1) {
                    idxx = cornx * 24 + MPermConj[midx][j ^ ($clinit_CubieCube() , e2c)[j]];
                    if (MCPermPrun[idxx] == -1) {
                      MCPermPrun[idxx] = depth;
                      ++done;
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

function initMPermConj(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    for (j = 0; j < 16; ++j) {
      EdgeConjugate(c, ($clinit_CubieCube() , SymInv)[j], d);
      MPermConj[i][j] = $getMPerm(d);
    }
  }
}

function initMPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    for (j = 0; j < 10; ++j) {
      EdgeMult(c, ($clinit_CubieCube() , moveCube)[($clinit_Util() , ud2std)[j]], d);
      MPermMove[i][j] = $getMPerm(d);
    }
  }
}

function initMid32MPerm(){
  var c, i;
  c = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    Mid32MPerm[$getMid3(c) % 24] = i;
  }
}

function initMid3Move(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 1320; ++i) {
    $setMid3(c, i);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, ($clinit_CubieCube() , moveCube)[j], d);
      Mid3Move[i][j] = $getMid3(d);
    }
  }
}



function initTwistFlipSlicePrun(){
  var SymState, SymStateF, c, check, d, depth, done, flip, flipx, fsym, fsymx, fsymxx, i, idx, idxx, inv, j, k, m_0, select, slice, slicex, sym, symF, symx, tsymx, twist, twistx;
  SymState = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 324, 1);
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 324; ++i) {
    $setTwist(c, ($clinit_CubieCube() , TwistS2R)[i]);
    for (j = 0; j < 8; ++j) {
      CornMultSym(CubeSym[SymInv[j << 1]], c, temp_0);
      CornMultSym(temp_0, CubeSym[j << 1], d);
      binarySearch(TwistS2R, $getTwist(d)) != 65535 && (SymState[i] = (SymState[i] | 1 << j));
    }
  }
  SymStateF = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 336, 1);
  for (i = 0; i < 336; ++i) {
    $setFlip(c, ($clinit_CubieCube() , FlipS2R)[i]);
    for (j = 0; j < 8; ++j) {
      EdgeMult(CubeSym[SymInv[j << 1]], c, temp_0);
      EdgeMult(temp_0, CubeSym[j << 1], d);
      binarySearch(FlipS2R, $getFlip(d)) != 65535 && (SymStateF[i] = (SymStateF[i] | 1 << j));
    }
  }
  for (i = 0; i < 870912; ++i) {
    TwistFlipPrun[i] = -1;
  }
  for (i = 0; i < 8; ++i) {
    TwistFlipPrun[i] = 0;
  }
  depth = 0;
  done = 8;
  while (done < 870912) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 870912; ++i) {
      if (TwistFlipPrun[i] != select)
        continue;
      twist = ~~(i / 2688);
      flip = i % 2688;
      fsym = i & 7;
      flip >>>= 3;
      for (m_0 = 0; m_0 < 18; ++m_0) {
        twistx = TwistMove[twist][m_0];
        tsymx = twistx & 7;
        twistx >>>= 3;
        flipx = FlipMove[flip][($clinit_CubieCube() , Sym8Move)[fsym][m_0]];
        fsymx = Sym8MultInv[Sym8Mult[flipx & 7][fsym]][tsymx];
        flipx >>>= 3;
        idx = twistx * 2688 + (flipx << 3 | fsymx);
        if (TwistFlipPrun[idx] == check) {
          ++done;
          if (inv) {
            TwistFlipPrun[i] = depth;
            break;
          }
           else {
            TwistFlipPrun[idx] = depth;
            sym = SymState[twistx];
            symF = SymStateF[flipx];
            if (sym != 1 || symF != 1) {
              for (j = 0; j < 8; ++j , symF = symF >> 1) {
                if ((symF & 1) == 1) {
                  fsymxx = Sym8MultInv[fsymx][j];
                  for (k = 0; k < 8; ++k) {
                    if ((sym & 1 << k) != 0) {
                      idxx = twistx * 2688 + (flipx << 3 | Sym8MultInv[fsymxx][k]);
                      if (TwistFlipPrun[idxx] == -1) {
                        TwistFlipPrun[idxx] = depth;
                        ++done;
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
  for (i = 0; i < 160380; ++i) {
    UDSliceTwistPrun[i] = -1;
  }
  UDSliceTwistPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 160380) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 160380; ++i) {
      if (UDSliceTwistPrun[i] == select) {
        slice = i % 495;
        twist = ~~(i / 495);
        for (m_0 = 0; m_0 < 18; ++m_0) {
          twistx = TwistMove[twist][m_0];
          symx = twistx & 7;
          slicex = UDSliceConj[UDSliceMove[slice][m_0]][symx];
          twistx >>>= 3;
          idx = twistx * 495 + slicex;
          if (UDSliceTwistPrun[idx] == check) {
            ++done;
            if (inv) {
              UDSliceTwistPrun[i] = depth;
              break;
            }
             else {
              UDSliceTwistPrun[idx] = depth;
              sym = SymState[twistx];
              if (sym != 1) {
                for (j = 1; j < 8; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) == 1) {
                    idxx = twistx * 495 + UDSliceConj[slicex][j];
                    if (UDSliceTwistPrun[idxx] == -1) {
                      UDSliceTwistPrun[idxx] = depth;
                      ++done;
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
  for (i = 0; i < 166320; ++i) {
    UDSliceFlipPrun[i] = -1;
  }
  UDSliceFlipPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 166320) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 166320; ++i) {
      if (UDSliceFlipPrun[i] == select) {
        slice = i % 495;
        flip = ~~(i / 495);
        for (m_0 = 0; m_0 < 18; ++m_0) {
          flipx = FlipMove[flip][m_0];
          symx = flipx & 7;
          slicex = UDSliceConj[UDSliceMove[slice][m_0]][symx];
          flipx >>>= 3;
          idx = flipx * 495 + slicex;
          if (UDSliceFlipPrun[idx] == check) {
            ++done;
            if (inv) {
              UDSliceFlipPrun[i] = depth;
              break;
            }
             else {
              UDSliceFlipPrun[idx] = depth;
              sym = SymStateF[flipx];
              if (sym != 1) {
                for (j = 1; j < 8; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) == 1) {
                    idxx = flipx * 495 + UDSliceConj[slicex][j];
                    if (UDSliceFlipPrun[idxx] == -1) {
                      UDSliceFlipPrun[idxx] = depth;
                      ++done;
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

function initTwistMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 324; ++i) {
    $setTwist(c, ($clinit_CubieCube() , TwistS2R)[i]);
    for (j = 0; j < 18; ++j) {
      CornMult(c, moveCube[j], d);
      TwistMove[i][j] = $getTwistSym(d);
    }
  }
}

function initUDSliceConj(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 495; ++i) {
    $setUDSlice(c, i);
    for (j = 0; j < 16; j = j + 2) {
      EdgeConjugate(c, ($clinit_CubieCube() , SymInv)[j], d);
      UDSliceConj[i][j >>> 1] = $getUDSlice(d);
    }
  }
}

function initUDSliceMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 495; ++i) {
    $setUDSlice(c, i);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, ($clinit_CubieCube() , moveCube)[j], d);
      UDSliceMove[i][j] = $getUDSlice(d);
    }
  }
}

var CParity, CPermMove, EPermMove, FlipMove, MCPermPrun, MEPermPrun, MPermConj, MPermMove, Mid32MPerm, Mid3Move, TwistFlipPrun, TwistMove, UDSliceConj, UDSliceFlipPrun, UDSliceMove, UDSliceTwistPrun;
function $clinit_CubieCube(){
  $clinit_CubieCube = nullMethod;
  temp_0 = new CubieCube_0;
  CubeSym = initDim(_3Lnet_cubing_mark2_client_CubieCube_2_classLit, makeCastMap([Q$Serializable]), Q$CubieCube, 16, 0);
  SymInv = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 16, 1);
  SymMult = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [16, 16], 2, 1);
  SymMove = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [16, 18], 2, 1);
  Sym8Mult = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [8, 8], 2, 1);
  Sym8Move = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [8, 18], 2, 1);
  Sym8MultInv = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [8, 8], 2, 1);
  SymMoveUD = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [16, 10], 2, 1);
  FlipS2R = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 336, 1);
  TwistS2R = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 324, 1);
  CPermS2R = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 2768, 1);
  EPermS2R = CPermS2R;
  MtoEPerm = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 40320, 1);
  merge = initDims([_3_3B_classLit, _3B_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$byte_$1, Q$Serializable])], [Q$byte_$1, -1], [56, 56], 2, 1);
  e2c = [0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 3, 0, 0, 0, 0];
  urf1 = new CubieCube_2(2531, 1373, 67026819, 1877);
  urf2 = new CubieCube_2(2089, 1906, 322752913, 255);
  urfMove = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10, 11, 12, 13, 14], [3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16, 17, 9, 10, 11], [2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13, 12, 17, 16, 15], [8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10, 9, 14, 13, 12], [5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16, 15, 11, 10, 9]];
  initMove();
  initSym();
}

function $$init(this$static){
  this$static.cp = [0, 1, 2, 3, 4, 5, 6, 7];
  this$static.co = [0, 0, 0, 0, 0, 0, 0, 0];
  this$static.ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  this$static.eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function $copy(this$static, c){
  var i;
  for (i = 0; i < 8; ++i) {
    this$static.cp[i] = c.cp[i];
    this$static.co[i] = c.co[i];
  }
  for (i = 0; i < 12; ++i) {
    this$static.ep[i] = c.ep[i];
    this$static.eo[i] = c.eo[i];
  }
}

function $getCPermSym(this$static){
  var idx, k;
  if (EPermR2S != null) {
    idx = EPermR2S[get8Perm(this$static.cp)];
    idx = (idx ^ e2c[idx & 15]);
    return idx;
  }
  for (k = 0; k < 16; ++k) {
    CornConjugate(this$static, SymInv[k], this$static.temps);
    idx = binarySearch(CPermS2R, get8Perm(this$static.temps.cp));
    if (idx != 65535) {
      return (idx << 4 | k);
    }
  }
  return 0;
}

function $getDRtoDL(this$static){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (4 <= this$static.ep[i] && this$static.ep[i] <= 6) {
      idxA = idxA + ($clinit_Util() , Cnk)[i][r--];
      t = 1 << this$static.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $getEPermSym(this$static){
  var idx, k;
  if (EPermR2S != null) {
    return EPermR2S[get8Perm(this$static.ep)];
  }
  for (k = 0; k < 16; ++k) {
    EdgeConjugate(this$static, SymInv[k], this$static.temps);
    idx = binarySearch(EPermS2R, get8Perm(this$static.temps.ep));
    if (idx != 65535) {
      return (idx << 4 | k);
    }
  }
  return 0;
}

function $getEdgePerm(this$static){
  var i, idx, m_0, t;
  m_0 = 1 << this$static.ep[11];
  idx = 0;
  for (i = 10; i >= 0; --i) {
    t = 1 << this$static.ep[i];
    idx += bitCount(m_0 & t - 1) * ($clinit_Util() , fact)[11 - i];
    m_0 |= t;
  }
  return idx;
}

function $getFlip(this$static){
  var i, idx;
  idx = 0;
  for (i = 0; i < 11; ++i) {
    idx = (idx | this$static.eo[i] << i);
  }
  return idx;
}

function $getFlipSym(this$static){
  var idx, k;
  if (FlipR2S != null) {
    return FlipR2S[$getFlip(this$static)];
  }
  for (k = 0; k < 16; k = k + 2) {
    EdgeConjugate(this$static, SymInv[k], this$static.temps);
    idx = binarySearch(FlipS2R, $getFlip(this$static.temps));
    if (idx != 65535) {
      return (idx << 3 | k >>> 1);
    }
  }
  return 0;
}

function $getMPerm(this$static){
  var i, idx, m_0, t;
  m_0 = 1 << this$static.ep[11];
  idx = 0;
  for (i = 10; i >= 8; --i) {
    t = 1 << this$static.ep[i];
    idx += bitCount(m_0 & t - 1) * ($clinit_Util() , fact)[11 - i];
    m_0 |= t;
  }
  return idx;
}

function $getMid3(this$static){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (this$static.ep[i] >= 9) {
      idxA = idxA + ($clinit_Util() , Cnk)[i][r--];
      t = 1 << this$static.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $getTwist(this$static){
  var i, idx;
  idx = 0;
  for (i = 0; i < 7; ++i) {
    idx = idx * 3;
    idx = idx + this$static.co[i];
  }
  return idx;
}

function $getTwistSym(this$static){
  var idx, k;
  if (TwistR2S != null) {
    return TwistR2S[$getTwist(this$static)];
  }
  for (k = 0; k < 16; k = k + 2) {
    CornConjugate(this$static, SymInv[k], this$static.temps);
    idx = $getTwist(this$static.temps);
    idx = binarySearch(TwistS2R, idx);
    if (idx != 65535) {
      return (idx << 3 | k >>> 1);
    }
  }
  return 0;
}

function $getUDSlice(this$static){
  var i, idx, r;
  idx = 0;
  r = 4;
  for (i = 0; i < 12; ++i) {
    this$static.ep[i] >= 8 && (idx = idx + ($clinit_Util() , Cnk)[11 - i][r--]);
  }
  return idx;
}

function $getURtoUL(this$static){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (this$static.ep[i] <= 2) {
      idxA = idxA + ($clinit_Util() , Cnk)[i][r--];
      t = 1 << this$static.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $invCubieCube(this$static){
  var corn, edge, ori;
  for (edge = 0; edge < 12; ++edge)
    this$static.temps.ep[this$static.ep[edge]] = edge;
  for (edge = 0; edge < 12; ++edge)
    this$static.temps.eo[edge] = this$static.eo[this$static.temps.ep[edge]];
  for (corn = 0; corn < 8; ++corn)
    this$static.temps.cp[this$static.cp[corn]] = corn;
  for (corn = 0; corn < 8; ++corn) {
    ori = this$static.co[this$static.temps.cp[corn]];
    this$static.temps.co[corn] = -ori;
    this$static.temps.co[corn] < 0 && (this$static.temps.co[corn] = this$static.temps.co[corn] + 3);
  }
  $copy(this$static, this$static.temps);
}

function $setEdgePerm(this$static, idx){
  var i, j;
  this$static.ep[11] = 0;
  for (i = 10; i >= 0; --i) {
    this$static.ep[i] = idx % (12 - i);
    idx = ~~(idx / (12 - i));
    for (j = i + 1; j < 12; ++j) {
      this$static.ep[j] >= this$static.ep[i] && ++this$static.ep[j];
    }
  }
}

function $setFlip(this$static, idx){
  var i;
  this$static.eo[11] = bitOdd(idx);
  for (i = 0; i < 11; ++i) {
    this$static.eo[i] = (idx & 1);
    idx = idx >>> 1;
  }
}

function $setMPerm(this$static, idx){
  var i, j;
  this$static.ep[11] = 8;
  for (i = 10; i >= 8; --i) {
    this$static.ep[i] = idx % (12 - i) + 8;
    idx = ~~(idx / (12 - i));
    for (j = i + 1; j < 12; ++j) {
      this$static.ep[j] >= this$static.ep[i] && ++this$static.ep[j];
    }
  }
}

function $setMid3(this$static, idxA){
  var edge, i, r;
  edge = ($clinit_Util() , perm3)[idxA % 6];
  idxA = ~~(idxA / 6);
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (idxA >= Cnk[i][r]) {
      idxA = idxA - Cnk[i][r--];
      this$static.ep[i] = edge[2 - r];
    }
     else {
      this$static.ep[i] = 8 - i + r;
    }
  }
}

function $setTwist(this$static, idx){
  var i, twst;
  twst = 0;
  for (i = 6; i >= 0; --i) {
    twst = twst + (this$static.co[i] = idx % 3);
    idx = ~~(idx / 3);
  }
  this$static.co[7] = (15 - twst) % 3;
}

function $setUDSlice(this$static, idx){
  var i, r;
  r = 4;
  for (i = 0; i < 12; ++i) {
    if (idx >= ($clinit_Util() , Cnk)[11 - i][r]) {
      idx = idx - Cnk[11 - i][r--];
      this$static.ep[i] = 11 - r;
    }
     else {
      this$static.ep[i] = i + r - 4;
    }
  }
}

function $verify(this$static){
  var c, cornMask, e, edgeMask, i, sum;
  sum = 0;
  edgeMask = 0;
  for (e = 0; e < 12; ++e)
    edgeMask = (edgeMask | 1 << this$static.ep[e]);
  if (edgeMask != 4095)
    return -2;
  for (i = 0; i < 12; ++i)
    sum = sum ^ this$static.eo[i];
  if (sum % 2 != 0)
    return -3;
  cornMask = 0;
  for (c = 0; c < 8; ++c)
    cornMask = (cornMask | 1 << this$static.cp[c]);
  if (cornMask != 255)
    return -4;
  sum = 0;
  for (i = 0; i < 8; ++i)
    sum = sum + this$static.co[i];
  if (sum % 3 != 0)
    return -5;
  if ((get12Parity($getEdgePerm(this$static)) ^ get8Parity(get8Perm(this$static.cp))) != 0)
    return -6;
  return 0;
}

function CornConjugate(a, idx, b){
  CornMultSym(CubeSym[SymInv[idx]], a, temp_0);
  CornMultSym(temp_0, CubeSym[idx], b);
}

function CornMult(a, b, prod){
  $clinit_CubieCube();
  var corn;
  for (corn = 0; corn < 8; ++corn) {
    prod.cp[corn] = a.cp[b.cp[corn]];
    prod.co[corn] = (a.co[b.cp[corn]] + b.co[corn]) % 3;
  }
}

function CornMultSym(a, b, prod){
  $clinit_CubieCube();
  var corn, ori, oriA, oriB;
  for (corn = 0; corn < 8; ++corn) {
    prod.cp[corn] = a.cp[b.cp[corn]];
    oriA = a.co[b.cp[corn]];
    oriB = b.co[corn];
    ori = oriA;
    ori = ori + (oriA < 3?oriB:3 - oriB);
    ori = ori % 3;
    oriA < 3 ^ oriB < 3 && (ori = ori + 3);
    prod.co[corn] = ori;
  }
}

function CubieCube_0(){
  $clinit_CubieCube();
  $$init(this);
}

function CubieCube_1(cp, co, ep, eo){
  var i;
  $$init(this);
  for (i = 0; i < 8; ++i) {
    this.cp[i] = cp[i];
    this.co[i] = co[i];
  }
  for (i = 0; i < 12; ++i) {
    this.ep[i] = ep[i];
    this.eo[i] = eo[i];
  }
}

function CubieCube_2(cperm, twist, eperm, flip){
  $clinit_CubieCube();
  $$init(this);
  set8Perm(this.cp, cperm);
  $setTwist(this, twist);
  $setEdgePerm(this, eperm);
  $setFlip(this, flip);
}

function CubieCube_3(c){
  CubieCube_1.call(this, c.cp, c.co, c.ep, c.eo);
}

function EdgeConjugate(a, idx, b){
  $clinit_CubieCube();
  EdgeMult(CubeSym[SymInv[idx]], a, temp_0);
  EdgeMult(temp_0, CubeSym[idx], b);
}

function EdgeMult(a, b, prod){
  $clinit_CubieCube();
  var ed;
  for (ed = 0; ed < 12; ++ed) {
    prod.ep[ed] = a.ep[b.ep[ed]];
    prod.eo[ed] = (b.eo[ed] ^ a.eo[b.ep[ed]]);
  }
}

function get8Perm(arr){
  $clinit_CubieCube();
  var i, idx, v, val;
  idx = 0;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    v = arr[i] << 2;
    idx = (8 - i) * idx + (val >> v & 7);
    val -= 286331152 << v;
  }
  return idx;
}

function initMove(){
  var m_0, mc, p;
  mc = initDim(_3Lnet_cubing_mark2_client_CubieCube_2_classLit, makeCastMap([Q$Serializable]), Q$CubieCube, 18, 0);
  moveCube = [new CubieCube_2(15120, 0, 119750400, 0), new CubieCube_2(21021, 1494, 323403417, 0), new CubieCube_2(8064, 1236, 29441808, 802), new CubieCube_2(9, 0, 5880, 0), new CubieCube_2(1230, 412, 2949660, 0), new CubieCube_2(224, 137, 328552, 1160)];
  for (m_0 = 0; m_0 < 6; ++m_0) {
    mc[m_0 * 3] = moveCube[m_0];
    for (p = 0; p < 2; ++p) {
      mc[m_0 * 3 + p + 1] = new CubieCube_0;
      EdgeMult(mc[m_0 * 3 + p], moveCube[m_0], mc[m_0 * 3 + p + 1]);
      CornMult(mc[m_0 * 3 + p], moveCube[m_0], mc[m_0 * 3 + p + 1]);
    }
  }
  moveCube = mc;
}

function initSym(){
  var c, d, f2, i, j, k, lr2, m_0, s, temp, u4;
  c = new CubieCube_0;
  d = new CubieCube_0;
  f2 = new CubieCube_2(28783, 0, 259268407, 0);
  u4 = new CubieCube_2(15138, 0, 119765538, 1792);
  lr2 = new CubieCube_2(5167, 0, 83473207, 0);
  lr2.co = [3, 3, 3, 3, 3, 3, 3, 3];
  for (i = 0; i < 16; ++i) {
    CubeSym[i] = new CubieCube_3(c);
    CornMultSym(c, u4, d);
    EdgeMult(c, u4, d);
    temp = d;
    d = c;
    c = temp;
    if (i % 4 == 3) {
      CornMultSym(temp, lr2, d);
      EdgeMult(temp, lr2, d);
      temp = d;
      d = c;
      c = temp;
    }
    if (i % 8 == 7) {
      CornMultSym(temp, f2, d);
      EdgeMult(temp, f2, d);
      temp = d;
      d = c;
      c = temp;
    }
  }
  for (j = 0; j < 16; ++j) {
    for (k = 0; k < 16; ++k) {
      CornMultSym(CubeSym[j], CubeSym[k], c);
      if (c.cp[0] == 0 && c.cp[1] == 1 && c.cp[2] == 2) {
        SymInv[j] = k;
        break;
      }
    }
  }
  for (i = 0; i < 16; ++i) {
    for (j = 0; j < 16; ++j) {
      CornMultSym(CubeSym[i], CubeSym[j], c);
      for (k = 0; k < 16; ++k) {
        if (CubeSym[k].cp[0] == c.cp[0] && CubeSym[k].cp[1] == c.cp[1] && CubeSym[k].cp[2] == c.cp[2]) {
          SymMult[i][j] = k;
          break;
        }
      }
    }
  }
  for (j = 0; j < 18; ++j) {
    for (s = 0; s < 16; ++s) {
      CornConjugate(moveCube[j], SymInv[s], c);
      CONTINUE: for (m_0 = 0; m_0 < 18; ++m_0) {
        for (i = 0; i < 8; ++i) {
          if (c.cp[i] != moveCube[m_0].cp[i] || c.co[i] != moveCube[m_0].co[i]) {
            continue CONTINUE;
          }
        }
        SymMove[s][j] = m_0;
      }
    }
  }
  for (j = 0; j < 10; ++j) {
    for (s = 0; s < 16; ++s) {
      SymMoveUD[s][j] = ($clinit_Util() , std2ud)[SymMove[s][ud2std[j]]];
    }
  }
  for (j = 0; j < 8; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8Mult[s][j] = SymMult[s << 1][j << 1] >>> 1;
    }
  }
  for (j = 0; j < 18; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8Move[s][j] = SymMove[s << 1][j];
    }
  }
  for (j = 0; j < 8; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8MultInv[j][s] = Sym8Mult[j][SymInv[s << 1] >> 1];
    }
  }
}

function initSym2Raw(){
  var a, b, c, count, d, i, idx, j, m_0, mask, occ, s;
  c = new CubieCube_0;
  d = new CubieCube_0;
  occ = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 1260, 1);
  count = 0;
  for (i = 0; i < 64; occ[i++] = 0)
  ;
  for (i = 0; i < 2048; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) == 0) {
      $setFlip(c, i);
      for (s = 0; s < 16; s = s + 2) {
        EdgeMult(CubeSym[SymInv[s]], c, temp_0);
        EdgeMult(temp_0, CubeSym[s], d);
        idx = $getFlip(d);
        occ[idx >>> 5] |= 1 << (idx & 31);
        FlipR2S[idx] = (count << 3 | s >>> 1);
      }
      FlipS2R[count++] = i;
    }
  }
  count = 0;
  for (i = 0; i < 69; occ[i++] = 0)
  ;
  for (i = 0; i < 2187; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) == 0) {
      $setTwist(c, i);
      for (s = 0; s < 16; s = s + 2) {
        CornMultSym(CubeSym[SymInv[s]], c, temp_0);
        CornMultSym(temp_0, CubeSym[s], d);
        idx = $getTwist(d);
        occ[idx >>> 5] |= 1 << (idx & 31);
        TwistR2S[idx] = (count << 3 | s >>> 1);
      }
      TwistS2R[count++] = i;
    }
  }
  mask = initDim(_3J_classLit, makeCastMap([Q$Serializable]), -1, 56, 3);
  for (i = 0; i < 40320; ++i) {
    set8Perm(c.ep, i);
    a = ~~($getURtoUL(c) / 6);
    b = ~~($getDRtoDL(c) / 6);
    mask[a] = or(mask[a], shl(P1_longLit, b));
  }
  for (i = 0; i < 56; ++i) {
    count = 0;
    for (j = 0; j < 56; ++j) {
      neq(and(mask[i], shl(P1_longLit, j)), P0_longLit) && (merge[i][j] = count++);
    }
  }
  count = 0;
  for (i = 0; i < 1260; occ[i++] = 0)
  ;
  for (i = 0; i < 40320; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) == 0) {
      set8Perm(c.ep, i);
      for (s = 0; s < 16; ++s) {
        EdgeMult(CubeSym[SymInv[s]], c, temp_0);
        EdgeMult(temp_0, CubeSym[s], d);
        idx = get8Perm(d.ep);
        occ[idx >>> 5] |= 1 << (idx & 31);
        a = $getURtoUL(d);
        b = $getDRtoDL(d);
        m_0 = merge[~~(a / 6)][~~(b / 6)] * 4032 + a * 12 + b % 6 * 2 + get8Parity(idx);
        MtoEPerm[m_0] = (count << 4 | s);
        EPermR2S[idx] = (count << 4 | s);
      }
      EPermS2R[count++] = i;
    }
  }
}

function set8Perm(arr, idx){
  $clinit_CubieCube();
  var i, m_0, p, v, val;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    p = ($clinit_Util() , fact)[7 - i];
    v = ~~(idx / p);
    idx = idx - v * p;
    v <<= 2;
    arr[i] = (val >> v & 7);
    m_0 = (1 << v) - 1;
    val = (val & m_0) + (val >> 4 & ~m_0);
  }
  arr[7] = val;
}

function CubieCube(){
}

_ = CubieCube_3.prototype = CubieCube_2.prototype = CubieCube_0.prototype = CubieCube.prototype = new Object_0;
_.getClass$ = function getClass_216(){
  return Lnet_cubing_mark2_client_CubieCube_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$CubieCube]);
_.temps = null;
var CPermS2R, CubeSym, EPermR2S = null, EPermS2R, FlipR2S = null, FlipS2R, MtoEPerm, Sym8Move, Sym8Mult, Sym8MultInv, SymInv, SymMove, SymMoveUD, SymMult, TwistR2S = null, TwistS2R, e2c, merge, moveCube = null, temp_0, urf1, urf2, urfMove;
function $clinit_GreetingService_Proxy(){
  $clinit_GreetingService_Proxy = nullMethod;
  SERIALIZER = new GreetingService_TypeSerializer_0;
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter_0(this$static.moduleBaseURL, this$static.serializationPolicyName) , $clearImpl(clientSerializationStreamWriter.objectMap) , $clearImpl(clientSerializationStreamWriter.stringMap) , $clear(clientSerializationStreamWriter.stringTable) , clientSerializationStreamWriter.encodeBuffer = new StringBuffer_0 , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $greetServer(this$static, input, callback){
  var $e0, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper_0(this$static);
  try {
    streamWriter = (!!$stats && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$0) , helper.this$0.rpcToken != null && $writeObject(helper.streamWriter, helper.this$0) , $writeString(helper.streamWriter, 'net.cubing.mark2.client.GreetingService') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 1) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, input));
    $finish_0(helper, callback, $clinit_RequestCallbackAdapter$ResponseReader());
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$SerializationException)) {
      $onFailure(callback);
    }
     else 
      throw $e0;
  }
}

function GreetingService_Proxy_0(){
  $clinit_GreetingService_Proxy();
  RemoteServiceProxy_0.call(this, $moduleBase, SERIALIZER);
}

function GreetingService_Proxy(){
}

//_ = GreetingService_Proxy_0.prototype = GreetingService_Proxy.prototype = new RemoteServiceProxy;
_.getClass$ = function getClass_217(){
  return Lnet_cubing_mark2_client_GreetingService_1Proxy_2_classLit;
}
;
var SERIALIZER;
function $clinit_GreetingService_TypeSerializer(){
  var result, result_0;
  $clinit_GreetingService_TypeSerializer = nullMethod;
  methodMapNative_0 = (result = {} , result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate, deserialize, serialize] , result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_0, deserialize_0] , result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_0] , result['java.lang.IllegalArgumentException/1755012560'] = [instantiate_1, deserialize_1] , result['java.lang.NumberFormatException/3305228476'] = [instantiate_2, deserialize_2] , result['java.lang.String/2004016611'] = [instantiate_3, deserialize_3, serialize_1] , result);
  result_0 = [];
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result_0[getHashCode(Ljava_lang_IllegalArgumentException_2_classLit)] = 'java.lang.IllegalArgumentException/1755012560';
  result_0[getHashCode(Ljava_lang_NumberFormatException_2_classLit)] = 'java.lang.NumberFormatException/3305228476';
  result_0[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
}

function GreetingService_TypeSerializer_0(){
  $clinit_GreetingService_TypeSerializer();
  SerializerBase_0.call(this, methodMapNative_0);
}

function GreetingService_TypeSerializer(){
}

//_ = GreetingService_TypeSerializer_0.prototype = GreetingService_TypeSerializer.prototype = new SerializerBase;
_.getClass$ = function getClass_218(){
  return Lnet_cubing_mark2_client_GreetingService_1TypeSerializer_2_classLit;
}
;
var methodMapNative_0 = null;


function $Solve(this$static, c){
  var i;
  c.temps = new CubieCube_0;
  for (i = 0; i < 6; ++i) {
    this$static.twist[i] = $getTwistSym(c);
    this$static.tsym[i] = this$static.twist[i] & 7;
    this$static.twist[i] >>>= 3;
    this$static.flip[i] = $getFlipSym(c);
    this$static.fsym[i] = this$static.flip[i] & 7;
    this$static.flip[i] >>>= 3;
    this$static.slice_0[i] = $getUDSlice(c);
    this$static.corn0[i] = $getCPermSym(c);
    this$static.csym0[i] = this$static.corn0[i] & 15;
    this$static.corn0[i] >>>= 4;
    this$static.mid30[i] = $getMid3(c);
    this$static.e10[i] = $getURtoUL(c);
    this$static.e20[i] = $getDRtoDL(c);
    this$static.prun[i] = Math.max(Math.max(($clinit_CoordCube() , UDSliceTwistPrun)[this$static.twist[i] * 495 + UDSliceConj[this$static.slice_0[i]][this$static.tsym[i]]], UDSliceFlipPrun[this$static.flip[i] * 495 + UDSliceConj[this$static.slice_0[i]][this$static.fsym[i]]]), TwistFlipPrun[this$static.twist[i] * 2688 + (this$static.flip[i] << 3 | ($clinit_CubieCube() , Sym8MultInv)[this$static.fsym[i]][this$static.tsym[i]])]);
    CornMult(urf2, c, c.temps);
    CornMult(c.temps, urf1, c);
    EdgeMult(urf2, c, c.temps);
    EdgeMult(c.temps, urf1, c);
    i == 2 && $invCubieCube(c);
  }
  this$static.solution = null;
  for (this$static.length1 = 0; this$static.length1 < this$static.sol; ++this$static.length1) {
    this$static.maxlength2 = Math.min(~~(this$static.sol / 2) + 1, this$static.sol - this$static.length1);
    for (this$static.urfidx = 0; this$static.urfidx < 6; ++this$static.urfidx) {
      this$static.corn[0] = this$static.corn0[this$static.urfidx];
      this$static.csym[0] = this$static.csym0[this$static.urfidx];
      this$static.mid3[0] = this$static.mid30[this$static.urfidx];
      this$static.e1[0] = this$static.e10[this$static.urfidx];
      this$static.e2[0] = this$static.e20[this$static.urfidx];
      if (this$static.prun[this$static.urfidx] <= this$static.length1 && $phase1(this$static, this$static.twist[this$static.urfidx], this$static.tsym[this$static.urfidx], this$static.flip[this$static.urfidx], this$static.fsym[this$static.urfidx], this$static.slice_0[this$static.urfidx], this$static.length1, 18)) {
        return this$static.solution == null?'Error 8':this$static.solution;
      }
    }
  }
  return 'Error 7';
}

function $init2(this$static){
  var cornx, edge, esym, ex, i, lm, m_0, mid, prun, s, sb, urf;
//  if (gt(fromDouble(currentTimeMillis0()), this$static.timeOut)) {
//    return true;
//  }
  this$static.valid2 = Math.min(this$static.valid2, this$static.valid1);
  for (i = this$static.valid1; i < this$static.length1; ++i) {
    m_0 = this$static.move[i];
    this$static.corn[i + 1] = ($clinit_CoordCube() , CPermMove)[this$static.corn[i]][($clinit_CubieCube() , SymMove)[this$static.csym[i]][m_0]];
    this$static.csym[i + 1] = SymMult[this$static.corn[i + 1] & 15][this$static.csym[i]];
    this$static.corn[i + 1] >>>= 4;
    this$static.mid3[i + 1] = Mid3Move[this$static.mid3[i]][m_0];
  }
  this$static.valid1 = this$static.length1;
  mid = ($clinit_CoordCube() , Mid32MPerm)[this$static.mid3[this$static.length1] % 24];
  prun = MCPermPrun[this$static.corn[this$static.length1] * 24 + MPermConj[mid][this$static.csym[this$static.length1]]];
  if (prun >= this$static.maxlength2) {
    return false;
  }
  for (i = this$static.valid2; i < this$static.length1; ++i) {
    this$static.e1[i + 1] = Mid3Move[this$static.e1[i]][this$static.move[i]];
    this$static.e2[i + 1] = Mid3Move[this$static.e2[i]][this$static.move[i]];
  }
  this$static.valid2 = this$static.length1;
  cornx = this$static.corn[this$static.length1];
  ex = ($clinit_CubieCube() , merge)[~~(this$static.e1[this$static.length1] / 6)][~~(this$static.e2[this$static.length1] / 6)] * 4032 + this$static.e1[this$static.length1] * 12 + this$static.e2[this$static.length1] % 6 * 2 + (CParity[cornx >>> 3] >>> (cornx & 7) & 1 ^ ($clinit_Util() , parity4)[mid]);
  edge = MtoEPerm[ex];
  esym = edge & 15;
  edge >>>= 4;
  prun = Math.max(MEPermPrun[edge * 24 + MPermConj[mid][esym]], prun);
  if (prun >= this$static.maxlength2) {
    return false;
  }
  lm = this$static.length1 == 0?10:std2ud[~~(this$static.move[this$static.length1 - 1] / 3) * 3 + 1];
  for (i = prun; i < this$static.maxlength2; ++i) {
    if ($phase2(this$static, edge, esym, this$static.corn[this$static.length1], this$static.csym[this$static.length1], mid, i, this$static.length1, lm)) {
      this$static.sol = this$static.length1 + i;
      sb = "";
      urf = this$static.urfidx;
      this$static.inverse && (urf = (urf + 3) % 6);
      if (urf < 3) {
        for (s = 0; s < this$static.length1; ++s) {
          sb += move2str[urfMove[urf][this$static.move[s]]];
          sb += ' ';
        }
        this$static.useSeparator && (sb.impl.string += '.' , sb);
        for (s = this$static.length1; s < this$static.sol; ++s) {
          sb += move2str[urfMove[urf][this$static.move[s]]];
          sb += ' ';
        }
      }
       else {
        for (s = this$static.sol - 1; s >= this$static.length1; --s) {
          sb += move2str[urfMove[urf][this$static.move[s]]];
          sb += ' ';
        }
        this$static.useSeparator && (sb += '.' , sb);
        for (s = this$static.length1 - 1; s >= 0; --s) {
          sb += move2str[urfMove[urf][this$static.move[s]]];
          sb += ' ';
        }
      }
//      sb.impl.string += '(';
//      $append_1(sb, this$static.sol);
//      sb.impl.string += 'f)';
      this$static.solution = sb;
      return true;
    }
  }
  return false;
}

function $phase1(this$static, twist, tsym, flip, fsym, slice, maxl, lm){
  var flipx, fsymx, m_0, slicex, tsymx, twistx;
  if (twist == 0 && flip == 0 && slice == 0 && maxl < 5) {
    return maxl == 0 && $init2(this$static);
  }
  for (m_0 = 0; m_0 < 18; ++m_0) {
    if (($clinit_Util() , ckmv)[lm][m_0]) {
      m_0 += 2;
      continue;
    }
    slicex = ($clinit_CoordCube() , UDSliceMove)[slice][m_0];
    twistx = TwistMove[twist][($clinit_CubieCube() , Sym8Move)[tsym][m_0]];
    tsymx = Sym8Mult[twistx & 7][tsym];
    twistx >>>= 3;
    if (UDSliceTwistPrun[twistx * 495 + UDSliceConj[slicex][tsymx]] >= maxl) {
      continue;
    }
    flipx = FlipMove[flip][Sym8Move[fsym][m_0]];
    fsymx = Sym8Mult[flipx & 7][fsym];
    flipx >>>= 3;
    if (TwistFlipPrun[twistx * 2688 + (flipx << 3 | Sym8MultInv[fsymx][tsymx])] >= maxl || UDSliceFlipPrun[flipx * 495 + UDSliceConj[slicex][fsymx]] >= maxl) {
      continue;
    }
    this$static.move[this$static.length1 - maxl] = m_0;
    this$static.valid1 = Math.min(this$static.valid1, this$static.length1 - maxl);
    if ($phase1(this$static, twistx, tsymx, flipx, fsymx, slicex, maxl - 1, m_0)) {
      return true;
    }
  }
  return false;
}

function $phase2(this$static, edge, esym, corn, csym, mid, maxl, depth, lm){
  var cornx, csymx, edgex, esymx, m_0, midx;
  if (edge == 0 && corn == 0 && mid == 0) {
    return true;
  }
  for (m_0 = 0; m_0 < 10; ++m_0) {
    if (($clinit_Util() , ckmv2)[lm][m_0]) {
      continue;
    }
    midx = ($clinit_CoordCube() , MPermMove)[mid][m_0];
    edgex = EPermMove[edge][($clinit_CubieCube() , SymMoveUD)[esym][m_0]];
    esymx = SymMult[edgex & 15][esym];
    edgex >>>= 4;
    if (MEPermPrun[edgex * 24 + MPermConj[midx][esymx]] >= maxl) {
      continue;
    }
    cornx = CPermMove[corn][SymMove[csym][ud2std[m_0]]];
    csymx = SymMult[cornx & 15][csym];
    cornx >>>= 4;
    if (MCPermPrun[cornx * 24 + MPermConj[midx][csymx]] >= maxl) {
      continue;
    }
    this$static.move[depth] = ud2std[m_0];
    if ($phase2(this$static, edgex, esymx, cornx, csymx, midx, maxl - 1, depth + 1, m_0)) {
      return true;
    }
  }
  return false;
}

function $solution(this$static, facelets){
  var $e0, cc, i, s;
  init_0();
  for (i = 0; i < 6; this$static.count[i++] = 0)
  ;
  try {
    for (i = 0; i < 54; ++i) {
      switch (facelets.charCodeAt(i)) {
        case 85:
          this$static.f[i] = 0;
          break;
        case 82:
          this$static.f[i] = 1;
          break;
        case 70:
          this$static.f[i] = 2;
          break;
        case 68:
          this$static.f[i] = 3;
          break;
        case 76:
          this$static.f[i] = 4;
          break;
        case 66:
          this$static.f[i] = 5;
          break;
        default:return 'Error 1';
      }
      ++this$static.count[this$static.f[i]];
    }
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      return 'Error 1';
    }
     else 
      throw $e0;
  }
  for (i = 0; i < 6; ++i)
    if (this$static.count[i] != 9) {
      return 'Error 1';
    }
  cc = toCubieCube(this$static.f);
//  if ((s = $verify(cc)) != 0)
//    return 'Error ' + (s < 0?-s:s);
  this$static.useSeparator = false;
  this$static.inverse = true;
//  this$static.timeOut = add_0(fromDouble(currentTimeMillis0()), P186a0_longLit);
  this$static.sol = 22;
  return $Solve(this$static, cc);
}

function Search_0(){
  this.move = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 31, 1);
  this.corn = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 20, 1);
  this.csym = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 20, 1);
  this.mid3 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 20, 1);
  this.e1 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 20, 1);
  this.e2 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 20, 1);
  this.twist = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.tsym = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.flip = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.fsym = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.slice_0 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.corn0 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.csym0 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.mid30 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.e10 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.e20 = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.prun = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.count = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 6, 1);
  this.f = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 54, 1);
}

function Search(){
}

_ = Search_0.prototype = Search.prototype = new Object_0;
_.getClass$ = function getClass_219(){
  return Lnet_cubing_mark2_client_Search_2_classLit;
}
;
_.inverse = false;
_.length1 = 0;
_.maxlength2 = 0;
_.sol = 999;
_.solution = null;
//_.timeOut = P0_longLit;
_.urfidx = 0;
_.useSeparator = false;
_.valid1 = 0;
_.valid2 = 0;
function init_0(safeStatusCallback){
  if (inited)
    return;
  safeStatusCallback("[0/9] Initializing Cubie Cube...");
  $clinit_CubieCube();
  FlipR2S = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 2048, 1);
  TwistR2S = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 2187, 1);
  EPermR2S = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 40320, 1);
  safeStatusCallback("[1/9] Initializing Sym2Raw...");
  initSym2Raw();
  safeStatusCallback("[2/9] Initializing CoordCube...");
  $clinit_CoordCube();
  safeStatusCallback("[3/9] Initializing Perm, Flip, and Twist Moves...");
  initCPermMove();
  initEPermMove();
  initFlipMove();
  initTwistMove();
  safeStatusCallback("[4/9] Initializing UDSlice...");
  EPermR2S = null;
  FlipR2S = null;
  TwistR2S = null;
  initUDSliceMove();
  initUDSliceConj();
  safeStatusCallback("[5/9] Initializing Mid3Move...");
  initMid3Move();
  initMid32MPerm();
  initCParity();
  safeStatusCallback("[6/9] Initializing Perms...");
  initMPermMove();
  initMPermConj();
  safeStatusCallback("[7/9] Initializing TwistFlipSlicePrun...");
  initTwistFlipSlicePrun();
  safeStatusCallback("[8/9] Initializing MCEPermPrum...");
  initMCEPermPrun();
  safeStatusCallback("[9/9] Done initializing 3x3x3...");
  inited = true;
}

function randomCube_0(){
  var cperm, eperm, gen;
//  gen = new Random_0;
  do {
    eperm = Math.floor(randomSource.random() * 479001600);//$nextInt(gen, 479001600);
    cperm = Math.floor(randomSource.random() * 40320);//$nextInt(gen, 40320);
  }
   while ((get8Parity(cperm) ^ get12Parity(eperm)) != 0);
  return toFaceCube(new CubieCube_2(cperm, Math.floor(randomSource.random() * 2187), eperm, Math.floor(randomSource.random() * 2048)));
}

var inited = false;
function $clinit_Util(){
  $clinit_Util = nullMethod;
  var i, j;
  cornerFacelet = [[8, 9, 20], [6, 18, 38], [0, 36, 47], [2, 45, 11], [29, 26, 15], [27, 44, 24], [33, 53, 42], [35, 17, 51]];
  edgeFacelet = [[5, 10], [7, 19], [3, 37], [1, 46], [32, 16], [28, 25], [30, 43], [34, 52], [23, 12], [21, 41], [50, 39], [48, 14]];
  cornerColor = [[0, 1, 2], [0, 2, 4], [0, 4, 5], [0, 5, 1], [3, 2, 1], [3, 4, 2], [3, 5, 4], [3, 1, 5]];
  edgeColor = [[0, 1], [0, 2], [0, 4], [0, 5], [3, 1], [3, 2], [3, 4], [3, 5], [2, 1], [2, 4], [5, 4], [5, 1]];
  Cnk = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [12, 12], 2, 1);
  fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600];
  move2str = ['U ', 'U2', "U'", 'R ', 'R2', "R'", 'F ', 'F2', "F'", 'D ', 'D2', "D'", 'L ', 'L2', "L'", 'B ', 'B2', "B'"];
  ud2std = [0, 1, 2, 4, 7, 9, 10, 11, 13, 16];
  std2ud = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 18, 1);
  ckmv = initDims([_3_3Z_classLit, _3Z_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$boolean_$1, Q$Serializable])], [Q$boolean_$1, -1], [19, 18], 2, 2);
  ckmv2 = initDims([_3_3Z_classLit, _3Z_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$boolean_$1, Q$Serializable])], [Q$boolean_$1, -1], [11, 10], 2, 2);
  parity4 = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 24, 1);
  perm3 = [[11, 10, 9], [10, 11, 9], [11, 9, 10], [9, 11, 10], [10, 9, 11], [9, 10, 11]];
  for (i = 0; i < 10; ++i) {
    std2ud[ud2std[i]] = i;
  }
  for (i = 0; i < 18; ++i) {
    for (j = 0; j < 18; ++j) {
      ckmv[i][j] = ~~(i / 3) == ~~(j / 3) || ~~(i / 3) % 3 == ~~(j / 3) % 3 && i >= j;
    }
    ckmv[18][i] = false;
  }
  for (i = 0; i < 10; ++i) {
    for (j = 0; j < 10; ++j) {
      ckmv2[i][j] = ckmv[ud2std[i]][ud2std[j]];
    }
    ckmv2[10][i] = false;
  }
  for (i = 0; i < 12; ++i) {
    Cnk[i][0] = 1;
    Cnk[i][i] = 1;
    for (j = 1; j < i; ++j) {
      Cnk[i][j] = Cnk[i - 1][j - 1] + Cnk[i - 1][j];
    }
  }
  for (i = 0; i < 24; ++i) {
    parity4[i] = get4Parity(i);
  }
}

function binarySearch(arr, key){
  $clinit_Util();
  var l_0, length_0, mid, r, val;
  length_0 = arr.length;
  if (key <= arr[length_0 - 1]) {
    l_0 = 0;
    r = length_0 - 1;
    while (l_0 <= r) {
      mid = l_0 + r >>> 1;
      val = arr[mid];
      if (key > val) {
        l_0 = mid + 1;
      }
       else if (key < val) {
        r = mid - 1;
      }
       else {
        return mid;
      }
    }
  }
  return 65535;
}

function bitCount(i){
  $clinit_Util();
  i = i - (i >>> 1 & 1431655765);
  i = (i & 858993459) + (i >>> 2 & 858993459);
  return i + (i >>> 8) + (i >>> 4) & 15;
}

function bitOdd(i){
  $clinit_Util();
  i = (i ^ i >>> 1);
  i = (i ^ i >>> 2);
  i = (i ^ i >>> 4);
  i = (i ^ i >>> 8);
  return (i & 1);
}

function get12Parity(idx){
  $clinit_Util();
  var i, p;
  p = 0;
  for (i = 10; i >= 0; --i) {
    p = p + idx % (12 - i);
    idx = ~~(idx / (12 - i));
  }
  p = (p & 1);
  return p;
}

function get4Parity(idx){
  var i, p;
  p = 0;
  for (i = 2; i >= 0; --i) {
    p = p + idx % (4 - i);
    idx = ~~(idx / (4 - i));
  }
  p = (p & 1);
  return p;
}

function get8Parity(idx){
  $clinit_Util();
  var i, p;
  p = 0;
  for (i = 6; i >= 0; --i) {
    p = p + idx % (8 - i);
    idx = ~~(idx / (8 - i));
  }
  p = (p & 1);
  return p;
}

function toCubieCube(f){
  $clinit_Util();
  var ccRet, col1, col2, i, j, ori;
  ccRet = new CubieCube_0;
  for (i = 0; i < 8; ++i)
    ccRet.cp[i] = 0;
  for (i = 0; i < 12; ++i)
    ccRet.ep[i] = 0;
  for (i = 0; i < 8; ++i) {
    for (ori = 0; ori < 3; ++ori)
      if (f[cornerFacelet[i][ori]] == 0 || f[cornerFacelet[i][ori]] == 3)
        break;
    col1 = f[cornerFacelet[i][(ori + 1) % 3]];
    col2 = f[cornerFacelet[i][(ori + 2) % 3]];
    for (j = 0; j < 8; ++j) {
      if (col1 == cornerColor[j][1] && col2 == cornerColor[j][2]) {
        ccRet.cp[i] = j;
        ccRet.co[i] = ori % 3;
        break;
      }
    }
  }
  for (i = 0; i < 12; ++i) {
    for (j = 0; j < 12; ++j) {
      if (f[edgeFacelet[i][0]] == edgeColor[j][0] && f[edgeFacelet[i][1]] == edgeColor[j][1]) {
        ccRet.ep[i] = j;
        ccRet.eo[i] = 0;
        break;
      }
      if (f[edgeFacelet[i][0]] == edgeColor[j][1] && f[edgeFacelet[i][1]] == edgeColor[j][0]) {
        ccRet.ep[i] = j;
        ccRet.eo[i] = 1;
        break;
      }
    }
  }
  return ccRet;
}

function toFaceCube(cc){
  $clinit_Util();
  var c, e, f, i, j, n, ori, ts;
  f = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 54, 1);
  ts = [85, 82, 70, 68, 76, 66];
  for (i = 0; i < 54; ++i) {
    f[i] = ts[~~(i / 9)];
  }
  for (c = 0; c < 8; ++c) {
    j = cc.cp[c];
    ori = cc.co[c];
    for (n = 0; n < 3; ++n)
      f[cornerFacelet[c][(n + ori) % 3]] = ts[cornerColor[j][n]];
  }
  for (e = 0; e < 12; ++e) {
    j = cc.ep[e];
    ori = cc.eo[e];
    for (n = 0; n < 2; ++n)
      f[edgeFacelet[e][(n + ori) % 2]] = ts[edgeColor[j][n]];
  }
  return String.fromCharCode.apply(null, f);
}

var Cnk, ckmv, ckmv2, cornerColor, cornerFacelet, edgeColor, edgeFacelet, fact, move2str, parity4, perm3, std2ud, ud2std;

var _3I_classLit = createForArray('', '[I'), _3Z_classLit = createForArray('', '[Z'), _3C_classLit = createForArray('', '[C'), _3J_classLit = createForArray('', '[J'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), _3B_classLit = createForArray('', '[B'),  Ljava_util_Random_2_classLit = createForClass('java.util.', 'Random'), _3_3C_classLit = createForArray('', '[[C'), _3_3B_classLit = createForArray('', '[[B'), _3Lnet_cubing_mark2_client_CubieCube_2_classLit = createForArray('[Lnet.cubing.mark2.client.', 'CubieCube;'), _3_3Z_classLit = createForArray('', '[[Z');
//if ($wnd.gwt333) $wnd.gwt333.onScriptLoad();


  /* Methods added by Lucas. */


  var randomSource = undefined;

  // If we have a better (P)RNG:
  var setRandomSource = function(src) {
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

  var ini = function(callback, iniRandomSource, statusCallback) {

    if (typeof statusCallback !== "function") {
      statusCallback = function() {};
    }

    if (!initialized) {
      search = new Search_0;
      init_0(statusCallback);
      setRandomSource(iniRandomSource);
      initialized = true;
    }
    if(callback) setTimeout(callback, 0);
  };

  var getRandomScramble = function() {
    
    theRandomCube = randomCube_0();

    var posit = randomCube_0();
    var solution = $solution(search, posit);

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