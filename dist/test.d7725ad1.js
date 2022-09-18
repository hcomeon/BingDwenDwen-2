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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n/*\u4ECA\u5929\u4E3A\u5927\u5BB6\u5C55\u793A2022\u5E74\u51AC\u5965\u5409\u7965\u7269\u51B0\u58A9\u58A9*/\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nbody {\n    background: rgb(212, 235, 241);\n    min-height: 100vh;\n}\n\nimg {\n    margin-left: 150px;\n    margin-top: 310px;\n    width: 60px;\n}\n\n.body1 {\n    border: 8px solid rgb(57, 57, 57);\n    width: 362px;\n    height: 410px;\n    border-radius: 88% 88% 62% 68% / 82% 82% 95% 84%;\n    background: rgb(255, 255, 255);\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -181px;\n}\n\n.ear {\n    width: 81px;\n    height: 115px;\n    position: absolute;\n    left: 50%;\n    top: 60px;\n    background: rgb(57, 57, 57);\n    border-radius: 50%;\n    z-index: -1;\n\n}\n\n.ear.left {\n    margin-left: -150px;\n    transform: rotate(-10deg)\n}\n\n.ear.right {\n    margin-left: 70px;\n    transform: rotate(10deg)\n}\n\n.face {\n    position: absolute;\n    border-radius: 48% 48% 44% 49% / 53% 54% 45% 47%;\n    left: 50%;\n}\n\n.face.blue {\n    border: 5px solid rgb(107, 205, 243);\n    width: 280px;\n    height: 224px;\n    top: 110px;\n    margin-left: -140px;\n}\n\n.face.red {\n    border: 5px solid rgb(175, 35, 80);\n    width: 290px;\n    height: 234px;\n    top: 105px;\n    margin-left: -145px;\n}\n\n.face.purple {\n    border: 5px solid rgb(93, 117, 179);\n    width: 300px;\n    height: 244px;\n    top: 100px;\n    margin-left: -150px;\n}\n\n.face.yellow {\n    border: 5px solid rgb(255, 195, 70);\n    width: 310px;\n    height: 254px;\n    top: 95px;\n    margin-left: -155px;\n}\n\n.face.green {\n    border: 5px solid rgb(127, 203, 88);\n    width: 320px;\n    height: 264px;\n    top: 90px;\n    margin-left: -160px;\n}\n\n.eye {\n    width: 83px;\n    height: 115px;\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    background: rgb(57, 57, 57);\n    border-radius: 50%;\n}\n\n.eye.left {\n    margin-left: -110px;\n    transform: rotate(45deg)\n}\n\n.eye.right {\n    margin-left: 30px;\n    transform: rotate(-45deg)\n}\n\n.eye::before {\n    content: '';\n    width: 40px;\n    height: 40px;\n    border: 5px solid rgb(255, 255, 255);\n    border-radius: 50%;\n    position: absolute;\n}\n\n.eye.left::before {\n    right: 12px;\n    top: 22px;\n}\n\n.eye.right::before {\n    left: 12px;\n    top: 22px;\n}\n\n.eye::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: rgb(155, 155, 155);\n    border-radius: 50%;\n    position: absolute;\n}\n\n.eye.left::after {\n    right: 25px;\n    top: 31px;\n}\n\n.eye.right::after {\n    left: 32px;\n    top: 39px;\n}\n\n.nose {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    left: 50%;\n    top: 210px;\n    margin-left: -12px;\n    width: 28px;\n    height: 18px;\n    border-radius: 42px 42px 60px 61px / 30px 30px 50px 46px;\n}\n\n.mouth {\n    position: absolute;\n    left: 50%;\n    margin-left: -30px;\n    top: 235px;\n    width: 68px;\n    height: 25px;\n    border-radius: 50%;\n    border: 7px solid rgb(57, 57, 57);\n    border-top: none;\n    border-left: 0;\n    border-right: 0;\n}\n\n.hand {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    z-index: -1;\n    width: 75px;\n    height: 118px;\n    left: 50%;\n}\n\n.hand.left {\n    transform: rotate(45deg);\n    border-radius: 24% 69% 68% 76%/ 53% 95% 40% 52%;\n    margin-left: -220px;\n    top: 270px;\n}\n\n.hand.right {\n    transform: rotate(37deg);\n    border-radius: 56% 62% 98% 6%/ 40% 46% 80% 58%;\n    margin-left: 160px;\n    top: 220px;\n    animation: hi 1.5s infinite;\n}\n.hand.right::before {\n    content: '';\n    width: 16px;\n    height: 24px;\n    background: rgb(188, 36, 44);\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    transform: rotate(45deg);\n    left: 32px;\n    top: 20px;\n    position: absolute;\n}\n\n.hand.right::after {\n    content: '';\n    width: 16px;\n    height: 24px;\n    background: rgb(188, 36, 44);\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    transform: rotate(-45deg);\n    left: 26px;\n    top: 20px;\n    position: absolute;\n}\n.hand.right {\n    animation: hi 1.5s infinite;\n}\n@keyframes hi {\n    0% {\n        transform: rotate(37deg);\n}\n\n    50% {\n        transform: rotate(45deg);\n}\n\n    100% {\n        transform: rotate(37deg);\n}\n}\n\n\n.foot {\n    background: rgb(57, 57, 57);\n    position: absolute;\n    left: 50%;\n    width: 83px;\n    height: 80px;\n    border-radius: 0 0 28px 28px;\n    z-index: -1;\n}\n\n.foot.left {\n    margin-left: -102px;\n    top: 440px;\n}\n\n.foot.right {\n    margin-left: 23px;\n    top: 440px;\n}\n\n.foot::after {\n    content: '';\n    width: 43px;\n    height: 30px;\n    position: absolute;\n    background: rgb(57, 57, 57);\n    border-radius: 28px;\n    bottom: 0;\n}\n\n.foot.left::after {\n    right: -3px;\n}\n\n.foot.right::after {\n    left: -3px;\n}";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 10;
    player.play();
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.d7725ad1.map