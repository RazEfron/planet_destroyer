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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Bubble = __webpack_require__(/*! ./bubble */ "./dist/bubble.js");
Player = __webpack_require__(/*! ../dist/player */ "./dist/player.js");

var Board = /*#__PURE__*/function () {
  function Board(canvas, ctx) {
    _classCallCheck(this, Board);

    this.canvas = canvas;
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this); //bubble

    this.bubble = new Bubble(canvas, ctx);
    this.bubbleX = canvas.width / 2;
    this.bubbleY = canvas.height - 30;
    this.bubbleDX = 2;
    this.bubbleDY = -2;
    this.ballRadius = 10; //player

    this.player = new Player(canvas, ctx);
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (canvas.width - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.interval = setInterval(this.draw, 10);
  }

  _createClass(Board, [{
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //bubble

      this.bubble.draw(this.bubbleX, this.bubbleY, this.ballRadius);
      this.bubbleX += this.bubbleDX;
      this.bubbleY += this.bubbleDY;

      if (this.bubbleX + this.bubbleDX > this.canvas.width - this.ballRadius || this.bubbleX + this.bubbleDX < this.ballRadius) {
        this.bubbleDX = -this.bubbleDX;
      }

      if (this.bubbleY + this.bubbleDY > this.canvas.height - this.ballRadius || this.bubbleY + this.bubbleDY < this.ballRadius) {
        this.bubbleDY = -this.bubbleDY;
      } // this.gravity = 0.6;
      // this.gravitySpeed = 0;
      // this.bounce = 1;
      // this.newPos = function () {
      //     this.gravitySpeed += this.gravity;
      //     this.x += this.speedX;
      //     this.y += this.speedY + this.gravitySpeed;
      //     this.hitBottom();
      // }
      // this.hitBottom = function () {
      //     var rockbottom = myGameArea.canvas.height - this.height;
      //     if (this.y > rockbottom) {
      //         this.y = rockbottom;
      //         this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      //     }
      //player


      if (this.rightPressed) {
        this.paddleX += 7;

        if (this.paddleX + this.paddleWidth > this.canvas.width) {
          this.paddleX = this.canvas.width - this.paddleWidth;
        }
      } else if (this.leftPressed) {
        this.paddleX -= 7;

        if (this.paddleX < 0) {
          this.paddleX = 0;
        }
      }

      this.player.draw(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = true;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = true;
      }
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler(e) {
      if (e.key == "Right" || e.key == "ArrowRight") {
        this.rightPressed = false;
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        this.leftPressed = false;
      }
    }
  }]);

  return Board;
}();

module.exports = Board;

/***/ }),

/***/ "./dist/bubble.js":
/*!************************!*\
  !*** ./dist/bubble.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bubble = /*#__PURE__*/function () {
  function Bubble(canvas, ctx) {
    _classCallCheck(this, Bubble);

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw(x, y, radius) {
      debugger;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return Bubble;
}();

module.exports = Bubble;

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
  function Player(canvas, ctx) {
    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(x, y, width, height) {
      this.ctx.beginPath();
      this.ctx.rect(x, y, width, height);
      this.ctx.fillStyle = "#0095DD";
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return Player;
}();

module.exports = Player;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Board = __webpack_require__(/*! ../dist/board */ "./dist/board.js");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var board = new Board(canvas, ctx);
  document.addEventListener("keydown", board.keyDownHandler, false);
  document.addEventListener("keyup", board.keyUpHandler, false);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZHJhdyIsImJpbmQiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImJ1YmJsZSIsImJ1YmJsZVgiLCJ3aWR0aCIsImJ1YmJsZVkiLCJoZWlnaHQiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiYmFsbFJhZGl1cyIsInBsYXllciIsInBhZGRsZUhlaWdodCIsInBhZGRsZVdpZHRoIiwicGFkZGxlWCIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFyUmVjdCIsImUiLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJyYWRpdXMiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwicmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImJvYXJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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TSxFQUFRO0FBQ3RCLFdBQUtULEdBQUwsQ0FBUzZCLFNBQVQ7QUFDQSxXQUFLN0IsR0FBTCxDQUFTb0MsSUFBVCxDQUFjVixDQUFkLEVBQWlCQyxDQUFqQixFQUFvQnBCLEtBQXBCLEVBQTJCRSxNQUEzQjtBQUNBLFdBQUtULEdBQUwsQ0FBU2lDLFNBQVQsR0FBcUIsU0FBckI7QUFDQSxXQUFLakMsR0FBTCxDQUFTa0MsSUFBVDtBQUNBLFdBQUtsQyxHQUFMLENBQVNtQyxTQUFUO0FBQ0g7Ozs7OztBQUdMWCxNQUFNLENBQUNDLE9BQVAsR0FBaUI1QixNQUFqQixDOzs7Ozs7Ozs7OztBQ2ZBQyxLQUFLLEdBQUdGLG1CQUFPLENBQUMsc0NBQUQsQ0FBZjtBQUVBeUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNdkMsTUFBTSxHQUFHc0MsUUFBUSxDQUFDRSxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNdkMsR0FBRyxHQUFHRCxNQUFNLENBQUN5QyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSTNDLEtBQUosQ0FBVUMsTUFBVixFQUFrQkMsR0FBbEIsQ0FBWjtBQUNBcUMsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0csS0FBSyxDQUFDdEMsY0FBM0MsRUFBMkQsS0FBM0Q7QUFDQWtDLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNHLEtBQUssQ0FBQ3JDLFlBQXpDLEVBQXVELEtBQXZEO0FBQ0gsQ0FORCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy5idWJibGVYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5idWJibGVZID0gY2FudmFzLmhlaWdodCAtIDMwO1xuICAgICAgICB0aGlzLmJ1YmJsZURYID0gMjtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IC0yO1xuICAgICAgICB0aGlzLmJhbGxSYWRpdXMgPSAxMDtcblxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMucGFkZGxlSGVpZ2h0ID0gMTA7XG4gICAgICAgIHRoaXMucGFkZGxlV2lkdGggPSA3NTtcbiAgICAgICAgdGhpcy5wYWRkbGVYID0gKGNhbnZhcy53aWR0aCAtIHRoaXMucGFkZGxlV2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmRyYXcsIDEwKVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICB0aGlzLmJ1YmJsZS5kcmF3KHRoaXMuYnViYmxlWCwgdGhpcy5idWJibGVZLCB0aGlzLmJhbGxSYWRpdXMpXG4gICAgICAgIHRoaXMuYnViYmxlWCArPSB0aGlzLmJ1YmJsZURYXG4gICAgICAgIHRoaXMuYnViYmxlWSArPSB0aGlzLmJ1YmJsZURZXG4gICAgICAgIGlmICh0aGlzLmJ1YmJsZVggKyB0aGlzLmJ1YmJsZURYID4gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLmJhbGxSYWRpdXMgfHwgdGhpcy5idWJibGVYICsgdGhpcy5idWJibGVEWCA8IHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJ1YmJsZVkgKyB0aGlzLmJ1YmJsZURZID4gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5iYWxsUmFkaXVzIHx8IHRoaXMuYnViYmxlWSArIHRoaXMuYnViYmxlRFkgPCB0aGlzLmJhbGxSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFkgPSAtdGhpcy5idWJibGVEWTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuZ3Jhdml0eSA9IDAuNjtcbiAgICAgICAgLy8gdGhpcy5ncmF2aXR5U3BlZWQgPSAwO1xuICAgICAgICAvLyB0aGlzLmJvdW5jZSA9IDE7XG4gICAgICAgIC8vIHRoaXMubmV3UG9zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICAvLyAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRYO1xuICAgICAgICAvLyAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRZICsgdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIC8vICAgICB0aGlzLmhpdEJvdHRvbSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuaGl0Qm90dG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgdmFyIHJvY2tib3R0b20gPSBteUdhbWVBcmVhLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodDtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnkgPiByb2NrYm90dG9tKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIC8vICAgICB9XG5cblxuXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0UHJlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5wYWRkbGVYICs9IDc7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWRkbGVYICsgdGhpcy5wYWRkbGVXaWR0aCA+IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWRkbGVYID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnBhZGRsZVdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGFkZGxlWCAtPSA3O1xuICAgICAgICAgICAgaWYgKHRoaXMucGFkZGxlWCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZGRsZVggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5wYWRkbGVYLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnBhZGRsZUhlaWdodCwgdGhpcy5wYWRkbGVXaWR0aCwgdGhpcy5wYWRkbGVIZWlnaHQpXG4gICAgfVxuXG4gICAga2V5RG93bkhhbmRsZXIoZSkge1xuICAgICAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH1cbn1cblxuICAgIGtleVVwSGFuZGxlcihlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG59XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgfVxuXG4gICAgZHJhdyh4LCB5LCByYWRpdXMpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdyh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgYm9hcmQgPSBuZXcgQm9hcmQoY2FudmFzLCBjdHgpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYm9hcmQua2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYm9hcmQua2V5VXBIYW5kbGVyLCBmYWxzZSk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=