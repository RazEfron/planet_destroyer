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
      this.shots.push(new Laser(this.canvas, this.ctx, this));
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
        break;

      case "n":
        game.start();
        break;

      case " ":
        game.shoot();
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
    this.x = this.game.board.player.position.x + 85;
    this.y = this.canvas.height - 100;
    this.speedY = 5;
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  _createClass(Laser, [{
    key: "draw",
    value: function draw() {
      this.ctx.fillRect(this.x, this.y, 10, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJzaG90cyIsImZvckVhY2giLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJyb2NrYm90dG9tIiwiSW5wdXRIYW5kbGVyIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkdhbWUiLCJnYW1lU3RhdGUiLCJib2FyZCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsImNvdW50IiwidXBkYXRlR2FtZSIsImJ1YmJsZUJvdHRvbSIsInRvcFBsYXllciIsInBvc2l0aW9uIiwibGVmdE9mUGxheWVyIiwicmlnaHRPZlBsYXllciIsImxlZnRPZkJ1YmJsZSIsInJpZ2h0T2ZCdWJibGUiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImZpbGxSZWN0IiwibWF4U3BlZWQiLCJjbG9zZVBhdGgiLCJnZXRDb250ZXh0IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVTdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsa0NB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O0FBR0FDLFVBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFBRyxVQUFDQyxTQUFELEVBQWU7QUFDdEJGLFlBQVEsR0FBR0UsU0FBWDtBQUNBdEYsUUFBSSxDQUFDbUIsTUFBTDtBQUNBbkIsUUFBSSxDQUFDYyxJQUFMO0FBQ0F5RSx5QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILEdBTE8sQ0FBUjs7QUFNQUUsdUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxDQWRELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgpO1xuICAgICAgICBcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KTtcblxuICAgICAgICAvL2xhc2VyXG4gICAgICAgIC8vIHRoaXMubGFzZXIgPSBuZXcgTGFzZXIoY2FudmFzLCBjdHgsIHRoaXMpO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9ICdzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfb25lLmpwZydcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuYnViYmxlLmRyYXcoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUuc2hvdHMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKVxuICAgIH1cblxuICAgIHVwZGF0ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmJ1YmJsZS51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgIH1cblxuICAgIGRyYXdMaXZlcygpIHtcbiAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgIHRoaXMuZ2FtZS5saXZlcy5mb3JFYWNoKGhlYXJ0Q291bnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCBoZWFydENvdW50ICogNDAsIDAsIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnkgPSA1MDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDAgLy8gMjEwIDEzNVxuICAgICAgICB0aGlzLndpZHRoID0gMzAwIC8vIDIxMCAxMzVcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gNTtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IDA7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDAuMTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAwO1xuICAgICAgICB0aGlzLmJvdW5jZSA9IDEuMDA1O1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZICsgdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIGlmICh0aGlzLnkgPiByb2NrYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSByb2NrYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAtKHRoaXMuZ3Jhdml0eVNwZWVkICogdGhpcy5ib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLmJ1YmJsZURYID4gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoIC8gMiAtIDMwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzXG59O1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLk1FTlU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHRoaXMubGl2ZXMgPSBbMCwgMSwgMiwgMywgNF07XG5cbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2hvdHMgPSBbXVxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQgfHwgXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgcmV0dXJuICA7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLmJvYXJkLnVwZGF0ZUdhbWUoKTtcbiAgICB9XG4gICAgXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCB7IHBsYXllciwgYnViYmxlIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBsZXQgYnViYmxlQm90dG9tID0gYnViYmxlLnkgKyAxNzU7XG4gICAgICAgIGxldCB0b3BQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueSArIDMwO1xuICAgICAgICBsZWZ0T2ZQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICByaWdodE9mUGxheWVyID0gbGVmdE9mUGxheWVyICsgcGxheWVyLndpZHRoIC0gMTA1O1xuICAgICAgICBsZWZ0T2ZCdWJibGUgPSBidWJibGUueCArIDM1O1xuICAgICAgICByaWdodE9mQnViYmxlID0gbGVmdE9mQnViYmxlICsgMTM1O1xuICAgICAgICBpZiAoYnViYmxlQm90dG9tID49IHRvcFBsYXllcikge1xuICAgICAgICAgICAgaWYgKChsZWZ0T2ZQbGF5ZXIgPj0gbGVmdE9mQnViYmxlICYmIGxlZnRPZlBsYXllciA8PSByaWdodE9mQnViYmxlKSB8fCAocmlnaHRPZlBsYXllciA8PSByaWdodE9mQnViYmxlICYmIHJpZ2h0T2ZQbGF5ZXIgPj0gbGVmdE9mQnViYmxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVBhdXNlKCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpIHtcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICBuZXcgSW5wdXRIYW5kbGVyKHRoaXMuYm9hcmQucGxheWVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIHRoaXMuc2hvdHMucHVzaChuZXcgTGFzZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKSlcbiAgICB9XG5cbiAgICAvLyBzdG9wU2hvb3RpbmcoKSB7XG4gICAgLy8gICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgZ2FtZSkge1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJuXCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc2hvb3QoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWQgPiAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLnNwZWVkIDwgMCkgcGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgLy8gICAgIGdhbWUuc3RvcFNob290aW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgTGFzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmJvYXJkLnBsYXllci5wb3NpdGlvbi54ICsgODU7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSA1O1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgMTAsIDUwKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRZO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXNlcjsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTgwOyAvLyAxMTBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxODA7IC8vIDExMFxuXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCArIDM1XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyLnNyYyA9ICdzcmMvaW1hZ2VzL3BsYXllci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocGxheWVyLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtMzBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGggKyAzMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgpO1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICBcbiAgICBnYW1lTG9vcCA9ICh0aW1lU3RhbXApID0+IHtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICAgIGdhbWUudXBkYXRlKCk7XG4gICAgICAgIGdhbWUuZHJhdygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=