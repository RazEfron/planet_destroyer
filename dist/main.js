/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/board.js":
/*!***********************!*\
  !*** ./dist/board.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Shape = __webpack_require__(/*! ../dist/shape */ "./dist/shape.js");
Player = __webpack_require__(/*! ../dist/player */ "./dist/player.js");

var Board = function Board() {
  _classCallCheck(this, Board);
};

module.exports = Board;

/***/ }),

/***/ "./dist/game.js":
/*!**********************!*\
  !*** ./dist/game.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Board = __webpack_require__(/*! ../dist/board */ "./dist/board.js");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = new Board();
  }

  _createClass(Game, [{
    key: "play",
    value: function play() {
      debugger;
      var board = new Board();
      document.addEventListener("keydown", this.board.player.keyDownHandler, false);
      document.addEventListener("keyup", this.board.player.keyUpHandler, false);
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./dist/player.js":
/*!************************!*\
  !*** ./dist/player.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(paddleHeight, paddleWidth, paddleX, canvas) {
    _classCallCheck(this, Player);

    this.paddleHeight = paddleHeight;
    this.paddleWidth = paddleWidth;
    this.paddleX = paddleX;
    this.canvas = canvas;
  }

  _createClass(Player, [{
    key: "newPos",
    value: function newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }, {
    key: "drawPlayer",
    value: function drawPlayer(ctx) {
      ctx.beginPath();
      ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }]);

  return Player;
}();

module.exports = Player;

/***/ }),

/***/ "./dist/shape.js":
/*!***********************!*\
  !*** ./dist/shape.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shape = /*#__PURE__*/function () {
  function Shape(canvas) {
    _classCallCheck(this, Shape);

    this.color = 'pink';
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.radius = 25;
    this.drawShape = this.drawShape.bind(this);
    this.canvas = canvas;
    this.ballRadius = 10;
  }

  _createClass(Shape, [{
    key: "drawShape",
    value: function drawShape(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }]);

  return Shape;
}();

module.exports = Shape;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Game = __webpack_require__(/*! ../dist/game */ "./dist/game.js");
document.addEventListener("DOMContentLoaded", function () {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9zaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiU2hhcGUiLCJyZXF1aXJlIiwiUGxheWVyIiwiQm9hcmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiR2FtZSIsImJvYXJkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGxheWVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJwYWRkbGVIZWlnaHQiLCJwYWRkbGVXaWR0aCIsInBhZGRsZVgiLCJjYW52YXMiLCJ4Iiwic3BlZWRYIiwieSIsInNwZWVkWSIsImN0eCIsImJlZ2luUGF0aCIsInJlY3QiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiY29sb3IiLCJ3aWR0aCIsImR4IiwiZHkiLCJyYWRpdXMiLCJkcmF3U2hhcGUiLCJiaW5kIiwiYmFsbFJhZGl1cyIsImFyYyIsIk1hdGgiLCJQSSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QUF5QyxDQUF6QyxFQUE0Q0UsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBdEQ7QUFDQWpCLFNBQUcsQ0FBQ0ksU0FBSixHQUFnQixTQUFoQjtBQUNBSixTQUFHLENBQUNLLElBQUo7QUFDQUwsU0FBRyxDQUFDTSxTQUFKO0FBQ1A7OzsyQkFFVU4sRyxFQUFLO0FBQ1JBLFNBQUcsQ0FBQ0ksU0FBSixHQUFnQixLQUFLRyxLQUFyQjtBQUNBUCxTQUFHLENBQUNDLFNBQUo7QUFFQUQsU0FBRyxDQUFDZSxHQUFKLENBQ0ksS0FBS25CLENBRFQsRUFFSSxLQUFLRSxDQUZULEVBR0ksS0FBS2EsTUFIVCxFQUlJLENBSkosRUFLSSxJQUFJSyxJQUFJLENBQUNDLEVBTGIsRUFNSSxLQU5KO0FBU0FqQixTQUFHLENBQUNLLElBQUo7QUFDSDs7Ozs7O0FBR0x0QixNQUFNLENBQUNDLE9BQVAsR0FBaUJMLEtBQWpCLEM7Ozs7Ozs7Ozs7O0FDdENBTSxJQUFJLEdBQUdMLG1CQUFPLENBQUMsb0NBQUQsQ0FBZDtBQUVBTyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNLENBRW5ELENBRkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJTaGFwZSA9IHJlcXVpcmUoJy4uL2Rpc3Qvc2hhcGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICBcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZFxuICAgIH1cblxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmJvYXJkLnBsYXllci5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5ib2FyZC5wbGF5ZXIua2V5VXBIYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYWRkbGVIZWlnaHQsIHBhZGRsZVdpZHRoLCBwYWRkbGVYLCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5wYWRkbGVIZWlnaHQgPSBwYWRkbGVIZWlnaHQ7XG4gICAgICAgIHRoaXMucGFkZGxlV2lkdGggPSBwYWRkbGVXaWR0aDtcbiAgICAgICAgdGhpcy5wYWRkbGVYID0gcGFkZGxlWDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgfVxuXG4gICAgbmV3UG9zKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkWTtcbn1cblxuICAgIGRyYXdQbGF5ZXIoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy5wYWRkbGVYLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnBhZGRsZUhlaWdodCwgdGhpcy5wYWRkbGVXaWR0aCwgdGhpcy5wYWRkbGVIZWlnaHQpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU2hhcGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbG9yID0gJ3BpbmsnO1xuICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGgvMjtcbiAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodC0zMDtcbiAgICAgICAgdGhpcy5keCA9IDI7XG4gICAgICAgIHRoaXMuZHkgPSAtMjtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAyNTtcbiAgICAgICAgdGhpcy5kcmF3U2hhcGUgPSB0aGlzLmRyYXdTaGFwZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5iYWxsUmFkaXVzID0gMTA7XG4gICAgfVxuXG4gICAgZHJhd1NoYXBlKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMuYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbn1cblxuICAgIHJlbmRlcihjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgdGhpcy54LFxuICAgICAgICAgICAgdGhpcy55LFxuICAgICAgICAgICAgdGhpcy5yYWRpdXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUEksXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGFwZTsiLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==