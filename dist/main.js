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
    this.drawBackground = this.drawBackground.bind(this); //bubble

    this.bubble = new Bubble(canvas, ctx); //player

    this.player = new Player(canvas, ctx);
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
InputHandler = __webpack_require__(/*! ../dist/input_handle */ "./dist/input_handle.js");
var GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.lastTime = 0;
    this.board = new Board(this.canvas, this.ctx);
    this.gameLoop = this.gameLoop.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.gameState = 1;
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw() {
      this.board.drawGame();
    }
  }, {
    key: "update",
    value: function update() {
      this.board.updateGame(deltaTime);
    }
  }, {
    key: "gameLoop",
    value: function gameLoop(timeStamp) {
      var deltaTime = timeStamp - this.lastTime;
      this.lastTime = timeStamp;
      this.collision();
      new InputHandler(this.board.player, this);
      requestAnimationFrame(this.gameLoop);
    }
  }, {
    key: "collision",
    value: function collision() {
      var _this$board = this.board,
          player = _this$board.player,
          bubble = _this$board.bubble;
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
  }, {
    key: "togglePause",
    value: function togglePause() {
      if (this.gameState === GAMESTATE.PAUSED) {
        this.gameState = GAMESTATE.RUNNING;
      } else {
        this.gameState = GAMESTATE.PAUSED;
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

var InputHandler = function InputHandler(player, game) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (e) {
    debugger;

    switch (e.key) {
      case "ArrowRight":
        player.moveRight();
        break;

      case "ArrowLeft":
        player.moveLeft();
        break;

      case "p":
        game.togglePause();

      default:
        break;
    }
  });
  document.addEventListener("keyup", function (e) {
    switch (e.key) {
      case "ArrowRight":
        if (player.speed > 0) player.stop();
        break;

      case "ArrowLeft":
        if (player.speed < 0) player.stop();
        break;

      case "Escape":
      default:
        break;
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
  var lastTime = 0;

  gameLoop = function (_gameLoop) {
    function gameLoop(_x) {
      return _gameLoop.apply(this, arguments);
    }

    gameLoop.toString = function () {
      return _gameLoop.toString();
    };

    return gameLoop;
  }(function (timeStamp) {
    var deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.board.updateGame(deltaTime);
    game.board.drawGame();
    requestAnimationFrame(gameLoop);
  });

  requestAnimationFrame(gameLoop);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiYnViYmxlIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJkcmF3IiwiZGVsdGFUaW1lIiwidXBkYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwicm9ja2JvdHRvbSIsIklucHV0SGFuZGxlciIsIkdBTUVTVEFURSIsIlBBVVNFRCIsIlJVTk5JTkciLCJNRU5VIiwiR0FNRU9WRVIiLCJHYW1lIiwibGFzdFRpbWUiLCJib2FyZCIsImdhbWVMb29wIiwidG9nZ2xlUGF1c2UiLCJnYW1lU3RhdGUiLCJ1cGRhdGVHYW1lIiwidGltZVN0YW1wIiwiY29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnViYmxlQm90dG9tIiwidG9wUGxheWVyIiwicG9zaXRpb24iLCJsZWZ0T2ZQbGF5ZXIiLCJyaWdodE9mUGxheWVyIiwibGVmdE9mQnViYmxlIiwicmlnaHRPZkJ1YmJsZSIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsIm1heFNwZWVkIiwiY2xvc2VQYXRoIiwiZ2V0Q29udGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBaEI7QUFDQUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHdDQUFELENBQWhCOztJQUVNRSxLO0FBQ0YsaUJBQVlDLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUVBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FB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LENBQVdJLFVBQVgsQ0FBc0I5QixTQUF0QjtBQUNBMkMsUUFBSSxDQUFDakIsS0FBTCxDQUFXeEMsUUFBWDtBQUNBK0MseUJBQXFCLENBQUNOLFFBQUQsQ0FBckI7QUFDSCxHQU5PLENBQVI7O0FBT0FNLHVCQUFxQixDQUFDTixRQUFELENBQXJCO0FBQ0gsQ0FmRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4KVxuICAgICAgICBcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KVxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9ICdzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfb25lLmpwZydcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKClcbiAgICAgICAgdGhpcy5idWJibGUuZHJhdygpXG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKVxuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKGRlbHRhVGltZSkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lKVxuICAgICAgICB0aGlzLmJ1YmJsZS51cGRhdGUoZGVsdGFUaW1lKVxuICAgIH1cblxuXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwIC8vIDIxMCAxMzVcbiAgICAgICAgdGhpcy53aWR0aCA9IDMwMCAvLyAyMTAgMTM1XG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IDU7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSAwO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjE7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAxLjAwNTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtb25lXCIpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShidWJibGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoICogLjcsIHRoaXMuaGVpZ2h0ICogLjcpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgICB0aGlzLmN0eC5hcmMoNzUsIDc1LCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZICsgdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIGlmICh0aGlzLnkgPiByb2NrYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSByb2NrYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAtKHRoaXMuZ3Jhdml0eVNwZWVkICogdGhpcy5ib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLmJ1YmJsZURYID4gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoIC8gMiAtIDMwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogM1xufVxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDE7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5kcmF3R2FtZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKGRlbHRhVGltZSk7XG4gICAgfVxuICAgIFxuICAgIGdhbWVMb29wKHRpbWVTdGFtcCkge1xuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgICAgICAgbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKTtcbiAgICB9XG4gICAgXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCB7IHBsYXllciwgYnViYmxlIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBsZXQgYnViYmxlQm90dG9tID0gYnViYmxlLnkgKyAxNzU7XG4gICAgICAgIGxldCB0b3BQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueSArIDMwO1xuICAgICAgICBsZWZ0T2ZQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICByaWdodE9mUGxheWVyID0gbGVmdE9mUGxheWVyICsgcGxheWVyLndpZHRoIC0gMTA1O1xuICAgICAgICBsZWZ0T2ZCdWJibGUgPSBidWJibGUueCArIDM1O1xuICAgICAgICByaWdodE9mQnViYmxlID0gbGVmdE9mQnViYmxlICsgMTM1XG4gICAgICAgIGlmIChidWJibGVCb3R0b20gPj0gdG9wUGxheWVyKSB7XG4gICAgICAgICAgICBpZiAoKGxlZnRPZlBsYXllciA+PSBsZWZ0T2ZCdWJibGUgJiYgbGVmdE9mUGxheWVyIDw9IHJpZ2h0T2ZCdWJibGUpIHx8IChyaWdodE9mUGxheWVyIDw9IHJpZ2h0T2ZCdWJibGUgJiYgcmlnaHRPZlBsYXllciA+PSBsZWZ0T2ZCdWJibGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xpc2lvblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklOR1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBnYW1lKSB7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcInBcIik6IFxuICAgICAgICAgICAgICAgICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJFc2NhcGVcIik6IFxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDE4MDsgLy8gMTEwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTgwOyAvLyAxMTBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzNVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG5cbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLmJvYXJkLnVwZGF0ZUdhbWUoZGVsdGFUaW1lKTtcbiAgICAgICAgZ2FtZS5ib2FyZC5kcmF3R2FtZSgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=