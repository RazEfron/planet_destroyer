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
InputHandler = __webpack_require__(/*! ../dist/input_handle */ "./dist/input_handle.js");

var Board = /*#__PURE__*/function () {
  function Board(canvas, ctx) {
    _classCallCheck(this, Board);

    this.canvas = canvas;
    this.ctx = ctx;
    this.drawGame = this.drawGame.bind(this);
    this.drawBackground = this.drawBackground.bind(this); //bubble

    this.bubble = new Bubble(canvas, ctx); //player

    this.player = new Player(canvas, ctx);
    this.inputHandler = new InputHandler(this.player);
  }

  _createClass(Board, [{
    key: "drawBackground",
    value: function drawBackground() {
      var background = new Image();
      background.src = 'src/images/background_level_one.jpg';
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
    }
  }, {
    key: "drawGame",
    value: function drawGame() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBackground();
      this.bubble.draw();
      this.player.draw();
    }
  }, {
    key: "updateGame",
    value: function updateGame(deltaTime) {
      this.player.update(deltaTime);
      this.bubble.update(deltaTime);
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
    this.x = canvas.width / 2;
    this.y = 50;
    this.height = 300; // 210 135

    this.width = 300; // 210 135

    this.bubbleDX = 5;
    this.bubbleDY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 1.005;
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw() {
      var bubble = document.getElementById("planet-one");
      this.ctx.drawImage(bubble, this.x, this.y, this.width * .7, this.height * .7);
      this.ctx.globalCompositeOperation = 'destination-in';
      this.ctx.arc(75, 75, 50, 0, Math.PI * 2);
      this.ctx.globalCompositeOperation = 'source-over';
    }
  }, {
    key: "update",
    value: function update() {
      this.gravitySpeed += this.gravity;
      this.x += this.bubbleDX;
      this.y += this.bubbleDY + this.gravitySpeed;
      var rockbottom = this.canvas.height - this.height / 2 - 30;

      if (this.y > rockbottom) {
        this.y = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      }

      if (this.x + this.bubbleDX > this.canvas.width - this.width / 2 - 30 || this.x + this.bubbleDX < -30) {
        this.bubbleDX = -this.bubbleDX;
      }
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
    this.lastTime = 0;
    this.board = new Board(this.canvas, this.ctx);
    this.gameLoop = this.gameLoop.bind(this);
  }

  _createClass(Game, [{
    key: "gameLoop",
    value: function gameLoop(timeStamp) {
      var deltaTime = timeStamp - this.lastTime;
      this.lastTime = timeStamp;
      this.board.updateGame(deltaTime);
      this.board.drawGame();
      this.collision();
      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: "collision",
    value: function collision() {
      var _this$board = this.board,
          player = _this$board.player,
          bubble = _this$board.bubble;
      debugger;
      var bubbleBottom = bubble.y + 175;
      var topPlayer = player.position.y + 30;
      leftOfPlayer = player.position.x + 35;
      rightOfPlayer = leftOfPlayer + player.width - 105;
      leftOfBubble = bubble.x + 35;
      rightOfBubble = leftOfBubble + 135;

      if (bubbleBottom >= topPlayer) {
        if (leftOfPlayer >= leftOfBubble && leftOfPlayer <= rightOfBubble || rightOfPlayer <= rightOfBubble && rightOfPlayer >= leftOfBubble) {
          console.log("colision");
        }
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./dist/input_handle.js":
/*!******************************!*\
  !*** ./dist/input_handle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(player) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      player.moveRight();
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      player.moveLeft();
    }
  });
  document.addEventListener("keyup", function (e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
      if (player.speed > 0) player.stop();
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      if (player.speed < 0) player.stop();
    }
  });
};

module.exports = InputHandler;

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
    this.width = 180; // 110

    this.height = 180; // 110

    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: this.canvas.width / 2 - this.width / 2,
      y: this.canvas.height - this.height + 35
    };
  }

  _createClass(Player, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.speed = -this.maxSpeed;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.speed = this.maxSpeed;
    }
  }, {
    key: "draw",
    value: function draw() {
      var player = new Image();
      player.src = 'src/images/player.png';
      this.ctx.beginPath();
      this.ctx.drawImage(player, this.position.x, this.position.y, this.width, this.height);
      this.ctx.closePath();
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.position.x += this.speed;

      if (this.position.x < -30) {
        this.position.x = -30;
      }

      if (this.position.x + this.width > this.canvas.width + 30) {
        this.position.x = this.canvas.width - this.width + 30;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.speed = 0;
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
  requestAnimationFrame(game.gameLoop);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJJbnB1dEhhbmRsZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiYnViYmxlIiwicGxheWVyIiwiaW5wdXRIYW5kbGVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJkcmF3IiwiZGVsdGFUaW1lIiwidXBkYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwicm9ja2JvdHRvbSIsIkdhbWUiLCJsYXN0VGltZSIsImJvYXJkIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJ1cGRhdGVHYW1lIiwiY29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnViYmxlQm90dG9tIiwidG9wUGxheWVyIiwicG9zaXRpb24iLCJsZWZ0T2ZQbGF5ZXIiLCJyaWdodE9mUGxheWVyIiwibGVmdE9mQnViYmxlIiwicmlnaHRPZkJ1YmJsZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic3BlZWQiLCJzdG9wIiwibWF4U3BlZWQiLCJjbG9zZVBhdGgiLCJnZXRDb250ZXh0IiwiZ2FtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBaEI7QUFDQUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHdDQUFELENBQWhCO0FBQ0FFLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxvREFBRCxDQUF0Qjs7SUFFTUcsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUNyQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0Is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O0FBQ0gsV0FBSzZDLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7OztBQUdMdEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsTUFBakIsQzs7Ozs7Ozs7Ozs7QUNwREFzQyxJQUFJLEdBQUd2QyxtQkFBTyxDQUFDLG9DQUFELENBQWQ7QUFFQWdDLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1wRCxNQUFNLEdBQUc0QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQU01QixHQUFHLEdBQUdELE1BQU0sQ0FBQzZELFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFJM0IsSUFBSixDQUFTbkMsTUFBVCxFQUFpQkMsR0FBakIsQ0FBWDtBQUNBeUMsdUJBQXFCLENBQUNvQixJQUFJLENBQUN4QixRQUFOLENBQXJCO0FBQ0gsQ0FMRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eClcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy5pbnB1dEhhbmRsZXIgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMucGxheWVyKVxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9ICdzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfb25lLmpwZydcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKClcbiAgICAgICAgdGhpcy5idWJibGUuZHJhdygpXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKVxuICAgIH1cblxuICAgIHVwZGF0ZUdhbWUoZGVsdGFUaW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZShkZWx0YVRpbWUpXG4gICAgICAgIHRoaXMuYnViYmxlLnVwZGF0ZShkZWx0YVRpbWUpXG4gICAgfVxuXG5cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDAgLy8gMjEwIDEzNVxuICAgICAgICB0aGlzLndpZHRoID0gMzAwIC8vIDIxMCAxMzVcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gNTtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IDA7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmJvdW5jZSA9IDEuMDA1O1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYyg3NSwgNzUsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFkgKyB0aGlzLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gMzAgfHwgdGhpcy54ICsgdGhpcy5idWJibGVEWCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBnYW1lTG9vcCh0aW1lU3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lU3RhbXA7XG5cbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKGRlbHRhVGltZSkgXG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKVxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKVxuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyLCBidWJibGUgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGxldCBidWJibGVCb3R0b20gPSBidWJibGUueSArIDE3NTtcbiAgICAgICAgbGV0IHRvcFBsYXllciA9IHBsYXllci5wb3NpdGlvbi55ICsgMzA7XG4gICAgICAgIGxlZnRPZlBsYXllciA9IHBsYXllci5wb3NpdGlvbi54ICsgMzU7XG4gICAgICAgIHJpZ2h0T2ZQbGF5ZXIgPSBsZWZ0T2ZQbGF5ZXIgKyBwbGF5ZXIud2lkdGggLSAxMDU7XG4gICAgICAgIGxlZnRPZkJ1YmJsZSA9IGJ1YmJsZS54ICsgMzU7XG4gICAgICAgIHJpZ2h0T2ZCdWJibGUgPSBsZWZ0T2ZCdWJibGUgKyAxMzVcbiAgICAgICAgaWYgKGJ1YmJsZUJvdHRvbSA+PSB0b3BQbGF5ZXIpIHtcbiAgICAgICAgICAgIGlmICgobGVmdE9mUGxheWVyID49IGxlZnRPZkJ1YmJsZSAmJiBsZWZ0T2ZQbGF5ZXIgPD0gcmlnaHRPZkJ1YmJsZSkgfHwgKHJpZ2h0T2ZQbGF5ZXIgPD0gcmlnaHRPZkJ1YmJsZSAmJiByaWdodE9mUGxheWVyID49IGxlZnRPZkJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbGlzaW9uXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWQgPiAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDE4MDsgLy8gMTEwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTgwOyAvLyAxMTBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzNVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWUuZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=