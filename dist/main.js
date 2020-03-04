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
    this.handleInput = new InputHandler(this);
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
      if (this.gameState === GAMESTATE.MENU) {
        this.gameState = GAMESTATE.RUNNING;
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        this.lives = [0, 1, 2, 3, 4];
        this.board = new Board(this.canvas, this.ctx, this); // this.handleInput.player = this.board.player;
        // this.handleInput = null;
        // this.handleInput = new InputHandler(this.board.player, this);

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
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,0,0.5)";
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Paused", this.canvas.width / 2, this.canvas.height / 2);
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
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
      var playerX = player.position.x + 35;
      var playerY = player.position.y + 65;
      var rightPointPlayerX = playerX + 115; //bubble positions

      var bubbleX = bubble.x + 40;
      var bubbleY = bubble.y + 40;
      var radius = 67;
      var bubbleCenterX = bubbleX + radius;
      var bubbleCenterY = bubbleY + radius; //cheking left of player

      var distLeftX = playerX - bubbleCenterX;
      var distLeftY = playerY - bubbleCenterY;
      var distanceLeft = Math.hypot(distLeftX, distLeftY); //cheking right of player

      var distRightX = rightPointPlayerX - bubbleCenterX;
      var distRightY = playerY - bubbleCenterY;
      var distanceRight = Math.hypot(distRightX, distRightY); //cheking middle of player

      var distMidX = playerX + 67.5 - bubbleCenterX;
      var distMidY = playerY - bubbleCenterY;
      var distanceMiddle = Math.hypot(distMidX, distMidY);

      if (distanceLeft <= radius || distanceRight <= radius || distanceMiddle <= radius) {
        debugger;
      }
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
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
      this.board = new Board(this.canvas, this.ctx, this); // this.handleInput.player = this.board.player;
      // this.handleInput = null;
      // this.handleInput = new InputHandler(this.board.player, this);

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

var InputHandler = function InputHandler(game) {
  var _this = this;

  _classCallCheck(this, InputHandler);

  this.locked = false;
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowRight":
        game.board.player.moveRight();
        break;

      case "ArrowLeft":
        game.board.player.moveLeft();
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
        if (game.board.player.speed > 0) game.board.player.stop();
        break;

      case "ArrowLeft":
        if (game.board.player.speed < 0) game.board.player.stop();
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
    this.width = 180;
    this.height = 180; // 80

    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: this.canvas.width / 2 - this.width / 2,
      y: this.canvas.height - this.height + 40
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJzaG90cyIsImZvckVhY2giLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJyb2NrYm90dG9tIiwiSW5wdXRIYW5kbGVyIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkdhbWUiLCJnYW1lU3RhdGUiLCJib2FyZCIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY291bnQiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImxvY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJzZXRUaW1lb3V0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJjbG9zZVBhdGgiLCJtYXhTcGVlZCIsImdldENvbnRleHQiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZVN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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QixDQUFmO0FBQ0EsTUFBTWxDLEdBQUcsR0FBR0QsTUFBTSxDQUFDb0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTWxHLElBQUksR0FBRyxJQUFJNkMsSUFBSixDQUFTL0MsTUFBVCxFQUFpQkMsR0FBakIsQ0FBYjtBQUNBLE1BQUlvRyxRQUFRLEdBQUcsQ0FBZjs7QUFHQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQUNDLFNBQUQsRUFBZTtBQUN0QkYsWUFBUSxHQUFHRSxTQUFYO0FBQ0FyRyxRQUFJLENBQUNtQixNQUFMO0FBQ0FuQixRQUFJLENBQUNjLElBQUw7QUFDQXdGLHlCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsR0FMTyxDQUFSOztBQU1BRSx1QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILENBZEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuXG4gICAgICAgIC8vbGFzZXJcbiAgICAgICAgLy8gdGhpcy5sYXNlciA9IG5ldyBMYXNlcihjYW52YXMsIGN0eCwgdGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5idWJibGUuZHJhdygpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC5kcmF3KCkpXG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYnViYmxlLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmdhbWUuc2hvdHMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpXG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goaGVhcnRDb3VudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIGhlYXJ0Q291bnQgKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwMCAvLyAyMTAgMTM1XG4gICAgICAgIHRoaXMud2lkdGggPSAzMDAgLy8gMjEwIDEzNVxuXG4gICAgICAgIHRoaXMuYnViYmxlRFggPSA1O1xuICAgICAgICB0aGlzLmJ1YmJsZURZID0gMDtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4xO1xuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYm91bmNlID0gMS4wMDU7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFkgKyB0aGlzLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gMzAgfHwgdGhpcy54ICsgdGhpcy5idWJibGVEWCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcbklucHV0SGFuZGxlciA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5wdXRfaGFuZGxlJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDNcbn07XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2UgPSB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zZUxpZmUgPSB0aGlzLmxvc2VMaWZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvb3QgPSB0aGlzLnNob290LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG90cyA9IFtdXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0LnBsYXllciA9IHRoaXMuYm9hcmQucGxheWVyO1xuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IG51bGw7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZWRcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gIDtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyLCBidWJibGUgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgMTE1O1xuICAgICAgICAvL2J1YmJsZSBwb3NpdGlvbnNcbiAgICAgICAgY29uc3QgYnViYmxlWCA9IGJ1YmJsZS54ICsgNDA7XG4gICAgICAgIGNvbnN0IGJ1YmJsZVkgPSBidWJibGUueSArIDQwO1xuICAgICAgICBjb25zdCByYWRpdXMgPSA2NztcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWCA9IGJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZVkgKyByYWRpdXNcbiAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0TGVmdFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICBjb25zdCBkaXN0UmlnaHRYID0gcmlnaHRQb2ludFBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgIC8vY2hla2luZyBtaWRkbGUgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlTWlkZGxlID0gTWF0aC5oeXBvdChkaXN0TWlkWCwgZGlzdE1pZFkpXG4gICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZVBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpIHtcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0LnBsYXllciA9IHRoaXMuYm9hcmQucGxheWVyO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5ib2FyZC5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5zaG90cy5wdXNoKG5ldyBMYXNlcih0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcFNob290aW5nKCkge1xuICAgIC8vICAgICB0aGlzLnNob290aW5nID0gZmFsc2U7XG4gICAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwicFwiKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiblwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMTAwMCk7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA+IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkIDwgMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIGNhc2UgKFwiIFwiKTpcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2FtZS5zdG9wU2hvb3RpbmcoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0SGFuZGxlcjsiLCJjbGFzcyBMYXNlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuYm9hcmQucGxheWVyLnBvc2l0aW9uLnggKyA3NTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDEwO1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxODA7IFxuICAgICAgICB0aGlzLmhlaWdodCA9IDE4MDsgLy8gODBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyA0MFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgXG4gICAgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLnVwZGF0ZSgpO1xuICAgICAgICBnYW1lLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufSkiXSwic291cmNlUm9vdCI6IiJ9