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
    this.height = 300;
    this.width = 300;
    this.bubbleDX = 5;
    this.bubbleDY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 1.005;
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw() {
      debugger;
      var bubble = document.getElementById("planet-one");
      this.ctx.drawImage(bubble, this.x, this.y, this.width * .7, this.height * .7);
      this.ctx.globalCompositeOperation = 'destination-in';
      this.ctx.arc(75, 75, 50, 0, Math.PI * 2);
      this.ctx.globalCompositeOperation = 'source-over';
    }
  }, {
    key: "update",
    value: function update() {
      debugger;
      this.gravitySpeed += this.gravity;
      this.x += this.bubbleDX;
      this.y += this.bubbleDY + this.gravitySpeed;
      var rockbottom = this.canvas.height - this.height / 2;

      if (this.y > rockbottom) {
        this.y = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      }

      if (this.x + this.bubbleDX > this.canvas.width - this.height / 2 - 30 || this.x + this.bubbleDX < -30) {
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
      requestAnimationFrame(this.gameLoop);
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
    this.width = 180;
    this.height = 180;
    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: this.canvas.width / 2 - this.width / 2,
      y: this.canvas.height - this.height + 46
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJJbnB1dEhhbmRsZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiYnViYmxlIiwicGxheWVyIiwiaW5wdXRIYW5kbGVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJkcmF3IiwiZGVsdGFUaW1lIiwidXBkYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwicm9ja2JvdHRvbSIsIkdhbWUiLCJsYXN0VGltZSIsImJvYXJkIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJ1cGRhdGVHYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsIm1heFNwZWVkIiwicG9zaXRpb24iLCJjbG9zZVBhdGgiLCJnZXRDb250ZXh0IiwiZ2FtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBaEI7QUFDQUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLHdDQUFELENBQWhCO0FBQ0FFLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyxvREFBRCxDQUF0Qjs7SUFFTUcsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUNyQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEIsQ0FMcUIsQ0FPckI7O0FBQ0EsU0FBS0UsTUFBTCxHQUFjLElBQUlWLE1BQUosQ0FBV0ssTUFBWCxFQUFtQkMsR0FBbkIsQ0FBZCxDQVJxQixDQVVyQjs7QUFDQSxTQUFLSyxNQUFMLEdBQWMsSUFBSVQsTUFBSixDQUFXRyxNQUFYLEVBQW1CQyxHQUFuQixDQUFkO0FBQ0EsU0FBS00sWUFBTCxHQUFvQixJQUFJVCxZQUFKLENBQWlCLEtBQUtRLE1BQXRCLENBQXBCO0FBQ0g7Ozs7cUNBRWdCO0FBQ2IsVUFBSUUsVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBakI7QUFDQUQsZ0JBQVUsQ0FBQ0UsR0FBWCxHQUFpQixxQ0FBakI7QUFDQSxXQUFLVCxHQUFMLENBQVNVLFNBQVQsQ0FBbUJILFVBQW5CLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLEtBQUtSLE1BQUwsQ0FBWVksS0FBakQsRUFBd0QsS0FBS1osTUFBTCxDQUFZYSxNQUFwRTtBQUNBLFdBQUtaLEdBQUwsQ0FBU2EsU0FBVDtBQUNIOzs7K0JBRVU7QUFDUCxXQUFLYixHQUFMLENBQVNjLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2YsTUFBTCxDQUFZWSxLQUFyQyxFQUE0QyxLQUFLWixNQUFMLENBQVlhLE1BQXhEO0FBQ0EsV0FBS1QsY0FBTDtBQUNBLFdBQUtDLE1BQUwsQ0FBWVcsSUFBWjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVUsSUFBWjtBQUNIOzs7K0JBRVVDLFMsRUFBVztBQUNsQixXQUFLWCxNQUFMLENBQVlZLE1BQVosQ0FBbUJELFNBQW5CO0FBQ0EsV0FBS1osTUFBTCxDQUFZYSxNQUFaLENBQW1CRCxTQUFuQjtBQUNIOzs7Ozs7QUFNTEUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckIsS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQ01KLE07QUFDRixrQkFBWUssTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS29CLENBQUwsR0FBU3JCLE1BQU0sQ0FBQ1ksS0FBUCxHQUFlLENBQXhCO0FBQ0EsU0FBS1UsQ0FBTCxHQUFTLEVBQVQ7QUFDQSxTQUFLVCxNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxHQUFiO0FBRUEsU0FBS1csUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsR0FBZjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUVIOzs7OzJCQUVNO0FBQ0g7QUFDQSxVQUFJdEIsTUFBTSxHQUFHdUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxXQUFLNUIsR0FBTCxDQUFTVSxTQUFULENBQW1CTixNQUFuQixFQUEyQixLQUFLZ0IsQ0FBaEMsRUFBbUMsS0FBS0MsQ0FBeEMsRUFBMkMsS0FBS1YsS0FBTCxHQUFhLEVBQXhELEVBQTRELEtBQUtDLE1BQUwsR0FBYyxFQUExRTtBQUNBLFdBQUtaLEdBQUwsQ0FBUzZCLHdCQUFULEdBQW9DLGdCQUFwQztBQUNBLFdBQUs3QixHQUFMLENBQVM4QixHQUFULENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixDQUF6QixFQUE0QkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBdEM7QUFDQSxXQUFLaEMsR0FBTCxDQUFTNkIsd0JBQVQsR0FBb0MsYUFBcEM7QUFDSDs7OzZCQUVRO0FBQ0w7QUFDQSxXQUFLSixZQUFMLElBQXFCLEtBQUtELE9BQTFCO0FBQ0EsV0FBS0osQ0FBTCxJQUFVLEtBQUtFLFFBQWY7QUFDQSxXQUFLRCxDQUFMLElBQVUsS0FBS0UsUUFBTCxHQUFnQixLQUFLRSxZQUEvQjtBQUNBLFVBQUlRLFVBQVUsR0FBRyxLQUFLbEMsTUFBTCxDQUFZYSxNQUFaLEdBQXFCLEtBQUtBLE1BQUwsR0FBYyxDQUFwRDs7QUFDQSxVQUFJLEtBQUtTLENBQUwsR0FBU1ksVUFBYixFQUF5QjtBQUNyQixhQUFLWixDQUFMLEdBQVNZLFVBQVQ7QUFDQSxhQUFLUixZQUFMLEdBQW9CLEVBQUUsS0FBS0EsWUFBTCxHQUFvQixLQUFLQyxNQUEzQixDQUFwQjtBQUNIOztBQUNELFVBQUksS0FBS04sQ0FBTCxHQUFTLEtBQUtFLFFBQWQsR0FBeUIsS0FBS3ZCLE1BQUwsQ0FBWVksS0FBWixHQUFvQixLQUFLQyxNQUFMLEdBQWMsQ0FBbEMsR0FBc0MsRUFBL0QsSUFBcUUsS0FBS1EsQ0FBTCxHQUFTLEtBQUtFLFFBQWQsR0FBeUIsQ0FBQyxFQUFuRyxFQUF1RztBQUNuRyxhQUFLQSxRQUFMLEdBQWdCLENBQUMsS0FBS0EsUUFBdEI7QUFDSDtBQUNKOzs7Ozs7QUFHTEosTUFBTSxDQUFDQyxPQUFQLEdBQWlCekIsTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0FJLEtBQUssR0FBR0gsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFmOztJQUdNdUMsSTtBQUNGLGdCQUFZbkMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS21DLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSXRDLEtBQUosQ0FBVSxLQUFLQyxNQUFmLEVBQXVCLEtBQUtDLEdBQTVCLENBQWI7QUFDQSxTQUFLcUMsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNuQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0g7Ozs7NkJBRVFvQyxTLEVBQVc7QUFDaEIsVUFBSXRCLFNBQVMsR0FBR3NCLFNBQVMsR0FBRyxLQUFLSCxRQUFqQztBQUNBLFdBQUtBLFFBQUwsR0FBZ0JHLFNBQWhCO0FBRUEsV0FBS0YsS0FBTCxDQUFXRyxVQUFYLENBQXNCdkIsU0FBdEI7QUFDQSxXQUFLb0IsS0FBTCxDQUFXbkMsUUFBWDtBQUVBdUMsMkJBQXFCLENBQUMsS0FBS0gsUUFBTixDQUFyQjtBQUNIOzs7Ozs7QUFNTG5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmUsSUFBakIsQzs7Ozs7Ozs7Ozs7OztJQzFCTXJDLFksR0FDRixzQkFBWVEsTUFBWixFQUFvQjtBQUFBOztBQUVoQnNCLFVBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RDLFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQStDO0FBQzNDdEMsWUFBTSxDQUFDdUMsU0FBUDtBQUNILEtBRkQsTUFFTyxJQUFJRixDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUFoQyxFQUE2QztBQUNoRHRDLFlBQU0sQ0FBQ3dDLFFBQVA7QUFDSDtBQUNKLEdBTkQ7QUFRQWxCLFVBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BDLFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQStDO0FBQzNDLFVBQUl0QyxNQUFNLENBQUN5QyxLQUFQLEdBQWUsQ0FBbkIsRUFBc0J6QyxNQUFNLENBQUMwQyxJQUFQO0FBQ3pCLEtBRkQsTUFFTyxJQUFJTCxDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUFoQyxFQUE2QztBQUNoRCxVQUFJdEMsTUFBTSxDQUFDeUMsS0FBUCxHQUFlLENBQW5CLEVBQXNCekMsTUFBTSxDQUFDMEMsSUFBUDtBQUN6QjtBQUNKLEdBTkQ7QUFPSCxDOztBQUdMN0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsWUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNyQk1ELE07QUFDRixrQkFBWUcsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS1csS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUVBLFNBQUtvQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0YsS0FBTCxHQUFhLENBQWI7QUFFQSxTQUFLRyxRQUFMLEdBQWdCO0FBQ1o3QixPQUFDLEVBQUUsS0FBS3JCLE1BQUwsQ0FBWVksS0FBWixHQUFvQixDQUFwQixHQUF3QixLQUFLQSxLQUFMLEdBQWEsQ0FENUI7QUFFWlUsT0FBQyxFQUFFLEtBQUt0QixNQUFMLENBQVlhLE1BQVosR0FBcUIsS0FBS0EsTUFBMUIsR0FBbUM7QUFGMUIsS0FBaEI7QUFJSDs7OzsrQkFFVTtBQUNQLFdBQUtrQyxLQUFMLEdBQWEsQ0FBQyxLQUFLRSxRQUFuQjtBQUNIOzs7Z0NBRVc7QUFDUixXQUFLRixLQUFMLEdBQWEsS0FBS0UsUUFBbEI7QUFDSDs7OzJCQUVNO0FBQ0gsVUFBSTNDLE1BQU0sR0FBRyxJQUFJRyxLQUFKLEVBQWI7QUFDQUgsWUFBTSxDQUFDSSxHQUFQLEdBQWEsdUJBQWI7QUFDQSxXQUFLVCxHQUFMLENBQVNhLFNBQVQ7QUFDQSxXQUFLYixHQUFMLENBQVNVLFNBQVQsQ0FBbUJMLE1BQW5CLEVBQTJCLEtBQUs0QyxRQUFMLENBQWM3QixDQUF6QyxFQUE0QyxLQUFLNkIsUUFBTCxDQUFjNUIsQ0FBMUQsRUFBNkQsS0FBS1YsS0FBbEUsRUFBeUUsS0FBS0MsTUFBOUU7QUFDQSxXQUFLWixHQUFMLENBQVNrRCxTQUFUO0FBRUg7OzsyQkFFTWxDLFMsRUFBVztBQUVkLFdBQUtpQyxRQUFMLENBQWM3QixDQUFkLElBQW1CLEtBQUswQixLQUF4Qjs7QUFFQSxVQUFJLEtBQUtHLFFBQUwsQ0FBYzdCLENBQWQsR0FBa0IsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixhQUFLNkIsUUFBTCxDQUFjN0IsQ0FBZCxHQUFrQixDQUFDLEVBQW5CO0FBQ0g7O0FBRUQsVUFBSSxLQUFLNkIsUUFBTCxDQUFjN0IsQ0FBZCxHQUFrQixLQUFLVCxLQUF2QixHQUErQixLQUFLWixNQUFMLENBQVlZLEtBQVosR0FBb0IsRUFBdkQsRUFBMkQ7QUFDdkQsYUFBS3NDLFFBQUwsQ0FBYzdCLENBQWQsR0FBa0IsS0FBS3JCLE1BQUwsQ0FBWVksS0FBWixHQUFvQixLQUFLQSxLQUF6QixHQUFpQyxFQUFuRDtBQUNIO0FBQ0o7OzsyQkFFTTtBQUNILFdBQUttQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7Ozs7QUFHTDVCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDcERBc0MsSUFBSSxHQUFHdkMsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFkO0FBRUFnQyxRQUFRLENBQUNjLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU0xQyxNQUFNLEdBQUc0QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQU01QixHQUFHLEdBQUdELE1BQU0sQ0FBQ29ELFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQUlDLElBQUksR0FBRyxJQUFJbEIsSUFBSixDQUFTbkMsTUFBVCxFQUFpQkMsR0FBakIsQ0FBWDtBQUNBd0MsdUJBQXFCLENBQUNZLElBQUksQ0FBQ2YsUUFBTixDQUFyQjtBQUNILENBTEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbklucHV0SGFuZGxlciA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5wdXRfaGFuZGxlJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgpXG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMuaW5wdXRIYW5kbGVyID0gbmV3IElucHV0SGFuZGxlcih0aGlzLnBsYXllcilcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSAnc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsX29uZS5qcGcnXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpXG4gICAgICAgIHRoaXMuYnViYmxlLmRyYXcoKVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KClcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKGRlbHRhVGltZSkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoZGVsdGFUaW1lKVxuICAgICAgICB0aGlzLmJ1YmJsZS51cGRhdGUoZGVsdGFUaW1lKVxuICAgIH1cblxuXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwXG4gICAgICAgIHRoaXMud2lkdGggPSAzMDBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gNTtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IDA7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmJvdW5jZSA9IDEuMDA1O1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgbGV0IGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDc1LCA3NSwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZICsgdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5oZWlnaHQgLyAyIC0gMzAgfHwgdGhpcy54ICsgdGhpcy5idWJibGVEWCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4KVxuICAgICAgICB0aGlzLmdhbWVMb29wID0gdGhpcy5nYW1lTG9vcC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBnYW1lTG9vcCh0aW1lU3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVTdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lU3RhbXA7XG5cbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKGRlbHRhVGltZSkgXG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdhbWVMb29wKVxuICAgIH1cbiAgICBcblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcikge1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWQgPCAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxODA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTgwO1xuXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCArIDQ2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyLnNyYyA9ICdzcmMvaW1hZ2VzL3BsYXllci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocGxheWVyLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtMzBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGggKyAzMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5nYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==