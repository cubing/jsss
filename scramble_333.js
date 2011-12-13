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

function Animation$1_0(this$0){
  this.this$0 = this$0;
}

function Animation$1(){
}

_ = Animation$1_0.prototype = Animation$1.prototype = new Object_0;
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
_.getClass$ = function getClass_2(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}
;
_.this$0 = null;
function AnimationScheduler(){
}

_ = AnimationScheduler.prototype = new Object_0;
_.getClass$ = function getClass_3(){
  return Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit;
}
;
function AnimationScheduler$AnimationHandle(){
}

_ = AnimationScheduler$AnimationHandle.prototype = new Object_0;
_.getClass$ = function getClass_4(){
  return Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$AnimationScheduler$AnimationHandle]);
function $clinit_AnimationSchedulerImpl(){
  $clinit_AnimationSchedulerImpl = nullMethod;
  var impl;
  impl = new AnimationSchedulerImplMozilla_0;
  !!impl && (impl.isNativelySupported() || (impl = new AnimationSchedulerImplTimer_0));
  INSTANCE = impl;
}

function AnimationSchedulerImpl(){
}

_ = AnimationSchedulerImpl.prototype = new AnimationScheduler;
_.getClass$ = function getClass_5(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit;
}
;
var INSTANCE = null;
function $requestAnimationFrameImpl(callback, handle){
  var wrapper = $entry(function(time){
    !handle.canceled && callback.execute(time);
  }
  );
  $wnd.mozRequestAnimationFrame(wrapper);
}

function AnimationSchedulerImplMozilla_0(){
}

function AnimationSchedulerImplMozilla(){
}

_ = AnimationSchedulerImplMozilla_0.prototype = AnimationSchedulerImplMozilla.prototype = new AnimationSchedulerImpl;
_.getClass$ = function getClass_6(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImplMozilla_2_classLit;
}
;
_.isNativelySupported = function isNativelySupported(){
  return !!$wnd.mozRequestAnimationFrame;
}
;
_.requestAnimationFrame = function requestAnimationFrame(callback, element){
  var handle;
  handle = new AnimationSchedulerImplMozilla$AnimationHandleImpl_0;
  $requestAnimationFrameImpl(callback, handle);
  return handle;
}
;
function AnimationSchedulerImplMozilla$AnimationHandleImpl_0(){
}

function AnimationSchedulerImplMozilla$AnimationHandleImpl(){
}

_ = AnimationSchedulerImplMozilla$AnimationHandleImpl_0.prototype = AnimationSchedulerImplMozilla$AnimationHandleImpl.prototype = new AnimationScheduler$AnimationHandle;
_.cancel = function cancel(){
  this.canceled = true;
}
;
_.getClass$ = function getClass_7(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImplMozilla$AnimationHandleImpl_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$AnimationScheduler$AnimationHandle]);
_.canceled = false;
function $cancelAnimationFrame(this$static, requestId){
  $remove_9(this$static.animationRequests, requestId);
  this$static.animationRequests.size == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, makeCastMap([Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1, Q$Serializable]), Q$AnimationSchedulerImplTimer$AnimationHandleImpl, this$static.animationRequests.size, 0);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), Q$AnimationSchedulerImplTimer$AnimationHandleImpl_$1);
  duration = new Duration_0;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_9(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start);
  }
  this$static.animationRequests.size > 0 && $schedule(this$static.timer, max(5, 16 - (currentTimeMillis() - duration.start)));
}

function AnimationSchedulerImplTimer_0(){
  this.animationRequests = new ArrayList_0;
  this.timer = new AnimationSchedulerImplTimer$1_0(this);
}

function AnimationSchedulerImplTimer(){
}

_ = AnimationSchedulerImplTimer_0.prototype = AnimationSchedulerImplTimer.prototype = new AnimationSchedulerImpl;
_.getClass$ = function getClass_8(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit;
}
;
_.isNativelySupported = function isNativelySupported_0(){
  return true;
}
;
_.requestAnimationFrame = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl_0(this, callback);
  $add_3(this.animationRequests, requestId);
  this.animationRequests.size == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
function $clinit_Timer(){
  $clinit_Timer = nullMethod;
  timers = new ArrayList_0;
  addCloseHandler(new Timer$1_0);
}

function $cancel_0(this$static){
  this$static.isRepeating?clearInterval_0(this$static.timerId):clearTimeout_0(this$static.timerId);
  $remove_9(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw new IllegalArgumentException_1('must be positive');
  }
  this$static.isRepeating?clearInterval_0(this$static.timerId):clearTimeout_0(this$static.timerId);
  $remove_9(timers, this$static);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_3(timers, this$static);
}

function clearInterval_0(id){
  $wnd.clearInterval(id);
}

function clearTimeout_0(id){
  $wnd.clearTimeout(id);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.fire = function fire(){
  this.isRepeating || $remove_9(timers, this);
  this.run();
}
;
_.getClass$ = function getClass_9(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.isRepeating = false;
_.timerId = 0;
var timers;
function AnimationSchedulerImplTimer$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function AnimationSchedulerImplTimer$1(){
}

_ = AnimationSchedulerImplTimer$1_0.prototype = AnimationSchedulerImplTimer$1.prototype = new Timer;
_.getClass$ = function getClass_10(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit;
}
;
_.run = function run(){
  $updateAnimations(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function AnimationSchedulerImplTimer$AnimationHandleImpl_0(this$0, callback){
  this.this$0 = this$0;
  this.callback = callback;
}

function AnimationSchedulerImplTimer$AnimationHandleImpl(){
}

_ = AnimationSchedulerImplTimer$AnimationHandleImpl_0.prototype = AnimationSchedulerImplTimer$AnimationHandleImpl.prototype = new AnimationScheduler$AnimationHandle;
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$0, this);
}
;
_.getClass$ = function getClass_11(){
  return Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$AnimationScheduler$AnimationHandle, Q$AnimationSchedulerImplTimer$AnimationHandleImpl]);
_.callback = null;
_.this$0 = null;
function Duration_0(){
  this.start = currentTimeMillis();
}

function currentTimeMillis(){
  return (new Date).getTime();
}

function Duration(){
}

_ = Duration_0.prototype = Duration.prototype = new Object_0;
_.getClass$ = function getClass_12(){
  return Lcom_google_gwt_core_client_Duration_2_classLit;
}
;
function $initCause(this$static, cause){
  if (this$static.cause) {
    throw new IllegalStateException_1("Can't overwrite cause");
  }
  if (cause == this$static) {
    throw new IllegalArgumentException_1('Self-causation not permitted');
  }
  this$static.cause = cause;
  return this$static;
}

function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw new NullPointerException_0;
    }
    copy[i] = stackTrace[i];
  }
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getClass$ = function getClass_13(){
  return Ljava_lang_Throwable_2_classLit;
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  var className, msg;
  return className = this.getClass$().typeName , msg = this.getMessage() , msg != null?className + ': ' + msg:className;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Throwable]);
_.cause = null;
_.detailMessage = null;
function Exception_0(message){
  $fillInStackTrace();
  this.detailMessage = message;
}

function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = function getClass_14(){
  return Ljava_lang_Exception_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$Throwable]);
function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  $fillInStackTrace();
  this.cause = cause;
  this.detailMessage = message;
}

function RuntimeException(){
}

_ = RuntimeException_0.prototype = RuntimeException.prototype = new Exception;
_.getClass$ = function getClass_15(){
  return Ljava_lang_RuntimeException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function JavaScriptException_0(e){
  $fillInStackTrace();
  this.e = e;
  $createStackTrace(this);
}

function getDescription(e){
  return instanceOfJso(e)?getDescription0(dynamicCastJso(e)):e + '';
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getName(e){
  var maybeJsoInvocation;
  return e == null?'null':instanceOfJso(e)?getName0(dynamicCastJso(e)):instanceOf(e, Q$String)?'String':(maybeJsoInvocation = e , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return instanceOfJso(e)?$getProperties(dynamicCastJso(e)):'';
}

function JavaScriptException(){
}

_ = JavaScriptException_0.prototype = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = function getClass_16(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}
;
_.getMessage = function getMessage_0(){
  return this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined) , this.message_0;
}
;
_.castableTypeMap$ = makeCastMap([Q$JavaScriptException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function equals__devirtual$(this$static, other){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.equals$(other):maybeJsoInvocation === other;
}

function hashCode__devirtual$(this$static){
  var maybeJsoInvocation;
  return maybeJsoInvocation = this$static , isJavaObject(maybeJsoInvocation)?maybeJsoInvocation.hashCode$():getHashCode(maybeJsoInvocation);
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = function getClass_17(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}
;
function apply(jsFunction, thisObj, arguments_0){
  return jsFunction.apply(thisObj, arguments_0);
  var __0;
}

function enter(){
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE_0));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    try {
      return entry0(jsFunction, this, arguments);
    }
     catch (e) {
      throw e;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply(jsFunction, thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE_0));
    --entryDepth;
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = nullMethod;
  INSTANCE_0 = new SchedulerImpl_0;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl_0(){
}

function push(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].nullMethod() && (rescheduled = push(rescheduled, t)):(t[0].val$outerElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto') , undefined);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, Q$RuntimeException))
        throw $e0;
    }
  }
  return rescheduled;
}

function SchedulerImpl(){
}

_ = SchedulerImpl_0.prototype = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = function getClass_18(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}
;
_.entryCommands = null;
_.finallyCommands = null;
var INSTANCE_0;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function splice(arr, length_0){
  arr.length >= length_0 && arr.splice(0, length_0);
  return arr;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = $inferFrom(instanceOfJso(e.e)?dynamicCastJso(e.e):null);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = splice($inferFrom($makeException()), 2);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, makeCastMap([Q$Serializable]), Q$StackTraceElement, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = new StackTraceElement_0(stack[i]);
  }
  $setStackTrace(stackTrace);
}

function $getProperties(e){
  var result = '';
  try {
    for (var prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function $makeException(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function $inferFrom(e){
  var i, j, stack;
  stack = e && e.stack?e.stack.split('\n'):[];
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = extractNameFromToString(stack[i]);
  }
  return stack;
}

function StringBufferImpl(){
}

_ = StringBufferImpl.prototype = new Object_0;
_.getClass$ = function getClass_19(){
  return Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit;
}
;
function $append(this$static, x){
  this$static.string += x;
}

function $append_0(this$static, x){
  this$static.string += x;
}

function StringBufferImplAppend_0(){
}

function StringBufferImplAppend(){
}

_ = StringBufferImplAppend_0.prototype = StringBufferImplAppend.prototype = new StringBufferImpl;
_.getClass$ = function getClass_20(){
  return Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit;
}
;
_.string = '';
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) || 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $setInnerText(elem, text){
  elem.textContent = text || '';
}

function $eventGetRelatedTarget(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function $getAbsoluteLeft(elem){
  return $getAbsoluteLeftImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteLeftImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().left + viewport.scrollLeft | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenX - doc.getBoxObjectFor(doc.documentElement).screenX;
  }
}

function $getAbsoluteTop(elem){
  return $getAbsoluteTopImpl($getViewportElement(elem.ownerDocument), elem);
}

function $getAbsoluteTopImpl(viewport, elem){
  if (Element.prototype.getBoundingClientRect) {
    return elem.getBoundingClientRect().top + viewport.scrollTop | 0;
  }
   else {
    var doc = elem.ownerDocument;
    return doc.getBoxObjectFor(elem).screenY - doc.getBoxObjectFor(doc.documentElement).screenY;
  }
}

function $getBodyOffsetLeft(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, '');
  return parseInt(style.marginLeft) + parseInt(style.borderLeftWidth);
}

function $getBodyOffsetTop(doc){
  var style = $wnd.getComputedStyle(doc.documentElement, '');
  return parseInt(style.marginTop) + parseInt(style.borderTopWidth);
}

function $getScrollLeft(elem){
  var geckoVersion, style;
  if (!(geckoVersion = getGeckoVersion() , geckoVersion != -1 && geckoVersion >= 1009000) && (style = elem.ownerDocument.defaultView.getComputedStyle(elem, null) , style.direction == 'rtl')) {
    return (elem.scrollLeft || 0) - ((elem.scrollWidth || 0) - elem.clientWidth);
  }
  return elem.scrollLeft || 0;
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function $toString(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function getGeckoVersion(){
  var result = /rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());
  if (result && result.length >= 3) {
    var version = parseInt(result[1]) * 1000000 + parseInt(result[2]) * 1000 + parseInt(result.length >= 5 && !isNaN(result[4])?result[4]:0);
    return version;
  }
  return -1;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0;
}

function $getScrollWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0;
}

function $getViewportElement(this$static){
  return $equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body;
}

function Enum_0(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.getClass$ = function getClass_21(){
  return Ljava_lang_Enum_2_classLit;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum]);
_.name_0 = null;
_.ordinal = 0;
function $clinit_Style$Display(){
  $clinit_Style$Display = nullMethod;
  NONE = new Style$Display$1_0;
  BLOCK = new Style$Display$2_0;
  INLINE = new Style$Display$3_0;
  INLINE_BLOCK = new Style$Display$4_0;
  $VALUES = initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Display, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function values(){
  $clinit_Style$Display();
  return $VALUES;
}

function Style$Display(){
}

_ = Style$Display.prototype = new Enum;
_.getClass$ = function getClass_22(){
  return Lcom_google_gwt_dom_client_Style$Display_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES, BLOCK, INLINE, INLINE_BLOCK, NONE;
function Style$Display$1_0(){
  Enum_0.call(this, 'NONE', 0);
}

function Style$Display$1(){
}

_ = Style$Display$1_0.prototype = Style$Display$1.prototype = new Style$Display;
_.getClass$ = function getClass_23(){
  return Lcom_google_gwt_dom_client_Style$Display$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Display$2_0(){
  Enum_0.call(this, 'BLOCK', 1);
}

function Style$Display$2(){
}

_ = Style$Display$2_0.prototype = Style$Display$2.prototype = new Style$Display;
_.getClass$ = function getClass_24(){
  return Lcom_google_gwt_dom_client_Style$Display$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Display$3_0(){
  Enum_0.call(this, 'INLINE', 2);
}

function Style$Display$3(){
}



_ = Style$Display$3_0.prototype = Style$Display$3.prototype = new Style$Display;
_.getClass$ = function getClass_25(){
  return Lcom_google_gwt_dom_client_Style$Display$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Display$4_0(){
  Enum_0.call(this, 'INLINE_BLOCK', 3);
}

function Style$Display$4(){
}

_ = Style$Display$4_0.prototype = Style$Display$4.prototype = new Style$Display;
_.getClass$ = function getClass_26(){
  return Lcom_google_gwt_dom_client_Style$Display$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Display, Q$Style$HasCssName, Q$Serializable, Q$Comparable, Q$Enum]);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = nullMethod;
  VISIBLE = new Style$Overflow$1_0;
  HIDDEN = new Style$Overflow$2_0;
  SCROLL = new Style$Overflow$3_0;
  AUTO = new Style$Overflow$4_0;
  $VALUES_0 = initValues(_3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Overflow, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

function values_0(){
  $clinit_Style$Overflow();
  return $VALUES_0;
}

function Style$Overflow(){
}

_ = Style$Overflow.prototype = new Enum;
_.getClass$ = function getClass_27(){
  return Lcom_google_gwt_dom_client_Style$Overflow_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES_0, AUTO, HIDDEN, SCROLL, VISIBLE;
function Style$Overflow$1_0(){
  Enum_0.call(this, 'VISIBLE', 0);
}

function Style$Overflow$1(){
}

_ = Style$Overflow$1_0.prototype = Style$Overflow$1.prototype = new Style$Overflow;
_.getClass$ = function getClass_28(){
  return Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Overflow$2_0(){
  Enum_0.call(this, 'HIDDEN', 1);
}

function Style$Overflow$2(){
}

_ = Style$Overflow$2_0.prototype = Style$Overflow$2.prototype = new Style$Overflow;
_.getClass$ = function getClass_29(){
  return Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Overflow$3_0(){
  Enum_0.call(this, 'SCROLL', 2);
}

function Style$Overflow$3(){
}

_ = Style$Overflow$3_0.prototype = Style$Overflow$3.prototype = new Style$Overflow;
_.getClass$ = function getClass_30(){
  return Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Overflow$4_0(){
  Enum_0.call(this, 'AUTO', 3);
}

function Style$Overflow$4(){
}

_ = Style$Overflow$4_0.prototype = Style$Overflow$4.prototype = new Style$Overflow;
_.getClass$ = function getClass_31(){
  return Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$HasCssName, Q$Style$Overflow, Q$Serializable, Q$Comparable, Q$Enum]);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = nullMethod;
  PX = new Style$Unit$1_0;
  PCT = new Style$Unit$2_0;
  EM = new Style$Unit$3_0;
  EX = new Style$Unit$4_0;
  PT = new Style$Unit$5_0;
  PC = new Style$Unit$6_0;
  IN = new Style$Unit$7_0;
  CM = new Style$Unit$8_0;
  MM = new Style$Unit$9_0;
  $VALUES_1 = initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, makeCastMap([Q$Serializable]), Q$Style$Unit, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function values_1(){
  $clinit_Style$Unit();
  return $VALUES_1;
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = function getClass_32(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES_1, CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function Style$Unit$1_0(){
  Enum_0.call(this, 'PX', 0);
}

function Style$Unit$1(){
}

_ = Style$Unit$1_0.prototype = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = function getClass_33(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$2_0(){
  Enum_0.call(this, 'PCT', 1);
}

function Style$Unit$2(){
}

_ = Style$Unit$2_0.prototype = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = function getClass_34(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$3_0(){
  Enum_0.call(this, 'EM', 2);
}

function Style$Unit$3(){
}

_ = Style$Unit$3_0.prototype = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = function getClass_35(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$4_0(){
  Enum_0.call(this, 'EX', 3);
}

function Style$Unit$4(){
}

_ = Style$Unit$4_0.prototype = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = function getClass_36(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$5_0(){
  Enum_0.call(this, 'PT', 4);
}

function Style$Unit$5(){
}

_ = Style$Unit$5_0.prototype = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = function getClass_37(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$6_0(){
  Enum_0.call(this, 'PC', 5);
}

function Style$Unit$6(){
}

_ = Style$Unit$6_0.prototype = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = function getClass_38(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$7_0(){
  Enum_0.call(this, 'IN', 6);
}

function Style$Unit$7(){
}

_ = Style$Unit$7_0.prototype = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = function getClass_39(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$8_0(){
  Enum_0.call(this, 'CM', 7);
}

function Style$Unit$8(){
}

_ = Style$Unit$8_0.prototype = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = function getClass_40(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Style$Unit$9_0(){
  Enum_0.call(this, 'MM', 8);
}

function Style$Unit$9(){
}

_ = Style$Unit$9_0.prototype = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = function getClass_41(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Style$Unit, Q$Serializable, Q$Comparable, Q$Enum]);
function Event_0(){
}

_ = Event_0.prototype = new Object_0;
_.getClass$ = function getClass_42(){
  return Lcom_google_web_bindery_event_shared_Event_2_classLit;
}
;
_.toString$ = function toString_3(){
  return 'An event type';
}
;
_.source = null;
function $overrideSource(this$static, source){
  this$static.source = source;
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Event_0;
_.getClass$ = function getClass_43(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}
;
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast($unsafeGet(registered, nativeEvent.type), Q$DomEvent$Type);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      $setNativeEvent(typeKey.flyweight, nativeEvent);
      $setRelativeElement(typeKey.flyweight, relativeElem);
      $fireEvent_0(handlerSource, typeKey.flyweight);
      $setNativeEvent(typeKey.flyweight, currentNative);
      $setRelativeElement(typeKey.flyweight, currentRelativeElem);
    }
  }
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.getClass$ = function getClass_44(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}
;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function HumanInputEvent(){
}

_ = HumanInputEvent.prototype = new DomEvent;
_.getClass$ = function getClass_45(){
  return Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit;
}
;
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientX || 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft(relativeElem) + $getScrollLeft_0(relativeElem.ownerDocument);
  }
  return this$static.nativeEvent.clientX || 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (e.clientY || 0) - $getAbsoluteTop(relativeElem) + (relativeElem.scrollTop || 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return this$static.nativeEvent.clientY || 0;
}

function MouseEvent_0(){
}

_ = MouseEvent_0.prototype = new HumanInputEvent;
_.getClass$ = function getClass_46(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}
;
function $clinit_ClickEvent(){
  $clinit_ClickEvent = nullMethod;
  TYPE = new DomEvent$Type_0('click', new ClickEvent_0);
}

function ClickEvent_0(){
}

function ClickEvent(){
}

_ = ClickEvent_0.prototype = ClickEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch(handler){
  dynamicCast(handler, Q$ClickHandler).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
_.getClass$ = function getClass_47(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}
;
var TYPE;
function Event$Type(){
}

_ = Event$Type.prototype = new Object_0;
_.getClass$ = function getClass_48(){
  return Lcom_google_web_bindery_event_shared_Event$Type_2_classLit;
}
;
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
function GwtEvent$Type_0(){
  this.index_0 = ++nextHashCode;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type_0.prototype = GwtEvent$Type.prototype = new Event$Type;
_.getClass$ = function getClass_49(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}
;
function DomEvent$Type_0(eventName, flyweight){
  GwtEvent$Type_0.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap_0);
  $unsafePut(registered, eventName, this);
  this.name_0 = eventName;
}

function DomEvent$Type(){
}

_ = DomEvent$Type_0.prototype = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = function getClass_50(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$DomEvent$Type]);
_.flyweight = null;
_.name_0 = null;
function KeyEvent_0(){
}

_ = KeyEvent_0.prototype = new DomEvent;
_.getClass$ = function getClass_51(){
  return Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit;
}
;
function KeyCodeEvent(){
}

_ = KeyCodeEvent.prototype = new KeyEvent_0;
_.getClass$ = function getClass_52(){
  return Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit;
}
;
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = nullMethod;
  TYPE_0 = new DomEvent$Type_0('keyup', new KeyUpEvent_0);
}

function KeyUpEvent_0(){
}

function KeyUpEvent(){
}

_ = KeyUpEvent_0.prototype = KeyUpEvent.prototype = new KeyCodeEvent;
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, Q$KeyUpHandler).onKeyUp(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
_.getClass$ = function getClass_53(){
  return Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit;
}
;
var TYPE_0;
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = nullMethod;
  TYPE_1 = new DomEvent$Type_0('mousedown', new MouseDownEvent_0);
}

function $dispatch(this$static, handler){
  $beginDragging(handler.this$0, this$static);
}

function MouseDownEvent_0(){
}

function MouseDownEvent(){
}

_ = MouseDownEvent_0.prototype = MouseDownEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_1(handler){
  $dispatch(this, dynamicCast(handler, Q$MouseDownHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
_.getClass$ = function getClass_54(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}
;
var TYPE_1;
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = nullMethod;
  TYPE_2 = new DomEvent$Type_0('mousemove', new MouseMoveEvent_0);
}

function $dispatch_0(this$static, handler){
  $continueDragging(handler.this$0, this$static);
}

function MouseMoveEvent_0(){
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent_0.prototype = MouseMoveEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_2(handler){
  $dispatch_0(this, dynamicCast(handler, Q$MouseMoveHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
_.getClass$ = function getClass_55(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}
;
var TYPE_2;
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = nullMethod;
  TYPE_3 = new DomEvent$Type_0('mouseout', new MouseOutEvent_0);
}

function MouseOutEvent_0(){
}

function MouseOutEvent(){
}

_ = MouseOutEvent_0.prototype = MouseOutEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_3(handler){
  dynamicCast(dynamicCast(handler, Q$MouseOutHandler), Q$DialogBox$MouseHandler);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
_.getClass$ = function getClass_56(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}
;
var TYPE_3;
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = nullMethod;
  TYPE_4 = new DomEvent$Type_0('mouseover', new MouseOverEvent_0);
}

function MouseOverEvent_0(){
}

function MouseOverEvent(){
}

_ = MouseOverEvent_0.prototype = MouseOverEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_4(handler){
  dynamicCast(dynamicCast(handler, Q$MouseOverHandler), Q$DialogBox$MouseHandler);
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
_.getClass$ = function getClass_57(){
  return Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit;
}
;
var TYPE_4;
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = nullMethod;
  TYPE_5 = new DomEvent$Type_0('mouseup', new MouseUpEvent_0);
}

function $dispatch_1(this$static, handler){
  $endDragging(handler.this$0, this$static);
}

function MouseUpEvent_0(){
}

function MouseUpEvent(){
}

_ = MouseUpEvent_0.prototype = MouseUpEvent.prototype = new MouseEvent_0;
_.dispatch = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, Q$MouseUpHandler));
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.getClass$ = function getClass_58(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}
;
var TYPE_5;
function $unsafeGet(this$static, key){
  return this$static.map[key];
}

function $unsafePut(this$static, key, value){
  this$static.map[key] = value;
}

function PrivateMap_0(){
  this.map = {};
}

function PrivateMap(){
}

_ = PrivateMap_0.prototype = PrivateMap.prototype = new Object_0;
_.getClass$ = function getClass_59(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}
;
_.map = null;
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

function CloseEvent(){
}

_ = CloseEvent_0.prototype = CloseEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, Q$CloseHandler).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
_.getClass$ = function getClass_60(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}
;
var TYPE_6 = null;
function ResizeEvent_0(width){
  this.width = width;
}

function fire_1(source, width){
  var event_0;
  if (TYPE_7) {
    event_0 = new ResizeEvent_0(width);
    $fireEvent(source, event_0);
  }
}

function ResizeEvent(){
}

_ = ResizeEvent_0.prototype = ResizeEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, Q$ResizeHandler).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.getClass$ = function getClass_61(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}
;
_.width = 0;
var TYPE_7 = null;
function $dispatch_2(handler){
  handler.this$0.autoHideOnHistoryEvents && handler.this$0.hide();
}

function ValueChangeEvent_0(){
}

function fire_2(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new ValueChangeEvent_0;
    $fireEvent(source.handlers, event_0);
  }
}

function ValueChangeEvent(){
}

_ = ValueChangeEvent_0.prototype = ValueChangeEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_8(handler){
  $dispatch_2(dynamicCast(handler, Q$ValueChangeHandler));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
_.getClass$ = function getClass_62(){
  return Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit;
}
;
var TYPE_8 = null;
function $addHandler(this$static, type, handler){
  return new LegacyHandlerWrapper_0($doAdd(this$static.eventBus, type, handler));
}

function $fireEvent(this$static, event_0){
  var $e0, e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$UmbrellaException)) {
      e = $e0;
      throw new UmbrellaException_2(e.causes);
    }
     else 
      throw $e0;
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager_0(source){
  HandlerManager_1.call(this, source, false);
}

function HandlerManager_1(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus_0(fireInReverseOrder);
  this.source = source;
}

function HandlerManager(){
}

_ = HandlerManager_1.prototype = HandlerManager_0.prototype = HandlerManager.prototype = new Object_0;
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
_.getClass$ = function getClass_63(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
_.eventBus = null;
_.source = null;
function EventBus(){
}

_ = EventBus.prototype = new Object_0;
_.getClass$ = function getClass_64(){
  return Lcom_google_web_bindery_event_shared_EventBus_2_classLit;
}
;
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList_0);
  $add_3(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type, handler){
  if (!type) {
    throw new NullPointerException_1('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_1('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2_0(this$static, type, handler)):$doAddNow(this$static, type, null, handler);
  return new SimpleEventBus$1_0(this$static, type, handler);
}

function $doAddNow(this$static, type, source, handler){
  var l_0;
  l_0 = $ensureHandlerList(this$static, type, source);
  l_0.add(handler);
}

function $doFire(this$static, event_0){
  var $e0, causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_1('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_0()):handlers.listIterator();
    while (this$static.isReverseOrder?it.i > 0:it.i < it.this$0_0.size_0()) {
      handler = this$static.isReverseOrder?$previous(it):$next_3(it);
      try {
        event_0.dispatch(dynamicCast(handler, Q$EventHandler));
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, Q$Throwable)) {
          e = $e0;
          !causes && (causes = new HashSet_0);
          $add_4(causes, e);
        }
         else 
          throw $e0;
      }
    }
    if (causes) {
      throw new UmbrellaException_1(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type, source, handler){
  var l_0, removed, sourceMap;
  l_0 = $getHandlerList(this$static, type, source);
  removed = l_0.remove_1(handler);
  removed && l_0.isEmpty() && (sourceMap = dynamicCast($get(this$static.map, type), Q$Map) , dynamicCast(sourceMap.remove_2(source), Q$List) , sourceMap.isEmpty() && $remove_5(this$static.map, type) , undefined);
}

function $ensureHandlerList(this$static, type, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map, type), Q$Map);
  if (!sourceMap) {
    sourceMap = new HashMap_0;
    $put(this$static.map, type, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get(source), Q$List);
  if (!handlers) {
    handlers = new ArrayList_0;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type, null);
  return directHandlers;
}

function $getHandlerList(this$static, type, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map, type), Q$Map);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get(source), Q$List);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl_0(this$static.deferredDeltas); c$iterator.i < c$iterator.this$0_0.size_0();) {
        c = dynamicCast($next_3(c$iterator), Q$SimpleEventBus$Command);
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map, eventKey);
}

function SimpleEventBus(){
}

_ = SimpleEventBus.prototype = new EventBus;
_.getClass$ = function getClass_65(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit;
}
;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
function $doRemove(this$static, type, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3_0(this$static, type, source, handler)):$doRemoveNow(this$static, type, source, handler);
}

function HandlerManager$Bus_0(fireInReverseOrder){
  this.map = new HashMap_0;
  this.isReverseOrder = fireInReverseOrder;
}

function HandlerManager$Bus(){
}

_ = HandlerManager$Bus_0.prototype = HandlerManager$Bus.prototype = new SimpleEventBus;
_.getClass$ = function getClass_66(){
  return Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit;
}
;
function LegacyHandlerWrapper_0(real){
  this.real = real;
}

function LegacyHandlerWrapper(){
}

_ = LegacyHandlerWrapper_0.prototype = LegacyHandlerWrapper.prototype = new Object_0;
_.getClass$ = function getClass_67(){
  return Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit;
}
;
_.real = null;
function UmbrellaException_1(causes){
  RuntimeException_1.call(this, 'One or more exceptions caught, see full set in UmbrellaException#getCauses', causes.size_0() == 0?null:dynamicCast(causes.toArray(initDim(_3Ljava_lang_Throwable_2_classLit, makeCastMap([Q$Serializable, Q$Throwable_$1]), Q$Throwable, 0, 0)), Q$Throwable_$1)[0]);
  this.causes = causes;
}

function UmbrellaException_0(){
}

_ = UmbrellaException_1.prototype = UmbrellaException_0.prototype = new RuntimeException;
_.getClass$ = function getClass_68(){
  return Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
_.causes = null;
function UmbrellaException_2(causes){
  UmbrellaException_1.call(this, causes);
}

function UmbrellaException(){
}

_ = UmbrellaException_2.prototype = UmbrellaException.prototype = new UmbrellaException_0;
_.getClass$ = function getClass_69(){
  return Lcom_google_gwt_event_shared_UmbrellaException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $cancel_1(this$static){
  var xmlHttp;
  if (this$static.xmlHttpRequest) {
    xmlHttp = this$static.xmlHttpRequest;
    this$static.xmlHttpRequest = null;
    $clearOnReadyStateChange(xmlHttp);
    xmlHttp.abort();
    !!this$static.timer && $cancel_0(this$static.timer);
  }
}

function $fireOnResponseReceived(this$static, callback){
  var errorMsg, response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  !!this$static.timer && $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  errorMsg = $getBrowserSpecificFailure(xhr);
  if (errorMsg != null) {
    new RuntimeException_0(errorMsg);
    $onFailure(callback.callback);
  }
   else {
    response = new Request$1_0(xhr);
    $onResponseReceived(callback, response);
  }
}

function $fireOnTimeout(this$static, callback){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(callback, new RequestTimeoutException_0(this$static.timeoutMillis));
}

function $getBrowserSpecificFailure(xhr){
  try {
    if (xhr.status === undefined) {
      return 'XmlHttpRequest.status == undefined, please see Safari bug http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';
    }
    return null;
  }
   catch (e) {
    return 'Unable to read XmlHttpRequest.status; likely causes are a networking error or bad cross-domain request. Please see https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more details';
  }
}

function Request_0(xmlHttpRequest, timeoutMillis, callback){
  if (!xmlHttpRequest) {
    throw new NullPointerException_0;
  }
  if (!callback) {
    throw new NullPointerException_0;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException_0;
  }
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  if (timeoutMillis > 0) {
    this.timer = new Request$3_0(this, callback);
    $schedule(this.timer, timeoutMillis);
  }
   else {
    this.timer = null;
  }
}

function Request(){
}

_ = Request_0.prototype = Request.prototype = new Object_0;
_.getClass$ = function getClass_70(){
  return Lcom_google_gwt_http_client_Request_2_classLit;
}
;
_.timeoutMillis = 0;
_.timer = null;
_.xmlHttpRequest = null;
function Response(){
}

_ = Response.prototype = new Object_0;
_.getClass$ = function getClass_71(){
  return Lcom_google_gwt_http_client_Response_2_classLit;
}
;
function Request$1_0(val$xmlHttpRequest){
  this.val$xmlHttpRequest = val$xmlHttpRequest;
}

function Request$1(){
}

_ = Request$1_0.prototype = Request$1.prototype = new Response;
_.getClass$ = function getClass_72(){
  return Lcom_google_gwt_http_client_Request$1_2_classLit;
}
;
_.val$xmlHttpRequest = null;
function Request$3_0(this$0, val$callback){
  $clinit_Timer();
  this.this$0 = this$0;
  this.val$callback = val$callback;
}

function Request$3(){
}

_ = Request$3_0.prototype = Request$3.prototype = new Timer;
_.getClass$ = function getClass_73(){
  return Lcom_google_gwt_http_client_Request$3_2_classLit;
}
;
_.run = function run_0(){
  $fireOnTimeout(this.this$0, this.val$callback);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_.val$callback = null;
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = nullMethod;
  new RequestBuilder$Method_0('DELETE');
  new RequestBuilder$Method_0('GET');
  new RequestBuilder$Method_0('HEAD');
  POST = new RequestBuilder$Method_0('POST');
  new RequestBuilder$Method_0('PUT');
}



function $doSend(this$static, requestData, callback){
  var $e0, e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = create_0();
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException_0(this$static.url);
      $initCause(requestPermissionException, new RequestException_0(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw $e0;
  }
  $setHeaders(this$static, xmlHttpRequest);
  request = new Request_0(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1_0(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$JavaScriptException)) {
      e = $e0;
      throw new RequestException_0(e.getMessage());
    }
     else 
      throw $e0;
  }
  return request;
}

function $setHeader(this$static, header, value){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value);
  !this$static.headers && (this$static.headers = new HashMap_0);
  $put(this$static.headers, header, value);
}

function $setHeaders(this$static, xmlHttpRequest){
  var $e0, e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this$static.headers)).this$0); $hasNext_0(header$iterator.iter);) {
      header = header$iterator.last = dynamicCast($next_3(header$iterator.iter), Q$Map$Entry);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCast(header.getKey(), Q$String), dynamicCast(header.getValue(), Q$String));
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (instanceOf($e0, Q$JavaScriptException)) {
          e = $e0;
          throw new RequestException_0(e.getMessage());
        }
         else 
          throw $e0;
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder_0(httpMethod, url){
  $clinit_RequestBuilder();
  RequestBuilder_1.call(this, !httpMethod?null:httpMethod.name_0, url);
}

function RequestBuilder_1(httpMethod, url){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url);
  this.httpMethod = httpMethod;
  this.url = url;
}

function RequestBuilder(){
}

_ = RequestBuilder_0.prototype = RequestBuilder.prototype = new Object_0;
_.getClass$ = function getClass_74(){
  return Lcom_google_gwt_http_client_RequestBuilder_2_classLit;
}
;
_.callback = null;
_.headers = null;
_.httpMethod = null;
_.requestData = null;
_.timeoutMillis = 0;
_.url = null;
var POST;
function RequestBuilder$1_0(val$request, val$callback){
  this.val$request = val$request;
  this.val$callback = val$callback;
}

function RequestBuilder$1(){
}

_ = RequestBuilder$1_0.prototype = RequestBuilder$1.prototype = new Object_0;
_.getClass$ = function getClass_75(){
  return Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit;
}
;
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request, this.val$callback);
  }
}
;
_.val$callback = null;
_.val$request = null;
function RequestBuilder$Method_0(name_0){
  this.name_0 = name_0;
}

function RequestBuilder$Method(){
}

_ = RequestBuilder$Method_0.prototype = RequestBuilder$Method.prototype = new Object_0;
_.getClass$ = function getClass_76(){
  return Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit;
}
;
_.toString$ = function toString_5(){
  return this.name_0;
}
;
_.name_0 = null;
function RequestException_0(message){
  Exception_0.call(this, message);
}

function RequestException(){
}

_ = RequestException_0.prototype = RequestException.prototype = new Exception;
_.getClass$ = function getClass_77(){
  return Lcom_google_gwt_http_client_RequestException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]);
function RequestPermissionException_0(url){
  $fillInStackTrace();
  this.detailMessage = 'The URL ' + url + ' is invalid or violates the same-origin security restriction';
}

function RequestPermissionException(){
}

_ = RequestPermissionException_0.prototype = RequestPermissionException.prototype = new RequestException;
_.getClass$ = function getClass_78(){
  return Lcom_google_gwt_http_client_RequestPermissionException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]);
function RequestTimeoutException_0(timeoutMillis){
  $fillInStackTrace();
  this.detailMessage = 'A request timeout has expired after ' + timeoutMillis + ' ms';
}

function RequestTimeoutException(){
}

_ = RequestTimeoutException_0.prototype = RequestTimeoutException.prototype = new RequestException;
_.getClass$ = function getClass_79(){
  return Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestException, Q$Serializable, Q$Exception, Q$Throwable]);
function throwIfEmptyOrNull(name_0, value){
  throwIfNull(name_0, value);
  if (0 == $trim(value).length) {
    throw new IllegalArgumentException_1(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value){
  if (null == value) {
    throw new NullPointerException_1(name_0 + ' cannot be null');
  }
}

function AutoDirectionHandler_0(){
}

function AutoDirectionHandler(){
}

_ = AutoDirectionHandler_0.prototype = AutoDirectionHandler.prototype = new Object_0;
_.getClass$ = function getClass_80(){
  return Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit;
}
;
_.onKeyUp = function onKeyUp(event_0){
}
;
_.castableTypeMap$ = makeCastMap([Q$KeyUpHandler, Q$EventHandler]);
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = nullMethod;
  RTL = new HasDirection$Direction_0('RTL', 0);
  LTR = new HasDirection$Direction_0('LTR', 1);
  DEFAULT = new HasDirection$Direction_0('DEFAULT', 2);
  $VALUES_2 = initValues(_3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, makeCastMap([Q$Serializable]), Q$HasDirection$Direction, [RTL, LTR, DEFAULT]);
}

function HasDirection$Direction_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_HasDirection$Direction();
  return $VALUES_2;
}

function HasDirection$Direction(){
}

_ = HasDirection$Direction_0.prototype = HasDirection$Direction.prototype = new Enum;
_.getClass$ = function getClass_81(){
  return Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasDirection$Direction, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES_2, DEFAULT, LTR, RTL;
function Array_1(){
}

function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.castableTypeMap$, a.queryId$, result);
  return result;
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
  initValues(arrayClasses[index], castableTypeMapExprs[index], queryIdExprs[index], result);
  if (!isLastDim) {
    ++index;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(arrayClasses, castableTypeMapExprs, queryIdExprs, dimExprs, index, count, seedType);
    }
  }
  return result;
}

function initValues(arrayClass, castableTypeMap, queryId, array){
  $clinit_Array$ExpandoWrapper();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value, array.queryId$)) {
      throw new ArrayStoreException_0;
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || canCast(value, 1))) {
      throw new ArrayStoreException_0;
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_1.prototype = Array_0.prototype = new Object_0;
_.getClass$ = function getClass_82(){
  return this.arrayClass$;
}
;
_.arrayClass$ = null;
_.queryId$ = 0;
function $clinit_Array$ExpandoWrapper(){
  $clinit_Array$ExpandoWrapper = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_1, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_Array$ExpandoWrapper();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(src, dstId){
  return src.castableTypeMap$ && !!src.castableTypeMap$[dstId];
}

function canCastUnsafe(src, dstId){
  return src.castableTypeMap$ && src.castableTypeMap$[dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src, dstId)) {
    throw new ClassCastException_0;
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || canCast(src, 1))) {
    throw new ClassCastException_0;
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src, dstId);
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && !canCast(src, 1);
}

function isJavaObject(src){
  return src.typeMarker$ == nullMethod || canCast(src, 1);
}

function maskUndefined(src){
  return src == null?null:src;
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException_0;
  }
  return null;
}

function init(){
  var runtimeValue;
  !!$stats && onModuleStart('com.google.gwt.user.client.UserAgentAsserter');
  runtimeValue = $getRuntimeValue();
  $equals('gecko1_8', runtimeValue) || ($wnd.alert('ERROR: Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (' + runtimeValue + '). Expect more errors.\n') , undefined);
  !!$stats && onModuleStart('com.google.gwt.user.client.DocumentModeAsserter');
  $onModuleLoad();
  !!$stats && onModuleStart('net.cubing.mark2.client.gwt333');
  $onModuleLoad_0(new gwt333_0);
}

function caught_0(e){
  if (instanceOf(e, Q$Throwable)) {
    return e;
  }
  return new JavaScriptException_0(e);
}

function create(value){
  var a0, a1, a2;
  a0 = value & 4194303;
  a1 = value >> 22 & 4194303;
  a2 = value < 0?1048575:0;
  return create0(a0, a1, a2);
}

function create0(l_0, m_0, h_0){
  return _ = new LongLibBase$LongEmul_0 , _.l = l_0 , _.m = m_0 , _.h = h_0 , _;
}

function add_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return create0(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}

function and(a, b){
  return create0(a.l & b.l, a.m & b.m, a.h & b.h);
}

function fromDouble(value){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value < 0) {
    negative = true;
    value = -value;
  }
  a2 = 0;
  if (value >= 17592186044416) {
    a2 = round_int(value / 17592186044416);
    value -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value >= 4194304) {
    a1 = round_int(value / 4194304);
    value -= a1 * 4194304;
  }
  a0 = round_int(value);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & 4194303 , neg1 = ~result.m + (neg0 == 0?1:0) & 4194303 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & 1048575 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    boxedValues == null && (boxedValues = initDim(_3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, makeCastMap([Q$Serializable]), Q$LongLibBase$LongEmul, 256, 0));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value));
    return result;
  }
  return create(value);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
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
_.getClass$ = function getClass_83(){
  return Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$LongLibBase$LongEmul]);
function onModuleStart(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

function AbstractRenderer(){
}

_ = AbstractRenderer.prototype = new Object_0;
_.getClass$ = function getClass_84(){
  return Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit;
}
;
function PassthroughParser_0(){
}

function PassthroughParser(){
}

_ = PassthroughParser_0.prototype = PassthroughParser.prototype = new Object_0;
_.getClass$ = function getClass_85(){
  return Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit;
}
;
var INSTANCE_1 = null;
function PassthroughRenderer_0(){
}

function PassthroughRenderer(){
}

_ = PassthroughRenderer_0.prototype = PassthroughRenderer.prototype = new AbstractRenderer;
_.getClass$ = function getClass_86(){
  return Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit;
}
;
var INSTANCE_2 = null;
function CommandCanceledException_0(){
  $fillInStackTrace();
}

function CommandCanceledException(){
}

_ = CommandCanceledException_0.prototype = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = function getClass_87(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove(this$static.iterator);
  instanceOf(cmd, Q$Command) && new CommandCanceledException_0(dynamicCast(cmd, Q$Command));
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    $setEnd(this$static.iterator, this$static.commands.size);
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (instanceOf(element, Q$Command)) {
          command = dynamicCast(element, Q$Command);
          command.val$outerElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        wasCanceled || $remove(this$static.iterator);
      }
      if (currentTimeMillis() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_3(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function CommandExecutor_0(){
  this.cancellationTimer = new CommandExecutor$1_0(this);
  this.commands = new ArrayList_0;
  this.executionTimer = new CommandExecutor$2_0(this);
  this.iterator = new CommandExecutor$CircularIterator_0(this);
}

function CommandExecutor(){
}

_ = CommandExecutor_0.prototype = CommandExecutor.prototype = new Object_0;
_.getClass$ = function getClass_88(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}
;
_.executing = false;
_.executionTimerPending = false;
function CommandExecutor$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1_0.prototype = CommandExecutor$1.prototype = new Timer;
_.getClass$ = function getClass_89(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}
;
_.run = function run_1(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function CommandExecutor$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2_0.prototype = CommandExecutor$2.prototype = new Timer;
_.getClass$ = function getClass_90(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}
;
_.run = function run_2(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, currentTimeMillis());
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $getLast(this$static){
  return $get_0(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_0(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove(this$static){
  $remove_8(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function $setEnd(this$static, end){
  this$static.end = end;
}

function CommandExecutor$CircularIterator_0(this$0){
  this.this$0 = this$0;
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator_0.prototype = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = function getClass_91(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}
;
_.hasNext = function hasNext(){
  return this.next < this.end;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove = function remove_0(){
  $remove(this);
}
;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function dispatchEvent_0(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    evt.preventDefault();
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem === captureElem && (captureElem = null);
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  captureElem = elem;
}

function setStyleAttribute(elem, attr, value){
  elem.style[attr] = value;
}

function sinkBitlessEvent(elem, eventTypeName){
  var geckoVersion;
  $maybeInitializeEventSystem();
  $equals('dragleave', eventTypeName) && (geckoVersion = getGeckoVersion() , geckoVersion != -1 && geckoVersion <= 1009000)?('dragexit' == 'dragexit' && (elem.ondragexit = dispatchDragEvent) , undefined):$sinkBitlessEventImpl(elem, eventTypeName);
}

var currentEvent = null, sCaptureElem = null;
function $clinit_DeferredCommand(){
  $clinit_DeferredCommand = nullMethod;
  commandExecutor = new CommandExecutor_0;
}

function addCommand(cmd){
  $clinit_DeferredCommand();
  if (!cmd) {
    throw new NullPointerException_1('cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; ++i) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current doucment rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom 'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type_0);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_1(null, true);
    singleton = new Event$NativePreviewEvent_0;
  }
  return $addHandler(handlers_0, TYPE_9, handler);
}

var handlers_0 = null;
function $dispatch_3(this$static, handler){
  $previewNativeEvent(handler.this$0, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent_0(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_9 && !!handlers && $isEventHandled(handlers, TYPE_9)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

function Event$NativePreviewEvent(){
}

_ = Event$NativePreviewEvent_0.prototype = Event$NativePreviewEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_9(handler){
  $dispatch_3(this, dynamicCast(handler, Q$Event$NativePreviewHandler));
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.getClass$ = function getClass_92(){
  return Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
var TYPE_9 = null, singleton = null;
function $clinit_History(){
  $clinit_History = nullMethod;
  impl_0 = new HistoryImplMozilla_0;
  $init(impl_0) || (impl_0 = null);
}

function addValueChangeHandler(handler){
  $clinit_History();
  return impl_0?$addValueChangeHandler(impl_0, handler):null;
}

var impl_0 = null;
function Timer$1_0(){
}

function Timer$1(){
}

_ = Timer$1_0.prototype = Timer$1.prototype = new Object_0;
_.getClass$ = function getClass_93(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}
;
_.onClose = function onClose(event_0){
  while (($clinit_Timer() , timers).size > 0) {
    $cancel_0(dynamicCast($get_0(timers, 0), Q$Timer));
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$CloseHandler, Q$EventHandler]);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var makeVersion = function(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }
  ;
  if (function(){
    return ua.indexOf('opera') != -1;
  }
  ())
    return 'opera';
  if (function(){
    return ua.indexOf('webkit') != -1 || function(){
      if (ua.indexOf('chromeframe') != -1) {
        return true;
      }
      if (typeof window['ActiveXObject'] != 'undefined') {
        try {
          var obj = new ActiveXObject('ChromeTab.ChromeFrame');
          if (obj) {
            obj.registerBhoIfNeeded();
            return true;
          }
        }
         catch (e) {
        }
      }
      return false;
    }
    ();
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 9;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && $doc.documentMode >= 8;
  }
  ())
    return 'ie8';
  if (function(){
    var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
    if (result && result.length == 3)
      return makeVersion(result) >= 6000;
  }
  ())
    return 'ie6';
  if (function(){
    return ua.indexOf('gecko') != -1;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type_0), handler);
}

function addHandler(type, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1), type, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_7 && (TYPE_7 = new GwtEvent$Type_0) , TYPE_7), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent_0;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}



function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1), width);
    }
  }
}

var closeHandlersInitialized = false, handlers_1 = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = nullMethod;
  TYPE_10 = new GwtEvent$Type_0;
}

function Window$ClosingEvent_0(){
  $clinit_Window$ClosingEvent();
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent_0.prototype = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
_.getClass$ = function getClass_94(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}
;
var TYPE_10;
function Window$WindowHandlers_0(){
  HandlerManager_0.call(this, null);
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers_0.prototype = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = function getClass_95(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    $initSyntheticMouseUpEvents();
    eventSystemIsInitialized = true;
  }
}

function $setEventListener(elem, listener){
  elem.__listener = listener;
}

function isMyListener(object){
  return !instanceOfJso(object) && instanceOf(object, Q$EventListener);
}

var eventSystemIsInitialized = false;
function $getChild(elem, index){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $initEventSystem(){
  dispatchCapturedEvent = $entry(function(evt){
    if (!previewEvent(evt)) {
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    }
    return true;
  }
  );
  dispatchEvent_1 = $entry(function(evt){
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentNode;
    }
    curElem && curElem.nodeType != 1 && (curElem = null);
    listener && isMyListener(listener) && dispatchEvent_0(evt, curElem, listener);
  }
  );
  dispatchDragEvent = $entry(function(evt){
    evt.preventDefault();
    dispatchEvent_1.call(this, evt);
  }
  );
  dispatchUnhandledEvent = $entry(function(evt){
    this.__gwtLastUnhandledEvent = evt.type;
    dispatchEvent_1.call(this, evt);
  }
  );
  dispatchCapturedMouseEvent = $entry(function(evt){
    var dispatchCapturedEventFn = dispatchCapturedEvent;
    if (dispatchCapturedEventFn(evt)) {
      var cap = captureElem;
      if (cap && cap.__listener) {
        if (isMyListener(cap.__listener)) {
          dispatchEvent_0(evt, cap, cap.__listener);
          evt.stopPropagation();
        }
      }
    }
  }
  );
  $wnd.addEventListener('click', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('dblclick', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousedown', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseup', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousemove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseover', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mouseout', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('mousewheel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('keydown', dispatchCapturedEvent, true);
  $wnd.addEventListener('keyup', dispatchCapturedEvent, true);
  $wnd.addEventListener('keypress', dispatchCapturedEvent, true);
  $wnd.addEventListener('touchstart', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchmove', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchend', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('touchcancel', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gesturestart', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gesturechange', dispatchCapturedMouseEvent, true);
  $wnd.addEventListener('gestureend', dispatchCapturedMouseEvent, true);
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  switch (eventTypeName) {
    case 'drag':
      elem.ondrag = dispatchEvent_1;
      break;
    case 'dragend':
      elem.ondragend = dispatchEvent_1;
      break;
    case 'dragenter':
      elem.ondragenter = dispatchDragEvent;
      break;
    case 'dragleave':
      elem.ondragleave = dispatchEvent_1;
      break;
    case 'dragover':
      elem.ondragover = dispatchDragEvent;
      break;
    case 'dragstart':
      elem.ondragstart = dispatchEvent_1;
      break;
    case 'drop':
      elem.ondrop = dispatchEvent_1;
      break;
    case 'canplaythrough':
    case 'ended':
    case 'progress':
      elem.removeEventListener(eventTypeName, dispatchEvent_1, false);
      elem.addEventListener(eventTypeName, dispatchEvent_1, false);
      break;
    default:throw 'Trying to sink unknown event type ' + eventTypeName;
  }
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_1:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & 16777216 && (elem.ongesturestart = bits & 16777216?dispatchEvent_1:null);
  chMask & 33554432 && (elem.ongesturechange = bits & 33554432?dispatchEvent_1:null);
  chMask & 67108864 && (elem.ongestureend = bits & 67108864?dispatchEvent_1:null);
}

var captureElem = null, dispatchCapturedEvent = null, dispatchCapturedMouseEvent = null, dispatchDragEvent = null, dispatchEvent_1 = null, dispatchUnhandledEvent = null;
function $initSyntheticMouseUpEvents(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = captureElem;
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
  $wnd.addEventListener('DOMMouseScroll', dispatchCapturedMouseEvent, true);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
  bits & 131072 && elem.addEventListener('DOMMouseScroll', dispatchEvent_1, false);
}

function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_8 && (TYPE_8 = new GwtEvent$Type_0) , TYPE_8), handler);
}

function setToken(token){
  token_1 = token;
}

function HistoryImpl(){
}

_ = HistoryImpl.prototype = new Object_0;
_.decodeFragment = function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}
;
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
_.getClass$ = function getClass_96(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}
;
_.newItemOnEvent = function newItemOnEvent(historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals(historyToken, token_1 == null?'':token_1)) {
    token_1 = historyToken;
    fire_2(this);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
var token_1 = '';
function $init(this$static){
  var token_0 = '';
  var hash_0 = $wnd.location.hash;
  hash_0.length > 0 && (token_0 = this$static.decodeFragment(hash_0.substring(1)));
  setToken(token_0);
  var historyImpl = this$static;
  var checkHistory = $entry(function(){
    var token = '', hash = $wnd.location.hash;
    hash.length > 0 && (token = historyImpl.decodeFragment(hash.substring(1)));
    historyImpl.newItemOnEvent(token);
  }
  );
  var checkHistoryCycle = function(){
    $wnd.setTimeout(checkHistoryCycle, 250);
    checkHistory();
  }
  ;
  checkHistoryCycle();
  return true;
}

function HistoryImplTimer(){
}

_ = HistoryImplTimer.prototype = new HistoryImpl;
_.getClass$ = function getClass_97(){
  return Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
function HistoryImplMozilla_0(){
  this.handlers = new HandlerManager_0(null);
}

function HistoryImplMozilla(){
}

_ = HistoryImplMozilla_0.prototype = HistoryImplMozilla.prototype = new HistoryImplTimer;
_.decodeFragment = function decodeFragment_0(encodedFragment){
  return encodedFragment;
}
;
_.getClass$ = function getClass_98(){
  return Lcom_google_gwt_user_client_impl_HistoryImplMozilla_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasHandlers]);
function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers_0) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function IncompatibleRemoteServiceException_0(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_1(msg){
  $fillInStackTrace();
  this.detailMessage = 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )';
}

function IncompatibleRemoteServiceException_2(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

function IncompatibleRemoteServiceException(){
}

_ = IncompatibleRemoteServiceException_2.prototype = IncompatibleRemoteServiceException_1.prototype = IncompatibleRemoteServiceException_0.prototype = IncompatibleRemoteServiceException.prototype = new RuntimeException;
_.getClass$ = function getClass_99(){
  return Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function deserialize(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader){
  return new IncompatibleRemoteServiceException_0;
}

function serialize(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException_0(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_1(s, cause){
  RuntimeException_1.call(this, s, cause);
}

function InvocationException(){
}

_ = InvocationException_1.prototype = InvocationException_0.prototype = InvocationException.prototype = new RuntimeException;
_.getClass$ = function getClass_100(){
  return Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $create(this$static, serviceEntryPoint){
  this$static.builder = new RequestBuilder_0(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', $moduleBase);
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data){
  rb.requestData = data;
}

function $finish(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setRequestData(this$static, data){
  $doSetRequestData(this$static.builder, data);
  return this$static;
}

function RpcRequestBuilder_0(){
}

function RpcRequestBuilder(){
}

_ = RpcRequestBuilder_0.prototype = RpcRequestBuilder.prototype = new Object_0;
_.getClass$ = function getClass_101(){
  return Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit;
}
;
_.builder = null;
function RpcTokenException_0(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

function RpcTokenException(){
}

_ = RpcTokenException_0.prototype = RpcTokenException.prototype = new RuntimeException;
_.getClass$ = function getClass_102(){
  return Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new RpcTokenException_0;
}

function SerializationException_0(msg){
  Exception_0.call(this, msg);
}

function SerializationException(){
}

_ = SerializationException_0.prototype = SerializationException.prototype = new Exception;
_.getClass$ = function getClass_103(){
  return Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$SerializationException, Q$Serializable, Q$Exception, Q$Throwable]);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException_0(){
  InvocationException_0.call(this, 'Service implementation URL not specified');
}

function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
}

_ = ServiceDefTarget$NoServiceEntryPointSpecifiedException_0.prototype = ServiceDefTarget$NoServiceEntryPointSpecifiedException.prototype = new InvocationException;
_.getClass$ = function getClass_104(){
  return Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function StatusCodeException_0(statusCode, encodedResponse){
  RuntimeException_1.call(this, statusCode + ' ' + encodedResponse, null);
}

function StatusCodeException(){
}

_ = StatusCodeException_0.prototype = StatusCodeException.prototype = new InvocationException;
_.getClass$ = function getClass_105(){
  return Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function deserialize_1(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_1(streamReader){
  return new IllegalArgumentException_0;
}

function deserialize_2(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_2(streamReader){
  return new NumberFormatException_0;
}

function deserialize_3(streamReader, instance){
}

function instantiate_3(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_1(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value){
  instance.detailMessage = value;
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

function AbstractSerializationStream(){
}

_ = AbstractSerializationStream.prototype = new Object_0;
_.getClass$ = function getClass_106(){
  return Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit;
}
;
_.flags = 0;
_.version = 7;
function $readObject(this$static){
  var token, typeSignature, id, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_0(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id = ($add_3(this$static.seenArray, null) , this$static.seenArray.size) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set(this$static.seenArray, id - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

function AbstractSerializationStreamReader(){
}

_ = AbstractSerializationStreamReader.prototype = new AbstractSerializationStream;
_.getClass$ = function getClass_107(){
  return Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit;
}
;
function $addString(this$static, string){
  var index, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast($get(this$static.stringMap, string), Q$Integer);
  if (o) {
    return o.value;
  }
  $add_3(this$static.stringTable, string);
  index = this$static.stringTable.size;
  $put(this$static.stringMap, string, valueOf(index));
  return index;
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static){
  $writeInt(this$static, $addString(this$static, null));
  return;
}

function $writeString(this$static, value){
  $writeInt(this$static, $addString(this$static, value));
}

function AbstractSerializationStreamWriter(){
}

_ = AbstractSerializationStreamWriter.prototype = new AbstractSerializationStream;
_.getClass$ = function getClass_108(){
  return Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit;
}
;
function $getString(this$static, index){
  return index > 0?this$static.stringTable[index - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  $clear(this$static.seenArray);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_1('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_1('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader_0(serializer){
  this.seenArray = new ArrayList_0;
  this.serializer = serializer;
}

function ClientSerializationStreamReader(){
}

_ = ClientSerializationStreamReader_0.prototype = ClientSerializationStreamReader.prototype = new AbstractSerializationStreamReader;
_.getClass$ = function getClass_109(){
  return Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit;
}
;
_.index_0 = 0;
_.results = null;
_.serializer = null;
_.stringTable = null;
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = nullMethod;
  regex_0 = getQuotingRegex();
}

function $toString_0(this$static){
  var buffer;
  buffer = new StringBuffer_0;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_2(buffer, this$static.encodeBuffer.impl.string);
  return buffer.impl.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.size);
  for (s$iterator = new AbstractList$IteratorImpl_0(stringTable); s$iterator.i < s$iterator.this$0_0.size_0();) {
    s = dynamicCast($next_3(s$iterator), Q$String);
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter_0(moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap_0;
  this.stringMap = new HashMap_0;
  this.stringTable = new ArrayList_0;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  $append_0(sb.impl, token);
  sb.impl.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch = result[0].charCodeAt(0);
    if (ch == 0) {
      out += '\\0';
    }
     else if (ch == 92) {
      out += '\\\\';
    }
     else if (ch == 124) {
      out += '\\!';
    }
     else {
      var hex = ch.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

function ClientSerializationStreamWriter(){
}

_ = ClientSerializationStreamWriter_0.prototype = ClientSerializationStreamWriter.prototype = new AbstractSerializationStreamWriter;
_.getClass$ = function getClass_110(){
  return Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit;
}
;
_.toString$ = function toString_6(){
  return $toString_0(this);
}
;
_.encodeBuffer = null;
_.moduleBaseURL = null;
_.serializationPolicyStrongName = null;
var regex_0;
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader_0(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, methodName, statsContext, requestData, callback){
  var $e0, ex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$RequestException)) {
      ex = $e0;
      new InvocationException_1('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      $onFailure(callback);
    }
     else 
      throw $e0;
  }
   finally {
    !!$stats && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException_0;
  }
  responseHandler = new RequestCallbackAdapter_0(this$static, methodName, statsContext, callback);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder_0);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setHeader(this$static.rpcRequestBuilder.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy_0(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + 'greet';
  this.serializer = serializer;
  this.serializationPolicyName = '9F0F09496AFA32D457453C10DBB97DC5';
}

function getEncodedInstance(encodedResponse){
  if (encodedResponse.indexOf('//OK') == 0 || encodedResponse.indexOf('//EX') == 0) {
    return $substring(encodedResponse, 4);
  }
  return encodedResponse;
}

function RemoteServiceProxy(){
}

_ = RemoteServiceProxy.prototype = new Object_0;
_.getClass$ = function getClass_111(){
  return Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit;
}
;
_.moduleBaseURL = null;
_.remoteServiceURL = null;
_.rpcRequestBuilder = null;
_.rpcToken = null;
_.serializationPolicyName = null;
_.serializer = null;
function $finish_0(this$static, callback){
  var payload;
  payload = $toString_0(this$static.streamWriter);
  !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$0, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function RemoteServiceProxy$ServiceHelper_0(this$0){
  this.this$0 = this$0;
  this.fullServiceName = 'GreetingService_Proxy.greetServer';
  this.methodName = 'greetServer';
  this.statsContext = new RpcStatsContext_0;
}

function RemoteServiceProxy$ServiceHelper(){
}

_ = RemoteServiceProxy$ServiceHelper_0.prototype = RemoteServiceProxy$ServiceHelper.prototype = new Object_0;
_.getClass$ = function getClass_112(){
  return Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit;
}
;
_.fullServiceName = null;
_.methodName = null;
_.statsContext = null;
_.streamWriter = null;
_.this$0 = null;
function $onError(this$static){
  $onFailure(this$static.callback);
}



function $onResponseReceived(this$static, response){
  var $e0, caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.val$xmlHttpRequest.responseText;
    statusCode = response.val$xmlHttpRequest.status;
    !!$stats && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException_0(statusCode, encodedResponse)):encodedResponse == null?(caught = new InvocationException_0('No response payload from ' + this$static.methodName)):encodedResponse.indexOf('//OK') == 0?(result = $read($createStreamReader(this$static.streamFactory, encodedResponse))):encodedResponse.indexOf('//EX') == 0?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), Q$Throwable)):(caught = new InvocationException_0(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$SerializationException)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_2(e);
    }
     else if (instanceOf($e0, Q$Throwable)) {
      e = $e0;
      caught = e;
    }
     else 
      throw $e0;
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?$onSuccess(this$static.callback, result):$onFailure(this$static.callback);
  }
   finally {
    !!$stats && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter_0(streamFactory, methodName, statsContext, callback){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

function RequestCallbackAdapter(){
}

_ = RequestCallbackAdapter_0.prototype = RequestCallbackAdapter.prototype = new Object_0;
_.getClass$ = function getClass_113(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit;
}
;
_.callback = null;
_.methodName = null;
_.statsContext = null;
_.streamFactory = null;
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = nullMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1_0;
  BYTE = new RequestCallbackAdapter$ResponseReader$2_0;
  CHAR = new RequestCallbackAdapter$ResponseReader$3_0;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4_0;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5_0;
  INT = new RequestCallbackAdapter$ResponseReader$6_0;
  LONG = new RequestCallbackAdapter$ResponseReader$7_0;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8_0;
  SHORT = new RequestCallbackAdapter$ResponseReader$9_0;
  STRING = new RequestCallbackAdapter$ResponseReader$10_0;
  VOID = new RequestCallbackAdapter$ResponseReader$11_0;
  $VALUES_3 = initValues(_3Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, makeCastMap([Q$Serializable]), Q$RequestCallbackAdapter$ResponseReader, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

function values_3(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return $VALUES_3;
}

function RequestCallbackAdapter$ResponseReader(){
}

_ = RequestCallbackAdapter$ResponseReader.prototype = new Enum;
_.getClass$ = function getClass_114(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES_3, BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
function RequestCallbackAdapter$ResponseReader$1_0(){
  Enum_0.call(this, 'BOOLEAN', 0);
}

function RequestCallbackAdapter$ResponseReader$1(){
}

_ = RequestCallbackAdapter$ResponseReader$1_0.prototype = RequestCallbackAdapter$ResponseReader$1.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_115(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function $read(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function RequestCallbackAdapter$ResponseReader$10_0(){
  Enum_0.call(this, 'STRING', 9);
}

function RequestCallbackAdapter$ResponseReader$10(){
}

_ = RequestCallbackAdapter$ResponseReader$10_0.prototype = RequestCallbackAdapter$ResponseReader$10.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_116(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$11_0(){
  Enum_0.call(this, 'VOID', 10);
}

function RequestCallbackAdapter$ResponseReader$11(){
}

_ = RequestCallbackAdapter$ResponseReader$11_0.prototype = RequestCallbackAdapter$ResponseReader$11.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_117(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$2_0(){
  Enum_0.call(this, 'BYTE', 1);
}

function RequestCallbackAdapter$ResponseReader$2(){
}

_ = RequestCallbackAdapter$ResponseReader$2_0.prototype = RequestCallbackAdapter$ResponseReader$2.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_118(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$3_0(){
  Enum_0.call(this, 'CHAR', 2);
}

function RequestCallbackAdapter$ResponseReader$3(){
}

_ = RequestCallbackAdapter$ResponseReader$3_0.prototype = RequestCallbackAdapter$ResponseReader$3.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_119(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$4_0(){
  Enum_0.call(this, 'DOUBLE', 3);
}

function RequestCallbackAdapter$ResponseReader$4(){
}

_ = RequestCallbackAdapter$ResponseReader$4_0.prototype = RequestCallbackAdapter$ResponseReader$4.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_120(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$5_0(){
  Enum_0.call(this, 'FLOAT', 4);
}

function RequestCallbackAdapter$ResponseReader$5(){
}

_ = RequestCallbackAdapter$ResponseReader$5_0.prototype = RequestCallbackAdapter$ResponseReader$5.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_121(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$6_0(){
  Enum_0.call(this, 'INT', 5);
}

function RequestCallbackAdapter$ResponseReader$6(){
}

_ = RequestCallbackAdapter$ResponseReader$6_0.prototype = RequestCallbackAdapter$ResponseReader$6.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_122(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$7_0(){
  Enum_0.call(this, 'LONG', 6);
}

function RequestCallbackAdapter$ResponseReader$7(){
}

_ = RequestCallbackAdapter$ResponseReader$7_0.prototype = RequestCallbackAdapter$ResponseReader$7.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_123(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$8_0(){
  Enum_0.call(this, 'OBJECT', 7);
}

function RequestCallbackAdapter$ResponseReader$8(){
}

_ = RequestCallbackAdapter$ResponseReader$8_0.prototype = RequestCallbackAdapter$ResponseReader$8.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_124(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function RequestCallbackAdapter$ResponseReader$9_0(){
  Enum_0.call(this, 'SHORT', 8);
}

function RequestCallbackAdapter$ResponseReader$9(){
}

_ = RequestCallbackAdapter$ResponseReader$9_0.prototype = RequestCallbackAdapter$ResponseReader$9.prototype = new RequestCallbackAdapter$ResponseReader;
_.getClass$ = function getClass_125(){
  return Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$RequestCallbackAdapter$ResponseReader, Q$Serializable, Q$Comparable, Q$Enum]);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $stats_0(data){
  return $stats(data);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext_0(){
  RpcStatsContext_1.call(this, requestIdCounter++);
}

function RpcStatsContext_1(requestId){
  this.requestId = requestId;
}

function RpcStatsContext(){
}

_ = RpcStatsContext_0.prototype = RpcStatsContext.prototype = new Object_0;
_.getClass$ = function getClass_126(){
  return Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit;
}
;
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException_0(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function SerializerBase_0(methodMapNative){
  new HashMap_0;
  this.methodMapNative = methodMapNative;
}

function SerializerBase(){
}

_ = SerializerBase.prototype = new Object_0;
_.getClass$ = function getClass_127(){
  return Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit;
}
;
_.methodMapNative = null;
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_1('Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_1('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.getClass$ = function getClass_128(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}
;
_.setHeight = function setHeight(height){
  setStyleAttribute(this.element, 'height', height);
}
;
_.setWidth = function setWidth(width){
  setStyleAttribute(this.element, 'width', width);
}
;
_.toString$ = function toString_7(){
  if (!this.element) {
    return '(null handle)';
  }
  return $toString(this.element);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasVisibility, Q$UIObject]);
_.element = null;
function $addDomHandler(this$static, handler, type){
  var typeInt;
  typeInt = $eventGetTypeInt(type.name_0);
  typeInt == -1?$sinkBitlessEvent(this$static, type.name_0):this$static.eventsToSink == -1?$sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager_0(this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_1("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = $eventGetRelatedTarget(event_0);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_1("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.element.__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    ($clinit_RootPanel() , $contains_0(widgetsToDetach, this$static)) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove_0(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_1("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_1('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.getClass$ = function getClass_129(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function Panel(){
}

_ = Panel.prototype = new Widget;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
_.getClass$ = function getClass_130(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children, child);
  $appendChild(container, $resolve(child.element));
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

function ComplexPanel_0(){
  this.children = new WidgetCollection_0(this);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = function getClass_131(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}
;
_.iterator_0 = function iterator(){
  return new WidgetCollection$WidgetIterator_0(this.children);
}
;
_.remove_0 = function remove_1(w){
  return $remove_0(this, w);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.getClass$ = function getClass_132(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}
;
_.remove_0 = function remove_2(w){
  return $remove_1(this, w);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = nullMethod;
  attachCommand = new AttachDetachException$1_0;
  detachCommand = new AttachDetachException$2_0;
}

function AttachDetachException_0(causes){
  UmbrellaException_2.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), Q$Widget);
    try {
      c.execute_0(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Throwable)) {
        e = $e0;
        !caught && (caught = new HashSet_0);
        $add_4(caught, e);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw new AttachDetachException_0(caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException_0.prototype = AttachDetachException.prototype = new UmbrellaException;
_.getClass$ = function getClass_133(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$UmbrellaException, Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
var attachCommand, detachCommand;
function AttachDetachException$1_0(){
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1_0.prototype = AttachDetachException$1.prototype = new Object_0;
_.execute_0 = function execute_0(w){
  w.onAttach();
}
;
_.getClass$ = function getClass_134(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}
;
function AttachDetachException$2_0(){
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2_0.prototype = AttachDetachException$2.prototype = new Object_0;
_.execute_0 = function execute_1(w){
  $onDetach(w);
}
;
_.getClass$ = function getClass_135(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}
;
function $setEnabled(this$static, enabled){
  this$static.element['disabled'] = !enabled;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.getClass$ = function getClass_136(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.element.tabIndex;
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function ButtonBase_0(elem){
  this.element = elem;
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = function getClass_137(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function Button_0(html){
  var e;
  ButtonBase_0.call(this, (e = $doc.createElement('BUTTON') , e.type = 'button' , e));
  this.element['className'] = 'gwt-Button';
  $setInnerHTML(this.element, html);
}

function Button(){
}

_ = Button_0.prototype = Button.prototype = new ButtonBase;
_.getClass$ = function getClass_138(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = function getClass_139(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.body_0 = null;
_.table = null;
function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove_0(this$static.widget);
  this$static.widget = w;
  if (w) {
    $appendChild(this$static.getContainerElement(), $resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel_0(elem){
  this.element = elem;
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.getClass$ = function getClass_140(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator_0 = function iterator_0(){
  return new SimplePanel$1_0(this);
}
;
_.remove_0 = function remove_3(w){
  return $remove_2(this, w);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.widget = null;
function $clinit_PopupPanel(){
  $clinit_PopupPanel = nullMethod;
  $clinit_PopupImplMozilla();
}

function $center(this$static){
  var initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element.style['visibility'] = 'hidden';
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration && (this$static.resizeHandlerRegistration = addResizeHandler(new DialogBox$1_0(this$static)));
    $show(this$static);
  }
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max($getScrollLeft_0($doc) + left, 0), max($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      this$static.element.style['visibility'] = 'visible';
      $run(this$static.resizeAnimation, currentTimeMillis());
    }
     else {
      this$static.element.style['visibility'] = 'visible';
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return $isOrHasChild(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type = $eventGetTypeInt(nativeEvent.type);
  switch (type) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3_0(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4_0(this$static));
  }
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel;
_.getClass$ = function getClass_141(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}
;


_.getContainerElement = function getContainerElement_0(){
  return $getContainerElement($getFirstChildElement(this.element));
}
;
_.hide = function hide(){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_0(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidth = function setWidth_0(width){
  this.desiredWidth = width;
  $maybeUpdateSize(this);
  width.length == 0 && (this.desiredWidth = null);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
function DecoratedPopupPanel(){
}

_ = DecoratedPopupPanel.prototype = new PopupPanel;
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.getClass$ = function getClass_142(){
  return Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit;
}
;
_.iterator_0 = function iterator_1(){
  return new SimplePanel$1_0(this.decPanel);
}
;
_.remove_0 = function remove_4(w){
  return $remove_2(this.decPanel, w);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.decPanel = null;
function $getCellElement(this$static){
  var td, tr;
  tr = $getChild(this$static.tbody, 0);
  td = $getChild(tr, 1);
  return $getFirstChildElement(td);
}

function DecoratorPanel_0(rowStyles){
  var i, row, table, trElem;
  SimplePanel_0.call(this, $doc.createElement('table'));
  table = this.element;
  this.tbody = $doc.createElement('tbody');
  $appendChild(table, $resolve(this.tbody));
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $doc.createElement('tr') , trElem['className'] = rowStyles[i] , $appendChild(trElem, $resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, $resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, $resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, $resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  this.element['className'] = 'gwt-DecoratorPanel';
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $doc.createElement('td');
  inner = $doc.createElement('div');
  $appendChild(tdElem, $resolve(inner));
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel_0.prototype = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = function getClass_143(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}
;
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.containerElem = null;
_.tbody = null;
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, (this$static.caption , $getX(event_0)), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, (this$static.caption , $getX(event_0) , $getY(event_0)));
}

function $hide_0(this$static){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = event_0.target;
  if (is_0(target)) {
    return $isOrHasChild($getParentElement($getCellElement(this$static.decPanel)), target);
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x;
    this$static.dragStartY = y;
  }
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft(this$static.element);
    absY = y + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element);
}

function $setText(this$static, text){
  $setText_0(this$static.caption, text);
}

function DialogBox_0(){
  $clinit_PopupPanel();
  DialogBox_1.call(this, new DialogBox$CaptionImpl_0);
}

function DialogBox_1(captionWidget){
  var mouseHandler, td, rowStyles;
  SimplePanel_0.call(this, $doc.createElement('div'));
  this.glassResizer = new PopupPanel$1_0;
  this.resizeAnimation = new PopupPanel$ResizeAnimation_0(this);
  $appendChild(this.element, $createElement());
  $setPopupPosition(this, 0, 0);
  $getStyleElement($getFirstChildElement(this.element))['className'] = 'gwt-PopupPanel';
  $getContainerElement($getFirstChildElement(this.element))['className'] = 'popupContent';
  this.autoHide = false;
  this.autoHideOnHistoryEvents = false;
  this.modal = true;
  rowStyles = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.decPanel = new DecoratorPanel_0(rowStyles);
  this.decPanel.element['className'] = '';
  setStylePrimaryName($getStyleElement($getFirstChildElement(this.element)), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getContainerElement($getFirstChildElement(this.element)), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, 'dialogContent', true);
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, $resolve(this.caption.element));
  $adopt(this, this.caption);
  $getStyleElement($getFirstChildElement(this.element))['className'] = 'gwt-DialogBox';
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = $getBodyOffsetLeft($doc);
  this.clientTop = $getBodyOffsetTop($doc);
  mouseHandler = new DialogBox$MouseHandler_0(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_1));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_5));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_2));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_4));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_3));
}

function DialogBox(){
}

_ = DialogBox_0.prototype = DialogBox.prototype = new DecoratedPopupPanel;
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.getClass$ = function getClass_144(){
  return Lcom_google_gwt_user_client_ui_DialogBox_2_classLit;
}
;
_.hide = function hide_0(){
  $hide_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(event_0.nativeEvent.type) == 4 && $isCaptionEvent(this, nativeEvent) && (nativeEvent.preventDefault() , undefined);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.caption = null;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function DialogBox$1_0(this$0){
  this.this$0 = this$0;
}

function DialogBox$1(){
}

_ = DialogBox$1_0.prototype = DialogBox$1.prototype = new Object_0;
_.getClass$ = function getClass_145(){
  return Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit;
}
;
_.onResize = function onResize_0(event_0){
  this.this$0.windowWidth = event_0.width;
}
;
_.castableTypeMap$ = makeCastMap([Q$ResizeHandler, Q$EventHandler]);
_.this$0 = null;
function LabelBase_0(element){
  this.element = element;
  this.directionalTextHelper = new DirectionalTextHelper_0(this.element);
}

function LabelBase(){
}

_ = LabelBase.prototype = new Widget;
_.getClass$ = function getClass_146(){
  return Lcom_google_gwt_user_client_ui_LabelBase_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
_.directionalTextHelper = null;
function $setText_0(this$static, text){
  $setTextOrHtml(this$static.directionalTextHelper, text, false);
}

function Label_0(){
  LabelBase_0.call(this, $doc.createElement('div'));
  this.element['className'] = 'gwt-Label';
}

function Label_1(element){
  LabelBase_0.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

function Label(){
}

_ = Label_0.prototype = Label.prototype = new LabelBase;
_.getClass$ = function getClass_147(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $setHTML(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
}

function HTML_0(){
  Label_1.call(this, $doc.createElement('div'));
  this.element['className'] = 'gwt-HTML';
}

function HTML_1(html){
  HTML_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

function HTML(){
}

_ = HTML_1.prototype = HTML_0.prototype = HTML.prototype = new Label;
_.getClass$ = function getClass_148(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function DialogBox$CaptionImpl_0(){
  HTML_0.call(this);
  this.element['className'] = 'Caption';
}

function DialogBox$CaptionImpl(){
}

_ = DialogBox$CaptionImpl_0.prototype = DialogBox$CaptionImpl.prototype = new HTML;
_.getClass$ = function getClass_149(){
  return Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function DialogBox$MouseHandler_0(this$0){
  this.this$0 = this$0;
}

function DialogBox$MouseHandler(){
}

_ = DialogBox$MouseHandler_0.prototype = DialogBox$MouseHandler.prototype = new Object_0;
_.getClass$ = function getClass_150(){
  return Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$MouseDownHandler, Q$MouseMoveHandler, Q$MouseOutHandler, Q$MouseOverHandler, Q$MouseUpHandler, Q$EventHandler, Q$DialogBox$MouseHandler]);
_.this$0 = null;
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper_0(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

function DirectionalTextHelper(){
}

_ = DirectionalTextHelper_0.prototype = DirectionalTextHelper.prototype = new Object_0;
_.getClass$ = function getClass_151(){
  return Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit;
}
;
_.element = null;
_.initialElementDir = null;
_.textDir = null;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = nullMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('center');
  new HasHorizontalAlignment$HorizontalAlignmentConstant_0('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant_0('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$AutoHorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = function getClass_152(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit;
}
;
function HasHorizontalAlignment$HorizontalAlignmentConstant_0(textAlignString){
  this.textAlignString = textAlignString;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant_0.prototype = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
_.getClass$ = function getClass_153(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}
;
_.textAlignString = null;
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = nullMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant_0('bottom');
  new HasVerticalAlignment$VerticalAlignmentConstant_0('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant_0('top');
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant_0(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant_0.prototype = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = function getClass_154(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}
;
_.verticalAlignString = null;
function $onResize(){
  var height, style, width, winHeight, winWidth;
  style = null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  style['display'] = ($clinit_Style$Display() , 'none');
  style['width'] = 0 + ($clinit_Style$Unit() , 'px');
  style['height'] = '0px';
  width = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  style['width'] = (width > winWidth?width:winWidth) + 'px';
  style['height'] = (height > winHeight?height:winHeight) + 'px';
  style['display'] = 'block';
}

function PopupPanel$1_0(){
}

function PopupPanel$1(){
}

_ = PopupPanel$1_0.prototype = PopupPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_155(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit;
}
;
_.onResize = function onResize_1(event_0){
  $onResize();
}
;
_.castableTypeMap$ = makeCastMap([Q$ResizeHandler, Q$EventHandler]);
function PopupPanel$3_0(this$0){
  this.this$0 = this$0;
}

function PopupPanel$3(){
}

_ = PopupPanel$3_0.prototype = PopupPanel$3.prototype = new Object_0;
_.getClass$ = function getClass_156(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$EventHandler, Q$Event$NativePreviewHandler]);
_.this$0 = null;
function PopupPanel$4_0(this$0){
  this.this$0 = this$0;
}

function PopupPanel$4(){
}

_ = PopupPanel$4_0.prototype = PopupPanel$4.prototype = new Object_0;
_.getClass$ = function getClass_157(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueChangeHandler, Q$EventHandler]);
_.this$0 = null;
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      $clinit_PopupPanel();
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $clinit_PopupPanel();
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get(null)), this$static.curPanel);
    $clinit_PopupPanel();
  }
  $setClip(($clinit_PopupPanel() , this$static.curPanel.element), 'rect(auto, auto, auto, auto)');
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get(null)), this$static.curPanel);
    $clinit_PopupPanel();
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get(null)), this$static.curPanel);
    $clinit_PopupPanel();
  }
  this$static.curPanel.element.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight);
  width = round_int(progress * this$static.offsetWidth);
  switch (0) {
    case 2:
    case 0:
      top_0 = this$static.offsetHeight - height >> 1;
      left = this$static.offsetWidth - width >> 1;
      right = left + width;
      bottom = top_0 + height;
  }
  $setClip(($clinit_PopupPanel() , this$static.curPanel.element), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(($clinit_PopupPanel() , this$static.curPanel.element), 'rect(0px, 0px, 0px, 0px)');
      $add_0(($clinit_RootPanel() , get(null)), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1_0(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, currentTimeMillis());
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation_0(panel){
  Animation_0.call(this, ($clinit_AnimationSchedulerImpl() , INSTANCE));
  this.curPanel = panel;
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation_0.prototype = PopupPanel$ResizeAnimation.prototype = new Animation;
_.getClass$ = function getClass_158(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.resizeRegistration = null;
_.showTimer = null;
_.showing = false;
function PopupPanel$ResizeAnimation$1_0(this$1){
  $clinit_Timer();
  this.this$1 = this$1;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1_0.prototype = PopupPanel$ResizeAnimation$1.prototype = new Timer;
_.getClass$ = function getClass_159(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}
;
_.run = function run_3(){
  this.this$1.showTimer = null;
  $run(this.this$1, currentTimeMillis());
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$1 = null;
function $resolve(this$static){
  return this$static.__gwt_resolve?this$static.__gwt_resolve():this$static;
}

function $clinit_RootPanel(){
  $clinit_RootPanel = nullMethod;
  maybeDetachCommand = new RootPanel$1_0;
  rootPanels = new HashMap_0;
  widgetsToDetach = new HashSet_0;
}

function RootPanel_0(elem){
  ComplexPanel_0.call(this);
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_10(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get(id){
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast($get(rootPanels, id), Q$RootPanel);
  elem = null;
  if (id != null) {
    if (!(elem = $getElementById($doc, id))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element == elem) {
      return rp;
    }
  }
  rootPanels.size == 0 && addCloseHandler(new RootPanel$2_0);
  !elem?(rp = new RootPanel$DefaultRootPanel_0):(rp = new RootPanel_0(elem));
  $put(rootPanels, id, rp);
  $add_4(widgetsToDetach, rp);
  return rp;
}

function RootPanel(){
}

_ = RootPanel_0.prototype = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = function getClass_160(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]);
var maybeDetachCommand, rootPanels, widgetsToDetach;
function RootPanel$1_0(){
}

function RootPanel$1(){
}

_ = RootPanel$1_0.prototype = RootPanel$1.prototype = new Object_0;
_.execute_0 = function execute_2(w){
  w.attached && $onDetach(w);
}
;
_.getClass$ = function getClass_161(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}
;
function RootPanel$2_0(){
}

function RootPanel$2(){
}

_ = RootPanel$2_0.prototype = RootPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_162(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}
;
_.onClose = function onClose_0(closeEvent){
  detachWidgets();
}
;
_.castableTypeMap$ = makeCastMap([Q$CloseHandler, Q$EventHandler]);
function RootPanel$DefaultRootPanel_0(){
  RootPanel_0.call(this, $doc.body);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel_0.prototype = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = function getClass_163(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$RootPanel, Q$UIObject, Q$Widget]);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw new NoSuchElementException_0;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function SimplePanel$1_0(this$0){
  this.this$0 = this$0;
  this.hasElement = !!this.this$0.widget;
}

function SimplePanel$1(){
}

_ = SimplePanel$1_0.prototype = SimplePanel$1.prototype = new Object_0;
_.getClass$ = function getClass_164(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}
;
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove = function remove_5(){
  !!this.returned && this.this$0.remove_0(this.returned);
}
;
_.returned = null;
_.this$0 = null;
function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_1('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(this$static.element, 'value').length) {
    throw new IndexOutOfBoundsException_1('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function ValueBoxBase_0(elem){
  this.element = elem;
  new AutoDirectionHandler_0;
}

function ValueBoxBase(){
}

_ = ValueBoxBase.prototype = new FocusWidget;
_.getClass$ = function getClass_165(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit;
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type;
  type = $eventGetTypeInt(event_0.type);
  (type & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = nullMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new ValueBoxBase;
_.getClass$ = function getClass_166(){
  return Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function TextBox_0(){
  var e;
  $clinit_TextBoxBase();
  TextBox_1.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_1(element){
  ValueBoxBase_0.call(this, element, (!INSTANCE_2 && (INSTANCE_2 = new PassthroughRenderer_0) , !INSTANCE_1 && (INSTANCE_1 = new PassthroughParser_0)));
  this.element['className'] = 'gwt-TextBox';
}

function TextBox(){
}

_ = TextBox_0.prototype = TextBox.prototype = new TextBoxBase;
_.getClass$ = function getClass_167(){
  return Lcom_google_gwt_user_client_ui_TextBox_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = nullMethod;
  CENTER = new ValueBoxBase$TextAlignment$1_0;
  JUSTIFY = new ValueBoxBase$TextAlignment$2_0;
  LEFT = new ValueBoxBase$TextAlignment$3_0;
  RIGHT = new ValueBoxBase$TextAlignment$4_0;
  $VALUES_4 = initValues(_3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, makeCastMap([Q$Serializable]), Q$ValueBoxBase$TextAlignment, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

function values_4(){
  $clinit_ValueBoxBase$TextAlignment();
  return $VALUES_4;
}

function ValueBoxBase$TextAlignment(){
}

_ = ValueBoxBase$TextAlignment.prototype = new Enum;
_.getClass$ = function getClass_168(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]);
var $VALUES_4, CENTER, JUSTIFY, LEFT, RIGHT;
function ValueBoxBase$TextAlignment$1_0(){
  Enum_0.call(this, 'CENTER', 0);
}

function ValueBoxBase$TextAlignment$1(){
}

_ = ValueBoxBase$TextAlignment$1_0.prototype = ValueBoxBase$TextAlignment$1.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_169(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]);
function ValueBoxBase$TextAlignment$2_0(){
  Enum_0.call(this, 'JUSTIFY', 1);
}

function ValueBoxBase$TextAlignment$2(){
}

_ = ValueBoxBase$TextAlignment$2_0.prototype = ValueBoxBase$TextAlignment$2.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_170(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]);
function ValueBoxBase$TextAlignment$3_0(){
  Enum_0.call(this, 'LEFT', 2);
}

function ValueBoxBase$TextAlignment$3(){
}

_ = ValueBoxBase$TextAlignment$3_0.prototype = ValueBoxBase$TextAlignment$3.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_171(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]);
function ValueBoxBase$TextAlignment$4_0(){
  Enum_0.call(this, 'RIGHT', 3);
}

function ValueBoxBase$TextAlignment$4(){
}



_ = ValueBoxBase$TextAlignment$4_0.prototype = ValueBoxBase$TextAlignment$4.prototype = new ValueBoxBase$TextAlignment;
_.getClass$ = function getClass_172(){
  return Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$ValueBoxBase$TextAlignment, Q$Serializable, Q$Comparable, Q$Enum]);
function $add_1(this$static, w){
  var td, tr, td_0;
  tr = $doc.createElement('tr');
  td = (td_0 = $doc.createElement('td') , td_0['align'] = this$static.horzAlign.textAlignString , setStyleAttribute(td_0, 'verticalAlign', this$static.vertAlign.verticalAlignString) , td_0);
  $appendChild(tr, $resolve(td));
  $appendChild(this$static.body_0, $resolve(tr));
  $add(this$static, w, td);
}

function $setHorizontalAlignment(this$static, align){
  this$static.horzAlign = align;
}

function VerticalPanel_0(){
  ComplexPanel_0.call(this);
  this.table = $doc.createElement('table');
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, $resolve(this.body_0));
  $setElement(this, this.table);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.table['cellSpacing'] = '0';
  this.table['cellPadding'] = '0';
}

function VerticalPanel(){
}

_ = VerticalPanel_0.prototype = VerticalPanel.prototype = new CellPanel;
_.getClass$ = function getClass_173(){
  return Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit;
}
;
_.remove_0 = function remove_6(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]);
function $add_2(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable]), Q$Widget, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_3(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException_0;
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_4(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException_0;
  }
  $remove_3(this$static, index);
}

function WidgetCollection_0(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, makeCastMap([Q$Serializable]), Q$Widget, 4, 0);
}

function WidgetCollection(){
}

_ = WidgetCollection_0.prototype = WidgetCollection.prototype = new Object_0;
_.getClass$ = function getClass_174(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}
;
_.iterator_0 = function iterator_2(){
  return new WidgetCollection$WidgetIterator_0(this);
}
;
_.array = null;
_.parent_0 = null;
_.size = 0;
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$0.size) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.array[++this$static.index_0];
}

function WidgetCollection$WidgetIterator_0(this$0){
  this.this$0 = this$0;
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator_0.prototype = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = function getClass_175(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}
;
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$0.size - 1;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove = function remove_7(){
  if (this.index_0 < 0 || this.index_0 >= this.this$0.size) {
    throw new IllegalStateException_0;
  }
  this.this$0.parent_0.remove_0(this.this$0.array[this.index_0--]);
}
;
_.index_0 = -1;
_.this$0 = null;
function $clinit_PopupImplMozilla(){
  $clinit_PopupImplMozilla = nullMethod;
  isFF2Mac = isFF2Mac_0();
}

function $createElement(){
  var outerElem;
  outerElem = $doc.createElement('div');
  if (isFF2Mac) {
    $setInnerHTML(outerElem, '<div><\/div>');
    addCommand(new PopupImplMozilla$1_0(outerElem));
  }
  return outerElem;
}

function $getContainerElement(outerElem){
  return isFF2Mac?$getFirstChildElement(outerElem):outerElem;
}

function $getStyleElement(outerElem){
  return isFF2Mac?outerElem:$getParentElement(outerElem);
}

function $setClip(popup, rect){
  popup.style['clip'] = rect;
  popup.style['display'] = ($clinit_Style$Display() , 'none');
  popup.style['display'] = '';
}

function isFF2Mac_0(){
  function makeVersion(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }

  var ua = navigator.userAgent;
  if (ua.indexOf('Macintosh') != -1) {
    var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
    if (result_0 && result_0.length == 3) {
      if (makeVersion(result_0) <= 1008) {
        return true;
      }
    }
  }
  return false;
}

var isFF2Mac;
function PopupImplMozilla$1_0(val$outerElem){
  this.val$outerElem = val$outerElem;
}

function PopupImplMozilla$1(){
}

_ = PopupImplMozilla$1_0.prototype = PopupImplMozilla$1.prototype = new Object_0;
_.getClass$ = function getClass_176(){
  return Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
_.val$outerElem = null;
function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function $clearOnReadyStateChange(this$static){
  var self_0 = this$static;
  $wnd.setTimeout(function(){
    self_0.onreadystatechange = new Function;
  }
  , 0);
}

function $open(this$static, httpMethod, url){
  this$static.open(httpMethod, url, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value){
  this$static.setRequestHeader(header, value);
}

function create_0(){
  if ($wnd.XMLHttpRequest) {
    return new $wnd.XMLHttpRequest;
  }
   else {
    try {
      return new $wnd.ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
     catch (e) {
      return new $wnd.ActiveXObject('Microsoft.XMLHTTP');
    }
  }
}

function $removeHandler(this$static){
  $doRemove(this$static.this$0, this$static.val$type, this$static.val$source, this$static.val$handler);
}

function SimpleEventBus$1_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = null;
  this.val$handler = val$handler;
}

function SimpleEventBus$1(){
}

_ = SimpleEventBus$1_0.prototype = SimpleEventBus$1.prototype = new Object_0;
_.getClass$ = function getClass_177(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit;
}
;
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function SimpleEventBus$2_0(this$0, val$type, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = null;
  this.val$handler = val$handler;
}

function SimpleEventBus$2(){
}

_ = SimpleEventBus$2_0.prototype = SimpleEventBus$2.prototype = new Object_0;
_.execute_1 = function execute_3(){
  $doAddNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
_.getClass$ = function getClass_178(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$SimpleEventBus$Command]);
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function SimpleEventBus$3_0(this$0, val$type, val$source, val$handler){
  this.this$0 = this$0;
  this.val$type = val$type;
  this.val$source = val$source;
  this.val$handler = val$handler;
}

function SimpleEventBus$3(){
}

_ = SimpleEventBus$3_0.prototype = SimpleEventBus$3.prototype = new Object_0;
_.execute_1 = function execute_4(){
  $doRemoveNow(this.this$0, this.val$type, this.val$source, this.val$handler);
}
;
_.getClass$ = function getClass_179(){
  return Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$SimpleEventBus$Command]);
_.this$0 = null;
_.val$handler = null;
_.val$source = null;
_.val$type = null;
function ArrayStoreException_0(){
  $fillInStackTrace();
}

function ArrayStoreException(){
}

_ = ArrayStoreException_0.prototype = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = function getClass_180(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
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

_ = ClassCastException_0.prototype = ClassCastException.prototype = new RuntimeException;
_.getClass$ = function getClass_182(){
  return Ljava_lang_ClassCastException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = function getClass_183(){
  return Ljava_lang_Number_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Number]);
function IllegalArgumentException_0(){
  $fillInStackTrace();
}

function IllegalArgumentException_1(message){
  RuntimeException_0.call(this, message);
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException_1.prototype = IllegalArgumentException_0.prototype = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = function getClass_184(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function IllegalStateException_0(){
  $fillInStackTrace();
}

function IllegalStateException_1(s){
  RuntimeException_0.call(this, s);
}

function IllegalStateException(){
}

_ = IllegalStateException_1.prototype = IllegalStateException_0.prototype = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = function getClass_185(){
  return Ljava_lang_IllegalStateException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function IndexOutOfBoundsException_0(){
  $fillInStackTrace();
}

function IndexOutOfBoundsException_1(message){
  RuntimeException_0.call(this, message);
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException_1.prototype = IndexOutOfBoundsException_0.prototype = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = function getClass_186(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function Integer_0(value){
  this.value = value;
}

function toPowerOfTwoString(value){
  var buf, digits, pos;
  buf = initDim(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, 8, 1);
  digits = ($clinit_Number$__Digits() , digits_0);
  pos = 7;
  if (value >= 0) {
    while (value > 15) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & 15];
      value >>= 4;
    }
  }
  buf[pos] = digits[value & 15];
  return __valueOf(buf, pos, 8);
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer_0(i));
    return result;
  }
  return new Integer_0(i);
}

function Integer(){
}

_ = Integer_0.prototype = Integer.prototype = new Number_0;
_.equals$ = function equals_1(o){
  return instanceOf(o, Q$Integer) && dynamicCast(o, Q$Integer).value == this.value;
}
;
_.getClass$ = function getClass_187(){
  return Ljava_lang_Integer_2_classLit;
}
;
_.hashCode$ = function hashCode_3(){
  return this.value;
}
;
_.toString$ = function toString_9(){
  return '' + this.value;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Integer, Q$Number]);
_.value = 0;
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, makeCastMap([Q$Serializable]), Q$Integer, 256, 0);
}

var boxedValues_0;
function floor(x){
  return Math.floor(x);
}

function max(x, y){
  return x > y?x:y;
}

function min(x, y){
  return x < y?x:y;
}

function NullPointerException_0(){
  $fillInStackTrace();
}

function NullPointerException_1(message){
  RuntimeException_0.call(this, message);
}

function NullPointerException(){
}

_ = NullPointerException_1.prototype = NullPointerException_0.prototype = NullPointerException.prototype = new RuntimeException;
_.getClass$ = function getClass_188(){
  return Ljava_lang_NullPointerException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $clinit_Number$__Digits(){
  $clinit_Number$__Digits = nullMethod;
  digits_0 = initValues(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function NumberFormatException_0(){
  $fillInStackTrace();
}

function NumberFormatException(){
}

_ = NumberFormatException_0.prototype = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = function getClass_189(){
  return Ljava_lang_NumberFormatException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function StackTraceElement_0(methodName){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.lineNumber = -1;
}

function StackTraceElement(){
}

_ = StackTraceElement_0.prototype = StackTraceElement.prototype = new Object_0;
_.getClass$ = function getClass_190(){
  return Ljava_lang_StackTraceElement_2_classLit;
}
;
_.toString$ = function toString_10(){
  return this.className_0 + '.' + this.methodName + '(Unknown Source' + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$StackTraceElement]);
_.className_0 = null;
_.lineNumber = 0;
_.methodName = null;
function $charAt(this$static, index){
  return this$static.charCodeAt(index);
}

function $equals(this$static, other){
  if (!instanceOf(other, Q$String)) {
    return false;
  }
  return String(this$static) == other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

_ = String.prototype;
_.equals$ = function equals_2(other){
  return $equals(this, other);
}
;
_.getClass$ = function getClass_191(){
  return Ljava_lang_String_2_classLit;
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this);
}
;
_.toString$ = function toString_11(){
  return this;
}
;
_.castableTypeMap$ = makeCastMap([Q$String, Q$Serializable, Q$CharSequence, Q$Comparable]);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = nullMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append_1(this$static, x){
  $append(this$static.impl, x);
  return this$static;
}

function $append_2(this$static, x){
  $append_0(this$static.impl, x);
  return this$static;
}

function StringBuffer_0(){
  this.impl = new StringBufferImplAppend_0;
}

function StringBuffer(){
}

_ = StringBuffer_0.prototype = StringBuffer.prototype = new Object_0;
_.getClass$ = function getClass_192(){
  return Ljava_lang_StringBuffer_2_classLit;
}
;
_.toString$ = function toString_12(){
  return this.impl.string;
}
;
_.castableTypeMap$ = makeCastMap([Q$CharSequence]);
function currentTimeMillis0(){
  return (new Date).getTime();
}

function identityHashCode(o){
  return o == null?0:instanceOf(o, Q$String)?getHashCode_0(dynamicCast(o, Q$String)):getHashCode(o);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException_0.prototype = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = function getClass_193(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $toString_1(this$static){
  var comma, iter, sb, value;
  sb = new StringBuffer_0;
  comma = null;
  sb.impl.string += '[';
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    comma != null?($append_0(sb.impl, comma) , sb):(comma = ', ');
    value = iter.next_0();
    $append_0(sb.impl, value === this$static?'(this Collection)':'' + value);
  }
  sb.impl.string += ']';
  return sb.impl.string;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add = function add_1(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains = function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}
;
_.getClass$ = function getClass_194(){
  return Ljava_util_AbstractCollection_2_classLit;
}
;
_.isEmpty = function isEmpty(){
  return this.size_0() == 0;
}
;
_.remove_1 = function remove_8(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  if (iter) {
    iter.remove();
    return true;
  }
   else {
    return false;
  }
}
;
_.toArray = function toArray(a){
  var i, it, size;
  size = this.size_0();
  a.length < size && (a = createFrom(a, size));
  it = this.iterator_0();
  for (i = 0; i < size; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size && setCheck(a, size, null);
  return a;
}
;
_.toString$ = function toString_13(){
  return $toString_1(this);
}
;
function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator_0(this$static.entrySet().this$0); $hasNext_0(iter.iter);) {
    entry = iter.last = dynamicCast($next_3(iter.iter), Q$Map$Entry);
    k = entry.getKey();
    if (key == null?k == null:equals__devirtual$(key, k)) {
      remove && $remove_6(iter);
      return entry;
    }
  }
  return null;
}

function $keySet(this$static){
  var entrySet;
  entrySet = new AbstractHashMap$EntrySet_0(this$static);
  return new AbstractMap$1_0(this$static, entrySet);
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals$ = function equals_3(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, Q$Map)) {
    return false;
  }
  otherMap = dynamicCast(obj, Q$Map);
  if (this.size_0() != otherMap.size_0()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0(otherMap.entrySet().this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_3(entry$iterator.iter), Q$Map$Entry);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!this.containsKey(otherKey)) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, this.get(otherKey))) {
      return false;
    }
  }
  return true;
}
;
_.get = function get_0(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return !entry?null:entry.getValue();
}
;
_.getClass$ = function getClass_195(){
  return Ljava_util_AbstractMap_2_classLit;
}
;
_.hashCode$ = function hashCode_5(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0(this.entrySet().this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_3(entry$iterator.iter), Q$Map$Entry);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_0() == 0;
}
;
_.put = function put(key, value){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_2 = function remove_9(key){
  var entry;
  entry = $implFindEntry(this, key, true);
  return !entry?null:entry.getValue();
}
;
_.size_0 = function size_0(){
  return this.entrySet().this$0.size;
}
;
_.toString$ = function toString_14(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = new AbstractHashMap$EntrySetIterator_0(this.entrySet().this$0); $hasNext_0(iter.iter);) {
    entry = iter.last = dynamicCast($next_3(iter.iter), Q$Map$Entry);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}
;
_.castableTypeMap$ = makeCastMap([Q$Map]);
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    var hashCodeInt = parseInt(hashCode, 10);
    if (hashCode == hashCodeInt) {
      var array = hashCodeMap[hashCodeInt];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new AbstractHashMap$MapEntryString_0(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:instanceOf(key, Q$String)?$hasStringValue(this$static, dynamicCast(key, Q$String)):$hasHashValue(this$static, key, this$static.getHashCode(key));
}

function $get(this$static, key){
  return key == null?this$static.nullSlot:instanceOf(key, Q$String)?$getStringValue(this$static, dynamicCast(key, Q$String)):$getHashValue(this$static, key, this$static.getHashCode(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $getStringValue(this$static, key){
  return this$static.stringMap[':' + key];
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):instanceOf(key, Q$String)?$putStringValue(this$static, dynamicCast(key, Q$String), value):$putHashValue(this$static, key, value, this$static.getHashCode(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = new MapEntryImpl_0(key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_5(this$static, key){
  return key == null?$removeNullSlot(this$static):instanceOf(key, Q$String)?$removeStringValue(this$static, dynamicCast(key, Q$String)):$removeHashValue(this$static, key, this$static.getHashCode(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.containsKey = function containsKey_0(key){
  return $containsKey(this, key);
}
;
_.entrySet = function entrySet_0(){
  return new AbstractHashMap$EntrySet_0(this);
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return this.equals(value1, value2);
}
;
_.get = function get_1(key){
  return $get(this, key);
}
;
_.getClass$ = function getClass_196(){
  return Ljava_util_AbstractHashMap_2_classLit;
}
;
_.put = function put_0(key, value){
  return $put(this, key, value);
}
;
_.remove_2 = function remove_10(key){
  return $remove_5(this, key);
}
;
_.size_0 = function size_1(){
  return this.size;
}
;
_.castableTypeMap$ = makeCastMap([Q$Map]);
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;


_.equals$ = function equals_4(o){
  var iter, other, otherItem;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, Q$Set)) {
    return false;
  }
  other = dynamicCast(o, Q$Set);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains(otherItem)) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_197(){
  return Ljava_util_AbstractSet_2_classLit;
}
;
_.hashCode$ = function hashCode_6(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}
;
_.castableTypeMap$ = makeCastMap([Q$Set]);
function $contains(this$static, o){
  var entry, key, value;
  if (instanceOf(o, Q$Map$Entry)) {
    entry = dynamicCast(o, Q$Map$Entry);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get(this$static.this$0, key);
      return this$static.this$0.equals(entry.getValue(), value);
    }
  }
  return false;
}

function AbstractHashMap$EntrySet_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet_0.prototype = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains = function contains_0(o){
  return $contains(this, o);
}
;
_.getClass$ = function getClass_198(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}
;
_.iterator_0 = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator_0(this.this$0);
}
;
_.remove_1 = function remove_11(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, Q$Map$Entry).getKey();
    $remove_5(this.this$0, key);
    return true;
  }
  return false;
}
;
_.size_0 = function size_2(){
  return this.this$0.size;
}
;
_.castableTypeMap$ = makeCastMap([Q$Set]);
_.this$0 = null;
function $next_2(this$static){
  return this$static.last = dynamicCast($next_3(this$static.iter), Q$Map$Entry);
}

function $remove_6(this$static){
  if (!this$static.last) {
    throw new IllegalStateException_1('Must call next() before remove().');
  }
   else {
    $remove_7(this$static.iter);
    $remove_5(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function AbstractHashMap$EntrySetIterator_0(this$0){
  var list;
  this.this$0 = this$0;
  list = new ArrayList_0;
  this$0.nullSlotLive && $add_3(list, new AbstractHashMap$MapEntryNull_0(this$0));
  $addAllStringEntries(this$0, list);
  $addAllHashEntries(this$0, list);
  this.iter = new AbstractList$IteratorImpl_0(list);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator_0.prototype = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = function getClass_199(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}
;
_.hasNext = function hasNext_2(){
  return $hasNext_0(this.iter);
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove = function remove_12(){
  $remove_6(this);
}
;
_.iter = null;
_.last = null;
_.this$0 = null;
function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = function equals_5(other){
  var entry;
  if (instanceOf(other, Q$Map$Entry)) {
    entry = dynamicCast(other, Q$Map$Entry);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}
;
_.getClass$ = function getClass_200(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}
;
_.hashCode$ = function hashCode_7(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}
;
_.toString$ = function toString_15(){
  return this.getKey() + '=' + this.getValue();
}
;
_.castableTypeMap$ = makeCastMap([Q$Map$Entry]);
function AbstractHashMap$MapEntryNull_0(this$0){
  this.this$0 = this$0;
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull_0.prototype = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_201(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}
;
_.getKey = function getKey(){
  return null;
}
;
_.getValue = function getValue(){
  return this.this$0.nullSlot;
}
;
_.setValue = function setValue(object){
  return $putNullSlot(this.this$0, object);
}
;
_.castableTypeMap$ = makeCastMap([Q$Map$Entry]);
_.this$0 = null;
function AbstractHashMap$MapEntryString_0(this$0, key){
  this.this$0 = this$0;
  this.key = key;
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString_0.prototype = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_202(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}
;
_.getKey = function getKey_0(){
  return this.key;
}
;
_.getValue = function getValue_0(){
  return $getStringValue(this.this$0, this.key);
}
;
_.setValue = function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}
;
_.castableTypeMap$ = makeCastMap([Q$Map$Entry]);
_.key = null;
_.this$0 = null;
function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function indexOutOfBounds(index, size){
  throw new IndexOutOfBoundsException_1('Index: ' + index + ', Size: ' + size);
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add = function add_2(obj){
  this.add_0(this.size_0(), obj);
  return true;
}
;
_.add_0 = function add_3(index, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.equals$ = function equals_6(o){
  var elem, elemOther, iter, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, Q$List)) {
    return false;
  }
  other = dynamicCast(o, Q$List);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = new AbstractList$IteratorImpl_0(this);
  iterOther = other.iterator_0();
  while (iter.i < iter.this$0_0.size_0()) {
    elem = $next_3(iter);
    elemOther = $next_3(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.getClass$ = function getClass_203(){
  return Ljava_util_AbstractList_2_classLit;
}
;
_.hashCode$ = function hashCode_8(){
  var iter, k, obj;
  k = 1;
  iter = new AbstractList$IteratorImpl_0(this);
  while (iter.i < iter.this$0_0.size_0()) {
    obj = $next_3(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}
;
_.iterator_0 = function iterator_4(){
  return new AbstractList$IteratorImpl_0(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl_0(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl_0(this, from);
}
;
_.remove_3 = function remove_13(index){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
_.castableTypeMap$ = makeCastMap([Q$List]);
function $hasNext_0(this$static){
  return this$static.i < this$static.this$0_0.size_0();
}

function $next_3(this$static){
  if (this$static.i >= this$static.this$0_0.size_0()) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0_0.get_0(this$static.last = this$static.i++);
}

function $remove_7(this$static){
  if (this$static.last < 0) {
    throw new IllegalStateException_0;
  }
  this$static.this$0_0.remove_3(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl_0(this$0){
  this.this$0_0 = this$0;
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl_0.prototype = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = function getClass_204(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}
;
_.hasNext = function hasNext_3(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_4(){
  return $next_3(this);
}
;
_.remove = function remove_14(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
_.this$0_0 = null;
function $previous(this$static){
  if (this$static.i <= 0) {
    throw new NoSuchElementException_0;
  }
  return this$static.this$0.get_0(this$static.last = --this$static.i);
}

function AbstractList$ListIteratorImpl_0(this$0, start){
  var size;
  this.this$0 = this$0;
  this.this$0_0 = this$0;
  size = this$0.size_0();
  (start < 0 || start > size) && indexOutOfBounds(start, size);
  this.i = start;
}

function AbstractList$ListIteratorImpl(){
}

_ = AbstractList$ListIteratorImpl_0.prototype = AbstractList$ListIteratorImpl.prototype = new AbstractList$IteratorImpl;
_.getClass$ = function getClass_205(){
  return Ljava_util_AbstractList$ListIteratorImpl_2_classLit;
}
;
_.this$0 = null;
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator_0(this$static.val$entrySet.this$0);
  return new AbstractMap$1$1_0(outerIter);
}

function AbstractMap$1_0(this$0, val$entrySet){
  this.this$0 = this$0;
  this.val$entrySet = val$entrySet;
}

function AbstractMap$1(){
}

_ = AbstractMap$1_0.prototype = AbstractMap$1.prototype = new AbstractSet;
_.contains = function contains_1(key){
  return $containsKey(this.this$0, key);
}
;
_.getClass$ = function getClass_206(){
  return Ljava_util_AbstractMap$1_2_classLit;
}
;
_.iterator_0 = function iterator_5(){
  return $iterator(this);
}
;
_.size_0 = function size_3(){
  return this.val$entrySet.this$0.size;
}
;
_.castableTypeMap$ = makeCastMap([Q$Set]);
_.this$0 = null;
_.val$entrySet = null;
function AbstractMap$1$1_0(val$outerIter){
  this.val$outerIter = val$outerIter;
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1_0.prototype = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = function getClass_207(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}
;
_.hasNext = function hasNext_4(){
  return $hasNext_0(this.val$outerIter.iter);
}
;
_.next_0 = function next_5(){
  var entry;
  entry = $next_2(this.val$outerIter);
  return entry.getKey();
}
;
_.remove = function remove_15(){
  $remove_6(this.val$outerIter);
}
;
_.val$outerIter = null;
function $add_3(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $clear(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
  this$static.size = 0;
}

function $get_0(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_0(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_8(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  splice_0(this$static.array, index, 1);
  --this$static.size;
  return previous;
}

function $remove_9(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_8(this$static, i);
  return true;
}

function $set(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function $toArray(this$static, out){
  var i;
  out.length < this$static.size && (out = createFrom(out, this$static.size));
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size && setCheck(out, this$static.size, null);
  return out;
}

function ArrayList_0(){
  this.array = initDim(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable]), Q$Object, 0, 0);
}

function splice_0(array, index, deleteCount){
  array.splice(index, deleteCount);
}

function splice_1(array, index, deleteCount, value){
  array.splice(index, deleteCount, value);
}

function ArrayList(){
}

_ = ArrayList_0.prototype = ArrayList.prototype = new AbstractList;
_.add = function add_4(o){
  return $add_3(this, o);
}
;
_.add_0 = function add_5(index, o){
  (index < 0 || index > this.size) && indexOutOfBounds(index, this.size);
  splice_1(this.array, index, 0, o);
  ++this.size;
}
;
_.contains = function contains_2(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_0 = function get_2(index){
  return $get_0(this, index);
}
;
_.getClass$ = function getClass_208(){
  return Ljava_util_ArrayList_2_classLit;
}
;
_.isEmpty = function isEmpty_1(){
  return this.size == 0;
}
;
_.remove_3 = function remove_16(index){
  return $remove_8(this, index);
}
;
_.remove_1 = function remove_17(o){
  return $remove_9(this, o);
}
;
_.size_0 = function size_4(){
  return this.size;
}
;
_.toArray = function toArray_0(out){
  return $toArray(this, out);
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$List]);
_.size = 0;
function $clinit_Collections(){
  $clinit_Collections = nullMethod;
  EMPTY_LIST = new Collections$EmptyList_0;
}

var EMPTY_LIST;
function Collections$EmptyList_0(){
}

function Collections$EmptyList(){
}

_ = Collections$EmptyList_0.prototype = Collections$EmptyList.prototype = new AbstractList;
_.contains = function contains_3(object){
  return false;
}
;
_.get_0 = function get_3(location_0){
  throw new IndexOutOfBoundsException_0;
}
;
_.getClass$ = function getClass_209(){
  return Ljava_util_Collections$EmptyList_2_classLit;
}
;
_.size_0 = function size_5(){
  return 0;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$List]);
function HashMap_0(){
  $clearImpl(this);
}

function HashMap(){
}

_ = HashMap_0.prototype = HashMap.prototype = new AbstractHashMap;
_.equals = function equals_7(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals__devirtual$(value1, value2);
}
;
_.getClass$ = function getClass_210(){
  return Ljava_util_HashMap_2_classLit;
}
;
_.getHashCode = function getHashCode_1(key){
  return ~~hashCode__devirtual$(key);
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Map]);
function $add_4(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map, o);
}

function $remove_10(this$static, o){
  return $remove_5(this$static.map, o) != null;
}

function HashSet_0(){
  this.map = new HashMap_0;
}

function HashSet(){
}

_ = HashSet_0.prototype = HashSet.prototype = new AbstractSet;
_.add = function add_6(o){
  return $add_4(this, o);
}
;
_.contains = function contains_4(o){
  return $containsKey(this.map, o);
}
;
_.getClass$ = function getClass_211(){
  return Ljava_util_HashSet_2_classLit;
}
;
_.isEmpty = function isEmpty_2(){
  return this.map.size == 0;
}
;
_.iterator_0 = function iterator_6(){
  return $iterator($keySet(this.map));
}
;
_.remove_1 = function remove_18(o){
  return $remove_10(this, o);
}
;
_.size_0 = function size_6(){
  return this.map.size;
}
;
_.toString$ = function toString_16(){
  return $toString_1($keySet(this.map));
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Set]);
_.map = null;
function IdentityHashMap_0(){
  $clearImpl(this);
}

function IdentityHashMap(){
}

_ = IdentityHashMap_0.prototype = IdentityHashMap.prototype = new AbstractHashMap;
_.equals$ = function equals_8(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, Q$Map)) {
    return false;
  }
  otherMap = dynamicCast(obj, Q$Map);
  if (this.size != otherMap.size_0()) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0(otherMap.entrySet().this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_3(entry$iterator.iter), Q$Map$Entry);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?this.nullSlotLive:instanceOf(otherKey, Q$String)?':' + dynamicCast(otherKey, Q$String) in this.stringMap:$hasHashValue(this, otherKey, getHashCode(otherKey)))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(otherKey == null?this.nullSlot:instanceOf(otherKey, Q$String)?$getStringValue(this, dynamicCast(otherKey, Q$String)):$getHashValue(this, otherKey, getHashCode(otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_9(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getClass$ = function getClass_212(){
  return Ljava_util_IdentityHashMap_2_classLit;
}
;
_.getHashCode = function getHashCode_2(key){
  return getHashCode(key);
}
;
_.hashCode$ = function hashCode_9(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator_0((new AbstractHashMap$EntrySet_0(this)).this$0); $hasNext_0(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_3(entry$iterator.iter), Q$Map$Entry);
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Map]);
function MapEntryImpl_0(key, value){
  this.key = key;
  this.value = value;
}

function MapEntryImpl(){
}

_ = MapEntryImpl_0.prototype = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = function getClass_213(){
  return Ljava_util_MapEntryImpl_2_classLit;
}
;
_.getKey = function getKey_1(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value;
}
;
_.setValue = function setValue_1(value){
  var old;
  old = this.value;
  this.value = value;
  return old;
}
;
_.castableTypeMap$ = makeCastMap([Q$Map$Entry]);
_.key = null;
_.value = null;
function NoSuchElementException_0(){
  $fillInStackTrace();
}

function NoSuchElementException(){
}

_ = NoSuchElementException_0.prototype = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = function getClass_214(){
  return Ljava_util_NoSuchElementException_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Exception, Q$RuntimeException, Q$Throwable]);
function $clinit_Random(){
  $clinit_Random = nullMethod;
  var i, twoToTheXMinus24Tmp, twoToTheXMinus48Tmp;
  twoToTheXMinus24 = initDim(_3D_classLit, makeCastMap([Q$Serializable]), -1, 25, 1);
  twoToTheXMinus48 = initDim(_3D_classLit, makeCastMap([Q$Serializable]), -1, 33, 1);
  twoToTheXMinus48Tmp = 1.52587890625E-5;
  for (i = 32; i >= 0; --i) {
    twoToTheXMinus48[i] = twoToTheXMinus48Tmp;
    twoToTheXMinus48Tmp *= 0.5;
  }
  twoToTheXMinus24Tmp = 1;
  for (i = 24; i >= 0; --i) {
    twoToTheXMinus24[i] = twoToTheXMinus24Tmp;
    twoToTheXMinus24Tmp *= 0.5;
  }
}

function $nextInt(this$static, n){

  return Math.floor(randomSource.random() * n);

  var bits, val;
  if (n > 0) {
    if ((n & -n) == n) {
      return round_int(n * $nextInternal(this$static) * 4.6566128730773926E-10);
    }
    do {
      bits = $nextInternal(this$static);
      val = bits % n;
    }
     while (bits - val + (n - 1) < 0);
    return round_int(val);
  }
  throw new IllegalArgumentException_0;
}

function $nextInternal(this$static){
  var carry, dval, h_0, hi, l_0, lo;
  hi = this$static.seedhi * 15525485 + this$static.seedlo * 1502;
  lo = this$static.seedlo * 15525485 + 11;
  carry = Math.floor(lo * 5.9604644775390625E-8);
  hi += carry;
  lo -= carry * 16777216;
  hi %= 16777216;
  this$static.seedhi = hi;
  this$static.seedlo = lo;
  h_0 = this$static.seedhi * 128;
  l_0 = floor(this$static.seedlo * twoToTheXMinus48[31]);
  dval = h_0 + l_0;
  dval >= 2147483648 && (dval -= 4294967296);
  return dval;
}

function Random_0(){
  $clinit_Random();
  var hi, lo, seed;
  seed = uniqueSeed++ + (new Date).getTime();
  hi = round_int(Math.floor(seed * 5.9604644775390625E-8)) & 16777215;
  lo = round_int(seed - hi * 16777216);
  this.seedhi = hi ^ 1502;
  this.seedlo = lo ^ 15525485;
}

function Random(){
}

_ = Random_0.prototype = Random.prototype = new Object_0;
_.getClass$ = function getClass_215(){
  return Ljava_util_Random_2_classLit;
}
;
_.seedhi = 0;
_.seedlo = 0;
var twoToTheXMinus24, twoToTheXMinus48, uniqueSeed = 0;
function equalsWithNullCheck(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals__devirtual$(a, b);
}

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
  e2c = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 3, 0, 0, 0, 0]);
  urf1 = new CubieCube_2(2531, 1373, 67026819, 1877);
  urf2 = new CubieCube_2(2089, 1906, 322752913, 255);
  urfMove = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10, 11, 12, 13, 14]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16, 17, 9, 10, 11]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13, 12, 17, 16, 15]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10, 9, 14, 13, 12]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16, 15, 11, 10, 9])]);
  initMove();
  initSym();
}

function $$init(this$static){
  this$static.cp = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1, 2, 3, 4, 5, 6, 7]);
  this$static.co = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 0, 0, 0, 0, 0, 0, 0]);
  this$static.ep = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  this$static.eo = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
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
  moveCube = initValues(_3Lnet_cubing_mark2_client_CubieCube_2_classLit, makeCastMap([Q$Serializable]), Q$CubieCube, [new CubieCube_2(15120, 0, 119750400, 0), new CubieCube_2(21021, 1494, 323403417, 0), new CubieCube_2(8064, 1236, 29441808, 802), new CubieCube_2(9, 0, 5880, 0), new CubieCube_2(1230, 412, 2949660, 0), new CubieCube_2(224, 137, 328552, 1160)]);
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
  lr2.co = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 3, 3, 3, 3, 3, 3, 3]);
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

_ = GreetingService_Proxy_0.prototype = GreetingService_Proxy.prototype = new RemoteServiceProxy;
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

_ = GreetingService_TypeSerializer_0.prototype = GreetingService_TypeSerializer.prototype = new SerializerBase;
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
    this$static.prun[i] = max(max(($clinit_CoordCube() , UDSliceTwistPrun)[this$static.twist[i] * 495 + UDSliceConj[this$static.slice_0[i]][this$static.tsym[i]]], UDSliceFlipPrun[this$static.flip[i] * 495 + UDSliceConj[this$static.slice_0[i]][this$static.fsym[i]]]), TwistFlipPrun[this$static.twist[i] * 2688 + (this$static.flip[i] << 3 | ($clinit_CubieCube() , Sym8MultInv)[this$static.fsym[i]][this$static.tsym[i]])]);
    CornMult(urf2, c, c.temps);
    CornMult(c.temps, urf1, c);
    EdgeMult(urf2, c, c.temps);
    EdgeMult(c.temps, urf1, c);
    i == 2 && $invCubieCube(c);
  }
  this$static.solution = null;
  for (this$static.length1 = 0; this$static.length1 < this$static.sol; ++this$static.length1) {
    this$static.maxlength2 = min(~~(this$static.sol / 2) + 1, this$static.sol - this$static.length1);
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
  if (gt(fromDouble(currentTimeMillis0()), this$static.timeOut)) {
    return true;
  }
  this$static.valid2 = min(this$static.valid2, this$static.valid1);
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
  prun = max(MEPermPrun[edge * 24 + MPermConj[mid][esym]], prun);
  if (prun >= this$static.maxlength2) {
    return false;
  }
  lm = this$static.length1 == 0?10:std2ud[~~(this$static.move[this$static.length1 - 1] / 3) * 3 + 1];
  for (i = prun; i < this$static.maxlength2; ++i) {
    if ($phase2(this$static, edge, esym, this$static.corn[this$static.length1], this$static.csym[this$static.length1], mid, i, this$static.length1, lm)) {
      this$static.sol = this$static.length1 + i;
      sb = new StringBuffer_0;
      urf = this$static.urfidx;
      this$static.inverse && (urf = (urf + 3) % 6);
      if (urf < 3) {
        for (s = 0; s < this$static.length1; ++s) {
          $append_2(sb, move2str[urfMove[urf][this$static.move[s]]]);
          sb.impl.string += ' ';
        }
        this$static.useSeparator && (sb.impl.string += '.' , sb);
        for (s = this$static.length1; s < this$static.sol; ++s) {
          $append_2(sb, move2str[urfMove[urf][this$static.move[s]]]);
          sb.impl.string += ' ';
        }
      }
       else {
        for (s = this$static.sol - 1; s >= this$static.length1; --s) {
          $append_2(sb, move2str[urfMove[urf][this$static.move[s]]]);
          sb.impl.string += ' ';
        }
        this$static.useSeparator && (sb.impl.string += '.' , sb);
        for (s = this$static.length1 - 1; s >= 0; --s) {
          $append_2(sb, move2str[urfMove[urf][this$static.move[s]]]);
          sb.impl.string += ' ';
        }
      }
      sb.impl.string += '(';
      $append_1(sb, this$static.sol);
      sb.impl.string += 'f)';
      this$static.solution = sb.impl.string;
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
    this$static.valid1 = min(this$static.valid1, this$static.length1 - maxl);
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
  if ((s = $verify(cc)) != 0)
    return 'Error ' + (s < 0?-s:s);
  this$static.useSeparator = false;
  this$static.inverse = true;
  this$static.timeOut = add_0(fromDouble(currentTimeMillis0()), P186a0_longLit);
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
_.timeOut = P0_longLit;
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
  gen = new Random_0;
  do {
    eperm = $nextInt(gen, 479001600);
    cperm = $nextInt(gen, 40320);
  }
   while ((get8Parity(cperm) ^ get12Parity(eperm)) != 0);
  return toFaceCube(new CubieCube_2(cperm, $nextInt(gen, 2187), eperm, $nextInt(gen, 2048)));
}

var inited = false;
function $clinit_Util(){
  $clinit_Util = nullMethod;
  var i, j;
  cornerFacelet = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [8, 9, 20]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [6, 18, 38]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 36, 47]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [2, 45, 11]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [29, 26, 15]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [27, 44, 24]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [33, 53, 42]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [35, 17, 51])]);
  edgeFacelet = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [5, 10]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [7, 19]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 37]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [1, 46]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [32, 16]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [28, 25]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [30, 43]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [34, 52]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [23, 12]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [21, 41]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [50, 39]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [48, 14])]);
  cornerColor = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1, 2]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 2, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 4, 5]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 5, 1]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 2, 1]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 4, 2]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 5, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 1, 5])]);
  edgeColor = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 2]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 5]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 1]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 2]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [3, 5]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [2, 1]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [2, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [5, 4]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [5, 1])]);
  Cnk = initDims([_3_3C_classLit, _3C_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$char_$1, Q$Serializable])], [Q$char_$1, -1], [12, 12], 2, 1);
  fact = initValues(_3I_classLit, makeCastMap([Q$Serializable]), -1, [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600]);
  move2str = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable]), Q$String, ['U ', 'U2', "U'", 'R ', 'R2', "R'", 'F ', 'F2', "F'", 'D ', 'D2', "D'", 'L ', 'L2', "L'", 'B ', 'B2', "B'"]);
  ud2std = initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [0, 1, 2, 4, 7, 9, 10, 11, 13, 16]);
  std2ud = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 18, 1);
  ckmv = initDims([_3_3Z_classLit, _3Z_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$boolean_$1, Q$Serializable])], [Q$boolean_$1, -1], [19, 18], 2, 2);
  ckmv2 = initDims([_3_3Z_classLit, _3Z_classLit], [makeCastMap([Q$Serializable]), makeCastMap([Q$boolean_$1, Q$Serializable])], [Q$boolean_$1, -1], [11, 10], 2, 2);
  parity4 = initDim(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, 24, 1);
  perm3 = initValues(_3_3B_classLit, makeCastMap([Q$Serializable]), Q$byte_$1, [initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [11, 10, 9]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [10, 11, 9]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [11, 9, 10]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [9, 11, 10]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [10, 9, 11]), initValues(_3B_classLit, makeCastMap([Q$byte_$1, Q$Serializable]), -1, [9, 10, 11])]);
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
  ts = initValues(_3C_classLit, makeCastMap([Q$char_$1, Q$Serializable]), -1, [85, 82, 70, 68, 76, 66]);
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
function $onModuleLoad_0(this$static){
  var closeButton, dialogBox, dialogVPanel, errorLabel, handler, nameField, randomCube, search, sendButton, serverResponseLabel, text, textToServerLabel, length_0;
  search = new Search_0;
  randomCube = randomCube_0();
  text = $solution(search, randomCube);
  sendButton = new Button_0('Send Now! ' + text);
  nameField = new TextBox_0;
  nameField.element['value'] = 'GWT User';
  errorLabel = new Label_0;
  setStyleName(sendButton.element, 'sendButton', true);
  $add_0(get('nameFieldContainer'), nameField);
  $add_0(get('sendButtonContainer'), sendButton);
  $add_0(get('errorLabelContainer'), errorLabel);
  nameField.element.focus();
  length_0 = $getPropertyString(nameField.element, 'value').length;
  length_0 > 0 && $setSelectionRange(nameField, length_0);
  dialogBox = new DialogBox_0;
  $setText_0(dialogBox.caption, 'Remote Procedure Call');
  dialogBox.isAnimationEnabled = true;
  closeButton = new Button_0('Close');
  closeButton.element.id = 'closeButton';
  textToServerLabel = new Label_0;
  serverResponseLabel = new HTML_0;
  dialogVPanel = new VerticalPanel_0;
  setStyleName(dialogVPanel.element, 'dialogVPanel', true);
  $add_1(dialogVPanel, new HTML_1('<b>Sending name to the server:<\/b>'));
  $add_1(dialogVPanel, textToServerLabel);
  $add_1(dialogVPanel, new HTML_1('<br><b>Server replies:<\/b>'));
  $add_1(dialogVPanel, serverResponseLabel);
  $setHorizontalAlignment(dialogVPanel, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $add_1(dialogVPanel, closeButton);
  $setWidget(dialogBox.decPanel, dialogVPanel);
  $maybeUpdateSize(dialogBox);
  $addDomHandler(closeButton, new gwt333$1_0(dialogBox, sendButton), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  handler = new gwt333$1MyHandler_0(this$static, errorLabel, nameField, sendButton, textToServerLabel, serverResponseLabel, dialogBox, closeButton);
  $addDomHandler(sendButton, handler, TYPE);
  $addDomHandler(nameField, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_0));
}

function gwt333_0(){
  this.greetingService = new GreetingService_Proxy_0;
}

function gwt333(){
}

_ = gwt333_0.prototype = gwt333.prototype = new Object_0;
_.getClass$ = function getClass_220(){
  return Lnet_cubing_mark2_client_gwt333_2_classLit;
}
;
function gwt333$1_0(val$dialogBox, val$sendButton){
  this.val$dialogBox = val$dialogBox;
  this.val$sendButton = val$sendButton;
}

function gwt333$1(){
}

_ = gwt333$1_0.prototype = gwt333$1.prototype = new Object_0;
_.getClass$ = function getClass_221(){
  return Lnet_cubing_mark2_client_gwt333$1_2_classLit;
}
;
_.onClick = function onClick(event_0){
  $hide_0(this.val$dialogBox);
  $setEnabled(this.val$sendButton, true);
  this.val$sendButton.element.focus();
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.val$dialogBox = null;
_.val$sendButton = null;
function $sendNameToServer(this$static){
  var textToServer;
  $setText_0(this$static.val$errorLabel, '');
  textToServer = $getPropertyString(this$static.val$nameField.element, 'value');
  if (!isValidName(textToServer)) {
    $setText_0(this$static.val$errorLabel, 'Please enter at least four characters');
    return;
  }
  $setEnabled(this$static.val$sendButton, false);
  $setText_0(this$static.val$textToServerLabel, textToServer);
  $setText_0(this$static.val$serverResponseLabel, '');
  $greetServer(this$static.this$0.greetingService, textToServer, new gwt333$1MyHandler$1_0(this$static.val$dialogBox, this$static.val$serverResponseLabel, this$static.val$closeButton));
}

function gwt333$1MyHandler_0(this$0, val$errorLabel, val$nameField, val$sendButton, val$textToServerLabel, val$serverResponseLabel, val$dialogBox, val$closeButton){
  this.this$0 = this$0;
  this.val$errorLabel = val$errorLabel;
  this.val$nameField = val$nameField;
  this.val$sendButton = val$sendButton;
  this.val$textToServerLabel = val$textToServerLabel;
  this.val$serverResponseLabel = val$serverResponseLabel;
  this.val$dialogBox = val$dialogBox;
  this.val$closeButton = val$closeButton;
}

function gwt333$1MyHandler(){
}

_ = gwt333$1MyHandler_0.prototype = gwt333$1MyHandler.prototype = new Object_0;
_.getClass$ = function getClass_222(){
  return Lnet_cubing_mark2_client_gwt333$1MyHandler_2_classLit;
}
;
_.onClick = function onClick_0(event_0){
  $sendNameToServer(this);
}
;
_.onKeyUp = function onKeyUp_0(event_0){
  (event_0.nativeEvent.keyCode || 0) == 13 && $sendNameToServer(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$KeyUpHandler, Q$EventHandler]);
_.this$0 = null;
_.val$closeButton = null;
_.val$dialogBox = null;
_.val$errorLabel = null;
_.val$nameField = null;
_.val$sendButton = null;
_.val$serverResponseLabel = null;
_.val$textToServerLabel = null;
function $onFailure(this$static){
  $setText(this$static.val$dialogBox, 'Remote Procedure Call - Failure');
  setStyleName(this$static.val$serverResponseLabel.element, 'serverResponseLabelError', true);
  $setHTML(this$static.val$serverResponseLabel, 'An error occurred while attempting to contact the server. Please check your network connection and try again.');
  $center(this$static.val$dialogBox);
  this$static.val$closeButton.element.focus();
}

function $onSuccess(this$static, result){
  $setText(this$static.val$dialogBox, 'Remote Procedure Call');
  setStyleName(this$static.val$serverResponseLabel.element, 'serverResponseLabelError', false);
  $setHTML(this$static.val$serverResponseLabel, result);
  $center(this$static.val$dialogBox);
  this$static.val$closeButton.element.focus();
}

function gwt333$1MyHandler$1_0(val$dialogBox, val$serverResponseLabel, val$closeButton){
  this.val$dialogBox = val$dialogBox;
  this.val$serverResponseLabel = val$serverResponseLabel;
  this.val$closeButton = val$closeButton;
}

function gwt333$1MyHandler$1(){
}

_ = gwt333$1MyHandler$1_0.prototype = gwt333$1MyHandler$1.prototype = new Object_0;
_.getClass$ = function getClass_223(){
  return Lnet_cubing_mark2_client_gwt333$1MyHandler$1_2_classLit;
}
;
_.val$closeButton = null;
_.val$dialogBox = null;
_.val$serverResponseLabel = null;
function isValidName(name_0){
  if (name_0 == null) {
    return false;
  }
  return name_0.length > 3;
}

var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase, softPermutationId){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}



var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler'), Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationScheduler$AnimationHandle'), Lcom_google_gwt_animation_client_AnimationSchedulerImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImpl'), Lcom_google_gwt_animation_client_AnimationSchedulerImplMozilla_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplMozilla'), Lcom_google_gwt_animation_client_AnimationSchedulerImplMozilla$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplMozilla$AnimationHandleImpl'), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer'), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl'), _3Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$AnimationHandleImpl;'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'AnimationSchedulerImplTimer$1'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client.', 'Duration'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), _3I_classLit = createForArray('', '[I'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), _3Z_classLit = createForArray('', '[Z'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;'), Lcom_google_gwt_core_client_impl_StringBufferImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImpl'), Lcom_google_gwt_core_client_impl_StringBufferImplAppend_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StringBufferImplAppend'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', values), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;'), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', null), Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow', values_0), _3Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Overflow;'), Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$1', null), Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$2', null), Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$3', null), Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Overflow$4', null), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', values_1), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;'), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', null), Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'HumanInputEvent'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'Event$Type'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent'), Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyCodeEvent'), Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyUpEvent'), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent'), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent'), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent'), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'EventBus'), Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus'), Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$Bus'), Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared.', 'LegacyHandlerWrapper'), Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'UmbrellaException'), Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared.', 'UmbrellaException'), Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client.', 'Request'), Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client.', 'Response'), Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$1'), Lcom_google_gwt_http_client_Request$3_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$3'), Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder'), Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$1'), Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$Method'), Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestException'), Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestPermissionException'), Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestTimeoutException'), Lcom_google_gwt_i18n_client_AutoDirectionHandler_2_classLit = createForClass('com.google.gwt.i18n.client.', 'AutoDirectionHandler'), Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client.', 'HasDirection$Direction', values_2), _3Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForArray('[Lcom.google.gwt.i18n.client.', 'HasDirection$Direction;'), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang.', 'LongLibBase$LongEmul'), _3Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForArray('[Lcom.google.gwt.lang.', 'LongLibBase$LongEmul;'), Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared.', 'AbstractRenderer'), Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughParser'), Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing.', 'PassthroughRenderer'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_HistoryImplTimer_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplTimer'), Lcom_google_gwt_user_client_impl_HistoryImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplMozilla'), Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'IncompatibleRemoteServiceException'), Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'InvocationException'), Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'RpcRequestBuilder'), Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'RpcTokenException'), Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'SerializationException'), Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'ServiceDefTarget$NoServiceEntryPointSpecifiedException'), Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'StatusCodeException'), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc.', 'XsrfToken'), Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'AbstractSerializationStream'), Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'AbstractSerializationStreamReader'), Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'AbstractSerializationStreamWriter'), _3D_classLit = createForArray('', '[D'), Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'ClientSerializationStreamReader'), Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'ClientSerializationStreamWriter'), Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'RemoteServiceProxy'), Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'RemoteServiceProxy$ServiceHelper'), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter'), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader', values_3), _3Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForArray('[Lcom.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader;'), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$1', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$10', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$11', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$2', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$3', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$4', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$5', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$6', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$7', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$8', null), Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl.', 'RequestCallbackAdapter$ResponseReader$9', null), Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'RpcStatsContext'), Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl.', 'SerializerBase'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox'), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1'), Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'LabelBase'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl'), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler'), Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DirectionalTextHelper'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$AutoHorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1'), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3'), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ValueBoxBase'), Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBoxBase'), Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextBox'), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment', values_4), _3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment;'), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$1', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$2', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$3', null), Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'ValueBoxBase$TextAlignment$4', null), Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'VerticalPanel'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_ui_impl_PopupImplMozilla$1_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'PopupImplMozilla$1'), Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$1'), Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$2'), Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared.', 'SimpleEventBus$3'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), _3J_classLit = createForArray('', '[J'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), _3B_classLit = createForArray('', '[B'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$ListIteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util.', 'Collections$EmptyList'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util.', 'IdentityHashMap'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Ljava_util_Random_2_classLit = createForClass('java.util.', 'Random'), _3_3C_classLit = createForArray('', '[[C'), _3_3B_classLit = createForArray('', '[[B'), Lnet_cubing_mark2_client_CubieCube_2_classLit = createForClass('net.cubing.mark2.client.', 'CubieCube'), _3Lnet_cubing_mark2_client_CubieCube_2_classLit = createForArray('[Lnet.cubing.mark2.client.', 'CubieCube;'), Lnet_cubing_mark2_client_GreetingService_1Proxy_2_classLit = createForClass('net.cubing.mark2.client.', 'GreetingService_Proxy'), Lnet_cubing_mark2_client_GreetingService_1TypeSerializer_2_classLit = createForClass('net.cubing.mark2.client.', 'GreetingService_TypeSerializer'), Lnet_cubing_mark2_client_Search_2_classLit = createForClass('net.cubing.mark2.client.', 'Search'), _3_3Z_classLit = createForArray('', '[[Z'), Lnet_cubing_mark2_client_gwt333_2_classLit = createForClass('net.cubing.mark2.client.', 'gwt333'), Lnet_cubing_mark2_client_gwt333$1_2_classLit = createForClass('net.cubing.mark2.client.', 'gwt333$1'), Lnet_cubing_mark2_client_gwt333$1MyHandler_2_classLit = createForClass('net.cubing.mark2.client.', 'gwt333$1MyHandler'), Lnet_cubing_mark2_client_gwt333$1MyHandler$1_2_classLit = createForClass('net.cubing.mark2.client.', 'gwt333$1MyHandler$1');
$stats && $stats({moduleName:'gwt333',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if ($wnd.gwt333) $wnd.gwt333.onScriptLoad();


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