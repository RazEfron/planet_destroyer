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
Laser = __webpack_require__(/*! ../dist/laser */ "./dist/laser.js");

var Board = /*#__PURE__*/function () {
  function Board(canvas, ctx, game) {
    _classCallCheck(this, Board);

    this.canvas = canvas;
    this.ctx = ctx;
    this.game = game;
    this.drawGame = this.drawGame.bind(this);
    this.drawBackground = this.drawBackground.bind(this); //bubble

    this.bubble = new Bubble(canvas, ctx); //player

    this.player = new Player(canvas, ctx); //laser
    // this.laser = new Laser(canvas, ctx, this);
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
      this.drawLives();
      this.game.shots.forEach(function (shot) {
        return shot.draw();
      });
    }
  }, {
    key: "updateGame",
    value: function updateGame() {
      this.player.update();
      this.bubble.update();
      this.game.shots.forEach(function (shot) {
        return shot.update();
      });
    }
  }, {
    key: "drawLives",
    value: function drawLives() {
      var _this = this;

      var heart = new Image();
      heart.src = 'src/images/heart.png';
      this.game.lives.forEach(function (heartCount) {
        _this.ctx.drawImage(heart, heartCount * 40, 0, 100, 100);

        _this.ctx.beginPath();
      });
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
      this.ctx.arc(0, 0, 50, 0, Math.PI * 2);
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
Laser = __webpack_require__(/*! ../dist/laser */ "./dist/laser.js");
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
    this.gameState = GAMESTATE.MENU;
    this.board = new Board(this.canvas, this.ctx, this);
    new InputHandler(this.board.player, this);
    this.lives = [0, 1, 2, 3, 4];
    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.collision = this.collision.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.loseLife = this.loseLife.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.shoot = this.shoot.bind(this);
    this.shots = [];
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      debugger;

      if (this.gameState === GAMESTATE.MENU) {
        this.gameState = GAMESTATE.RUNNING;
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        this.lives = [0, 1, 2, 3, 4];
        this.board = new Board(this.canvas, this.ctx, this);
        new InputHandler(this.board.player, this);
        this.gameState = GAMESTATE.RUNNING;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      this.board.drawGame();

      if (this.gameState === GAMESTATE.MENU) {
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,0,0.5)";
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Press N to start a new game", this.canvas.width / 2, this.canvas.height / 2);
      }

      if (this.gameState === GAMESTATE.PAUSED) {
        debugger;
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,0,0.5)";
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Paused", this.canvas.width / 2, this.canvas.height / 2);
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        debugger;
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER", this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillText("Press N to start a new game", this.canvas.width / 2, this.canvas.height / 2 + 100);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.GAMEOVER || this.gameState === GAMESTATE.MENU) {
        // debugger;
        return;
      }

      this.count += 1;
      this.collision();
      this.gameOver();
      this.board.updateGame();
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
          this.loseLife();
        }
      }
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      debugger;

      if (this.gameState === GAMESTATE.PAUSED) {
        this.gameState = GAMESTATE.RUNNING;
      } else if (this.gameState === GAMESTATE.RUNNING) {
        this.gameState = GAMESTATE.PAUSED;
      }
    }
  }, {
    key: "loseLife",
    value: function loseLife() {
      this.lives.pop();
      this.board = new Board(this.canvas, this.ctx, this);
      new InputHandler(this.board.player, this);
      this.gameState = GAMESTATE.RUNNING;
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.lives.length === 0) {
        this.gameState = GAMESTATE.GAMEOVER;
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      if (this.gameState === GAMESTATE.RUNNING) {
        this.shots.push(new Laser(this.canvas, this.ctx, this));
      }
    } // stopShooting() {
    //     this.shooting = false;
    // }

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
  var _this = this;

  _classCallCheck(this, InputHandler);

  this.locked = false;
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
        break;

      case "n":
        game.start();
        break;

      case " ":
        if (_this.locked) return;
        game.shoot();
        _this.locked = true;
        setTimeout(function () {
          _this.locked = false;
        }, 1000);
        break;

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
      // case (" "):
      //     game.stopShooting();
      //     break 

      default:
        break;
    }
  });
};

module.exports = InputHandler;

/***/ }),

/***/ "./dist/laser.js":
/*!***********************!*\
  !*** ./dist/laser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Laser = /*#__PURE__*/function () {
  function Laser(canvas, ctx, game) {
    _classCallCheck(this, Laser);

    debugger;
    this.canvas = canvas;
    this.ctx = ctx;
    this.game = game;
    this.x = this.game.board.player.position.x + 75;
    this.y = this.canvas.height - 100;
    this.speedY = 10;
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  _createClass(Laser, [{
    key: "draw",
    value: function draw() {
      var laser = new Image();
      laser.src = 'src/images/laser.png';
      this.ctx.beginPath();
      this.ctx.drawImage(laser, this.x, this.y, 30, 90);
      this.ctx.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.y -= this.speedY;
    }
  }]);

  return Laser;
}();

module.exports = Laser;

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
    value: function update() {
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
    lastTime = timeStamp;
    game.update();
    game.draw();
    requestAnimationFrame(gameLoop);
  });

  requestAnimationFrame(gameLoop);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJzaG90cyIsImZvckVhY2giLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJyb2NrYm90dG9tIiwiSW5wdXRIYW5kbGVyIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkdhbWUiLCJnYW1lU3RhdGUiLCJib2FyZCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImNvdW50IiwidXBkYXRlR2FtZSIsImJ1YmJsZUJvdHRvbSIsInRvcFBsYXllciIsInBvc2l0aW9uIiwibGVmdE9mUGxheWVyIiwicmlnaHRPZlBsYXllciIsImxlZnRPZkJ1YmJsZSIsInJpZ2h0T2ZCdWJibGUiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwibG9ja2VkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNldFRpbWVvdXQiLCJzcGVlZCIsInN0b3AiLCJzcGVlZFkiLCJsYXNlciIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxH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QUNIO0FBQ0o7OzsyQkFFTTtBQUNILFdBQUtxRSxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7Ozs7QUFHTHhELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdCLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDcERBa0QsSUFBSSxHQUFHbkQsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFkO0FBRUFzQyxRQUFRLENBQUN5QyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNM0UsTUFBTSxHQUFHa0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNbEMsR0FBRyxHQUFHRCxNQUFNLENBQUN1RixVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNckYsSUFBSSxHQUFHLElBQUk2QyxJQUFKLENBQVMvQyxNQUFULEVBQWlCQyxHQUFqQixDQUFiO0FBQ0EsTUFBSXVGLFFBQVEsR0FBRyxDQUFmOztBQUdBQyxVQUFRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLElBQUcsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RCRixZQUFRLEdBQUdFLFNBQVg7QUFDQXhGLFFBQUksQ0FBQ21CLE1BQUw7QUFDQW5CLFFBQUksQ0FBQ2MsSUFBTDtBQUNBMkUseUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxHQUxPLENBQVI7O0FBTUFFLHVCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG5cbiAgICAgICAgLy9sYXNlclxuICAgICAgICAvLyB0aGlzLmxhc2VyID0gbmV3IExhc2VyKGNhbnZhcywgY3R4LCB0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSAnc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsX29uZS5qcGcnXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmJ1YmJsZS5kcmF3KCk7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3TGl2ZXMoKTtcbiAgICAgICAgdGhpcy5nYW1lLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSlcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5idWJibGUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSlcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoKSB7XG4gICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICB0aGlzLmdhbWUubGl2ZXMuZm9yRWFjaChoZWFydENvdW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgaGVhcnRDb3VudCAqIDQwLCAwLCAxMDAsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwIC8vIDIxMCAxMzVcbiAgICAgICAgdGhpcy53aWR0aCA9IDMwMCAvLyAyMTAgMTM1XG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IDU7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSAwO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjE7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAxLjAwNTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtb25lXCIpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShidWJibGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoICogLjcsIHRoaXMuaGVpZ2h0ICogLjcpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMCwgMCwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmJ1YmJsZURYO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5idWJibGVEWSArIHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICBsZXQgcm9ja2JvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSAzMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogM1xufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIG5ldyBJbnB1dEhhbmRsZXIodGhpcy5ib2FyZC5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmxpdmVzID0gWzAsIDEsIDIsIDMsIDRdO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnNob3RzID0gW11cbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgICAgIG5ldyBJbnB1dEhhbmRsZXIodGhpcy5ib2FyZC5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZWRcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEIHx8IFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUiB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIHJldHVybiAgO1xuICAgICAgICB9IFxuICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgeyBwbGF5ZXIsIGJ1YmJsZSB9ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgbGV0IGJ1YmJsZUJvdHRvbSA9IGJ1YmJsZS55ICsgMTc1O1xuICAgICAgICBsZXQgdG9wUGxheWVyID0gcGxheWVyLnBvc2l0aW9uLnkgKyAzMDtcbiAgICAgICAgbGVmdE9mUGxheWVyID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgcmlnaHRPZlBsYXllciA9IGxlZnRPZlBsYXllciArIHBsYXllci53aWR0aCAtIDEwNTtcbiAgICAgICAgbGVmdE9mQnViYmxlID0gYnViYmxlLnggKyAzNTtcbiAgICAgICAgcmlnaHRPZkJ1YmJsZSA9IGxlZnRPZkJ1YmJsZSArIDEzNTtcbiAgICAgICAgaWYgKGJ1YmJsZUJvdHRvbSA+PSB0b3BQbGF5ZXIpIHtcbiAgICAgICAgICAgIGlmICgobGVmdE9mUGxheWVyID49IGxlZnRPZkJ1YmJsZSAmJiBsZWZ0T2ZQbGF5ZXIgPD0gcmlnaHRPZkJ1YmJsZSkgfHwgKHJpZ2h0T2ZQbGF5ZXIgPD0gcmlnaHRPZkJ1YmJsZSAmJiByaWdodE9mUGxheWVyID49IGxlZnRPZkJ1YmJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIHRoaXMubGl2ZXMucG9wKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLnNob3RzLnB1c2gobmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdG9wU2hvb3RpbmcoKSB7XG4gICAgLy8gICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgZ2FtZSkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcInBcIik6IFxuICAgICAgICAgICAgICAgICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIm5cIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiIFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc2hvb3QoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubG9ja2VkID0gZmFsc2U7IH0sIDEwMDApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkID4gMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA8IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgIC8vICAgICBnYW1lLnN0b3BTaG9vdGluZygpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhayBcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDc1O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkWTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFzZXI7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDE4MDsgLy8gMTEwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTgwOyAvLyAxMTBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzNVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgXG4gICAgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLnVwZGF0ZSgpO1xuICAgICAgICBnYW1lLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufSkiXSwic291cmNlUm9vdCI6IiJ9