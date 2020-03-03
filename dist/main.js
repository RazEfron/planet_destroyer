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
    this.drawGame = this.drawGame.bind(this);
    this.drawBackground = this.drawBackground.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.playerBallColision = this.playerBallColision.bind(this); //bubble

    this.bubble = new Bubble(canvas, ctx);
    this.bubbleX = canvas.width / 2;
    this.bubbleY = 50;
    this.bubbleDX = 5;
    this.bubbleDY = 0;
    this.ballRadius = 40;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 1.001; //player

    this.player = new Player(canvas, ctx);
    this.playerHeight = 180;
    this.playerWidth = 180;
    this.playerX = (canvas.width - this.playerWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.interval = setInterval(this.drawGame, 10);
  }

  _createClass(Board, [{
    key: "drawBackground",
    value: function drawBackground() {
      debugger;
      var background = new Image();
      background.src = 'src/images/background_level_one.jpg';
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
    }
  }, {
    key: "drawGame",
    value: function drawGame() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //background

      this.drawBackground(); //bubble

      this.bubble.draw(this.bubbleX, this.bubbleY, this.ballRadius);
      this.gravitySpeed += this.gravity;
      this.bubbleX += this.bubbleDX;
      this.bubbleY += this.bubbleDY + this.gravitySpeed;
      var rockbottom = this.canvas.height - this.ballRadius;

      if (this.bubbleY > rockbottom) {
        this.bubbleY = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      }

      if (this.bubbleX + this.bubbleDX > this.canvas.width - this.ballRadius || this.bubbleX + this.bubbleDX < this.ballRadius) {
        this.bubbleDX = -this.bubbleDX;
      } //player


      if (this.rightPressed) {
        this.playerX += 7;

        if (this.playerX + this.playerWidth > this.canvas.width) {
          this.playerX = this.canvas.width - this.playerWidth;
        }
      } else if (this.leftPressed) {
        this.playerX -= 7;

        if (this.playerX < 0) {
          this.playerX = 0;
        }
      }

      this.player.draw(this.playerX, this.canvas.height - 132, this.playerWidth, this.playerHeight);
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
  }, {
    key: "playerBallColision",
    value: function playerBallColision() {}
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
  function Game(canvas, ctx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Game, [{
    key: "gameLoop",
    value: function gameLoop() {
      board = new Board(this.canvas, this.ctx);
      document.addEventListener("keydown", board.keyDownHandler, false);
      document.addEventListener("keyup", board.keyUpHandler, false);
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
  function Player(canvas, ctx) {
    _classCallCheck(this, Player);

    this.canvas = canvas;
    this.ctx = ctx;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(x, y, width, height) {
      var player = new Image();
      player.src = 'src/images/player.png';
      this.ctx.drawImage(player, x, y, width, height);
      this.ctx.beginPath();
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

Game = __webpack_require__(/*! ../dist/game */ "./dist/game.js");
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var game = new Game(canvas, ctx);
  game.gameLoop();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJwbGF5ZXJCYWxsQ29saXNpb24iLCJidWJibGUiLCJidWJibGVYIiwid2lkdGgiLCJidWJibGVZIiwiYnViYmxlRFgiLCJidWJibGVEWSIsImJhbGxSYWRpdXMiLCJncmF2aXR5IiwiZ3Jhdml0eVNwZWVkIiwiYm91bmNlIiwicGxheWVyIiwicGxheWVySGVpZ2h0IiwicGxheWVyV2lkdGgiLCJwbGF5ZXJYIiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiZHJhdyIsInJvY2tib3R0b20iLCJlIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwicmFkaXVzIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsIkdhbWUiLCJib2FyZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lTG9vcCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QU0sQ0FBQ0MsT0FBUCxHQUFpQlUsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQk1sRCxNO0FBQ0Ysa0JBQVlFLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O3lCQUVJc0MsQyxFQUFHQyxDLEVBQUc5QixLLEVBQU9vQixNLEVBQVE7QUFDdEIsVUFBSVosTUFBTSxHQUFHLElBQUlTLEtBQUosRUFBYjtBQUNBVCxZQUFNLENBQUNVLEdBQVAsR0FBYSx1QkFBYjtBQUNJLFdBQUszQixHQUFMLENBQVM0QixTQUFULENBQW1CWCxNQUFuQixFQUEyQnFCLENBQTNCLEVBQThCQyxDQUE5QixFQUFpQzlCLEtBQWpDLEVBQXdDb0IsTUFBeEM7QUFDQSxXQUFLN0IsR0FBTCxDQUFTOEIsU0FBVDtBQUNQOzs7Ozs7QUFHTE0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEMsTUFBakIsQzs7Ozs7Ozs7Ozs7QUNkQWtELElBQUksR0FBR25ELG1CQUFPLENBQUMsb0NBQUQsQ0FBZDtBQUVBcUQsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNbkQsTUFBTSxHQUFHa0QsUUFBUSxDQUFDRSxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNbkQsR0FBRyxHQUFHRCxNQUFNLENBQUNxRCxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUcsSUFBSU4sSUFBSixDQUFTaEQsTUFBVCxFQUFpQkMsR0FBakIsQ0FBWDtBQUNBcUQsTUFBSSxDQUFDQyxRQUFMO0FBQ0gsQ0FMRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyQmFsbENvbGlzaW9uID0gdGhpcy5wbGF5ZXJCYWxsQ29saXNpb24uYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMuYnViYmxlWCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMuYnViYmxlWSA9IDUwO1xuICAgICAgICB0aGlzLmJ1YmJsZURYID0gNTtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IDA7XG4gICAgICAgIHRoaXMuYmFsbFJhZGl1cyA9IDQwO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjE7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAxLjAwMTtcbiAgICAgICAgXG5cbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KVxuICAgICAgICB0aGlzLnBsYXllckhlaWdodCA9IDE4MDtcbiAgICAgICAgdGhpcy5wbGF5ZXJXaWR0aCA9IDE4MDtcbiAgICAgICAgdGhpcy5wbGF5ZXJYID0gKGNhbnZhcy53aWR0aCAtIHRoaXMucGxheWVyV2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5kcmF3R2FtZSwgMTApXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKClcbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgdGhpcy5idWJibGUuZHJhdyh0aGlzLmJ1YmJsZVgsIHRoaXMuYnViYmxlWSwgdGhpcy5iYWxsUmFkaXVzKVxuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMuYnViYmxlWCArPSB0aGlzLmJ1YmJsZURYO1xuICAgICAgICB0aGlzLmJ1YmJsZVkgKz0gdGhpcy5idWJibGVEWSArIHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICBsZXQgcm9ja2JvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuYmFsbFJhZGl1cztcbiAgICAgICAgaWYgKHRoaXMuYnViYmxlWSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHJvY2tib3R0b207XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYnViYmxlWCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMuYmFsbFJhZGl1cyB8fCB0aGlzLmJ1YmJsZVggKyB0aGlzLmJ1YmJsZURYIDwgdGhpcy5iYWxsUmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cblxuICAgICAgICAvL3BsYXllclxuICAgICAgICBpZiAodGhpcy5yaWdodFByZXNzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyWCArPSA3O1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyWCArIHRoaXMucGxheWVyV2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyWCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5wbGF5ZXJXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmxlZnRQcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllclggLT0gNztcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllclggPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJYID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMucGxheWVyWCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTMyLCB0aGlzLnBsYXllcldpZHRoLCB0aGlzLnBsYXllckhlaWdodClcbiAgICB9XG5cbiAgICBrZXlEb3duSGFuZGxlcihlKSB7XG4gICAgICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxufVxuXG4gICAga2V5VXBIYW5kbGVyKGUpIHtcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJCYWxsQ29saXNpb24oKSB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICB9XG5cbiAgICBkcmF3KHgsIHksIHJhZGl1cykge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICB9XG4gICAgXG4gICAgZ2FtZUxvb3AoKSB7XG4gICAgICAgIGJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eClcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgYm9hcmQua2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGJvYXJkLmtleVVwSGFuZGxlciwgZmFsc2UpO1xuICAgIH1cblxuICAgIFxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGRyYXcoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgZ2FtZS5nYW1lTG9vcCgpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=