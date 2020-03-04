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

      this.shots.forEach(function (shot) {
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
      this.ctx.strokeRect(this.x, this.y, 30, 90);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJzaG90cyIsImZvckVhY2giLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJyb2NrYm90dG9tIiwiSW5wdXRIYW5kbGVyIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkdhbWUiLCJnYW1lU3RhdGUiLCJib2FyZCIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY291bnQiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJQb2ludFgiLCJsYXNlclBvaW50WSIsImRpc3RMYXNlclgiLCJkaXN0TGFzZXJZIiwiZGlzdGFuY2VMYXNlclBvaW50IiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImxvY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJzZXRUaW1lb3V0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJzdHJva2VSZWN0IiwiY2xvc2VQYXRoIiwibWF4U3BlZWQiLCJnZXRDb250ZXh0IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVTdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QU1BRSx1QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILENBZEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuXG4gICAgICAgIC8vbGFzZXJcbiAgICAgICAgLy8gdGhpcy5sYXNlciA9IG5ldyBMYXNlcihjYW52YXMsIGN0eCwgdGhpcyk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5idWJibGUuZHJhdygpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC5kcmF3KCkpXG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuYnViYmxlLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmdhbWUuc2hvdHMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpXG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goaGVhcnRDb3VudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIGhlYXJ0Q291bnQgKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIHRoaXMueSA9IDUwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDMwMCAvLyAyMTAgMTM1XG4gICAgICAgIHRoaXMud2lkdGggPSAzMDAgLy8gMjEwIDEzNVxuXG4gICAgICAgIHRoaXMuYnViYmxlRFggPSA1O1xuICAgICAgICB0aGlzLmJ1YmJsZURZID0gMDtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMC4xO1xuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuYm91bmNlID0gMS4wMDU7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFkgKyB0aGlzLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSAzMDtcbiAgICAgICAgaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gMzAgfHwgdGhpcy54ICsgdGhpcy5idWJibGVEWCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcbklucHV0SGFuZGxlciA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5wdXRfaGFuZGxlJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDNcbn07XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2UgPSB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zZUxpZmUgPSB0aGlzLmxvc2VMaWZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvb3QgPSB0aGlzLnNob290LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG90cyA9IFtdXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0LnBsYXllciA9IHRoaXMuYm9hcmQucGxheWVyO1xuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IG51bGw7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQYXVzZWRcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gIDtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5jb3VudCArPSAxO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyLCBidWJibGUgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgMTE1O1xuICAgICAgICAvL2J1YmJsZSBwb3NpdGlvbnNcbiAgICAgICAgY29uc3QgYnViYmxlWCA9IGJ1YmJsZS54ICsgNDA7XG4gICAgICAgIGNvbnN0IGJ1YmJsZVkgPSBidWJibGUueSArIDQwO1xuICAgICAgICBjb25zdCByYWRpdXMgPSA2NztcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWCA9IGJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZVkgKyByYWRpdXNcbiAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0TGVmdFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICBjb25zdCBkaXN0UmlnaHRYID0gcmlnaHRQb2ludFBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgIC8vY2hla2luZyBtaWRkbGUgb2YgcGxheWVyXG4gICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlTWlkZGxlID0gTWF0aC5oeXBvdChkaXN0TWlkWCwgZGlzdE1pZFkpXG4gICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3RzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WCA9IHNob3QueCArIDEzXG4gICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WSA9IHNob3QueSArIDdcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJZID0gbGFzZXJQb2ludFkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMYXNlclBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJZKVxuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VMYXNlclBvaW50IDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICB0aGlzLmxpdmVzLnBvcCgpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlSW5wdXQucGxheWVyID0gdGhpcy5ib2FyZC5wbGF5ZXI7XG4gICAgICAgIC8vIHRoaXMuaGFuZGxlSW5wdXQgPSBudWxsO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLnNob3RzLnB1c2gobmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdG9wU2hvb3RpbmcoKSB7XG4gICAgLy8gICAgIHRoaXMuc2hvb3RpbmcgPSBmYWxzZTtcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJuXCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAxMDAwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPCAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgIC8vICAgICBnYW1lLnN0b3BTaG9vdGluZygpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhayBcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDc1O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCAzMCwgOTApXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRZO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXNlcjsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTgwOyBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxODA7IC8vIDgwXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgNDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==