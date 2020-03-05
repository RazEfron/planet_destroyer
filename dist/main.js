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
      this.drawLives();
      this.game.lasers.forEach(function (shot) {
        return shot.draw();
      });
    }
  }, {
    key: "updateGame",
    value: function updateGame() {
      this.player.update();
      this.bubble.update();
      this.game.lasers.forEach(function (shot) {
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
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : canvas.width / 2;
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
    var bubbleDX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;

    _classCallCheck(this, Bubble);

    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.height = 300;
    this.width = 300;
    this.bubbleDX = bubbleDX;
    this.bubbleDY = 0;
    this.gravity = 0.1;
    this.gravitySpeed = 0;
    this.bounce = 1.005;
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw(size) {
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
Bubble = __webpack_require__(/*! ./bubble */ "./dist/bubble.js");
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
    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.collision = this.collision.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.loseLife = this.loseLife.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.shoot = this.shoot.bind(this);
    this.lives = [0, 1, 2, 3, 4];
    this.lasers = [];
    this.bubbles = [{
      size: 4
    }];
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      if (this.gameState === GAMESTATE.MENU) {
        this.gameState = GAMESTATE.RUNNING;
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        this.lives = [0, 1, 2, 3, 4];
        this.board = new Board(this.canvas, this.ctx, this);
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
        this.loseLife();
      }

      this.lasers.forEach(function (shot) {
        // debugger
        //cheking laser and bubble collision
        var laserPointX = shot.x + 13;
        var laserPointY = shot.y + 7;
        var distLaserX = laserPointX - bubbleCenterX;
        var distLaserY = laserPointY - bubbleCenterY;
        var distanceLaserPoint = Math.hypot(distLaserX, distLaserY);

        if (distanceLaserPoint <= radius) {
          debugger;
        }
      });
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
      this.board = new Board(this.canvas, this.ctx, this);
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
        this.lasers.push(new Laser(this.canvas, this.ctx, this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJsYXNlcnMiLCJmb3JFYWNoIiwic2hvdCIsInVwZGF0ZSIsImhlYXJ0IiwibGl2ZXMiLCJoZWFydENvdW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJzaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImFyYyIsIk1hdGgiLCJQSSIsInJvY2tib3R0b20iLCJJbnB1dEhhbmRsZXIiLCJHQU1FU1RBVEUiLCJQQVVTRUQiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiR2FtZSIsImdhbWVTdGF0ZSIsImJvYXJkIiwiaGFuZGxlSW5wdXQiLCJzdGFydCIsImNvbGxpc2lvbiIsInRvZ2dsZVBhdXNlIiwibG9zZUxpZmUiLCJnYW1lT3ZlciIsInNob290IiwiYnViYmxlcyIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY291bnQiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJQb2ludFgiLCJsYXNlclBvaW50WSIsImRpc3RMYXNlclgiLCJkaXN0TGFzZXJZIiwiZGlzdGFuY2VMYXNlclBvaW50IiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImxvY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJzZXRUaW1lb3V0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJjbG9zZVBhdGgiLCJtYXhTcGVlZCIsImdldENvbnRleHQiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZVN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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LENBQXJCO0FBQ0gsR0FMTyxDQUFSOztBQU1BRSx1QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILENBZEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9ICdzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfb25lLmpwZydcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuYnViYmxlLmRyYXcoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSlcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5idWJibGUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpXG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goaGVhcnRDb3VudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIGhlYXJ0Q291bnQgKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgeCA9IGNhbnZhcy53aWR0aCAvIDIsIHkgPSA1MCwgYnViYmxlRFggPSA1KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzMDAgXG4gICAgICAgIHRoaXMud2lkdGggPSAzMDAgXG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IGJ1YmJsZURYO1xuICAgICAgICB0aGlzLmJ1YmJsZURZID0gMDtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4xO1xuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYm91bmNlID0gMS4wMDU7XG5cbiAgICB9XG5cbiAgICBkcmF3KHNpemUpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZICsgdGhpcy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gMzA7XG4gICAgICAgIGlmICh0aGlzLnkgPiByb2NrYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSByb2NrYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAtKHRoaXMuZ3Jhdml0eVNwZWVkICogdGhpcy5ib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLmJ1YmJsZURYID4gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoIC8gMiAtIDMwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogM1xufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmJ1YmJsZXMgPSBbe3NpemU6IDQsIH1dXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZWRcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gIDtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyLCBidWJibGUgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgMTE1O1xuICAgICAgICAvL2J1YmJsZSBwb3NpdGlvbnNcbiAgICAgICAgY29uc3QgYnViYmxlWCA9IGJ1YmJsZS54ICsgNDA7XG4gICAgICAgIGNvbnN0IGJ1YmJsZVkgPSBidWJibGUueSArIDQwO1xuICAgICAgICBjb25zdCByYWRpdXMgPSA2NztcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWCA9IGJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZVkgKyByYWRpdXNcbiAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0TGVmdFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICBjb25zdCBkaXN0UmlnaHRYID0gcmlnaHRQb2ludFBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgIC8vY2hla2luZyBtaWRkbGUgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlTWlkZGxlID0gTWF0aC5oeXBvdChkaXN0TWlkWCwgZGlzdE1pZFkpXG4gICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvL2NoZWtpbmcgbGFzZXIgYW5kIGJ1YmJsZSBjb2xsaXNpb25cbiAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRYID0gc2hvdC54ICsgMTNcbiAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWCA9IGxhc2VyUG9pbnRYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclkgPSBsYXNlclBvaW50WSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlclkpXG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxhc2VyUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIHRoaXMubGl2ZXMucG9wKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMubGFzZXJzLnB1c2gobmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcInBcIik6IFxuICAgICAgICAgICAgICAgICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIm5cIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiIFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc2hvb3QoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubG9ja2VkID0gZmFsc2U7IH0sIDEwMDApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPiAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA8IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgLy8gICAgIGdhbWUuc3RvcFNob290aW5nKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGJyZWFrIFxuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgTGFzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmJvYXJkLnBsYXllci5wb3NpdGlvbi54ICsgNzU7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAxMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGxhc2VyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxhc2VyLnNyYyA9ICdzcmMvaW1hZ2VzL2xhc2VyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShsYXNlciwgdGhpcy54LCB0aGlzLnksIDMwLCA5MCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRZO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXNlcjsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTgwOyBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxODA7IC8vIDgwXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgNDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==