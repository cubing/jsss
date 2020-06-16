var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.org_cubing_min2phase;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats("moduleStartup", "moduleEvalStart");
var $gwt_version = "2.7.0";
var $strongName = "4138C51F85984B097710FB6A8A37B62E";
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
  var fragFile = "deferredjs/" + $strongName + "/" + frag + ".cache.js";
  return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {
  return __gwtModuleFunction.__installRunAsyncCode(code);
}
function __gwt_isKnownPropertyValue(propName, propValue) {
  return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
  return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent
  ? function (a) {
      return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
    }
  : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 3.141592653589793,
  $intern_1 = { 3: 1, 6: 1 },
  $intern_2 = { 3: 1, 9: 1, 6: 1 },
  $intern_3 = { 3: 1 },
  $intern_4 = { 8: 1, 22: 1, 3: 1, 5: 1, 4: 1 },
  $intern_5 = { 22: 1, 28: 1, 3: 1, 5: 1, 4: 1 },
  $intern_6 = { 23: 1, 3: 1, 5: 1, 4: 1 },
  $intern_7 = { 45: 1, 3: 1, 9: 1, 6: 1 },
  $intern_8 = { 33: 1, 3: 1, 9: 1, 6: 1 },
  $intern_9 = 4194303,
  $intern_10 = 1048575,
  $intern_11 = 524288,
  $intern_12 = 65536,
  $intern_13 = 1048576,
  $intern_14 = 4194304,
  $intern_15 = 16777216,
  $intern_16 = 33554432,
  $intern_17 = 67108864,
  $intern_18 = { 15: 1, 3: 1, 5: 1, 4: 1 },
  $intern_19 = { 20: 1, 16: 1, 19: 1, 18: 1, 21: 1, 14: 1, 12: 1 },
  $intern_20 = 65535,
  $intern_21 = { 248: 1, 41: 1 },
  $intern_22 = { 20: 1, 16: 1, 19: 1, 18: 1, 21: 1, 51: 1, 14: 1, 12: 1 },
  $intern_23 = { 27: 1, 3: 1, 5: 1, 4: 1 },
  $intern_24 = { 24: 1 },
  $intern_25 = { 3: 1, 29: 1 },
  $intern_26 = { 11: 1, 3: 1 },
  $intern_27 = { 17: 1, 3: 1 },
  $intern_28 = 14540032,
  $intern_29 = 286331153,
  $intern_30 = { 10: 1, 3: 1 };
var _,
  initFnList_0,
  prototypesByTypeId_0 = {},
  permutationId = -1;
function typeMarkerFn() {}

function portableObjCreate(obj) {
  function F() {}

  F.prototype = obj || {};
  return new F();
}

function modernizeBrowser() {
  !Array.isArray &&
    (Array.isArray = function (vArg) {
      return Object.prototype.toString.call(vArg) === "[object Array]";
    });
}

function maybeGetClassLiteralFromPlaceHolder_0(entry) {
  return entry instanceof Array ? entry[0] : null;
}

function emptyMethod() {}

function defineClass(typeId, superTypeId, castableTypeMap) {
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  } else {
    _ = prototypesByTypeId[typeId] = !superTypeId
      ? {}
      : createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId) {
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue) {
  typeof window === "object" &&
    typeof window["$gwt"] === "object" &&
    (window["$gwt"][propertyName] = propertyValue);
}

function registerEntry() {
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId) {
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules() {
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    } catch (e) {
      errFn(modName, e);
    }
  } else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit() {
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions() {
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0() {}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other) {
  return isJavaString(this$static)
    ? $equals(this$static, other)
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.equals$(other)
    : isJavaArray(this$static)
    ? this$static === other
    : this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static) {
  return isJavaString(this$static)
    ? Ljava_lang_String_2_classLit
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.___clazz$
    : isJavaArray(this$static)
    ? this$static.___clazz$
    : Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static) {
  return isJavaString(this$static)
    ? getHashCode_0(this$static)
    : hasJavaObjectVirtualDispatch(this$static)
    ? this$static.hashCode$()
    : isJavaArray(this$static)
    ? getHashCode(this$static)
    : getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other) {
  return this === other;
};
_.getClass$ = function getClass_0() {
  return this.___clazz$;
};
_.hashCode$ = function hashCode_0() {
  return getHashCode(this);
};
_.toString$ = function toString_0() {
  return (
    $getName(getClass__Ljava_lang_Class___devirtual$(this)) +
    "@" +
    (hashCode__I__devirtual$(this) >>> 0).toString(16)
  );
};
_.toString = function () {
  return this.toString$();
};
stringCastMap = { 3: 1, 246: 1, 5: 1, 2: 1 };
modernizeBrowser();
function canCast(src_0, dstId) {
  return (
    (isJavaString(src_0) && !!stringCastMap[dstId]) ||
    (src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId])
  );
}

function dynamicCast(src_0, dstId) {
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException();
  }
  return src_0;
}

function dynamicCastJso(src_0) {
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException();
  }
  return src_0;
}

function dynamicCastToString(src_0) {
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException();
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0) {
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId) {
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0) {
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0) {
  return Array.isArray(src_0);
}

function isJavaArray(src_0) {
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0) {
  return typeof src_0 === "string";
}

function maskUndefined(src_0) {
  return src_0 == null ? null : src_0;
}

function narrow_byte(x_0) {
  return (x_0 << 24) >> 24;
}

function round_int(x_0) {
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o) {
  if (o != null) {
    throw new ClassCastException();
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static) {
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static) {
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class() {
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName) {
  var clazz;
  clazz = new Class();
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(
  packageName,
  compoundClassName,
  typeId,
  enumConstantsFunc
) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc ? 8 : 0;
  return clazz;
}

function createForInterface(packageName, compoundClassName) {
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId) {
  var clazz;
  clazz = createClassObject("", className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions) {
  var arrayLiterals = (leafClass.arrayLiterals = leafClass.arrayLiterals || []);
  return (
    arrayLiterals[dimensions] ||
    (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(
      dimensions
    ))
  );
}

function getPrototypeForClass(clazz) {
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz) {
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()
      ? (clazz.typeName = "[" + componentType.typeId)
      : !componentType.isArray_0()
      ? (clazz.typeName = "[L" + componentType.getName() + ";")
      : (clazz.typeName = "[" + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + "[]";
    clazz.simpleName = componentType.getSimpleName() + "[]";
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split("/");
  clazz.typeName = join_0(".", [packageName, join_0("$", compoundName)]);
  clazz.canonicalName = join_0(".", [packageName, join_0(".", compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings) {
  var i = 0;
  while (!strings[i] || strings[i] == "") {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == "") {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz) {
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(79, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions) {
  var clazz;
  clazz = new Class();
  clazz.modifiers = 4;
  dimensions > 1
    ? (clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1))
    : (clazz.componentType = this);
  return clazz;
};
_.getCanonicalName = function getCanonicalName() {
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
};
_.getName = function getName() {
  return $getName(this);
};
_.getSimpleName = function getSimpleName() {
  $ensureNamesAreInitialized(this);
  return this.simpleName;
};
_.isArray_0 = function isArray() {
  return (this.modifiers & 4) != 0;
};
_.isPrimitive = function isPrimitive() {
  return (this.modifiers & 1) != 0;
};
_.toString$ = function toString_9() {
  return (
    ((this.modifiers & 2) != 0
      ? "interface "
      : (this.modifiers & 1) != 0
      ? ""
      : "class ") + ($ensureNamesAreInitialized(this), this.typeName)
  );
};
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass("java.lang", "Object", 1),
  Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(
    "com.google.gwt.core.client",
    "JavaScriptObject$",
    0
  ),
  Ljava_lang_Class_2_classLit = createForClass("java.lang", "Class", 79);
function $cancel(this$static) {
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

function $run(this$static, startTime) {
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = 200;
  this$static.startTime = startTime;
  this$static.element = null;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $update(this$static, curTime) {
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(
      this$static,
      (1 + Math.cos($intern_0 + progress * $intern_0)) / 2
    );
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.offsetHeight = $getOffsetHeight(this$static.curPanel);
    this$static.offsetWidth = $getOffsetWidth(this$static.curPanel);
    $setPropertyImpl(
      $getElement(this$static.curPanel).style,
      "overflow",
      "hidden"
    );
    $onUpdate(this$static, (1 + Math.cos($intern_0)) / 2);
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

function Animation(scheduler) {
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(85, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "Animation",
  85
);
function $execute(this$static, timestamp) {
  $update(this$static.this$01, timestamp)
    ? (this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(
        this$static.this$01.callback,
        this$static.this$01.element
      ))
    : (this$static.this$01.requestHandle = null);
}

function Animation$1(this$0) {
  this.this$01 = this$0;
}

defineClass(128, 1, {}, Animation$1);
_.execute = function execute(timestamp) {
  $execute(this, timestamp);
};
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "Animation/1",
  128
);
defineClass(268, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationScheduler",
  268
);
defineClass(70, 1, { 70: 1 });
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationScheduler/AnimationHandle",
  70
);
function AnimationSchedulerImplStandard() {}

function cancelImpl(holder) {
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element) {
  var callback = $entry(function () {
    var time = now_1();
    cb.execute(time);
  });
  var handle = $wnd.requestAnimationFrame(callback, element);
  return { id: handle };
}

defineClass(217, 268, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element) {
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
};
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationSchedulerImplStandard",
  217
);
function AnimationSchedulerImplStandard$1(val$handle) {
  this.val$handle2 = val$handle;
}

defineClass(218, 70, { 70: 1 }, AnimationSchedulerImplStandard$1);
_.cancel = function cancel() {
  cancelImpl(this.val$handle2);
};
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationSchedulerImplStandard/1",
  218
);
function $cancelAnimationFrame(this$static, requestId) {
  $remove_7(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 &&
    $cancel_0(this$static.timer);
}

function $updateAnimations(this$static) {
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(
    Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit,
    { 291: 1, 3: 1 },
    77,
    this$static.animationRequests.array.length,
    0,
    1
  );
  curAnimations = dynamicCast(
    $toArray(this$static.animationRequests, curAnimations),
    291
  );
  duration = new Duration();
  for (
    requestId$index = 0, requestId$max = curAnimations.length;
    requestId$index < requestId$max;
    ++requestId$index
  ) {
    requestId = curAnimations[requestId$index];
    $remove_7(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 &&
    $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer() {
  this.animationRequests = new ArrayList();
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(219, 268, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(
  callback,
  element
) {
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(
    this,
    callback
  );
  $add_3(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
};
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationSchedulerImplTimer",
  219
);
function $cancel_0(this$static) {
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating
    ? clearInterval_0(this$static.timerId.value_0)
    : clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis) {
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0("must be non-negative");
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(
    setTimeout_0(
      createCallback(this$static, this$static.cancelCounter),
      delayMillis
    )
  );
}

function Timer() {}

function clearInterval_0(timerId) {
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId) {
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter) {
  return $entry(function () {
    timer.fire(cancelCounter);
  });
}

function setTimeout_0(func, time) {
  return $wnd.setTimeout(func, time);
}

defineClass(69, 1, {});
_.fire = function fire(scheduleCancelCounter) {
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
};
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Timer",
  69
);
function AnimationSchedulerImplTimer$1(this$0) {
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(220, 69, {}, AnimationSchedulerImplTimer$1);
_.run = function run() {
  $updateAnimations(this.this$01);
};
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationSchedulerImplTimer/1",
  220
);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback) {
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(
  77,
  70,
  { 70: 1, 77: 1 },
  AnimationSchedulerImplTimer$AnimationHandleImpl
);
_.cancel = function cancel_0() {
  $cancelAnimationFrame(this.this$01, this);
};
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass(
  "com.google.gwt.animation.client",
  "AnimationSchedulerImplTimer/AnimationHandleImpl",
  77
);
function Duration() {
  this.start_0 = now_1();
}

defineClass(200, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "Duration",
  200
);
function $initCause(this$static, cause) {
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, "Self-causation not permitted");
  this$static.cause = cause;
  return this$static;
}

function Throwable(message, cause) {
  this.cause = cause;
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(6, 1, $intern_1);
_.getMessage = function getMessage() {
  return this.detailMessage;
};
_.toString$ = function toString_1() {
  var className, msg;
  return (
    (className = $getName(this.___clazz$)),
    (msg = this.getMessage()),
    msg != null ? className + ": " + msg : className
  );
};
var Ljava_lang_Throwable_2_classLit = createForClass(
  "java.lang",
  "Throwable",
  6
);
function Exception(message) {
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(9, 6, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass(
  "java.lang",
  "Exception",
  9
);
function RuntimeException() {
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message) {
  Exception.call(this, message);
}

function RuntimeException_1(message, cause) {
  Throwable.call(this, message, cause);
}

defineClass(13, 9, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass(
  "java.lang",
  "RuntimeException",
  13
);
defineClass(102, 13, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "JavaScriptExceptionBase",
  102
);
function $clinit_JavaScriptException() {
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0();
}

function $ensureInit(this$static) {
  var exception;
  if (this$static.message_0 == null) {
    exception =
      maskUndefined(this$static.e) === maskUndefined(NOT_SET)
        ? null
        : this$static.e;
    this$static.name_0 =
      exception == null
        ? "null"
        : instanceOfJso(exception)
        ? getExceptionName0(dynamicCastJso(exception))
        : isJavaString(exception)
        ? "String"
        : $getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description =
      this$static.description +
      ": " +
      (instanceOfJso(exception)
        ? getExceptionDescription0(dynamicCastJso(exception))
        : exception + "");
    this$static.message_0 =
      "(" + this$static.name_0 + ") " + this$static.description;
  }
}

function JavaScriptException(e) {
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = "";
  this.e = e;
  this.description = "";
}

function getExceptionDescription0(e) {
  return e == null ? null : e.message;
}

function getExceptionName0(e) {
  return e == null ? null : e.name;
}

defineClass(26, 102, { 26: 1, 3: 1, 9: 1, 6: 1 }, JavaScriptException);
_.getMessage = function getMessage_0() {
  return $ensureInit(this), this.message_0;
};
_.getThrown = function getThrown() {
  return maskUndefined(this.e) === maskUndefined(NOT_SET) ? null : this.e;
};
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "JavaScriptException",
  26
);
function now_1() {
  if (Date.now) {
    return Date.now();
  }
  return new Date().getTime();
}

defineClass(250, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(
  "com.google.gwt.core.client",
  "Scheduler",
  250
);
function apply_0(jsFunction, thisObj, args) {
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter() {
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl(), INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction) {
  return function () {
    return entry0(jsFunction, this, arguments);
    var __0;
  };
}

function entry0(jsFunction, thisObj, args) {
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  } finally {
    exit(initialEntry);
  }
}

function exit(initialEntry) {
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl(), INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o) {
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL() {
  var key = "__gwtDevModeHook:" + $moduleName + ":moduleBase";
  var global = $wnd || self;
  return global[key] || $moduleBase;
}

function reportToBrowser(e) {
  $wnd.setTimeout(function () {
    throw e;
  }, 0);
}

function watchdogEntryDepthCancel(timerId) {
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun() {
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0,
  sNextHashId = 0,
  watchdogEntryDepthLastScheduled = 0,
  watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl() {
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl();
}

function $flushEntryCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static) {
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    } while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function SchedulerImpl() {}

function push_0(queue, task) {
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled) {
  var e, i, j, t;
  for (i = 0, j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]
        ? t[0].nullMethod() && (rescheduled = push_0(rescheduled, t))
        : t[0].nullMethod();
    } catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 26) ? dynamicCast(e, 26).getThrown() : e);
      } else throw unwrap($e0);
    }
  }
  return rescheduled;
}

defineClass(197, 250, {}, SchedulerImpl);
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "SchedulerImpl",
  197
);
function $clinit_StackTraceCreator() {
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || "stack" in new Error());
  c = new StackTraceCreator$CollectorModernNoSourceMap();
  collector = enforceLegacy ? new StackTraceCreator$CollectorLegacy() : c;
}

function captureStackTrace(throwable, reference) {
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName) {
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return (match_0 && match_0[1]) || "anonymous";
}

var collector;
defineClass(261, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/Collector",
  261
);
function StackTraceCreator$CollectorLegacy() {}

defineClass(103, 261, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored) {
  var seen = {},
    name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 =
      ($clinit_StackTraceCreator(),
      callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ":" + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0, j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
};
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/CollectorLegacy",
  103
);
function $clinit_StackTraceCreator$CollectorModern() {
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(262, 261, {});
_.collect = function collect_0(t, jsThrown) {
  function fixIE(e) {
    if (!("stack" in e)) {
      try {
        throw e;
      } catch (ignored) {}
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == "string"
    ? (backingJsError = fixIE(new Error(jsThrown)))
    : jsThrown instanceof Object && "stack" in jsThrown
    ? (backingJsError = jsThrown)
    : (backingJsError = fixIE(new Error()));
  t.__gwt$backingJsError = backingJsError;
};
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/CollectorModern",
  262
);
function StackTraceCreator$CollectorModernNoSourceMap() {
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(104, 262, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(
  "com.google.gwt.core.client.impl",
  "StackTraceCreator/CollectorModernNoSourceMap",
  104
);
function checkCriticalArgument(expression, errorMessage) {
  if (!expression) {
    throw new IllegalArgumentException_0("" + errorMessage);
  }
}

function checkCriticalElement(expression) {
  if (!expression) {
    throw new NoSuchElementException();
  }
}

function checkElementIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0(
      "Index: " + index_0 + ", Size: " + size_0
    );
  }
}

function checkNotNull(reference) {
  if (!reference) {
    throw new NullPointerException();
  }
  return reference;
}

function checkPositionIndex(index_0, size_0) {
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0(
      "Index: " + index_0 + ", Size: " + size_0
    );
  }
}

function checkState(expression) {
  if (!expression) {
    throw new IllegalStateException();
  }
}

function checkState_0(expression) {
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild) {
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild) {
  return this$static.removeChild(oldChild);
}

function is(o) {
  try {
    return !!o && !!o.nodeType;
  } catch (e) {
    return false;
  }
}

function $addClassName(this$static, className) {
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0
      ? $setClassName(this$static, oldClassName + " " + className)
      : $setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static) {
  return this$static.className || "";
}

function $getPropertyInt(this$static, name_0) {
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0) {
  return this$static[name_0] == null ? null : String(this$static[name_0]);
}

function $removeClassName(this$static, className) {
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0
      ? (newClassName = end)
      : end.length == 0
      ? (newClassName = begin)
      : (newClassName = begin + " " + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setClassName(this$static, className) {
  this$static.className = className || "";
}

function $setInnerHTML(this$static, html) {
  this$static.innerHTML = html || "";
}

function $setPropertyInt(this$static, name_0, value_0) {
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0) {
  this$static[name_0] = value_0;
}

function indexOfName(nameList, name_0) {
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (
        last == lastPos ||
        (last < lastPos && nameList.charCodeAt(last) == 32)
      ) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o) {
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className) {
  className = $trim(className);
  return className;
}

function $eventGetAltKey(evt) {
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt) {
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt) {
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt) {
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt) {
  return !!evt.shiftKey;
}

function $eventGetSubPixelClientX(evt) {
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt) {
  return evt.clientY || 0;
}

function $eventStopPropagation(evt) {
  evt.stopPropagation();
}

function $getFirstChildElement(elem) {
  var child = elem.firstChild;
  while (child && child.nodeType != 1) child = child.nextSibling;
  return child;
}

function $getParentElement(node) {
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getSubPixelScrollLeft(elem) {
  return elem.scrollLeft || 0;
}

function $eventPreventDefault(evt) {
  evt.preventDefault();
}

function $isOrHasChild(parent_0, child) {
  return parent_0.contains(child);
}

function $setInnerText(elem, text_0) {
  elem.textContent = text_0 || "";
}

function $eventGetCurrentTarget(event_0) {
  return event_0.currentTarget || $wnd;
}

function $getAbsoluteLeft(elem) {
  var left, rect;
  rect = getBoundingClientRect(elem);
  left = rect
    ? rect.left + $getScrollLeft_0(elem.ownerDocument.body)
    : getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem) {
  var rect, top_0, top_1;
  rect = getBoundingClientRect(elem);
  top_0 = rect
    ? rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0)
    : getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc) {
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem) {
  if (
    !$equalsIgnoreCase("body", elem.tagName) &&
    elem.ownerDocument.defaultView.getComputedStyle(elem, "").direction == "rtl"
  ) {
    return (
      ($getSubPixelScrollLeft(elem) | 0) -
      (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0))
    );
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getScrollTop(doc) {
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function $getTabIndex(elem) {
  return typeof elem.tabIndex != "undefined" ? elem.tabIndex : -1;
}

function getAbsoluteLeftUsingOffsets(elem) {
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView
        .getComputedStyle(curr, "")
        .getPropertyValue("direction") == "rtl" &&
        (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, "")["position"] == "fixed") {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 &&
      $wnd.devicePixelRatio &&
      (left += parseInt(
        doc.defaultView
          .getComputedStyle(parent_0, "")
          .getPropertyValue("border-left-width")
      ));
    if (
      parent_0 &&
      parent_0.tagName == "BODY" &&
      elem.style.position == "absolute"
    ) {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem) {
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, "")["position"] == "fixed") {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 &&
      $wnd.devicePixelRatio &&
      (top_0 += parseInt(
        doc.defaultView
          .getComputedStyle(parent_0, "")
          .getPropertyValue("border-top-width")
      ));
    if (
      parent_0 &&
      parent_0.tagName == "BODY" &&
      elem.style.position == "absolute"
    ) {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getBoundingClientRect(element) {
  return element.getBoundingClientRect && element.getBoundingClientRect();
}

function $eventGetTarget(evt) {
  var target = evt.target;
  target && target.nodeType == 3 && (target = target.parentNode);
  return target;
}

function $getClientHeight(this$static) {
  return (
    ($equals(this$static.compatMode, "CSS1Compat")
      ? this$static.documentElement
      : this$static.body
    ).clientHeight | 0
  );
}

function $getClientWidth(this$static) {
  return (
    ($equals(this$static.compatMode, "CSS1Compat")
      ? this$static.documentElement
      : this$static.body
    ).clientWidth | 0
  );
}

function $getElementById(this$static, elementId) {
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static) {
  return (
    (($equals(this$static.compatMode, "CSS1Compat")
      ? this$static.documentElement
      : this$static.body
    ).scrollHeight || 0) | 0
  );
}

function $getScrollWidth(this$static) {
  return (
    (($equals(this$static.compatMode, "CSS1Compat")
      ? this$static.documentElement
      : this$static.body
    ).scrollWidth || 0) | 0
  );
}

function $setPropertyImpl(this$static, name_0, value_0) {
  this$static[name_0] = value_0;
}

function Enum(name_0, ordinal) {
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, { 3: 1, 5: 1, 4: 1 });
_.equals$ = function equals_0(other) {
  return this === other;
};
_.hashCode$ = function hashCode_1() {
  return getHashCode(this);
};
_.toString$ = function toString_2() {
  return this.name_0 != null ? this.name_0 : "" + this.ordinal;
};
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass("java.lang", "Enum", 4);
function $clinit_Style$Display() {
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1();
  BLOCK = new Style$Display$2();
  INLINE = new Style$Display$3();
  INLINE_BLOCK = new Style$Display$4();
  INLINE_TABLE = new Style$Display$5();
  LIST_ITEM = new Style$Display$6();
  RUN_IN = new Style$Display$7();
  TABLE = new Style$Display$8();
  TABLE_CAPTION = new Style$Display$9();
  TABLE_COLUMN_GROUP = new Style$Display$10();
  TABLE_HEADER_GROUP = new Style$Display$11();
  TABLE_FOOTER_GROUP = new Style$Display$12();
  TABLE_ROW_GROUP = new Style$Display$13();
  TABLE_CELL = new Style$Display$14();
  TABLE_COLUMN = new Style$Display$15();
  TABLE_ROW = new Style$Display$16();
  INITIAL = new Style$Display$17();
}

function Style$Display(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values() {
  $clinit_Style$Display();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_dom_client_Style$Display_2_classLit,
      1
    ),
    $intern_3,
    8,
    0,
    [
      NONE,
      BLOCK,
      INLINE,
      INLINE_BLOCK,
      INLINE_TABLE,
      LIST_ITEM,
      RUN_IN,
      TABLE,
      TABLE_CAPTION,
      TABLE_COLUMN_GROUP,
      TABLE_HEADER_GROUP,
      TABLE_FOOTER_GROUP,
      TABLE_ROW_GROUP,
      TABLE_CELL,
      TABLE_COLUMN,
      TABLE_ROW,
      INITIAL,
    ]
  );
}

defineClass(8, 4, $intern_4);
var BLOCK,
  INITIAL,
  INLINE,
  INLINE_BLOCK,
  INLINE_TABLE,
  LIST_ITEM,
  NONE,
  RUN_IN,
  TABLE,
  TABLE_CAPTION,
  TABLE_CELL,
  TABLE_COLUMN,
  TABLE_COLUMN_GROUP,
  TABLE_FOOTER_GROUP,
  TABLE_HEADER_GROUP,
  TABLE_ROW,
  TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display",
  8,
  values
);
function Style$Display$1() {
  Style$Display.call(this, "NONE", 0);
}

defineClass(167, 8, $intern_4, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/1",
  167,
  null
);
function Style$Display$10() {
  Style$Display.call(this, "TABLE_COLUMN_GROUP", 9);
}

defineClass(176, 8, $intern_4, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/10",
  176,
  null
);
function Style$Display$11() {
  Style$Display.call(this, "TABLE_HEADER_GROUP", 10);
}

defineClass(177, 8, $intern_4, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/11",
  177,
  null
);
function Style$Display$12() {
  Style$Display.call(this, "TABLE_FOOTER_GROUP", 11);
}

defineClass(178, 8, $intern_4, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/12",
  178,
  null
);
function Style$Display$13() {
  Style$Display.call(this, "TABLE_ROW_GROUP", 12);
}

defineClass(179, 8, $intern_4, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/13",
  179,
  null
);
function Style$Display$14() {
  Style$Display.call(this, "TABLE_CELL", 13);
}

defineClass(180, 8, $intern_4, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/14",
  180,
  null
);
function Style$Display$15() {
  Style$Display.call(this, "TABLE_COLUMN", 14);
}

defineClass(181, 8, $intern_4, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/15",
  181,
  null
);
function Style$Display$16() {
  Style$Display.call(this, "TABLE_ROW", 15);
}

defineClass(182, 8, $intern_4, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/16",
  182,
  null
);
function Style$Display$17() {
  Style$Display.call(this, "INITIAL", 16);
}

defineClass(183, 8, $intern_4, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/17",
  183,
  null
);
function Style$Display$2() {
  Style$Display.call(this, "BLOCK", 1);
}

defineClass(168, 8, $intern_4, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/2",
  168,
  null
);
function Style$Display$3() {
  Style$Display.call(this, "INLINE", 2);
}

defineClass(169, 8, $intern_4, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/3",
  169,
  null
);
function Style$Display$4() {
  Style$Display.call(this, "INLINE_BLOCK", 3);
}

defineClass(170, 8, $intern_4, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/4",
  170,
  null
);
function Style$Display$5() {
  Style$Display.call(this, "INLINE_TABLE", 4);
}

defineClass(171, 8, $intern_4, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/5",
  171,
  null
);
function Style$Display$6() {
  Style$Display.call(this, "LIST_ITEM", 5);
}

defineClass(172, 8, $intern_4, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/6",
  172,
  null
);
function Style$Display$7() {
  Style$Display.call(this, "RUN_IN", 6);
}

defineClass(173, 8, $intern_4, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/7",
  173,
  null
);
function Style$Display$8() {
  Style$Display.call(this, "TABLE", 7);
}

defineClass(174, 8, $intern_4, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/8",
  174,
  null
);
function Style$Display$9() {
  Style$Display.call(this, "TABLE_CAPTION", 8);
}

defineClass(175, 8, $intern_4, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Display/9",
  175,
  null
);
function $clinit_Style$TextAlign() {
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1();
  JUSTIFY = new Style$TextAlign$2();
  LEFT = new Style$TextAlign$3();
  RIGHT = new Style$TextAlign$4();
}

function Style$TextAlign(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0() {
  $clinit_Style$TextAlign();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit,
      1
    ),
    $intern_3,
    28,
    0,
    [CENTER, JUSTIFY, LEFT, RIGHT]
  );
}

defineClass(28, 4, $intern_5);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign",
  28,
  values_0
);
function Style$TextAlign$1() {
  Style$TextAlign.call(this, "CENTER", 0);
}

defineClass(184, 28, $intern_5, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/1",
  184,
  null
);
function Style$TextAlign$2() {
  Style$TextAlign.call(this, "JUSTIFY", 1);
}

defineClass(185, 28, $intern_5, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/2",
  185,
  null
);
function Style$TextAlign$3() {
  Style$TextAlign.call(this, "LEFT", 2);
}

defineClass(186, 28, $intern_5, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/3",
  186,
  null
);
function Style$TextAlign$4() {
  Style$TextAlign.call(this, "RIGHT", 3);
}

defineClass(187, 28, $intern_5, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/TextAlign/4",
  187,
  null
);
function $clinit_Style$Unit() {
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1();
  PCT = new Style$Unit$2();
  EM = new Style$Unit$3();
  EX = new Style$Unit$4();
  PT = new Style$Unit$5();
  PC = new Style$Unit$6();
  IN = new Style$Unit$7();
  CM = new Style$Unit$8();
  MM = new Style$Unit$9();
}

function Style$Unit(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1() {
  $clinit_Style$Unit();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_dom_client_Style$Unit_2_classLit,
      1
    ),
    $intern_3,
    23,
    0,
    [PX, PCT, EM, EX, PT, PC, IN, CM, MM]
  );
}

defineClass(23, 4, $intern_6);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit",
  23,
  values_1
);
function Style$Unit$1() {
  Style$Unit.call(this, "PX", 0);
}

defineClass(158, 23, $intern_6, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/1",
  158,
  null
);
function Style$Unit$2() {
  Style$Unit.call(this, "PCT", 1);
}

defineClass(159, 23, $intern_6, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/2",
  159,
  null
);
function Style$Unit$3() {
  Style$Unit.call(this, "EM", 2);
}

defineClass(160, 23, $intern_6, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/3",
  160,
  null
);
function Style$Unit$4() {
  Style$Unit.call(this, "EX", 3);
}

defineClass(161, 23, $intern_6, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/4",
  161,
  null
);
function Style$Unit$5() {
  Style$Unit.call(this, "PT", 4);
}

defineClass(162, 23, $intern_6, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/5",
  162,
  null
);
function Style$Unit$6() {
  Style$Unit.call(this, "PC", 5);
}

defineClass(163, 23, $intern_6, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/6",
  163,
  null
);
function Style$Unit$7() {
  Style$Unit.call(this, "IN", 6);
}

defineClass(164, 23, $intern_6, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/7",
  164,
  null
);
function Style$Unit$8() {
  Style$Unit.call(this, "CM", 7);
}

defineClass(165, 23, $intern_6, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/8",
  165,
  null
);
function Style$Unit$9() {
  Style$Unit.call(this, "MM", 8);
}

defineClass(166, 23, $intern_6, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(
  "com.google.gwt.dom.client",
  "Style/Unit/9",
  166,
  null
);
defineClass(269, 1, {});
_.toString$ = function toString_3() {
  return "An event type";
};
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "Event",
  269
);
function $overrideSource(this$static, source) {
  this$static.source = source;
}

defineClass(270, 269, {});
_.revive = function revive() {
  this.dead = false;
  this.source = null;
};
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "GwtEvent",
  270
);
function $setNativeEvent(this$static, nativeEvent) {
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem) {
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem) {
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 29);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext(); ) {
        type_0 = dynamicCast(type$iterator.next(), 32);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(274, 270, {});
_.getAssociatedType = function getAssociatedType() {
  return this.getAssociatedType_0();
};
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "DomEvent",
  274
);
defineClass(275, 274, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "HumanInputEvent",
  275
);
function $getX(this$static) {
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return (
      (e = this$static.nativeEvent),
      ($eventGetSubPixelClientX(e) | 0) -
        $getAbsoluteLeft(relativeElem) +
        $getScrollLeft_0(relativeElem) +
        $getScrollLeft(relativeElem.ownerDocument)
    );
  }
  return $eventGetSubPixelClientX(this$static.nativeEvent) | 0;
}

function $getY(this$static) {
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return (
      (e = this$static.nativeEvent),
      ($eventGetSubPixelClientY(e) | 0) -
        $getAbsoluteTop(relativeElem) +
        ((relativeElem.scrollTop || 0) | 0) +
        $getScrollTop(relativeElem.ownerDocument)
    );
  }
  return $eventGetSubPixelClientY(this$static.nativeEvent) | 0;
}

defineClass(276, 275, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseEvent",
  276
);
function $clinit_ClickEvent() {
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type("click", new ClickEvent());
}

function ClickEvent() {}

defineClass(189, 276, {}, ClickEvent);
_.dispatch = function dispatch(handler) {
  dynamicCast(handler, 247).onClick(this);
};
_.getAssociatedType_0 = function getAssociatedType_0() {
  return TYPE;
};
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "ClickEvent",
  189
);
defineClass(130, 1, {});
_.hashCode$ = function hashCode_2() {
  return this.index_0;
};
_.toString$ = function toString_4() {
  return "Event type";
};
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "Event/Type",
  130
);
function GwtEvent$Type() {
  this.index_0 = ++nextHashCode;
}

defineClass(44, 130, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "GwtEvent/Type",
  44
);
function DomEvent$Type(eventName, flyweight) {
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap());
  types = dynamicCast($unsafeGet(registered, eventName), 29);
  if (!types) {
    types = new ArrayList();
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(32, 44, { 32: 1 }, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "DomEvent/Type",
  32
);
defineClass(277, 274, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "KeyEvent",
  277
);
defineClass(278, 277, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "KeyCodeEvent",
  278
);
function $clinit_KeyUpEvent() {
  $clinit_KeyUpEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type("keyup", new KeyUpEvent());
}

function $dispatch(this$static, handler) {
  $eventGetKeyCode(this$static.nativeEvent) == 13 && $sendNameToServer(handler);
}

function KeyUpEvent() {}

defineClass(190, 278, {}, KeyUpEvent);
_.dispatch = function dispatch_0(handler) {
  $dispatch(this, dynamicCast(handler, 282));
};
_.getAssociatedType_0 = function getAssociatedType_1() {
  return TYPE_0;
};
var TYPE_0;
var Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "KeyUpEvent",
  190
);
function $clinit_MouseDownEvent() {
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type("mousedown", new MouseDownEvent());
}

function $dispatch_0(this$static, handler) {
  $beginDragging(handler.this$01, this$static);
}

function MouseDownEvent() {}

defineClass(207, 276, {}, MouseDownEvent);
_.dispatch = function dispatch_1(handler) {
  $dispatch_0(this, dynamicCast(handler, 285));
};
_.getAssociatedType_0 = function getAssociatedType_2() {
  return TYPE_1;
};
var TYPE_1;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseDownEvent",
  207
);
function $clinit_MouseMoveEvent() {
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type("mousemove", new MouseMoveEvent());
}

function $dispatch_1(this$static, handler) {
  $continueDragging(handler.this$01, this$static);
}

function MouseMoveEvent() {}

defineClass(209, 276, {}, MouseMoveEvent);
_.dispatch = function dispatch_2(handler) {
  $dispatch_1(this, dynamicCast(handler, 289));
};
_.getAssociatedType_0 = function getAssociatedType_3() {
  return TYPE_2;
};
var TYPE_2;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseMoveEvent",
  209
);
function $clinit_MouseOutEvent() {
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type("mouseout", new MouseOutEvent());
}

function MouseOutEvent() {}

defineClass(211, 276, {}, MouseOutEvent);
_.dispatch = function dispatch_3(handler) {
  dynamicCast(handler, 287);
};
_.getAssociatedType_0 = function getAssociatedType_4() {
  return TYPE_3;
};
var TYPE_3;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseOutEvent",
  211
);
function $clinit_MouseOverEvent() {
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type("mouseover", new MouseOverEvent());
}

function MouseOverEvent() {}

defineClass(210, 276, {}, MouseOverEvent);
_.dispatch = function dispatch_4(handler) {
  dynamicCast(handler, 288);
};
_.getAssociatedType_0 = function getAssociatedType_5() {
  return TYPE_4;
};
var TYPE_4;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseOverEvent",
  210
);
function $clinit_MouseUpEvent() {
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type("mouseup", new MouseUpEvent());
}

function $dispatch_2(this$static, handler) {
  $endDragging(handler.this$01, this$static);
}

function MouseUpEvent() {}

defineClass(208, 276, {}, MouseUpEvent);
_.dispatch = function dispatch_5(handler) {
  $dispatch_2(this, dynamicCast(handler, 286));
};
_.getAssociatedType_0 = function getAssociatedType_6() {
  return TYPE_5;
};
var TYPE_5;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "MouseUpEvent",
  208
);
function $unsafeGet(this$static, key) {
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0) {
  this$static.map_0[key] = value_0;
}

function PrivateMap() {
  this.map_0 = {};
}

defineClass(205, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(
  "com.google.gwt.event.dom.client",
  "PrivateMap",
  205
);
function CloseEvent_0() {}

function fire_0(source) {
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0();
    source.fireEvent(event_0);
  }
}

defineClass(204, 270, {}, CloseEvent_0);
_.dispatch = function dispatch_6(handler) {
  dynamicCast(handler, 290);
  detachWidgets();
};
_.getAssociatedType = function getAssociatedType_7() {
  return TYPE_6;
};
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(
  "com.google.gwt.event.logical.shared",
  "CloseEvent",
  204
);
function ResizeEvent(width_0) {
  this.width_0 = width_0;
}

function fire_1(source, width_0) {
  var event_0;
  if (TYPE_7) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent(source, event_0);
  }
}

defineClass(215, 270, {}, ResizeEvent);
_.dispatch = function dispatch_7(handler) {
  dynamicCast(handler, 248).onResize(this);
};
_.getAssociatedType = function getAssociatedType_8() {
  return TYPE_7;
};
_.width_0 = 0;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass(
  "com.google.gwt.event.logical.shared",
  "ResizeEvent",
  215
);
function $dispatch_3(handler) {
  handler.this$01.autoHideOnHistoryEvents && handler.this$01.hide(false);
}

function ValueChangeEvent() {}

function fire_2(source) {
  var event_0;
  if (TYPE_8) {
    event_0 = new ValueChangeEvent();
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(216, 270, {}, ValueChangeEvent);
_.dispatch = function dispatch_8(handler) {
  $dispatch_3(dynamicCast(handler, 284));
};
_.getAssociatedType = function getAssociatedType_9() {
  return TYPE_8;
};
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass(
  "com.google.gwt.event.logical.shared",
  "ValueChangeEvent",
  216
);
function $addHandler(this$static, type_0, handler) {
  return new LegacyHandlerWrapper(
    $doAdd(this$static.eventBus, type_0, handler)
  );
}

function $fireEvent(this$static, event_0) {
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 45)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    } else throw unwrap($e0);
  } finally {
    oldSource == null
      ? ((event_0.dead = true), (event_0.source = null))
      : (event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e) {
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source) {
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder) {
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(52, 1, { 16: 1 }, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent(event_0) {
  $fireEvent(this, event_0);
};
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "HandlerManager",
  52
);
defineClass(273, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "EventBus",
  273
);
function $defer(this$static, command) {
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList());
  $add_3(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler) {
  if (!type_0) {
    throw new NullPointerException_0("Cannot add a handler with a null type");
  }
  if (!handler) {
    throw new NullPointerException_0("Cannot add a null handler");
  }
  this$static.firingDepth > 0
    ? $defer(this$static, new SimpleEventBus$2(this$static, type_0, handler))
    : $doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler) {
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0) {
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0("Cannot fire null event");
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder
      ? handlers.listIterator_0(handlers.size_1())
      : handlers.listIterator();
    while (this$static.isReverseOrder ? it.hasPrevious() : it.hasNext()) {
      handler = this$static.isReverseOrder ? it.previous() : it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 41));
      } catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 6)) {
          e = $e0;
          !causes && (causes = new HashSet());
          $add_4(causes, e);
        } else throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  } finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler) {
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed &&
    l.isEmpty() &&
    ((sourceMap = dynamicCast($get(this$static.map_0, type_0), 34)),
    dynamicCast(sourceMap.remove_2(source), 29),
    sourceMap.isEmpty() && $remove_4(this$static.map_0, type_0),
    undefined);
}

function $ensureHandlerList(this$static, type_0, source) {
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map_0, type_0), 34);
  if (!sourceMap) {
    sourceMap = new HashMap();
    $put(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_0(source), 29);
  if (!handlers) {
    handlers = new ArrayList();
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0) {
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source) {
  var handlers, sourceMap;
  sourceMap = dynamicCast($get(this$static.map_0, type_0), 34);
  if (!sourceMap) {
    return $clinit_Collections(), $clinit_Collections(), EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_0(source), 29);
  if (!handlers) {
    return $clinit_Collections(), $clinit_Collections(), EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static) {
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (
        c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas);
        c$iterator.i < c$iterator.this$01_0.size_1();

      ) {
        c =
          (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()),
          dynamicCast(
            c$iterator.this$01_0.get_1((c$iterator.last = c$iterator.i++)),
            249
          ));
        c.execute_1();
      }
    } finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey) {
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(153, 273, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "SimpleEventBus",
  153
);
function $doRemove(this$static, type_0, source, handler) {
  this$static.firingDepth > 0
    ? $defer(
        this$static,
        new SimpleEventBus$3(this$static, type_0, source, handler)
      )
    : $doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder) {
  this.map_0 = new HashMap();
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(154, 153, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "HandlerManager/Bus",
  154
);
function LegacyHandlerWrapper(real) {
  this.real = real;
}

defineClass(206, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "LegacyHandlerWrapper",
  206
);
function UmbrellaException(causes) {
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes) {
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 6);
}

function makeMessage(causes) {
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(
    count == 1 ? "Exception caught: " : count + " exceptions caught: "
  );
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext(); ) {
    t = dynamicCast(t$iterator.next(), 6);
    first ? (first = false) : ((b.string += "; "), b);
    $append_2(b, t.getMessage());
  }
  return b.string;
}

defineClass(45, 13, $intern_7, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "UmbrellaException",
  45
);
function UmbrellaException_0(causes) {
  UmbrellaException.call(this, causes);
}

defineClass(88, 45, $intern_7, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(
  "com.google.gwt.event.shared",
  "UmbrellaException",
  88
);
function $cancel_1(this$static) {
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback) {
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static) {
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(
    this$static.callback,
    new RequestTimeoutException(this$static.timeoutMillis)
  );
}

function Request(xmlHttpRequest, timeoutMillis, callback) {
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException();
  }
  if (!callback) {
    throw new NullPointerException();
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException();
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(233, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Request",
  233
);
function Request$1(this$0) {
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(235, 69, {}, Request$1);
_.run = function run_0() {
  $fireOnTimeout(this.this$01);
};
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Request/1",
  235
);
function $clinit_RequestBuilder() {
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method("DELETE");
  new RequestBuilder$Method("GET");
  new RequestBuilder$Method("HEAD");
  POST = new RequestBuilder$Method("POST");
  new RequestBuilder$Method("PUT");
}

function $doSend(this$static, requestData, callback) {
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest();
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 26)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(
        this$static.url_0
      );
      $initCause(
        requestPermissionException,
        new RequestException(e.getMessage())
      );
      throw requestPermissionException;
    } else throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials &&
    ((xmlHttpRequest.withCredentials = true), undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(
    xmlHttpRequest,
    new RequestBuilder$1(request, callback)
  );
  try {
    xmlHttpRequest.send(requestData);
  } catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 26)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    } else throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0) {
  throwIfEmptyOrNull("header", header);
  throwIfEmptyOrNull("value", value_0);
  !this$static.headers && (this$static.headers = new HashMap());
  $putStringValue(this$static.headers, header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest) {
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (
      header$iterator = new AbstractHashMap$EntrySetIterator(
        new AbstractHashMap$EntrySet(this$static.headers).this$01
      );
      $hasNext(header$iterator);

    ) {
      header =
        (checkStructuralChange(header$iterator.this$01, header$iterator),
        checkCriticalElement($hasNext(header$iterator)),
        (header$iterator.last = header$iterator.current),
        dynamicCast(header$iterator.current.next(), 24));
      try {
        $setRequestHeader(
          xmlHttpRequest,
          dynamicCastToString(header.getKey()),
          dynamicCastToString(header.getValue())
        );
      } catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 26)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        } else throw unwrap($e0);
      }
    }
  } else {
    $setRequestHeader(
      xmlHttpRequest,
      "Content-Type",
      "text/plain; charset=utf-8"
    );
  }
}

function RequestBuilder(httpMethod, url_0) {
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod ? null : httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0) {
  throwIfEmptyOrNull("httpMethod", httpMethod);
  throwIfEmptyOrNull("url", url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(96, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestBuilder",
  96
);
function RequestBuilder$1(val$request, val$callback) {
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(238, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr) {
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
};
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestBuilder/1",
  238
);
function RequestBuilder$Method(name_0) {
  this.name_0 = name_0;
}

defineClass(53, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5() {
  return this.name_0;
};
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestBuilder/Method",
  53
);
function RequestException(message) {
  Exception.call(this, message);
}

defineClass(33, 9, $intern_8, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestException",
  33
);
function RequestPermissionException(url_0) {
  RequestException.call(
    this,
    "The URL " +
      url_0 +
      " is invalid or violates the same-origin security restriction"
  );
}

defineClass(240, 33, $intern_8, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestPermissionException",
  240
);
function RequestTimeoutException(timeoutMillis) {
  RequestException.call(
    this,
    "A request timeout has expired after " + timeoutMillis + " ms"
  );
}

defineClass(243, 33, $intern_8, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "RequestTimeoutException",
  243
);
defineClass(281, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "Response",
  281
);
function ResponseImpl(xmlHttpRequest) {
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(234, 281, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass(
  "com.google.gwt.http.client",
  "ResponseImpl",
  234
);
function throwIfEmptyOrNull(name_0, value_0) {
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + " cannot be empty");
  }
}

function throwIfNull(name_0, value_0) {
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + " cannot be null");
  }
}

function getDirectionOnElement(elem) {
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, "dir");
  if ($equalsIgnoreCase("rtl", dirPropertyValue)) {
    return $clinit_HasDirection$Direction(), RTL;
  } else if ($equalsIgnoreCase("ltr", dirPropertyValue)) {
    return $clinit_HasDirection$Direction(), LTR;
  }
  return $clinit_HasDirection$Direction(), DEFAULT;
}

function setDirectionOnElement(elem, direction) {
  switch (direction.ordinal) {
    case 0: {
      $setPropertyString(elem, "dir", "rtl");
      break;
    }

    case 1: {
      $setPropertyString(elem, "dir", "ltr");
      break;
    }

    case 2: {
      getDirectionOnElement(elem) !=
        ($clinit_HasDirection$Direction(), DEFAULT) &&
        $setPropertyString(elem, "dir", "");
      break;
    }
  }
}

function $clinit_HasDirection$Direction() {
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction("RTL", 0);
  LTR = new HasDirection$Direction("LTR", 1);
  DEFAULT = new HasDirection$Direction("DEFAULT", 2);
}

function HasDirection$Direction(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2() {
  $clinit_HasDirection$Direction();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit,
      1
    ),
    $intern_3,
    49,
    0,
    [RTL, LTR, DEFAULT]
  );
}

defineClass(49, 4, { 49: 1, 3: 1, 5: 1, 4: 1 }, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum(
  "com.google.gwt.i18n.client",
  "HasDirection/Direction",
  49,
  values_2
);
function getClassLiteralForArray(clazz, dimensions) {
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(
  leafClassLiteral,
  castableTypeMap,
  elementTypeId,
  length_0,
  elementTypeCategory,
  dimensions
) {
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(
    getClassLiteralForArray(leafClassLiteral, dimensions),
    castableTypeMap,
    elementTypeId,
    elementTypeCategory,
    result
  );
  return result;
}

function initDims(
  leafClassLiteral,
  castableTypeMapExprs,
  elementTypeIds,
  leafElementTypeCategory,
  dimExprs,
  count
) {
  return initDims_0(
    leafClassLiteral,
    castableTypeMapExprs,
    elementTypeIds,
    leafElementTypeCategory,
    dimExprs,
    0,
    count
  );
}

function initDims_0(
  leafClassLiteral,
  castableTypeMapExprs,
  elementTypeIds,
  leafElementTypeCategory,
  dimExprs,
  index_0,
  count
) {
  var elementTypeCategory, i, isLastDim, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDim = index_0 == count - 1;
  elementTypeCategory = isLastDim ? leafElementTypeCategory : 0;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(
    getClassLiteralForArray(leafClassLiteral, count - index_0),
    castableTypeMapExprs[index_0],
    elementTypeIds[index_0],
    elementTypeCategory,
    result
  );
  if (!isLastDim) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      result[i] = initDims_0(
        leafClassLiteral,
        castableTypeMapExprs,
        elementTypeIds,
        leafElementTypeCategory,
        dimExprs,
        index_0,
        count
      );
    }
  }
  return result;
}

function initValues(
  arrayClass,
  castableTypeMap,
  elementTypeId,
  elementTypeCategory,
  array
) {
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0) {
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = { l: 0, m: 0, h: 0 };
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:
      return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0) {
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException();
        }

        break;
      case 0: {
        elementTypeId = array.__elementTypeId$;
        if (!canCast(value_0, elementTypeId)) {
          throw new ArrayStoreException();
        }
        break;
      }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException();
        }

        break;
      case 1: {
        elementTypeId = array.__elementTypeId$;
        if (
          !(!isJavaString(value_0) && !hasTypeMarker(value_0)) &&
          !canCast(value_0, elementTypeId)
        ) {
          throw new ArrayStoreException();
        }
        break;
      }
    }
  }
  return (array[index_0] = value_0);
}

function cacheJavaScriptException(e, jse) {
  if (e && typeof e == "object") {
    try {
      e.__gwt$exception = jse;
    } catch (ignored) {}
  }
}

function unwrap(e) {
  var jse;
  if (instanceOf(e, 26)) {
    jse = dynamicCast(e, 26);
    if (
      maskUndefined(jse.e) !==
      maskUndefined(($clinit_JavaScriptException(), NOT_SET))
    ) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET) ? null : jse.e;
    }
  }
  return e;
}

function wrap(e) {
  var jse;
  if (instanceOf(e, 6)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create(value_0) {
  var a0, a1, a2;
  a0 = value_0 & $intern_9;
  a1 = (value_0 >> 22) & $intern_9;
  a2 = value_0 < 0 ? $intern_10 : 0;
  return create0(a0, a1, a2);
}

function create0(l, m, h) {
  return { l: l, m: m, h: h };
}

function add_1(a, b) {
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return { l: sum0 & $intern_9, m: sum1 & $intern_9, h: sum2 & $intern_10 };
}

function and(a, b) {
  return { l: a.l & b.l, m: a.m & b.m, h: a.h & b.h };
}

function eq(a, b) {
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromInt(value_0) {
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null &&
      (boxedValues = initDim(
        Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit,
        $intern_3,
        293,
        256,
        0,
        1
      ));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create(value_0));
    return result;
  }
  return create(value_0);
}

function gte(a, b) {
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0
    ? signb != 0 ||
        a.h > b.h ||
        (a.h == b.h && a.m > b.m) ||
        (a.h == b.h && a.m == b.m && a.l >= b.l)
    : !(
        signb == 0 ||
        a.h < b.h ||
        (a.h == b.h && a.m < b.m) ||
        (a.h == b.h && a.m == b.m && a.l < b.l)
      );
}

function neq(a, b) {
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b) {
  return { l: a.l | b.l, m: a.m | b.m, h: a.h | b.h };
}

function shl(a, n) {
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = (a.m << n) | (a.l >> (22 - n));
    res2 = (a.h << n) | (a.m >> (22 - n));
  } else if (n < 44) {
    res0 = 0;
    res1 = a.l << (n - 22);
    res2 = (a.m << (n - 22)) | (a.l >> (44 - n));
  } else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << (n - 44);
  }
  return { l: res0 & $intern_9, m: res1 & $intern_9, h: res2 & $intern_10 };
}

function shr(a, n) {
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_11) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = (a.m >> n) | (a2 << (22 - n));
    res0 = (a.l >> n) | (a.m << (22 - n));
  } else if (n < 44) {
    res2 = negative ? $intern_10 : 0;
    res1 = a2 >> (n - 22);
    res0 = (a.m >> (n - 22)) | (a2 << (44 - n));
  } else {
    res2 = negative ? $intern_10 : 0;
    res1 = negative ? $intern_9 : 0;
    res0 = a2 >> (n - 44);
  }
  return { l: res0 & $intern_9, m: res1 & $intern_9, h: res2 & $intern_10 };
}

function sub_0(a, b) {
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return { l: sum0 & $intern_9, m: sum1 & $intern_9, h: sum2 & $intern_10 };
}

function toInt(a) {
  return a.l | (a.m << 22);
}

var boxedValues;
function $clinit_LongLib$Const() {
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_9, $intern_9, 524287);
  MIN_VALUE = create0(0, 0, $intern_11);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o) {
  return o.typeMarker$ === typeMarkerFn;
}

function init() {
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new Org_cubing_min2phase());
}

defineClass(280, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass(
  "com.google.gwt.text.shared",
  "AbstractRenderer",
  280
);
function PassthroughParser() {}

defineClass(203, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass(
  "com.google.gwt.text.shared.testing",
  "PassthroughParser",
  203
);
function PassthroughRenderer() {}

defineClass(202, 280, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass(
  "com.google.gwt.text.shared.testing",
  "PassthroughRenderer",
  202
);
function $clinit_DOM() {
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem) {
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_1(evt, elem, eventListener);
  return true;
}

function dispatchEvent_1(evt, elem, listener) {
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem &&
    $eventGetTypeInt(evt.type) == 8192 &&
    (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt) {
  $clinit_DOM();
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem) {
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  ($clinit_DOMImplStandard(), captureElem) == elem && (captureElem = null);
}

function resolve(maybePotential) {
  $clinit_DOM();
  return maybePotential.__gwt_resolve
    ? maybePotential.__gwt_resolve()
    : maybePotential;
}

function setCapture(elem) {
  $clinit_DOM();
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  $clinit_DOMImplStandard();
  captureElem = elem;
}

var currentEvent = null,
  sCaptureElem;
function $onModuleLoad() {
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(
    getClassLiteralForArray(Ljava_lang_String_2_classLit, 1),
    $intern_3,
    2,
    4,
    ["CSS1Compat"]
  );
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 &&
  $equals("CSS1Compat", allowedModes[0]) &&
  $equals("BackCompat", currentMode)
    ? "GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" +
      currentMode +
      '"/&gt;'
    : "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " +
      currentMode +
      "').<br>Modify your application's host HTML page doctype, or update your custom " +
      "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static) {
  return $clinit_DOM(), $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler) {
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type());
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent();
  }
  return $addHandler(handlers_0, TYPE_9, handler);
}

function getTypeInt(typeName) {
  return $eventGetTypeInt(($clinit_DOM(), typeName));
}

var handlers_0;
function $dispatch_4(this$static, handler) {
  $previewNativeEvent(handler.this$01, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static) {
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent) {
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent() {}

function fire_3(handlers, nativeEvent) {
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

defineClass(129, 270, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_9(handler) {
  $dispatch_4(this, dynamicCast(handler, 283));
};
_.getAssociatedType = function getAssociatedType_10() {
  return TYPE_9;
};
_.revive = function revive_0() {
  $revive(this);
};
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_9, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Event/NativePreviewEvent",
  129
);
function $clinit_History() {
  $clinit_History = emptyMethod;
  new History$HistoryImpl();
  historyEventSource = new History$HistoryEventSource();
  token_0 = getDecodedHash();
}

function addValueChangeHandler(handler) {
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash() {
  var hashToken;
  hashToken = $wnd.location.hash;
  if (hashToken == null || !hashToken.length) {
    return "";
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function onHashChanged() {
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals(hashToken, token_0)) {
    token_0 = hashToken;
    fire_2(historyEventSource);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler) {
  return $addHandler(
    this$static.handlers,
    (!TYPE_8 && (TYPE_8 = new GwtEvent$Type()), TYPE_8),
    handler
  );
}

function History$HistoryEventSource() {
  this.handlers = new HandlerManager(null);
}

defineClass(213, 1, { 16: 1 }, History$HistoryEventSource);
_.fireEvent = function fireEvent_0(event_0) {
  $fireEvent(this.handlers, event_0);
};
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "History/HistoryEventSource",
  213
);
function $decodeHistoryToken(historyToken) {
  return $wnd.decodeURI(historyToken.replace("%23", "#"));
}

function History$HistoryImpl() {
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener("hashchange", handler, false);
}

defineClass(214, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "History/HistoryImpl",
  214
);
function addCloseHandler(handler) {
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6 ? TYPE_6 : (TYPE_6 = new GwtEvent$Type()), handler);
}

function addHandler(type_0, handler) {
  return $addHandler(
    (!handlers_1 && (handlers_1 = new Window$WindowHandlers()), handlers_1),
    type_0,
    handler
  );
}

function addResizeHandler(handler) {
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler(
    (!TYPE_7 && (TYPE_7 = new GwtEvent$Type()), TYPE_7),
    handler
  );
}

function maybeInitializeCloseHandlers() {
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers() {
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing() {
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent();
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize() {
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1(
        (!handlers_1 && (handlers_1 = new Window$WindowHandlers()), handlers_1),
        width_0
      );
    }
  }
}

var closeHandlersInitialized = false,
  handlers_1,
  lastResizeHeight = 0,
  lastResizeWidth = 0,
  resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent() {
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type();
}

function Window$ClosingEvent() {
  $clinit_Window$ClosingEvent();
}

defineClass(152, 270, {}, Window$ClosingEvent);
_.dispatch = function dispatch_10(handler) {
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
};
_.getAssociatedType = function getAssociatedType_11() {
  return TYPE_10;
};
var TYPE_10;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Window/ClosingEvent",
  152
);
function Window$WindowHandlers() {
  HandlerManager.call(this, null);
}

defineClass(76, 52, { 16: 1 }, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(
  "com.google.gwt.user.client",
  "Window/WindowHandlers",
  76
);
function $eventGetTypeInt(eventType) {
  switch (eventType) {
    case "blur":
      return 4096;
    case "change":
      return 1024;
    case "click":
      return 1;
    case "dblclick":
      return 2;
    case "focus":
      return 2048;
    case "keydown":
      return 128;
    case "keypress":
      return 256;
    case "keyup":
      return 512;
    case "load":
      return 32768;
    case "losecapture":
      return 8192;
    case "mousedown":
      return 4;
    case "mousemove":
      return 64;
    case "mouseout":
      return 32;
    case "mouseover":
      return 16;
    case "mouseup":
      return 8;
    case "scroll":
      return 16384;
    case "error":
      return $intern_12;
    case "DOMMouseScroll":
    case "mousewheel":
      return 131072;
    case "contextmenu":
      return 262144;
    case "paste":
      return $intern_11;
    case "touchstart":
      return $intern_13;
    case "touchmove":
      return 2097152;
    case "touchend":
      return $intern_14;
    case "touchcancel":
      return 8388608;
    case "gesturestart":
      return $intern_15;
    case "gesturechange":
      return $intern_16;
    case "gestureend":
      return $intern_17;
    default:
      return -1;
  }
}

function $maybeInitializeEventSystem() {
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem) {
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 19)
    ? maybeListener
    : null;
}

function setEventListener(elem, listener) {
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard() {
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {
    _default_: dispatchEvent_3,
    dragenter: dispatchDragEvent,
    dragover: dispatchDragEvent,
  };
  captureEventDispatchers = {
    click: dispatchCapturedMouseEvent,
    dblclick: dispatchCapturedMouseEvent,
    mousedown: dispatchCapturedMouseEvent,
    mouseup: dispatchCapturedMouseEvent,
    mousemove: dispatchCapturedMouseEvent,
    mouseover: dispatchCapturedMouseEvent,
    mouseout: dispatchCapturedMouseEvent,
    mousewheel: dispatchCapturedMouseEvent,
    keydown: dispatchCapturedEvent,
    keyup: dispatchCapturedEvent,
    keypress: dispatchCapturedEvent,
    touchstart: dispatchCapturedMouseEvent,
    touchend: dispatchCapturedMouseEvent,
    touchmove: dispatchCapturedMouseEvent,
    touchcancel: dispatchCapturedMouseEvent,
    gesturestart: dispatchCapturedMouseEvent,
    gestureend: dispatchCapturedMouseEvent,
    gesturechange: dispatchCapturedMouseEvent,
  };
}

function $getChild(elem, index_0) {
  var count = 0,
    child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count) return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $initEventSystem() {
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function (e, fn) {
    bitlessEvents[e] = $entry(fn);
  });
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function (e, fn) {
    captureEvents_0[e] = $entry(fn);
  });
  foreach(captureEvents_0, function (e, fn) {
    $wnd.addEventListener(e, fn, true);
  });
}

function $sinkBitlessEvent(elem, eventTypeName) {
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap["_default_"];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits) {
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits) {
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask) return;
  chMask & 1 && (elem.onclick = bits & 1 ? dispatchEvent_2 : null);
  chMask & 2 && (elem.ondblclick = bits & 2 ? dispatchEvent_2 : null);
  chMask & 4 && (elem.onmousedown = bits & 4 ? dispatchEvent_2 : null);
  chMask & 8 && (elem.onmouseup = bits & 8 ? dispatchEvent_2 : null);
  chMask & 16 && (elem.onmouseover = bits & 16 ? dispatchEvent_2 : null);
  chMask & 32 && (elem.onmouseout = bits & 32 ? dispatchEvent_2 : null);
  chMask & 64 && (elem.onmousemove = bits & 64 ? dispatchEvent_2 : null);
  chMask & 128 && (elem.onkeydown = bits & 128 ? dispatchEvent_2 : null);
  chMask & 256 && (elem.onkeypress = bits & 256 ? dispatchEvent_2 : null);
  chMask & 512 && (elem.onkeyup = bits & 512 ? dispatchEvent_2 : null);
  chMask & 1024 && (elem.onchange = bits & 1024 ? dispatchEvent_2 : null);
  chMask & 2048 && (elem.onfocus = bits & 2048 ? dispatchEvent_2 : null);
  chMask & 4096 && (elem.onblur = bits & 4096 ? dispatchEvent_2 : null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192 ? dispatchEvent_2 : null);
  chMask & 16384 && (elem.onscroll = bits & 16384 ? dispatchEvent_2 : null);
  chMask & 32768 &&
    (elem.onload = bits & 32768 ? dispatchUnhandledEvent : null);
  chMask & $intern_12 &&
    (elem.onerror = bits & $intern_12 ? dispatchEvent_2 : null);
  chMask & 131072 &&
    (elem.onmousewheel = bits & 131072 ? dispatchEvent_2 : null);
  chMask & 262144 &&
    (elem.oncontextmenu = bits & 262144 ? dispatchEvent_2 : null);
  chMask & $intern_11 &&
    (elem.onpaste = bits & $intern_11 ? dispatchEvent_2 : null);
  chMask & $intern_13 &&
    (elem.ontouchstart = bits & $intern_13 ? dispatchEvent_2 : null);
  chMask & 2097152 &&
    (elem.ontouchmove = bits & 2097152 ? dispatchEvent_2 : null);
  chMask & $intern_14 &&
    (elem.ontouchend = bits & $intern_14 ? dispatchEvent_2 : null);
  chMask & 8388608 &&
    (elem.ontouchcancel = bits & 8388608 ? dispatchEvent_2 : null);
  chMask & $intern_15 &&
    (elem.ongesturestart = bits & $intern_15 ? dispatchEvent_2 : null);
  chMask & $intern_16 &&
    (elem.ongesturechange = bits & $intern_16 ? dispatchEvent_2 : null);
  chMask & $intern_17 &&
    (elem.ongestureend = bits & $intern_17 ? dispatchEvent_2 : null);
}

function dispatchCapturedEvent(evt) {
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt) {
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_0(evt, captureElem) && $eventStopPropagation(evt);
}

function dispatchDragEvent(evt) {
  $eventPreventDefault(evt);
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt) {
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(
    evt,
    element.nodeType != 1 ? null : element,
    getEventListener(element)
  );
}

function dispatchUnhandledEvent_0(evt) {
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, "__gwtLastUnhandledEvent", evt.type);
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt) {
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers,
  captureElem,
  captureEventDispatchers,
  dispatchEvent_2,
  dispatchUnhandledEvent;
function foreach_0(map_0, fn) {
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler() {
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function (evt) {
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    } finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  };
  $wnd.onunload = $entry(function (evt) {
    try {
      closeHandlersInitialized &&
        fire_0(
          (!handlers_1 && (handlers_1 = new Window$WindowHandlers()),
          handlers_1)
        );
    } finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  });
}

function $initWindowResizeHandler() {
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function (evt) {
    try {
      onResize();
    } finally {
      oldOnResize && oldOnResize(evt);
    }
  });
}

function IncompatibleRemoteServiceException() {
  RuntimeException_0.call(
    this,
    "This application is out of date, please click the refresh button on your browser."
  );
}

function IncompatibleRemoteServiceException_0(msg) {
  RuntimeException_0.call(
    this,
    "This application is out of date, please click the refresh button on your browser. ( " +
      msg +
      " )"
  );
}

function IncompatibleRemoteServiceException_1(cause) {
  RuntimeException_1.call(
    this,
    "The response could not be deserialized",
    cause
  );
}

defineClass(
  60,
  13,
  $intern_2,
  IncompatibleRemoteServiceException,
  IncompatibleRemoteServiceException_0,
  IncompatibleRemoteServiceException_1
);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "IncompatibleRemoteServiceException",
  60
);
function deserialize(streamReader, instance) {
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate(streamReader) {
  return new IncompatibleRemoteServiceException();
}

function serialize(streamWriter, instance) {
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s) {
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause) {
  RuntimeException_1.call(this, s, cause);
}

defineClass(48, 13, $intern_2, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "InvocationException",
  48
);
function $create(this$static, serviceEntryPoint) {
  this$static.builder = new RequestBuilder(
    ($clinit_RequestBuilder(), POST),
    serviceEntryPoint
  );
  return this$static;
}

function $doFinish(rb) {
  $setHeader(rb, "X-GWT-Permutation", $strongName);
  $setHeader(rb, "X-GWT-Module-Base", getModuleBaseURL());
}

function $doSetCallback(rb, callback) {
  throwIfNull("callback", callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0) {
  rb.requestData = data_0;
}

function $finish(this$static) {
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  } finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback) {
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static) {
  $setHeader(
    this$static.builder,
    "Content-Type",
    "text/x-gwt-rpc; charset=utf-8"
  );
  return this$static;
}

function $setRequestData(this$static, data_0) {
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder() {}

defineClass(239, 1, {}, RpcRequestBuilder);
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "RpcRequestBuilder",
  239
);
function RpcTokenException() {
  RuntimeException_0.call(this, "Invalid RPC token");
}

defineClass(148, 13, $intern_2, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "RpcTokenException",
  148
);
function deserialize_0(streamReader, instance) {
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader) {
  return new RpcTokenException();
}

function SerializationException(msg) {
  Exception.call(this, msg);
}

defineClass(61, 9, { 61: 1, 3: 1, 9: 1, 6: 1 }, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "SerializationException",
  61
);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException() {
  InvocationException.call(this, "Service implementation URL not specified");
}

defineClass(
  111,
  48,
  $intern_2,
  ServiceDefTarget$NoServiceEntryPointSpecifiedException
);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "ServiceDefTarget/NoServiceEntryPointSpecifiedException",
  111
);
function StatusCodeException(statusCode, statusText, encodedResponse) {
  InvocationException.call(
    this,
    statusCode + " " + statusText + " " + encodedResponse
  );
}

defineClass(242, 48, $intern_2, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc",
  "StatusCodeException",
  242
);
function serialize_0(streamWriter, instance) {
  $writeString(streamWriter, instance.nullField);
}

function deserialize_1(streamReader, instance) {
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_1(streamReader) {
  return new IllegalArgumentException();
}

function deserialize_2(streamReader, instance) {
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_2(streamReader) {
  return new NumberFormatException();
}

function deserialize_3(streamReader, instance) {}

function instantiate_3(streamReader) {
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_1(streamWriter, instance) {
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0) {
  instance.detailMessage = value_0;
}

function $setFlags(this$static, flags) {
  this$static.flags = flags;
}

function $setVersion(this$static, version) {
  this$static.version = version;
}

defineClass(95, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "AbstractSerializationStream",
  95
);
function $readObject(this$static) {
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_0(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return (
    (id_0 =
      ($add_3(this$static.seenArray, null),
      this$static.seenArray.array.length)),
    (instance = $instantiate(
      this$static.serializer,
      this$static,
      typeSignature
    )),
    $set(this$static.seenArray, id_0 - 1, instance),
    $deserialize(this$static.serializer, this$static, instance, typeSignature),
    instance
  );
}

defineClass(244, 95, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "AbstractSerializationStreamReader",
  244
);
function $addString(this$static, string) {
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast($getStringValue(this$static.stringMap, string), 40);
  if (o) {
    return o.value_0;
  }
  $add_3(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  $putStringValue(this$static.stringMap, string, valueOf(index_0));
  return index_0;
}

function $writeInt(this$static, fieldValue) {
  append(this$static.encodeBuffer, "" + fieldValue);
}

function $writeString(this$static, value_0) {
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(236, 95, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "AbstractSerializationStreamWriter",
  236
);
function $getString(this$static, index_0) {
  return index_0 > 0 ? this$static.stringTable[index_0 - 1] : null;
}

function $prepareToRead(this$static, encoded) {
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(
    Ljava_lang_Object_2_classLit,
    $intern_3,
    1,
    0,
    3,
    1
  );
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0(
      "Expecting version 7 from server, got " + this$static.version + "."
    );
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0(
      "Got an unknown flag from server: " + this$static.flags
    );
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readInt(this$static) {
  return this$static.results[--this$static.index_0];
}

function ClientSerializationStreamReader(serializer) {
  this.seenArray = new ArrayList();
  this.serializer = serializer;
}

defineClass(245, 244, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "ClientSerializationStreamReader",
  245
);
function $clinit_ClientSerializationStreamWriter() {
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $toString(this$static) {
  var buffer;
  buffer = new StringBuilder();
  append(buffer, "" + this$static.version);
  append(buffer, "" + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_2(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer) {
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, "" + stringTable.array.length);
  for (
    s$iterator = new AbstractList$IteratorImpl(stringTable);
    s$iterator.i < s$iterator.this$01_0.size_1();

  ) {
    s =
      (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()),
      dynamicCastToString(
        s$iterator.this$01_0.get_1((s$iterator.last = s$iterator.i++))
      ));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(
  moduleBaseURL,
  serializationPolicyStrongName
) {
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap();
  this.stringMap = new HashMap();
  this.stringTable = new ArrayList();
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token) {
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += "|";
}

function getQuotingRegex() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("android") != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  } else if (ua.indexOf("chrome/11") != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  } else if (ua.indexOf("webkit") != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  } else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str) {
  var regex = regex_0;
  var idx = 0;
  var out = "";
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += "\\0";
    } else if (ch_0 == 92) {
      out += "\\\\";
    } else if (ch_0 == 124) {
      out += "\\!";
    } else {
      var hex = ch_0.toString(16);
      out += "\\u0000".substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(237, 236, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_6() {
  return $toString(this);
};
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "ClientSerializationStreamWriter",
  237
);
function $createStreamReader(this$static, encoded) {
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(
    this$static.serializer
  );
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(
  this$static,
  methodName,
  statsContext,
  requestData,
  callback
) {
  var ex, rb;
  rb = $doPrepareRequestBuilderImpl(
    this$static,
    methodName,
    statsContext,
    requestData,
    callback
  );
  try {
    return (
      throwIfNull("callback", rb.callback),
      $doSend(rb, rb.requestData, rb.callback)
    );
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 33)) {
      ex = $e0;
      new InvocationException_0(
        "Unable to initiate the asynchronous service invocation (" +
          methodName +
          ") -- check the network connection",
        ex
      );
      $onFailure(callback);
    } else throw unwrap($e0);
  } finally {
    $isStatsAvailable() &&
      $stats_0(
        $bytesStat(statsContext, methodName, requestData.length, "requestSent")
      );
  }
  return null;
}

function $doPrepareRequestBuilderImpl(
  this$static,
  methodName,
  statsContext,
  requestData,
  callback
) {
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException();
  }
  responseHandler = new RequestCallbackAdapter(
    this$static,
    methodName,
    statsContext,
    callback
  );
  !this$static.rpcRequestBuilder &&
    (this$static.rpcRequestBuilder = new RpcRequestBuilder());
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish(this$static.rpcRequestBuilder);
}

function RemoteServiceProxy(moduleBaseURL, serializer) {
  this.moduleBaseURL = moduleBaseURL;
  this.remoteServiceURL = moduleBaseURL + "greet";
  this.serializer = serializer;
  this.serializationPolicyName = "9DEBAA5003B8A664B236D06A79BF00E6";
}

function getEncodedInstance(encodedResponse) {
  if (
    $equals(encodedResponse.substr(0, 4), "//OK") ||
    $equals(encodedResponse.substr(0, 4), "//EX")
  ) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(108, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "RemoteServiceProxy",
  108
);
function $finish_0(this$static, callback) {
  var payload;
  payload = $toString(this$static.streamWriter);
  $isStatsAvailable() &&
    $stats_0(
      $timeStat(
        this$static.statsContext,
        this$static.fullServiceName,
        "requestSerialized"
      )
    );
  return $doInvoke(
    this$static.this$01,
    this$static.fullServiceName,
    this$static.statsContext,
    payload,
    callback
  );
}

function RemoteServiceProxy$ServiceHelper(this$0) {
  this.this$01 = this$0;
  this.fullServiceName = "GreetingService_Proxy.greetServer";
  this.methodName = "greetServer";
  this.statsContext = new RpcStatsContext();
}

defineClass(110, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "RemoteServiceProxy/ServiceHelper",
  110
);
function $onError(this$static) {
  $onFailure(this$static.callback);
}

function $onResponseReceived(this$static, response) {
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    $isStatsAvailable() &&
      $stats_0(
        $bytesStat(
          this$static.statsContext,
          this$static.methodName,
          encodedResponse.length,
          "responseReceived"
        )
      );
    statusCode != 200
      ? (caught = new StatusCodeException(
          statusCode,
          response.xmlHttpRequest.statusText,
          encodedResponse
        ))
      : encodedResponse == null
      ? (caught = new InvocationException(
          "No response payload from " + this$static.methodName
        ))
      : $equals(encodedResponse.substr(0, 4), "//OK")
      ? (result = $read(
          $createStreamReader(this$static.streamFactory, encodedResponse)
        ))
      : $equals(encodedResponse.substr(0, 4), "//EX")
      ? (caught = dynamicCast(
          $readObject(
            $createStreamReader(this$static.streamFactory, encodedResponse)
          ),
          6
        ))
      : (caught = new InvocationException(
          encodedResponse + " from " + this$static.methodName
        ));
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 61)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    } else if (instanceOf($e0, 6)) {
      e = $e0;
      caught = e;
    } else throw unwrap($e0);
  } finally {
    $isStatsAvailable() &&
      $stats_0(
        $timeStat(
          this$static.statsContext,
          this$static.methodName,
          "responseDeserialized"
        )
      );
  }
  try {
    !caught
      ? $onSuccess(this$static.callback, result)
      : $onFailure(this$static.callback);
  } finally {
    $isStatsAvailable() &&
      $stats_0(
        $timeStat(this$static.statsContext, this$static.methodName, "end")
      );
  }
}

function RequestCallbackAdapter(
  streamFactory,
  methodName,
  statsContext,
  callback
) {
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
}

defineClass(221, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter",
  221
);
function $clinit_RequestCallbackAdapter$ResponseReader() {
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1();
  BYTE = new RequestCallbackAdapter$ResponseReader$2();
  CHAR = new RequestCallbackAdapter$ResponseReader$3();
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4();
  FLOAT = new RequestCallbackAdapter$ResponseReader$5();
  INT = new RequestCallbackAdapter$ResponseReader$6();
  LONG = new RequestCallbackAdapter$ResponseReader$7();
  OBJECT = new RequestCallbackAdapter$ResponseReader$8();
  SHORT = new RequestCallbackAdapter$ResponseReader$9();
  STRING = new RequestCallbackAdapter$ResponseReader$10();
  VOID = new RequestCallbackAdapter$ResponseReader$11();
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3() {
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit,
      1
    ),
    $intern_3,
    15,
    0,
    [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]
  );
}

defineClass(15, 4, $intern_18);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader",
  15,
  values_3
);
function RequestCallbackAdapter$ResponseReader$1() {
  RequestCallbackAdapter$ResponseReader.call(this, "BOOLEAN", 0);
}

defineClass(222, 15, $intern_18, RequestCallbackAdapter$ResponseReader$1);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/1",
  222,
  null
);
function $read(streamReader) {
  return $getString(streamReader, $readInt(streamReader));
}

function RequestCallbackAdapter$ResponseReader$10() {
  RequestCallbackAdapter$ResponseReader.call(this, "STRING", 9);
}

defineClass(231, 15, $intern_18, RequestCallbackAdapter$ResponseReader$10);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/10",
  231,
  null
);
function RequestCallbackAdapter$ResponseReader$11() {
  RequestCallbackAdapter$ResponseReader.call(this, "VOID", 10);
}

defineClass(232, 15, $intern_18, RequestCallbackAdapter$ResponseReader$11);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/11",
  232,
  null
);
function RequestCallbackAdapter$ResponseReader$2() {
  RequestCallbackAdapter$ResponseReader.call(this, "BYTE", 1);
}

defineClass(223, 15, $intern_18, RequestCallbackAdapter$ResponseReader$2);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/2",
  223,
  null
);
function RequestCallbackAdapter$ResponseReader$3() {
  RequestCallbackAdapter$ResponseReader.call(this, "CHAR", 2);
}

defineClass(224, 15, $intern_18, RequestCallbackAdapter$ResponseReader$3);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/3",
  224,
  null
);
function RequestCallbackAdapter$ResponseReader$4() {
  RequestCallbackAdapter$ResponseReader.call(this, "DOUBLE", 3);
}

defineClass(225, 15, $intern_18, RequestCallbackAdapter$ResponseReader$4);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/4",
  225,
  null
);
function RequestCallbackAdapter$ResponseReader$5() {
  RequestCallbackAdapter$ResponseReader.call(this, "FLOAT", 4);
}

defineClass(226, 15, $intern_18, RequestCallbackAdapter$ResponseReader$5);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/5",
  226,
  null
);
function RequestCallbackAdapter$ResponseReader$6() {
  RequestCallbackAdapter$ResponseReader.call(this, "INT", 5);
}

defineClass(227, 15, $intern_18, RequestCallbackAdapter$ResponseReader$6);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/6",
  227,
  null
);
function RequestCallbackAdapter$ResponseReader$7() {
  RequestCallbackAdapter$ResponseReader.call(this, "LONG", 6);
}

defineClass(228, 15, $intern_18, RequestCallbackAdapter$ResponseReader$7);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/7",
  228,
  null
);
function RequestCallbackAdapter$ResponseReader$8() {
  RequestCallbackAdapter$ResponseReader.call(this, "OBJECT", 7);
}

defineClass(229, 15, $intern_18, RequestCallbackAdapter$ResponseReader$8);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/8",
  229,
  null
);
function RequestCallbackAdapter$ResponseReader$9() {
  RequestCallbackAdapter$ResponseReader.call(this, "SHORT", 8);
}

defineClass(230, 15, $intern_18, RequestCallbackAdapter$ResponseReader$9);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum(
  "com.google.gwt.user.client.rpc.impl",
  "RequestCallbackAdapter/ResponseReader/9",
  230,
  null
);
function $bytesStat(this$static, method, bytes, eventType) {
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable() {
  return !!$stats;
}

function $stats_0(data_0) {
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType) {
  return {
    moduleName: $moduleName,
    sessionId: $sessionId,
    subSystem: "rpc",
    evtGroup: this$static.requestId,
    method: method,
    millis: new Date().getTime(),
    type: eventType,
  };
}

function RpcStatsContext() {
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId) {
  this.requestId = requestId;
}

defineClass(94, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType) {
  return $timeStat(this, method, eventType);
};
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "RpcStatsContext",
  94
);
function $check(this$static, typeSignature) {
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature) {
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $instantiate(this$static, stream, typeSignature) {
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function SerializerBase(methodMapNative) {
  new HashMap();
  this.methodMapNative = methodMapNative;
}

defineClass(146, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass(
  "com.google.gwt.user.client.rpc.impl",
  "SerializerBase",
  146
);
function $deserialize_0(this$static, stream, instance, signature) {
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature) {
  return this$static[signature][0](stream);
}

function $getElement(this$static) {
  return $clinit_DOM(), this$static.element;
}

function $setElement(this$static, elem) {
  $setElement_0(this$static, ($clinit_DOM(), elem));
}

function $setElement_0(this$static, elem) {
  this$static.element = elem;
}

function $setStyleName(this$static) {
  $setClassName(($clinit_DOM(), this$static.element), "");
}

function $setStyleName_0(this$static, add_0) {
  setStyleName(
    ($clinit_DOM(), this$static.element),
    "serverResponseLabelError",
    add_0
  );
}

function $sinkBitlessEvent_0(this$static, eventTypeName) {
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function setStyleName(elem, style, add_0) {
  if (!elem) {
    throw new RuntimeException_0(
      "Null widget handle. If you are creating a composite, ensure that initWidget() has been called."
    );
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0("Style names cannot be empty");
  }
  add_0 ? $addClassName(elem, style) : $removeClassName(elem, style);
}

function setStylePrimaryName(elem, style) {
  if (!elem) {
    throw new RuntimeException_0(
      "Null widget handle. If you are creating a composite, ensure that initWidget() has been called."
    );
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0("Style names cannot be empty");
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle) {
  var classes = (elem.className || "").split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen &&
      name_0.charAt(oldPrimaryStyleLen) == "-" &&
      name_0.indexOf(oldPrimaryStyle) == 0 &&
      (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(" ");
}

defineClass(14, 1, { 18: 1, 14: 1 });
_.setHeight = function setHeight(height) {
  ($clinit_DOM(), this.element).style["height"] = height;
};
_.setWidth = function setWidth(width_0) {
  ($clinit_DOM(), this.element).style["width"] = width_0;
};
_.toString$ = function toString_7() {
  if (!this.element) {
    return "(null handle)";
  }
  return ($clinit_DOM(), this.element).outerHTML;
};
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "UIObject",
  14
);
function $addDomHandler(this$static, handler, type_0) {
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1
    ? $sinkBitlessEvent_0(this$static, type_0.name_0)
    : this$static.eventsToSink == -1
    ? ($clinit_DOM(),
      $sinkEvents(
        this$static.element,
        typeInt | (this$static.element.__eventBits || 0)
      ))
    : (this$static.eventsToSink |= typeInt);
  return $addHandler(
    !this$static.handlerManager
      ? (this$static.handlerManager = new HandlerManager(this$static))
      : this$static.handlerManager,
    type_0,
    handler
  );
}

function $fireEvent_0(this$static, event_0) {
  !!this$static.handlerManager &&
    $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static) {
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0(
      "Should only call onAttach when the widget is detached from the browser's document"
    );
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 &&
    (this$static.eventsToSink == -1
      ? $sinkEvents(
          this$static.element,
          bitsToAdd | (this$static.element.__eventBits || 0)
        )
      : (this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0) {
  var related;
  switch (($clinit_DOM(), $eventGetTypeInt(event_0.type))) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }
  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static) {
  if (!this$static.attached) {
    throw new IllegalStateException_0(
      "Should only call onDetach when the widget is attached to the browser's document"
    );
  }
  try {
    this$static.onUnload();
  } finally {
    try {
      this$static.doDetachChildren();
    } finally {
      $clinit_DOM();
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static) {
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  } else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  } else if (this$static.parent_0) {
    throw new IllegalStateException_0(
      "This widget's parent does not implement HasWidgets"
    );
  }
}

function $setParent(this$static, parent_0) {
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    } finally {
      this$static.parent_0 = null;
    }
  } else {
    if (oldParent) {
      throw new IllegalStateException_0(
        "Cannot set a new parent without first clearing the old parent"
      );
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(12, 14, $intern_19);
_.doAttachChildren = function doAttachChildren() {};
_.doDetachChildren = function doDetachChildren() {};
_.fireEvent = function fireEvent_1(event_0) {
  $fireEvent_0(this, event_0);
};
_.onAttach = function onAttach() {
  $onAttach(this);
};
_.onBrowserEvent = function onBrowserEvent(event_0) {
  $onBrowserEvent(this, event_0);
};
_.onLoad = function onLoad() {};
_.onUnload = function onUnload() {};
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Widget",
  12
);
function $adopt(this$static, child) {
  $setParent(child, this$static);
}

defineClass(267, 12, $intern_19);
_.doAttachChildren = function doAttachChildren_0() {
  tryCommand(this, ($clinit_AttachDetachException(), attachCommand));
};
_.doDetachChildren = function doDetachChildren_0() {
  tryCommand(this, ($clinit_AttachDetachException(), detachCommand));
};
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Panel",
  267
);
function $add(this$static, child, container) {
  $removeFromParent(child);
  $add_2(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w) {
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  } finally {
    elem = ($clinit_DOM(), w.element);
    $removeChild((null, $getParentElement(elem)), elem);
    $remove_3(this$static.children, w);
  }
  return true;
}

function ComplexPanel() {
  this.children = new WidgetCollection(this);
}

defineClass(87, 267, $intern_19);
_.iterator = function iterator_0() {
  return new WidgetCollection$WidgetIterator(this.children);
};
_.remove = function remove_0(w) {
  return $remove(this, w);
};
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ComplexPanel",
  87
);
function $add_0(this$static, w) {
  $add(this$static, w, ($clinit_DOM(), this$static.element));
}

function $remove_0(this$static, w) {
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM(), w.element));
  return removed;
}

function changeToStaticPositioning(elem) {
  $setPropertyImpl(elem.style, "left", "");
  $setPropertyImpl(elem.style, "top", "");
  $setPropertyImpl(elem.style, "position", "");
}

defineClass(136, 87, $intern_19);
_.remove = function remove_1(w) {
  return $remove_0(this, w);
};
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "AbsolutePanel",
  136
);
function $clinit_AttachDetachException() {
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1();
  detachCommand = new AttachDetachException$2();
}

function AttachDetachException(causes) {
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c) {
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext(); ) {
    w = dynamicCast(w$iterator.next(), 12);
    try {
      c.execute_0(w);
    } catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        !caught && (caught = new HashSet());
        $add_4(caught, e);
      } else throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(133, 88, $intern_7, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "AttachDetachException",
  133
);
function AttachDetachException$1() {}

defineClass(134, 1, {}, AttachDetachException$1);
_.execute_0 = function execute_0(w) {
  w.onAttach();
};
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "AttachDetachException/1",
  134
);
function AttachDetachException$2() {}

defineClass(135, 1, {}, AttachDetachException$2);
_.execute_0 = function execute_1(w) {
  $onDetach(w);
};
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "AttachDetachException/2",
  135
);
function $clinit_FocusWidget() {
  $clinit_FocusWidget = emptyMethod;
  impl = ($clinit_FocusImpl(), $clinit_FocusImpl(), implWidget);
}

function $setEnabled(this$static, enabled) {
  ($clinit_DOM(), this$static.element)["disabled"] = !enabled;
}

function $setFocus(this$static) {
  impl.focus_0(($clinit_DOM(), this$static.element));
}

function FocusWidget(elem) {
  $setElement_0(this, ($clinit_DOM(), elem));
}

defineClass(83, 12, $intern_19);
_.onAttach = function onAttach_0() {
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM(), this.element));
  -1 == tabIndex && ((this.element.tabIndex = 0), undefined);
};
var impl;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "FocusWidget",
  83
);
function ButtonBase(elem) {
  FocusWidget.call(this, elem);
}

defineClass(112, 83, $intern_19);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ButtonBase",
  112
);
function Button(html) {
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(
    this,
    ((e = $doc.createElement("BUTTON")), e.setAttribute("type", "button"), e)
  );
  $setClassName(($clinit_DOM(), this.element), "gwt-Button");
  $setInnerHTML(this.element, html);
}

defineClass(65, 112, $intern_19, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Button",
  65
);
function $setCellHorizontalAlignment(td, align_0) {
  $setPropertyString(($clinit_DOM(), td), "align", align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0) {
  $setCellVerticalAlignment_0(($clinit_DOM(), td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0) {
  $setPropertyImpl(td.style, "verticalAlign", align_0.verticalAlignString);
}

defineClass(131, 87, $intern_19);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "CellPanel",
  131
);
function $remove_1(this$static, w) {
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  } finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM(), w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w) {
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(
      this$static.getContainerElement(),
      resolve($getElement(this$static.widget))
    );
    $setParent(w, this$static);
  }
}

function SimplePanel(elem) {
  $setElement_0(this, ($clinit_DOM(), elem));
}

defineClass(67, 267, $intern_19);
_.getContainerElement = function getContainerElement() {
  return $clinit_DOM(), this.element;
};
_.iterator = function iterator_1() {
  return new SimplePanel$1(this);
};
_.remove = function remove_2(w) {
  return $remove_1(this, w);
};
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "SimplePanel",
  67
);
function $center(this$static) {
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    ($clinit_DOM(), this$static.element).style["visibility"] = "hidden";
    this$static.isAnimationEnabled = false;
    !this$static.resizeHandlerRegistration &&
      (this$static.resizeHandlerRegistration = addResizeHandler(
        new DialogBox$1(this$static)
      ));
    $show(this$static);
  }
  elem = ($clinit_DOM(), this$static.element);
  $setPropertyImpl(elem.style, "left", ($clinit_Style$Unit(), "0.0px"));
  $setPropertyImpl(elem.style, "top", "0.0px");
  left =
    ($getClientWidth($doc) -
      $getPropertyInt(this$static.element, "offsetWidth")) >>
    1;
  top_0 =
    ($getClientHeight($doc) -
      $getPropertyInt(this$static.element, "offsetHeight")) >>
    1;
  $setPopupPosition(
    this$static,
    max_0($getScrollLeft($doc) + left, 0),
    max_0($getScrollTop($doc) + top_0, 0)
  );
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, "rect(0px, 0px, 0px, 0px)");
      this$static.element.style["visibility"] = "visible";
      $run(this$static.resizeAnimation, now_1());
    } else {
      this$static.element.style["visibility"] = "visible";
    }
  }
}

function $eventTargetsPopup(this$static, event_0) {
  var target;
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild(($clinit_DOM(), this$static.element), target);
  }
  return false;
}

function $getOffsetHeight(this$static) {
  return $getPropertyInt(($clinit_DOM(), this$static.element), "offsetHeight");
}

function $getOffsetWidth(this$static) {
  return $getPropertyInt(($clinit_DOM(), this$static.element), "offsetWidth");
}

function $hide(this$static) {
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static) {
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0) {
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (
    event_0.isCanceled ||
    (!this$static.previewAllNativeEvents && event_0.isConsumed)
  ) {
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
  type_0 = ($clinit_DOM(), $eventGetTypeInt(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128: {
      $eventGetKeyCode(nativeEvent) & $intern_20;
      ($eventGetShiftKey(nativeEvent) ? 1 : 0) |
        ($eventGetMetaKey(nativeEvent) ? 8 : 0) |
        ($eventGetCtrlKey(nativeEvent) ? 2 : 0) |
        ($eventGetAltKey(nativeEvent) ? 4 : 0);
      return;
    }

    case 4:
    case $intern_13:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_14: {
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }
      break;
    }

    case 2048: {
      target = $eventGetTarget(nativeEvent);
      if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
        target.blur && target != $doc.body && target.blur();
        event_0.isCanceled = true;
        return;
      }
      break;
    }
  }
}

function $setPopupPosition(this$static, left, top_0) {
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= 0;
  top_0 -= 0;
  elem = ($clinit_DOM(), this$static.element);
  elem.style["left"] = left + ($clinit_Style$Unit(), "px");
  elem.style["top"] = top_0 + "px";
}

function $setWidget_0(this$static, w) {
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static) {
  if (this$static.showing) {
    return;
  } else this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static) {
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(
      new PopupPanel$3(this$static)
    );
    this$static.historyHandlerRegistration = addValueChangeHandler(
      new PopupPanel$4(this$static)
    );
  }
}

defineClass(68, 67, $intern_19);
_.getContainerElement = function getContainerElement_0() {
  return $clinit_DOM(), $getFirstChildElement(this.element);
};
_.hide = function hide(autoClosed) {
  $hide(this);
};
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0) {
  event_0.isFirstHandler &&
    (event_0.nativeEvent, false) &&
    (event_0.isCanceled = true);
};
_.onUnload = function onUnload_0() {
  this.showing && $setState(this.resizeAnimation, false, true);
};
_.setHeight = function setHeight_0(height) {
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
};
_.setWidth = function setWidth_0(width_0) {
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
};
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel",
  68
);
defineClass(119, 68, $intern_19);
_.doAttachChildren = function doAttachChildren_1() {
  $onAttach(this.decPanel);
};
_.doDetachChildren = function doDetachChildren_1() {
  $onDetach(this.decPanel);
};
_.iterator = function iterator_2() {
  return new SimplePanel$1(this.decPanel);
};
_.remove = function remove_3(w) {
  return $remove_1(this.decPanel, w);
};
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DecoratedPopupPanel",
  119
);
function $getCellElement(this$static) {
  var td, tr;
  tr = ($clinit_DOM(), $getChild(this$static.tbody, 0));
  td = $getChild(tr, 1);
  return null, $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles) {
  var i, row, table, trElem;
  SimplePanel.call(this, ($clinit_DOM(), $doc.createElement("table")));
  table = this.element;
  this.tbody = $doc.createElement("tbody");
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, "cellSpacing", 0);
  $setPropertyInt(table, "cellPadding", 0);
  for (i = 0; i < rowStyles.length; i++) {
    row =
      ((trElem = $doc.createElement("tr")),
      $setClassName(trElem, rowStyles[i]),
      $appendChild(trElem, resolve(createTD(rowStyles[i] + "Left"))),
      $appendChild(trElem, resolve(createTD(rowStyles[i] + "Center"))),
      $appendChild(trElem, resolve(createTD(rowStyles[i] + "Right"))),
      trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  $setClassName(this.element, "gwt-DecoratorPanel");
}

function createTD(styleName) {
  var inner, tdElem;
  tdElem = ($clinit_DOM(), $doc.createElement("td"));
  inner = $doc.createElement("div");
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + "Inner");
  return tdElem;
}

defineClass(188, 67, $intern_19, DecoratorPanel);
_.getContainerElement = function getContainerElement_1() {
  return $clinit_DOM(), this.containerElem;
};
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DecoratorPanel",
  188
);
function $beginDragging(this$static, event_0) {
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0) {
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0) {
  $onMouseUp(this$static, ($getX(event_0), $getY(event_0)));
}

function $hide_0(this$static, autoClosed) {
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration.real);
    this$static.resizeHandlerRegistration = null;
  }
  $hide(this$static);
}

function $isCaptionEvent(this$static, event_0) {
  var target;
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild(
      $getParentElement(($clinit_DOM(), $getCellElement(this$static.decPanel))),
      target
    );
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0) {
  $clinit_DOM();
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0) {
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(($clinit_DOM(), this$static.element));
    absY = y_0 + $getAbsoluteTop(this$static.element);
    if (
      absX < this$static.clientLeft ||
      absX >= this$static.windowWidth ||
      absY < this$static.clientTop
    ) {
      return;
    }
    $setPopupPosition(
      this$static,
      absX - this$static.dragStartX,
      absY - this$static.dragStartY
    );
  }
}

function $onMouseUp(this$static) {
  this$static.dragging = false;
  releaseCapture(($clinit_DOM(), this$static.element));
}

function $setText(this$static, text_0) {
  $setText_0(this$static.caption, text_0);
}

function DialogBox() {
  DialogBox_0.call(this, new DialogBox$CaptionImpl());
}

function DialogBox_0(captionWidget) {
  var mouseHandler, td, rowStyles;
  SimplePanel.call(this, ($clinit_DOM(), $doc.createElement("div")));
  this.glassResizer = new PopupPanel$1();
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $doc.createElement("div"));
  $setPopupPosition(this, 0, 0);
  $setClassName(
    $getParentElement($getFirstChildElement(this.element)),
    "gwt-PopupPanel"
  );
  $setClassName((null, $getFirstChildElement(this.element)), "popupContent");
  this.autoHide = false;
  this.autoHideOnHistoryEvents = false;
  this.modal = true;
  rowStyles = initValues(
    getClassLiteralForArray(Ljava_lang_String_2_classLit, 1),
    $intern_3,
    2,
    4,
    ["dialogTop", "dialogMiddle", "dialogBottom"]
  );
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel);
  setStylePrimaryName(
    $getParentElement($getFirstChildElement(this.element)),
    "gwt-DecoratedPopupPanel"
  );
  $setWidget_0(this, this.decPanel);
  setStyleName(
    (null, $getFirstChildElement(this.element)),
    "popupContent",
    false
  );
  setStyleName(this.decPanel.containerElem, "dialogContent", true);
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = $getCellElement(this.decPanel);
  $appendChild(td, resolve($getElement(this.caption)));
  $adopt(this, this.caption);
  $setClassName(
    $getParentElement($getFirstChildElement(this.element)),
    "gwt-DialogBox"
  );
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = 0;
  this.clientTop = 0;
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(
    this,
    mouseHandler,
    ($clinit_MouseDownEvent(), $clinit_MouseDownEvent(), TYPE_1)
  );
  $addDomHandler(
    this,
    mouseHandler,
    ($clinit_MouseUpEvent(), $clinit_MouseUpEvent(), TYPE_5)
  );
  $addDomHandler(
    this,
    mouseHandler,
    ($clinit_MouseMoveEvent(), $clinit_MouseMoveEvent(), TYPE_2)
  );
  $addDomHandler(
    this,
    mouseHandler,
    ($clinit_MouseOverEvent(), $clinit_MouseOverEvent(), TYPE_4)
  );
  $addDomHandler(
    this,
    mouseHandler,
    ($clinit_MouseOutEvent(), $clinit_MouseOutEvent(), TYPE_3)
  );
}

defineClass(58, 119, $intern_19, DialogBox);
_.doAttachChildren = function doAttachChildren_2() {
  try {
    $onAttach(this.decPanel);
  } finally {
    $onAttach(this.caption);
  }
};
_.doDetachChildren = function doDetachChildren_2() {
  try {
    $onDetach(this.decPanel);
  } finally {
    $onDetach(this.caption);
  }
};
_.hide = function hide_0(autoClosed) {
  $hide_0(this, autoClosed);
};
_.onBrowserEvent = function onBrowserEvent_0(event_0) {
  switch (($clinit_DOM(), $eventGetTypeInt(event_0.type))) {
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
};
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0) {
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled &&
    $getTypeInt(event_0.nativeEvent) == 4 &&
    $isCaptionEvent(this, nativeEvent) &&
    $eventPreventDefault(nativeEvent);
  event_0.isFirstHandler &&
    (event_0.nativeEvent, false) &&
    (event_0.isCanceled = true);
};
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DialogBox",
  58
);
function DialogBox$1(this$0) {
  this.this$01 = this$0;
}

defineClass(122, 1, $intern_21, DialogBox$1);
_.onResize = function onResize_0(event_0) {
  this.this$01.windowWidth = event_0.width_0;
};
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DialogBox/1",
  122
);
function LabelBase(element) {
  $setElement_0(this, ($clinit_DOM(), element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(56, 12, $intern_19);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "LabelBase",
  56
);
function $setText_0(this$static, text_0) {
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label() {
  LabelBase.call(this, $doc.createElement("div"));
  $setClassName(($clinit_DOM(), this.element), "gwt-Label");
}

function Label_0(element) {
  LabelBase.call(this, element, $equalsIgnoreCase("span", element.tagName));
}

defineClass(66, 56, $intern_19, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "Label",
  66
);
function $setHTML(this$static, html) {
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
}

function HTML() {
  Label_0.call(this, $doc.createElement("div"));
  $setClassName(($clinit_DOM(), this.element), "gwt-HTML");
}

function HTML_0(html) {
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

defineClass(50, 66, $intern_19, HTML, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "HTML",
  50
);
function DialogBox$CaptionImpl() {
  HTML.call(this);
  $setClassName(($clinit_DOM(), this.element), "Caption");
}

defineClass(120, 50, $intern_19, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DialogBox/CaptionImpl",
  120
);
function DialogBox$MouseHandler(this$0) {
  this.this$01 = this$0;
}

defineClass(
  121,
  1,
  { 285: 1, 289: 1, 287: 1, 288: 1, 286: 1, 41: 1 },
  DialogBox$MouseHandler
);
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DialogBox/MouseHandler",
  121
);
function $setTextOrHtml(this$static, content_0, isHtml) {
  isHtml
    ? $setInnerHTML(this$static.element, content_0)
    : $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element) {
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(198, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "DirectionalTextHelper",
  198
);
function $clinit_HasHorizontalAlignment() {
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(
    ($clinit_Style$TextAlign(), "center")
  );
  new HasHorizontalAlignment$HorizontalAlignmentConstant("justify");
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant("left");
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant("right");
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
defineClass(266, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "HasHorizontalAlignment/AutoHorizontalAlignmentConstant",
  266
);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString) {
  this.textAlignString = textAlignString;
}

defineClass(57, 266, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "HasHorizontalAlignment/HorizontalAlignmentConstant",
  57
);
function $clinit_HasVerticalAlignment() {
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant("bottom");
  new HasVerticalAlignment$VerticalAlignmentConstant("middle");
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant("top");
}

var ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString) {
  this.verticalAlignString = verticalAlignString;
}

defineClass(71, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "HasVerticalAlignment/VerticalAlignmentConstant",
  71
);
function $onResize() {
  var height, width_0, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_Style$Display());
  null.nullMethod($clinit_Style$Unit());
  null.nullMethod($clinit_Style$Unit());
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width_0 > winWidth ? width_0 : winWidth) + "px");
  null.nullMethod((height > winHeight ? height : winHeight) + "px");
  null.nullMethod($clinit_Style$Display());
}

function PopupPanel$1() {}

defineClass(125, 1, $intern_21, PopupPanel$1);
_.onResize = function onResize_1(event_0) {
  $onResize();
};
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel/1",
  125
);
function PopupPanel$3(this$0) {
  this.this$01 = this$0;
}

defineClass(126, 1, { 41: 1, 283: 1 }, PopupPanel$3);
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel/3",
  126
);
function PopupPanel$4(this$0) {
  this.this$01 = this$0;
}

defineClass(127, 1, { 284: 1, 41: 1 }, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel/4",
  127
);
function $maybeShowGlass(this$static) {
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(
        this$static.curPanel.glassResizer
      );
      $onResize();
      this$static.glassShowing = true;
    }
  } else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static) {
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading ||
      $remove_0(($clinit_RootPanel(), get_0(null)), this$static.curPanel);
  }
  $setClip($getElement(this$static.curPanel), "rect(auto, auto, auto, auto)");
  $setPropertyImpl(
    $getElement(this$static.curPanel).style,
    "overflow",
    "visible"
  );
}

function $onInstantaneousRun(this$static) {
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl(
      $getElement(this$static.curPanel).style,
      "position",
      "absolute"
    );
    this$static.curPanel.topPosition != -1 &&
      $setPopupPosition(
        this$static.curPanel,
        this$static.curPanel.leftPosition,
        this$static.curPanel.topPosition
      );
    $add_0(($clinit_RootPanel(), get_0(null)), this$static.curPanel);
  } else {
    this$static.isUnloading ||
      $remove_0(($clinit_RootPanel(), get_0(null)), this$static.curPanel);
  }
  $setPropertyImpl(
    $getElement(this$static.curPanel).style,
    "overflow",
    "visible"
  );
}

function $onUpdate(this$static, progress) {
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight);
  width_0 = round_int(progress * this$static.offsetWidth);
  switch (0) {
    case 0:
      top_0 = (this$static.offsetHeight - height) >> 1;
      left = (this$static.offsetWidth - width_0) >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip(
    $getElement(this$static.curPanel),
    "rect(" + top_0 + "px, " + right + "px, " + bottom + "px, " + left + "px)"
  );
}

function $setState(this$static, showing, isUnloading) {
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
      $setPropertyImpl(
        $getElement(this$static.curPanel).style,
        "position",
        "absolute"
      );
      this$static.curPanel.topPosition != -1 &&
        $setPopupPosition(
          this$static.curPanel,
          this$static.curPanel.leftPosition,
          this$static.curPanel.topPosition
        );
      $setClip($getElement(this$static.curPanel), "rect(0px, 0px, 0px, 0px)");
      $add_0(($clinit_RootPanel(), get_0(null)), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    } else {
      $run(this$static, now_1());
    }
  } else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel) {
  Animation.call(
    this,
    (!instance_0 &&
      (instance_0 =
        !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame
          ? new AnimationSchedulerImplStandard()
          : new AnimationSchedulerImplTimer()),
    instance_0)
  );
  this.curPanel = panel;
}

defineClass(123, 85, {}, PopupPanel$ResizeAnimation);
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel/ResizeAnimation",
  123
);
function PopupPanel$ResizeAnimation$1(this$1) {
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(124, 69, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_1() {
  this.this$11.showTimer = null;
  $run(this.this$11, now_1());
};
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "PopupPanel/ResizeAnimation/1",
  124
);
function $clinit_RootPanel() {
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1();
  rootPanels = new HashMap();
  widgetsToDetach = new HashSet();
}

function RootPanel(elem) {
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM(), elem));
  $onAttach(this);
}

function detachNow(widget) {
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  } finally {
    $remove_8(widgetsToDetach, widget);
  }
}

function detachWidgets() {
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  } finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0) {
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast($getStringValue(rootPanels, id_0), 51);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM(), rp.element == elem)) {
      return rp;
    }
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2());
  !elem ? (rp = new RootPanel$DefaultRootPanel()) : (rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_4(widgetsToDetach, rp);
  return rp;
}

defineClass(51, 136, $intern_22, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel",
  51
);
function RootPanel$1() {}

defineClass(138, 1, {}, RootPanel$1);
_.execute_0 = function execute_2(w) {
  w.attached && $onDetach(w);
};
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel/1",
  138
);
function RootPanel$2() {}

defineClass(139, 1, { 290: 1, 41: 1 }, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel/2",
  139
);
function RootPanel$DefaultRootPanel() {
  RootPanel.call(this, $doc.body);
}

defineClass(137, 51, $intern_22, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "RootPanel/DefaultRootPanel",
  137
);
function $next(this$static) {
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException();
  }
  this$static.hasElement = false;
  return (this$static.returned = this$static.this$01.widget);
}

function SimplePanel$1(this$0) {
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(86, 1, {}, SimplePanel$1);
_.hasNext = function hasNext() {
  return this.hasElement;
};
_.next = function next() {
  return $next(this);
};
_.remove_0 = function remove_4() {
  !!this.returned && this.this$01.remove(this.returned);
};
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "SimplePanel/1",
  86
);
function $setSelectionRange(this$static, length_0) {
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_0(
      "Length must be a positive integer. Length: " + length_0
    );
  }
  if (
    length_0 >
    $getPropertyString(($clinit_DOM(), this$static.element), "value").length
  ) {
    throw new IndexOutOfBoundsException_0(
      "From Index: 0  To Index: " +
        length_0 +
        "  Text Length: " +
        $getPropertyString(this$static.element, "value").length
    );
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setText_1(this$static, text_0) {
  ($clinit_DOM(), this$static.element)["value"] = text_0 != null ? text_0 : "";
}

function ValueBoxBase(elem) {
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
}

defineClass(113, 83, $intern_19);
_.onBrowserEvent = function onBrowserEvent_1(event_0) {
  var type_0;
  type_0 = ($clinit_DOM(), $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0
    ? $onBrowserEvent(this, event_0)
    : $onBrowserEvent(this, event_0);
};
_.onLoad = function onLoad_0() {};
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase",
  113
);
function $clinit_TextBoxBase() {
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(114, 113, $intern_19);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "TextBoxBase",
  114
);
function TextBox() {
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(
    this,
    ((e = $doc.createElement("INPUT")), (e.type = "text"), e)
  );
}

function TextBox_0(element) {
  ValueBoxBase.call(
    this,
    element,
    (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer()),
    !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser()))
  );
  $setClassName(($clinit_DOM(), this.element), "gwt-TextBox");
}

defineClass(84, 114, $intern_19, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "TextBox",
  84
);
function $clinit_ValueBoxBase$TextAlignment() {
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1();
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2();
  LEFT_0 = new ValueBoxBase$TextAlignment$3();
  RIGHT_0 = new ValueBoxBase$TextAlignment$4();
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal) {
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4() {
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(
    getClassLiteralForArray(
      Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit,
      1
    ),
    $intern_3,
    27,
    0,
    [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]
  );
}

defineClass(27, 4, $intern_23);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase/TextAlignment",
  27,
  values_4
);
function ValueBoxBase$TextAlignment$1() {
  ValueBoxBase$TextAlignment.call(this, "CENTER", 0);
}

defineClass(115, 27, $intern_23, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase/TextAlignment/1",
  115,
  null
);
function ValueBoxBase$TextAlignment$2() {
  ValueBoxBase$TextAlignment.call(this, "JUSTIFY", 1);
}

defineClass(116, 27, $intern_23, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase/TextAlignment/2",
  116,
  null
);
function ValueBoxBase$TextAlignment$3() {
  ValueBoxBase$TextAlignment.call(this, "LEFT", 2);
}

defineClass(117, 27, $intern_23, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase/TextAlignment/3",
  117,
  null
);
function ValueBoxBase$TextAlignment$4() {
  ValueBoxBase$TextAlignment.call(this, "RIGHT", 3);
}

defineClass(118, 27, $intern_23, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum(
  "com.google.gwt.user.client.ui",
  "ValueBoxBase/TextAlignment/4",
  118,
  null
);
function $add_1(this$static, w) {
  var td, tr, td_0;
  tr = ($clinit_DOM(), $doc.createElement("tr"));
  td =
    ((td_0 = $doc.createElement("td")),
    $setCellHorizontalAlignment(td_0, this$static.horzAlign),
    $setCellVerticalAlignment(td_0, this$static.vertAlign),
    td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $setHorizontalAlignment(this$static, align_0) {
  this$static.horzAlign = align_0;
}

function VerticalPanel() {
  ComplexPanel.call(this);
  this.table = ($clinit_DOM(), $doc.createElement("table"));
  this.body_0 = $doc.createElement("tbody");
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
  this.horzAlign = ($clinit_HasHorizontalAlignment(), ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment(), ALIGN_TOP);
  $setPropertyString(this.table, "cellSpacing", "0");
  $setPropertyString(this.table, "cellPadding", "0");
}

defineClass(132, 131, $intern_19, VerticalPanel);
_.remove = function remove_5(w) {
  var removed, td;
  td = ($clinit_DOM(), $clinit_DOM(), $getParentElement(w.element));
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, (null, $getParentElement(td)));
  return removed;
};
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "VerticalPanel",
  132
);
function $add_2(this$static, w) {
  $insert(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w) {
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex) {
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException();
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(
      Lcom_google_gwt_user_client_ui_Widget_2_classLit,
      $intern_3,
      12,
      this$static.array.length * 2,
      0,
      1
    );
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_2(this$static, index_0) {
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException();
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_3(this$static, w) {
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException();
  }
  $remove_2(this$static, index_0);
}

function WidgetCollection(parent_0) {
  this.parent_0 = parent_0;
  this.array = initDim(
    Lcom_google_gwt_user_client_ui_Widget_2_classLit,
    $intern_3,
    12,
    4,
    0,
    1
  );
}

defineClass(199, 1, {}, WidgetCollection);
_.iterator = function iterator_3() {
  return new WidgetCollection$WidgetIterator(this);
};
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "WidgetCollection",
  199
);
function $next_0(this$static) {
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException();
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0) {
  this.this$01 = this$0;
}

defineClass(92, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_0() {
  return this.index_0 < this.this$01.size_0;
};
_.next = function next_0() {
  return $next_0(this);
};
_.remove_0 = function remove_6() {
  if (!this.currentWidget) {
    throw new IllegalStateException();
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
};
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass(
  "com.google.gwt.user.client.ui",
  "WidgetCollection/WidgetIterator",
  92
);
function $clinit_FocusImpl() {
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplSafari();
  implWidget = implPanel ? new FocusImpl() : implPanel;
}

function FocusImpl() {}

defineClass(151, 1, {}, FocusImpl);
_.focus_0 = function focus_0(elem) {
  elem.focus();
};
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass(
  "com.google.gwt.user.client.ui.impl",
  "FocusImpl",
  151
);
defineClass(279, 151, {});
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass(
  "com.google.gwt.user.client.ui.impl",
  "FocusImplStandard",
  279
);
function FocusImplSafari() {}

defineClass(201, 279, {}, FocusImplSafari);
_.focus_0 = function focus_1(elem) {
  $wnd.setTimeout(function () {
    elem.focus();
  }, 0);
};
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass(
  "com.google.gwt.user.client.ui.impl",
  "FocusImplSafari",
  201
);
function $setClip(popup, rect) {
  $setPropertyImpl(popup.style, "clip", rect);
}

function $setSelectionRange_0(elem, pos, length_0) {
  try {
    elem.setSelectionRange(pos, pos + length_0);
  } catch (e) {}
}

function assertCompileTimeUserAgent() {
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals("safari", runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause) {
  Throwable.call(this, message, cause);
}

defineClass(63, 6, $intern_1);
var Ljava_lang_Error_2_classLit = createForClass("java.lang", "Error", 63);
defineClass(25, 63, $intern_1);
var Ljava_lang_AssertionError_2_classLit = createForClass(
  "java.lang",
  "AssertionError",
  25
);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue) {
  Error_0.call(
    this,
    "" +
      ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
        runtimeValue +
        ").\n" +
        "Expect more errors."),
    instanceOf(
      "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
        runtimeValue +
        ").\n" +
        "Expect more errors.",
      6
    )
      ? dynamicCast(
          "Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
            runtimeValue +
            ").\n" +
            "Expect more errors.",
          6
        )
      : null
  );
}

defineClass(97, 25, $intern_1, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass(
  "com.google.gwt.useragent.client",
  "UserAgentAsserter/UserAgentAssertionError",
  97
);
function $getRuntimeValue() {
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (
    (function () {
      return ua.indexOf("webkit") != -1;
    })()
  )
    return "safari";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 10 && docMode < 11;
    })()
  )
    return "ie10";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 9 && docMode < 11;
    })()
  )
    return "ie9";
  if (
    (function () {
      return ua.indexOf("msie") != -1 && docMode >= 8 && docMode < 11;
    })()
  )
    return "ie8";
  if (
    (function () {
      return ua.indexOf("gecko") != -1 || docMode >= 11;
    })()
  )
    return "gecko1_8";
  return "unknown";
}

function $clearOnReadyStateChange(this$static) {
  this$static.onreadystatechange = function () {};
}

function $open(this$static, httpMethod, url_0) {
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler) {
  var _this = this$static;
  this$static.onreadystatechange = $entry(function () {
    handler.onReadyStateChange(_this);
  });
}

function $setRequestHeader(this$static, header, value_0) {
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static) {
  $doRemove(
    this$static.this$01,
    this$static.val$type2,
    this$static.val$source3,
    this$static.val$handler4
  );
}

function SimpleEventBus$1(this$0, val$type, val$handler) {
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(155, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "SimpleEventBus/1",
  155
);
function SimpleEventBus$2(this$0, val$type, val$handler) {
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(156, 1, { 249: 1 }, SimpleEventBus$2);
_.execute_1 = function execute_3() {
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
};
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "SimpleEventBus/2",
  156
);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler) {
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(157, 1, { 249: 1 }, SimpleEventBus$3);
_.execute_1 = function execute_4() {
  $doRemoveNow(
    this.this$01,
    this.val$type2,
    this.val$source3,
    this.val$handler4
  );
};
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass(
  "com.google.web.bindery.event.shared",
  "SimpleEventBus/3",
  157
);
function AbstractStringBuilder(string) {
  this.string = string;
}

defineClass(64, 1, {});
_.toString$ = function toString_8() {
  return this.string;
};
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(
  "java.lang",
  "AbstractStringBuilder",
  64
);
function ArrayStoreException() {
  RuntimeException.call(this);
}

defineClass(54, 13, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass(
  "java.lang",
  "ArrayStoreException",
  54
);
function ClassCastException() {
  RuntimeException.call(this);
}

defineClass(42, 13, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass(
  "java.lang",
  "ClassCastException",
  42
);
defineClass(78, 1, { 3: 1, 78: 1 });
var Ljava_lang_Number_2_classLit = createForClass("java.lang", "Number", 78);
function IllegalArgumentException() {
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(
  37,
  13,
  $intern_2,
  IllegalArgumentException,
  IllegalArgumentException_0
);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(
  "java.lang",
  "IllegalArgumentException",
  37
);
function IllegalStateException() {
  RuntimeException.call(this);
}

function IllegalStateException_0(s) {
  RuntimeException_0.call(this, s);
}

defineClass(39, 13, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(
  "java.lang",
  "IllegalStateException",
  39
);
function IndexOutOfBoundsException() {
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(
  46,
  13,
  $intern_2,
  IndexOutOfBoundsException,
  IndexOutOfBoundsException_0
);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(
  "java.lang",
  "IndexOutOfBoundsException",
  46
);
function Integer(value_0) {
  this.value_0 = value_0;
}

function valueOf(i) {
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues(), boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(40, 78, { 3: 1, 5: 1, 40: 1, 78: 1 }, Integer);
_.equals$ = function equals_1(o) {
  return instanceOf(o, 40) && dynamicCast(o, 40).value_0 == this.value_0;
};
_.hashCode$ = function hashCode_3() {
  return this.value_0;
};
_.toString$ = function toString_10() {
  return "" + this.value_0;
};
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass("java.lang", "Integer", 40);
function $clinit_Integer$BoxedValues() {
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(
    Ljava_lang_Integer_2_classLit,
    $intern_3,
    40,
    256,
    0,
    1
  );
}

var boxedValues_0;
function max_0(x_0, y_0) {
  return x_0 > y_0 ? x_0 : y_0;
}

function min_0(x_0, y_0) {
  return x_0 < y_0 ? x_0 : y_0;
}

function NullPointerException() {
  RuntimeException.call(this);
}

function NullPointerException_0(message) {
  RuntimeException_0.call(this, message);
}

defineClass(36, 13, $intern_2, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass(
  "java.lang",
  "NullPointerException",
  36
);
function NumberFormatException() {
  IllegalArgumentException.call(this);
}

defineClass(149, 37, $intern_2, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(
  "java.lang",
  "NumberFormatException",
  149
);
function $charAt(this$static, index_0) {
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other) {
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other) {
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return (
    this$static.length == other.length &&
    this$static.toLowerCase() == other.toLowerCase()
  );
}

function $indexOf_0(this$static, str) {
  return this$static.indexOf(str);
}

function $substring(this$static, beginIndex) {
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static) {
  if (
    this$static.length == 0 ||
    (this$static[0] > " " && this$static[this$static.length - 1] > " ")
  ) {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "");
}

function _String(value_0) {
  return __valueOf(value_0, 0, value_0.length);
}

function __substr(str, beginIndex, len) {
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end) {
  var s = "";
  for (var batchStart = start_0; batchStart < end; ) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function fromCodePoint(codePoint) {
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_12) {
    hiSurrogate =
      (55296 + (((codePoint - $intern_12) >> 10) & 1023)) & $intern_20;
    loSurrogate = (56320 + ((codePoint - $intern_12) & 1023)) & $intern_20;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  } else {
    return String.fromCharCode(codePoint & $intern_20);
  }
}

function valueOf_0(x_0) {
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass("java.lang", "String", 2);
function $clinit_String$HashCache() {
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str) {
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode =
      str.charCodeAt(i + 3) +
      31 *
        (str.charCodeAt(i + 2) +
          31 *
            (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str) {
  $clinit_String$HashCache();
  var key = ":" + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return (front[key] = result);
}

function increment() {
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0,
  count_0 = 0,
  front;
function $append(this$static) {
  this$static.string += " ";
  return this$static;
}

function $append_0(this$static, x_0) {
  this$static.string += x_0;
  return this$static;
}

function $append_1(this$static, x_0) {
  this$static.string += x_0;
  return this$static;
}

function StringBuffer() {
  AbstractStringBuilder.call(this, "");
}

defineClass(93, 64, { 246: 1 }, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(
  "java.lang",
  "StringBuffer",
  93
);
function $append_2(this$static, x_0) {
  this$static.string += x_0;
  return this$static;
}

function StringBuilder() {
  AbstractStringBuilder.call(this, "");
}

function StringBuilder_0(s) {
  AbstractStringBuilder.call(this, s);
}

defineClass(43, 64, { 246: 1 }, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(
  "java.lang",
  "StringBuilder",
  43
);
function identityHashCode(o) {
  return o == null ? 0 : isJavaString(o) ? getHashCode_0(o) : getHashCode(o);
}

function UnsupportedOperationException(message) {
  RuntimeException_0.call(this, message);
}

defineClass(73, 13, $intern_2, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(
  "java.lang",
  "UnsupportedOperationException",
  73
);
function $advanceToFind(this$static, o, remove) {
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext(); ) {
    e = iter.next();
    if (
      maskUndefined(o) === maskUndefined(e) ||
      (o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e))
    ) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c) {
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext(); ) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static) {
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0("[");
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext(); ) {
    e = e$iterator.next();
    comma ? ((sb.string += ", "), sb) : (comma = true);
    sb.string += e === this$static ? "(this Collection)" : "" + e;
  }
  sb.string += "]";
  return sb.string;
}

defineClass(264, 1, {});
_.contains_0 = function contains(o) {
  return $advanceToFind(this, o, false);
};
_.isEmpty = function isEmpty() {
  return this.size_1() == 0;
};
_.remove_1 = function remove_7(o) {
  return $advanceToFind(this, o, true);
};
_.toString$ = function toString_11() {
  return $toString_0(this);
};
var Ljava_util_AbstractCollection_2_classLit = createForClass(
  "java.util",
  "AbstractCollection",
  264
);
function $containsEntry(this$static, entry) {
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_0(key);
  if (
    !(
      maskUndefined(value_0) === maskUndefined(ourValue) ||
      (value_0 != null &&
        equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))
    )
  ) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove) {
  var entry, iter, k;
  for (
    iter = new AbstractHashMap$EntrySetIterator(this$static.entrySet().this$01);
    $hasNext(iter);

  ) {
    entry =
      (checkStructuralChange(iter.this$01, iter),
      checkCriticalElement($hasNext(iter)),
      (iter.last = iter.current),
      dynamicCast(iter.current.next(), 24));
    k = entry.getKey();
    if (
      maskUndefined(key) === maskUndefined(k) ||
      (key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k))
    ) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        $remove_5(iter);
      }
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o) {
  return o === this$static ? "(this Map)" : "" + o;
}

function getEntryValueOrNull(entry) {
  return !entry ? null : entry.getValue();
}

defineClass(263, 1, { 34: 1 });
_.containsKey = function containsKey(key) {
  return !!$implFindEntry(this, key, false);
};
_.equals$ = function equals_2(obj) {
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 34)) {
    return false;
  }
  otherMap = dynamicCast(obj, 34);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      otherMap.entrySet().this$01
    );
    $hasNext(entry$iterator);

  ) {
    entry =
      (checkStructuralChange(entry$iterator.this$01, entry$iterator),
      checkCriticalElement($hasNext(entry$iterator)),
      (entry$iterator.last = entry$iterator.current),
      dynamicCast(entry$iterator.current.next(), 24));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
};
_.get_0 = function get_1(key) {
  return getEntryValueOrNull($implFindEntry(this, key, false));
};
_.hashCode$ = function hashCode_4() {
  return hashCode_9(this.entrySet());
};
_.isEmpty = function isEmpty_0() {
  return this.size_1() == 0;
};
_.put = function put(key, value_0) {
  throw new UnsupportedOperationException("Put not supported on this map");
};
_.remove_2 = function remove_8(key) {
  return getEntryValueOrNull($implFindEntry(this, key, true));
};
_.size_1 = function size_1() {
  return this.entrySet().this$01.size_0;
};
_.toString$ = function toString_12() {
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0("{");
  comma = false;
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      this.entrySet().this$01
    );
    $hasNext(entry$iterator);

  ) {
    entry =
      (checkStructuralChange(entry$iterator.this$01, entry$iterator),
      checkCriticalElement($hasNext(entry$iterator)),
      (entry$iterator.last = entry$iterator.current),
      dynamicCast(entry$iterator.current.next(), 24));
    comma ? ((sb.string += ", "), sb) : (comma = true);
    $append_2(sb, $toString_1(this, entry.getKey()));
    sb.string += "=";
    $append_2(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += "}";
  return sb.string;
};
var Ljava_util_AbstractMap_2_classLit = createForClass(
  "java.util",
  "AbstractMap",
  263
);
function $containsKey(this$static, key) {
  return isJavaString(key)
    ? $hasStringValue(this$static, key)
    : !!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static) {
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static) {
  --this$static.size_0;
  structureChanged(this$static);
}

function $get(this$static, key) {
  return isJavaString(key)
    ? $getStringValue(this$static, key)
    : getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key) {
  return key == null
    ? getEntryValueOrNull($getEntry(this$static.hashCodeMap, null))
    : this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key) {
  return key == null
    ? !!$getEntry(this$static.hashCodeMap, null)
    : !(this$static.stringMap.get_2(key) === undefined);
}

function $put(this$static, key, value_0) {
  return isJavaString(key)
    ? $putStringValue(this$static, key, value_0)
    : $put_0(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0) {
  return key == null
    ? $put_0(this$static.hashCodeMap, null, value_0)
    : this$static.stringMap.put_0(key, value_0);
}

function $remove_4(this$static, key) {
  return isJavaString(key)
    ? key == null
      ? $remove_9(this$static.hashCodeMap, null)
      : this$static.stringMap.remove_4(key)
    : $remove_9(this$static.hashCodeMap, key);
}

function $reset(this$static) {
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap() {
  $reset(this);
}

defineClass(80, 263, { 34: 1 });
_.containsKey = function containsKey_0(key) {
  return $containsKey(this, key);
};
_.entrySet = function entrySet() {
  return new AbstractHashMap$EntrySet(this);
};
_.get_0 = function get_2(key) {
  return $get(this, key);
};
_.put = function put_0(key, value_0) {
  return $putStringValue(this, key, value_0);
};
_.remove_2 = function remove_9(key) {
  return $remove_4(this, key);
};
_.size_1 = function size_2() {
  return this.size_0;
};
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap",
  80
);
defineClass(265, 264, { 62: 1 });
_.equals$ = function equals_3(o) {
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 62)) {
    return false;
  }
  other = dynamicCast(o, 62);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
};
_.hashCode$ = function hashCode_5() {
  return hashCode_9(this);
};
var Ljava_util_AbstractSet_2_classLit = createForClass(
  "java.util",
  "AbstractSet",
  265
);
function $contains(this$static, o) {
  if (instanceOf(o, 24)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 24));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0) {
  this.this$01 = this$0;
}

defineClass(55, 265, { 62: 1 }, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o) {
  return $contains(this, o);
};
_.iterator = function iterator_4() {
  return new AbstractHashMap$EntrySetIterator(this.this$01);
};
_.remove_1 = function remove_10(entry) {
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 24).getKey();
    $remove_4(this.this$01, key);
    return true;
  }
  return false;
};
_.size_1 = function size_3() {
  return this.this$01.size_0;
};
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap/EntrySet",
  55
);
function $hasNext(this$static) {
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_1(this$static) {
  return (
    checkStructuralChange(this$static.this$01, this$static),
    checkCriticalElement($hasNext(this$static)),
    (this$static.last = this$static.current),
    dynamicCast(this$static.current.next(), 24)
  );
}

function $remove_5(this$static) {
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0) {
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(35, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_1() {
  return $hasNext(this);
};
_.next = function next_1() {
  return $next_1(this);
};
_.remove_0 = function remove_11() {
  $remove_5(this);
};
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(
  "java.util",
  "AbstractHashMap/EntrySetIterator",
  35
);
defineClass(271, 264, { 29: 1 });
_.add_0 = function add_2(index_0, element) {
  throw new UnsupportedOperationException("Add not supported on this list");
};
_.add_1 = function add_3(obj) {
  this.add_0(this.size_1(), obj);
  return true;
};
_.equals$ = function equals_4(o) {
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 29)) {
    return false;
  }
  other = dynamicCast(o, 29);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext(); ) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (
      !(
        maskUndefined(elem) === maskUndefined(elemOther) ||
        (elem != null &&
          equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))
      )
    ) {
      return false;
    }
  }
  return true;
};
_.hashCode$ = function hashCode_6() {
  return hashCode_10(this);
};
_.iterator = function iterator_5() {
  return new AbstractList$IteratorImpl(this);
};
_.listIterator = function listIterator() {
  return new AbstractList$ListIteratorImpl(this, 0);
};
_.listIterator_0 = function listIterator_0(from) {
  return new AbstractList$ListIteratorImpl(this, from);
};
_.remove_3 = function remove_12(index_0) {
  throw new UnsupportedOperationException("Remove not supported on this list");
};
var Ljava_util_AbstractList_2_classLit = createForClass(
  "java.util",
  "AbstractList",
  271
);
function AbstractList$IteratorImpl(this$0) {
  this.this$01_0 = this$0;
}

defineClass(59, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_2() {
  return this.i < this.this$01_0.size_1();
};
_.next = function next_2() {
  return (
    checkCriticalElement(this.i < this.this$01_0.size_1()),
    this.this$01_0.get_1((this.last = this.i++))
  );
};
_.remove_0 = function remove_13() {
  checkState(this.last != -1);
  this.this$01_0.remove_3(this.last);
  this.i = this.last;
  this.last = -1;
};
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(
  "java.util",
  "AbstractList/IteratorImpl",
  59
);
function AbstractList$ListIteratorImpl(this$0, start_0) {
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(89, 59, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious() {
  return this.i > 0;
};
_.previous = function previous_0() {
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1((this.last = --this.i));
};
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(
  "java.util",
  "AbstractList/ListIteratorImpl",
  89
);
function $iterator(this$static) {
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator(
    new AbstractHashMap$EntrySet(this$static.this$01).this$01
  );
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0) {
  this.this$01 = this$0;
}

defineClass(82, 265, { 62: 1 }, AbstractMap$1);
_.contains_0 = function contains_1(key) {
  return $containsKey(this.this$01, key);
};
_.iterator = function iterator_6() {
  return $iterator(this);
};
_.remove_1 = function remove_14(key) {
  if ($containsKey(this.this$01, key)) {
    $remove_4(this.this$01, key);
    return true;
  }
  return false;
};
_.size_1 = function size_4() {
  return this.this$01.size_0;
};
var Ljava_util_AbstractMap$1_2_classLit = createForClass(
  "java.util",
  "AbstractMap/1",
  82
);
function AbstractMap$1$1(val$outerIter) {
  this.val$outerIter2 = val$outerIter;
}

defineClass(106, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_3() {
  return $hasNext(this.val$outerIter2);
};
_.next = function next_3() {
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
};
_.remove_0 = function remove_15() {
  $remove_5(this.val$outerIter2);
};
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(
  "java.util",
  "AbstractMap/1/1",
  106
);
defineClass(105, 1, $intern_24);
_.equals$ = function equals_5(other) {
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return (
    equals_11(this.key, entry.getKey()) &&
    equals_11(this.value_0, entry.getValue())
  );
};
_.getKey = function getKey() {
  return this.key;
};
_.getValue = function getValue() {
  return this.value_0;
};
_.hashCode$ = function hashCode_7() {
  return hashCode_12(this.key) ^ hashCode_12(this.value_0);
};
_.setValue = function setValue(value_0) {
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
};
_.toString$ = function toString_13() {
  return this.key + "=" + this.value_0;
};
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMap/AbstractEntry",
  105
);
function AbstractMap$SimpleEntry(key, value_0) {
  this.key = key;
  this.value_0 = value_0;
}

defineClass(81, 105, $intern_24, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMap/SimpleEntry",
  81
);
defineClass(272, 1, $intern_24);
_.equals$ = function equals_6(other) {
  var entry;
  if (!instanceOf(other, 24)) {
    return false;
  }
  entry = dynamicCast(other, 24);
  return (
    equals_11(this.getKey(), entry.getKey()) &&
    equals_11(this.getValue(), entry.getValue())
  );
};
_.hashCode$ = function hashCode_8() {
  return hashCode_12(this.getKey()) ^ hashCode_12(this.getValue());
};
_.toString$ = function toString_14() {
  return this.getKey() + "=" + this.getValue();
};
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(
  "java.util",
  "AbstractMapEntry",
  272
);
function $add_3(this$static, o) {
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_0(this$static, index_0) {
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0) {
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_11(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_6(this$static, index_0) {
  var previous;
  previous =
    (checkElementIndex(index_0, this$static.array.length),
    this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_7(this$static, o) {
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_3(i);
  return true;
}

function $set(this$static, index_0, o) {
  var previous;
  previous =
    (checkElementIndex(index_0, this$static.array.length),
    this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out) {
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 &&
    (out =
      ((result = initializeArrayElementsWithDefaults(0, size_0)),
      initValues(
        getClass__Ljava_lang_Class___devirtual$(out),
        out.castableTypeMap$,
        out.__elementTypeId$,
        out.__elementTypeCategory$,
        result
      ),
      result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList() {
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount) {
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0) {
  array.splice(index_0, deleteCount, value_0);
}

defineClass(38, 271, $intern_25, ArrayList);
_.add_0 = function add_4(index_0, o) {
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
};
_.add_1 = function add_5(o) {
  return $add_3(this, o);
};
_.contains_0 = function contains_2(o) {
  return $indexOf_1(this, o, 0) != -1;
};
_.get_1 = function get_3(index_0) {
  return $get_0(this, index_0);
};
_.isEmpty = function isEmpty_1() {
  return this.array.length == 0;
};
_.remove_3 = function remove_16(index_0) {
  return $remove_6(this, index_0);
};
_.remove_1 = function remove_17(o) {
  return $remove_7(this, o);
};
_.size_1 = function size_5() {
  return this.array.length;
};
var Ljava_util_ArrayList_2_classLit = createForClass(
  "java.util",
  "ArrayList",
  38
);
function equals_7(array1, array2) {
  var i;
  if (array1 === array2) {
    return true;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    if (array1[i] != array2[i]) {
      return false;
    }
  }
  return true;
}

function $clinit_Collections() {
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList();
}

function hashCode_9(collection) {
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext(); ) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_10(list) {
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext(); ) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null ? hashCode__I__devirtual$(e) : 0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList() {}

defineClass(140, 271, $intern_25, Collections$EmptyList);
_.contains_0 = function contains_3(object) {
  return false;
};
_.get_1 = function get_4(location_0) {
  checkElementIndex(location_0, 0);
  return null;
};
_.iterator = function iterator_7() {
  return (
    $clinit_Collections(), $clinit_Collections$EmptyListIterator(), INSTANCE_2
  );
};
_.listIterator = function listIterator_1() {
  return (
    $clinit_Collections(), $clinit_Collections$EmptyListIterator(), INSTANCE_2
  );
};
_.size_1 = function size_6() {
  return 0;
};
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(
  "java.util",
  "Collections/EmptyList",
  140
);
function $clinit_Collections$EmptyListIterator() {
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator();
}

function Collections$EmptyListIterator() {}

defineClass(141, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4() {
  return false;
};
_.hasPrevious = function hasPrevious_0() {
  return false;
};
_.next = function next_4() {
  throw new NoSuchElementException();
};
_.previous = function previous_1() {
  throw new NoSuchElementException();
};
_.remove_0 = function remove_18() {
  throw new IllegalStateException();
};
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(
  "java.util",
  "Collections/EmptyListIterator",
  141
);
function checkStructuralChange(host, iterator) {
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException();
  }
}

function recordLastKnownStructure(host, iterator) {
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount) {
  o._gwt_modCount = modCount;
}

function structureChanged(map_0) {
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException() {
  RuntimeException.call(this);
}

defineClass(212, 13, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(
  "java.util",
  "ConcurrentModificationException",
  212
);
function HashMap() {
  AbstractHashMap.call(this);
}

defineClass(30, 80, { 3: 1, 34: 1 }, HashMap);
_.equals = function equals_8(value1, value2) {
  return (
    maskUndefined(value1) === maskUndefined(value2) ||
    (value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2))
  );
};
_.getHashCode = function getHashCode_1(key) {
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
};
var Ljava_util_HashMap_2_classLit = createForClass("java.util", "HashMap", 30);
function $add_4(this$static, o) {
  var old;
  old = $put(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o) {
  return $containsKey(this$static.map_0, o);
}

function $remove_8(this$static, o) {
  return $remove_4(this$static.map_0, o) != null;
}

function HashSet() {
  this.map_0 = new HashMap();
}

defineClass(75, 265, { 3: 1, 62: 1 }, HashSet);
_.contains_0 = function contains_4(o) {
  return $contains_0(this, o);
};
_.isEmpty = function isEmpty_2() {
  return this.map_0.size_0 == 0;
};
_.iterator = function iterator_8() {
  return $iterator(new AbstractMap$1(this.map_0));
};
_.remove_1 = function remove_19(o) {
  return $remove_8(this, o);
};
_.size_1 = function size_7() {
  return this.map_0.size_0;
};
_.toString$ = function toString_15() {
  return $toString_0(new AbstractMap$1(this.map_0));
};
var Ljava_util_HashSet_2_classLit = createForClass("java.util", "HashSet", 75);
function IdentityHashMap() {
  AbstractHashMap.call(this);
}

defineClass(241, 80, { 3: 1, 34: 1 }, IdentityHashMap);
_.equals$ = function equals_9(obj) {
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 34)) {
    return false;
  }
  otherMap = dynamicCast(obj, 34);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      otherMap.entrySet().this$01
    );
    $hasNext(entry$iterator);

  ) {
    entry =
      (checkStructuralChange(entry$iterator.this$01, entry$iterator),
      checkCriticalElement($hasNext(entry$iterator)),
      (entry$iterator.last = entry$iterator.current),
      dynamicCast(entry$iterator.current.next(), 24));
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (
      !(isJavaString(otherKey)
        ? $hasStringValue(this, otherKey)
        : !!$getEntry(this.hashCodeMap, otherKey))
    ) {
      return false;
    }
    if (
      maskUndefined(otherValue) !==
      maskUndefined(
        isJavaString(otherKey)
          ? $getStringValue(this, otherKey)
          : getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey))
      )
    ) {
      return false;
    }
  }
  return true;
};
_.equals = function equals_10(value1, value2) {
  return maskUndefined(value1) === maskUndefined(value2);
};
_.getHashCode = function getHashCode_2(key) {
  return getHashCode(key);
};
_.hashCode$ = function hashCode_11() {
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (
    entry$iterator = new AbstractHashMap$EntrySetIterator(
      new AbstractHashMap$EntrySet(this).this$01
    );
    $hasNext(entry$iterator);

  ) {
    entry =
      (checkStructuralChange(entry$iterator.this$01, entry$iterator),
      checkCriticalElement($hasNext(entry$iterator)),
      (entry$iterator.last = entry$iterator.current),
      dynamicCast(entry$iterator.current.next(), 24));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
};
var Ljava_util_IdentityHashMap_2_classLit = createForClass(
  "java.util",
  "IdentityHashMap",
  241
);
function $ensureChain(this$static, hashCode) {
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode) {
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode) {
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key) {
  var entry, entry$array, entry$index, entry$max;
  for (
    entry$array = $getChainOrEmpty(
      this$static,
      key == null ? "0" : "" + this$static.host.getHashCode(key)
    ),
      entry$index = 0,
      entry$max = entry$array.length;
    entry$index < entry$max;
    ++entry$index
  ) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static) {
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_0(this$static, key, value_0) {
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(
    this$static,
    key == null ? "0" : "" + this$static.host.getHashCode(key)
  );
  for (
    entry$index = 0, entry$max = chain.length;
    entry$index < entry$max;
    ++entry$index
  ) {
    entry = chain[entry$index];
    if (this$static.host.equals(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_9(this$static, key) {
  var chain, entry, hashCode, i;
  hashCode = key == null ? "0" : "" + this$static.host.getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key, entry.getKey())) {
      chain.length == 1
        ? (delete this$static.backingMap[hashCode], undefined)
        : (chain.splice(i, 1), undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap() {
  this.backingMap = this.createMap();
}

defineClass(91, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap() {
  return Object.create(null);
};
_.entries = function entries() {
  return new InternalJsHashCodeMap$1(this);
};
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass(
  "java.util",
  "InternalJsHashCodeMap",
  91
);
function $hasNext_0(this$static) {
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(
      this$static.this$01,
      this$static.keys_0[++this$static.chainIndex]
    );
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0) {
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_3, 24, 0, 0, 1);
}

defineClass(196, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_5() {
  return $hasNext_0(this);
};
_.next = function next_5() {
  return (
    checkCriticalElement($hasNext_0(this)),
    (this.lastChain = this.chain),
    (this.lastEntry = this.chain[this.itemIndex++]),
    this.lastEntry
  );
};
_.remove_0 = function remove_20() {
  checkState(!!this.lastEntry);
  $remove_9(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) &&
    this.chain.length != 1 &&
    --this.itemIndex;
  this.lastEntry = null;
};
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass(
  "java.util",
  "InternalJsHashCodeMap/1",
  196
);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy() {
  InternalJsHashCodeMap.call(this);
}

defineClass(194, 91, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0() {
  return {};
};
_.entries = function entries_0() {
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
};
_.newEntryList = function newEntryList() {
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
};
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass(
  "java.util",
  "InternalJsHashCodeMap/InternalJsHashCodeMapLegacy",
  194
);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1) {
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(
  195,
  38,
  $intern_25,
  InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1
);
_.remove_3 = function remove_21(index_0) {
  var removed;
  return (
    (removed = dynamicCast($remove_6(this, index_0), 24)),
    $remove_9(this.this$11, removed.getKey()),
    removed
  );
};
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass(
  "java.util",
  "InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1",
  195
);
function InternalJsMapFactory() {}

defineClass(191, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap() {
  return new InternalJsHashCodeMap();
};
_.createJsStringMap = function createJsStringMap() {
  return new InternalJsStringMap();
};
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass(
  "java.util",
  "InternalJsMapFactory",
  191
);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory() {
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto() {
  var protoField = "__proto__";
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory() {
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return ((map_0 = Object.create(null)),
    (map_0["__proto__"] = 42),
    Object.getOwnPropertyNames(map_0).length == 0)
      ? new InternalJsMapFactory$KeysWorkaroundJsMapFactory()
      : new InternalJsMapFactory();
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory();
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory() {}

defineClass(193, 191, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0() {
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround();
};
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass(
  "java.util",
  "InternalJsMapFactory/KeysWorkaroundJsMapFactory",
  193
);
function InternalJsMapFactory$LegacyInternalJsMapFactory() {}

defineClass(192, 191, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0() {
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy();
};
_.createJsStringMap = function createJsStringMap_1() {
  return new InternalJsStringMap$InternalJsStringMapLegacy();
};
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass(
  "java.util",
  "InternalJsMapFactory/LegacyInternalJsMapFactory",
  192
);
function $keys_0(this$static) {
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0) {
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_0(this$static, key, value_0 === undefined ? null : value_0);
  return oldValue;
}

function $remove_10(this$static, key) {
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_0(this$static, key, value_0) {
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap() {
  this.backingMap = this.createMap_0();
}

defineClass(74, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1() {
  return Object.create(null);
};
_.entries = function entries_1() {
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
};
_.get_2 = function get_5(key) {
  return this.backingMap[key];
};
_.keys_1 = function keys_1() {
  return $keys_0(this);
};
_.newMapEntry = function newMapEntry(key) {
  return new InternalJsStringMap$2(this, key);
};
_.put_0 = function put_1(key, value_0) {
  return $put_1(this, key, value_0);
};
_.remove_4 = function remove_22(key) {
  return $remove_10(this, key);
};
var Ljava_util_InternalJsStringMap_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap",
  74
);
function InternalJsStringMap$1(this$0, val$keys) {
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(145, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_6() {
  return this.i < this.val$keys2.length;
};
_.next = function next_6() {
  return (
    checkCriticalElement(this.i < this.val$keys2.length),
    new InternalJsStringMap$2(
      this.this$01,
      this.val$keys2[(this.last = this.i++)]
    )
  );
};
_.remove_0 = function remove_23() {
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
};
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap/1",
  145
);
function InternalJsStringMap$2(this$0, val$key) {
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(90, 272, $intern_24, InternalJsStringMap$2);
_.getKey = function getKey_0() {
  return this.val$key2;
};
_.getValue = function getValue_0() {
  return this.this$01.get_2(this.val$key2);
};
_.setValue = function setValue_0(object) {
  return this.this$01.put_0(this.val$key2, object);
};
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap/2",
  90
);
function InternalJsStringMap$InternalJsStringMapLegacy() {
  InternalJsStringMap.call(this);
}

defineClass(142, 74, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2() {
  return {};
};
_.entries = function entries_2() {
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
};
_.get_2 = function get_6(key) {
  return this.backingMap[":" + key];
};
_.newEntryList_0 = function newEntryList_0() {
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
};
_.put_0 = function put_2(key, value_0) {
  return $put_1(this, ":" + key, value_0);
};
_.remove_4 = function remove_24(key) {
  return $remove_10(this, ":" + key);
};
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap/InternalJsStringMapLegacy",
  142
);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1) {
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(
  144,
  38,
  $intern_25,
  InternalJsStringMap$InternalJsStringMapLegacy$1
);
_.remove_3 = function remove_25(index_0) {
  var removed;
  return (
    (removed = dynamicCast($remove_6(this, index_0), 24)),
    $remove_10(this.this$11, ":" + dynamicCastToString(removed.getKey())),
    removed
  );
};
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap/InternalJsStringMapLegacy/1",
  144
);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround() {
  InternalJsStringMap.call(this);
}

defineClass(
  143,
  74,
  {},
  InternalJsStringMap$InternalJsStringMapWithKeysWorkaround
);
_.keys_1 = function keys_2() {
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap["__proto__"] === undefined) &&
    (keys_0[keys_0.length] = "__proto__");
  return keys_0;
};
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass(
  "java.util",
  "InternalJsStringMap/InternalJsStringMapWithKeysWorkaround",
  143
);
var Ljava_util_Map$Entry_2_classLit = createForInterface(
  "java.util",
  "Map/Entry"
);
function NoSuchElementException() {
  RuntimeException.call(this);
}

defineClass(47, 13, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(
  "java.util",
  "NoSuchElementException",
  47
);
function equals_11(a, b) {
  return (
    maskUndefined(a) === maskUndefined(b) ||
    (a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b))
  );
}

function hashCode_12(o) {
  return o != null ? hashCode__I__devirtual$(o) : 0;
}

function $clinit_CoordCube() {
  $clinit_CoordCube = emptyMethod;
  UDSliceMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [495, 18],
    2
  );
  TwistMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [324, 18],
    2
  );
  FlipMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [336, 18],
    2
  );
  UDSliceConj = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [495, 8],
    2
  );
  UDSliceTwistPrun = initDim(I_classLit, $intern_27, 0, 20048, 7, 1);
  UDSliceFlipPrun = initDim(I_classLit, $intern_27, 0, 20791, 7, 1);
  TwistFlipPrun = initDim(I_classLit, $intern_27, 0, 82945, 7, 1);
  CPermMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [2768, 10],
    2
  );
  EPermMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [2768, 10],
    2
  );
  MPermMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [24, 10],
    2
  );
  MPermConj = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [24, 16],
    2
  );
  CCombPConj = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [140, 16],
    2
  );
  MCPermPrun = initDim(I_classLit, $intern_27, 0, 8305, 7, 1);
  EPermCCombPPrun = initDim(I_classLit, $intern_27, 0, 48441, 7, 1);
}

function $doMovePrun(this$static, cc, m) {
  this$static.slice_0 = UDSliceMove[cc.slice_0][m];
  this$static.flip =
    FlipMove[cc.flip][($clinit_CubieCube(), Sym8Move)[(m << 3) | cc.fsym]];
  this$static.fsym = (this$static.flip & 7) ^ cc.fsym;
  this$static.flip >>= 3;
  this$static.twist = TwistMove[cc.twist][Sym8Move[(m << 3) | cc.tsym]];
  this$static.tsym = (this$static.twist & 7) ^ cc.tsym;
  this$static.twist >>= 3;
  this$static.prun = max_0(
    max_0(
      getPruning(
        UDSliceTwistPrun,
        this$static.twist * 495 +
          UDSliceConj[this$static.slice_0][this$static.tsym]
      ),
      getPruning(
        UDSliceFlipPrun,
        this$static.flip * 495 +
          UDSliceConj[this$static.slice_0][this$static.fsym]
      )
    ),
    getPruning(
      TwistFlipPrun,
      (this$static.twist << 11) |
        FlipS2RF[
          (this$static.flip << 3) | (this$static.fsym ^ this$static.tsym)
        ]
    )
  );
  return this$static.prun;
}

function $doMovePrunConj(this$static, cc, m) {
  m = ($clinit_CubieCube(), SymMove_0)[3][m];
  this$static.flipc =
    FlipMove[cc.flipc >> 3][Sym8Move[(m << 3) | (cc.flipc & 7)]] ^
    (cc.flipc & 7);
  this$static.twistc =
    TwistMove[cc.twistc >> 3][Sym8Move[(m << 3) | (cc.twistc & 7)]] ^
    (cc.twistc & 7);
  return getPruning(
    TwistFlipPrun,
    ((this$static.twistc >> 3) << 11) |
      FlipS2RF[this$static.flipc ^ (this$static.twistc & 7)]
  );
}

function $setWithPrun(this$static, cc, depth) {
  var pc;
  this$static.twist = ($clinit_CubieCube(), TwistR2S)[$getTwist(cc)];
  this$static.flip = FlipR2S[$getFlip(cc)];
  this$static.tsym = this$static.twist & 7;
  this$static.twist = this$static.twist >> 3;
  this$static.prun = getPruning(
    TwistFlipPrun,
    (this$static.twist << 11) | FlipS2RF[this$static.flip ^ this$static.tsym]
  );
  if (this$static.prun > depth) {
    return false;
  }
  this$static.fsym = this$static.flip & 7;
  this$static.flip = this$static.flip >> 3;
  this$static.slice_0 = 494 - getComb(cc.ea, 8, true);
  this$static.prun = max_0(
    this$static.prun,
    max_0(
      getPruning(
        UDSliceTwistPrun,
        this$static.twist * 495 +
          UDSliceConj[this$static.slice_0][this$static.tsym]
      ),
      getPruning(
        UDSliceFlipPrun,
        this$static.flip * 495 +
          UDSliceConj[this$static.slice_0][this$static.fsym]
      )
    )
  );
  if (this$static.prun > depth) {
    return false;
  }
  pc = new CubieCube();
  CornConjugate(cc, 1, pc);
  EdgeConjugate(cc, 1, pc);
  this$static.twistc = TwistR2S[$getTwist(pc)];
  this$static.flipc = FlipR2S[$getFlip(pc)];
  this$static.prun = max_0(
    this$static.prun,
    getPruning(
      TwistFlipPrun,
      ((this$static.twistc >> 3) << 11) |
        FlipS2RF[this$static.flipc ^ (this$static.twistc & 7)]
    )
  );
  return this$static.prun <= depth;
}

function CoordCube() {
  $clinit_CoordCube();
}

function getPruning(table, index_0) {
  $clinit_CoordCube();
  return (table[index_0 >> 3] >> (index_0 << 2)) & 15;
}

function init_0(fullInit) {
  $clinit_CoordCube();
  if (initLevel == 2 || (initLevel == 1 && !fullInit)) {
    return;
  }
  if (initLevel == 0) {
    initPermSym2Raw();
    initCPermMove();
    initEPermMove();
    initMPermMoveConj();
    initCombPMoveConj();
    $clinit_CubieCube();
    initSym2Raw(
      2048,
      FlipS2R,
      FlipR2S,
      (SymStateFlip = initDim(C_classLit, $intern_26, 0, 336, 7, 1)),
      0
    );
    initSym2Raw(
      2187,
      TwistS2R,
      TwistR2S,
      (SymStateTwist = initDim(C_classLit, $intern_26, 0, 324, 7, 1)),
      1
    );
    initFlipMove();
    initTwistMove();
    initUDSliceMoveConj();
  }
  initRawSymPrun(
    MCPermPrun,
    MPermMove,
    MPermConj,
    CPermMove,
    ($clinit_CubieCube(), SymStatePerm),
    584244,
    fullInit
  );
  initRawSymPrun(
    EPermCCombPPrun,
    CCombPMove,
    CCombPConj,
    EPermMove,
    SymStatePerm,
    514084,
    fullInit
  );
  initRawSymPrun(
    UDSliceTwistPrun,
    UDSliceMove,
    UDSliceConj,
    TwistMove,
    SymStateTwist,
    431619,
    fullInit
  );
  initRawSymPrun(
    UDSliceFlipPrun,
    UDSliceMove,
    UDSliceConj,
    FlipMove,
    SymStateFlip,
    431619,
    fullInit
  );
  initRawSymPrun(
    TwistFlipPrun,
    null,
    null,
    TwistMove,
    SymStateTwist,
    103939,
    fullInit
  );
  initLevel = fullInit ? 2 : 1;
}

function initCPermMove() {
  var c, d, i, j;
  c = new CubieCube();
  d = new CubieCube();
  for (i = 0; i < 2768; i++) {
    $setCPerm(c, ($clinit_CubieCube(), EPermS2R)[i]);
    for (j = 0; j < 10; j++) {
      CornMult(c, moveCube[($clinit_Util(), ud2std)[j]], d);
      CPermMove[i][j] =
        ESym2CSym(EPermR2S[getNPerm(d.ca, 8, false)]) & $intern_20;
    }
  }
}

function initCombPMoveConj() {
  var c, d, i, j, j0;
  c = new CubieCube();
  d = new CubieCube();
  CCombPMove = initDims(
    C_classLit,
    [$intern_3, $intern_26],
    [11, 0],
    7,
    [140, 10],
    2
  );
  for (i = 0; i < 140; i++) {
    setComb(c.ca, i % 70, 0, false);
    for (j0 = 0; j0 < 10; j0++) {
      CornMult(
        c,
        ($clinit_CubieCube(), moveCube)[($clinit_Util(), ud2std)[j0]],
        d
      );
      CCombPMove[i][j0] =
        (getComb(d.ca, 0, false) + 70 * (((165 >> j0) & 1) ^ ~~(i / 70))) &
        $intern_20;
    }
    for (j = 0; j < 16; j++) {
      CornConjugate(c, ($clinit_CubieCube(), SymMultInv)[0][j], d);
      CCombPConj[i][j] =
        (getComb(d.ca, 0, false) + 70 * ~~(i / 70)) & $intern_20;
    }
  }
}

function initEPermMove() {
  var c, d, i, j;
  c = new CubieCube();
  d = new CubieCube();
  for (i = 0; i < 2768; i++) {
    $setEPerm(c, ($clinit_CubieCube(), EPermS2R)[i]);
    for (j = 0; j < 10; j++) {
      EdgeMult(c, moveCube[($clinit_Util(), ud2std)[j]], d);
      EPermMove[i][j] = EPermR2S[getNPerm(d.ea, 8, true)];
    }
  }
}

function initFlipMove() {
  var c, d, i, j;
  c = new CubieCube();
  d = new CubieCube();
  for (i = 0; i < 336; i++) {
    $setFlip(c, ($clinit_CubieCube(), FlipS2R)[i]);
    for (j = 0; j < 18; j++) {
      EdgeMult(c, moveCube[j], d);
      FlipMove[i][j] = FlipR2S[$getFlip(d)];
    }
  }
}

function initMPermMoveConj() {
  var c, d, i, j, j0;
  c = new CubieCube();
  d = new CubieCube();
  for (i = 0; i < 24; i++) {
    setNPerm(c.ea, i, 12, true);
    for (j0 = 0; j0 < 10; j0++) {
      EdgeMult(
        c,
        ($clinit_CubieCube(), moveCube)[($clinit_Util(), ud2std)[j0]],
        d
      );
      MPermMove[i][j0] = getNPerm(d.ea, 12, true) % 24 & $intern_20;
    }
    for (j = 0; j < 16; j++) {
      EdgeConjugate(c, ($clinit_CubieCube(), SymMultInv)[0][j], d);
      MPermConj[i][j] = getNPerm(d.ea, 12, true) % 24 & $intern_20;
    }
  }
}

function initRawSymPrun(
  PrunTable,
  RawMove,
  RawConj,
  SymMove,
  SymState,
  PrunFlag,
  fullInit
) {
  var INV_DEPTH,
    ISTFP,
    IS_PHASE2,
    MAX_DEPTH,
    MIN_DEPTH,
    NEXT_AXIS_MAGIC,
    N_MOVES,
    N_RAW,
    N_SIZE,
    SEARCH_DEPTH,
    SYM_E2C_MAGIC,
    SYM_MASK,
    SYM_SHIFT,
    check,
    depth,
    done,
    flip,
    fsym,
    i,
    i0,
    idx,
    idxx,
    inv,
    j,
    m,
    mask,
    prun,
    raw,
    rawx,
    selArrMask,
    select,
    sym,
    symState,
    symx,
    val,
    val0,
    xorVal;
  SYM_SHIFT = PrunFlag & 15;
  SYM_E2C_MAGIC = ((PrunFlag >> 4) & 1) == 1 ? $intern_28 : 0;
  IS_PHASE2 = ((PrunFlag >> 5) & 1) == 1;
  INV_DEPTH = (PrunFlag >> 8) & 15;
  MAX_DEPTH = (PrunFlag >> 12) & 15;
  MIN_DEPTH = (PrunFlag >> 16) & 15;
  SEARCH_DEPTH = fullInit ? MAX_DEPTH : MIN_DEPTH;
  SYM_MASK = (1 << SYM_SHIFT) - 1;
  ISTFP = RawMove == null;
  N_RAW = ISTFP ? 2048 : RawMove.length;
  N_SIZE = N_RAW * SymMove.length;
  N_MOVES = IS_PHASE2 ? 10 : 18;
  NEXT_AXIS_MAGIC = N_MOVES == 10 ? 66 : 599186;
  depth = ((PrunTable[N_SIZE >> 3] >> (N_SIZE << 2)) & 15) - 1;
  done = 0;
  if (depth == -1) {
    for (i = 0; i < ~~(N_SIZE / 8) + 1; i++) {
      PrunTable[i] = $intern_29;
    }
    PrunTable[0] ^= 1;
    depth = 0;
    done = 1;
  }
  while (depth < SEARCH_DEPTH) {
    mask = ((depth + 1) * $intern_29) ^ -1;
    for (i0 = 0; i0 < PrunTable.length; i0++) {
      val0 = PrunTable[i0] ^ mask;
      val0 &= val0 >> 1;
      PrunTable[i0] += val0 & (val0 >> 2) & $intern_29;
    }
    inv = depth > INV_DEPTH;
    select = inv ? depth + 2 : depth;
    selArrMask = select * $intern_29;
    check = inv ? depth : depth + 2;
    ++depth;
    xorVal = depth ^ (depth + 1);
    val = 0;
    for (i = 0; i < N_SIZE; ++i, val >>= 4) {
      if ((i & 7) == 0) {
        val = PrunTable[i >> 3];
        if (
          (((val ^ selArrMask) - $intern_29) &
            ~(val ^ selArrMask) &
            -2004318072) ==
          0
        ) {
          i += 7;
          continue;
        }
      }
      if ((val & 15) != select) {
        continue;
      }
      raw = i % N_RAW;
      sym = ~~(i / N_RAW);
      flip = 0;
      fsym = 0;
      if (ISTFP) {
        flip = ($clinit_CubieCube(), FlipR2S)[raw];
        fsym = flip & 7;
        flip >>= 3;
      }
      for (m = 0; m < N_MOVES; m++) {
        symx = SymMove[sym][m];
        ISTFP
          ? (rawx = ($clinit_CubieCube(), FlipS2RF)[
              FlipMove[flip][Sym8Move[(m << 3) | fsym]] ^
                fsym ^
                (symx & SYM_MASK)
            ])
          : (rawx = RawConj[RawMove[raw][m]][symx & SYM_MASK]);
        symx >>= SYM_SHIFT;
        idx = symx * N_RAW + rawx;
        prun = (PrunTable[idx >> 3] >> (idx << 2)) & 15;
        if (prun != check) {
          prun < depth - 1 && (m += (NEXT_AXIS_MAGIC >> m) & 3);
          continue;
        }
        ++done;
        if (inv) {
          PrunTable[i >> 3] ^= xorVal << (i << 2);
          break;
        }
        PrunTable[idx >> 3] ^= xorVal << (idx << 2);
        for (j = 1, symState = SymState[symx]; (symState >>= 1) != 0; j++) {
          if ((symState & 1) != 1) {
            continue;
          }
          idxx = symx * N_RAW;
          ISTFP
            ? (idxx += ($clinit_CubieCube(), FlipS2RF)[FlipR2S[rawx] ^ j])
            : (idxx += RawConj[rawx][j ^ ((SYM_E2C_MAGIC >> (j << 1)) & 3)]);
          if (((PrunTable[idxx >> 3] >> (idxx << 2)) & 15) == check) {
            PrunTable[idxx >> 3] ^= xorVal << (idxx << 2);
            ++done;
          }
        }
      }
    }
  }
}

function initTwistMove() {
  var c, d, i, j;
  c = new CubieCube();
  d = new CubieCube();
  for (i = 0; i < 324; i++) {
    $setTwist(c, ($clinit_CubieCube(), TwistS2R)[i]);
    for (j = 0; j < 18; j++) {
      CornMult(c, moveCube[j], d);
      TwistMove[i][j] = TwistR2S[$getTwist(d)];
    }
  }
}

function initUDSliceMoveConj() {
  var c, d, i, i0, j, j0, k, udslice;
  c = new CubieCube();
  d = new CubieCube();
  for (i0 = 0; i0 < 495; i0++) {
    setComb(c.ea, 494 - i0, 8, true);
    for (j0 = 0; j0 < 18; j0 += 3) {
      EdgeMult(c, ($clinit_CubieCube(), moveCube)[j0], d);
      UDSliceMove[i0][j0] = (494 - getComb(d.ea, 8, true)) & $intern_20;
    }
    for (j = 0; j < 16; j += 2) {
      EdgeConjugate(c, ($clinit_CubieCube(), SymMultInv)[0][j], d);
      UDSliceConj[i0][j >> 1] = (494 - getComb(d.ea, 8, true)) & $intern_20;
    }
  }
  for (i = 0; i < 495; i++) {
    for (j = 0; j < 18; j += 3) {
      udslice = UDSliceMove[i][j];
      for (k = 1; k < 3; k++) {
        udslice = UDSliceMove[udslice][j];
        UDSliceMove[i][j + k] = udslice & $intern_20;
      }
    }
  }
}

defineClass(31, 1, { 31: 1 }, CoordCube);
_.flip = 0;
_.flipc = 0;
_.fsym = 0;
_.prun = 0;
_.slice_0 = 0;
_.tsym = 0;
_.twist = 0;
_.twistc = 0;
var CCombPConj,
  CCombPMove,
  CPermMove,
  EPermCCombPPrun,
  EPermMove,
  FlipMove,
  MCPermPrun,
  MPermConj,
  MPermMove,
  TwistFlipPrun,
  TwistMove,
  UDSliceConj,
  UDSliceFlipPrun,
  UDSliceMove,
  UDSliceTwistPrun,
  initLevel = 0;
var Lorg_cubing_min2phase_client_CoordCube_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "CoordCube",
  31
);
function $clinit_CubieCube() {
  $clinit_CubieCube = emptyMethod;
  CubeSym = initDim(
    Lorg_cubing_min2phase_client_CubieCube_2_classLit,
    $intern_3,
    7,
    16,
    0,
    1
  );
  moveCube = initDim(
    Lorg_cubing_min2phase_client_CubieCube_2_classLit,
    $intern_3,
    7,
    18,
    0,
    1
  );
  moveCubeSym = initDim(J_classLit, $intern_3, 0, 18, 6, 1);
  firstMoveSym = initDim(I_classLit, $intern_27, 0, 48, 7, 1);
  SymMult = initDims(
    I_classLit,
    [$intern_3, $intern_27],
    [17, 0],
    7,
    [16, 16],
    2
  );
  SymMultInv = initDims(
    I_classLit,
    [$intern_3, $intern_27],
    [17, 0],
    7,
    [16, 16],
    2
  );
  SymMove_0 = initDims(
    I_classLit,
    [$intern_3, $intern_27],
    [17, 0],
    7,
    [16, 18],
    2
  );
  Sym8Move = initDim(I_classLit, $intern_27, 0, 144, 7, 1);
  SymMoveUD = initDims(
    I_classLit,
    [$intern_3, $intern_27],
    [17, 0],
    7,
    [16, 18],
    2
  );
  FlipS2R = initDim(C_classLit, $intern_26, 0, 336, 7, 1);
  TwistS2R = initDim(C_classLit, $intern_26, 0, 324, 7, 1);
  EPermS2R = initDim(C_classLit, $intern_26, 0, 2768, 7, 1);
  Perm2CombP = initDim(B_classLit, $intern_30, 0, 2768, 7, 1);
  PermInvEdgeSym = initDim(C_classLit, $intern_26, 0, 2768, 7, 1);
  MPermInv = initDim(B_classLit, $intern_30, 0, 24, 7, 1);
  FlipR2S = initDim(C_classLit, $intern_26, 0, 2048, 7, 1);
  TwistR2S = initDim(C_classLit, $intern_26, 0, 2187, 7, 1);
  EPermR2S = initDim(C_classLit, $intern_26, 0, 40320, 7, 1);
  FlipS2RF = initDim(C_classLit, $intern_26, 0, 2688, 7, 1);
  urf1 = new CubieCube_0(2531, 1373, 67026819, 1367);
  urf2 = new CubieCube_0(2089, 1906, 322752913, 2040);
  urfMove = initValues(
    getClassLiteralForArray(B_classLit, 2),
    $intern_3,
    10,
    0,
    [
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        6,
        7,
        8,
        0,
        1,
        2,
        3,
        4,
        5,
        15,
        16,
        17,
        9,
        10,
        11,
        12,
        13,
        14,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        3,
        4,
        5,
        6,
        7,
        8,
        0,
        1,
        2,
        12,
        13,
        14,
        15,
        16,
        17,
        9,
        10,
        11,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        2,
        1,
        0,
        5,
        4,
        3,
        8,
        7,
        6,
        11,
        10,
        9,
        14,
        13,
        12,
        17,
        16,
        15,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        8,
        7,
        6,
        2,
        1,
        0,
        5,
        4,
        3,
        17,
        16,
        15,
        11,
        10,
        9,
        14,
        13,
        12,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        5,
        4,
        3,
        8,
        7,
        6,
        2,
        1,
        0,
        14,
        13,
        12,
        17,
        16,
        15,
        11,
        10,
        9,
      ]),
    ]
  );
  initMove();
  initSym();
}

function $$init(this$static) {
  this$static.ca = initValues(
    getClassLiteralForArray(B_classLit, 1),
    $intern_30,
    0,
    7,
    [0, 1, 2, 3, 4, 5, 6, 7]
  );
  this$static.ea = initValues(
    getClassLiteralForArray(B_classLit, 1),
    $intern_30,
    0,
    7,
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]
  );
}

function $URFConjugate(this$static) {
  !this$static.temps && (this$static.temps = new CubieCube());
  CornMult(urf2, this$static, this$static.temps);
  CornMult(this$static.temps, urf1, this$static);
  EdgeMult(urf2, this$static, this$static.temps);
  EdgeMult(this$static.temps, urf1, this$static);
}

function $copy(this$static, c) {
  var i, i0;
  for (i0 = 0; i0 < 8; i0++) {
    this$static.ca[i0] = c.ca[i0];
  }
  for (i = 0; i < 12; i++) {
    this$static.ea[i] = c.ea[i];
  }
}

function $getCPermSym(this$static) {
  return ESym2CSym(EPermR2S[getNPerm(this$static.ca, 8, false)]);
}

function $getEPermSym(this$static) {
  return EPermR2S[getNPerm(this$static.ea, 8, true)];
}

function $getFlip(this$static) {
  var i, idx;
  idx = 0;
  for (i = 0; i < 11; i++) {
    idx = (idx << 1) | (this$static.ea[i] & 1);
  }
  return idx;
}

function $getTwist(this$static) {
  var i, idx;
  idx = 0;
  for (i = 0; i < 7; i++) {
    idx += (idx << 1) + (this$static.ca[i] >> 3);
  }
  return idx;
}

function $invCubieCube(this$static) {
  var corn, edge;
  !this$static.temps && (this$static.temps = new CubieCube());
  for (edge = 0; edge < 12; edge++) {
    this$static.temps.ea[this$static.ea[edge] >> 1] =
      (((edge << 1) | (this$static.ea[edge] & 1)) << 24) >> 24;
  }
  for (corn = 0; corn < 8; corn++) {
    this$static.temps.ca[this$static.ca[corn] & 7] =
      ((corn | ((32 >> (this$static.ca[corn] >> 3)) & 24)) << 24) >> 24;
  }
  $copy(this$static, this$static.temps);
}

function $selfSymmetry(this$static) {
  var c, cperm, cpermx, d, i, sym, urfInv;
  c = new CubieCube_1(this$static);
  d = new CubieCube();
  cperm = ESym2CSym(EPermR2S[getNPerm(c.ca, 8, false)]) >> 4;
  sym = { l: 0, m: 0, h: 0 };
  for (urfInv = 0; urfInv < 6; urfInv++) {
    cpermx = ESym2CSym(EPermR2S[getNPerm(c.ca, 8, false)]) >> 4;
    if (cperm == cpermx) {
      for (i = 0; i < 16; i++) {
        CornConjugate(c, SymMultInv[0][i], d);
        if (equals_7(d.ca, this$static.ca)) {
          EdgeConjugate(c, SymMultInv[0][i], d);
          equals_7(d.ea, this$static.ea) &&
            (sym = or(
              sym,
              shl(
                { l: 1, m: 0, h: 0 },
                ((urfInv << 4) | i) < 48 ? (urfInv << 4) | i : 48
              )
            ));
        }
      }
    }
    $URFConjugate(c);
    urfInv % 3 == 2 && $invCubieCube(c);
  }
  return sym;
}

function $setCPerm(this$static, idx) {
  setNPerm(this$static.ca, idx, 8, false);
}

function $setEPerm(this$static, idx) {
  setNPerm(this$static.ea, idx, 8, true);
}

function $setFlip(this$static, idx) {
  var i, parity, val;
  parity = 0;
  for (i = 10; i >= 0; --i, idx >>= 1) {
    parity ^= val = idx & 1;
    this$static.ea[i] = (((this$static.ea[i] & -2) | val) << 24) >> 24;
  }
  this$static.ea[11] = (((this$static.ea[11] & -2) | parity) << 24) >> 24;
}

function $setTwist(this$static, idx) {
  var i, twst, val;
  twst = 15;
  for (i = 6; i >= 0; --i, idx = ~~(idx / 3)) {
    twst -= val = idx % 3;
    this$static.ca[i] = (((this$static.ca[i] & 7) | (val << 3)) << 24) >> 24;
  }
  this$static.ca[7] = (((this$static.ca[7] & 7) | (twst % 3 << 3)) << 24) >> 24;
}

function $verify(this$static) {
  var c, cornMask, e, edgeMask, sum;
  sum = 0;
  edgeMask = 0;
  for (e = 0; e < 12; e++) {
    edgeMask |= 1 << (this$static.ea[e] >> 1);
    sum ^= this$static.ea[e] & 1;
  }
  if (edgeMask != 4095) {
    return -2;
  }
  if (sum != 0) {
    return -3;
  }
  cornMask = 0;
  sum = 0;
  for (c = 0; c < 8; c++) {
    cornMask |= 1 << (this$static.ca[c] & 7);
    sum += this$static.ca[c] >> 3;
  }
  if (cornMask != 255) {
    return -4;
  }
  if (sum % 3 != 0) {
    return -5;
  }
  if (
    (getNParity(getNPerm(this$static.ea, 12, true), 12) ^
      getNParity(getNPerm(this$static.ca, 8, false), 8)) !=
    0
  ) {
    return -6;
  }
  return 0;
}

function CornConjugate(a, idx, b) {
  $clinit_CubieCube();
  var corn, ori, oriA, oriB, s, sinv;
  sinv = CubeSym[SymMultInv[0][idx]];
  s = CubeSym[idx];
  for (corn = 0; corn < 8; corn++) {
    oriA = sinv.ca[a.ca[s.ca[corn] & 7] & 7] >> 3;
    oriB = a.ca[s.ca[corn] & 7] >> 3;
    ori = oriA < 3 ? oriB : (3 - oriB) % 3;
    b.ca[corn] =
      (((sinv.ca[a.ca[s.ca[corn] & 7] & 7] & 7) | (ori << 3)) << 24) >> 24;
  }
}

function CornMult(a, b, prod) {
  $clinit_CubieCube();
  var corn, oriA, oriB;
  for (corn = 0; corn < 8; corn++) {
    oriA = a.ca[b.ca[corn] & 7] >> 3;
    oriB = b.ca[corn] >> 3;
    prod.ca[corn] =
      (((a.ca[b.ca[corn] & 7] & 7) | ((oriA + oriB) % 3 << 3)) << 24) >> 24;
  }
}

function CornMultFull(a, b, prod) {
  var corn, ori, oriA, oriB;
  for (corn = 0; corn < 8; corn++) {
    oriA = a.ca[b.ca[corn] & 7] >> 3;
    oriB = b.ca[corn] >> 3;
    ori = oriA + (oriA < 3 ? oriB : 6 - oriB);
    ori = (ori % 3) + (oriA < 3 == oriB < 3 ? 0 : 3);
    prod.ca[corn] = (((a.ca[b.ca[corn] & 7] & 7) | (ori << 3)) << 24) >> 24;
  }
}

function CubieCube() {
  $clinit_CubieCube();
  $$init(this);
}

function CubieCube_0(cperm, twist, eperm, flip) {
  $$init(this);
  setNPerm(this.ca, cperm, 8, false);
  $setTwist(this, twist);
  setNPerm(this.ea, eperm, 12, true);
  $setFlip(this, flip);
}

function CubieCube_1(c) {
  $$init(this);
  $copy(this, c);
}

function ESym2CSym(idx) {
  $clinit_CubieCube();
  return idx ^ (($intern_28 >> ((idx & 15) << 1)) & 3);
}

function EdgeConjugate(a, idx, b) {
  $clinit_CubieCube();
  var ed, s, sinv;
  sinv = CubeSym[SymMultInv[0][idx]];
  s = CubeSym[idx];
  for (ed = 0; ed < 12; ed++) {
    b.ea[ed] =
      ((sinv.ea[a.ea[s.ea[ed] >> 1] >> 1] ^
        (a.ea[s.ea[ed] >> 1] & 1) ^
        (s.ea[ed] & 1)) <<
        24) >>
      24;
  }
}

function EdgeMult(a, b, prod) {
  $clinit_CubieCube();
  var ed;
  for (ed = 0; ed < 12; ed++) {
    prod.ea[ed] = ((a.ea[b.ea[ed] >> 1] ^ (b.ea[ed] & 1)) << 24) >> 24;
  }
}

function getPermSymInv(idx, sym, isCorner) {
  $clinit_CubieCube();
  var idxi;
  idxi = PermInvEdgeSym[idx];
  isCorner && (idxi = idxi ^ (($intern_28 >> ((idxi & 15) << 1)) & 3));
  return (idxi & 65520) | SymMult[idxi & 15][sym];
}

function getSkipMoves(ssym) {
  $clinit_CubieCube();
  var i, ret;
  ret = 0;
  for (i = 1; neq((ssym = shr(ssym, 1)), { l: 0, m: 0, h: 0 }); i++) {
    eq(and(ssym, { l: 1, m: 0, h: 0 }), { l: 1, m: 0, h: 0 }) &&
      (ret |= firstMoveSym[i]);
  }
  return ret;
}

function initMove() {
  var a, p;
  moveCube[0] = new CubieCube_0(15120, 0, 119750400, 0);
  moveCube[3] = new CubieCube_0(21021, 1494, 323403417, 0);
  moveCube[6] = new CubieCube_0(8064, 1236, 29441808, 550);
  moveCube[9] = new CubieCube_0(9, 0, 5880, 0);
  moveCube[12] = new CubieCube_0(1230, 412, 2949660, 0);
  moveCube[15] = new CubieCube_0(224, 137, 328552, 137);
  for (a = 0; a < 18; a += 3) {
    for (p = 0; p < 2; p++) {
      moveCube[a + p + 1] = new CubieCube();
      EdgeMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
      CornMult(moveCube[a + p], moveCube[a], moveCube[a + p + 1]);
    }
  }
}

function initPermSym2Raw() {
  $clinit_CubieCube();
  var cc, i, i0;
  initSym2Raw(
    40320,
    EPermS2R,
    EPermR2S,
    (SymStatePerm = initDim(C_classLit, $intern_26, 0, 2768, 7, 1)),
    2
  );
  cc = new CubieCube();
  for (i0 = 0; i0 < 2768; i0++) {
    $setEPerm(cc, EPermS2R[i0]);
    Perm2CombP[i0] =
      ((getComb(cc.ea, 0, true) + getNParity(EPermS2R[i0], 8) * 70) << 24) >>
      24;
    $invCubieCube(cc);
    PermInvEdgeSym[i0] = EPermR2S[getNPerm(cc.ea, 8, true)];
  }
  for (i = 0; i < 24; i++) {
    setNPerm(cc.ea, i, 12, true);
    $invCubieCube(cc);
    MPermInv[i] = (getNPerm(cc.ea, 12, true) % 24 << 24) >> 24;
  }
}

function initSym() {
  var c, d, f2, i, i0, i1, i2, j, j0, j1, k, lr2, m, s, t, u4;
  c = new CubieCube();
  d = new CubieCube();
  f2 = new CubieCube_0(28783, 0, 259268407, 0);
  u4 = new CubieCube_0(15138, 0, 119765538, 7);
  lr2 = new CubieCube_0(5167, 0, 83473207, 0);
  for (i0 = 0; i0 < 8; i0++) {
    lr2.ca[i0] = narrow_byte(lr2.ca[i0] | 24);
  }
  for (i1 = 0; i1 < 16; i1++) {
    CubeSym[i1] = new CubieCube_1(c);
    CornMultFull(c, u4, d);
    EdgeMult(c, u4, d);
    t = d;
    d = c;
    c = t;
    if (i1 % 4 == 3) {
      CornMultFull(t, lr2, d);
      EdgeMult(t, lr2, d);
      t = d;
      d = c;
      c = t;
    }
    if (i1 % 8 == 7) {
      CornMultFull(t, f2, d);
      EdgeMult(t, f2, d);
      t = d;
      d = c;
      c = t;
    }
  }
  for (i2 = 0; i2 < 16; i2++) {
    for (j0 = 0; j0 < 16; j0++) {
      CornMultFull(CubeSym[i2], CubeSym[j0], c);
      for (k = 0; k < 16; k++) {
        if (equals_7(CubeSym[k].ca, c.ca)) {
          SymMult[i2][j0] = k;
          SymMultInv[k][j0] = i2;
          break;
        }
      }
    }
  }
  for (j1 = 0; j1 < 18; j1++) {
    for (s = 0; s < 16; s++) {
      CornConjugate(moveCube[j1], SymMultInv[0][s], c);
      for (m = 0; m < 18; m++) {
        if (equals_7(moveCube[m].ca, c.ca)) {
          SymMove_0[s][j1] = m;
          SymMoveUD[s][($clinit_Util(), std2ud)[j1]] = std2ud[m];
          break;
        }
      }
      s % 2 == 0 && (Sym8Move[(j1 << 3) | (s >> 1)] = SymMove_0[s][j1]);
    }
  }
  for (i = 0; i < 18; i++) {
    moveCubeSym[i] = $selfSymmetry(moveCube[i]);
    j = i;
    for (s = 0; s < 48; s++) {
      SymMove_0[s % 16][j] < i && (firstMoveSym[s] |= 1 << i);
      s % 16 == 15 && (j = urfMove[2][j]);
    }
  }
}

function initSym2Raw(N_RAW, Sym2Raw, Raw2Sym, SymState, coord) {
  $clinit_CubieCube();
  var c, count, d, i, idx, isEdge, s, symIdx, sym_inc;
  c = new CubieCube();
  d = new CubieCube();
  count = 0;
  idx = 0;
  sym_inc = coord >= 2 ? 1 : 2;
  isEdge = coord != 1;
  for (i = 0; i < N_RAW; i++) {
    if (Raw2Sym[i] != 0) {
      continue;
    }
    switch (coord) {
      case 0:
        $setFlip(c, i);
        break;
      case 1:
        $setTwist(c, i);
        break;
      case 2:
        setNPerm(c.ea, i, 8, true);
    }
    for (s = 0; s < 16; s += sym_inc) {
      isEdge ? EdgeConjugate(c, s, d) : CornConjugate(c, s, d);
      switch (coord) {
        case 0:
          idx = $getFlip(d);
          break;
        case 1:
          idx = $getTwist(d);
          break;
        case 2:
          idx = getNPerm(d.ea, 8, true);
      }
      coord == 0 && (FlipS2RF[(count << 3) | (s >> 1)] = idx & $intern_20);
      idx == i &&
        (SymState[count] =
          (SymState[count] | (1 << ~~(s / sym_inc))) & $intern_20);
      symIdx = ~~(((count << 4) | s) / sym_inc);
      Raw2Sym[idx] = symIdx & $intern_20;
    }
    Sym2Raw[count++] = i & $intern_20;
  }
  return count;
}

defineClass(7, 1, { 7: 1 }, CubieCube, CubieCube_0, CubieCube_1);
_.toString$ = function toString_16() {
  var i, i0, sb;
  sb = new StringBuffer();
  for (i0 = 0; i0 < 8; i0++) {
    $append_1(sb, "|" + (this.ca[i0] & 7) + " " + (this.ca[i0] >> 3));
  }
  sb.string += "\n";
  for (i = 0; i < 12; i++) {
    $append_1(sb, "|" + (this.ea[i] >> 1) + " " + (this.ea[i] & 1));
  }
  return sb.string;
};
_.temps = null;
var CubeSym,
  EPermR2S,
  EPermS2R,
  FlipR2S,
  FlipS2R,
  FlipS2RF,
  MPermInv,
  Perm2CombP,
  PermInvEdgeSym,
  Sym8Move,
  SymMove_0,
  SymMoveUD,
  SymMult,
  SymMultInv,
  SymStateFlip,
  SymStatePerm,
  SymStateTwist,
  TwistR2S,
  TwistS2R,
  firstMoveSym,
  moveCube,
  moveCubeSym,
  urf1,
  urf2,
  urfMove;
var Lorg_cubing_min2phase_client_CubieCube_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "CubieCube",
  7
);
function $clinit_GreetingService_Proxy() {
  $clinit_GreetingService_Proxy = emptyMethod;
  SERIALIZER = new GreetingService_TypeSerializer();
}

function $createStreamWriter(this$static) {
  var toReturn, clientSerializationStreamWriter;
  toReturn =
    ((clientSerializationStreamWriter = new ClientSerializationStreamWriter(
      this$static.moduleBaseURL,
      this$static.serializationPolicyName
    )),
    $reset(clientSerializationStreamWriter.objectMap),
    $reset(clientSerializationStreamWriter.stringMap),
    (clientSerializationStreamWriter.stringTable.array = initDim(
      Ljava_lang_Object_2_classLit,
      $intern_3,
      1,
      0,
      3,
      1
    )),
    (clientSerializationStreamWriter.encodeBuffer = new StringBuilder()),
    $writeString(
      clientSerializationStreamWriter,
      clientSerializationStreamWriter.moduleBaseURL
    ),
    $writeString(
      clientSerializationStreamWriter,
      clientSerializationStreamWriter.serializationPolicyStrongName
    ),
    clientSerializationStreamWriter);
  return toReturn;
}

function $greetServer(this$static, input_0, callback) {
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static);
  try {
    streamWriter =
      ($isStatsAvailable() &&
        $stats_0(
          $timeStat(helper.statsContext, helper.fullServiceName, "begin")
        ),
      (helper.streamWriter = $createStreamWriter(helper.this$01)),
      $writeString(
        helper.streamWriter,
        "org.cubing.min2phase.client.GreetingService"
      ),
      $writeString(helper.streamWriter, helper.methodName),
      $writeInt(helper.streamWriter, 1),
      helper.streamWriter);
    $writeInt(
      streamWriter,
      $addString(streamWriter, "java.lang.String/2004016611")
    );
    $writeInt(streamWriter, $addString(streamWriter, input_0));
    $finish_0(
      helper,
      callback,
      $clinit_RequestCallbackAdapter$ResponseReader()
    );
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 61)) {
      $onFailure(callback);
    } else throw unwrap($e0);
  }
}

function GreetingService_Proxy() {
  $clinit_GreetingService_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(109, 108, {}, GreetingService_Proxy);
var SERIALIZER;
var Lorg_cubing_min2phase_client_GreetingService_1Proxy_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "GreetingService_Proxy",
  109
);
function $clinit_GreetingService_TypeSerializer() {
  var result, result_0;
  $clinit_GreetingService_TypeSerializer = emptyMethod;
  methodMapNative_0 =
    ((result = {}),
    (result[
      "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533"
    ] = [instantiate, deserialize, serialize]),
    (result["com.google.gwt.user.client.rpc.RpcTokenException/2345075298"] = [
      instantiate_0,
      deserialize_0,
    ]),
    (result["com.google.gwt.user.client.rpc.XsrfToken/4254043109"] = [
      undefined,
      undefined,
      serialize_0,
    ]),
    (result["java.lang.IllegalArgumentException/1755012560"] = [
      instantiate_1,
      deserialize_1,
    ]),
    (result["java.lang.NumberFormatException/3305228476"] = [
      instantiate_2,
      deserialize_2,
    ]),
    (result["java.lang.String/2004016611"] = [
      instantiate_3,
      deserialize_3,
      serialize_1,
    ]),
    result);
  result_0 = [];
  result_0[
    getHashCode(
      Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit
    )
  ] =
    "com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533";
  result_0[
    getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)
  ] = "com.google.gwt.user.client.rpc.RpcTokenException/2345075298";
  result_0[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] =
    "com.google.gwt.user.client.rpc.XsrfToken/4254043109";
  result_0[getHashCode(Ljava_lang_IllegalArgumentException_2_classLit)] =
    "java.lang.IllegalArgumentException/1755012560";
  result_0[getHashCode(Ljava_lang_NumberFormatException_2_classLit)] =
    "java.lang.NumberFormatException/3305228476";
  result_0[getHashCode(Ljava_lang_String_2_classLit)] =
    "java.lang.String/2004016611";
}

function GreetingService_TypeSerializer() {
  $clinit_GreetingService_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0);
}

defineClass(147, 146, {}, GreetingService_TypeSerializer);
var methodMapNative_0;
var Lorg_cubing_min2phase_client_GreetingService_1TypeSerializer_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "GreetingService_TypeSerializer",
  147
);
function $onModuleLoad_0(this$static) {
  var closeButton,
    dialogBox,
    dialogVPanel,
    errorLabel,
    handler,
    nameField,
    sendButton,
    serverResponseLabel,
    textToServerLabel,
    length_0;
  $solution(
    new Search(),
    "DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL"
  );
  $solution(
    new Search(),
    "UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU"
  );
  debugger;
  sendButton = new Button("Send");
  nameField = new TextBox();
  $setText_1(
    nameField,
    $solution(
      new Search(),
      "DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL"
    )
  );
  errorLabel = new Label();
  setStyleName(($clinit_DOM(), sendButton.element), "sendButton", true);
  $add_0(get_0("nameFieldContainer"), nameField);
  $add_0(get_0("sendButtonContainer"), sendButton);
  $add_0(get_0("errorLabelContainer"), errorLabel);
  ($clinit_FocusWidget(), impl).focus_0(nameField.element);
  length_0 = $getPropertyString(nameField.element, "value").length;
  length_0 > 0 && $setSelectionRange(nameField, length_0);
  dialogBox = new DialogBox();
  $setText_0(dialogBox.caption, "Remote Procedure Call");
  dialogBox.isAnimationEnabled = true;
  closeButton = new Button("Close");
  closeButton.element.id = "closeButton";
  textToServerLabel = new Label();
  serverResponseLabel = new HTML();
  dialogVPanel = new VerticalPanel();
  setStyleName(dialogVPanel.element, "dialogVPanel", true);
  $add_1(dialogVPanel, new HTML_0("<b>Sending name to the server:</b>"));
  $add_1(dialogVPanel, textToServerLabel);
  $add_1(dialogVPanel, new HTML_0("<br><b>Server replies:</b>"));
  $add_1(dialogVPanel, serverResponseLabel);
  $setHorizontalAlignment(
    dialogVPanel,
    ($clinit_HasHorizontalAlignment(), ALIGN_RIGHT)
  );
  $add_1(dialogVPanel, closeButton);
  $setWidget(dialogBox.decPanel, dialogVPanel);
  $maybeUpdateSize(dialogBox);
  $addDomHandler(
    closeButton,
    new Org_cubing_min2phase$1(dialogBox, sendButton),
    ($clinit_ClickEvent(), $clinit_ClickEvent(), TYPE)
  );
  handler = new Org_cubing_min2phase$1MyHandler(
    this$static,
    errorLabel,
    nameField,
    sendButton,
    textToServerLabel,
    serverResponseLabel,
    dialogBox,
    closeButton
  );
  $addDomHandler(sendButton, handler, (null, TYPE));
  $addDomHandler(
    nameField,
    handler,
    ($clinit_KeyUpEvent(), $clinit_KeyUpEvent(), TYPE_0)
  );
}

function Org_cubing_min2phase() {
  this.greetingService = new GreetingService_Proxy();
}

defineClass(98, 1, {}, Org_cubing_min2phase);
var Lorg_cubing_min2phase_client_Org_1cubing_1min2phase_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Org_cubing_min2phase",
  98
);
function Org_cubing_min2phase$1(val$dialogBox, val$sendButton) {
  this.val$dialogBox2 = val$dialogBox;
  this.val$sendButton3 = val$sendButton;
}

defineClass(99, 1, { 247: 1, 41: 1 }, Org_cubing_min2phase$1);
_.onClick = function onClick(event_0) {
  $hide_0(this.val$dialogBox2, false);
  $setEnabled(this.val$sendButton3, true);
  $setFocus(this.val$sendButton3);
};
var Lorg_cubing_min2phase_client_Org_1cubing_1min2phase$1_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Org_cubing_min2phase/1",
  99
);
function $sendNameToServer(this$static) {
  var textToServer;
  $setText_0(this$static.val$errorLabel2, "");
  textToServer = $getPropertyString(
    $getElement(this$static.val$nameField3),
    "value"
  );
  if (!isValidName(textToServer)) {
    $setText_0(
      this$static.val$errorLabel2,
      "Please enter at least four characters"
    );
    return;
  }
  $setEnabled(this$static.val$sendButton4, false);
  $setText_0(this$static.val$textToServerLabel5, textToServer);
  $setText_0(this$static.val$serverResponseLabel6, "");
  $greetServer(
    this$static.this$01.greetingService,
    textToServer,
    new Org_cubing_min2phase$1MyHandler$1(
      this$static.val$dialogBox7,
      this$static.val$serverResponseLabel6,
      this$static.val$closeButton8
    )
  );
}

function Org_cubing_min2phase$1MyHandler(
  this$0,
  val$errorLabel,
  val$nameField,
  val$sendButton,
  val$textToServerLabel,
  val$serverResponseLabel,
  val$dialogBox,
  val$closeButton
) {
  this.this$01 = this$0;
  this.val$errorLabel2 = val$errorLabel;
  this.val$nameField3 = val$nameField;
  this.val$sendButton4 = val$sendButton;
  this.val$textToServerLabel5 = val$textToServerLabel;
  this.val$serverResponseLabel6 = val$serverResponseLabel;
  this.val$dialogBox7 = val$dialogBox;
  this.val$closeButton8 = val$closeButton;
}

defineClass(100, 1, { 247: 1, 282: 1, 41: 1 }, Org_cubing_min2phase$1MyHandler);
_.onClick = function onClick_0(event_0) {
  $sendNameToServer(this);
};
var Lorg_cubing_min2phase_client_Org_1cubing_1min2phase$1MyHandler_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Org_cubing_min2phase/1MyHandler",
  100
);
function $onFailure(this$static) {
  $setText(this$static.val$dialogBox2, "Remote Procedure Call - Failure");
  $setStyleName_0(this$static.val$serverResponseLabel3, true);
  $setHTML(
    this$static.val$serverResponseLabel3,
    "An error occurred while attempting to contact the server. Please check your network connection and try again."
  );
  $center(this$static.val$dialogBox2);
  $setFocus(this$static.val$closeButton4);
}

function $onSuccess(this$static, result) {
  $setText(this$static.val$dialogBox2, "Remote Procedure Call");
  $setStyleName_0(this$static.val$serverResponseLabel3, false);
  $setHTML(this$static.val$serverResponseLabel3, result);
  $center(this$static.val$dialogBox2);
  $setFocus(this$static.val$closeButton4);
}

function Org_cubing_min2phase$1MyHandler$1(
  val$dialogBox,
  val$serverResponseLabel,
  val$closeButton
) {
  this.val$dialogBox2 = val$dialogBox;
  this.val$serverResponseLabel3 = val$serverResponseLabel;
  this.val$closeButton4 = val$closeButton;
}

defineClass(101, 1, {}, Org_cubing_min2phase$1MyHandler$1);
var Lorg_cubing_min2phase_client_Org_1cubing_1min2phase$1MyHandler$1_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Org_cubing_min2phase/1MyHandler/1",
  101
);
function $initPhase2(
  this$static,
  p2corn,
  p2csym,
  p2edge,
  p2esym,
  p2mid,
  edgei,
  corni
) {
  var depth2, i, i0, prun, ret;
  prun = max_0(
    getPruning(
      ($clinit_CoordCube(), EPermCCombPPrun),
      (edgei >> 4) * 140 +
        CCombPConj[($clinit_CubieCube(), Perm2CombP)[corni >> 4] & 255][
          SymMultInv[edgei & 15][corni & 15]
        ]
    ),
    max_0(
      getPruning(
        EPermCCombPPrun,
        p2edge * 140 +
          CCombPConj[Perm2CombP[p2corn] & 255][SymMultInv[p2esym][p2csym]]
      ),
      getPruning(MCPermPrun, p2corn * 24 + MPermConj[p2mid][p2csym])
    )
  );
  if (prun > this$static.maxDep2) {
    return prun - this$static.maxDep2;
  }
  for (depth2 = this$static.maxDep2; depth2 >= prun; depth2--) {
    ret = $phase2(
      this$static,
      p2edge,
      p2esym,
      p2corn,
      p2csym,
      p2mid,
      depth2,
      this$static.depth1,
      10
    );
    if (ret < 0) {
      break;
    }
    depth2 -= ret;
    this$static.solLen = 0;
    this$static.solution = new Util$Solution();
    $setArgs(
      this$static.solution,
      this$static.verbose,
      this$static.urfIdx,
      this$static.depth1
    );
    for (i0 = 0; i0 < this$static.depth1 + depth2; i0++) {
      $appendSolMove(this$static.solution, this$static.move[i0]);
    }
    for (i = this$static.preMoveLen - 1; i >= 0; i--) {
      $appendSolMove(this$static.solution, this$static.preMoves[i]);
    }
    this$static.solLen = this$static.solution.length_0;
  }
  if (depth2 != this$static.maxDep2) {
    this$static.maxDep2 = min_0(
      MAX_DEPTH2,
      this$static.solLen - this$static.length1 - 1
    );
    return gte(this$static.probe, this$static.probeMin) ? 0 : 1;
  }
  return 1;
}

function $initPhase2Pre(this$static) {
  var corni,
    edgei,
    i,
    lastMove,
    lastPre,
    m,
    p2corn,
    p2csym,
    p2edge,
    p2esym,
    p2mid,
    p2switch,
    p2switchMask,
    p2switchMax,
    ret;
  this$static.isRec = false;
  if (
    gte(
      this$static.probe,
      !this$static.solution ? this$static.probeMax : this$static.probeMin
    )
  ) {
    return 0;
  }
  this$static.probe = add_1(this$static.probe, { l: 1, m: 0, h: 0 });
  for (i = this$static.valid1; i < this$static.depth1; i++) {
    CornMult(
      this$static.phase1Cubie[i],
      ($clinit_CubieCube(), moveCube)[this$static.move[i]],
      this$static.phase1Cubie[i + 1]
    );
    EdgeMult(
      this$static.phase1Cubie[i],
      moveCube[this$static.move[i]],
      this$static.phase1Cubie[i + 1]
    );
  }
  this$static.valid1 = this$static.depth1;
  p2corn = $getCPermSym(this$static.phase1Cubie[this$static.depth1]);
  p2csym = p2corn & 15;
  p2corn >>= 4;
  p2edge = $getEPermSym(this$static.phase1Cubie[this$static.depth1]);
  p2esym = p2edge & 15;
  p2edge >>= 4;
  p2mid =
    getNPerm(this$static.phase1Cubie[this$static.depth1].ea, 12, true) % 24;
  edgei = getPermSymInv(p2edge, p2esym, false);
  corni = getPermSymInv(p2corn, p2csym, true);
  lastMove =
    this$static.depth1 == 0 ? -1 : this$static.move[this$static.depth1 - 1];
  lastPre =
    this$static.preMoveLen == 0
      ? -1
      : this$static.preMoves[this$static.preMoveLen - 1];
  ret = 0;
  p2switchMax =
    (this$static.preMoveLen == 0 ? 1 : 2) * (this$static.depth1 == 0 ? 1 : 2);
  for (
    p2switch = 0, p2switchMask = (1 << p2switchMax) - 1;
    p2switch < p2switchMax;
    p2switch++
  ) {
    if (((p2switchMask >> p2switch) & 1) != 0) {
      p2switchMask &= ~(1 << p2switch);
      ret = $initPhase2(
        this$static,
        p2corn,
        p2csym,
        p2edge,
        p2esym,
        p2mid,
        edgei,
        corni
      );
      if (ret == 0 || ret > 2) {
        break;
      } else ret == 2 && (p2switchMask &= 4 << p2switch);
    }
    if (p2switchMask == 0) {
      break;
    }
    if ((p2switch & 1) == 0 && this$static.depth1 > 0) {
      m = ($clinit_Util(), std2ud)[~~(lastMove / 3) * 3 + 1];
      this$static.move[this$static.depth1 - 1] =
        ud2std[m] * 2 - this$static.move[this$static.depth1 - 1];
      p2mid = ($clinit_CoordCube(), MPermMove)[p2mid][m];
      p2corn = CPermMove[p2corn][($clinit_CubieCube(), SymMoveUD)[p2csym][m]];
      p2csym = SymMult[p2corn & 15][p2csym];
      p2corn >>= 4;
      p2edge = EPermMove[p2edge][SymMoveUD[p2esym][m]];
      p2esym = SymMult[p2edge & 15][p2esym];
      p2edge >>= 4;
      corni = getPermSymInv(p2corn, p2csym, true);
      edgei = getPermSymInv(p2edge, p2esym, false);
    } else if (this$static.preMoveLen > 0) {
      m = ($clinit_Util(), std2ud)[~~(lastPre / 3) * 3 + 1];
      this$static.preMoves[this$static.preMoveLen - 1] =
        ud2std[m] * 2 - this$static.preMoves[this$static.preMoveLen - 1];
      p2mid = ($clinit_CubieCube(), MPermInv)[
        ($clinit_CoordCube(), MPermMove)[MPermInv[p2mid]][m]
      ];
      p2corn = CPermMove[corni >> 4][SymMoveUD[corni & 15][m]];
      corni = (p2corn & -16) | SymMult[p2corn & 15][corni & 15];
      p2corn = getPermSymInv(corni >> 4, corni & 15, true);
      p2csym = p2corn & 15;
      p2corn >>= 4;
      p2edge = EPermMove[edgei >> 4][SymMoveUD[edgei & 15][m]];
      edgei = (p2edge & -16) | SymMult[p2edge & 15][edgei & 15];
      p2edge = getPermSymInv(edgei >> 4, edgei & 15, false);
      p2esym = p2edge & 15;
      p2edge >>= 4;
    }
  }
  this$static.depth1 > 0 &&
    (this$static.move[this$static.depth1 - 1] = lastMove);
  this$static.preMoveLen > 0 &&
    (this$static.preMoves[this$static.preMoveLen - 1] = lastPre);
  return ret == 0 ? 0 : 2;
}

function $initSearch(this$static) {
  var i;
  this$static.conjMask = 0;
  this$static.selfSym = $selfSymmetry(this$static.cc);
  this$static.conjMask |= neq(
    and(shr(this$static.selfSym, 16), { l: $intern_20, m: 0, h: 0 }),
    { l: 0, m: 0, h: 0 }
  )
    ? 18
    : 0;
  this$static.conjMask |= neq(
    and(shr(this$static.selfSym, 32), { l: $intern_20, m: 0, h: 0 }),
    { l: 0, m: 0, h: 0 }
  )
    ? 36
    : 0;
  this$static.conjMask |= neq(
    and(shr(this$static.selfSym, 48), { l: $intern_20, m: 0, h: 0 }),
    { l: 0, m: 0, h: 0 }
  )
    ? 56
    : 0;
  this$static.selfSym = and(this$static.selfSym, {
    l: $intern_9,
    m: $intern_9,
    h: 15,
  });
  this$static.maxPreMoves = this$static.conjMask > 7 ? 0 : 20;
  for (i = 0; i < 6; i++) {
    $copy(this$static.urfCubieCube[i], this$static.cc);
    $setWithPrun(this$static.urfCoordCube[i], this$static.urfCubieCube[i], 20);
    $URFConjugate(this$static.cc);
    i % 3 == 2 && $invCubieCube(this$static.cc);
  }
}

function $phase1(this$static, node, ssym, maxl, lm) {
  var axis_0, m, power, prun, ret, skipMoves;
  if (node.prun == 0 && maxl < 5) {
    if (this$static.allowShorter || maxl == 0) {
      this$static.depth1 -= maxl;
      ret = $initPhase2Pre(this$static);
      this$static.depth1 += maxl;
      return ret;
    } else {
      return 1;
    }
  }
  skipMoves = getSkipMoves(fromInt(ssym));
  for (axis_0 = 0; axis_0 < 18; axis_0 += 3) {
    if (axis_0 == lm || axis_0 == lm - 9) {
      continue;
    }
    for (power = 0; power < 3; power++) {
      m = axis_0 + power;
      if (
        (this$static.isRec &&
          m != this$static.move[this$static.depth1 - maxl]) ||
        (skipMoves != 0 && (skipMoves & (1 << m)) != 0)
      ) {
        continue;
      }
      prun = $doMovePrun(this$static.nodeUD[maxl], node, m);
      if (prun > maxl) {
        break;
      } else if (prun == maxl) {
        continue;
      }
      prun = $doMovePrunConj(this$static.nodeUD[maxl], node, m);
      if (prun > maxl) {
        break;
      } else if (prun == maxl) {
        continue;
      }
      this$static.move[this$static.depth1 - maxl] = m;
      this$static.valid1 = min_0(this$static.valid1, this$static.depth1 - maxl);
      ret = $phase1(
        this$static,
        this$static.nodeUD[maxl],
        ssym & toInt(($clinit_CubieCube(), moveCubeSym)[m]),
        maxl - 1,
        axis_0
      );
      if (ret == 0) {
        return 0;
      } else if (ret >= 2) {
        break;
      }
    }
  }
  return 1;
}

function $phase1PreMoves(this$static, maxl, lm, cc, ssym) {
  var m, ret, skipMoves;
  this$static.preMoveLen = this$static.maxPreMoves - maxl;
  if (
    this$static.isRec
      ? this$static.depth1 == this$static.length1 - this$static.preMoveLen
      : this$static.preMoveLen == 0 || ((225207 >> lm) & 1) == 0
  ) {
    this$static.depth1 = this$static.length1 - this$static.preMoveLen;
    this$static.phase1Cubie[0] = cc;
    this$static.allowShorter =
      this$static.depth1 == MIN_P1LENGTH_PRE && this$static.preMoveLen != 0;
    if (
      $setWithPrun(
        this$static.nodeUD[this$static.depth1 + 1],
        cc,
        this$static.depth1
      ) &&
      $phase1(
        this$static,
        this$static.nodeUD[this$static.depth1 + 1],
        ssym,
        this$static.depth1,
        -1
      ) == 0
    ) {
      return 0;
    }
  }
  if (
    maxl == 0 ||
    this$static.preMoveLen + MIN_P1LENGTH_PRE >= this$static.length1
  ) {
    return 1;
  }
  skipMoves = getSkipMoves(fromInt(ssym));
  (maxl == 1 ||
    this$static.preMoveLen + 1 + MIN_P1LENGTH_PRE >= this$static.length1) &&
    (skipMoves |= 225207);
  lm = ~~(lm / 3) * 3;
  for (m = 0; m < 18; m++) {
    if (m == lm || m == lm - 9 || m == lm + 9) {
      m += 2;
      continue;
    }
    if (
      (this$static.isRec &&
        m != this$static.preMoves[this$static.maxPreMoves - maxl]) ||
      (skipMoves & (1 << m)) != 0
    ) {
      continue;
    }
    CornMult(
      ($clinit_CubieCube(), moveCube)[m],
      cc,
      this$static.preMoveCubes[maxl]
    );
    EdgeMult(moveCube[m], cc, this$static.preMoveCubes[maxl]);
    this$static.preMoves[this$static.maxPreMoves - maxl] = m;
    ret = $phase1PreMoves(
      this$static,
      maxl - 1,
      m,
      this$static.preMoveCubes[maxl],
      ssym & toInt(moveCubeSym[m])
    );
    if (ret == 0) {
      return 0;
    }
  }
  return 1;
}

function $phase2(this$static, edge, esym, corn, csym, mid, maxl, depth, lm) {
  var corni, cornx, csymx, edgei, edgex, esymx, m, midx, moveMask, prun, ret;
  if (edge == 0 && corn == 0 && mid == 0) {
    return maxl;
  }
  moveMask = ($clinit_Util(), ckmv2bit)[lm];
  for (m = 0; m < 10; m++) {
    if (((moveMask >> m) & 1) != 0) {
      m += (66 >> m) & 3;
      continue;
    }
    midx = ($clinit_CoordCube(), MPermMove)[mid][m];
    cornx = CPermMove[corn][($clinit_CubieCube(), SymMoveUD)[csym][m]];
    csymx = SymMult[cornx & 15][csym];
    cornx >>= 4;
    edgex = EPermMove[edge][SymMoveUD[esym][m]];
    esymx = SymMult[edgex & 15][esym];
    edgex >>= 4;
    edgei = getPermSymInv(edgex, esymx, false);
    corni = getPermSymInv(cornx, csymx, true);
    prun = getPruning(
      EPermCCombPPrun,
      (edgei >> 4) * 140 +
        CCombPConj[Perm2CombP[corni >> 4] & 255][
          SymMultInv[edgei & 15][corni & 15]
        ]
    );
    if (prun > maxl + 1) {
      return maxl - prun + 1;
    } else if (prun >= maxl) {
      m += (66 >> m) & 3 & (maxl - prun);
      continue;
    }
    prun = max_0(
      getPruning(MCPermPrun, cornx * 24 + MPermConj[midx][csymx]),
      getPruning(
        EPermCCombPPrun,
        edgex * 140 +
          CCombPConj[Perm2CombP[cornx] & 255][SymMultInv[esymx][csymx]]
      )
    );
    if (prun >= maxl) {
      m += (66 >> m) & 3 & (maxl - prun);
      continue;
    }
    ret = $phase2(
      this$static,
      edgex,
      esymx,
      cornx,
      csymx,
      midx,
      maxl - 1,
      depth + 1,
      m
    );
    if (ret >= 0) {
      this$static.move[depth] = ud2std[m];
      return ret;
    }
    if (ret < -2) {
      break;
    }
    ret < -1 && (m += (66 >> m) & 3);
  }
  return -1;
}

function $search(this$static) {
  for (
    this$static.length1 = this$static.isRec ? this$static.length1 : 0;
    this$static.length1 < this$static.solLen;
    this$static.length1++
  ) {
    this$static.maxDep2 = min_0(
      MAX_DEPTH2,
      this$static.solLen - this$static.length1 - 1
    );
    for (
      this$static.urfIdx = this$static.isRec ? this$static.urfIdx : 0;
      this$static.urfIdx < 6;
      this$static.urfIdx++
    ) {
      if ((this$static.conjMask & (1 << this$static.urfIdx)) != 0) {
        continue;
      }
      if (
        $phase1PreMoves(
          this$static,
          this$static.maxPreMoves,
          -30,
          this$static.urfCubieCube[this$static.urfIdx],
          toInt(and(this$static.selfSym, { l: $intern_20, m: 0, h: 0 }))
        ) == 0
      ) {
        return !this$static.solution
          ? "Error 8"
          : $toString_2(this$static.solution);
      }
    }
  }
  return !this$static.solution ? "Error 7" : $toString_2(this$static.solution);
}

function $solution(this$static, facelets) {
  var check;
  check = $verify_0(this$static, facelets);
  if (check != 0) {
    return "Error " + (check < 0 ? -check : check);
  }
  this$static.solLen = 22;
  this$static.probe = { l: 0, m: 0, h: 0 };
  this$static.probeMax = { l: 3531008, m: 23, h: 0 };
  this$static.probeMin = { l: 0, m: 0, h: 0 };
  this$static.verbose = 0;
  this$static.solution = null;
  this$static.isRec = false;
  init_0(false);
  $initSearch(this$static);
  return $search(this$static);
}

function $verify_0(this$static, facelets) {
  var center, count, f, i;
  count = 0;
  f = initDim(B_classLit, $intern_30, 0, 54, 7, 1);
  try {
    center = _String(
      initValues(getClassLiteralForArray(C_classLit, 1), $intern_26, 0, 7, [
        facelets.charCodeAt(4),
        facelets.charCodeAt(13),
        facelets.charCodeAt(22),
        facelets.charCodeAt(31),
        facelets.charCodeAt(40),
        facelets.charCodeAt(49),
      ])
    );
    for (i = 0; i < 54; i++) {
      f[i] =
        ($indexOf_0(center, fromCodePoint(facelets.charCodeAt(i))) << 24) >> 24;
      if (f[i] == -1) {
        return -1;
      }
      count += 1 << (f[i] << 2);
    }
  } catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 9)) {
      return -1;
    } else throw unwrap($e0);
  }
  if (count != 10066329) {
    return -1;
  }
  toCubieCube(f, this$static.cc);
  return $verify(this$static.cc);
}

function Search() {
  var i, i0, i1;
  this.move = initDim(I_classLit, $intern_27, 0, 31, 7, 1);
  this.nodeUD = initDim(
    Lorg_cubing_min2phase_client_CoordCube_2_classLit,
    $intern_3,
    31,
    21,
    0,
    1
  );
  this.nodeRL = initDim(
    Lorg_cubing_min2phase_client_CoordCube_2_classLit,
    $intern_3,
    31,
    21,
    0,
    1
  );
  this.nodeFB = initDim(
    Lorg_cubing_min2phase_client_CoordCube_2_classLit,
    $intern_3,
    31,
    21,
    0,
    1
  );
  this.cc = new CubieCube();
  this.urfCubieCube = initDim(
    Lorg_cubing_min2phase_client_CubieCube_2_classLit,
    $intern_3,
    7,
    6,
    0,
    1
  );
  this.urfCoordCube = initDim(
    Lorg_cubing_min2phase_client_CoordCube_2_classLit,
    $intern_3,
    31,
    6,
    0,
    1
  );
  this.phase1Cubie = initDim(
    Lorg_cubing_min2phase_client_CubieCube_2_classLit,
    $intern_3,
    7,
    21,
    0,
    1
  );
  this.preMoveCubes = initDim(
    Lorg_cubing_min2phase_client_CubieCube_2_classLit,
    $intern_3,
    7,
    21,
    0,
    1
  );
  this.preMoves = initDim(I_classLit, $intern_27, 0, 20, 7, 1);
  for (i0 = 0; i0 < 21; i0++) {
    this.nodeUD[i0] = new CoordCube();
    this.nodeRL[i0] = new CoordCube();
    this.nodeFB[i0] = new CoordCube();
    this.phase1Cubie[i0] = new CubieCube();
  }
  for (i1 = 0; i1 < 6; i1++) {
    this.urfCubieCube[i1] = new CubieCube();
    this.urfCoordCube[i1] = new CoordCube();
  }
  for (i = 0; i < 20; i++) {
    this.preMoveCubes[i + 1] = new CubieCube();
  }
}

defineClass(72, 1, {}, Search);
_.allowShorter = false;
_.conjMask = 0;
_.depth1 = 0;
_.isRec = false;
_.length1 = 0;
_.maxDep2 = 0;
_.maxPreMoves = 0;
_.preMoveLen = 0;
_.probe = { l: 0, m: 0, h: 0 };
_.probeMax = { l: 0, m: 0, h: 0 };
_.probeMin = { l: 0, m: 0, h: 0 };
_.selfSym = { l: 0, m: 0, h: 0 };
_.solLen = 0;
_.urfIdx = 0;
_.valid1 = 0;
_.verbose = 0;
var MAX_DEPTH2 = 12,
  MIN_P1LENGTH_PRE = 7;
var Lorg_cubing_min2phase_client_Search_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Search",
  72
);
function $clinit_Util() {
  $clinit_Util = emptyMethod;
  var i, i0, i1, ix, j, jx;
  cornerFacelet = initValues(
    getClassLiteralForArray(B_classLit, 2),
    $intern_3,
    10,
    0,
    [
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        8,
        9,
        20,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        6,
        18,
        38,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        0,
        36,
        47,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        2,
        45,
        11,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        29,
        26,
        15,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        27,
        44,
        24,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        33,
        53,
        42,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        35,
        17,
        51,
      ]),
    ]
  );
  edgeFacelet = initValues(
    getClassLiteralForArray(B_classLit, 2),
    $intern_3,
    10,
    0,
    [
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        5,
        10,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        7,
        19,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        3,
        37,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        1,
        46,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        32,
        16,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        28,
        25,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        30,
        43,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        34,
        52,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        23,
        12,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        21,
        41,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        50,
        39,
      ]),
      initValues(getClassLiteralForArray(B_classLit, 1), $intern_30, 0, 7, [
        48,
        14,
      ]),
    ]
  );
  Cnk = initDims(I_classLit, [$intern_3, $intern_27], [17, 0], 7, [13, 13], 2);
  move2str = initValues(
    getClassLiteralForArray(Ljava_lang_String_2_classLit, 1),
    $intern_3,
    2,
    4,
    [
      "U ",
      "U2",
      "U'",
      "R ",
      "R2",
      "R'",
      "F ",
      "F2",
      "F'",
      "D ",
      "D2",
      "D'",
      "L ",
      "L2",
      "L'",
      "B ",
      "B2",
      "B'",
    ]
  );
  ud2std = initValues(
    getClassLiteralForArray(I_classLit, 1),
    $intern_27,
    0,
    7,
    [0, 1, 2, 4, 7, 9, 10, 11, 13, 16, 3, 5, 6, 8, 12, 14, 15, 17]
  );
  std2ud = initDim(I_classLit, $intern_27, 0, 18, 7, 1);
  ckmv2bit = initDim(I_classLit, $intern_27, 0, 11, 7, 1);
  for (i0 = 0; i0 < 18; i0++) {
    std2ud[ud2std[i0]] = i0;
  }
  for (i1 = 0; i1 < 10; i1++) {
    ix = ~~(ud2std[i1] / 3);
    ckmv2bit[i1] = 0;
    for (j = 0; j < 10; j++) {
      jx = ~~(ud2std[j] / 3);
      ckmv2bit[i1] |= (ix == jx || (ix % 3 == jx % 3 && ix >= jx) ? 1 : 0) << j;
    }
  }
  ckmv2bit[10] = 0;
  for (i = 0; i < 13; i++) {
    Cnk[i][0] = Cnk[i][i] = 1;
    for (j = 1; j < i; j++) {
      Cnk[i][j] = Cnk[i - 1][j - 1] + Cnk[i - 1][j];
    }
  }
}

function getComb(arr, mask, isEdge) {
  $clinit_Util();
  var end, i, idxC, perm, r;
  end = arr.length - 1;
  idxC = 0;
  r = 4;
  for (i = end; i >= 0; i--) {
    perm = getVal(arr[i], isEdge);
    (perm & 12) == mask && (idxC += Cnk[i][r--]);
  }
  return idxC;
}

function getNParity(idx, n) {
  $clinit_Util();
  var i, p;
  p = 0;
  for (i = n - 2; i >= 0; i--) {
    p ^= idx % (n - i);
    idx = ~~(idx / (n - i));
  }
  return p & 1;
}

function getNPerm(arr, n, isEdge) {
  $clinit_Util();
  var i, idx, v, val;
  idx = 0;
  val = { l: 1323536, m: 2777561, h: 1043915 };
  for (i = 0; i < n - 1; i++) {
    v = getVal(arr[i], isEdge) << 2;
    idx = (n - i) * idx + toInt(and(shr(val, v), { l: 15, m: 0, h: 0 }));
    val = sub_0(val, shl({ l: 1118480, m: 279620, h: 69905 }, v));
  }
  return idx;
}

function getVal(val0, isEdge) {
  return isEdge ? val0 >> 1 : val0 & 7;
}

function setComb(arr, idxC, mask, isEdge) {
  $clinit_Util();
  var end, fill, i, r;
  end = arr.length - 1;
  r = 4;
  fill = end;
  for (i = end; i >= 0; i--) {
    if (idxC >= Cnk[i][r]) {
      idxC -= Cnk[i][r--];
      arr[i] = setVal(arr[i], r | mask, isEdge);
    } else {
      (fill & 12) == mask && (fill -= 4);
      arr[i] = setVal(arr[i], fill--, isEdge);
    }
  }
}

function setNPerm(arr, idx, n, isEdge) {
  $clinit_Util();
  var extract, i, m, p, v, val;
  val = { l: 1323536, m: 2777561, h: 1043915 };
  extract = { l: 0, m: 0, h: 0 };
  for (p = 2; p <= n; p++) {
    extract = or(shl(extract, 4), fromInt(idx % p));
    idx = ~~(idx / p);
  }
  for (i = 0; i < n - 1; i++) {
    v = (toInt(extract) & 15) << 2;
    extract = shr(extract, 4);
    arr[i] = setVal(
      arr[i],
      toInt(and(shr(val, v), { l: 15, m: 0, h: 0 })),
      isEdge
    );
    m = sub_0(shl({ l: 1, m: 0, h: 0 }, v), { l: 1, m: 0, h: 0 });
    val = or(
      and(val, m),
      and(shr(val, 4), {
        l: ~m.l & $intern_9,
        m: ~m.m & $intern_9,
        h: ~m.h & $intern_10,
      })
    );
  }
  arr[n - 1] = setVal(
    arr[n - 1],
    toInt(and(val, { l: 15, m: 0, h: 0 })),
    isEdge
  );
}

function setVal(val0, val, isEdge) {
  return ((isEdge ? (val << 1) | (val0 & 1) : val | (val0 & -8)) << 24) >> 24;
}

function toCubieCube(f, ccRet) {
  $clinit_Util();
  var col1, col2, i, i0, i1, i2, j, ori;
  for (i0 = 0; i0 < 8; i0++) {
    ccRet.ca[i0] = 0;
  }
  for (i1 = 0; i1 < 12; i1++) {
    ccRet.ea[i1] = 0;
  }
  for (i2 = 0; i2 < 8; i2++) {
    for (ori = 0; ori < 3; ori++) {
      if (f[cornerFacelet[i2][ori]] == 0 || f[cornerFacelet[i2][ori]] == 3)
        break;
    }
    col1 = f[cornerFacelet[i2][(ori + 1) % 3]];
    col2 = f[cornerFacelet[i2][(ori + 2) % 3]];
    for (j = 0; j < 8; j++) {
      if (
        col1 == ~~(cornerFacelet[j][1] / 9) &&
        col2 == ~~(cornerFacelet[j][2] / 9)
      ) {
        ccRet.ca[i2] = narrow_byte((ori % 3 << 3) | j);
        break;
      }
    }
  }
  for (i = 0; i < 12; i++) {
    for (j = 0; j < 12; j++) {
      if (
        f[edgeFacelet[i][0]] == ~~(edgeFacelet[j][0] / 9) &&
        f[edgeFacelet[i][1]] == ~~(edgeFacelet[j][1] / 9)
      ) {
        ccRet.ea[i] = narrow_byte(j << 1);
        break;
      }
      if (
        f[edgeFacelet[i][0]] == ~~(edgeFacelet[j][1] / 9) &&
        f[edgeFacelet[i][1]] == ~~(edgeFacelet[j][0] / 9)
      ) {
        ccRet.ea[i] = narrow_byte((j << 1) | 1);
        break;
      }
    }
  }
}

var Cnk, ckmv2bit, cornerFacelet, edgeFacelet, move2str, std2ud, ud2std;
function $appendSolMove(this$static, curMove) {
  var axisCur, axisLast, pow_0;
  if (this$static.length_0 == 0) {
    this$static.moves[this$static.length_0++] = curMove;
    return;
  }
  axisCur = ~~(curMove / 3);
  axisLast = ~~(this$static.moves[this$static.length_0 - 1] / 3);
  if (axisCur == axisLast) {
    pow_0 =
      ((curMove % 3) + (this$static.moves[this$static.length_0 - 1] % 3) + 1) %
      4;
    pow_0 == 3
      ? --this$static.length_0
      : (this$static.moves[this$static.length_0 - 1] = axisCur * 3 + pow_0);
    return;
  }
  if (
    this$static.length_0 > 1 &&
    axisCur % 3 == axisLast % 3 &&
    axisCur == ~~(this$static.moves[this$static.length_0 - 2] / 3)
  ) {
    pow_0 =
      ((curMove % 3) + (this$static.moves[this$static.length_0 - 2] % 3) + 1) %
      4;
    if (pow_0 == 3) {
      this$static.moves[this$static.length_0 - 2] =
        this$static.moves[this$static.length_0 - 1];
      --this$static.length_0;
    } else {
      this$static.moves[this$static.length_0 - 2] = axisCur * 3 + pow_0;
    }
    return;
  }
  this$static.moves[this$static.length_0++] = curMove;
}

function $setArgs(this$static, verbose, urfIdx, depth1) {
  this$static.verbose = verbose;
  this$static.urfIdx = urfIdx;
  this$static.depth1 = depth1;
}

function $toString_2(this$static) {
  var s, sb, urf;
  sb = new StringBuffer();
  urf =
    (this$static.verbose & 2) != 0
      ? (this$static.urfIdx + 3) % 6
      : this$static.urfIdx;
  if (urf < 3) {
    for (s = 0; s < this$static.length_0; s++) {
      (this$static.verbose & 1) != 0 &&
        s == this$static.depth1 &&
        ((sb.string += ".  "), sb);
      $append(
        $append_1(
          sb,
          ($clinit_Util(), move2str)[
            ($clinit_CubieCube(), urfMove)[urf][this$static.moves[s]]
          ]
        )
      );
    }
  } else {
    for (s = this$static.length_0 - 1; s >= 0; s--) {
      $append(
        $append_1(
          sb,
          ($clinit_Util(), move2str)[
            ($clinit_CubieCube(), urfMove)[urf][this$static.moves[s]]
          ]
        )
      );
      (this$static.verbose & 1) != 0 &&
        s == this$static.depth1 &&
        ((sb.string += ".  "), sb);
    }
  }
  (this$static.verbose & 4) != 0 &&
    $append_1($append_0(((sb.string += "("), sb), this$static.length_0), "f)");
  return sb.string;
}

function Util$Solution() {
  this.moves = initDim(I_classLit, $intern_27, 0, 31, 7, 1);
}

defineClass(150, 1, {}, Util$Solution);
_.toString$ = function toString_17() {
  return $toString_2(this);
};
_.depth1 = 0;
_.length_0 = 0;
_.urfIdx = 0;
_.verbose = 0;
var Lorg_cubing_min2phase_client_Util$Solution_2_classLit = createForClass(
  "org.cubing.min2phase.client",
  "Util/Solution",
  150
);
function isValidName(name_0) {
  if (name_0 == null) {
    return false;
  }
  return name_0.length > 3;
}

var I_classLit = createForPrimitive("int", "I"),
  Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass(
    "com.google.gwt.lang",
    "CollapsedPropertyHolder",
    252
  ),
  Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass(
    "com.google.gwt.lang",
    "JavaClassHierarchySetupUtil",
    254
  ),
  Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass(
    "com.google.gwt.lang",
    "LongLibBase/LongEmul",
    null
  ),
  Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass(
    "com.google.gwt.lang",
    "ModuleUtils",
    257
  ),
  B_classLit = createForPrimitive("byte", "B"),
  J_classLit = createForPrimitive("long", "J"),
  C_classLit = createForPrimitive("char", "C"),
  Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass(
    "com.google.gwt.user.client.rpc",
    "XsrfToken",
    null
  ),
  Ljava_util_Map$Entry_2_classLit = createForInterface(
    "java.util",
    "Map/Entry"
  );
var $entry = registerEntry();
var gwtOnLoad = (gwtOnLoad = gwtOnLoad_0);
addInitFunctions(init);
setGwtProperty("permProps", [
  [
    ["locale", "default"],
    ["user.agent", "safari"],
  ],
]);
$sendStats("moduleStartup", "moduleEvalEnd");
gwtOnLoad(
  __gwtModuleFunction.__errFn,
  __gwtModuleFunction.__moduleName,
  __gwtModuleFunction.__moduleBase,
  __gwtModuleFunction.__softPermutationId,
  __gwtModuleFunction.__computePropValue
);
$sendStats("moduleStartup", "end");
$gwt &&
  $gwt.permProps &&
  __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=org_cubing_min2phase-0.js

export function solveState(s) {
  return $solution(new Search(), s);
}
