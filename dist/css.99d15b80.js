// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n/*\u4ECA\u5929\u4E3A\u5927\u5BB6\u5C55\u793A2022\u5E74\u51AC\u5965\u5409\u7965\u7269\u51B0\u58A9\u58A9*/\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nbody {\n    background: rgb(212, 235, 241);\n    min-height: 100vh;\n}\n\nimg {\n    margin-left: 150px;\n    margin-top: 310px;\n    width: 60px;\n}\n\n.body1 {\n    border: 8px solid rgb(57, 57, 57);\n    width: 362px;\n    height: 410px;\n    border-radius: 88% 88% 62% 68% / 82% 82% 95% 84%;\n    background: rgb(255, 255, 255);\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -181px;\n}\n\n.ear {\n    width: 81px;\n    height: 115px;\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    background: rgb(57, 57, 57);\n    border-radius: 50%;\n    z-index: -1;\n\n}\n\n.ear.left {\n    margin-left: -150px;\n    transform: rotate(-10deg)\n}\n\n.ear.right {\n    margin-left: 70px;\n    transform: rotate(10deg)\n}\n\n.face {\n    position: absolute;\n    border-radius: 48% 48% 44% 49% / 53% 54% 45% 47%;\n    left: 50%;\n}\n\n.face.blue {\n    border: 5px solid rgb(107, 205, 243);\n    width: 280px;\n    height: 224px;\n    top: 110px;\n    margin-left: -140px;\n}\n\n.face.red {\n    border: 5px solid rgb(175, 35, 80);\n    width: 290px;\n    height: 234px;\n    top: 105px;\n    margin-left: -145px;\n}\n\n.face.purple {\n    border: 5px solid rgb(93, 117, 179);\n    width: 300px;\n    height: 244px;\n    top: 100px;\n    margin-left: -150px;\n}\n\n.face.yellow {\n    border: 5px solid rgb(255, 195, 70);\n    width: 310px;\n    height: 254px;\n    top: 95px;\n    margin-left: -155px;\n}\n\n.face.green {\n    border: 5px solid rgb(127, 203, 88);\n    width: 320px;\n    height: 264px;\n    top: 90px;\n    margin-left: -160px;\n}\n\n.eye {\n    width: 83px;\n    height: 115px;\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    background: rgb(57, 57, 57);\n    border-radius: 50%;\n}\n\n.eye.left {\n    margin-left: -110px;\n    transform: rotate(45deg)\n}\n\n.eye.right {\n    margin-left: 30px;\n    transform: rotate(-45deg)\n}\n\n.eye::before {\n    content: '';\n    width: 40px;\n    height: 40px;\n    border: 5px solid rgb(255, 255, 255);\n    border-radius: 50%;\n    position: absolute;\n}\n\n.eye.left::before {\n    right: 12px;\n    top: 22px;\n}\n\n.eye.right::before {\n    left: 12px;\n    top: 22px;\n}\n\n.eye::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: rgb(155, 155, 155);\n    border-radius: 50%;\n    position: absolute;\n}\n\n.eye.left::after {\n    right: 25px;\n    top: 31px;\n}\n\n.eye.right::after {\n    left: 32px;\n    top: 39px;\n}\n\n.nose {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    left: 50%;\n    top: 210px;\n    margin-left: -12px;\n    width: 28px;\n    height: 18px;\n    border-radius: 42px 42px 60px 61px / 30px 30px 50px 46px;\n}\n\n.mouth {\n    position: absolute;\n    left: 50%;\n    margin-left: -30px;\n    top: 235px;\n    width: 68px;\n    height: 25px;\n    border-radius: 50%;\n    border: 7px solid rgb(57, 57, 57);\n    border-top: none;\n    border-left: 0;\n    border-right: 0;\n}\n\n.hand {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    z-index: -1;\n    width: 75px;\n    height: 118px;\n    left: 50%;\n}\n\n.hand.left {\n    transform: rotate(45deg);\n    border-radius: 24% 69% 68% 76%/ 53% 95% 40% 52%;\n    margin-left: -220px;\n    top: 270px;\n}\n\n.hand.right {\n    transform: rotate(37deg);\n    border-radius: 56% 62% 98% 6%/ 40% 46% 80% 58%;\n    margin-left: 160px;\n    top: 220px;\n    animation: hi 1.5s infinite;\n}\n.hand.right::before {\n    content: '';\n    width: 16px;\n    height: 24px;\n    background: rgb(188, 36, 44);\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    transform: rotate(45deg);\n    left: 32px;\n    top: 20px;\n    position: absolute;\n}\n\n.hand.right::after {\n    content: '';\n    width: 16px;\n    height: 24px;\n    background: rgb(188, 36, 44);\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    transform: rotate(-45deg);\n    left: 26px;\n    top: 20px;\n    position: absolute;\n}\n.hand.right {\n    animation: hi 1.5s infinite;\n}\n@keyframes hi {\n    0% {\n        transform: rotate(37deg);\n}\n\n    50% {\n        transform: rotate(45deg);\n}\n\n    100% {\n        transform: rotate(37deg);\n}\n}\n\n\n.foot {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    left: 50%;\n    width: 83px;\n    height: 80px;\n    border-radius: 0 0 28px 28px;\n    z-index: -1;\n}\n\n.foot.left {\n    margin-left: -102px;\n    top: 440px;\n}\n\n.foot.right {\n    margin-left: 23px;\n    top: 440px;\n}\n\n.foot::after {\n    content: '';\n    width: 43px;\n    height: 30px;\n    position: absolute;\n    background: rgb(57, 57, 57);\n    border-radius: 28px;\n    bottom: 0;\n}\n\n.foot.left::after {\n    right: -3px;\n}\n\n.foot.right::after {\n    left: -3px;\n}";
exports.default = string;
},{}],"C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51029' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\Administrator\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","css.js"], null)
//# sourceMappingURL=/css.99d15b80.map