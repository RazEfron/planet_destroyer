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
      this.drawText();
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
        _this.ctx.drawImage(heart, 620 + heartCount * 40, 0, 100, 100);
      });
    }
  }, {
    key: "drawText",
    value: function drawText() {
      this.ctx.font = "30px Arial";
      this.ctx.textAlign = "start";
      this.ctx.fillText("High Score: ".concat(this.game.score), 40, 50);
      this.ctx.font = "20px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Level ".concat(this.game.currentLevel), this.canvas.width / 2, 30);
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
      // this.gravitySpeed += this.gravity;
      this.x += this.bubbleDX;
      this.y += this.bubbleDY; // let rockbottom = this.canvas.height - this.height / 2 - this.height / 10;
      // if (this.y > rockbottom) {
      //     this.y = rockbottom;
      //     this.gravitySpeed = -(this.gravitySpeed * this.bounce);
      // }

      if (this.x + this.bubbleDX > this.canvas.width - this.width / 2 - this.height / 10 || this.x + this.bubbleDX < -this.height / 10) {
        this.bubbleDX = -this.bubbleDX;
      }

      if (this.y + this.bubbleDY >= this.canvas.height - this.height / 2 || this.y + this.bubbleDY < 0) {
        this.bubbleDY = -this.bubbleDY;
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
Gifts = __webpack_require__(/*! ./gifts */ "./dist/gifts.js");
var GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  LEVELDONE: 4
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
    this.lives = [4, 3, 2, 1, 0];
    this.lasers = [];
    this.levels = new Level(this);
    this.currentLevel = 1;
    this.level = this.levels.setup[this.currentLevel];
    this.createBubbles();
    this.board = new Board(this.canvas, this.ctx, this);
    this.score = 0;
    this.gifts = [];
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

      if (this.gameState === GAMESTATE.LEVELDONE) {
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        this.ctx.fill();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("LEVEL ".concat(this.currentLevel), this.canvas.width / 2, this.canvas.height / 2);
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.GAMEOVER || this.gameState === GAMESTATE.MENU || this.gameState === GAMESTATE.LEVELDONE) {
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
      var rightPointPlayerX = playerX + 73;
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
          _this.loseLife();

          return true;
        }

        if (bubble.size === 1 && bubbleCenterX >= playerX && bubbleCenterX <= rightPointPlayerX && bubbleCenterY >= playerY) {
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
      this.lives.pop();
      this.restartLevel();
      this.createBubbles();
      this.board = new Board(this.canvas, this.ctx, this);
      this.gameState = GAMESTATE.RUNNING;
    }
  }, {
    key: "restartLevel",
    value: function restartLevel() {
      this.levels = new Level(this);
      this.level = this.levels.setup[this.currentLevel];
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.lives.length === 0) {
        debugger;
        this.gameState = GAMESTATE.GAMEOVER;
        this.currentLevel = 1;
        this.restartLevel();
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      if (this.gameState === GAMESTATE.RUNNING) {
        this.lasers.push(new Laser(this.canvas, this.ctx, this));
      }
    }
  }, {
    key: "createBubbles",
    value: function createBubbles() {
      var _this2 = this;

      this.bubbles = this.level.map(function (bubble) {
        if (bubble.size === 5) {
          return new Bubble(_this2.canvas, _this2.ctx, 5, {
            x: bubble.x,
            y: bubble.y,
            height: 300,
            width: 300,
            bubbleDX: bubble.bubbleDX,
            bubbleDY: bubble.bubbleDY,
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
            bubbleDY: bubble.bubbleDY,
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
            bubbleDY: bubble.bubbleDY,
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
            bubbleDY: bubble.bubbleDY,
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
            bubbleDY: bubble.bubbleDY,
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

      this.score += 250;
      this.lasers = [];
      this.level.forEach(function (levelBubble, idx1) {
        _this3.bubbles.forEach(function (bubble, idx2) {
          if (idx1 === idx2) {
            levelBubble.x = bubble.x;
            levelBubble.y = bubble.y;
            levelBubble.bubbleDX = bubble.bubbleDX;
            levelBubble.bubbleDY = bubble.bubbleDY;
          }
        });
      });
      this.level.splice(idx, 1);

      if (bubble.size !== 1) {
        this.level.push({
          size: bubble.size - 1,
          x: bubble.x,
          y: bubble.y,
          bubbleDX: bubble.bubbleDX,
          bubbleDY: bubble.bubbleDY
        });
        this.level.push({
          size: bubble.size - 1,
          x: bubble.x,
          y: bubble.y,
          bubbleDX: -bubble.bubbleDX,
          bubbleDY: -bubble.bubbleDY
        });
      }

      if (this.level.length === 0) {
        this.levelCleared();
      }

      this.createBubbles();
    }
  }, {
    key: "levelCleared",
    value: function levelCleared() {
      var _this4 = this;

      this.currentLevel += 1;
      this.restartLevel();
      this.gameState = GAMESTATE.LEVELDONE;
      setTimeout(function () {
        _this4.gameState = GAMESTATE.RUNNING;
      }, 1000);
    }
  }, {
    key: "dropGift",
    value: function dropGift(x, y) {
      this.gifts.push(new Gift(x, y, this));
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./dist/gifts.js":
/*!***********************!*\
  !*** ./dist/gifts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gifts = /*#__PURE__*/function () {
  function Gifts(x, y, game) {
    _classCallCheck(this, Gifts);

    this.x = x;
    this.y = y;
    this.dY = 5;
    this.randomNumber = Math.floor(Math.random() * 100);
    this.game = game;
    this.delete = false;
  }

  _createClass(Gifts, [{
    key: "draw",
    value: function draw() {
      switch (this.randomNumber) {
        case this.randomNumber >= 95:
          //lives
          var heart = new Image();
          heart.src = 'src/images/heart.png';
          this.ctx.drawImage(heart, this.x * this.y, 100, 100);
          break;

        case this.randomNumber >= 75:
          //coinStack
          var coinStack = new Image();
          heart.src = 'src/images/coin_stack.png';
          this.ctx.drawImage(coinStack, this.x, this.y, 100, 100);
          break;

        case this.randomNumber >= 50:
          // goldCoin
          var goldCoin = new Image();
          heart.src = 'src/images/gold_coin.png';
          this.ctx.drawImage(goldCoin, this.x, this.y, 100, 100);
          break;

        case this.randomNumber >= 0:
          // silverCoin
          var silverCoin = new Image();
          heart.src = 'src/images/coi_stack.png';
          this.ctx.drawImage(silverCoin, this.x, this.y, 100, 100);
          break;
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;

      this.y += this.dY;

      if (this.y + this.dY >= this.game.canvas.height - this.height / 2) {
        this.dY = 0;
        setTimeout(function () {
          _this.delete = true;
        }, 1000);
      }
    }
  }]);

  return Gifts;
}();

module.exports = Gifts;

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
        }, 250);
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
      bubbleDX: 5,
      bubbleDY: 5
    }],
    2: [{
      size: 3,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }],
    3: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }],
    4: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }],
    5: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }, {
      size: 3,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
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
    this.width = 135;
    this.height = 135; // 80

    this.maxSpeed = 10;
    this.speed = 0;
    this.position = {
      x: this.canvas.width / 2 - this.width / 2,
      y: this.canvas.height - this.height + 30
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWJibGUiLCJyZXF1aXJlIiwiUGxheWVyIiwiTGFzZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImdhbWUiLCJkcmF3R2FtZSIsImJpbmQiLCJkcmF3QmFja2dyb3VuZCIsInBsYXllciIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiYnViYmxlcyIsImZvckVhY2giLCJidWJibGUiLCJkcmF3Iiwic2l6ZSIsImRyYXdMaXZlcyIsImxhc2VycyIsInNob3QiLCJkcmF3VGV4dCIsInVwZGF0ZSIsImhlYXJ0IiwibGl2ZXMiLCJoZWFydENvdW50IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic2NvcmUiLCJjdXJyZW50TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJyZWFsQ29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJJbnB1dEhhbmRsZXIiLCJMZXZlbCIsIkdpZnRzIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImdpZnRzIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic29tZSIsImlkeCIsInJhZGl1cyIsImJ1YmJsZUNlbnRlclgiLCJidWJibGVDZW50ZXJZIiwiZGlzdExlZnRYIiwiZGlzdExlZnRZIiwiZGlzdGFuY2VMZWZ0IiwiaHlwb3QiLCJkaXN0UmlnaHRYIiwiZGlzdFJpZ2h0WSIsImRpc3RhbmNlUmlnaHQiLCJkaXN0TWlkWCIsImRpc3RNaWRZIiwiZGlzdGFuY2VNaWRkbGUiLCJsYXNlclBvaW50WCIsImxhc2VyUG9pbnRZIiwiZGlzdExhc2VyWCIsImRpc3RMYXNlclkiLCJkaXN0TGFzZXJEb3duWSIsImRpc3RMYXNlck1pZFkiLCJkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCIsImRpc3RhbmNlTGFzZXJEb3duUG9pbnQiLCJkaXN0YW5jZUxhc2VyTWlkUG9pbnQiLCJjb25zb2xlIiwibG9nIiwicG9wIiwicmVzdGFydExldmVsIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImxldmVsQnViYmxlIiwiaWR4MSIsImlkeDIiLCJzcGxpY2UiLCJsZXZlbENsZWFyZWQiLCJzZXRUaW1lb3V0IiwiR2lmdCIsImRZIiwicmFuZG9tTnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJkZWxldGUiLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsInNpbHZlckNvaW4iLCJsb2NrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJjbG9zZVBhdGgiLCJtYXhTcGVlZCIsImdldENvbnRleHQiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZVN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFoQjtBQUNBQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsd0NBQUQsQ0FBaEI7QUFDQUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLHNDQUFELENBQWY7O0lBRU1HLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzNCLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CRCxJQUFwQixDQUF5QixJQUF6QixDQUF0QixDQUwyQixDQU8zQjtBQUNBO0FBRUE7QUFFQTs7QUFDQSxTQUFLRSxNQUFMLEdBQWMsSUFBSVQsTUFBSixDQUFXRyxNQUFYLEVBQW1CQyxHQUFuQixDQUFkO0FBQ0g7Ozs7cUNBRWdCO0FBQ2IsVUFBSU0sVUFBVSxHQUFHLElBQUlDLEtBQUosRUFBakI7QUFDQUQsZ0JBQVUsQ0FBQ0UsR0FBWCxHQUFpQixxQ0FBakI7QUFDQSxXQUFLUixHQUFMLENBQVNTLFNBQVQsQ0FBbUJILFVBQW5CLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLEtBQUtQLE1BQUwsQ0FBWVcsS0FBakQsRUFBd0QsS0FBS1gsTUFBTCxDQUFZWSxNQUFwRTtBQUNBLFdBQUtYLEdBQUwsQ0FBU1ksU0FBVDtBQUNIOzs7K0JBRVU7QUFDUCxXQUFLWixHQUFMLENBQVNhLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2QsTUFBTCxDQUFZVyxLQUFyQyxFQUE0QyxLQUFLWCxNQUFMLENBQVlZLE1BQXhEO0FBQ0EsV0FBS1AsY0FBTDtBQUNBLFdBQUtILElBQUwsQ0FBVWEsT0FBVixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRCxNQUFNLENBQUNFLElBQW5CLENBQUo7QUFBQSxPQUFoQztBQUNBLFdBQUtiLE1BQUwsQ0FBWVksSUFBWjtBQUNBLFdBQUtFLFNBQUw7QUFDQSxXQUFLbEIsSUFBTCxDQUFVbUIsTUFBVixDQUFpQkwsT0FBakIsQ0FBeUIsVUFBQU0sSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0osSUFBTCxFQUFKO0FBQUEsT0FBN0I7QUFDQSxXQUFLSyxRQUFMO0FBQ0g7OztpQ0FFWTtBQUNULFdBQUtqQixNQUFMLENBQVlrQixNQUFaO0FBQ0EsV0FBS3RCLElBQUwsQ0FBVWEsT0FBVixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ08sTUFBUCxFQUFKO0FBQUEsT0FBaEM7QUFDQSxXQUFLdEIsSUFBTCxDQUFVbUIsTUFBVixDQUFpQkwsT0FBakIsQ0FBeUIsVUFBQU0sSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0UsTUFBTCxFQUFKO0FBQUEsT0FBN0I7QUFDSDs7O2dDQUVXO0FBQUE7O0FBQ1IsVUFBSUMsS0FBSyxHQUFHLElBQUlqQixLQUFKLEVBQVo7QUFDQWlCLFdBQUssQ0FBQ2hCLEdBQU4sR0FBWSxzQkFBWjtBQUNBLFdBQUtQLElBQUwsQ0FBVXdCLEtBQVYsQ0FBZ0JWLE9BQWhCLENBQXdCLFVBQUFXLFVBQVUsRUFBSTtBQUNsQyxhQUFJLENBQUMxQixHQUFMLENBQVNTLFNBQVQsQ0FBbUJlLEtBQW5CLEVBQTBCLE1BQU1FLFVBQVUsR0FBRyxFQUE3QyxFQUFpRCxDQUFqRCxFQUFvRCxHQUFwRCxFQUF5RCxHQUF6RDtBQUNILE9BRkQ7QUFHSDs7OytCQUVVO0FBQ1AsV0FBSzFCLEdBQUwsQ0FBUzJCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxXQUFLM0IsR0FBTCxDQUFTNEIsU0FBVCxHQUFxQixPQUFyQjtBQUNBLFdBQUs1QixHQUFMLENBQVM2QixRQUFULHVCQUFpQyxLQUFLNUIsSUFBTCxDQUFVNkIsS0FBM0MsR0FBb0QsRUFBcEQsRUFBd0QsRUFBeEQ7QUFDQSxXQUFLOUIsR0FBTCxDQUFTMkIsSUFBVCxHQUFnQixZQUFoQjtBQUNBLFdBQUszQixHQUFMLENBQVM0QixTQUFULEdBQXFCLFFBQXJCO0FBQ0EsV0FBSzVCLEdBQUwsQ0FBUzZCLFFBQVQsaUJBQTJCLEtBQUs1QixJQUFMLENBQVU4QixZQUFyQyxHQUFxRCxLQUFLaEMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXpFLEVBQTRFLEVBQTVFO0FBQ0g7Ozs7OztBQUlMc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkMsS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMvRE1KLE07QUFDRixrQkFBWUssTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJrQixJQUF6QixFQUErQmdCLE9BQS9CLEVBQXdDO0FBQUE7O0FBQ3BDLFNBQUtuQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLbUMsQ0FBTCxHQUFTRCxPQUFPLENBQUNDLENBQWpCO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTRixPQUFPLENBQUNFLENBQWpCO0FBQ0EsU0FBS3pCLE1BQUwsR0FBY3VCLE9BQU8sQ0FBQ3ZCLE1BQXRCO0FBQ0EsU0FBS0QsS0FBTCxHQUFhd0IsT0FBTyxDQUFDeEIsS0FBckI7QUFFQSxTQUFLMkIsUUFBTCxHQUFnQkgsT0FBTyxDQUFDRyxRQUF4QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JKLE9BQU8sQ0FBQ0ksUUFBeEI7QUFDQSxTQUFLQyxPQUFMLEdBQWVMLE9BQU8sQ0FBQ0ssT0FBdkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CTixPQUFPLENBQUNNLFlBQTVCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjUCxPQUFPLENBQUNPLE1BQXRCO0FBQ0EsU0FBS3ZCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUt3QixlQUFMO0FBQ0g7Ozs7eUJBRUl4QixJLEVBQU07QUFDUCxVQUFJRixNQUFKOztBQUNBLGNBQVFFLElBQVI7QUFDSSxhQUFLLENBQUw7QUFDSUYsZ0JBQU0sR0FBRzJCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFUO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0k1QixnQkFBTSxHQUFHMkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQVQ7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSTVCLGdCQUFNLEdBQUcyQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBVDtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJNUIsZ0JBQU0sR0FBRzJCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFUO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0k1QixnQkFBTSxHQUFHMkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQVQ7QUFDQTs7QUFDSjtBQUNJO0FBakJSOztBQW1CQSxXQUFLNUMsR0FBTCxDQUFTUyxTQUFULENBQW1CTyxNQUFuQixFQUEyQixLQUFLbUIsQ0FBaEMsRUFBbUMsS0FBS0MsQ0FBeEMsRUFBMkMsS0FBSzFCLEtBQUwsR0FBYSxFQUF4RCxFQUE0RCxLQUFLQyxNQUFMLEdBQWMsRUFBMUU7QUFDQSxXQUFLWCxHQUFMLENBQVM2Qyx3QkFBVCxHQUFvQyxnQkFBcEM7QUFDQSxXQUFLN0MsR0FBTCxDQUFTOEMsR0FBVCxDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsRUFBbkIsRUFBdUIsQ0FBdkIsRUFBMEJDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXBDO0FBQ0EsV0FBS2hELEdBQUwsQ0FBUzZDLHdCQUFULEdBQW9DLGFBQXBDO0FBQ0g7Ozs2QkFFUTtBQUVMO0FBQ0EsV0FBS1YsQ0FBTCxJQUFVLEtBQUtFLFFBQWY7QUFDQSxXQUFLRCxDQUFMLElBQVUsS0FBS0UsUUFBZixDQUpLLENBS0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJLEtBQUtILENBQUwsR0FBUyxLQUFLRSxRQUFkLEdBQXlCLEtBQUt0QyxNQUFMLENBQVlXLEtBQVosR0FBb0IsS0FBS0EsS0FBTCxHQUFhLENBQWpDLEdBQXFDLEtBQUtDLE1BQUwsR0FBYyxFQUE1RSxJQUFrRixLQUFLd0IsQ0FBTCxHQUFTLEtBQUtFLFFBQWQsR0FBeUIsQ0FBRSxLQUFLMUIsTUFBUCxHQUFnQixFQUEvSCxFQUFtSTtBQUMvSCxhQUFLMEIsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLRCxDQUFMLEdBQVMsS0FBS0UsUUFBZCxJQUEwQixLQUFLdkMsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLEtBQUtBLE1BQUwsR0FBYyxDQUE3RCxJQUFrRSxLQUFLeUIsQ0FBTCxHQUFTLEtBQUtFLFFBQWQsR0FBeUIsQ0FBL0YsRUFBa0c7QUFDOUYsYUFBS0EsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCO0FBQ0g7O0FBQ0QsV0FBS0ksZUFBTDtBQUNIOzs7c0NBRWlCO0FBQ2QsY0FBUSxLQUFLeEIsSUFBYjtBQUNJLGFBQUssQ0FBTDtBQUNJLGVBQUsrQixPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0EsZUFBS2UsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJLGVBQUthLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQSxlQUFLZSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0ksZUFBS2EsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBLGVBQUtlLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSSxlQUFLYSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0EsZUFBS2UsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJLGVBQUthLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQSxlQUFLZSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0E7O0FBQ0o7QUFDSTtBQXRCUjtBQXdCSDs7Ozs7O0FBR0xKLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZDLE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBSSxLQUFLLEdBQUdILG1CQUFPLENBQUMsc0NBQUQsQ0FBZjtBQUNBd0QsWUFBWSxHQUFHeEQsbUJBQU8sQ0FBQyxvREFBRCxDQUF0QjtBQUNBRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsc0NBQUQsQ0FBZjtBQUNBRCxNQUFNLEdBQUdDLG1CQUFPLENBQUMsa0NBQUQsQ0FBaEI7QUFDQXlELEtBQUssR0FBR3pELG1CQUFPLENBQUMsa0NBQUQsQ0FBZjtBQUNBMEQsS0FBSyxHQUFHMUQsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFmO0FBRUEsSUFBTTJELFNBQVMsR0FBRztBQUNkQyxRQUFNLEVBQUUsQ0FETTtBQUVkQyxTQUFPLEVBQUUsQ0FGSztBQUdkQyxNQUFJLEVBQUUsQ0FIUTtBQUlkQyxVQUFRLEVBQUUsQ0FKSTtBQUtkQyxXQUFTLEVBQUU7QUFMRyxDQUFsQjs7SUFRTUMsSTtBQUNGLGdCQUFZN0QsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBQTs7QUFDckIsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBSzZELFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0csSUFBM0I7QUFDQSxTQUFLSyxXQUFMLEdBQW1CLElBQUlYLFlBQUosQ0FBaUIsSUFBakIsQ0FBbkI7QUFFQSxTQUFLWSxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXNUQsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS2MsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVWQsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUtvQixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZcEIsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsU0FBSzZELFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlN0QsSUFBZixDQUFvQixJQUFwQixDQUFqQjtBQUNBLFNBQUs4RCxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUI5RCxJQUFqQixDQUFzQixJQUF0QixDQUFuQjtBQUNBLFNBQUsrRCxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBYy9ELElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLZ0UsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNoRSxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS2lFLEtBQUwsR0FBYSxLQUFLQSxLQUFMLENBQVdqRSxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDQSxTQUFLa0UsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CbEUsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLbUUsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CbkUsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFFQSxTQUFLc0IsS0FBTCxHQUFhLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBYjtBQUNBLFNBQUtMLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS21ELE1BQUwsR0FBYyxJQUFJbkIsS0FBSixDQUFVLElBQVYsQ0FBZDtBQUNBLFNBQUtyQixZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS3lDLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlFLEtBQVosQ0FBa0IsS0FBSzFDLFlBQXZCLENBQWI7QUFDQSxTQUFLc0MsYUFBTDtBQUNBLFNBQUtLLEtBQUwsR0FBYSxJQUFJNUUsS0FBSixDQUFVLEtBQUtDLE1BQWYsRUFBdUIsS0FBS0MsR0FBNUIsRUFBaUMsSUFBakMsQ0FBYjtBQUVBLFNBQUs4QixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUs2QyxLQUFMLEdBQWEsRUFBYjtBQUNIOzs7OzRCQUVPO0FBQ0osVUFBSSxLQUFLZCxTQUFMLEtBQW1CUCxTQUFTLENBQUNHLElBQWpDLEVBQXVDO0FBQ25DLGFBQUtJLFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0UsT0FBM0I7QUFDSDs7QUFFRCxVQUFJLEtBQUtLLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0ksUUFBakMsRUFBMkM7QUFDdkMsYUFBS1csYUFBTDtBQUNBLGFBQUs1QyxLQUFMLEdBQWEsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFiO0FBQ0EsYUFBS2lELEtBQUwsR0FBYSxJQUFJNUUsS0FBSixDQUFVLEtBQUtDLE1BQWYsRUFBdUIsS0FBS0MsR0FBNUIsRUFBaUMsSUFBakMsQ0FBYjtBQUNBLGFBQUs2RCxTQUFMLEdBQWlCUCxTQUFTLENBQUNFLE9BQTNCO0FBQ0g7QUFFSjs7OzJCQUVNO0FBQ0gsV0FBS2tCLEtBQUwsQ0FBV3hFLFFBQVg7O0FBQ0EsVUFBSSxLQUFLMkQsU0FBTCxLQUFtQlAsU0FBUyxDQUFDRyxJQUFqQyxFQUF1QztBQUNuQyxhQUFLekQsR0FBTCxDQUFTNEUsSUFBVCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsS0FBSzdFLE1BQUwsQ0FBWVcsS0FBaEMsRUFBdUMsS0FBS1gsTUFBTCxDQUFZWSxNQUFuRDtBQUNBLGFBQUtYLEdBQUwsQ0FBUzZFLFNBQVQsR0FBcUIsaUJBQXJCO0FBQ0EsYUFBSzdFLEdBQUwsQ0FBUzhFLElBQVQ7QUFDQSxhQUFLOUUsR0FBTCxDQUFTMkIsSUFBVCxHQUFnQixZQUFoQjtBQUNBLGFBQUszQixHQUFMLENBQVM2RSxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsYUFBSzdFLEdBQUwsQ0FBUzRCLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxhQUFLNUIsR0FBTCxDQUFTNkIsUUFBVCxDQUFrQiw2QkFBbEIsRUFBaUQsS0FBSzlCLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFyRSxFQUF3RSxLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBN0Y7QUFDSDs7QUFDRCxVQUFJLEtBQUtrRCxTQUFMLEtBQW1CUCxTQUFTLENBQUNDLE1BQWpDLEVBQXlDO0FBRXJDLGFBQUt2RCxHQUFMLENBQVM0RSxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLN0UsTUFBTCxDQUFZVyxLQUFoQyxFQUF1QyxLQUFLWCxNQUFMLENBQVlZLE1BQW5EO0FBQ0EsYUFBS1gsR0FBTCxDQUFTNkUsU0FBVCxHQUFxQixpQkFBckI7QUFDQSxhQUFLN0UsR0FBTCxDQUFTOEUsSUFBVDtBQUNBLGFBQUs5RSxHQUFMLENBQVMyQixJQUFULEdBQWdCLFlBQWhCO0FBQ0EsYUFBSzNCLEdBQUwsQ0FBUzZFLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLN0UsR0FBTCxDQUFTNEIsU0FBVCxHQUFxQixRQUFyQjtBQUNBLGFBQUs1QixHQUFMLENBQVM2QixRQUFULENBQWtCLFFBQWxCLEVBQTRCLEtBQUs5QixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBaEQsRUFBbUQsS0FBS1gsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLENBQXhFO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLa0QsU0FBTCxLQUFtQlAsU0FBUyxDQUFDSSxRQUFqQyxFQUEyQztBQUV2QyxhQUFLMUQsR0FBTCxDQUFTNEUsSUFBVCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsS0FBSzdFLE1BQUwsQ0FBWVcsS0FBaEMsRUFBdUMsS0FBS1gsTUFBTCxDQUFZWSxNQUFuRDtBQUNBLGFBQUtYLEdBQUwsQ0FBUzZFLFNBQVQsR0FBcUIsZUFBckI7QUFDQSxhQUFLN0UsR0FBTCxDQUFTOEUsSUFBVDtBQUNBLGFBQUs5RSxHQUFMLENBQVMyQixJQUFULEdBQWdCLFlBQWhCO0FBQ0EsYUFBSzNCLEdBQUwsQ0FBUzZFLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLN0UsR0FBTCxDQUFTNEIsU0FBVCxHQUFxQixRQUFyQjtBQUNBLGFBQUs1QixHQUFMLENBQVM2QixRQUFULENBQWtCLFdBQWxCLEVBQStCLEtBQUs5QixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbkQsRUFBc0QsS0FBS1gsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLENBQTNFO0FBQ0EsYUFBS1gsR0FBTCxDQUFTNkIsUUFBVCxDQUFrQiw2QkFBbEIsRUFBaUQsS0FBSzlCLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFyRSxFQUF3RSxLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBckIsR0FBeUIsR0FBakc7QUFDSDs7QUFDRCxVQUFJLEtBQUtrRCxTQUFMLEtBQW1CUCxTQUFTLENBQUNLLFNBQWpDLEVBQTRDO0FBRXhDLGFBQUszRCxHQUFMLENBQVM0RSxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLN0UsTUFBTCxDQUFZVyxLQUFoQyxFQUF1QyxLQUFLWCxNQUFMLENBQVlZLE1BQW5EO0FBQ0EsYUFBS1gsR0FBTCxDQUFTNkUsU0FBVCxHQUFxQixlQUFyQjtBQUNBLGFBQUs3RSxHQUFMLENBQVM4RSxJQUFUO0FBQ0EsYUFBSzlFLEdBQUwsQ0FBUzJCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxhQUFLM0IsR0FBTCxDQUFTNkUsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGFBQUs3RSxHQUFMLENBQVM0QixTQUFULEdBQXFCLFFBQXJCO0FBQ0EsYUFBSzVCLEdBQUwsQ0FBUzZCLFFBQVQsaUJBQTJCLEtBQUtFLFlBQWhDLEdBQWdELEtBQUtoQyxNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBcEUsRUFBdUUsS0FBS1gsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLENBQTVGO0FBQ0g7QUFDSjs7OzZCQUVRO0FBQ0wsVUFBSSxLQUFLa0QsU0FBTCxLQUFtQlAsU0FBUyxDQUFDQyxNQUE3QixJQUNBLEtBQUtNLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0ksUUFEN0IsSUFFQSxLQUFLRyxTQUFMLEtBQW1CUCxTQUFTLENBQUNHLElBRjdCLElBR0EsS0FBS0ksU0FBTCxLQUFtQlAsU0FBUyxDQUFDSyxTQUhqQyxFQUc0QztBQUN4QztBQUNIOztBQUVELFdBQUtLLFNBQUw7QUFDQSxXQUFLRyxRQUFMO0FBQ0EsV0FBS08sS0FBTCxDQUFXSyxVQUFYO0FBQ0g7OztnQ0FFVztBQUFBOztBQUFBLFVBQ0ExRSxNQURBLEdBQ1csS0FBS3FFLEtBRGhCLENBQ0FyRSxNQURBO0FBRVIsVUFBTTJFLE9BQU8sR0FBRzNFLE1BQU0sQ0FBQzRFLFFBQVAsQ0FBZ0I5QyxDQUFoQixHQUFvQixFQUFwQztBQUNBLFVBQU0rQyxPQUFPLEdBQUc3RSxNQUFNLENBQUM0RSxRQUFQLENBQWdCN0MsQ0FBaEIsR0FBb0IsRUFBcEM7QUFDQSxVQUFNK0MsaUJBQWlCLEdBQUdILE9BQU8sR0FBRyxFQUFwQztBQUVBLFdBQUtsRSxPQUFMLENBQWFzRSxJQUFiLENBQWtCLFVBQUNwRSxNQUFELEVBQVNxRSxHQUFULEVBQWlCO0FBQy9CLFlBQUlDLE1BQU0sR0FBR3RFLE1BQU0sQ0FBQ04sS0FBUCxHQUFlLEdBQTVCO0FBQ0EsWUFBTTZFLGFBQWEsR0FBR3ZFLE1BQU0sQ0FBQ2lDLE9BQVAsR0FBaUJxQyxNQUF2QztBQUNBLFlBQU1FLGFBQWEsR0FBR3hFLE1BQU0sQ0FBQ2tDLE9BQVAsR0FBaUJvQyxNQUF2QyxDQUgrQixDQUkvQjs7QUFDQSxZQUFNRyxTQUFTLEdBQUdULE9BQU8sR0FBR08sYUFBNUI7QUFDQSxZQUFNRyxTQUFTLEdBQUdSLE9BQU8sR0FBR00sYUFBNUI7QUFDQSxZQUFNRyxZQUFZLEdBQUc1QyxJQUFJLENBQUM2QyxLQUFMLENBQVdILFNBQVgsRUFBc0JDLFNBQXRCLENBQXJCLENBUCtCLENBUS9COztBQUNBLFlBQU1HLFVBQVUsR0FBR1YsaUJBQWlCLEdBQUdJLGFBQXZDO0FBQ0EsWUFBTU8sVUFBVSxHQUFHWixPQUFPLEdBQUdNLGFBQTdCO0FBQ0EsWUFBTU8sYUFBYSxHQUFHaEQsSUFBSSxDQUFDNkMsS0FBTCxDQUFXQyxVQUFYLEVBQXVCQyxVQUF2QixDQUF0QixDQVgrQixDQVkvQjs7QUFDQSxZQUFNRSxRQUFRLEdBQUloQixPQUFPLEdBQUcsSUFBWCxHQUFtQk8sYUFBcEM7QUFDQSxZQUFNVSxRQUFRLEdBQUdmLE9BQU8sR0FBR00sYUFBM0I7QUFDQSxZQUFNVSxjQUFjLEdBQUduRCxJQUFJLENBQUM2QyxLQUFMLENBQVdJLFFBQVgsRUFBcUJDLFFBQXJCLENBQXZCOztBQUNBLFlBQUlOLFlBQVksSUFBSUwsTUFBaEIsSUFBMEJTLGFBQWEsSUFBSVQsTUFBM0MsSUFBcURZLGNBQWMsSUFBSVosTUFBM0UsRUFBbUY7QUFFL0UsZUFBSSxDQUFDcEIsUUFBTDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsWUFBSWxELE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQixDQUFoQixJQUFxQnFFLGFBQWEsSUFBSVAsT0FBdEMsSUFBaURPLGFBQWEsSUFBSUosaUJBQWxFLElBQXVGSyxhQUFhLElBQUlOLE9BQTVHLEVBQXFIO0FBQ2pILGVBQUksQ0FBQ2hCLFFBQUw7O0FBQ0EsaUJBQU8sSUFBUDtBQUNIOztBQUNELGFBQUksQ0FBQzlDLE1BQUwsQ0FBWUwsT0FBWixDQUFvQixVQUFBTSxJQUFJLEVBQUk7QUFDeEI7QUFDQSxjQUFNOEUsV0FBVyxHQUFHOUUsSUFBSSxDQUFDYyxDQUFMLEdBQVMsRUFBN0I7QUFDQSxjQUFNaUUsV0FBVyxHQUFHL0UsSUFBSSxDQUFDZSxDQUFMLEdBQVMsQ0FBN0I7QUFDQSxjQUFNaUUsVUFBVSxHQUFHRixXQUFXLEdBQUdaLGFBQWpDO0FBQ0EsY0FBTWUsVUFBVSxHQUFHRixXQUFXLEdBQUdaLGFBQWpDO0FBQ0EsY0FBTWUsY0FBYyxHQUFHSCxXQUFXLEdBQUcsRUFBZCxHQUFtQlosYUFBMUM7QUFDQSxjQUFNZ0IsYUFBYSxHQUFHSixXQUFXLEdBQUcsRUFBZCxHQUFtQlosYUFBekM7QUFDQSxjQUFNaUIsdUJBQXVCLEdBQUcxRCxJQUFJLENBQUM2QyxLQUFMLENBQVdTLFVBQVgsRUFBdUJDLFVBQXZCLENBQWhDO0FBQ0EsY0FBTUksc0JBQXNCLEdBQUczRCxJQUFJLENBQUM2QyxLQUFMLENBQVdTLFVBQVgsRUFBdUJFLGNBQXZCLENBQS9CO0FBQ0EsY0FBTUkscUJBQXFCLEdBQUc1RCxJQUFJLENBQUM2QyxLQUFMLENBQVdTLFVBQVgsRUFBdUJHLGFBQXZCLENBQTlCOztBQUVBLGNBQUlDLHVCQUF1QixJQUFJbkIsTUFBM0IsSUFBcUNvQixzQkFBc0IsSUFBSXBCLE1BQS9ELElBQXlFcUIscUJBQXFCLElBQUlyQixNQUF0RyxFQUE4RztBQUUxR3NCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaOztBQUNBLGlCQUFJLENBQUN2QyxhQUFMLENBQW1CdEQsTUFBbkIsRUFBMkJxRSxHQUEzQjtBQUNIO0FBQ0osU0FqQkQ7QUFrQkgsT0EzQ0Q7QUE0Q0g7OztrQ0FFYTtBQUNWLFVBQUksS0FBS3hCLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUM7QUFDckMsYUFBS00sU0FBTCxHQUFpQlAsU0FBUyxDQUFDRSxPQUEzQjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUtLLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0UsT0FBakMsRUFBMEM7QUFDN0MsYUFBS0ssU0FBTCxHQUFpQlAsU0FBUyxDQUFDQyxNQUEzQjtBQUNIO0FBQ0o7OzsrQkFFVTtBQUVQLFdBQUs5QixLQUFMLENBQVdxRixHQUFYO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUsxQyxhQUFMO0FBQ0EsV0FBS0ssS0FBTCxHQUFhLElBQUk1RSxLQUFKLENBQVUsS0FBS0MsTUFBZixFQUF1QixLQUFLQyxHQUE1QixFQUFpQyxJQUFqQyxDQUFiO0FBQ0EsV0FBSzZELFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0UsT0FBM0I7QUFDSDs7O21DQUVhO0FBQ1YsV0FBS2UsTUFBTCxHQUFjLElBQUluQixLQUFKLENBQVUsSUFBVixDQUFkO0FBQ0EsV0FBS29CLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlFLEtBQVosQ0FBa0IsS0FBSzFDLFlBQXZCLENBQWI7QUFDSDs7OytCQUVVO0FBQ1AsVUFBSSxLQUFLTixLQUFMLENBQVd1RixNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCO0FBQ0EsYUFBS25ELFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0ksUUFBM0I7QUFDQSxhQUFLM0IsWUFBTCxHQUFvQixDQUFwQjtBQUNBLGFBQUtnRixZQUFMO0FBQ0g7QUFDSjs7OzRCQUVPO0FBQ0osVUFBSSxLQUFLbEQsU0FBTCxLQUFtQlAsU0FBUyxDQUFDRSxPQUFqQyxFQUEwQztBQUNsQyxhQUFLcEMsTUFBTCxDQUFZNkYsSUFBWixDQUFpQixJQUFJcEgsS0FBSixDQUFVLEtBQUtFLE1BQWYsRUFBdUIsS0FBS0MsR0FBNUIsRUFBaUMsSUFBakMsQ0FBakI7QUFDUDtBQUNKOzs7b0NBRWU7QUFBQTs7QUFDWixXQUFLYyxPQUFMLEdBQWUsS0FBSzBELEtBQUwsQ0FBVzBDLEdBQVgsQ0FBZSxVQUFBbEcsTUFBTSxFQUFJO0FBQ3BDLFlBQUlBLE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQixDQUFwQixFQUF1QjtBQUNuQixpQkFBTyxJQUFJeEIsTUFBSixDQUFXLE1BQUksQ0FBQ0ssTUFBaEIsRUFBd0IsTUFBSSxDQUFDQyxHQUE3QixFQUFrQyxDQUFsQyxFQUFxQztBQUN4Q21DLGFBQUMsRUFBRW5CLE1BQU0sQ0FBQ21CLENBRDhCO0FBRXhDQyxhQUFDLEVBQUVwQixNQUFNLENBQUNvQixDQUY4QjtBQUd4Q3pCLGtCQUFNLEVBQUUsR0FIZ0M7QUFJeENELGlCQUFLLEVBQUUsR0FKaUM7QUFLeEMyQixvQkFBUSxFQUFFckIsTUFBTSxDQUFDcUIsUUFMdUI7QUFNeENDLG9CQUFRLEVBQUV0QixNQUFNLENBQUNzQixRQU51QjtBQU94Q0MsbUJBQU8sRUFBRSxHQVArQjtBQVF4Q0Msd0JBQVksRUFBRSxDQVIwQjtBQVN4Q0Msa0JBQU0sRUFBRTtBQVRnQyxXQUFyQyxDQUFQO0FBV0gsU0FaRCxNQVlTLElBQUl6QixNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDNUIsaUJBQU8sSUFBSXhCLE1BQUosQ0FBVyxNQUFJLENBQUNLLE1BQWhCLEVBQXdCLE1BQUksQ0FBQ0MsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUM7QUFDeENtQyxhQUFDLEVBQUVuQixNQUFNLENBQUNtQixDQUQ4QjtBQUV4Q0MsYUFBQyxFQUFFcEIsTUFBTSxDQUFDb0IsQ0FGOEI7QUFHeEN6QixrQkFBTSxFQUFFLEdBSGdDO0FBSXhDRCxpQkFBSyxFQUFFLEdBSmlDO0FBS3hDMkIsb0JBQVEsRUFBRXJCLE1BQU0sQ0FBQ3FCLFFBTHVCO0FBTXhDQyxvQkFBUSxFQUFFdEIsTUFBTSxDQUFDc0IsUUFOdUI7QUFPeENDLG1CQUFPLEVBQUUsR0FQK0I7QUFReENDLHdCQUFZLEVBQUUsQ0FSMEI7QUFTeENDLGtCQUFNLEVBQUU7QUFUZ0MsV0FBckMsQ0FBUDtBQVdILFNBWlEsTUFZRixJQUFJekIsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLENBQXBCLEVBQXVCO0FBQzFCLGlCQUFPLElBQUl4QixNQUFKLENBQVcsTUFBSSxDQUFDSyxNQUFoQixFQUF3QixNQUFJLENBQUNDLEdBQTdCLEVBQWtDLENBQWxDLEVBQXFDO0FBQ3hDbUMsYUFBQyxFQUFFbkIsTUFBTSxDQUFDbUIsQ0FEOEI7QUFFeENDLGFBQUMsRUFBRXBCLE1BQU0sQ0FBQ29CLENBRjhCO0FBR3hDekIsa0JBQU0sRUFBRSxHQUhnQztBQUl4Q0QsaUJBQUssRUFBRSxHQUppQztBQUt4QzJCLG9CQUFRLEVBQUVyQixNQUFNLENBQUNxQixRQUx1QjtBQU14Q0Msb0JBQVEsRUFBRXRCLE1BQU0sQ0FBQ3NCLFFBTnVCO0FBT3hDQyxtQkFBTyxFQUFFLEdBUCtCO0FBUXhDQyx3QkFBWSxFQUFFLENBUjBCO0FBU3hDQyxrQkFBTSxFQUFFO0FBVGdDLFdBQXJDLENBQVA7QUFXSCxTQVpNLE1BWUEsSUFBSXpCLE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQixDQUFwQixFQUF1QjtBQUMxQixpQkFBTyxJQUFJeEIsTUFBSixDQUFXLE1BQUksQ0FBQ0ssTUFBaEIsRUFBd0IsTUFBSSxDQUFDQyxHQUE3QixFQUFrQyxDQUFsQyxFQUFxQztBQUN4Q21DLGFBQUMsRUFBRW5CLE1BQU0sQ0FBQ21CLENBRDhCO0FBRXhDQyxhQUFDLEVBQUVwQixNQUFNLENBQUNvQixDQUY4QjtBQUd4Q3pCLGtCQUFNLEVBQUUsR0FIZ0M7QUFJeENELGlCQUFLLEVBQUUsR0FKaUM7QUFLeEMyQixvQkFBUSxFQUFFckIsTUFBTSxDQUFDcUIsUUFMdUI7QUFNeENDLG9CQUFRLEVBQUV0QixNQUFNLENBQUNzQixRQU51QjtBQU94Q0MsbUJBQU8sRUFBRSxHQVArQjtBQVF4Q0Msd0JBQVksRUFBRSxDQVIwQjtBQVN4Q0Msa0JBQU0sRUFBRTtBQVRnQyxXQUFyQyxDQUFQO0FBV0gsU0FaTSxNQVlBLElBQUl6QixNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDMUIsaUJBQU8sSUFBSXhCLE1BQUosQ0FBVyxNQUFJLENBQUNLLE1BQWhCLEVBQXdCLE1BQUksQ0FBQ0MsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUM7QUFDeENtQyxhQUFDLEVBQUVuQixNQUFNLENBQUNtQixDQUQ4QjtBQUV4Q0MsYUFBQyxFQUFFcEIsTUFBTSxDQUFDb0IsQ0FGOEI7QUFHeEN6QixrQkFBTSxFQUFFLEVBSGdDO0FBSXhDRCxpQkFBSyxFQUFFLEVBSmlDO0FBS3hDMkIsb0JBQVEsRUFBRXJCLE1BQU0sQ0FBQ3FCLFFBTHVCO0FBTXhDQyxvQkFBUSxFQUFFdEIsTUFBTSxDQUFDc0IsUUFOdUI7QUFPeENDLG1CQUFPLEVBQUUsR0FQK0I7QUFReENDLHdCQUFZLEVBQUUsQ0FSMEI7QUFTeENDLGtCQUFNLEVBQUU7QUFUZ0MsV0FBckMsQ0FBUDtBQVdIO0FBRUosT0EvRGMsQ0FBZjtBQWdFSDs7O2tDQUVhekIsTSxFQUFRcUUsRyxFQUFLO0FBQUE7O0FBQ3ZCLFdBQUt2RCxLQUFMLElBQWMsR0FBZDtBQUNBLFdBQUtWLE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS29ELEtBQUwsQ0FBV3pELE9BQVgsQ0FBbUIsVUFBQ29HLFdBQUQsRUFBY0MsSUFBZCxFQUF1QjtBQUN0QyxjQUFJLENBQUN0RyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsTUFBRCxFQUFTcUcsSUFBVCxFQUFrQjtBQUNuQyxjQUFJRCxJQUFJLEtBQUtDLElBQWIsRUFBbUI7QUFDZkYsdUJBQVcsQ0FBQ2hGLENBQVosR0FBZ0JuQixNQUFNLENBQUNtQixDQUF2QjtBQUNBZ0YsdUJBQVcsQ0FBQy9FLENBQVosR0FBZ0JwQixNQUFNLENBQUNvQixDQUF2QjtBQUNBK0UsdUJBQVcsQ0FBQzlFLFFBQVosR0FBdUJyQixNQUFNLENBQUNxQixRQUE5QjtBQUNBOEUsdUJBQVcsQ0FBQzdFLFFBQVosR0FBdUJ0QixNQUFNLENBQUNzQixRQUE5QjtBQUNIO0FBQ0osU0FQRDtBQVFILE9BVEQ7QUFVQSxXQUFLa0MsS0FBTCxDQUFXOEMsTUFBWCxDQUFrQmpDLEdBQWxCLEVBQXVCLENBQXZCOztBQUVBLFVBQUlyRSxNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIsYUFBS3NELEtBQUwsQ0FBV3lDLElBQVgsQ0FBZ0I7QUFBRS9GLGNBQUksRUFBRUYsTUFBTSxDQUFDRSxJQUFQLEdBQWMsQ0FBdEI7QUFBeUJpQixXQUFDLEVBQUVuQixNQUFNLENBQUNtQixDQUFuQztBQUFzQ0MsV0FBQyxFQUFFcEIsTUFBTSxDQUFDb0IsQ0FBaEQ7QUFBbURDLGtCQUFRLEVBQUVyQixNQUFNLENBQUNxQixRQUFwRTtBQUE4RUMsa0JBQVEsRUFBRXRCLE1BQU0sQ0FBQ3NCO0FBQS9GLFNBQWhCO0FBQ0EsYUFBS2tDLEtBQUwsQ0FBV3lDLElBQVgsQ0FBZ0I7QUFBRS9GLGNBQUksRUFBRUYsTUFBTSxDQUFDRSxJQUFQLEdBQWMsQ0FBdEI7QUFBeUJpQixXQUFDLEVBQUVuQixNQUFNLENBQUNtQixDQUFuQztBQUFzQ0MsV0FBQyxFQUFFcEIsTUFBTSxDQUFDb0IsQ0FBaEQ7QUFBbURDLGtCQUFRLEVBQUUsQ0FBQ3JCLE1BQU0sQ0FBQ3FCLFFBQXJFO0FBQStFQyxrQkFBUSxFQUFFLENBQUN0QixNQUFNLENBQUNzQjtBQUFqRyxTQUFoQjtBQUNIOztBQUNELFVBQUksS0FBS2tDLEtBQUwsQ0FBV3dDLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBS08sWUFBTDtBQUNIOztBQUNELFdBQUtsRCxhQUFMO0FBQ0g7OzttQ0FFYztBQUFBOztBQUNYLFdBQUt0QyxZQUFMLElBQXFCLENBQXJCO0FBQ0EsV0FBS2dGLFlBQUw7QUFDQSxXQUFLbEQsU0FBTCxHQUFpQlAsU0FBUyxDQUFDSyxTQUEzQjtBQUNBNkQsZ0JBQVUsQ0FBQyxZQUFNO0FBQUUsY0FBSSxDQUFDM0QsU0FBTCxHQUFpQlAsU0FBUyxDQUFDRSxPQUEzQjtBQUFvQyxPQUE3QyxFQUErQyxJQUEvQyxDQUFWO0FBQ0g7Ozs2QkFFUXJCLEMsRUFBR0MsQyxFQUFHO0FBQ1gsV0FBS3VDLEtBQUwsQ0FBV3NDLElBQVgsQ0FBZ0IsSUFBSVEsSUFBSixDQUFTdEYsQ0FBVCxFQUFZQyxDQUFaLEVBQWUsSUFBZixDQUFoQjtBQUNIOzs7Ozs7QUFHTEosTUFBTSxDQUFDQyxPQUFQLEdBQWlCMkIsSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNyVE1QLEs7QUFDRixpQkFBWWxCLENBQVosRUFBZUMsQ0FBZixFQUFrQm5DLElBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtrQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLc0YsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CNUUsSUFBSSxDQUFDNkUsS0FBTCxDQUFXN0UsSUFBSSxDQUFDOEUsTUFBTCxLQUFnQixHQUEzQixDQUFwQjtBQUNBLFNBQUs1SCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLNkgsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7OzsyQkFFTTtBQUNILGNBQVEsS0FBS0gsWUFBYjtBQUNJLGFBQU0sS0FBS0EsWUFBTCxJQUFxQixFQUEzQjtBQUFnQztBQUM1QixjQUFJbkcsS0FBSyxHQUFHLElBQUlqQixLQUFKLEVBQVo7QUFDQWlCLGVBQUssQ0FBQ2hCLEdBQU4sR0FBWSxzQkFBWjtBQUNBLGVBQUtSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQmUsS0FBbkIsRUFBMEIsS0FBS1csQ0FBTCxHQUFTLEtBQUtDLENBQXhDLEVBQTJDLEdBQTNDLEVBQWdELEdBQWhEO0FBQ0o7O0FBQ0EsYUFBTSxLQUFLdUYsWUFBTCxJQUFxQixFQUEzQjtBQUFnQztBQUM1QixjQUFJSSxTQUFTLEdBQUcsSUFBSXhILEtBQUosRUFBaEI7QUFDQWlCLGVBQUssQ0FBQ2hCLEdBQU4sR0FBWSwyQkFBWjtBQUNBLGVBQUtSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQnNILFNBQW5CLEVBQThCLEtBQUs1RixDQUFuQyxFQUFzQyxLQUFLQyxDQUEzQyxFQUE4QyxHQUE5QyxFQUFtRCxHQUFuRDtBQUNKOztBQUNBLGFBQUssS0FBS3VGLFlBQUwsSUFBcUIsRUFBMUI7QUFBOEI7QUFDMUIsY0FBSUssUUFBUSxHQUFHLElBQUl6SCxLQUFKLEVBQWY7QUFDQWlCLGVBQUssQ0FBQ2hCLEdBQU4sR0FBWSwwQkFBWjtBQUNBLGVBQUtSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQnVILFFBQW5CLEVBQTZCLEtBQUs3RixDQUFsQyxFQUFxQyxLQUFLQyxDQUExQyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRDtBQUNKOztBQUNBLGFBQUssS0FBS3VGLFlBQUwsSUFBcUIsQ0FBMUI7QUFBNkI7QUFDekIsY0FBSU0sVUFBVSxHQUFHLElBQUkxSCxLQUFKLEVBQWpCO0FBQ0FpQixlQUFLLENBQUNoQixHQUFOLEdBQVksMEJBQVo7QUFDQSxlQUFLUixHQUFMLENBQVNTLFNBQVQsQ0FBbUJ3SCxVQUFuQixFQUErQixLQUFLOUYsQ0FBcEMsRUFBdUMsS0FBS0MsQ0FBNUMsRUFBK0MsR0FBL0MsRUFBb0QsR0FBcEQ7QUFDSjtBQXBCSjtBQXNCSDs7OzZCQUVRO0FBQUE7O0FBQ0wsV0FBS0EsQ0FBTCxJQUFVLEtBQUtzRixFQUFmOztBQUNBLFVBQUksS0FBS3RGLENBQUwsR0FBUyxLQUFLc0YsRUFBZCxJQUFvQixLQUFLekgsSUFBTCxDQUFVRixNQUFWLENBQWlCWSxNQUFqQixHQUEwQixLQUFLQSxNQUFMLEdBQWMsQ0FBaEUsRUFBbUU7QUFDL0QsYUFBSytHLEVBQUwsR0FBVSxDQUFWO0FBQ0FGLGtCQUFVLENBQUMsWUFBTTtBQUFFLGVBQUksQ0FBQ00sTUFBTCxHQUFjLElBQWQ7QUFBcUIsU0FBOUIsRUFBZ0MsSUFBaEMsQ0FBVjtBQUNIO0FBQ0o7Ozs7OztBQUdMOUYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCb0IsS0FBakIsQzs7Ozs7Ozs7Ozs7OztJQzVDTUYsWSxHQUNGLHNCQUFZbEQsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLE9BQUtpSSxNQUFMLEdBQWMsS0FBZDtBQUVBdkYsVUFBUSxDQUFDd0YsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RDLFlBQVFBLENBQUMsQ0FBQ0MsR0FBVjtBQUNJLFdBQU0sWUFBTjtBQUNJcEksWUFBSSxDQUFDeUUsS0FBTCxDQUFXckUsTUFBWCxDQUFrQmlJLFNBQWxCO0FBQ0E7O0FBRUosV0FBTSxXQUFOO0FBQ0lySSxZQUFJLENBQUN5RSxLQUFMLENBQVdyRSxNQUFYLENBQWtCa0ksUUFBbEI7QUFDQTs7QUFFSixXQUFNLEdBQU47QUFDSXRJLFlBQUksQ0FBQ2dFLFdBQUw7QUFDQTs7QUFDSixXQUFNLEdBQU47QUFDSWhFLFlBQUksQ0FBQzhELEtBQUw7QUFDQTs7QUFDSixXQUFNLEdBQU47QUFDSSxZQUFJLEtBQUksQ0FBQ21FLE1BQVQsRUFBaUI7QUFDYmpJLFlBQUksQ0FBQ21FLEtBQUw7QUFDSixhQUFJLENBQUM4RCxNQUFMLEdBQWMsSUFBZDtBQUNBVixrQkFBVSxDQUFDLFlBQU07QUFBRSxlQUFJLENBQUNVLE1BQUwsR0FBYyxLQUFkO0FBQXNCLFNBQS9CLEVBQWlDLEdBQWpDLENBQVY7QUFDQTs7QUFDSjtBQUNJO0FBdEJSO0FBd0JILEdBekJEO0FBMkJBdkYsVUFBUSxDQUFDd0YsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BDLFlBQVFBLENBQUMsQ0FBQ0MsR0FBVjtBQUNJLFdBQU0sWUFBTjtBQUNJLFlBQUlwSSxJQUFJLENBQUN5RSxLQUFMLENBQVdyRSxNQUFYLENBQWtCbUksS0FBbEIsR0FBMEIsQ0FBOUIsRUFBaUN2SSxJQUFJLENBQUN5RSxLQUFMLENBQVdyRSxNQUFYLENBQWtCb0ksSUFBbEI7QUFDakM7O0FBRUosV0FBTSxXQUFOO0FBQ0ksWUFBSXhJLElBQUksQ0FBQ3lFLEtBQUwsQ0FBV3JFLE1BQVgsQ0FBa0JtSSxLQUFsQixHQUEwQixDQUE5QixFQUFpQ3ZJLElBQUksQ0FBQ3lFLEtBQUwsQ0FBV3JFLE1BQVgsQ0FBa0JvSSxJQUFsQjtBQUNqQzs7QUFDSjtBQUNJO0FBVFI7QUFXSCxHQVpEO0FBYUgsQzs7QUFHTHpHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmtCLFlBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDL0NNdEQsSztBQUNGLGlCQUFZRSxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2tDLENBQUwsR0FBUyxLQUFLbEMsSUFBTCxDQUFVeUUsS0FBVixDQUFnQnJFLE1BQWhCLENBQXVCNEUsUUFBdkIsQ0FBZ0M5QyxDQUFoQyxHQUFvQyxFQUE3QztBQUNBLFNBQUtDLENBQUwsR0FBUyxLQUFLckMsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLEdBQTlCO0FBQ0EsU0FBSytILE1BQUwsR0FBYyxFQUFkO0FBRUEsU0FBS3pILElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVkLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLb0IsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWXBCLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUVIOzs7OzJCQUVNO0FBQ0gsVUFBSXdJLEtBQUssR0FBRyxJQUFJcEksS0FBSixFQUFaO0FBQ0FvSSxXQUFLLENBQUNuSSxHQUFOLEdBQVksc0JBQVo7QUFDQSxXQUFLUixHQUFMLENBQVNZLFNBQVQ7QUFDQSxXQUFLWixHQUFMLENBQVNTLFNBQVQsQ0FBbUJrSSxLQUFuQixFQUEwQixLQUFLeEcsQ0FBL0IsRUFBa0MsS0FBS0MsQ0FBdkMsRUFBMEMsRUFBMUMsRUFBOEMsRUFBOUM7QUFDQSxXQUFLcEMsR0FBTCxDQUFTNEksU0FBVDtBQUNIOzs7NkJBRVE7QUFDTCxXQUFLeEcsQ0FBTCxJQUFVLEtBQUtzRyxNQUFmO0FBQ0g7Ozs7OztBQUdMMUcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcEMsS0FBakIsQzs7Ozs7Ozs7Ozs7OztJQzNCTXVELEssR0FDRixlQUFZbkQsSUFBWixFQUFrQjtBQUFBOztBQUNkLE9BQUt3RSxLQUFMLEdBQWE7QUFDVCxPQUFHLENBQUM7QUFBRXZELFVBQUksRUFBRSxDQUFSO0FBQVdpQixPQUFDLEVBQUVsQyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFsQztBQUFxQzBCLE9BQUMsRUFBRSxFQUF4QztBQUE0Q0MsY0FBUSxFQUFFLENBQXREO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxDQURNO0FBRVQsT0FBRyxDQUFDO0FBQUVwQixVQUFJLEVBQUUsQ0FBUjtBQUFXaUIsT0FBQyxFQUFFbEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbEM7QUFBcUMwQixPQUFDLEVBQUUsRUFBeEM7QUFBNENDLGNBQVEsRUFBRSxDQUF0RDtBQUF5REMsY0FBUSxFQUFFO0FBQW5FLEtBQUQsQ0FGTTtBQUdULE9BQUcsQ0FBQztBQUFFcEIsVUFBSSxFQUFFLENBQVI7QUFBV2lCLE9BQUMsRUFBRWxDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQWxDO0FBQXFDMEIsT0FBQyxFQUFFLEVBQXhDO0FBQTRDQyxjQUFRLEVBQUUsQ0FBdEQ7QUFBeURDLGNBQVEsRUFBRTtBQUFuRSxLQUFELENBSE07QUFJVCxPQUFHLENBQUM7QUFBRXBCLFVBQUksRUFBRSxDQUFSO0FBQVdpQixPQUFDLEVBQUVsQyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFsQztBQUFxQzBCLE9BQUMsRUFBRSxFQUF4QztBQUE0Q0MsY0FBUSxFQUFFLENBQXREO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxDQUpNO0FBS1QsT0FBRyxDQUFDO0FBQUVwQixVQUFJLEVBQUUsQ0FBUjtBQUFXaUIsT0FBQyxFQUFFbEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbEM7QUFBcUMwQixPQUFDLEVBQUUsRUFBeEM7QUFBNENDLGNBQVEsRUFBRSxDQUF0RDtBQUF5REMsY0FBUSxFQUFFO0FBQW5FLEtBQUQsRUFBeUU7QUFBRXBCLFVBQUksRUFBRSxDQUFSO0FBQVdpQixPQUFDLEVBQUVsQyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFwQixHQUF3QixHQUF0QztBQUEyQzBCLE9BQUMsRUFBRSxFQUE5QztBQUFrREMsY0FBUSxFQUFFLENBQTVEO0FBQStEQyxjQUFRLEVBQUUsQ0FBQztBQUExRSxLQUF6RTtBQUxNLEdBQWI7QUFPSCxDOztBQUdMTixNQUFNLENBQUNDLE9BQVAsR0FBaUJtQixLQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1pNeEQsTTtBQUNGLGtCQUFZRyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUNyQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLVSxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkLENBTHFCLENBS0Y7O0FBRW5CLFNBQUtrSSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0wsS0FBTCxHQUFhLENBQWI7QUFFQSxTQUFLdkQsUUFBTCxHQUFnQjtBQUNaOUMsT0FBQyxFQUFFLEtBQUtwQyxNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsS0FBS0EsS0FBTCxHQUFhLENBRDVCO0FBRVowQixPQUFDLEVBQUUsS0FBS3JDLE1BQUwsQ0FBWVksTUFBWixHQUFxQixLQUFLQSxNQUExQixHQUFtQztBQUYxQixLQUFoQjtBQUlIOzs7OytCQUVVO0FBQ1AsV0FBSzZILEtBQUwsR0FBYSxDQUFDLEtBQUtLLFFBQW5CO0FBQ0g7OztnQ0FFVztBQUNSLFdBQUtMLEtBQUwsR0FBYSxLQUFLSyxRQUFsQjtBQUNIOzs7MkJBRU07QUFDSCxVQUFJeEksTUFBTSxHQUFHLElBQUlFLEtBQUosRUFBYjtBQUNBRixZQUFNLENBQUNHLEdBQVAsR0FBYSx1QkFBYjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1ksU0FBVDtBQUNBLFdBQUtaLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQkosTUFBbkIsRUFBMkIsS0FBSzRFLFFBQUwsQ0FBYzlDLENBQXpDLEVBQTRDLEtBQUs4QyxRQUFMLENBQWM3QyxDQUExRCxFQUE2RCxLQUFLMUIsS0FBbEUsRUFBeUUsS0FBS0MsTUFBOUU7QUFDQSxXQUFLWCxHQUFMLENBQVM0SSxTQUFUO0FBRUg7Ozs2QkFFUTtBQUVMLFdBQUszRCxRQUFMLENBQWM5QyxDQUFkLElBQW1CLEtBQUtxRyxLQUF4Qjs7QUFFQSxVQUFJLEtBQUt2RCxRQUFMLENBQWM5QyxDQUFkLEdBQWtCLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsYUFBSzhDLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0IsQ0FBQyxFQUFuQjtBQUNIOztBQUVELFVBQUksS0FBSzhDLFFBQUwsQ0FBYzlDLENBQWQsR0FBa0IsS0FBS3pCLEtBQXZCLEdBQStCLEtBQUtYLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixFQUF2RCxFQUEyRDtBQUN2RCxhQUFLdUUsUUFBTCxDQUFjOUMsQ0FBZCxHQUFrQixLQUFLcEMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLEtBQUtBLEtBQXpCLEdBQWlDLEVBQW5EO0FBQ0g7QUFDSjs7OzJCQUVNO0FBQ0gsV0FBSzhILEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7OztBQUdMeEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCckMsTUFBakIsQzs7Ozs7Ozs7Ozs7QUNwREFnRSxJQUFJLEdBQUdqRSxtQkFBTyxDQUFDLG9DQUFELENBQWQ7QUFFQWdELFFBQVEsQ0FBQ3dGLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1wSSxNQUFNLEdBQUc0QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQU01QyxHQUFHLEdBQUdELE1BQU0sQ0FBQytJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLE1BQU03SSxJQUFJLEdBQUcsSUFBSTJELElBQUosQ0FBUzdELE1BQVQsRUFBaUJDLEdBQWpCLENBQWI7QUFDQSxNQUFJK0ksUUFBUSxHQUFHLENBQWY7O0FBR0FDLFVBQVE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsSUFBRyxVQUFDQyxTQUFELEVBQWU7QUFDdEJGLFlBQVEsR0FBR0UsU0FBWDtBQUNBaEosUUFBSSxDQUFDc0IsTUFBTDtBQUNBdEIsUUFBSSxDQUFDZ0IsSUFBTDtBQUNBaUkseUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxHQUxPLENBQVI7O0FBTUFFLHVCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgLy8gdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4LCB7XG5cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9ICdzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfb25lLmpwZydcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS5kcmF3KGJ1YmJsZS5zaXplKSlcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSlcbiAgICAgICAgdGhpcy5kcmF3VGV4dCgpXG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS51cGRhdGUoKSlcbiAgICAgICAgdGhpcy5nYW1lLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSlcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoKSB7XG4gICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICB0aGlzLmdhbWUubGl2ZXMuZm9yRWFjaChoZWFydENvdW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgNjIwICsgaGVhcnRDb3VudCAqIDQwLCAwLCAxMDAsIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KCkge1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEhpZ2ggU2NvcmU6ICR7dGhpcy5nYW1lLnNjb3JlfWAsIDQwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYExldmVsICR7dGhpcy5nYW1lLmN1cnJlbnRMZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDMwKVxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCBcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggXG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IG9wdGlvbnMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSBvcHRpb25zLmJ1YmJsZURZO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBvcHRpb25zLmdyYXZpdHk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gb3B0aW9ucy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIHRoaXMuYm91bmNlID0gb3B0aW9ucy5ib3VuY2U7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIGRyYXcoc2l6ZSkge1xuICAgICAgICBsZXQgYnViYmxlXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZpdmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1mb3VyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtdGhyZWVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10d29cIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZXG4gICAgICAgIC8vIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgIC8vICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gdGhpcy5oZWlnaHQgLyAxMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLSB0aGlzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuYnViYmxlRFkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIHx8IHRoaXMueSArIHRoaXMuYnViYmxlRFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURZID0gLXRoaXMuYnViYmxlRFk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIHJlYWxDb29yZGluYXRlcygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0NztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0NztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAyNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxMjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcbkxldmVsID0gcmVxdWlyZSgnLi9sZXZlbHMnKTtcbkdpZnRzID0gcmVxdWlyZSgnLi9naWZ0cycpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBMRVZFTERPTkU6IDRcbn07XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTUVOVTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dCA9IG5ldyBJbnB1dEhhbmRsZXIodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbiA9IHRoaXMuY29sbGlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUGF1c2UgPSB0aGlzLnRvZ2dsZVBhdXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubG9zZUxpZmUgPSB0aGlzLmxvc2VMaWZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2hvb3QgPSB0aGlzLnNob290LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcyA9IHRoaXMuY3JlYXRlQnViYmxlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmV4cGxvZGVCdWJibGUgPSB0aGlzLmV4cGxvZGVCdWJibGUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubGl2ZXMgPSBbNCwgMywgMiwgMSwgMF07XG4gICAgICAgIHRoaXMubGFzZXJzID0gW11cbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcylcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKClcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXG4gICAgICAgIHRoaXMuZ2lmdHMgPSBbXVxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKVxuICAgICAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5kcmF3R2FtZSgpO1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMRVZFTCAke3RoaXMuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBjb25zdCBwbGF5ZXJYID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgY29uc3QgcGxheWVyWSA9IHBsYXllci5wb3NpdGlvbi55ICsgNjU7XG4gICAgICAgIGNvbnN0IHJpZ2h0UG9pbnRQbGF5ZXJYID0gcGxheWVyWCArIDczO1xuXG4gICAgICAgIHRoaXMuYnViYmxlcy5zb21lKChidWJibGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGJ1YmJsZS53aWR0aCAvIDQuNTtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclggPSBidWJibGUuYnViYmxlWCArIHJhZGl1c1xuICAgICAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZS5idWJibGVZICsgcmFkaXVzXG4gICAgICAgICAgICAvL2NoZWtpbmcgbGVmdCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdExlZnRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxlZnQgPSBNYXRoLmh5cG90KGRpc3RMZWZ0WCwgZGlzdExlZnRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdFJpZ2h0WCA9IHJpZ2h0UG9pbnRQbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgICAgICAvL2NoZWtpbmcgbWlkZGxlIG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdE1pZFggPSAocGxheWVyWCArIDY3LjUpIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZU1pZGRsZSA9IE1hdGguaHlwb3QoZGlzdE1pZFgsIGRpc3RNaWRZKVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGVmdCA8PSByYWRpdXMgfHwgZGlzdGFuY2VSaWdodCA8PSByYWRpdXMgfHwgZGlzdGFuY2VNaWRkbGUgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gMSAmJiBidWJibGVDZW50ZXJYID49IHBsYXllclggJiYgYnViYmxlQ2VudGVyWCA8PSByaWdodFBvaW50UGxheWVyWCAmJiBidWJibGVDZW50ZXJZID49IHBsYXllclkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NoZWtpbmcgbGFzZXIgYW5kIGJ1YmJsZSBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WCA9IHNob3QueCArIDEzXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFkgPSBzaG90LnkgKyA3XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWCA9IGxhc2VyUG9pbnRYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJZID0gbGFzZXJQb2ludFkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlckRvd25ZID0gbGFzZXJQb2ludFkgKyA3MCAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyTWlkWSA9IGxhc2VyUG9pbnRZICsgMzUgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJVcHBlclBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlckRvd25ZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyTWlkWSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGlzaW9uXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICByZXN0YXJ0TGV2ZWwoKXtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzZXJzLnB1c2gobmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcykpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVCdWJibGVzKCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmxldmVsLm1hcChidWJibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1YmJsZS5zaXplID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA1LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA0LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMiwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjUwO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsLmZvckVhY2goKGxldmVsQnViYmxlLCBpZHgxKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlLCBpZHgyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeDEgPT09IGlkeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueCA9IGJ1YmJsZS54O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS55ID0gYnViYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURYID0gYnViYmxlLmJ1YmJsZURYO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWSA9IGJ1YmJsZS5idWJibGVEWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxldmVsLnNwbGljZShpZHgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJ1YmJsZS5zaXplICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSB9KTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogLWJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IC1idWJibGUuYnViYmxlRFl9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDbGVhcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgfVxuICAgIFxuICAgIGxldmVsQ2xlYXJlZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTEVWRUxET05FO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORyB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBkcm9wR2lmdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuZ2lmdHMucHVzaChuZXcgR2lmdCh4LCB5LCB0aGlzKSlcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBHaWZ0cyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZ2FtZSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRZID0gNTtcbiAgICAgICAgdGhpcy5yYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5yYW5kb21OdW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgKHRoaXMucmFuZG9tTnVtYmVyID49IDk1KTogLy9saXZlc1xuICAgICAgICAgICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCB0aGlzLnggKiB0aGlzLnksIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAodGhpcy5yYW5kb21OdW1iZXIgPj0gNzUpOiAvL2NvaW5TdGFja1xuICAgICAgICAgICAgICAgIGxldCBjb2luU3RhY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9jb2luX3N0YWNrLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGNvaW5TdGFjaywgdGhpcy54LCB0aGlzLnksIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnJhbmRvbU51bWJlciA+PSA1MDogLy8gZ29sZENvaW5cbiAgICAgICAgICAgICAgICBsZXQgZ29sZENvaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9nb2xkX2NvaW4ucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoZ29sZENvaW4sIHRoaXMueCwgdGhpcy55LCAxMDAsIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5yYW5kb21OdW1iZXIgPj0gMDogLy8gc2lsdmVyQ29pblxuICAgICAgICAgICAgICAgIGxldCBzaWx2ZXJDb2luID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvY29pX3N0YWNrLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHNpbHZlckNvaW4sIHRoaXMueCwgdGhpcy55LCAxMDAsIDEwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZFk7XG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmRZID49IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICB0aGlzLmRZID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmRlbGV0ZSA9IHRydWU7IH0sIDEwMDApOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaWZ0czsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJuXCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAyNTApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPiAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA8IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgTGFzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmJvYXJkLnBsYXllci5wb3NpdGlvbi54ICsgNzU7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAxMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGxhc2VyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxhc2VyLnNyYyA9ICdzcmMvaW1hZ2VzL2xhc2VyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShsYXNlciwgdGhpcy54LCB0aGlzLnksIDMwLCA5MCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRZO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXNlcjsiLCJjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLnNldHVwID0ge1xuICAgICAgICAgICAgMTogW3sgc2l6ZTogMiwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH1dLFxuICAgICAgICAgICAgMjogW3sgc2l6ZTogMywgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH1dLFxuICAgICAgICAgICAgMzogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH1dLFxuICAgICAgICAgICAgNDogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH1dLFxuICAgICAgICAgICAgNTogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH0sIHsgc2l6ZTogMywgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMzU7IFxuICAgICAgICB0aGlzLmhlaWdodCA9IDEzNTsgLy8gODBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgXG4gICAgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLnVwZGF0ZSgpO1xuICAgICAgICBnYW1lLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufSkiXSwic291cmNlUm9vdCI6IiJ9