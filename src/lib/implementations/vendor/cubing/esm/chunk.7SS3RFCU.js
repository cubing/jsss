import {
  experimentalAppendBlockMove
} from "./chunk.ADJA7KPR.js";
import {
  EquivalentStates,
  EquivalentTransformations,
  SVG
} from "./chunk.4HHEP4LN.js";
import {
  modifiedBlockMove
} from "./chunk.HRZH3X5E.js";
import {
  parseAlg
} from "./chunk.ZBAGYB27.js";
import {
  Combine,
  IdentityTransformation,
  Invert,
  KPuzzle,
  stateForBlockMove
} from "./chunk.7EIWMJGL.js";
import {
  BareBlockMove,
  BlockMove,
  Sequence,
  TraversalDownUp,
  TraversalUp,
  __commonJS,
  __toModule,
  algPartToStringForTesting,
  algToString,
  blockMoveToString,
  expand,
  invert
} from "./chunk.NSRFVJAK.js";
import {
  __async,
  puzzles
} from "./chunk.TGFWVHEL.js";
var __assign = Object.assign;
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// src/vendor/node_modules/three/examples/jsm/libs/stats.module.js
var require_stats_module = __commonJS((exports, module) => {
  var Stats2 = function() {
    var mode = 0;
    var container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
    container.addEventListener("click", function(event) {
      event.preventDefault();
      showPanel(++mode % container.children.length);
    }, false);
    function addPanel(panel) {
      container.appendChild(panel.dom);
      return panel;
    }
    function showPanel(id) {
      for (var i2 = 0; i2 < container.children.length; i2++) {
        container.children[i2].style.display = i2 === id ? "block" : "none";
      }
      mode = id;
    }
    var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
    var fpsPanel = addPanel(new Stats2.Panel("FPS", "#0ff", "#002"));
    var msPanel = addPanel(new Stats2.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) {
      var memPanel = addPanel(new Stats2.Panel("MB", "#f08", "#201"));
    }
    showPanel(0);
    return {
      REVISION: 16,
      dom: container,
      addPanel,
      showPanel,
      begin: function() {
        beginTime = (performance || Date).now();
      },
      end: function() {
        frames++;
        var time = (performance || Date).now();
        msPanel.update(time - beginTime, 200);
        if (time >= prevTime + 1e3) {
          fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
          prevTime = time;
          frames = 0;
          if (memPanel) {
            var memory = performance.memory;
            memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
          }
        }
        return time;
      },
      update: function() {
        beginTime = this.end();
      },
      domElement: container,
      setMode: showPanel
    };
  };
  Stats2.Panel = function(name, fg, bg) {
    var min = Infinity, max = 0, round = Math.round;
    var PR = round(window.devicePixelRatio || 1);
    var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
    var canvas2 = document.createElement("canvas");
    canvas2.width = WIDTH;
    canvas2.height = HEIGHT;
    canvas2.style.cssText = "width:80px;height:48px";
    var context = canvas2.getContext("2d");
    context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
    context.textBaseline = "top";
    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = fg;
    context.fillText(name, TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    context.fillStyle = bg;
    context.globalAlpha = 0.9;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    return {
      dom: canvas2,
      update: function(value, maxValue) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        context.fillStyle = bg;
        context.globalAlpha = 1;
        context.fillRect(0, 0, WIDTH, GRAPH_Y);
        context.fillStyle = fg;
        context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
        context.drawImage(canvas2, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
      }
    };
  };
  module.exports = Stats2;
});

// src/cubing/twisty/dom/viewers/Twisty3DCanvas.ts
import {PerspectiveCamera, Vector3 as Vector32, WebGLRenderer} from "three";

// src/cubing/twisty/animation/RenderScheduler.ts
var RenderScheduler = class {
  constructor(callback) {
    this.callback = callback;
    this.animFrameID = null;
    this.animFrame = this.animFrameWrapper.bind(this);
  }
  requestAnimFrame() {
    if (!this.animFrameID) {
      this.animFrameID = requestAnimationFrame(this.animFrame);
    }
  }
  cancelAnimFrame() {
    if (this.animFrameID) {
      cancelAnimationFrame(this.animFrameID);
      this.animFrameID = 0;
    }
  }
  animFrameWrapper(timestamp) {
    this.animFrameID = 0;
    this.callback(timestamp);
  }
};

// src/cubing/twisty/dom/element/node-custom-element-shims.ts
var HTMLElementStub = class {
};
var HTMLElementShim;
if (typeof HTMLElement !== "undefined") {
  HTMLElementShim = HTMLElement;
} else {
  HTMLElementShim = HTMLElementStub;
}
var CustomElementsStub = class {
  define() {
  }
};
var customElementsShim;
if (typeof customElements !== "undefined") {
  customElementsShim = customElements;
} else {
  customElementsShim = new CustomElementsStub();
}

// src/cubing/twisty/dom/element/ManagedCustomElement.ts
var CSSSource = class {
  constructor(sourceText) {
    this.sourceText = sourceText;
  }
  getAsString() {
    return this.sourceText;
  }
};
var ManagedCustomElement = class extends HTMLElementShim {
  constructor() {
    super();
    this.cssSourceMap = new Map();
    this.shadow = this.attachShadow({mode: "closed"});
    this.contentWrapper = document.createElement("div");
    this.contentWrapper.classList.add("wrapper");
    this.shadow.appendChild(this.contentWrapper);
  }
  addCSS(cssSource) {
    if (this.cssSourceMap.get(cssSource)) {
      return;
    }
    const cssElem = document.createElement("style");
    cssElem.textContent = cssSource.getAsString();
    this.cssSourceMap.set(cssSource, cssElem);
    this.shadow.appendChild(cssElem);
  }
  removeCSS(cssSource) {
    const cssElem = this.cssSourceMap.get(cssSource);
    if (!cssElem) {
      return;
    }
    this.shadow.removeChild(cssElem);
    this.cssSourceMap.delete(cssSource);
  }
  addElement(element) {
    return this.contentWrapper.appendChild(element);
  }
  prependElement(element) {
    this.contentWrapper.prepend(element);
  }
  removeElement(element) {
    return this.contentWrapper.removeChild(element);
  }
};
customElementsShim.define("twisty-managed-custom-element", ManagedCustomElement);

// src/cubing/twisty/dom/viewers/canvas.ts
function pixelRatio() {
  return devicePixelRatio || 1;
}

// src/cubing/twisty/dom/viewers/Twisty3DCanvas.css.ts
var twisty3DCanvasCSS = new CSSSource(`
:host(twisty-3d-canvas) {
  contain: content;
  overflow: hidden;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  contain: content;
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}

.wrapper.invisible {
  opacity: 0;
}
`);

// src/cubing/twisty/dom/viewers/TwistyOrbitControls.ts
import {Spherical, Vector3} from "three";
var EPSILON = 1e-8;
var INERTIA_DEFAULT = true;
var LATITUDE_LIMITS_DEFAULT = true;
var INERTIA_DURATION_MS = 500;
var INERTIA_TIMEOUT_MS = 50;
var VERTICAL_MOVEMENT_BASE_SCALE = 0.5;
function momentumScale(progress) {
  return (Math.exp(1 - progress) - (1 - progress)) / (1 - Math.E) + 1;
}
var Inertia = class {
  constructor(startTimestamp, momentumX, momentumY, callback) {
    this.startTimestamp = startTimestamp;
    this.momentumX = momentumX;
    this.momentumY = momentumY;
    this.callback = callback;
    this.scheduler = new RenderScheduler(this.render.bind(this));
    this.scheduler.requestAnimFrame();
    this.lastTimestamp = startTimestamp;
  }
  render(now) {
    const progressBefore = (this.lastTimestamp - this.startTimestamp) / INERTIA_DURATION_MS;
    const progressAfter = Math.min(1, (now - this.startTimestamp) / INERTIA_DURATION_MS);
    if (progressBefore === 0 && progressAfter > INERTIA_TIMEOUT_MS / INERTIA_DURATION_MS) {
      return;
    }
    const delta = momentumScale(progressAfter) - momentumScale(progressBefore);
    this.callback(this.momentumX * delta * 1e3, this.momentumY * delta * 1e3);
    if (progressAfter < 1) {
      this.scheduler.requestAnimFrame();
    }
    this.lastTimestamp = now;
  }
};
var TwistyOrbitControls = class {
  constructor(camera, canvas2, scheduleRender) {
    this.camera = camera;
    this.canvas = canvas2;
    this.scheduleRender = scheduleRender;
    this.experimentalInertia = INERTIA_DEFAULT;
    this.experimentalLatitudeLimits = LATITUDE_LIMITS_DEFAULT;
    this.lastTouchClientX = 0;
    this.lastTouchClientY = 0;
    this.currentTouchID = null;
    this.onMoveBound = this.onMove.bind(this);
    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onMouseEndBound = this.onMouseEnd.bind(this);
    this.onTouchMoveBound = this.onTouchMove.bind(this);
    this.onTouchEndBound = this.onTouchEnd.bind(this);
    this.tempSpherical = new Spherical();
    this.lastTouchTimestamp = 0;
    this.lastTouchMoveMomentumX = 0;
    this.lastTouchMoveMomentumY = 0;
    this.lastMouseTimestamp = 0;
    this.lastMouseMoveMomentumX = 0;
    this.lastMouseMoveMomentumY = 0;
    this.experimentalHasBeenMoved = false;
    canvas2.addEventListener("mousedown", this.onMouseStart.bind(this));
    canvas2.addEventListener("touchstart", this.onTouchStart.bind(this));
  }
  temperMovement(f) {
    return Math.sign(f) * Math.log(Math.abs(f * 10) + 1) / 10;
  }
  onMouseStart(e) {
    window.addEventListener("mousemove", this.onMouseMoveBound);
    window.addEventListener("mouseup", this.onMouseEndBound);
    this.onStart(e);
    this.lastMouseTimestamp = e.timeStamp;
  }
  onMouseMove(e) {
    if (e.buttons === 0) {
      this.onMouseEnd(e);
      return;
    }
    const minDim = Math.min(this.canvas.offsetWidth, this.canvas.offsetHeight);
    const movementX = this.temperMovement(e.movementX / minDim);
    const movementY = this.temperMovement(e.movementY / minDim * VERTICAL_MOVEMENT_BASE_SCALE);
    this.onMove(movementX, movementY);
    this.lastMouseMoveMomentumX = movementX / (e.timeStamp - this.lastMouseTimestamp);
    this.lastMouseMoveMomentumY = movementY / (e.timeStamp - this.lastMouseTimestamp);
    this.lastMouseTimestamp = e.timeStamp;
  }
  onMouseEnd(e) {
    window.removeEventListener("mousemove", this.onMouseMoveBound);
    window.removeEventListener("mouseup", this.onMouseEndBound);
    this.onEnd(e);
    if (this.experimentalInertia) {
      new Inertia(this.lastMouseTimestamp, this.lastMouseMoveMomentumX, this.lastMouseMoveMomentumY, this.onMoveBound);
    }
  }
  onTouchStart(e) {
    if (this.currentTouchID === null) {
      this.currentTouchID = e.changedTouches[0].identifier;
      this.lastTouchClientX = e.touches[0].clientX;
      this.lastTouchClientY = e.touches[0].clientY;
      window.addEventListener("touchmove", this.onTouchMoveBound);
      window.addEventListener("touchend", this.onTouchEndBound);
      window.addEventListener("touchcanel", this.onTouchEndBound);
      this.onStart(e);
      this.lastTouchTimestamp = e.timeStamp;
    }
  }
  onTouchMove(e) {
    for (let i2 = 0; i2 < e.changedTouches.length; i2++) {
      const touch = e.changedTouches[i2];
      if (touch.identifier === this.currentTouchID) {
        const minDim = Math.min(this.canvas.offsetWidth, this.canvas.offsetHeight);
        const movementX = this.temperMovement((touch.clientX - this.lastTouchClientX) / minDim);
        const movementY = this.temperMovement((touch.clientY - this.lastTouchClientY) / minDim * VERTICAL_MOVEMENT_BASE_SCALE);
        this.onMove(movementX, movementY);
        this.lastTouchClientX = touch.clientX;
        this.lastTouchClientY = touch.clientY;
        this.lastTouchMoveMomentumX = movementX / (e.timeStamp - this.lastTouchTimestamp);
        this.lastTouchMoveMomentumY = movementY / (e.timeStamp - this.lastTouchTimestamp);
        this.lastTouchTimestamp = e.timeStamp;
      }
    }
  }
  onTouchEnd(e) {
    for (let i2 = 0; i2 < e.changedTouches.length; i2++) {
      const touch = e.changedTouches[i2];
      if (touch.identifier === this.currentTouchID) {
        this.currentTouchID = null;
        window.removeEventListener("touchmove", this.onTouchMoveBound);
        window.removeEventListener("touchend", this.onTouchEndBound);
        window.removeEventListener("touchcancel", this.onTouchEndBound);
        this.onEnd(e);
      }
    }
    if (this.experimentalInertia) {
      new Inertia(this.lastTouchTimestamp, this.lastTouchMoveMomentumX, this.lastTouchMoveMomentumY, this.onMoveBound);
    }
  }
  onStart(e) {
    e.preventDefault();
  }
  onMove(movementX, movementY) {
    var _a;
    this.tempSpherical.setFromVector3(this.camera.position);
    this.tempSpherical.theta += -2 * movementX;
    this.tempSpherical.phi += -2 * movementY;
    if (this.experimentalLatitudeLimits) {
      this.tempSpherical.phi = Math.max(this.tempSpherical.phi, Math.PI * 0.3);
      this.tempSpherical.phi = Math.min(this.tempSpherical.phi, Math.PI * 0.7);
    } else {
      this.tempSpherical.phi = Math.max(this.tempSpherical.phi, EPSILON);
      this.tempSpherical.phi = Math.min(this.tempSpherical.phi, Math.PI - EPSILON);
    }
    this.camera.position.setFromSpherical(this.tempSpherical);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.experimentalHasBeenMoved = true;
    this.scheduleRender();
    (_a = this.mirrorControls) == null ? void 0 : _a.updateMirroredCamera(this.camera);
  }
  onEnd(e) {
    e.preventDefault();
  }
  setMirror(m) {
    this.mirrorControls = m;
  }
  updateMirroredCamera(c2) {
    this.camera.position.copy(c2.position);
    this.camera.position.multiplyScalar(-1);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.scheduleRender();
  }
};

// src/cubing/twisty/dom/viewers/Twisty3DCanvas.ts
var stats = __toModule(require_stats_module());
var SHOW_STATS = false;
function experimentalShowRenderStats(show) {
  SHOW_STATS = show;
}
var resizeObserverWarningShown = false;
var shareAllNewRenderers = false;
function experimentalSetShareAllNewRenderers(share) {
  shareAllNewRenderers = share;
}
var sharedRenderer = null;
function newRenderer() {
  return new WebGLRenderer({
    antialias: true,
    alpha: true
  });
}
function newSharedRenderer() {
  return sharedRenderer != null ? sharedRenderer : sharedRenderer = newRenderer();
}
var _invisible;
var Twisty3DCanvas2 = class extends ManagedCustomElement {
  constructor(scene, options = {}) {
    super();
    this.legacyExperimentalShift = 0;
    this.scheduler = new RenderScheduler(this.render.bind(this));
    this.resizePending = false;
    this.stats = null;
    _invisible.set(this, false);
    var _a;
    this.addCSS(twisty3DCanvasCSS);
    this.scene = scene;
    this.scene.addRenderTarget(this);
    if (SHOW_STATS) {
      this.stats = stats.default();
      this.stats.dom.style.position = "absolute";
      this.addElement(this.stats.dom);
    }
    this.rendererIsShared = shareAllNewRenderers;
    this.renderer = this.rendererIsShared ? newSharedRenderer() : newRenderer();
    this.canvas = this.rendererIsShared ? document.createElement("canvas") : this.renderer.domElement;
    this.canvas2DContext = this.canvas.getContext("2d");
    this.addElement(this.canvas);
    this.camera = new PerspectiveCamera(20, 1, 0.1, 1e3);
    this.camera.position.copy((_a = options.cameraPosition) != null ? _a : new Vector32(2, 4, 4));
    if (options.negateCameraPosition) {
      this.camera.position.multiplyScalar(-1);
    }
    this.camera.lookAt(new Vector32(0, 0, 0));
    this.orbitControls = new TwistyOrbitControls(this.camera, this.canvas, this.scheduleRender.bind(this));
    if (window.ResizeObserver) {
      const observer = new window.ResizeObserver(this.onResize.bind(this));
      observer.observe(this.contentWrapper);
    } else {
      this.scheduleRender();
      if (!resizeObserverWarningShown) {
        console.warn("You are using an older browser that does not support `ResizeObserver`. Displayed puzzles will not be rescaled.");
        resizeObserverWarningShown = true;
      }
    }
  }
  setMirror(partner) {
    this.orbitControls.setMirror(partner.orbitControls);
    partner.orbitControls.setMirror(this.orbitControls);
  }
  experimentalSetLatitudeLimits(limits) {
    this.orbitControls.experimentalLatitudeLimits = limits;
  }
  connectedCallback() {
    this.resize();
    this.render();
  }
  scheduleRender() {
    this.scheduler.requestAnimFrame();
  }
  makeInvisibleUntilRender() {
    this.contentWrapper.classList.add("invisible");
    __privateSet(this, _invisible, true);
  }
  render() {
    var _a, _b;
    (_a = this.stats) == null ? void 0 : _a.begin();
    this.scheduler.cancelAnimFrame();
    if (this.resizePending) {
      this.resize();
    }
    if (this.rendererIsShared) {
      this.renderer.setSize(this.canvas.width, this.canvas.height, false);
      this.canvas2DContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.renderer.render(this.scene, this.camera);
    if (this.rendererIsShared) {
      this.canvas2DContext.drawImage(this.renderer.domElement, 0, 0);
    }
    if (__privateGet(this, _invisible)) {
      this.contentWrapper.classList.remove("invisible");
    }
    (_b = this.stats) == null ? void 0 : _b.end();
  }
  onResize() {
    this.resizePending = true;
    this.scheduleRender();
  }
  resize() {
    this.resizePending = false;
    const w = this.contentWrapper.clientWidth;
    const h = this.contentWrapper.clientHeight;
    let off = 0;
    if (this.legacyExperimentalShift > 0) {
      off = Math.max(0, Math.floor((w - h) * 0.5));
    } else if (this.legacyExperimentalShift < 0) {
      off = -Math.max(0, Math.floor((w - h) * 0.5));
    }
    let yoff = 0;
    let excess = 0;
    if (h > w) {
      excess = h - w;
      yoff = -Math.floor(0.5 * excess);
    }
    this.camera.aspect = w / h;
    this.camera.setViewOffset(w, h - excess, off, yoff, w, h);
    this.camera.updateProjectionMatrix();
    if (this.rendererIsShared) {
      this.canvas.width = w * pixelRatio();
      this.canvas.height = h * pixelRatio();
      this.canvas.style.width = w.toString();
      this.canvas.style.height = w.toString();
    } else {
      this.renderer.setPixelRatio(pixelRatio());
      this.renderer.setSize(w, h, true);
    }
    this.scheduleRender();
  }
  renderToDataURL(options = {}) {
    this.render();
    if (!options.squareCrop || this.canvas.width === this.canvas.height) {
      return this.canvas.toDataURL();
    } else {
      const tempCanvas = document.createElement("canvas");
      const squareSize = Math.min(this.canvas.width, this.canvas.height);
      tempCanvas.width = squareSize;
      tempCanvas.height = squareSize;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.drawImage(this.canvas, -(this.canvas.width - squareSize) / 2, -(this.canvas.height - squareSize) / 2);
      return tempCanvas.toDataURL();
    }
  }
};
_invisible = new WeakMap();
customElementsShim.define("twisty-3d-canvas", Twisty3DCanvas2);

// src/cubing/twisty/dom/TwistyPlayer.ts
import {Vector3 as Vector37} from "three";

// src/cubing/alg/traversal.ts
function experimentalBlockMoveQuantumName(move) {
  return algPartToStringForTesting(new BlockMove(move.outerLayer, move.innerLayer, move.family, 1));
}

// src/cubing/twisty/3D/puzzles/Cube3D.ts
import {
  BackSide,
  BoxGeometry,
  DoubleSide,
  Euler,
  Group,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Quaternion,
  TextureLoader,
  Vector2,
  Vector3 as Vector35
} from "three";

// src/cubing/twisty/animation/easing.ts
function smootherStep(x) {
  return x * x * x * (10 - x * (15 - 6 * x));
}

// src/cubing/twisty/dom/TwistyPlayerConfig.ts
import {Vector3 as Vector34} from "three";

// src/cubing/twisty/dom/element/ElementConfig.ts
import {Vector3 as Vector33} from "three";
var AlgAttribute = class {
  constructor(initialValue) {
    this.setValue(initialValue != null ? initialValue : this.defaultValue());
  }
  setString(str) {
    if (this.string === str) {
      return false;
    }
    this.string = str;
    this.value = this.toValue(str);
    return true;
  }
  setValue(val) {
    const str = this.toString(val);
    if (this.string === str) {
      return false;
    }
    this.string = str;
    this.value = val;
    return true;
  }
  defaultValue() {
    return new Sequence([]);
  }
  toValue(s) {
    return parseAlg(s);
  }
  toString(s) {
    return algToString(s);
  }
};
var StringEnumAttribute = class {
  constructor(enumVal, initialValue) {
    this.enumVal = enumVal;
    this.setString(initialValue != null ? initialValue : this.defaultValue());
  }
  setString(str) {
    if (this.string === str) {
      return false;
    }
    if (!(str in this.enumVal)) {
      throw new Error(`Invalid string for attribute!: ${str}`);
    }
    this.string = str;
    this.value = this.toValue(str);
    return true;
  }
  setValue(val) {
    return this.setString(val);
  }
  defaultValue() {
    return Object.keys(this.enumVal)[0];
  }
  toValue(s) {
    return s;
  }
};
var _defaultValue;
var Vector3Attribute = class {
  constructor(defaultValue, initialValue) {
    _defaultValue.set(this, void 0);
    __privateSet(this, _defaultValue, defaultValue);
    this.setValue(initialValue != null ? initialValue : this.defaultValue());
  }
  setString(str) {
    return this.setValue(str === "" ? null : this.toValue(str));
  }
  setValue(val) {
    const str = this.toString(val);
    if (this.string === str) {
      return false;
    }
    this.string = str;
    this.value = val;
    return true;
  }
  defaultValue() {
    return __privateGet(this, _defaultValue);
  }
  toValue(s) {
    if (!s.startsWith("[")) {
      throw new Error("TODO");
    }
    if (!s.endsWith("]")) {
      throw new Error("TODO");
    }
    const coords = s.slice(1, s.length - 1).split(",");
    if (coords.length !== 3) {
      throw new Error("TODO");
    }
    const [x, y, z] = coords.map((c2) => parseInt(c2, 10));
    return new Vector33(x, y, z);
  }
  toString(v) {
    return v ? `[${v.x}, ${v.y}, ${v.z}]` : "";
  }
};
_defaultValue = new WeakMap();

// src/cubing/twisty/dom/element/ClassListManager.ts
var _currentClassName;
var ClassListManager = class {
  constructor(elem, prefix, validSuffixes) {
    this.elem = elem;
    this.prefix = prefix;
    this.validSuffixes = validSuffixes;
    _currentClassName.set(this, null);
  }
  clearValue() {
    if (__privateGet(this, _currentClassName)) {
      this.elem.contentWrapper.classList.remove(__privateGet(this, _currentClassName));
    }
    __privateSet(this, _currentClassName, null);
  }
  setValue(suffix) {
    if (!this.validSuffixes.includes(suffix)) {
      throw new Error(`Invalid suffix: ${suffix}`);
    }
    const newClassName = `${this.prefix}${suffix}`;
    const changed = __privateGet(this, _currentClassName) !== newClassName;
    if (changed) {
      this.clearValue();
      this.elem.contentWrapper.classList.add(newClassName);
      __privateSet(this, _currentClassName, newClassName);
    }
    return changed;
  }
};
_currentClassName = new WeakMap();

// src/cubing/twisty/dom/viewers/TwistyViewerWrapper.css.ts
var twistyViewerWrapperCSS = new CSSSource(`
.wrapper {
  display: grid;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-top-right > :nth-child(2) {
  position: absolute;
  right: 0;
  top: 0;
  width: 25%;
  height: 25%;
}
`);

// src/cubing/twisty/dom/viewers/TwistyViewerWrapper.ts
var backViewLayouts = {
  none: true,
  "side-by-side": true,
  "top-right": true
};
var _backViewClassListManager;
var TwistyViewerWrapper2 = class extends ManagedCustomElement {
  constructor(config = {}) {
    super();
    _backViewClassListManager.set(this, new ClassListManager(this, "back-view-", [
      "none",
      "side-by-side",
      "top-right"
    ]));
    this.addCSS(twistyViewerWrapperCSS);
    if (config.backView && config.backView in backViewLayouts) {
      __privateGet(this, _backViewClassListManager).setValue(config.backView);
    }
  }
  setBackView(backView) {
    return __privateGet(this, _backViewClassListManager).setValue(backView);
  }
  clear() {
    this.contentWrapper.innerHTML = "";
  }
};
_backViewClassListManager = new WeakMap();
customElementsShim.define("twisty-viewer-wrapper", TwistyViewerWrapper2);

// src/cubing/twisty/dom/TwistyPlayerConfig.ts
var DEFAULT_CAMERA_Z = 5;
var DEFAULT_CAMERA_Y = DEFAULT_CAMERA_Z * (2 / (1 + Math.sqrt(5)));
var centeredCameraPosition = new Vector34(0, DEFAULT_CAMERA_Y, DEFAULT_CAMERA_Z);
var cubeCameraPosition = new Vector34(3, 4, 5);
var visualizationFormats = {
  "3D": true,
  "2D": true,
  PG3D: true
};
var backgroundThemes = {
  checkered: true,
  none: true
};
var hintFaceletStyles = {
  floating: true,
  none: true
};
var experimentalStickerings = {
  full: true,
  "centers-only": true,
  PLL: true,
  CLS: true,
  OLL: true,
  COLL: true,
  ELS: true,
  LL: true,
  F2L: true,
  ZBLL: true,
  ZBLS: true,
  WVLS: true,
  VLS: true,
  LS: true,
  EO: true,
  CMLL: true,
  L6E: true,
  L6EO: true,
  Daisy: true,
  Cross: true,
  "2x2x2": true,
  "2x2x3": true,
  "Void Cube": true,
  invisible: true,
  picture: true
};
var controlsLocations = {
  "bottom-row": true,
  none: true
};
var puzzleIDs = {
  "3x3x3": true,
  custom: true,
  "2x2x2": true,
  "4x4x4": true,
  "5x5x5": true,
  "6x6x6": true,
  "7x7x7": true,
  megaminx: true,
  pyraminx: true,
  square1: true,
  clock: true,
  skewb: true,
  fto: true
};
var twistyPlayerAttributeMap = {
  alg: "alg",
  "experimental-start-setup": "experimentalStartSetup",
  puzzle: "puzzle",
  visualization: "visualization",
  "hint-facelets": "hintFacelets",
  "experimental-stickering": "experimentalStickering",
  background: "background",
  "control-panel": "controlPanel",
  "back-view": "backView",
  "camera-position": "cameraPosition"
};
var TwistyPlayerConfig = class {
  constructor(twistyPlayer, initialValues) {
    this.twistyPlayer = twistyPlayer;
    this.attributes = {
      alg: new AlgAttribute(initialValues.alg),
      "experimental-start-setup": new AlgAttribute(initialValues.experimentalStartSetup),
      puzzle: new StringEnumAttribute(puzzleIDs, initialValues.puzzle),
      visualization: new StringEnumAttribute(visualizationFormats, initialValues.visualization),
      "hint-facelets": new StringEnumAttribute(hintFaceletStyles, initialValues.hintFacelets),
      "experimental-stickering": new StringEnumAttribute(experimentalStickerings, initialValues.experimentalStickering),
      background: new StringEnumAttribute(backgroundThemes, initialValues.background),
      "control-panel": new StringEnumAttribute(controlsLocations, initialValues.controlPanel),
      "back-view": new StringEnumAttribute(backViewLayouts, initialValues["backView"]),
      "camera-position": new Vector3Attribute(null, initialValues["cameraPosition"])
    };
  }
  static get observedAttributes() {
    return Object.keys(twistyPlayerAttributeMap);
  }
  attributeChangedCallback(attributeName, oldValue, newValue) {
    const managedAttribute = this.attributes[attributeName];
    if (managedAttribute) {
      if (oldValue !== null && managedAttribute.string !== oldValue) {
        console.warn("Attribute out of sync!", attributeName, managedAttribute.string, oldValue);
      }
      managedAttribute.setString(newValue);
      const propertyName = twistyPlayerAttributeMap[attributeName];
      this.twistyPlayer[propertyName] = managedAttribute.value;
    }
  }
};

// src/cubing/twisty/3D/TAU.ts
var TAU = Math.PI * 2;

// src/cubing/twisty/3D/puzzles/stickerings.ts
var r = {
  facelets: ["regular", "regular", "regular"]
};
var d = {
  facelets: ["dim", "dim", "dim"]
};
var di = {
  facelets: ["dim", "ignored", "ignored"]
};
var p = {
  facelets: ["dim", "regular", "regular"]
};
var o = {
  facelets: ["regular", "ignored", "ignored"]
};
var i = {
  facelets: ["ignored", "ignored", "ignored"]
};
var oi = {
  facelets: ["oriented", "ignored", "ignored"]
};
var invis = {
  facelets: ["invisible", "invisible", "invisible"]
};
var c = {
  facelets: ["invisible", "invisible", "invisible"]
};
var stickerings = {
  full: {
    orbits: {
      EDGES: {
        pieces: [r, r, r, r, r, r, r, r, r, r, r, r]
      },
      CORNERS: {
        pieces: [r, r, r, r, r, r, r, r]
      },
      CENTERS: {
        pieces: [r, r, r, r, r, r]
      }
    }
  },
  "centers-only": {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, i, i, i, i, i, i, i, i]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, i, i, i]
      },
      CENTERS: {
        pieces: [r, r, r, r, r, r]
      }
    }
  },
  PLL: {
    orbits: {
      EDGES: {
        pieces: [p, p, p, p, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [p, p, p, p, d, d, d, d]
      },
      CENTERS: {
        pieces: [p, d, d, d, d, d]
      }
    }
  },
  CLS: {
    orbits: {
      EDGES: {
        pieces: [di, di, di, di, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [o, o, o, o, o, d, d, d]
      },
      CENTERS: {
        pieces: [d, d, d, d, d, d]
      }
    }
  },
  OLL: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [o, o, o, o, d, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  COLL: {
    orbits: {
      EDGES: {
        pieces: [di, di, di, di, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [r, r, r, r, d, d, d, d]
      },
      CENTERS: {
        pieces: [p, d, d, d, d, d]
      }
    }
  },
  ELS: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, d, d, d, d, r, d, d, d]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  LL: {
    orbits: {
      EDGES: {
        pieces: [r, r, r, r, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [r, r, r, r, d, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  F2L: {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, r, r, r, r, r, r, r, r]
      },
      CORNERS: {
        pieces: [i, i, i, i, r, r, r, r]
      },
      CENTERS: {
        pieces: [d, r, r, r, r, r]
      }
    }
  },
  ZBLL: {
    orbits: {
      EDGES: {
        pieces: [p, p, p, p, d, d, d, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [r, r, r, r, d, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  ZBLS: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, d, d, d, d, r, d, d, d]
      },
      CORNERS: {
        pieces: [i, i, i, i, r, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  WVLS: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, d, d, d, d, r, d, d, d]
      },
      CORNERS: {
        pieces: [o, o, o, o, r, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  VLS: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, d, d, d, d, r, d, d, d]
      },
      CORNERS: {
        pieces: [o, o, o, o, r, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, d, d, d, d]
      }
    }
  },
  LS: {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, d, d, d, d, r, d, d, d]
      },
      CORNERS: {
        pieces: [i, i, i, i, r, d, d, d]
      },
      CENTERS: {
        pieces: [d, d, d, d, d, d]
      }
    }
  },
  EO: {
    orbits: {
      EDGES: {
        pieces: [oi, oi, oi, oi, oi, oi, oi, oi, oi, oi, oi, oi]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, i, i, i]
      }
    }
  },
  CMLL: {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, i, d, i, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [r, r, r, r, d, d, d, d]
      },
      CENTERS: {
        pieces: [i, d, i, d, i, i]
      }
    }
  },
  L6E: {
    orbits: {
      EDGES: {
        pieces: [r, r, r, r, r, d, r, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [d, d, d, d, d, d, d, d]
      },
      CENTERS: {
        pieces: [r, d, r, d, r, r]
      }
    }
  },
  L6EO: {
    orbits: {
      EDGES: {
        pieces: [oi, oi, oi, oi, oi, d, oi, d, d, d, d, d]
      },
      CORNERS: {
        pieces: [d, d, d, d, d, d, d, d]
      },
      CENTERS: {
        pieces: [oi, d, i, d, i, oi]
      }
    }
  },
  Daisy: {
    orbits: {
      EDGES: {
        pieces: [o, o, o, o, i, i, i, i, i, i, i, i]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, i, i, i]
      },
      CENTERS: {
        pieces: [d, d, d, d, d, o]
      }
    }
  },
  Cross: {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, r, r, r, r, i, i, i, i]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, i, i, i]
      },
      CENTERS: {
        pieces: [d, d, d, d, d, r]
      }
    }
  },
  "2x2x2": {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, i, i, r, r, i, i, i, r]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, i, r, i]
      },
      CENTERS: {
        pieces: [d, r, d, d, r, r]
      }
    }
  },
  "2x2x3": {
    orbits: {
      EDGES: {
        pieces: [i, i, i, i, r, i, d, d, i, r, i, d]
      },
      CORNERS: {
        pieces: [i, i, i, i, i, r, d, i]
      },
      CENTERS: {
        pieces: [d, d, r, d, d, d]
      }
    }
  },
  "Void Cube": {
    orbits: {
      EDGES: {
        pieces: [r, r, r, r, r, r, r, r, r, r, r, r]
      },
      CORNERS: {
        pieces: [r, r, r, r, r, r, r, r]
      },
      CENTERS: {
        pieces: [invis, invis, invis, invis, invis, invis]
      }
    }
  },
  invisible: {
    orbits: {
      EDGES: {
        pieces: [
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis,
          invis
        ]
      },
      CORNERS: {
        pieces: [invis, invis, invis, invis, invis, invis, invis, invis]
      },
      CENTERS: {
        pieces: [invis, invis, invis, invis, invis, invis]
      }
    }
  },
  picture: {
    orbits: {
      EDGES: {
        pieces: [c, c, c, c, c, c, c, c, c, c, c, c]
      },
      CORNERS: {
        pieces: [c, c, c, c, c, c, c, c]
      },
      CENTERS: {
        pieces: [c, c, c, c, c, c]
      }
    }
  }
};

// src/cubing/twisty/3D/puzzles/Cube3D.ts
var svgLoader = new TextureLoader();
var ignoredMaterial = new MeshBasicMaterial({
  color: 4473924,
  side: DoubleSide
});
var ignoredMaterialHint = new MeshBasicMaterial({
  color: 13421772,
  side: BackSide
});
var invisibleMaterial = new MeshBasicMaterial({
  visible: false
});
var orientedMaterial = new MeshBasicMaterial({
  color: 16746751
});
var orientedMaterialHint = new MeshBasicMaterial({
  color: 16746751,
  side: BackSide
});
var AxisInfo = class {
  constructor(vector, fromZ, color, dimColor) {
    this.vector = vector;
    this.fromZ = fromZ;
    this.color = color;
    this.dimColor = dimColor;
    this.stickerMaterial = {
      regular: new MeshBasicMaterial({
        color,
        side: DoubleSide
      }),
      dim: new MeshBasicMaterial({
        color: dimColor,
        side: DoubleSide
      }),
      oriented: orientedMaterial,
      ignored: ignoredMaterial,
      invisible: invisibleMaterial
    };
    this.hintStickerMaterial = {
      regular: new MeshBasicMaterial({
        color,
        side: BackSide
      }),
      dim: new MeshBasicMaterial({
        color: dimColor,
        side: BackSide,
        transparent: true,
        opacity: 0.75
      }),
      oriented: orientedMaterialHint,
      ignored: ignoredMaterialHint,
      invisible: invisibleMaterial
    };
  }
};
var axesInfo = [
  new AxisInfo(new Vector35(0, 1, 0), new Euler(-TAU / 4, 0, 0), 16777215, 14540253),
  new AxisInfo(new Vector35(-1, 0, 0), new Euler(0, -TAU / 4, 0), 16746496, 8930304),
  new AxisInfo(new Vector35(0, 0, 1), new Euler(0, 0, 0), 65280, 34816),
  new AxisInfo(new Vector35(1, 0, 0), new Euler(0, TAU / 4, 0), 16711680, 6684672),
  new AxisInfo(new Vector35(0, 0, -1), new Euler(0, TAU / 2, 0), 255, 136),
  new AxisInfo(new Vector35(0, -1, 0), new Euler(TAU / 4, 0, 0), 16776960, 8947712)
];
var face = {
  U: 0,
  L: 1,
  F: 2,
  R: 3,
  B: 4,
  D: 5
};
var familyToAxis = {
  U: face.U,
  u: face.U,
  y: face.U,
  L: face.L,
  l: face.L,
  M: face.L,
  F: face.F,
  f: face.F,
  S: face.F,
  z: face.F,
  R: face.R,
  r: face.R,
  x: face.R,
  B: face.B,
  b: face.B,
  D: face.D,
  d: face.D,
  E: face.D
};
var cubieDimensions = {
  stickerWidth: 0.85,
  stickerElevation: 0.501,
  foundationWidth: 1,
  hintStickerElevation: 1.45
};
var EXPERIMENTAL_PICTURE_CUBE_HINT_ELEVATION = 2;
var cube3DOptionsDefaults = {
  showMainStickers: true,
  hintFacelets: "floating",
  showFoundation: true,
  experimentalStickering: "full"
};
var blackMesh = new MeshBasicMaterial({
  color: 0,
  opacity: 1,
  transparent: true
});
var blackTranslucentMesh = new MeshBasicMaterial({
  color: 0,
  opacity: 0.3,
  transparent: true
});
var CubieDef = class {
  constructor(orbit, stickerFaceNames, q) {
    this.orbit = orbit;
    const individualStickerFaceNames = typeof stickerFaceNames === "string" ? stickerFaceNames.split("") : stickerFaceNames;
    this.stickerFaces = individualStickerFaceNames.map((s) => face[s]);
    this.matrix = new Matrix4();
    this.matrix.setPosition(firstPiecePosition[orbit]);
    this.matrix.premultiply(new Matrix4().makeRotationFromQuaternion(q));
  }
};
function t(v, t4) {
  return new Quaternion().setFromAxisAngle(v, TAU * t4 / 4);
}
var r2 = {
  O: new Vector35(0, 0, 0),
  U: new Vector35(0, -1, 0),
  L: new Vector35(1, 0, 0),
  F: new Vector35(0, 0, -1),
  R: new Vector35(-1, 0, 0),
  B: new Vector35(0, 0, 1),
  D: new Vector35(0, 1, 0)
};
var firstPiecePosition = {
  EDGES: new Vector35(0, 1, 1),
  CORNERS: new Vector35(1, 1, 1),
  CENTERS: new Vector35(0, 1, 0)
};
var orientationRotation = {
  EDGES: [0, 1].map((i2) => new Matrix4().makeRotationAxis(firstPiecePosition.EDGES.clone().normalize(), -i2 * TAU / 2)),
  CORNERS: [0, 1, 2].map((i2) => new Matrix4().makeRotationAxis(firstPiecePosition.CORNERS.clone().normalize(), -i2 * TAU / 3)),
  CENTERS: [0, 1, 2, 3].map((i2) => new Matrix4().makeRotationAxis(firstPiecePosition.CENTERS.clone().normalize(), -i2 * TAU / 4))
};
var cubieStickerOrder = [face.U, face.F, face.R];
var pieceDefs = {
  EDGES: [
    new CubieDef("EDGES", "UF", t(r2.O, 0)),
    new CubieDef("EDGES", "UR", t(r2.U, 3)),
    new CubieDef("EDGES", "UB", t(r2.U, 2)),
    new CubieDef("EDGES", "UL", t(r2.U, 1)),
    new CubieDef("EDGES", "DF", t(r2.F, 2)),
    new CubieDef("EDGES", "DR", t(r2.F, 2).premultiply(t(r2.D, 1))),
    new CubieDef("EDGES", "DB", t(r2.F, 2).premultiply(t(r2.D, 2))),
    new CubieDef("EDGES", "DL", t(r2.F, 2).premultiply(t(r2.D, 3))),
    new CubieDef("EDGES", "FR", t(r2.U, 3).premultiply(t(r2.R, 3))),
    new CubieDef("EDGES", "FL", t(r2.U, 1).premultiply(t(r2.R, 3))),
    new CubieDef("EDGES", "BR", t(r2.U, 3).premultiply(t(r2.R, 1))),
    new CubieDef("EDGES", "BL", t(r2.U, 1).premultiply(t(r2.R, 1)))
  ],
  CORNERS: [
    new CubieDef("CORNERS", "UFR", t(r2.O, 0)),
    new CubieDef("CORNERS", "URB", t(r2.U, 3)),
    new CubieDef("CORNERS", "UBL", t(r2.U, 2)),
    new CubieDef("CORNERS", "ULF", t(r2.U, 1)),
    new CubieDef("CORNERS", "DRF", t(r2.F, 2).premultiply(t(r2.D, 1))),
    new CubieDef("CORNERS", "DFL", t(r2.F, 2).premultiply(t(r2.D, 0))),
    new CubieDef("CORNERS", "DLB", t(r2.F, 2).premultiply(t(r2.D, 3))),
    new CubieDef("CORNERS", "DBR", t(r2.F, 2).premultiply(t(r2.D, 2)))
  ],
  CENTERS: [
    new CubieDef("CENTERS", "U", t(r2.O, 0)),
    new CubieDef("CENTERS", "L", t(r2.R, 3).premultiply(t(r2.U, 1))),
    new CubieDef("CENTERS", "F", t(r2.R, 3)),
    new CubieDef("CENTERS", "R", t(r2.R, 3).premultiply(t(r2.D, 1))),
    new CubieDef("CENTERS", "B", t(r2.R, 3).premultiply(t(r2.D, 2))),
    new CubieDef("CENTERS", "D", t(r2.R, 2))
  ]
};
var CUBE_SCALE = 1 / 3;
var pictureStickerCoords = {
  EDGES: [
    [
      [0, 4, 6],
      [0, 4, 5]
    ],
    [
      [3, 5, 7],
      [0, 7, 5]
    ],
    [
      [2, 4, 8],
      [0, 10, 5]
    ],
    [
      [1, 3, 7],
      [0, 1, 5]
    ],
    [
      [2, 4, 2],
      [2, 4, 3]
    ],
    [
      [3, 5, 1],
      [2, 7, 3]
    ],
    [
      [2, 4, 2],
      [2, 10, 3]
    ],
    [
      [1, 3, 1],
      [2, 1, 3]
    ],
    [
      [3, 5, 4],
      [3, 6, 4]
    ],
    [
      [1, 3, 4],
      [1, 2, 4]
    ],
    [
      [1, 9, 4],
      [1, 8, 4]
    ],
    [
      [3, 11, 4],
      [3, 0, 4]
    ]
  ],
  CORNERS: [
    [
      [0, 5, 6],
      [0, 5, 5],
      [0, 6, 5]
    ],
    [
      [3, 5, 8],
      [0, 8, 5],
      [0, 9, 5]
    ],
    [
      [2, 3, 8],
      [0, 11, 5],
      [0, 0, 5]
    ],
    [
      [1, 3, 6],
      [0, 2, 5],
      [0, 3, 5]
    ],
    [
      [3, 5, 2],
      [2, 6, 3],
      [2, 5, 3]
    ],
    [
      [2, 3, 2],
      [2, 3, 3],
      [2, 2, 3]
    ],
    [
      [1, 3, 0],
      [2, 0, 3],
      [2, 11, 3]
    ],
    [
      [0, 5, 0],
      [2, 9, 3],
      [2, 8, 3]
    ]
  ],
  CENTERS: [
    [[0, 4, 7]],
    [[0, 1, 4]],
    [[0, 4, 4]],
    [[0, 7, 4]],
    [[0, 10, 4]],
    [[0, 4, 1]]
  ]
};
var sharedCubieFoundationGeometryCache = null;
function sharedCubieFoundationGeometry() {
  return sharedCubieFoundationGeometryCache != null ? sharedCubieFoundationGeometryCache : sharedCubieFoundationGeometryCache = new BoxGeometry(cubieDimensions.foundationWidth, cubieDimensions.foundationWidth, cubieDimensions.foundationWidth);
}
function newStickerGeometry() {
  return new PlaneGeometry(cubieDimensions.stickerWidth, cubieDimensions.stickerWidth);
}
var sharedStickerGeometryCache = null;
function sharedStickerGeometry() {
  return sharedStickerGeometryCache != null ? sharedStickerGeometryCache : sharedStickerGeometryCache = newStickerGeometry();
}
var Cube3D = class extends Object3D {
  constructor(def, cursor, scheduleRenderCallback, options = {}) {
    super();
    this.def = def;
    this.scheduleRenderCallback = scheduleRenderCallback;
    this.pieces = {};
    this.experimentalHintStickerMeshes = [];
    this.experimentalFoundationMeshes = [];
    this.sprite = new Promise((resolve) => {
      this.setSpriteURL = (url) => {
        svgLoader.load(url, resolve);
      };
    });
    this.hintSprite = new Promise((resolve) => {
      this.setHintSpriteURL = (url) => {
        svgLoader.load(url, resolve);
      };
    });
    this.options = __assign({}, cube3DOptionsDefaults);
    Object.assign(this.options, options);
    if (this.def.name !== "3x3x3") {
      throw new Error(`Invalid puzzle for this Cube3D implementation: ${this.def.name}`);
    }
    this.kpuzzleFaceletInfo = {};
    for (const orbit in pieceDefs) {
      const orbitFaceletInfo = [];
      this.kpuzzleFaceletInfo[orbit] = orbitFaceletInfo;
      this.pieces[orbit] = pieceDefs[orbit].map(this.createCubie.bind(this, orbit, orbitFaceletInfo));
    }
    this.scale.set(CUBE_SCALE, CUBE_SCALE, CUBE_SCALE);
    if (this.options.experimentalStickering) {
      this.setAppearance(stickerings[this.options.experimentalStickering]);
    }
    cursor.addPositionListener(this);
  }
  experimentalSetStickerSpriteURL(stickerSpriteURL) {
    this.setSpriteURL(stickerSpriteURL);
  }
  experimentalSetHintStickerSpriteURL(hintStickerSpriteURL) {
    this.setHintSpriteURL(hintStickerSpriteURL);
  }
  setAppearance(appearance) {
    var _a;
    for (const [orbitName, orbitAppearance] of Object.entries(appearance.orbits)) {
      for (let pieceIdx = 0; pieceIdx < orbitAppearance.pieces.length; pieceIdx++) {
        const pieceAppearance = orbitAppearance.pieces[pieceIdx];
        if (pieceAppearance) {
          const pieceInfo = this.kpuzzleFaceletInfo[orbitName][pieceIdx];
          for (let faceletIdx = 0; faceletIdx < pieceInfo.length; faceletIdx++) {
            const faceletAppearance = pieceAppearance.facelets[faceletIdx];
            if (faceletAppearance) {
              const faceletInfo = pieceInfo[faceletIdx];
              const appearance2 = typeof faceletAppearance === "string" ? faceletAppearance : faceletAppearance == null ? void 0 : faceletAppearance.appearance;
              faceletInfo.facelet.material = axesInfo[faceletInfo.faceIdx].stickerMaterial[appearance2];
              const hintAppearance = typeof faceletAppearance === "string" ? appearance2 : (_a = faceletAppearance.hintAppearance) != null ? _a : appearance2;
              if (faceletInfo.hintFacelet) {
                faceletInfo.hintFacelet.material = axesInfo[faceletInfo.faceIdx].hintStickerMaterial[hintAppearance];
              }
            }
          }
        }
      }
    }
    if (this.scheduleRenderCallback) {
      this.scheduleRenderCallback();
    }
  }
  experimentalUpdateOptions(options) {
    if ("showMainStickers" in options) {
      throw new Error("Unimplemented");
    }
    const showFoundation = options.showFoundation;
    if (typeof showFoundation !== "undefined" && this.options.showFoundation !== showFoundation) {
      this.options.showFoundation = showFoundation;
      for (const foundation of this.experimentalFoundationMeshes) {
        foundation.visible = showFoundation;
      }
    }
    const hintFacelets = options.hintFacelets;
    if (typeof hintFacelets !== "undefined" && this.options.hintFacelets !== hintFacelets && hintFaceletStyles[hintFacelets]) {
      this.options.hintFacelets = hintFacelets;
      for (const hintSticker of this.experimentalHintStickerMeshes) {
        hintSticker.visible = hintFacelets === "floating";
      }
      this.scheduleRenderCallback();
    }
    const experimentalStickering = options.experimentalStickering;
    if (typeof experimentalStickering !== "undefined" && this.options.experimentalStickering !== experimentalStickering && experimentalStickerings[experimentalStickering]) {
      this.options.experimentalStickering = experimentalStickering;
      this.setAppearance(stickerings[experimentalStickering]);
      this.scheduleRenderCallback();
    }
  }
  onPositionChange(p2) {
    const reid333 = p2.state;
    for (const orbit in pieceDefs) {
      const pieces = pieceDefs[orbit];
      for (let i2 = 0; i2 < pieces.length; i2++) {
        const j = reid333[orbit].permutation[i2];
        this.pieces[orbit][j].matrix.copy(pieceDefs[orbit][i2].matrix);
        this.pieces[orbit][j].matrix.multiply(orientationRotation[orbit][reid333[orbit].orientation[i2]]);
      }
      for (const moveProgress of p2.movesInProgress) {
        const blockMove = moveProgress.move;
        const turnNormal = axesInfo[familyToAxis[blockMove.family]].vector;
        const moveMatrix = new Matrix4().makeRotationAxis(turnNormal, -this.ease(moveProgress.fraction) * moveProgress.direction * blockMove.amount * TAU / 4);
        for (let i2 = 0; i2 < pieces.length; i2++) {
          const k = this.def.moves[blockMove.family][orbit].permutation[i2];
          if (i2 !== k || this.def.moves[blockMove.family][orbit].orientation[i2] !== 0) {
            const j = reid333[orbit].permutation[i2];
            this.pieces[orbit][j].matrix.premultiply(moveMatrix);
          }
        }
      }
    }
    this.scheduleRenderCallback();
  }
  createCubie(orbit, orbitFacelets, piece, orbitPieceIdx) {
    const cubieFaceletInfo = [];
    orbitFacelets.push(cubieFaceletInfo);
    const cubie = new Group();
    if (this.options.showFoundation) {
      const foundation = this.createCubieFoundation();
      cubie.add(foundation);
      this.experimentalFoundationMeshes.push(foundation);
    }
    for (let i2 = 0; i2 < piece.stickerFaces.length; i2++) {
      const sticker = this.createSticker(axesInfo[cubieStickerOrder[i2]], axesInfo[piece.stickerFaces[i2]], false);
      const faceletInfo = {
        faceIdx: piece.stickerFaces[i2],
        facelet: sticker
      };
      cubie.add(sticker);
      if (this.options.hintFacelets === "floating") {
        const hintSticker = this.createSticker(axesInfo[cubieStickerOrder[i2]], axesInfo[piece.stickerFaces[i2]], true);
        cubie.add(hintSticker);
        faceletInfo.hintFacelet = hintSticker;
        this.experimentalHintStickerMeshes.push(hintSticker);
      }
      if (this.options.experimentalStickering === "picture" && pictureStickerCoords[orbit] && pictureStickerCoords[orbit][orbitPieceIdx] && pictureStickerCoords[orbit][orbitPieceIdx][i2]) {
        const [rotate, offsetX, offsetY] = pictureStickerCoords[orbit][orbitPieceIdx][i2];
        (() => __async(this, null, function* () {
          const addImageSticker = (hint) => __async(this, null, function* () {
            const texture = yield hint ? this.hintSprite : this.sprite;
            const mesh = this.createSticker(axesInfo[cubieStickerOrder[i2]], axesInfo[piece.stickerFaces[i2]], hint);
            mesh.material = new MeshBasicMaterial({
              map: texture,
              side: hint ? BackSide : DoubleSide,
              transparent: true
            });
            const x1 = offsetX / 12;
            const x2 = (offsetX + 1) / 12;
            const y1 = offsetY / 9;
            const y2 = (offsetY + 1) / 9;
            let v1 = new Vector2(x1, y1);
            let v2 = new Vector2(x1, y2);
            let v3 = new Vector2(x2, y2);
            let v4 = new Vector2(x2, y1);
            switch (rotate) {
              case 1:
                [v1, v2, v3, v4] = [v2, v3, v4, v1];
                break;
              case 2:
                [v1, v2, v3, v4] = [v3, v4, v1, v2];
                break;
              case 3:
                [v1, v2, v3, v4] = [v4, v1, v2, v3];
                break;
            }
            mesh.geometry.faceVertexUvs = [
              [
                [v2, v1, v3],
                [v1, v4, v3]
              ]
            ];
            cubie.add(mesh);
          });
          addImageSticker(true);
          addImageSticker(false);
        }))();
      }
      cubieFaceletInfo.push(faceletInfo);
    }
    cubie.matrix.copy(piece.matrix);
    cubie.matrixAutoUpdate = false;
    this.add(cubie);
    return cubie;
  }
  createCubieFoundation() {
    const box = sharedCubieFoundationGeometry();
    return new Mesh(box, this.options.experimentalStickering === "picture" ? blackMesh : blackTranslucentMesh);
  }
  createSticker(posAxisInfo, materialAxisInfo, isHint) {
    const geo = this.options.experimentalStickering === "picture" ? newStickerGeometry() : sharedStickerGeometry();
    const stickerMesh = new Mesh(geo, isHint ? materialAxisInfo.hintStickerMaterial.regular : materialAxisInfo.stickerMaterial.regular);
    stickerMesh.setRotationFromEuler(posAxisInfo.fromZ);
    stickerMesh.position.copy(posAxisInfo.vector);
    stickerMesh.position.multiplyScalar(isHint ? this.options.experimentalStickering === "picture" ? EXPERIMENTAL_PICTURE_CUBE_HINT_ELEVATION : cubieDimensions.hintStickerElevation : cubieDimensions.stickerElevation);
    return stickerMesh;
  }
  ease(fraction) {
    return smootherStep(fraction);
  }
};

// src/cubing/twisty/3D/puzzles/PG3D.ts
import {
  Color,
  DoubleSide as DoubleSide2,
  Euler as Euler2,
  Face3,
  Geometry,
  Group as Group2,
  Mesh as Mesh2,
  MeshBasicMaterial as MeshBasicMaterial2,
  Object3D as Object3D2,
  Triangle,
  Vector3 as Vector36
} from "three";
var foundationMaterial = new MeshBasicMaterial2({
  side: DoubleSide2,
  color: 0
});
var stickerMaterial = new MeshBasicMaterial2({
  vertexColors: true
});
var polyMaterial = new MeshBasicMaterial2({
  visible: false
});
function makePoly(geo, coords, color, scale, ind, faceArray) {
  const vertind = [];
  for (const coord of coords) {
    const v = new Vector36(coord[0], coord[1], coord[2]);
    if (scale !== 1) {
      v.multiplyScalar(scale);
    }
    vertind.push(geo.vertices.length);
    geo.vertices.push(v);
  }
  for (let g = 1; g + 1 < vertind.length; g++) {
    const face2 = new Face3(vertind[0], vertind[g], vertind[g + 1]);
    face2.materialIndex = ind;
    face2.color = color;
    geo.faces.push(face2);
    faceArray.push(face2);
  }
}
var StickerDef = class {
  constructor(fixedGeo, stickerDat, hintStickers) {
    this.faceArray = [];
    this.twistVal = -1;
    this.origColor = new Color(stickerDat.color);
    this.faceColor = new Color(stickerDat.color);
    const coords = stickerDat.coords;
    makePoly(fixedGeo, coords, this.faceColor, 1, 0, this.faceArray);
    if (hintStickers) {
      let highArea = 0;
      let goodFace = null;
      for (const f of this.faceArray) {
        const t2 = new Triangle(fixedGeo.vertices[f.a], fixedGeo.vertices[f.b], fixedGeo.vertices[f.c]);
        const a = t2.getArea();
        if (a > highArea) {
          highArea = a;
          goodFace = t2;
        }
      }
      const norm = new Vector36();
      goodFace.getNormal(norm);
      norm.multiplyScalar(0.5);
      const hintCoords = [];
      for (let i2 = 0; i2 < coords.length; i2++) {
        const j = coords.length - 1 - i2;
        hintCoords.push([
          coords[j][0] + norm.x,
          coords[j][1] + norm.y,
          coords[j][2] + norm.z
        ]);
      }
      makePoly(fixedGeo, hintCoords, this.faceColor, 1, 0, this.faceArray);
    }
  }
  addFoundation(fixedGeo, foundationDat, black) {
    makePoly(fixedGeo, foundationDat.coords, black, 0.999, 2, this.faceArray);
  }
  setColor(c2) {
    if (!this.faceColor.equals(c2)) {
      this.faceColor.copy(c2);
      return 1;
    } else {
      return 0;
    }
  }
};
var HitPlaneDef = class {
  constructor(hitface) {
    this.cubie = new Group2();
    this.geo = new Geometry();
    const coords = hitface.coords;
    const vertind = [];
    for (const coord of coords) {
      const v = new Vector36(coord[0], coord[1], coord[2]);
      vertind.push(this.geo.vertices.length);
      this.geo.vertices.push(v);
    }
    for (let g = 1; g + 1 < vertind.length; g++) {
      const face2 = new Face3(vertind[0], vertind[g], vertind[g + 1]);
      this.geo.faces.push(face2);
    }
    this.geo.computeFaceNormals();
    const obj = new Mesh2(this.geo, polyMaterial);
    obj.userData.name = hitface.name;
    this.cubie.scale.setScalar(0.99);
    this.cubie.add(obj);
  }
};
var AxisInfo2 = class {
  constructor(axisDat) {
    const vec = axisDat[0];
    this.axis = new Vector36(vec[0], vec[1], vec[2]);
    this.order = axisDat[2];
  }
};
var PG_SCALE = 0.5;
var PG3D = class extends Object3D2 {
  constructor(cursor, scheduleRenderCallback, definition, pgdat, showFoundation = false, hintStickers = false) {
    super();
    this.scheduleRenderCallback = scheduleRenderCallback;
    this.definition = definition;
    this.pgdat = pgdat;
    this.stickerTargets = [];
    this.controlTargets = [];
    this.axesInfo = {};
    const axesDef = this.pgdat.axis;
    for (const axis of axesDef) {
      this.axesInfo[axis[1]] = new AxisInfo2(axis);
    }
    const stickers = this.pgdat.stickers;
    this.stickers = {};
    const materialArray1 = [
      stickerMaterial,
      polyMaterial,
      foundationMaterial,
      polyMaterial
    ];
    const materialArray2 = [
      polyMaterial,
      stickerMaterial,
      polyMaterial,
      foundationMaterial
    ];
    const fixedGeo = new Geometry();
    const black = new Color(0);
    for (let si = 0; si < stickers.length; si++) {
      const sticker = stickers[si];
      const orbit = sticker.orbit;
      const ord = sticker.ord;
      const ori = sticker.ori;
      if (!this.stickers[orbit]) {
        this.stickers[orbit] = [];
      }
      if (!this.stickers[orbit][ori]) {
        this.stickers[orbit][ori] = [];
      }
      const stickerdef = new StickerDef(fixedGeo, sticker, hintStickers);
      this.stickers[orbit][ori][ord] = stickerdef;
    }
    if (showFoundation) {
      for (let si = 0; si < stickers.length; si++) {
        const sticker = stickers[si];
        const foundation = this.pgdat.foundations[si];
        const orbit = sticker.orbit;
        const ord = sticker.ord;
        const ori = sticker.ori;
        this.stickers[orbit][ori][ord].addFoundation(fixedGeo, foundation, black);
      }
    }
    fixedGeo.computeFaceNormals();
    const obj = new Mesh2(fixedGeo, materialArray1);
    obj.scale.set(PG_SCALE, PG_SCALE, PG_SCALE);
    this.add(obj);
    const obj2 = new Mesh2(fixedGeo, materialArray2);
    obj2.scale.set(PG_SCALE, PG_SCALE, PG_SCALE);
    this.add(obj2);
    const hitfaces = this.pgdat.faces;
    this.movingObj = obj2;
    this.fixedGeo = fixedGeo;
    for (const hitface of hitfaces) {
      const facedef = new HitPlaneDef(hitface);
      facedef.cubie.scale.set(PG_SCALE, PG_SCALE, PG_SCALE);
      this.add(facedef.cubie);
      this.controlTargets.push(facedef.cubie.children[0]);
    }
    cursor.addPositionListener(this);
  }
  experimentalGetStickerTargets() {
    return this.stickerTargets;
  }
  experimentalGetControlTargets() {
    return this.controlTargets;
  }
  onPositionChange(p2) {
    const pos = p2.state;
    const noRotation = new Euler2();
    this.movingObj.rotation.copy(noRotation);
    let colormods = 0;
    if (!this.lastPos || !EquivalentTransformations(this.definition, this.lastPos, pos)) {
      for (const orbit in this.stickers) {
        const pieces = this.stickers[orbit];
        const pos2 = pos[orbit];
        const orin = pieces.length;
        for (let ori = 0; ori < orin; ori++) {
          const pieces2 = pieces[ori];
          for (let i2 = 0; i2 < pieces2.length; i2++) {
            const nori = (ori + orin - pos2.orientation[i2]) % orin;
            const ni = pos2.permutation[i2];
            colormods += pieces2[i2].setColor(pieces[nori][ni].origColor);
          }
        }
      }
      this.lastPos = pos;
    }
    let vismods = 0;
    for (const moveProgress of p2.movesInProgress) {
      const externalBlockMove = moveProgress.move;
      const unswizzled = this.pgdat.unswizzle(externalBlockMove);
      const blockMove = this.pgdat.notationMapper.notationToInternal(externalBlockMove);
      if (blockMove === null) {
        throw Error("Bad blockmove " + externalBlockMove.family);
      }
      const simpleMove = modifiedBlockMove(externalBlockMove, {amount: 1});
      const baseMove = stateForBlockMove(this.definition, simpleMove);
      const ax = this.axesInfo[unswizzled];
      const turnNormal = ax.axis;
      const angle = -this.ease(moveProgress.fraction) * moveProgress.direction * blockMove.amount * TAU / ax.order;
      this.movingObj.rotateOnAxis(turnNormal, angle);
      if (this.lastMove !== baseMove) {
        for (const orbit in this.stickers) {
          const pieces = this.stickers[orbit];
          const orin = pieces.length;
          const bmv = baseMove[orbit];
          for (let ori = 0; ori < orin; ori++) {
            const pieces2 = pieces[ori];
            for (let i2 = 0; i2 < pieces2.length; i2++) {
              const ni = bmv.permutation[i2];
              let tv = 0;
              if (ni !== i2 || bmv.orientation[i2] !== 0) {
                tv = 1;
              }
              if (tv !== pieces2[i2].twistVal) {
                if (tv) {
                  for (const f of pieces2[i2].faceArray) {
                    f.materialIndex |= 1;
                  }
                } else {
                  for (const f of pieces2[i2].faceArray) {
                    f.materialIndex &= ~1;
                  }
                }
                pieces2[i2].twistVal = tv;
                vismods++;
              }
            }
          }
        }
        this.lastMove = baseMove;
      }
    }
    if (vismods) {
      this.fixedGeo.groupsNeedUpdate = true;
    }
    if (colormods) {
      this.fixedGeo.colorsNeedUpdate = true;
    }
    this.scheduleRenderCallback();
  }
  ease(fraction) {
    return smootherStep(fraction);
  }
};

// src/cubing/twisty/3D/Twisty3DScene.ts
import {Scene as ThreeScene} from "three";
var Twisty3DScene = class extends ThreeScene {
  constructor() {
    super();
    this.renderTargets = new Set();
    this.twisty3Ds = new Set();
  }
  addRenderTarget(renderTarget) {
    this.renderTargets.add(renderTarget);
  }
  scheduleRender() {
    for (const renderTarget of this.renderTargets) {
      renderTarget.scheduleRender();
    }
  }
  addTwisty3DPuzzle(twisty3DPuzzle) {
    this.twisty3Ds.add(twisty3DPuzzle);
    this.add(twisty3DPuzzle);
  }
  removeTwisty3DPuzzle(twisty3DPuzzle) {
    this.twisty3Ds.delete(twisty3DPuzzle);
    this.remove(twisty3DPuzzle);
  }
  clearPuzzles() {
    for (const puz of this.twisty3Ds) {
      this.remove(puz);
    }
    this.twisty3Ds.clear();
  }
};

// src/cubing/twisty/3D/puzzles/KPuzzleWrapper.ts
var PuzzleWrapper = class {
  multiply(state, amount) {
    if (amount < 0) {
      return this.invert(this.multiply(state, -amount));
    }
    let newState = this.identity();
    while (amount > 0) {
      if (amount % 2 === 1) {
        newState = this.combine(newState, state);
      }
      amount = Math.floor(amount / 2);
      state = this.combine(state, state);
    }
    return newState;
  }
};
var KPuzzleWrapper = class extends PuzzleWrapper {
  constructor(definition) {
    super();
    this.definition = definition;
    this.moveStash = {};
  }
  static fromID(id) {
    return __async(this, null, function* () {
      return new KPuzzleWrapper(yield puzzles[id].def());
    });
  }
  startState() {
    return this.definition.startPieces;
  }
  invert(state) {
    return Invert(this.definition, state);
  }
  combine(s1, s2) {
    return Combine(this.definition, s1, s2);
  }
  stateFromMove(blockMove) {
    const key = blockMoveToString(blockMove);
    if (!this.moveStash[key]) {
      this.moveStash[key] = stateForBlockMove(this.definition, blockMove);
    }
    return this.moveStash[key];
  }
  identity() {
    return IdentityTransformation(this.definition);
  }
  equivalent(s1, s2) {
    return EquivalentStates(this.definition, s1, s2);
  }
};

// src/cubing/twisty/animation/indexer/AlgIndexer.ts
var CountAnimatedMoves = class extends TraversalUp {
  traverseSequence(sequence) {
    let total = 0;
    for (const part of sequence.nestedUnits) {
      total += this.traverse(part);
    }
    return total;
  }
  traverseGroup(group) {
    return this.traverseSequence(group.nestedSequence);
  }
  traverseBlockMove(_blockMove) {
    return 1;
  }
  traverseCommutator(commutator) {
    return 2 * (this.traverseSequence(commutator.A) + this.traverseSequence(commutator.B));
  }
  traverseConjugate(conjugate) {
    return 2 * this.traverseSequence(conjugate.A) + this.traverseSequence(conjugate.B);
  }
  traversePause(_pause) {
    return 0;
  }
  traverseNewLine(_newLine) {
    return 0;
  }
  traverseComment(_comment) {
    return 0;
  }
};
function invertBlockMove(bm) {
  return new BlockMove(bm.outerLayer, bm.innerLayer, bm.family, -bm.amount);
}
var countAnimatedMovesInstance = new CountAnimatedMoves();
var countAnimatedMoves = countAnimatedMovesInstance.traverse.bind(countAnimatedMovesInstance);

// src/cubing/twisty/animation/indexer/AlgDuration.ts
function defaultDurationForAmount(amount) {
  switch (Math.abs(amount)) {
    case 0:
      return 0;
    case 1:
      return 1e3;
    case 2:
      return 1500;
    default:
      return 2e3;
  }
}
var AlgDuration = class extends TraversalUp {
  constructor(durationForAmount = defaultDurationForAmount) {
    super();
    this.durationForAmount = durationForAmount;
  }
  traverseSequence(sequence) {
    let total = 0;
    for (const alg14 of sequence.nestedUnits) {
      total += this.traverse(alg14);
    }
    return total;
  }
  traverseGroup(group) {
    return group.amount * this.traverse(group.nestedSequence);
  }
  traverseBlockMove(blockMove) {
    return this.durationForAmount(blockMove.amount);
  }
  traverseCommutator(commutator) {
    return commutator.amount * 2 * (this.traverse(commutator.A) + this.traverse(commutator.B));
  }
  traverseConjugate(conjugate) {
    return conjugate.amount * (2 * this.traverse(conjugate.A) + this.traverse(conjugate.B));
  }
  traversePause(_pause) {
    return this.durationForAmount(1);
  }
  traverseNewLine(_newLine) {
    return this.durationForAmount(1);
  }
  traverseComment(_comment) {
    return this.durationForAmount(0);
  }
};

// src/cubing/twisty/animation/indexer/tree/walker.ts
var AlgPartDecoration = class {
  constructor(_puz, moveCount, duration, forward, backward, children = []) {
    this.moveCount = moveCount;
    this.duration = duration;
    this.forward = forward;
    this.backward = backward;
    this.children = children;
  }
};
var DecoratorConstructor = class extends TraversalUp {
  constructor(puz) {
    super();
    this.puz = puz;
    this.durationFn = new AlgDuration(defaultDurationForAmount);
    this.identity = puz.identity();
    this.dummyLeaf = new AlgPartDecoration(puz, 0, 0, this.identity, this.identity, []);
  }
  traverseSequence(sequence) {
    let moveCount = 0;
    let duration = 0;
    let state = this.identity;
    const child = [];
    for (const part of sequence.nestedUnits) {
      const apd = this.traverse(part);
      moveCount += apd.moveCount;
      duration += apd.duration;
      state = this.puz.combine(state, apd.forward);
      child.push(apd);
    }
    return new AlgPartDecoration(this.puz, moveCount, duration, state, this.puz.invert(state), child);
  }
  traverseGroup(group) {
    const dec = this.traverseSequence(group.nestedSequence);
    return this.mult(dec, group.amount, [dec]);
  }
  traverseBlockMove(blockMove) {
    return new AlgPartDecoration(this.puz, 1, this.durationFn.traverse(blockMove), this.puz.stateFromMove(blockMove), this.puz.stateFromMove(invertBlockMove(blockMove)));
  }
  traverseCommutator(commutator) {
    const decA = this.traverseSequence(commutator.A);
    const decB = this.traverseSequence(commutator.B);
    const AB = this.puz.combine(decA.forward, decB.forward);
    const ApBp = this.puz.combine(decA.backward, decB.backward);
    const ABApBp = this.puz.combine(AB, ApBp);
    const dec = new AlgPartDecoration(this.puz, 2 * (decA.moveCount + decB.moveCount), 2 * (decA.duration + decB.duration), ABApBp, this.puz.invert(ABApBp), [decA, decB]);
    return this.mult(dec, commutator.amount, [dec, decA, decB]);
  }
  traverseConjugate(conjugate) {
    const decA = this.traverseSequence(conjugate.A);
    const decB = this.traverseSequence(conjugate.B);
    const AB = this.puz.combine(decA.forward, decB.forward);
    const ABAp = this.puz.combine(AB, decA.backward);
    const dec = new AlgPartDecoration(this.puz, 2 * decA.moveCount + decB.moveCount, 2 * decA.duration + decB.duration, ABAp, this.puz.invert(ABAp), [decA, decB]);
    return this.mult(dec, conjugate.amount, [dec, decA, decB]);
  }
  traversePause(pause) {
    return new AlgPartDecoration(this.puz, 1, this.durationFn.traverse(pause), this.identity, this.identity);
  }
  traverseNewLine(_newLine) {
    return this.dummyLeaf;
  }
  traverseComment(_comment) {
    return this.dummyLeaf;
  }
  mult(apd, n, child) {
    const absn = Math.abs(n);
    const st = this.puz.multiply(apd.forward, n);
    return new AlgPartDecoration(this.puz, apd.moveCount * absn, apd.duration * absn, st, this.puz.invert(st), child);
  }
};
var WalkerDown = class {
  constructor(apd, back) {
    this.apd = apd;
    this.back = back;
  }
};
var AlgWalker = class extends TraversalDownUp {
  constructor(puz, alg14, apd) {
    super();
    this.puz = puz;
    this.alg = alg14;
    this.apd = apd;
    this.i = -1;
    this.dur = -1;
    this.goali = -1;
    this.goaldur = -1;
    this.mv = void 0;
    this.back = false;
    this.moveDur = 0;
    this.st = this.puz.identity();
    this.root = new WalkerDown(this.apd, false);
  }
  moveByIndex(loc) {
    if (this.i >= 0 && this.i === loc) {
      return this.mv !== void 0;
    }
    return this.dosearch(loc, Infinity);
  }
  moveByDuration(dur) {
    if (this.dur >= 0 && this.dur < dur && this.dur + this.moveDur >= dur) {
      return this.mv !== void 0;
    }
    return this.dosearch(Infinity, dur);
  }
  dosearch(loc, dur) {
    this.goali = loc;
    this.goaldur = dur;
    this.i = 0;
    this.dur = 0;
    this.mv = void 0;
    this.moveDur = 0;
    this.back = false;
    this.st = this.puz.identity();
    const r3 = this.traverse(this.alg, this.root);
    return r3;
  }
  traverseSequence(sequence, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    if (wd.back) {
      for (let i2 = sequence.nestedUnits.length - 1; i2 >= 0; i2--) {
        const part = sequence.nestedUnits[i2];
        if (this.traverse(part, new WalkerDown(wd.apd.children[i2], wd.back))) {
          return true;
        }
      }
    } else {
      for (let i2 = 0; i2 < sequence.nestedUnits.length; i2++) {
        const part = sequence.nestedUnits[i2];
        if (this.traverse(part, new WalkerDown(wd.apd.children[i2], wd.back))) {
          return true;
        }
      }
    }
    return false;
  }
  traverseGroup(group, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    const back = this.domult(wd, group.amount);
    return this.traverse(group.nestedSequence, new WalkerDown(wd.apd.children[0], back));
  }
  traverseBlockMove(blockMove, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    this.mv = blockMove;
    this.moveDur = wd.apd.duration;
    this.back = wd.back;
    return true;
  }
  traverseCommutator(commutator, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    const back = this.domult(wd, commutator.amount);
    if (back) {
      return this.traverse(commutator.B, new WalkerDown(wd.apd.children[2], !back)) || this.traverse(commutator.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverse(commutator.B, new WalkerDown(wd.apd.children[2], back)) || this.traverse(commutator.A, new WalkerDown(wd.apd.children[1], back));
    } else {
      return this.traverse(commutator.A, new WalkerDown(wd.apd.children[1], back)) || this.traverse(commutator.B, new WalkerDown(wd.apd.children[2], back)) || this.traverse(commutator.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverse(commutator.B, new WalkerDown(wd.apd.children[2], !back));
    }
  }
  traverseConjugate(conjugate, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    const back = this.domult(wd, conjugate.amount);
    if (back) {
      return this.traverse(conjugate.A, new WalkerDown(wd.apd.children[1], !back)) || this.traverse(conjugate.B, new WalkerDown(wd.apd.children[2], back)) || this.traverse(conjugate.A, new WalkerDown(wd.apd.children[1], back));
    } else {
      return this.traverse(conjugate.A, new WalkerDown(wd.apd.children[1], back)) || this.traverse(conjugate.B, new WalkerDown(wd.apd.children[2], back)) || this.traverse(conjugate.A, new WalkerDown(wd.apd.children[1], !back));
    }
  }
  traversePause(pause, wd) {
    if (!this.firstcheck(wd)) {
      return false;
    }
    this.mv = pause;
    this.moveDur = wd.apd.duration;
    this.back = wd.back;
    return true;
  }
  traverseNewLine(_newLine, _wd) {
    return false;
  }
  traverseComment(_comment, _wd) {
    return false;
  }
  firstcheck(wd) {
    if (wd.apd.moveCount + this.i <= this.goali && wd.apd.duration + this.dur < this.goaldur) {
      return this.keepgoing(wd);
    }
    return true;
  }
  domult(wd, amount) {
    let back = wd.back;
    if (amount === 0) {
      return back;
    }
    if (amount < 0) {
      back = !back;
      amount = -amount;
    }
    const base = wd.apd.children[0];
    const full = Math.min(Math.floor((this.goali - this.i) / base.moveCount), Math.ceil((this.goaldur - this.dur) / base.duration - 1));
    if (full > 0) {
      this.keepgoing(new WalkerDown(base, back), full);
    }
    return back;
  }
  keepgoing(wd, mul = 1) {
    this.i += mul * wd.apd.moveCount;
    this.dur += mul * wd.apd.duration;
    if (mul !== 1) {
      if (wd.back) {
        this.st = this.puz.combine(this.st, this.puz.multiply(wd.apd.backward, mul));
      } else {
        this.st = this.puz.combine(this.st, this.puz.multiply(wd.apd.forward, mul));
      }
    } else {
      if (wd.back) {
        this.st = this.puz.combine(this.st, wd.apd.backward);
      } else {
        this.st = this.puz.combine(this.st, wd.apd.forward);
      }
    }
    return false;
  }
};

// src/cubing/twisty/animation/indexer/tree/TreeAlgIndexer.ts
var TreeAlgIndexer = class {
  constructor(puzzle, alg14) {
    this.puzzle = puzzle;
    const deccon = new DecoratorConstructor(this.puzzle);
    this.decoration = deccon.traverse(alg14);
    this.walker = new AlgWalker(this.puzzle, alg14, this.decoration);
  }
  getMove(index) {
    if (this.walker.moveByIndex(index)) {
      if (!this.walker.mv) {
        throw new Error("`this.walker.mv` missing");
      }
      const bm = this.walker.mv;
      if (this.walker.back) {
        return invertBlockMove(bm);
      }
      return bm;
    }
    throw new Error("Out of algorithm: index " + index);
  }
  indexToMoveStartTimestamp(index) {
    if (this.walker.moveByIndex(index) || this.walker.i === index) {
      return this.walker.dur;
    }
    throw new Error("Out of algorithm: index " + index);
  }
  indexToMovesInProgress(index) {
    if (this.walker.moveByIndex(index) || this.walker.i === index) {
      return this.walker.dur;
    }
    throw new Error("Out of algorithm: index " + index);
  }
  stateAtIndex(index, startTransformation) {
    this.walker.moveByIndex(index);
    return this.puzzle.combine(startTransformation != null ? startTransformation : this.puzzle.startState(), this.walker.st);
  }
  transformAtIndex(index) {
    this.walker.moveByIndex(index);
    return this.walker.st;
  }
  numMoves() {
    return this.decoration.moveCount;
  }
  timestampToIndex(timestamp) {
    this.walker.moveByDuration(timestamp);
    return this.walker.i;
  }
  algDuration() {
    return this.decoration.duration;
  }
  moveDuration(index) {
    this.walker.moveByIndex(index);
    return this.walker.moveDur;
  }
};

// src/cubing/twisty/animation/cursor/CursorTypes.ts
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forwards"] = 1] = "Forwards";
  Direction2[Direction2["Paused"] = 0] = "Paused";
  Direction2[Direction2["Backwards"] = -1] = "Backwards";
})(Direction || (Direction = {}));
function directionScalar(direction) {
  return direction;
}
var BoundaryType;
(function(BoundaryType2) {
  BoundaryType2[BoundaryType2["Move"] = 0] = "Move";
  BoundaryType2[BoundaryType2["EntireTimeline"] = 1] = "EntireTimeline";
})(BoundaryType || (BoundaryType = {}));

// src/cubing/twisty/animation/cursor/AlgCursor.ts
var AlgCursor = class {
  constructor(timeline, def, alg14, startStateSequence) {
    this.timeline = timeline;
    this.def = def;
    this.alg = alg14;
    this.positionListeners = new Set();
    this.indexerConstructor = TreeAlgIndexer;
    this.ksolvePuzzle = new KPuzzleWrapper(def);
    this.instantiateIndexer(alg14);
    this.startState = startStateSequence ? this.algToState(startStateSequence) : this.ksolvePuzzle.startState();
    timeline.addTimestampListener(this);
  }
  setStartState(startState) {
    this.startState = startState;
    this.dispatchPositionForTimestamp(this.timeline.timestamp);
  }
  experimentalSetIndexer(indexerConstructor) {
    this.indexerConstructor = indexerConstructor;
    this.instantiateIndexer(this.alg);
    this.timeline.onCursorChange(this);
    this.dispatchPositionForTimestamp(this.timeline.timestamp);
  }
  instantiateIndexer(alg14) {
    this.todoIndexer = new this.indexerConstructor(this.ksolvePuzzle, alg14);
  }
  algToState(s) {
    const kpuzzle5 = new KPuzzle(this.def);
    kpuzzle5.applyAlg(s);
    return this.ksolvePuzzle.combine(this.def.startPieces, kpuzzle5.state);
  }
  timeRange() {
    return {
      start: 0,
      end: this.todoIndexer.algDuration()
    };
  }
  experimentalTimestampForStartOfLastMove() {
    const numMoves = this.todoIndexer.numMoves();
    if (numMoves > 0) {
      return this.todoIndexer.indexToMoveStartTimestamp(numMoves - 1);
    }
    return 0;
  }
  addPositionListener(positionListener) {
    this.positionListeners.add(positionListener);
    this.dispatchPositionForTimestamp(this.timeline.timestamp, [
      positionListener
    ]);
  }
  removePositionListener(positionListener) {
    this.positionListeners.delete(positionListener);
  }
  onTimelineTimestampChange(timestamp) {
    this.dispatchPositionForTimestamp(timestamp);
  }
  dispatchPositionForTimestamp(timestamp, listeners = this.positionListeners) {
    let position;
    if (this.todoIndexer.timestampToPosition) {
      position = this.todoIndexer.timestampToPosition(timestamp, this.startState);
    } else {
      const idx = this.todoIndexer.timestampToIndex(timestamp);
      const state = this.todoIndexer.stateAtIndex(idx, this.startState);
      position = {
        state,
        movesInProgress: []
      };
      if (this.todoIndexer.numMoves() > 0) {
        const fraction = (timestamp - this.todoIndexer.indexToMoveStartTimestamp(idx)) / this.todoIndexer.moveDuration(idx);
        if (fraction === 1) {
          position.state = this.ksolvePuzzle.combine(state, this.ksolvePuzzle.stateFromMove(this.todoIndexer.getMove(idx)));
        } else if (fraction > 0) {
          position.movesInProgress.push({
            move: this.todoIndexer.getMove(idx),
            direction: Direction.Forwards,
            fraction
          });
        }
      }
    }
    for (const listener of listeners) {
      listener.onPositionChange(position);
    }
  }
  onTimeRangeChange(_timeRange) {
  }
  setAlg(alg14) {
    this.alg = alg14;
    this.instantiateIndexer(alg14);
    this.timeline.onCursorChange(this);
    this.dispatchPositionForTimestamp(this.timeline.timestamp);
  }
  moveBoundary(timestamp, direction) {
    if (this.todoIndexer.numMoves() === 0) {
      return null;
    }
    const offsetHack = directionScalar(direction) * 1e-3;
    const idx = this.todoIndexer.timestampToIndex(timestamp + offsetHack);
    const moveStart = this.todoIndexer.indexToMoveStartTimestamp(idx);
    if (direction === Direction.Backwards) {
      return timestamp >= moveStart ? moveStart : null;
    } else {
      const moveEnd = moveStart + this.todoIndexer.moveDuration(idx);
      return timestamp <= moveEnd ? moveEnd : null;
    }
  }
  setPuzzle(def, alg14 = this.alg, startStateSequence) {
    this.ksolvePuzzle = new KPuzzleWrapper(def);
    this.def = def;
    this.todoIndexer = new this.indexerConstructor(this.ksolvePuzzle, alg14);
    if (alg14 !== this.alg) {
      this.timeline.onCursorChange(this);
    }
    this.setStartState(startStateSequence ? this.algToState(startStateSequence) : this.ksolvePuzzle.startState());
    this.alg = alg14;
  }
};

// src/cubing/twisty/animation/indexer/SimpleAlgIndexer.ts
var SimpleAlgIndexer = class {
  constructor(puzzle, alg14) {
    this.puzzle = puzzle;
    this.durationFn = new AlgDuration(defaultDurationForAmount);
    this.moves = expand(alg14);
  }
  getMove(index) {
    return this.moves.nestedUnits[index];
  }
  indexToMoveStartTimestamp(index) {
    const seq = new Sequence(this.moves.nestedUnits.slice(0, index));
    return this.durationFn.traverse(seq);
  }
  timestampToIndex(timestamp) {
    let cumulativeTime = 0;
    let i2;
    for (i2 = 0; i2 < this.numMoves(); i2++) {
      cumulativeTime += this.durationFn.traverseBlockMove(this.getMove(i2));
      if (cumulativeTime >= timestamp) {
        return i2;
      }
    }
    return i2;
  }
  stateAtIndex(index) {
    return this.puzzle.combine(this.puzzle.startState(), this.transformAtIndex(index));
  }
  transformAtIndex(index) {
    let state = this.puzzle.identity();
    for (const move of this.moves.nestedUnits.slice(0, index)) {
      state = this.puzzle.combine(state, this.puzzle.stateFromMove(move));
    }
    return state;
  }
  algDuration() {
    return this.durationFn.traverse(this.moves);
  }
  numMoves() {
    return countAnimatedMoves(this.moves);
  }
  moveDuration(index) {
    return this.durationFn.traverseBlockMove(this.getMove(index));
  }
};

// src/cubing/twisty/animation/indexer/simultaneous-moves/simul-moves.ts
var axisLookup = {
  u: "y",
  l: "x",
  f: "z",
  r: "x",
  b: "z",
  d: "y",
  m: "x",
  e: "y",
  s: "z",
  x: "x",
  y: "y",
  z: "z"
};
function isSameAxis(move1, move2) {
  return axisLookup[move1.family[0].toLowerCase()] === axisLookup[move2.family[0].toLowerCase()];
}
var LocalSimulMoves = class extends TraversalUp {
  traverseSequence(sequence) {
    const processed = [];
    for (const nestedUnit of sequence.nestedUnits) {
      processed.push(this.traverse(nestedUnit));
    }
    return Array.prototype.concat(...processed);
  }
  traverseGroupOnce(sequence) {
    if (sequence.nestedUnits.length === 0) {
      return [];
    }
    for (const unit of sequence.nestedUnits) {
      if (unit.type !== "blockMove")
        return this.traverse(sequence);
    }
    const blockMoves = sequence.nestedUnits;
    let maxSimulDur = defaultDurationForAmount(blockMoves[0].amount);
    for (let i2 = 0; i2 < blockMoves.length - 1; i2++) {
      for (let j = 1; j < blockMoves.length; j++) {
        if (!isSameAxis(blockMoves[i2], blockMoves[j])) {
          return this.traverse(sequence);
        }
      }
      maxSimulDur = Math.max(maxSimulDur, defaultDurationForAmount(blockMoves[i2].amount));
    }
    const localMovesWithRange = blockMoves.map((blockMove) => {
      return {
        move: blockMove,
        msUntilNext: 0,
        duration: maxSimulDur
      };
    });
    localMovesWithRange[localMovesWithRange.length - 1].msUntilNext = maxSimulDur;
    return localMovesWithRange;
  }
  traverseGroup(group) {
    const processed = [];
    const segmentOnce = group.amount > 0 ? group.nestedSequence : invert(group.nestedSequence);
    for (let i2 = 0; i2 < Math.abs(group.amount); i2++) {
      processed.push(this.traverseGroupOnce(segmentOnce));
    }
    return Array.prototype.concat(...processed);
  }
  traverseBlockMove(blockMove) {
    const duration = defaultDurationForAmount(blockMove.amount);
    return [
      {
        move: blockMove,
        msUntilNext: duration,
        duration
      }
    ];
  }
  traverseCommutator(commutator) {
    const processed = [];
    const segmentsOnce = commutator.amount > 0 ? [
      commutator.A,
      commutator.B,
      invert(commutator.A),
      invert(commutator.B)
    ] : [
      commutator.B,
      commutator.A,
      invert(commutator.B),
      invert(commutator.A)
    ];
    for (let i2 = 0; i2 < Math.abs(commutator.amount); i2++) {
      for (const segment of segmentsOnce) {
        processed.push(this.traverseGroupOnce(segment));
      }
    }
    return Array.prototype.concat(...processed);
  }
  traverseConjugate(conjugate) {
    const processed = [];
    const segmentsOnce = conjugate.amount > 0 ? [conjugate.A, conjugate.B, invert(conjugate.A)] : [conjugate.A, invert(conjugate.B), invert(conjugate.A)];
    for (let i2 = 0; i2 < Math.abs(conjugate.amount); i2++) {
      for (const segment of segmentsOnce) {
        processed.push(this.traverseGroupOnce(segment));
      }
    }
    return Array.prototype.concat(...processed);
  }
  traversePause(_pause) {
    return [];
  }
  traverseNewLine(_newLine) {
    return [];
  }
  traverseComment(_comment) {
    return [];
  }
};
var localSimulMovesInstance = new LocalSimulMoves();
var localSimulMoves = localSimulMovesInstance.traverseSequence.bind(localSimulMovesInstance);
function simulMoves(a) {
  let timestamp = 0;
  const l = localSimulMoves(a).map((localSimulMove) => {
    const moveWithRange = {
      move: localSimulMove.move,
      start: timestamp,
      end: timestamp + localSimulMove.duration
    };
    timestamp += localSimulMove.msUntilNext;
    return moveWithRange;
  });
  return l;
}

// src/cubing/twisty/animation/indexer/simultaneous-moves/SimultaneousMoveIndexer.ts
var demos = {
  "y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2": [
    {move: BareBlockMove("y", -1), start: 0, end: 1e3},
    {move: BareBlockMove("y", -1), start: 1e3, end: 2e3},
    {move: BareBlockMove("U", -1), start: 1e3, end: 1600},
    {move: BareBlockMove("E", 1), start: 1200, end: 1800},
    {move: BareBlockMove("D"), start: 1400, end: 2e3},
    {move: BareBlockMove("R", 2), start: 2e3, end: 3500},
    {move: BareBlockMove("r", 2), start: 2e3, end: 3500},
    {move: BareBlockMove("F", 2), start: 3500, end: 4200},
    {move: BareBlockMove("B", 2), start: 3800, end: 4500},
    {move: BareBlockMove("U", 1), start: 4500, end: 5500},
    {move: BareBlockMove("E", 1), start: 4500, end: 5500},
    {move: BareBlockMove("D", -1), start: 4500, end: 5500},
    {move: BareBlockMove("R", 2), start: 5500, end: 6500},
    {move: BareBlockMove("L", -2), start: 5500, end: 6500},
    {move: BareBlockMove("z", 2), start: 5500, end: 6500},
    {move: BareBlockMove("S", 2), start: 6500, end: 7500},
    {move: BareBlockMove("U"), start: 7500, end: 8e3},
    {move: BareBlockMove("U"), start: 8e3, end: 8500},
    {move: BareBlockMove("D"), start: 7750, end: 8250},
    {move: BareBlockMove("D"), start: 8250, end: 8750},
    {move: BareBlockMove("S", 2), start: 8750, end: 9250},
    {move: BareBlockMove("F", -2), start: 8750, end: 1e4},
    {move: BareBlockMove("B", 2), start: 8750, end: 1e4}
  ],
  "M' R' U' D' M R": [
    {move: BareBlockMove("M", -1), start: 0, end: 1e3},
    {move: BareBlockMove("R", -1), start: 0, end: 1e3},
    {move: BareBlockMove("U", -1), start: 1e3, end: 2e3},
    {move: BareBlockMove("D", -1), start: 1e3, end: 2e3},
    {move: BareBlockMove("M"), start: 2e3, end: 3e3},
    {move: BareBlockMove("R"), start: 2e3, end: 3e3}
  ],
  "U' E' r E r2' E r U E": [
    {move: BareBlockMove("U", -1), start: 0, end: 1e3},
    {move: BareBlockMove("E", -1), start: 0, end: 1e3},
    {move: BareBlockMove("r"), start: 1e3, end: 2500},
    {move: BareBlockMove("E"), start: 2500, end: 3500},
    {move: BareBlockMove("r", -2), start: 3500, end: 5e3},
    {move: BareBlockMove("E"), start: 5e3, end: 6e3},
    {move: BareBlockMove("r"), start: 6e3, end: 7e3},
    {move: BareBlockMove("U"), start: 7e3, end: 8e3},
    {move: BareBlockMove("E"), start: 7e3, end: 8e3}
  ]
};
var SimultaneousMoveIndexer = class {
  constructor(puzzle, alg14) {
    this.puzzle = puzzle;
    var _a;
    this.moves = (_a = demos[algToString(alg14)]) != null ? _a : simulMoves(alg14);
  }
  getMove(index) {
    return this.moves[Math.min(index, this.moves.length - 1)].move;
  }
  getMoveWithRange(index) {
    return this.moves[Math.min(index, this.moves.length - 1)];
  }
  indexToMoveStartTimestamp(index) {
    let start = 0;
    if (this.moves.length > 0) {
      start = this.moves[Math.min(index, this.moves.length - 1)].start;
    }
    return start;
  }
  timestampToIndex(timestamp) {
    let i2 = 0;
    for (i2 = 0; i2 < this.moves.length; i2++) {
      if (this.moves[i2].start >= timestamp) {
        return Math.max(0, i2 - 1);
      }
    }
    return Math.max(0, i2 - 1);
  }
  timestampToPosition(timestamp, startTransformation) {
    const position = {
      state: startTransformation != null ? startTransformation : this.puzzle.identity(),
      movesInProgress: []
    };
    for (const moveWithRange of this.moves) {
      if (moveWithRange.end <= timestamp) {
        position.state = this.puzzle.combine(position.state, this.puzzle.stateFromMove(moveWithRange.move));
      } else if (moveWithRange.start < timestamp && timestamp < moveWithRange.end) {
        position.movesInProgress.push({
          move: moveWithRange.move,
          direction: Direction.Forwards,
          fraction: (timestamp - moveWithRange.start) / (moveWithRange.end - moveWithRange.start)
        });
      } else if (timestamp < moveWithRange.start) {
        continue;
      }
    }
    return position;
  }
  stateAtIndex(index, startTransformation) {
    let state = startTransformation != null ? startTransformation : this.puzzle.startState();
    for (let i2 = 0; i2 < this.moves.length && i2 < index; i2++) {
      const moveWithRange = this.moves[i2];
      state = this.puzzle.combine(state, this.puzzle.stateFromMove(moveWithRange.move));
    }
    return state;
  }
  transformAtIndex(index) {
    let state = this.puzzle.identity();
    for (const moveWithRange of this.moves.slice(0, index)) {
      state = this.puzzle.combine(state, this.puzzle.stateFromMove(moveWithRange.move));
    }
    return state;
  }
  algDuration() {
    let max = 0;
    for (const moveWithRange of this.moves) {
      max = Math.max(max, moveWithRange.end);
    }
    return max;
  }
  numMoves() {
    return this.moves.length;
  }
  moveDuration(index) {
    const move = this.getMoveWithRange(index);
    return move.end - move.start;
  }
};

// src/cubing/twisty/animation/Timeline.ts
var PAUSE_ON_JUMP = true;
var TimelineAction;
(function(TimelineAction2) {
  TimelineAction2["StartingToPlay"] = "StartingToPlay";
  TimelineAction2["Pausing"] = "Pausing";
  TimelineAction2["Jumping"] = "Jumping";
})(TimelineAction || (TimelineAction = {}));
var TimestampLocationType;
(function(TimestampLocationType2) {
  TimestampLocationType2["StartOfTimeline"] = "Start";
  TimestampLocationType2["EndOfTimeline"] = "End";
  TimestampLocationType2["StartOfMove"] = "StartOfMove";
  TimestampLocationType2["EndOfMove"] = "EndOfMove";
  TimestampLocationType2["MiddleOfMove"] = "MiddleOfMove";
  TimestampLocationType2["BetweenMoves"] = "BetweenMoves";
})(TimestampLocationType || (TimestampLocationType = {}));
function getNow() {
  return Math.round(performance.now());
}
var Timeline = class {
  constructor() {
    this.animating = false;
    this.tempoScale = 1;
    this.cursors = new Set();
    this.timestampListeners = new Set();
    this.actionListeners = new Set();
    this.timestamp = 0;
    this.lastAnimFrameNow = 0;
    this.direction = Direction.Forwards;
    this.boundaryType = BoundaryType.EntireTimeline;
    const animFrame = (_now) => {
      if (this.animating) {
        const now = getNow();
        this.timestamp = this.timestamp + this.tempoScale * directionScalar(this.direction) * (now - this.lastAnimFrameNow);
        this.lastAnimFrameNow = now;
        const atOrPastBoundary = this.direction === Direction.Backwards ? this.timestamp <= this.cachedNextBoundary : this.timestamp >= this.cachedNextBoundary;
        if (atOrPastBoundary) {
          this.timestamp = this.cachedNextBoundary;
          if (this.animating) {
            this.animating = false;
            this.dispatchAction(TimelineAction.Pausing);
          }
        }
      }
      if (this.timestamp !== this.lastAnimFrameTimestamp) {
        this.dispatchTimestamp();
        this.lastAnimFrameTimestamp = this.timestamp;
      }
      if (this.animating) {
        this.scheduler.requestAnimFrame();
      }
    };
    this.scheduler = new RenderScheduler(animFrame);
  }
  addCursor(cursor) {
    this.cursors.add(cursor);
    this.dispatchTimeRange();
  }
  removeCursor(cursor) {
    this.cursors.delete(cursor);
    this.clampTimestampToRange();
    this.dispatchTimeRange();
  }
  clampTimestampToRange() {
    const timeRange = this.timeRange();
    if (this.timestamp < timeRange.start) {
      this.setTimestamp(timeRange.start);
    }
    if (this.timestamp > timeRange.end) {
      this.setTimestamp(timeRange.end);
    }
  }
  onCursorChange(_cursor) {
    if (this.timestamp > this.maxTimestamp()) {
      this.timestamp = this.maxTimestamp();
    }
    this.dispatchTimeRange();
  }
  timeRange() {
    let start = 0;
    let end = 0;
    for (const cursor of this.cursors) {
      const cursorTimeRange = cursor.timeRange();
      start = Math.min(start, cursorTimeRange.start);
      end = Math.max(end, cursorTimeRange.end);
    }
    return {start, end};
  }
  minTimestamp() {
    return this.timeRange().start;
  }
  maxTimestamp() {
    return this.timeRange().end;
  }
  dispatchTimeRange() {
    const timeRange = this.timeRange();
    for (const listener of this.cursors) {
      listener.onTimeRangeChange(timeRange);
    }
    for (const listener of this.timestampListeners) {
      listener.onTimeRangeChange(timeRange);
    }
  }
  dispatchTimestamp() {
    for (const listener of this.cursors) {
      listener.onTimelineTimestampChange(this.timestamp);
    }
    for (const listener of this.timestampListeners) {
      listener.onTimelineTimestampChange(this.timestamp);
    }
  }
  addTimestampListener(timestampListener) {
    this.timestampListeners.add(timestampListener);
  }
  removeTimestampListener(timestampListener) {
    this.timestampListeners.delete(timestampListener);
  }
  addActionListener(actionListener) {
    this.actionListeners.add(actionListener);
  }
  removeActionListener(actionListener) {
    this.actionListeners.delete(actionListener);
  }
  play() {
    this.experimentalPlay(Direction.Forwards, BoundaryType.EntireTimeline);
  }
  experimentalPlay(direction, boundaryType = BoundaryType.EntireTimeline) {
    this.direction = direction;
    this.boundaryType = boundaryType;
    const nextBoundary = this.nextBoundary(this.timestamp, direction, this.boundaryType);
    if (nextBoundary === null) {
      return;
    }
    this.cachedNextBoundary = nextBoundary;
    if (!this.animating) {
      this.animating = true;
      this.lastAnimFrameNow = getNow();
      this.dispatchAction(TimelineAction.StartingToPlay);
      this.scheduler.requestAnimFrame();
    }
  }
  nextBoundary(timestamp, direction, boundaryType = BoundaryType.EntireTimeline) {
    switch (boundaryType) {
      case BoundaryType.EntireTimeline: {
        switch (direction) {
          case Direction.Backwards:
            return timestamp <= this.minTimestamp() ? null : this.minTimestamp();
          case Direction.Forwards:
            return timestamp >= this.maxTimestamp() ? null : this.maxTimestamp();
          default:
            throw new Error("invalid direction");
        }
      }
      case BoundaryType.Move: {
        let result = null;
        for (const cursor of this.cursors) {
          const boundaryTimestamp = cursor.moveBoundary(timestamp, direction);
          if (boundaryTimestamp !== null) {
            switch (direction) {
              case Direction.Backwards: {
                result = Math.min(result != null ? result : boundaryTimestamp, boundaryTimestamp);
                break;
              }
              case Direction.Forwards: {
                result = Math.max(result != null ? result : boundaryTimestamp, boundaryTimestamp);
                break;
              }
              default:
                throw new Error("invalid direction");
            }
          }
        }
        return result;
      }
      default:
        throw new Error("invalid boundary type");
    }
  }
  pause() {
    if (this.animating) {
      this.animating = false;
      this.dispatchAction(TimelineAction.Pausing);
      this.scheduler.requestAnimFrame();
    }
  }
  playPause() {
    if (this.animating) {
      this.pause();
    } else {
      if (this.timestamp >= this.maxTimestamp()) {
        this.timestamp = 0;
      }
      this.experimentalPlay(Direction.Forwards, BoundaryType.EntireTimeline);
    }
  }
  setTimestamp(timestamp) {
    const oldTimestamp = this.timestamp;
    this.timestamp = timestamp;
    this.lastAnimFrameNow = getNow();
    if (oldTimestamp !== timestamp) {
      this.dispatchAction(TimelineAction.Jumping);
      this.scheduler.requestAnimFrame();
    }
    if (PAUSE_ON_JUMP) {
      this.animating = false;
      this.dispatchAction(TimelineAction.Pausing);
    }
  }
  jumpToStart() {
    this.setTimestamp(this.minTimestamp());
  }
  jumpToEnd() {
    this.setTimestamp(this.maxTimestamp());
  }
  experimentalJumpToLastMove() {
    var _a;
    let max = 0;
    for (const cursor of this.cursors) {
      max = Math.max(max, (_a = cursor.experimentalTimestampForStartOfLastMove()) != null ? _a : 0);
    }
    this.setTimestamp(max);
  }
  dispatchAction(event) {
    let locationType = TimestampLocationType.MiddleOfMove;
    switch (this.timestamp) {
      case this.minTimestamp():
        locationType = TimestampLocationType.StartOfTimeline;
        break;
      case this.maxTimestamp():
        locationType = TimestampLocationType.EndOfTimeline;
        break;
    }
    const actionEvent = {
      action: event,
      locationType
    };
    for (const listener of this.actionListeners) {
      listener.onTimelineAction(actionEvent);
    }
  }
};

// src/cubing/twisty/TODO-MOVE-ME/move-counter.ts
var MoveCounter = class extends TraversalUp {
  constructor(metric) {
    super();
    this.metric = metric;
  }
  traverseSequence(sequence) {
    let r3 = 0;
    for (let i2 = 0; i2 < sequence.nestedUnits.length; i2++) {
      r3 += this.traverse(sequence.nestedUnits[i2]);
    }
    return r3;
  }
  traverseGroup(group) {
    return this.traverse(group.nestedSequence) * Math.abs(group.amount);
  }
  traverseBlockMove(move) {
    return this.metric(move);
  }
  traverseCommutator(commutator) {
    return Math.abs(commutator.amount) * 2 * (this.traverse(commutator.A) + this.traverse(commutator.B));
  }
  traverseConjugate(conjugate) {
    return Math.abs(conjugate.amount) * (2 * this.traverse(conjugate.A) + this.traverse(conjugate.B));
  }
  traversePause(_pause) {
    return 0;
  }
  traverseNewLine(_newLine) {
    return 0;
  }
  traverseComment(_comment) {
    return 0;
  }
};
function isCharUppercase(c2) {
  return "A" <= c2 && c2 <= "Z";
}
function baseMetric(move) {
  const fam = move.family;
  if (isCharUppercase(fam[0]) && fam[fam.length - 1] === "v" || fam === "x" || fam === "y" || fam === "z") {
    return 0;
  } else {
    return 1;
  }
}
var baseCounter = new MoveCounter(baseMetric);
var countMoves = baseCounter.traverse.bind(baseCounter);

// src/cubing/twisty/dom/controls/buttons.css.ts
var buttonGridCSS = new CSSSource(`
.wrapper {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
`);
var buttonCSS = new CSSSource(`
.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}
`);

// src/cubing/twisty/dom/controls/buttons.ts
var TwistyControlButton = class extends ManagedCustomElement {
  constructor(timeline, timelineCommand, fullscreenElement) {
    super();
    this.fullscreenElement = fullscreenElement;
    this.currentIconName = null;
    this.button = document.createElement("button");
    if (!timeline) {
      console.log("Must have timeline!");
    }
    this.timeline = timeline;
    if (!timelineCommand) {
      console.log("Must have timelineCommand!");
    }
    this.timelineCommand = timelineCommand;
    this.addCSS(buttonCSS);
    this.setIcon(this.initialIcon());
    this.setHoverTitle(this.initialHoverTitle());
    this.addElement(this.button);
    this.addEventListener("click", this.onPress.bind(this));
    switch (this.timelineCommand) {
      case "fullscreen":
        if (!document.fullscreenEnabled) {
          this.button.disabled = true;
        }
        break;
      case "jump-to-start":
      case "play-step-backwards":
        this.button.disabled = true;
        break;
    }
    this.timeline.addActionListener(this);
    switch (this.timelineCommand) {
      case "play-pause":
      case "play-step-backwards":
      case "play-step":
        this.timeline.addTimestampListener(this);
        break;
    }
    this.autoSetTimelineBasedDisabled();
  }
  autoSetTimelineBasedDisabled() {
    switch (this.timelineCommand) {
      case "jump-to-start":
      case "play-pause":
      case "play-step-backwards":
      case "play-step":
      case "jump-to-end": {
        const timeRange = this.timeline.timeRange();
        if (timeRange.start === timeRange.end) {
          this.button.disabled = true;
          return;
        }
        switch (this.timelineCommand) {
          case "jump-to-start":
          case "play-step-backwards":
            this.button.disabled = this.timeline.timestamp < this.timeline.maxTimestamp();
            break;
          case "jump-to-end":
          case "play-step":
            this.button.disabled = this.timeline.timestamp > this.timeline.minTimestamp();
            break;
          default:
            this.button.disabled = false;
        }
        break;
      }
    }
  }
  setIcon(buttonIconName) {
    if (this.currentIconName === buttonIconName) {
      return;
    }
    if (this.currentIconName) {
      this.button.classList.remove(`svg-${this.currentIconName}`);
    }
    this.button.classList.add(`svg-${buttonIconName}`);
    this.currentIconName = buttonIconName;
  }
  initialIcon() {
    const map = {
      "jump-to-start": "skip-to-start",
      "play-pause": "play",
      "play-step": "step-forward",
      "play-step-backwards": "step-backward",
      "jump-to-end": "skip-to-end",
      fullscreen: "enter-fullscreen"
    };
    return map[this.timelineCommand];
  }
  initialHoverTitle() {
    const map = {
      "jump-to-start": "Restart",
      "play-pause": "Play",
      "play-step": "Step forward",
      "play-step-backwards": "Step backward",
      "jump-to-end": "Skip to End",
      fullscreen: "Enter fullscreen"
    };
    return map[this.timelineCommand];
  }
  setHoverTitle(title) {
    this.button.title = title;
  }
  onPress() {
    switch (this.timelineCommand) {
      case "fullscreen":
        if (document.fullscreenElement === this.fullscreenElement) {
          document.exitFullscreen();
        } else {
          this.setIcon("exit-fullscreen");
          this.fullscreenElement.requestFullscreen().then(() => {
            const onFullscreen = () => {
              if (document.fullscreenElement !== this.fullscreenElement) {
                this.setIcon("enter-fullscreen");
                window.removeEventListener("fullscreenchange", onFullscreen);
              }
            };
            window.addEventListener("fullscreenchange", onFullscreen);
          });
        }
        break;
      case "jump-to-start":
        this.timeline.setTimestamp(0);
        break;
      case "jump-to-end":
        this.timeline.jumpToEnd();
        break;
      case "play-pause":
        this.timeline.playPause();
        break;
      case "play-step":
        this.timeline.experimentalPlay(Direction.Forwards, BoundaryType.Move);
        break;
      case "play-step-backwards":
        this.timeline.experimentalPlay(Direction.Backwards, BoundaryType.Move);
        break;
    }
  }
  onTimelineAction(actionEvent) {
    switch (this.timelineCommand) {
      case "jump-to-start":
        this.button.disabled = actionEvent.locationType === TimestampLocationType.StartOfTimeline && actionEvent.action !== TimelineAction.StartingToPlay;
        break;
      case "jump-to-end":
        this.button.disabled = actionEvent.locationType === TimestampLocationType.EndOfTimeline && actionEvent.action !== TimelineAction.StartingToPlay;
        break;
      case "play-pause":
        switch (actionEvent.action) {
          case TimelineAction.Pausing:
            this.setIcon("play");
            this.setHoverTitle("Play");
            break;
          case TimelineAction.StartingToPlay:
            this.setIcon("pause");
            this.setHoverTitle("Pause");
            break;
        }
        break;
      case "play-step":
        this.button.disabled = actionEvent.locationType === TimestampLocationType.EndOfTimeline && actionEvent.action !== TimelineAction.StartingToPlay;
        break;
      case "play-step-backwards":
        this.button.disabled = actionEvent.locationType === TimestampLocationType.StartOfTimeline && actionEvent.action !== TimelineAction.StartingToPlay;
        break;
    }
  }
  onTimelineTimestampChange(_timestamp) {
  }
  onTimeRangeChange(_timeRange) {
    this.autoSetTimelineBasedDisabled();
  }
};
customElementsShim.define("twisty-control-button", TwistyControlButton);
var TwistyControlButtonPanel = class extends ManagedCustomElement {
  constructor(timeline, fullscreenElement) {
    super();
    this.addCSS(buttonGridCSS);
    this.addElement(new TwistyControlButton(timeline, "fullscreen", fullscreenElement));
    this.addElement(new TwistyControlButton(timeline, "jump-to-start"));
    this.addElement(new TwistyControlButton(timeline, "play-step-backwards"));
    this.addElement(new TwistyControlButton(timeline, "play-pause"));
    this.addElement(new TwistyControlButton(timeline, "play-step"));
    this.addElement(new TwistyControlButton(timeline, "jump-to-end"));
  }
};
customElementsShim.define("twisty-control-button-panel", TwistyControlButtonPanel);

// src/cubing/twisty/dom/controls/TwistyScrubber.css.ts
var twistyScrubberCSS = new CSSSource(`
:host(twisty-scrubber) {
  width: 384px;
  height: 16px;
  contain: content;
  display: grid;

  background: rgba(196, 196, 196, 0.5);
}

input {
  margin: 0; width: 100%;
}
`);

// src/cubing/twisty/dom/controls/TwistyScrubber.ts
var TwistyScrubber2 = class extends ManagedCustomElement {
  constructor(timeline) {
    super();
    this.range = document.createElement("input");
    this.timeline = timeline;
    this.addCSS(twistyScrubberCSS);
    this.timeline.addTimestampListener(this);
    this.range.type = "range";
    this.range.step = 1 .toString();
    this.range.min = this.timeline.minTimestamp().toString();
    this.range.max = this.timeline.maxTimestamp().toString();
    this.range.value = this.timeline.timestamp.toString();
    this.range.addEventListener("input", this.onInput.bind(this));
    this.addElement(this.range);
  }
  onTimelineTimestampChange(timestamp) {
    this.range.value = timestamp.toString();
  }
  onTimeRangeChange(timeRange) {
    this.range.min = timeRange.start.toString();
    this.range.max = timeRange.end.toString();
  }
  onInput() {
    this.timeline.setTimestamp(parseInt(this.range.value, 10));
  }
};
customElementsShim.define("twisty-scrubber", TwistyScrubber2);

// src/cubing/twisty/dom/TwistyPlayer.css.ts
var twistyPlayerCSS = new CSSSource(`
:host(twisty-player) {
  width: 384px;
  height: 256px;
  contain: content;
  display: grid;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.wrapper {
  display: grid;
  grid-template-rows: 7fr 1em 1fr;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel {
  display: none;
}

twisty-viewer-wrapper {
  overflow: hidden;
}

twisty-scrubber {
  width: 100%;
}

.wrapper.checkered {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}
`);

// src/cubing/twisty/dom/viewers/Twisty2DSVGView.css.ts
var twisty2DSVGCSS = new CSSSource(`
.wrapper,
.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}
`);

// src/cubing/twisty/dom/viewers/Twisty2DSVG.ts
var Twisty2DSVG = class extends ManagedCustomElement {
  constructor(cursor, def, svgSource) {
    super();
    this.scheduler = new RenderScheduler(this.render.bind(this));
    this.addCSS(twisty2DSVGCSS);
    this.definition = def;
    this.svg = new SVG(this.definition, svgSource);
    this.addElement(this.svg.element);
    cursor.addPositionListener(this);
  }
  onPositionChange(position) {
    if (position.movesInProgress.length > 0) {
      const move = position.movesInProgress[0].move;
      const def = this.definition;
      const partialMove = new BlockMove(move.outerLayer, move.innerLayer, move.family, move.amount * position.movesInProgress[0].direction);
      const newState = Combine(def, position.state, stateForBlockMove(def, partialMove));
      this.svg.draw(this.definition, position.state, newState, position.movesInProgress[0].fraction);
    } else {
      this.svg.draw(this.definition, position.state);
    }
  }
  scheduleRender() {
    this.scheduler.requestAnimFrame();
  }
  render() {
  }
};
customElementsShim.define("twisty-2d-svg", Twisty2DSVG);

// src/cubing/twisty/dom/TwistyPlayer.ts
function is3DVisualization(visualizationFormat) {
  return ["3D", "PG3D"].includes(visualizationFormat);
}
var _config, _connected, _legacyExperimentalPG3DViewConfig, _hackyPendingFinalMoveCoalesce, _viewerWrapper, _controlsClassListManager, _cursorIndexerName, _pendingPuzzleUpdates, _renderMode;
var TwistyPlayer2 = class extends ManagedCustomElement {
  constructor(initialConfig = {}, legacyExperimentalPG3DViewConfig = null, experimentalInvalidInitialAlgCallback = () => {
  }) {
    super();
    this.experimentalInvalidInitialAlgCallback = experimentalInvalidInitialAlgCallback;
    _config.set(this, void 0);
    this.scene = null;
    this.twisty3D = null;
    _connected.set(this, false);
    _legacyExperimentalPG3DViewConfig.set(this, null);
    this.legacyExperimentalPG3D = null;
    this.viewerElems = [];
    this.controlElems = [];
    _hackyPendingFinalMoveCoalesce.set(this, false);
    _viewerWrapper.set(this, void 0);
    this.legacyExperimentalCoalesceModFunc = (_mv) => 0;
    _controlsClassListManager.set(this, new ClassListManager(this, "controls-", ["none", "bottom-row"]));
    _cursorIndexerName.set(this, "tree");
    _pendingPuzzleUpdates.set(this, []);
    _renderMode.set(this, null);
    this.addCSS(twistyPlayerCSS);
    __privateSet(this, _config, new TwistyPlayerConfig(this, initialConfig));
    this.timeline = new Timeline();
    this.timeline.addActionListener(this);
    this.contentWrapper.classList.add("checkered");
    __privateSet(this, _legacyExperimentalPG3DViewConfig, legacyExperimentalPG3DViewConfig);
  }
  set alg(seq) {
    var _a;
    if ((seq == null ? void 0 : seq.type) !== "sequence") {
      console.warn("`alg` for a `TwistyPlayer` was set using a string. It should be set using a `Sequence`!");
      seq = parseAlg(seq);
    }
    __privateGet(this, _config).attributes["alg"].setValue(seq);
    (_a = this.cursor) == null ? void 0 : _a.setAlg(seq);
  }
  get alg() {
    return __privateGet(this, _config).attributes["alg"].value;
  }
  set experimentalStartSetup(seq) {
    if ((seq == null ? void 0 : seq.type) !== "sequence") {
      console.warn("`experimentalStartSetup` for a `TwistyPlayer` was set using a string. It should be set using a `Sequence`!");
      seq = parseAlg(seq);
    }
    __privateGet(this, _config).attributes["experimental-start-setup"].setValue(seq);
    if (this.cursor) {
      this.cursor.setStartState(this.cursor.algToState(seq));
    }
  }
  get experimentalStartSetup() {
    return __privateGet(this, _config).attributes["experimental-start-setup"].value;
  }
  set puzzle(puzzle) {
    if (__privateGet(this, _config).attributes["puzzle"].setValue(puzzle)) {
      this.updatePuzzleDOM();
    }
  }
  get puzzle() {
    return __privateGet(this, _config).attributes["puzzle"].value;
  }
  set visualization(visualization) {
    if (__privateGet(this, _config).attributes["visualization"].setValue(visualization)) {
      this.updatePuzzleDOM();
    }
  }
  get visualization() {
    return __privateGet(this, _config).attributes["visualization"].value;
  }
  set hintFacelets(hintFacelets) {
    if (__privateGet(this, _config).attributes["hint-facelets"].setValue(hintFacelets)) {
      if (this.twisty3D instanceof Cube3D) {
        this.twisty3D.experimentalUpdateOptions({hintFacelets});
      }
    }
  }
  get hintFacelets() {
    return __privateGet(this, _config).attributes["hint-facelets"].value;
  }
  get experimentalStickering() {
    return __privateGet(this, _config).attributes["experimental-stickering"].value;
  }
  set experimentalStickering(experimentalStickering) {
    if (__privateGet(this, _config).attributes["experimental-stickering"].setValue(experimentalStickering)) {
      if (this.twisty3D instanceof Cube3D) {
        this.twisty3D.experimentalUpdateOptions({
          experimentalStickering
        });
      }
    }
  }
  set background(background) {
    if (__privateGet(this, _config).attributes["background"].setValue(background)) {
      this.contentWrapper.classList.toggle("checkered", background === "checkered");
    }
  }
  get background() {
    return __privateGet(this, _config).attributes["background"].value;
  }
  set controlPanel(controlPanel) {
    __privateGet(this, _config).attributes["control-panel"].setValue(controlPanel);
    __privateGet(this, _controlsClassListManager).setValue(controlPanel);
  }
  get controlPanel() {
    return __privateGet(this, _config).attributes["control-panel"].value;
  }
  set controls(controls) {
    this.controlPanel = controls;
  }
  get controls() {
    return this.controlPanel;
  }
  set backView(backView) {
    __privateGet(this, _config).attributes["back-view"].setValue(backView);
    if (backView !== "none" && this.viewerElems.length === 1) {
      this.createBackViewer();
    }
    if (backView === "none" && this.viewerElems.length > 1) {
      this.removeBackViewerElem();
    }
    if (__privateGet(this, _viewerWrapper) && __privateGet(this, _viewerWrapper).setBackView(backView)) {
      for (const viewer of this.viewerElems) {
        viewer.makeInvisibleUntilRender();
      }
    }
  }
  get backView() {
    return __privateGet(this, _config).attributes["back-view"].value;
  }
  set cameraPosition(cameraPosition) {
    var _a, _b, _c, _d, _e, _f;
    __privateGet(this, _config).attributes["camera-position"].setValue(cameraPosition);
    if (this.viewerElems && ["3D", "PG3D"].includes(__privateGet(this, _config).attributes["visualization"].value)) {
      (_a = this.viewerElems[0]) == null ? void 0 : _a.camera.position.copy(this.effectiveCameraPosition);
      (_b = this.viewerElems[0]) == null ? void 0 : _b.camera.lookAt(new Vector37(0, 0, 0));
      (_c = this.viewerElems[0]) == null ? void 0 : _c.scheduleRender();
      (_d = this.viewerElems[1]) == null ? void 0 : _d.camera.position.copy(this.effectiveCameraPosition).multiplyScalar(-1);
      (_e = this.viewerElems[1]) == null ? void 0 : _e.camera.lookAt(new Vector37(0, 0, 0));
      (_f = this.viewerElems[1]) == null ? void 0 : _f.scheduleRender();
    }
  }
  get cameraPosition() {
    return __privateGet(this, _config).attributes["camera-position"].value;
  }
  get effectiveCameraPosition() {
    var _a;
    return (_a = this.cameraPosition) != null ? _a : this.defaultCameraPosition;
  }
  get defaultCameraPosition() {
    return this.puzzle[1] === "x" ? cubeCameraPosition : centeredCameraPosition;
  }
  static get observedAttributes() {
    return TwistyPlayerConfig.observedAttributes;
  }
  attributeChangedCallback(attributeName, oldValue, newValue) {
    __privateGet(this, _config).attributeChangedCallback(attributeName, oldValue, newValue);
  }
  experimentalSetCursorIndexer(cursorName) {
    var _a;
    __privateSet(this, _cursorIndexerName, cursorName);
    (_a = this.cursor) == null ? void 0 : _a.experimentalSetIndexer({
      simple: SimpleAlgIndexer,
      tree: TreeAlgIndexer,
      simultaneous: SimultaneousMoveIndexer
    }[cursorName]);
  }
  connectedCallback() {
    this.contentWrapper.classList.toggle("checkered", this.background === "checkered");
    const setBackView = this.backView && this.visualization !== "2D";
    const backView = setBackView ? this.backView : "none";
    __privateSet(this, _viewerWrapper, new TwistyViewerWrapper2({
      backView
    }));
    this.addElement(__privateGet(this, _viewerWrapper));
    const scrubber = new TwistyScrubber2(this.timeline);
    const controlButtonGrid = new TwistyControlButtonPanel(this.timeline, this);
    this.controlElems = [scrubber, controlButtonGrid];
    __privateGet(this, _controlsClassListManager).setValue(this.controlPanel);
    this.addElement(this.controlElems[0]);
    this.addElement(this.controlElems[1]);
    __privateSet(this, _connected, true);
    this.updatePuzzleDOM(true);
  }
  clearRenderMode() {
    switch (__privateGet(this, _renderMode)) {
      case "3D":
        this.scene = null;
        this.twisty3D = null;
        this.legacyExperimentalPG3D = null;
        this.viewerElems = [];
        __privateGet(this, _viewerWrapper).clear();
        break;
    }
    __privateSet(this, _renderMode, null);
  }
  setRenderMode2D() {
    if (__privateGet(this, _renderMode) === "2D") {
      return;
    }
    this.clearRenderMode();
    __privateSet(this, _renderMode, "2D");
  }
  setTwisty2DSVG(twisty2DSVG) {
    __privateGet(this, _viewerWrapper).clear();
    __privateGet(this, _viewerWrapper).addElement(twisty2DSVG);
  }
  setRenderMode3D() {
    if (__privateGet(this, _renderMode) === "3D") {
      return;
    }
    this.clearRenderMode();
    this.scene = new Twisty3DScene();
    const mainViewer = new Twisty3DCanvas2(this.scene, {
      cameraPosition: this.effectiveCameraPosition
    });
    this.viewerElems.push(mainViewer);
    __privateGet(this, _viewerWrapper).addElement(mainViewer);
    if (this.backView !== "none") {
      this.createBackViewer();
    }
    __privateSet(this, _renderMode, "3D");
  }
  setTwisty3D(twisty3D) {
    if (this.twisty3D) {
      this.scene.removeTwisty3DPuzzle(this.twisty3D);
      this.twisty3D = null;
    }
    this.twisty3D = twisty3D;
    this.scene.addTwisty3DPuzzle(twisty3D);
  }
  setCursor(cursor) {
    cursor.setStartState(cursor.algToState(this.experimentalStartSetup));
    this.timeline.addCursor(cursor);
    if (this.cursor) {
      this.timeline.removeCursor(this.cursor);
      this.timeline.removeTimestampListener(this.cursor);
    }
    this.cursor = cursor;
    this.experimentalSetCursorIndexer(__privateGet(this, _cursorIndexerName));
  }
  updatePuzzleDOM(initial = false) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      if (!__privateGet(this, _connected)) {
        return;
      }
      let puzzleManager;
      if (this.puzzle === "custom") {
        puzzleManager = {
          id: "custom",
          fullName: "Custom (PG3D)",
          def: () => Promise.resolve(__privateGet(this, _legacyExperimentalPG3DViewConfig).def),
          svg: () => __async(this, null, function* () {
            throw "unimplemented";
          })
        };
      } else {
        puzzleManager = puzzles[this.puzzle];
      }
      for (const pendingPuzzleUpdate2 of __privateGet(this, _pendingPuzzleUpdates)) {
        pendingPuzzleUpdate2.cancelled = true;
      }
      __privateSet(this, _pendingPuzzleUpdates, []);
      const pendingPuzzleUpdate = {cancelled: false};
      __privateGet(this, _pendingPuzzleUpdates).push(pendingPuzzleUpdate);
      const def = yield puzzleManager.def();
      if (pendingPuzzleUpdate.cancelled) {
        return;
      }
      let cursor;
      try {
        cursor = new AlgCursor(this.timeline, def, this.alg, this.experimentalStartSetup);
      } catch (e) {
        if (initial) {
          this.experimentalInvalidInitialAlgCallback(this.alg);
        }
        cursor = new AlgCursor(this.timeline, def, new Sequence([]), this.experimentalStartSetup);
      }
      this.setCursor(cursor);
      if (initial) {
        this.timeline.jumpToEnd();
      }
      switch (this.visualization) {
        case "2D":
          {
            this.setRenderMode2D();
            const mainViewer = new Twisty2DSVG(cursor, def, yield puzzleManager.svg());
            if (!pendingPuzzleUpdate.cancelled) {
              this.setTwisty2DSVG(mainViewer);
            }
          }
          break;
        case "3D":
        case "PG3D":
          {
            this.setRenderMode3D();
            const scene = this.scene;
            let twisty3D;
            if (this.visualization === "3D" && this.puzzle === "3x3x3") {
              twisty3D = new Cube3D(def, cursor, scene.scheduleRender.bind(scene), {
                hintFacelets: this.hintFacelets,
                experimentalStickering: this.experimentalStickering
              });
            } else {
              let def2;
              let stickerDat;
              const pgGetter = puzzleManager.pg;
              if (this.puzzle === "custom") {
                def2 = __privateGet(this, _legacyExperimentalPG3DViewConfig).def;
                stickerDat = __privateGet(this, _legacyExperimentalPG3DViewConfig).stickerDat;
              } else if (pgGetter) {
                const pg = yield pgGetter();
                if (pendingPuzzleUpdate.cancelled) {
                  return;
                }
                def2 = pg.writekpuzzle(true);
                stickerDat = pg.get3d();
              } else {
                throw "Unimplemented!";
              }
              const pg3d = new PG3D(cursor, scene.scheduleRender.bind(scene), def2, stickerDat, (_b = (_a = __privateGet(this, _legacyExperimentalPG3DViewConfig)) == null ? void 0 : _a.showFoundation) != null ? _b : true, (_d = (_c = __privateGet(this, _legacyExperimentalPG3DViewConfig)) == null ? void 0 : _c.hintStickers) != null ? _d : this.hintFacelets === "floating");
              this.legacyExperimentalPG3D = pg3d;
              twisty3D = pg3d;
            }
            this.setTwisty3D(twisty3D);
          }
          break;
      }
    });
  }
  createBackViewer() {
    if (!is3DVisualization(this.visualization)) {
      throw new Error("Back viewer requires a 3D visualization");
    }
    const backViewer = new Twisty3DCanvas2(this.scene, {
      cameraPosition: this.effectiveCameraPosition,
      negateCameraPosition: true
    });
    this.viewerElems.push(backViewer);
    this.viewerElems[0].setMirror(backViewer);
    __privateGet(this, _viewerWrapper).addElement(backViewer);
  }
  removeBackViewerElem() {
    if (this.viewerElems.length !== 2) {
      throw new Error("Tried to remove non-existent back view!");
    }
    __privateGet(this, _viewerWrapper).removeElement(this.viewerElems.pop());
  }
  setCustomPuzzleGeometry(legacyExperimentalPG3DViewConfig) {
    return __async(this, null, function* () {
      this.puzzle = "custom";
      __privateSet(this, _legacyExperimentalPG3DViewConfig, legacyExperimentalPG3DViewConfig);
      yield this.updatePuzzleDOM();
    });
  }
  experimentalAddMove(move, coalesce = false, coalesceDelayed = false) {
    if (__privateGet(this, _hackyPendingFinalMoveCoalesce)) {
      this.hackyCoalescePending();
    }
    const oldNumMoves = countMoves(this.alg);
    const newAlg = experimentalAppendBlockMove(this.alg, move, coalesce && !coalesceDelayed, this.legacyExperimentalCoalesceModFunc(move));
    if (coalesce && coalesceDelayed) {
      __privateSet(this, _hackyPendingFinalMoveCoalesce, true);
    }
    this.alg = newAlg;
    if (oldNumMoves <= countMoves(newAlg)) {
      this.timeline.experimentalJumpToLastMove();
    } else {
      this.timeline.jumpToEnd();
    }
    this.timeline.play();
  }
  onTimelineAction(actionEvent) {
    if (actionEvent.action === TimelineAction.Pausing && actionEvent.locationType === TimestampLocationType.EndOfTimeline && __privateGet(this, _hackyPendingFinalMoveCoalesce)) {
      this.hackyCoalescePending();
      this.timeline.jumpToEnd();
    }
  }
  hackyCoalescePending() {
    const units = this.alg.nestedUnits;
    const length = units.length;
    const pending = __privateGet(this, _hackyPendingFinalMoveCoalesce);
    __privateSet(this, _hackyPendingFinalMoveCoalesce, false);
    if (pending && length > 1 && units[length - 1].type === "blockMove") {
      const finalMove = units[length - 1];
      const newAlg = experimentalAppendBlockMove(new Sequence(units.slice(0, length - 1)), finalMove, true, this.legacyExperimentalCoalesceModFunc(finalMove));
      this.alg = newAlg;
    }
  }
  fullscreen() {
    this.requestFullscreen();
  }
};
_config = new WeakMap();
_connected = new WeakMap();
_legacyExperimentalPG3DViewConfig = new WeakMap();
_hackyPendingFinalMoveCoalesce = new WeakMap();
_viewerWrapper = new WeakMap();
_controlsClassListManager = new WeakMap();
_cursorIndexerName = new WeakMap();
_pendingPuzzleUpdates = new WeakMap();
_renderMode = new WeakMap();
customElementsShim.define("twisty-player", TwistyPlayer2);

// src/cubing/twisty/animation/stream/timeline-move-calculation-draft.ts
function isSameAxis2(move1, move2) {
  const familyRoots = move1.family[0].toLowerCase() + move2.family[0].toLowerCase();
  return ![
    "uu",
    "ud",
    "du",
    "dd",
    "ll",
    "lr",
    "rl",
    "rr",
    "ff",
    "fb",
    "bf",
    "bb"
  ].includes(familyRoots);
}
function toAxes(events, diameterMs) {
  const axes = [];
  const axisMoveTracker = new Map();
  let lastEntry = null;
  for (const event of events) {
    if (!lastEntry) {
      lastEntry = {
        event,
        start: event.timeStamp - diameterMs / 2,
        end: event.timeStamp + diameterMs / 2
      };
      axes.push([lastEntry]);
      axisMoveTracker.set(experimentalBlockMoveQuantumName(lastEntry.event.move), lastEntry);
      continue;
    }
    const newEntry = {
      event,
      start: event.timeStamp - diameterMs / 2,
      end: event.timeStamp + diameterMs / 2
    };
    if (isSameAxis2(lastEntry.event.move, event.move)) {
      const quarterName = experimentalBlockMoveQuantumName(newEntry.event.move);
      const prev = axisMoveTracker.get(quarterName);
      if (prev && prev.end > newEntry.start && Math.sign(prev.event.move.amount) === Math.sign(newEntry.event.move.amount)) {
        prev.event.move = new BlockMove(prev.event.move.outerLayer, prev.event.move.innerLayer, prev.event.move.family, prev.event.move.amount + newEntry.event.move.amount);
      } else {
        axes[axes.length - 1].push(newEntry);
        axisMoveTracker.set(quarterName, newEntry);
      }
    } else {
      axes.push([newEntry]);
      axisMoveTracker.clear();
      axisMoveTracker.set(experimentalBlockMoveQuantumName(newEntry.event.move), newEntry);
      if (newEntry.start < lastEntry.end) {
        const midpoint = (newEntry.start + lastEntry.end) / 2;
        newEntry.start = midpoint;
        lastEntry.end = midpoint;
      }
    }
    lastEntry = newEntry;
  }
  return axes;
}
var defaultDiameterMs = 200;
function toTimeline(events, diameterMs = defaultDiameterMs) {
  const axes = toAxes(events, diameterMs);
  return axes.flat();
}

export {
  TimestampLocationType,
  TreeAlgIndexer,
  SimpleAlgIndexer,
  experimentalShowRenderStats,
  toTimeline,
  experimentalSetShareAllNewRenderers,
  KPuzzleWrapper,
  Twisty3DCanvas2 as Twisty3DCanvas,
  TwistyPlayer2 as TwistyPlayer,
  PG3D,
  Cube3D
};
//# sourceMappingURL=chunk.PAXWLAKK.js.map
