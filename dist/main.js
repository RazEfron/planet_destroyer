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
    // this.bubble = new Bubble(canvas, ctx, {
    // });
    //player

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
      this.game.bubbles.forEach(function (bubble) {
        return bubble.draw(bubble.size);
      });
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
      this.game.bubbles.forEach(function (bubble) {
        return bubble.update();
      });
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
  function Bubble(canvas, ctx, size, options) {
    _classCallCheck(this, Bubble);

    this.canvas = canvas;
    this.ctx = ctx;
    this.x = options.x;
    this.y = options.y;
    this.height = options.height;
    this.width = options.width;
    this.bubbleDX = options.bubbleDX;
    this.bubbleDY = options.bubbleDY;
    this.gravity = options.gravity;
    this.gravitySpeed = options.gravitySpeed;
    this.bounce = options.bounce;
    this.size = size;
    this.realCoordinates();
  }

  _createClass(Bubble, [{
    key: "draw",
    value: function draw(size) {
      var bubble;

      switch (size) {
        case 5:
          bubble = document.getElementById("planet-five");
          break;

        case 4:
          bubble = document.getElementById("planet-four");
          break;

        case 3:
          bubble = document.getElementById("planet-three");
          break;

        case 2:
          bubble = document.getElementById("planet-two");
          break;

        case 1:
          bubble = document.getElementById("planet-one");
          break;

        default:
          break;
      }

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
      var rockbottom = this.canvas.height - this.height / 2 - this.height / 10;

      if (this.y > rockbottom) {
        this.y = rockbottom;
        this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      }

      if (this.x + this.bubbleDX > this.canvas.width - this.width / 2 - this.height / 10 || this.x + this.bubbleDX < -this.height / 10) {
        this.bubbleDX = -this.bubbleDX;
      }

      this.realCoordinates();
    }
  }, {
    key: "realCoordinates",
    value: function realCoordinates() {
      switch (this.size) {
        case 5:
          this.bubbleX = this.x + 40;
          this.bubbleY = this.y + 40;
          break;

        case 4:
          this.bubbleX = this.x + 47;
          this.bubbleY = this.y + 47;
          break;

        case 3:
          this.bubbleX = this.x + 25;
          this.bubbleY = this.y + 20;
          break;

        case 2:
          this.bubbleX = this.x + 15;
          this.bubbleY = this.y + 25;
          break;

        case 1:
          this.bubbleX = this.x + 12;
          this.bubbleY = this.y + 25;
          break;

        default:
          break;
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
Level = __webpack_require__(/*! ./levels */ "./dist/levels.js");
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
    this.handleInput = new InputHandler(this);
    this.start = this.start.bind(this);
    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
    this.collision = this.collision.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.loseLife = this.loseLife.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.shoot = this.shoot.bind(this);
    this.createBubbles = this.createBubbles.bind(this);
    this.explodeBubble = this.explodeBubble.bind(this);
    this.lives = [0, 1, 2, 3, 4];
    this.lasers = [];
    this.levels = new Level(this);
    this.currentLevel = 1;
    this.level = this.levels.setup[this.currentLevel];
    this.createBubbles();
    this.board = new Board(this.canvas, this.ctx, this);
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      if (this.gameState === GAMESTATE.MENU) {
        this.gameState = GAMESTATE.RUNNING;
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        this.createBubbles();
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

      this.collision();
      this.gameOver();
      this.board.updateGame();
    }
  }, {
    key: "collision",
    value: function collision() {
      var _this = this;

      var player = this.board.player;
      var playerX = player.position.x + 35;
      var playerY = player.position.y + 65;
      var rightPointPlayerX = playerX + 115;
      this.bubbles.some(function (bubble, idx) {
        var radius = bubble.width / 4.5;
        var bubbleCenterX = bubble.bubbleX + radius;
        var bubbleCenterY = bubble.bubbleY + radius; //cheking left of player

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

          _this.loseLife();

          return true;
        }

        _this.lasers.forEach(function (shot) {
          //cheking laser and bubble collision
          var laserPointX = shot.x + 13;
          var laserPointY = shot.y + 7;
          var distLaserX = laserPointX - bubbleCenterX;
          var distLaserY = laserPointY - bubbleCenterY;
          var distLaserDownY = laserPointY + 70 - bubbleCenterY;
          var distLaserMidY = laserPointY + 35 - bubbleCenterY;
          var distanceLaserUpperPoint = Math.hypot(distLaserX, distLaserY);
          var distanceLaserDownPoint = Math.hypot(distLaserX, distLaserDownY);
          var distanceLaserMidPoint = Math.hypot(distLaserX, distLaserMidY);

          if (distanceLaserUpperPoint <= radius || distanceLaserDownPoint <= radius || distanceLaserMidPoint <= radius) {
            debugger;
            console.log("collision");

            _this.explodeBubble(bubble, idx);
          }
        });
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
      debugger;
      this.lives.pop();
      this.restartLevel();
      this.createBubbles();
      this.board = new Board(this.canvas, this.ctx, this);
      this.gameState = GAMESTATE.RUNNING;
    }
  }, {
    key: "restartLevel",
    value: function restartLevel() {
      debugger;
      this.levels = new Level(this);
      this.level = this.levels.setup[this.currentLevel];
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
        debugger;

        if (this.lasers.length === 0) {
          this.lasers.push(new Laser(this.canvas, this.ctx, this));
        } else if (this.lasers[this.lasers.length - 1].y <= 10) {
          this.lasers.pop();
        }
      }
    }
  }, {
    key: "createBubbles",
    value: function createBubbles() {
      var _this2 = this;

      debugger;
      this.bubbles = this.level.map(function (bubble) {
        if (bubble.size === 5) {
          return new Bubble(_this2.canvas, _this2.ctx, 5, {
            x: bubble.x,
            y: bubble.y,
            height: 300,
            width: 300,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: 0,
            gravity: 0.1,
            gravitySpeed: 0,
            bounce: 1.005
          });
        } else if (bubble.size === 4) {
          return new Bubble(_this2.canvas, _this2.ctx, 4, {
            x: bubble.x,
            y: bubble.y,
            height: 250,
            width: 250,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: 0,
            gravity: 0.1,
            gravitySpeed: 0,
            bounce: 1.005
          });
        } else if (bubble.size === 3) {
          return new Bubble(_this2.canvas, _this2.ctx, 3, {
            x: bubble.x,
            y: bubble.y,
            height: 200,
            width: 200,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: 0,
            gravity: 0.1,
            gravitySpeed: 0,
            bounce: 1.005
          });
        } else if (bubble.size === 2) {
          return new Bubble(_this2.canvas, _this2.ctx, 2, {
            x: bubble.x,
            y: bubble.y,
            height: 150,
            width: 150,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: 0,
            gravity: 0.1,
            gravitySpeed: 0,
            bounce: 1.005
          });
        } else if (bubble.size === 1) {
          return new Bubble(_this2.canvas, _this2.ctx, 1, {
            x: bubble.x,
            y: bubble.y,
            height: 75,
            width: 75,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: 0,
            gravity: 0.1,
            gravitySpeed: 0,
            bounce: 1.005
          });
        }
      });
    }
  }, {
    key: "explodeBubble",
    value: function explodeBubble(bubble, idx) {
      var _this3 = this;

      debugger;
      this.lasers = [];
      this.level.forEach(function (levelBubble, idx1) {
        _this3.bubbles.forEach(function (bubble, idx2) {
          if (idx1 === idx2) {
            levelBubble.x = bubble.x;
            levelBubble.y = bubble.y;
            levelBubble.bubbleDX = bubble.bubbleDX;
          }
        });
      });
      this.level.splice(idx, 1);

      if (bubble.size !== 1) {
        this.level.push({
          size: bubble.size - 1,
          x: bubble.x - 30,
          y: bubble.y - 200,
          bubbleDX: bubble.bubbleDX
        });
        this.level.push({
          size: bubble.size - 1,
          x: bubble.x + 30,
          y: bubble.y - 200,
          bubbleDX: -bubble.bubbleDX
        });
      }

      if (this.level.length === 0) {
        return this.levelCleared();
      }

      this.createBubbles();
    }
  }, {
    key: "levelCleared",
    value: function levelCleared() {
      this.currentLevel += 1;
      this.restartLevel();
      this.createBubbles();
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
        // if (this.locked) return
        game.shoot(); // this.locked = true
        // setTimeout(() => { this.locked = false; }, 1000); 

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

/***/ "./dist/levels.js":
/*!************************!*\
  !*** ./dist/levels.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Level = function Level(game) {
  _classCallCheck(this, Level);

  this.setup = {
    1: [{
      size: 2,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5
    }],
    2: [{
      size: 3,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5
    }]
  };
};

module.exports = Level;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pbnB1dF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sYXNlci5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xldmVscy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQnViYmxlIiwicmVxdWlyZSIsIlBsYXllciIsIkxhc2VyIiwiQm9hcmQiLCJjYW52YXMiLCJjdHgiLCJnYW1lIiwiZHJhd0dhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJwbGF5ZXIiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImJlZ2luUGF0aCIsImNsZWFyUmVjdCIsImJ1YmJsZXMiLCJmb3JFYWNoIiwiYnViYmxlIiwiZHJhdyIsInNpemUiLCJkcmF3TGl2ZXMiLCJsYXNlcnMiLCJzaG90IiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJyZWFsQ29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwicm9ja2JvdHRvbSIsImJ1YmJsZVgiLCJidWJibGVZIiwiSW5wdXRIYW5kbGVyIiwiTGV2ZWwiLCJHQU1FU1RBVEUiLCJQQVVTRUQiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiR2FtZSIsImdhbWVTdGF0ZSIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsImNyZWF0ZUJ1YmJsZXMiLCJleHBsb2RlQnViYmxlIiwibGV2ZWxzIiwiY3VycmVudExldmVsIiwibGV2ZWwiLCJzZXR1cCIsImJvYXJkIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic29tZSIsImlkeCIsInJhZGl1cyIsImJ1YmJsZUNlbnRlclgiLCJidWJibGVDZW50ZXJZIiwiZGlzdExlZnRYIiwiZGlzdExlZnRZIiwiZGlzdGFuY2VMZWZ0IiwiaHlwb3QiLCJkaXN0UmlnaHRYIiwiZGlzdFJpZ2h0WSIsImRpc3RhbmNlUmlnaHQiLCJkaXN0TWlkWCIsImRpc3RNaWRZIiwiZGlzdGFuY2VNaWRkbGUiLCJsYXNlclBvaW50WCIsImxhc2VyUG9pbnRZIiwiZGlzdExhc2VyWCIsImRpc3RMYXNlclkiLCJkaXN0TGFzZXJEb3duWSIsImRpc3RMYXNlck1pZFkiLCJkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCIsImRpc3RhbmNlTGFzZXJEb3duUG9pbnQiLCJkaXN0YW5jZUxhc2VyTWlkUG9pbnQiLCJjb25zb2xlIiwibG9nIiwicG9wIiwicmVzdGFydExldmVsIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImxldmVsQnViYmxlIiwiaWR4MSIsImlkeDIiLCJzcGxpY2UiLCJsZXZlbENsZWFyZWQiLCJsb2NrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJjbG9zZVBhdGgiLCJtYXhTcGVlZCIsImdldENvbnRleHQiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGlt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QixLQUFLbkIsS0FBdkIsR0FBK0IsS0FBS1gsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLEVBQXZELEVBQTJEO0FBQ3ZELGFBQUttRSxRQUFMLENBQWNoRCxDQUFkLEdBQWtCLEtBQUs5QixNQUFMLENBQVlXLEtBQVosR0FBb0IsS0FBS0EsS0FBekIsR0FBaUMsRUFBbkQ7QUFDSDtBQUNKOzs7MkJBRU07QUFDSCxXQUFLZ0gsS0FBTCxHQUFhLENBQWI7QUFDSDs7Ozs7O0FBR0xoRyxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixNQUFqQixDOzs7Ozs7Ozs7OztBQ3BEQXlELElBQUksR0FBRzFELG1CQUFPLENBQUMsb0NBQUQsQ0FBZDtBQUVBMEMsUUFBUSxDQUFDZ0YsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTXRILE1BQU0sR0FBR3NDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTXRDLEdBQUcsR0FBR0QsTUFBTSxDQUFDaUksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTS9ILElBQUksR0FBRyxJQUFJb0QsSUFBSixDQUFTdEQsTUFBVCxFQUFpQkMsR0FBakIsQ0FBYjtBQUNBLE1BQUlpSSxRQUFRLEdBQUcsQ0FBZjs7QUFHQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQUNDLFNBQUQsRUFBZTtBQUN0QkYsWUFBUSxHQUFHRSxTQUFYO0FBQ0FsSSxRQUFJLENBQUNxQixNQUFMO0FBQ0FyQixRQUFJLENBQUNnQixJQUFMO0FBQ0FtSCx5QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILEdBTE8sQ0FBUjs7QUFNQUUsdUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxDQWRELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICAvLyB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgsIHtcblxuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLmRyYXcoYnViYmxlLnNpemUpKVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKVxuICAgIH1cblxuICAgIHVwZGF0ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmdhbWUuYnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUudXBkYXRlKCkpXG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpXG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goaGVhcnRDb3VudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIGhlYXJ0Q291bnQgKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IFxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gb3B0aW9ucy5idWJibGVEWDtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IG9wdGlvbnMuYnViYmxlRFk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSBvcHRpb25zLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRpb25zLmJvdW5jZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgZHJhdyhzaXplKSB7XG4gICAgICAgIGxldCBidWJibGVcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZml2ZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZvdXJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10aHJlZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXR3b1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFkgKyB0aGlzLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwO1xuICAgICAgICBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtIHRoaXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgcmVhbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQ3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDI1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDE1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDEyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuTGV2ZWwgPSByZXF1aXJlKCcuL2xldmVscycpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogM1xufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzID0gdGhpcy5jcmVhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZSA9IHRoaXMuZXhwbG9kZUJ1YmJsZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKVxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDFcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKVxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQgfHwgXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuICA7XG4gICAgICAgIH0gXG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgeyBwbGF5ZXIgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgMTE1O1xuXG4gICAgICAgIHRoaXMuYnViYmxlcy5zb21lKChidWJibGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGJ1YmJsZS53aWR0aCAvIDQuNTtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclggPSBidWJibGUuYnViYmxlWCArIHJhZGl1c1xuICAgICAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZS5idWJibGVZICsgcmFkaXVzXG4gICAgICAgICAgICAvL2NoZWtpbmcgbGVmdCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdExlZnRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxlZnQgPSBNYXRoLmh5cG90KGRpc3RMZWZ0WCwgZGlzdExlZnRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdFJpZ2h0WCA9IHJpZ2h0UG9pbnRQbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgICAgICAvL2NoZWtpbmcgbWlkZGxlIG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdE1pZFggPSAocGxheWVyWCArIDY3LjUpIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZU1pZGRsZSA9IE1hdGguaHlwb3QoZGlzdE1pZFgsIGRpc3RNaWRZKVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGVmdCA8PSByYWRpdXMgfHwgZGlzdGFuY2VSaWdodCA8PSByYWRpdXMgfHwgZGlzdGFuY2VNaWRkbGUgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NoZWtpbmcgbGFzZXIgYW5kIGJ1YmJsZSBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WCA9IHNob3QueCArIDEzXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFkgPSBzaG90LnkgKyA3XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWCA9IGxhc2VyUG9pbnRYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJZID0gbGFzZXJQb2ludFkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlckRvd25ZID0gbGFzZXJQb2ludFkgKyA3MCAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyTWlkWSA9IGxhc2VyUG9pbnRZICsgMzUgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJVcHBlclBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlckRvd25ZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyTWlkWSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xsaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICBcbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMubGl2ZXMucG9wKCk7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgfVxuXG4gICAgcmVzdGFydExldmVsKCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc2Vycy5wdXNoKG5ldyBMYXNlcih0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxhc2Vyc1t0aGlzLmxhc2Vycy5sZW5ndGggLSAxXS55IDw9IDEwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc2Vycy5wb3AoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQnViYmxlcygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5idWJibGVzID0gdGhpcy5sZXZlbC5tYXAoYnViYmxlID0+IHtcbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgNSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiAwLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDIsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiAwLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHRoaXMubGFzZXJzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWwuZm9yRWFjaCgobGV2ZWxCdWJibGUsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5mb3JFYWNoKChidWJibGUsIGlkeDIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4MSA9PT0gaWR4Mikge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS54ID0gYnViYmxlLng7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnkgPSBidWJibGUueTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFggPSBidWJibGUuYnViYmxlRFg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5sZXZlbC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChidWJibGUuc2l6ZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCAtIDMwLCB5OiBidWJibGUueSAtIDIwMCwgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCB9KTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLnggKyAzMCwgeTogYnViYmxlLnkgLSAyMDAsIGJ1YmJsZURYOiAtYnViYmxlLmJ1YmJsZURYIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWxDbGVhcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgfVxuICAgIFxuICAgIGxldmVsQ2xlYXJlZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwicFwiKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiblwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMTAwMCk7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA+IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93TGVmdFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkIDwgMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vIGNhc2UgKFwiIFwiKTpcbiAgICAgICAgICAgICAgICAvLyAgICAgZ2FtZS5zdG9wU2hvb3RpbmcoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWsgXG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0SGFuZGxlcjsiLCJjbGFzcyBMYXNlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuYm9hcmQucGxheWVyLnBvc2l0aW9uLnggKyA3NTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTAwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDEwO1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0dXAgPSB7XG4gICAgICAgICAgICAxOiBbeyBzaXplOiAyLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1IH1dXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDE4MDsgXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTgwOyAvLyA4MFxuXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCArIDQwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyLnNyYyA9ICdzcmMvaW1hZ2VzL3BsYXllci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocGxheWVyLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtMzBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGggKyAzMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgpO1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICBcbiAgICBnYW1lTG9vcCA9ICh0aW1lU3RhbXApID0+IHtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICAgIGdhbWUudXBkYXRlKCk7XG4gICAgICAgIGdhbWUuZHJhdygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=