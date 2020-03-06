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
          //coinBag
          var coinBag = new Image();
          heart.src = 'src/images/coin_bag.png';
          this.ctx.drawImage(coinBag, this.x, this.y, 100, 100);
          break;

        case this.randomNumber >= 50:
          // coinStack
          var coinStack = new Image();
          heart.src = 'src/images/coin_stack.png';
          this.ctx.drawImage(coinStack, this.x, this.y, 100, 100);
          break;

        case this.randomNumber >= 0:
          // goldCoin
          var goldCoin = new Image();
          heart.src = 'src/images/gold_coin.png';
          this.ctx.drawImage(goldCoin, this.x, this.y, 100, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWJibGUiLCJyZXF1aXJlIiwiUGxheWVyIiwiTGFzZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImdhbWUiLCJkcmF3R2FtZSIsImJpbmQiLCJkcmF3QmFja2dyb3VuZCIsInBsYXllciIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiYnViYmxlcyIsImZvckVhY2giLCJidWJibGUiLCJkcmF3Iiwic2l6ZSIsImRyYXdMaXZlcyIsImxhc2VycyIsInNob3QiLCJkcmF3VGV4dCIsInVwZGF0ZSIsImhlYXJ0IiwibGl2ZXMiLCJoZWFydENvdW50IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic2NvcmUiLCJjdXJyZW50TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJyZWFsQ29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJJbnB1dEhhbmRsZXIiLCJMZXZlbCIsIkdpZnRzIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImdpZnRzIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGVHYW1lIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic29tZSIsImlkeCIsInJhZGl1cyIsImJ1YmJsZUNlbnRlclgiLCJidWJibGVDZW50ZXJZIiwiZGlzdExlZnRYIiwiZGlzdExlZnRZIiwiZGlzdGFuY2VMZWZ0IiwiaHlwb3QiLCJkaXN0UmlnaHRYIiwiZGlzdFJpZ2h0WSIsImRpc3RhbmNlUmlnaHQiLCJkaXN0TWlkWCIsImRpc3RNaWRZIiwiZGlzdGFuY2VNaWRkbGUiLCJsYXNlclBvaW50WCIsImxhc2VyUG9pbnRZIiwiZGlzdExhc2VyWCIsImRpc3RMYXNlclkiLCJkaXN0TGFzZXJEb3duWSIsImRpc3RMYXNlck1pZFkiLCJkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCIsImRpc3RhbmNlTGFzZXJEb3duUG9pbnQiLCJkaXN0YW5jZUxhc2VyTWlkUG9pbnQiLCJjb25zb2xlIiwibG9nIiwicG9wIiwicmVzdGFydExldmVsIiwibGVuZ3RoIiwicHVzaCIsIm1hcCIsImxldmVsQnViYmxlIiwiaWR4MSIsImlkeDIiLCJzcGxpY2UiLCJsZXZlbENsZWFyZWQiLCJzZXRUaW1lb3V0IiwiR2lmdCIsImRZIiwicmFuZG9tTnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJkZWxldGUiLCJjb2luQmFnIiwiY29pblN0YWNrIiwiZ29sZENvaW4iLCJsb2NrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwibGFzZXIiLCJjbG9zZVBhdGgiLCJtYXhTcGVlZCIsImdldENvbnRleHQiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZVN0YW1wIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUFoQjtBQUNBQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsd0NBQUQsQ0FBaEI7QUFDQUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLHNDQUFELENBQWY7O0lBRU1HLEs7QUFDRixpQkFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQUE7O0FBQzNCLFNBQUtGLE1B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TUFBVCxFQUFpQkMsR0FBakIsQ0FBYjtBQUNBLE1BQUkrSSxRQUFRLEdBQUcsQ0FBZjs7QUFHQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQUNDLFNBQUQsRUFBZTtBQUN0QkYsWUFBUSxHQUFHRSxTQUFYO0FBQ0FoSixRQUFJLENBQUNzQixNQUFMO0FBQ0F0QixRQUFJLENBQUNnQixJQUFMO0FBQ0FpSSx5QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILEdBTE8sQ0FBUjs7QUFNQUUsdUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxDQWRELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICAvLyB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgsIHtcblxuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLmRyYXcoYnViYmxlLnNpemUpKVxuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKVxuICAgICAgICB0aGlzLmRyYXdUZXh0KClcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLnVwZGF0ZSgpKVxuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKVxuICAgIH1cblxuICAgIGRyYXdMaXZlcygpIHtcbiAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgIHRoaXMuZ2FtZS5saXZlcy5mb3JFYWNoKGhlYXJ0Q291bnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCA2MjAgKyBoZWFydENvdW50ICogNDAsIDAsIDEwMCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgSGlnaCBTY29yZTogJHt0aGlzLmdhbWUuc2NvcmV9YCwgNDAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTGV2ZWwgJHt0aGlzLmdhbWUuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMzApXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IFxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gb3B0aW9ucy5idWJibGVEWDtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IG9wdGlvbnMuYnViYmxlRFk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSBvcHRpb25zLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRpb25zLmJvdW5jZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgZHJhdyhzaXplKSB7XG4gICAgICAgIGxldCBidWJibGVcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZml2ZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZvdXJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10aHJlZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXR3b1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFlcbiAgICAgICAgLy8gbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwO1xuICAgICAgICAvLyBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtIHRoaXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5idWJibGVEWSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgfHwgdGhpcy55ICsgdGhpcy5idWJibGVEWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFkgPSAtdGhpcy5idWJibGVEWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgcmVhbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQ3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDI1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDE1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDEyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuTGV2ZWwgPSByZXF1aXJlKCcuL2xldmVscycpO1xuR2lmdHMgPSByZXF1aXJlKCcuL2dpZnRzJyk7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIExFVkVMRE9ORTogNFxufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzID0gdGhpcy5jcmVhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZSA9IHRoaXMuZXhwbG9kZUJ1YmJsZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFs0LCAzLCAyLCAxLCAwXTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKVxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDFcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKVxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5naWZ0cyA9IFtdXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkxFVkVMRE9ORSkge1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYExFVkVMICR7dGhpcy5jdXJyZW50TGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEIHx8IFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUiB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkxFVkVMRE9ORSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgeyBwbGF5ZXIgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgNzM7XG5cbiAgICAgICAgdGhpcy5idWJibGVzLnNvbWUoKGJ1YmJsZSwgaWR4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFkaXVzID0gYnViYmxlLndpZHRoIC8gNC41O1xuICAgICAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWCA9IGJ1YmJsZS5idWJibGVYICsgcmFkaXVzXG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJZID0gYnViYmxlLmJ1YmJsZVkgKyByYWRpdXNcbiAgICAgICAgICAgIC8vY2hla2luZyBsZWZ0IG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdExlZnRYID0gcGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGVmdCA9IE1hdGguaHlwb3QoZGlzdExlZnRYLCBkaXN0TGVmdFkpXG4gICAgICAgICAgICAvL2NoZWtpbmcgcmlnaHQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRYID0gcmlnaHRQb2ludFBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdFJpZ2h0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VSaWdodCA9IE1hdGguaHlwb3QoZGlzdFJpZ2h0WCwgZGlzdFJpZ2h0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyBtaWRkbGUgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWCA9IChwbGF5ZXJYICsgNjcuNSkgLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdE1pZFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTWlkZGxlID0gTWF0aC5oeXBvdChkaXN0TWlkWCwgZGlzdE1pZFkpXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2VMZWZ0IDw9IHJhZGl1cyB8fCBkaXN0YW5jZVJpZ2h0IDw9IHJhZGl1cyB8fCBkaXN0YW5jZU1pZGRsZSA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJ1YmJsZS5zaXplID09PSAxICYmIGJ1YmJsZUNlbnRlclggPj0gcGxheWVyWCAmJiBidWJibGVDZW50ZXJYIDw9IHJpZ2h0UG9pbnRQbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclkgPj0gcGxheWVyWSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4ge1xuICAgICAgICAgICAgICAgIC8vY2hla2luZyBsYXNlciBhbmQgYnViYmxlIGNvbGxpc2lvblxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRYID0gc2hvdC54ICsgMTNcbiAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WSA9IHNob3QueSArIDdcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJYID0gbGFzZXJQb2ludFggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclkgPSBsYXNlclBvaW50WSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyRG93blkgPSBsYXNlclBvaW50WSArIDcwIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJNaWRZID0gbGFzZXJQb2ludFkgKyAzNSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlclkpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMYXNlckRvd25Qb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyRG93blkpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMYXNlck1pZFBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJNaWRZKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA8PSByYWRpdXMgfHwgZGlzdGFuY2VMYXNlckRvd25Qb2ludCA8PSByYWRpdXMgfHwgZGlzdGFuY2VMYXNlck1pZFBvaW50IDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2xsaXNpb25cIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICBcbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzLnBvcCgpO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIH1cblxuICAgIHJlc3RhcnRMZXZlbCgpe1xuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydExldmVsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXNlcnMucHVzaChuZXcgTGFzZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUJ1YmJsZXMoKSB7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHRoaXMubGV2ZWwubWFwKGJ1YmJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDUsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMywge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAyLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGV4cGxvZGVCdWJibGUoYnViYmxlLCBpZHgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyNTA7XG4gICAgICAgIHRoaXMubGFzZXJzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWwuZm9yRWFjaCgobGV2ZWxCdWJibGUsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5mb3JFYWNoKChidWJibGUsIGlkeDIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4MSA9PT0gaWR4Mikge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS54ID0gYnViYmxlLng7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnkgPSBidWJibGUueTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFggPSBidWJibGUuYnViYmxlRFg7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURZID0gYnViYmxlLmJ1YmJsZURZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubGV2ZWwuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYnViYmxlLnNpemUgIT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLCBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZIH0pO1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCwgeTogYnViYmxlLnksIGJ1YmJsZURYOiAtYnViYmxlLmJ1YmJsZURYLCBidWJibGVEWTogLWJ1YmJsZS5idWJibGVEWX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbENsZWFyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICB9XG4gICAgXG4gICAgbGV2ZWxDbGVhcmVkKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCArPSAxO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5MRVZFTERPTkU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGRyb3BHaWZ0KHgsIHkpIHtcbiAgICAgICAgdGhpcy5naWZ0cy5wdXNoKG5ldyBHaWZ0KHgsIHksIHRoaXMpKVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIEdpZnRzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBnYW1lKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZGVsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnJhbmRvbU51bWJlcikge1xuICAgICAgICAgICAgY2FzZSAodGhpcy5yYW5kb21OdW1iZXIgPj0gOTUpOiAvL2xpdmVzXG4gICAgICAgICAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIHRoaXMueCAqIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICh0aGlzLnJhbmRvbU51bWJlciA+PSA3NSk6IC8vY29pbkJhZ1xuICAgICAgICAgICAgICAgIGxldCBjb2luQmFnID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9iYWcucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY29pbkJhZywgdGhpcy54LCB0aGlzLnksIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnJhbmRvbU51bWJlciA+PSA1MDogLy8gY29pblN0YWNrXG4gICAgICAgICAgICAgICAgbGV0IGNvaW5TdGFjayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2NvaW5fc3RhY2sucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoY29pblN0YWNrLCB0aGlzLngsIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMucmFuZG9tTnVtYmVyID49IDA6IC8vIGdvbGRDb2luXG4gICAgICAgICAgICAgICAgbGV0IGdvbGRDb2luID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvZ29sZF9jb2luLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGdvbGRDb2luLCB0aGlzLngsIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRZO1xuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5kWSA+PSB0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgdGhpcy5kWSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5kZWxldGUgPSB0cnVlOyB9LCAxMDAwKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2lmdHM7IiwiY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwicFwiKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiblwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMjUwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPCAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDc1O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkWTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFzZXI7IiwiY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCA9IHtcbiAgICAgICAgICAgIDE6IFt7IHNpemU6IDIsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDM6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDQ6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDU6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9LCB7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTM1OyBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzU7IC8vIDgwXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==