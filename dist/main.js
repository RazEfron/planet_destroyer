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
    this.handleInput = new InputHandler(this.board.player, this);
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
        this.board = new Board(this.canvas, this.ctx, this);
        this.handleInput.player = this.board.player; // this.handleInput = null;
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
        debugger;
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
      var bubbleBottom = bubble.y + 145;
      var topPlayer = player.position.y + 30;
      leftOfPlayer = player.position.x + 35;
      rightOfPlayer = leftOfPlayer + player.width - 105;
      leftOfBubble = bubble.x + 35;
      rightOfBubble = leftOfBubble + 135;

      if (bubbleBottom >= topPlayer) {
        if (leftOfPlayer >= leftOfBubble && leftOfPlayer <= rightOfBubble || rightOfPlayer <= rightOfBubble && rightOfPlayer >= leftOfBubble) {
          debugger;
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
      this.handleInput.player = this.board.player; // this.handleInput = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJidWJibGUiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImRyYXciLCJkcmF3TGl2ZXMiLCJzaG90cyIsImZvckVhY2giLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJyb2NrYm90dG9tIiwiSW5wdXRIYW5kbGVyIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkdhbWUiLCJnYW1lU3RhdGUiLCJib2FyZCIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0IiwiY291bnQiLCJ1cGRhdGVHYW1lIiwiYnViYmxlQm90dG9tIiwidG9wUGxheWVyIiwicG9zaXRpb24iLCJsZWZ0T2ZQbGF5ZXIiLCJyaWdodE9mUGxheWVyIiwibGVmdE9mQnViYmxlIiwicmlnaHRPZkJ1YmJsZSIsInBvcCIsImxlbmd0aCIsInB1c2giLCJsb2NrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic2V0VGltZW91dCIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImxhc2VyIiwiY2xvc2VQYXRoIiwibWF4U3BlZWQiLCJnZXRDb250ZXh0IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVTdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQWQsR0FBa0IsS0FBSzNCLE1BQUwsQ0FBWVksS0FBWixHQUFvQixLQUFLQSxLQUF6QixHQUFpQyxFQUFuRDtBQUNIO0FBQ0o7OzsyQkFFTTtBQUNILFdBQUtzRSxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7Ozs7QUFHTHpELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdCLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDcERBa0QsSUFBSSxHQUFHbkQsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFkO0FBRUFzQyxRQUFRLENBQUMwQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNNUUsTUFBTSxHQUFHa0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNbEMsR0FBRyxHQUFHRCxNQUFNLENBQUN3RixVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNdEYsSUFBSSxHQUFHLElBQUk2QyxJQUFKLENBQVMvQyxNQUFULEVBQWlCQyxHQUFqQixDQUFiO0FBQ0EsTUFBSXdGLFFBQVEsR0FBRyxDQUFmOztBQUdBQyxVQUFRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLElBQUcsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RCRixZQUFRLEdBQUdFLFNBQVg7QUFDQXpGLFFBQUksQ0FBQ21CLE1BQUw7QUFDQW5CLFFBQUksQ0FBQ2MsSUFBTDtBQUNBNEUseUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxHQUxPLENBQVI7O0FBTUFFLHVCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG5cbiAgICAgICAgLy9sYXNlclxuICAgICAgICAvLyB0aGlzLmxhc2VyID0gbmV3IExhc2VyKGNhbnZhcywgY3R4LCB0aGlzKTtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSAnc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsX29uZS5qcGcnXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmJ1YmJsZS5kcmF3KCk7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3TGl2ZXMoKTtcbiAgICAgICAgdGhpcy5nYW1lLnNob3RzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSlcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5idWJibGUudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5zaG90cy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSlcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoKSB7XG4gICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICB0aGlzLmdhbWUubGl2ZXMuZm9yRWFjaChoZWFydENvdW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgaGVhcnRDb3VudCAqIDQwLCAwLCAxMDAsIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy55ID0gNTA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzAwIC8vIDIxMCAxMzVcbiAgICAgICAgdGhpcy53aWR0aCA9IDMwMCAvLyAyMTAgMTM1XG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IDU7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSAwO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAwLjE7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSAxLjAwNTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtb25lXCIpXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShidWJibGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoICogLjcsIHRoaXMuaGVpZ2h0ICogLjcpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMCwgMCwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmJ1YmJsZURYO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5idWJibGVEWSArIHRoaXMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICBsZXQgcm9ja2JvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMiAtIDMwO1xuICAgICAgICBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSAzMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogM1xufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMuYm9hcmQucGxheWVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcblxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2UgPSB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zZUxpZmUgPSB0aGlzLmxvc2VMaWZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvb3QgPSB0aGlzLnNob290LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zaG90cyA9IFtdXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMCwgMSwgMiwgMywgNF07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUlucHV0LnBsYXllciA9IHRoaXMuYm9hcmQucGxheWVyO1xuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IG51bGw7XG4gICAgICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzLmJvYXJkLnBsYXllciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEIHx8IFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUiB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgcmV0dXJuICA7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLmJvYXJkLnVwZGF0ZUdhbWUoKTtcbiAgICB9XG4gICAgXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCB7IHBsYXllciwgYnViYmxlIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBsZXQgYnViYmxlQm90dG9tID0gYnViYmxlLnkgKyAxNDU7XG4gICAgICAgIGxldCB0b3BQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueSArIDMwO1xuICAgICAgICBsZWZ0T2ZQbGF5ZXIgPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICByaWdodE9mUGxheWVyID0gbGVmdE9mUGxheWVyICsgcGxheWVyLndpZHRoIC0gMTA1O1xuICAgICAgICBsZWZ0T2ZCdWJibGUgPSBidWJibGUueCArIDM1O1xuICAgICAgICByaWdodE9mQnViYmxlID0gbGVmdE9mQnViYmxlICsgMTM1O1xuICAgICAgICBpZiAoYnViYmxlQm90dG9tID49IHRvcFBsYXllcikge1xuICAgICAgICAgICAgaWYgKChsZWZ0T2ZQbGF5ZXIgPj0gbGVmdE9mQnViYmxlICYmIGxlZnRPZlBsYXllciA8PSByaWdodE9mQnViYmxlKSB8fCAocmlnaHRPZlBsYXllciA8PSByaWdodE9mQnViYmxlICYmIHJpZ2h0T2ZQbGF5ZXIgPj0gbGVmdE9mQnViYmxlKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpIHtcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0LnBsYXllciA9IHRoaXMuYm9hcmQucGxheWVyO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUlucHV0ID0gbnVsbDtcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVJbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcy5ib2FyZC5wbGF5ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5zaG90cy5wdXNoKG5ldyBMYXNlcih0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcFNob290aW5nKCkge1xuICAgIC8vICAgICB0aGlzLnNob290aW5nID0gZmFsc2U7XG4gICAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJuXCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAxMDAwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5zcGVlZCA+IDApIHBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuc3BlZWQgPCAwKSBwbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIGNhc2UgKFwiIFwiKTpcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2FtZS5zdG9wU2hvb3RpbmcoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0SGFuZGxlcjsiLCJjbGFzcyBMYXNlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuYm9hcmQucGxheWVyLnBvc2l0aW9uLnggKyA3NTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDEwO1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxODA7IC8vIDExMFxuICAgICAgICB0aGlzLmhlaWdodCA9IDE4MDsgLy8gMTEwXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgNDBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==