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
      background.src = "src/images/background_level_".concat(this.game.currentLevel, ".jpg");
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
      this.game.gifts.forEach(function (gift) {
        if (!gift.delete) {
          gift.draw();
        }
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
      this.game.gifts.forEach(function (gift) {
        if (!gift.delete) {
          gift.update();
        }
      });
    }
  }, {
    key: "drawLives",
    value: function drawLives() {
      var _this = this;

      var heart = new Image();
      heart.src = 'src/images/heart.png';
      this.game.lives.forEach(function (heartCount, idx) {
        _this.ctx.drawImage(heart, 620 + idx * 40, 0, 100, 100);
      });
    }
  }, {
    key: "drawText",
    value: function drawText() {
      this.ctx.font = "30px Arial";
      this.ctx.textAlign = "start";
      this.ctx.fillText("Score: ".concat(this.game.score), 40, 50);
      this.ctx.font = "20px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Level ".concat(this.game.currentLevel), this.canvas.width / 2, 30);
    }
  }, {
    key: "drawGifts",
    value: function drawGifts() {}
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
Gift = __webpack_require__(/*! ./gifts */ "./dist/gifts.js");
Sound = __webpack_require__(/*! ./sound */ "./dist/sound.js");
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
    this.lives = [1, 1, 1];
    this.lasers = [];
    this.levels = new Level(this);
    this.currentLevel = 1;
    this.level = this.levels.setup[this.currentLevel];
    this.createBubbles();
    this.board = new Board(this.canvas, this.ctx, this);
    this.score = 0;
    this.gifts = [];
    localStorage.setItem("highscore", 0);
    this.unmute = true;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      if (this.gameState === GAMESTATE.MENU) {
        this.gameState = GAMESTATE.RUNNING;
      }

      if (this.gameState === GAMESTATE.GAMEOVER) {
        this.createBubbles();
        this.lives = [1, 1, 1];
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
        this.ctx.fillText("Press Enter to start a new game", this.canvas.width / 2, this.canvas.height / 2);
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
        this.ctx.fillText("GAME OVER", this.canvas.width / 2, 160);
        this.ctx.fillText("Press N to start a new game", this.canvas.width / 2, this.canvas.height / 2 + 100);
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center";
        var highScore = localStorage.getItem("highscore");
        this.ctx.fillText("High Score ".concat(highScore), this.canvas.width / 2, this.canvas.height / 2);
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
      var _this = this;

      if (this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.GAMEOVER || this.gameState === GAMESTATE.MENU || this.gameState === GAMESTATE.LEVELDONE) {
        return;
      }

      this.collision();
      this.gameOver();
      this.board.updateGame();
      this.gifts.forEach(function (gift, idx) {
        if (gift.delete) {
          _this.gifts.splice(idx, 1);
        }
      });
    }
  }, {
    key: "collision",
    value: function collision() {
      var _this2 = this;

      var player = this.board.player;
      var playerX = player.position.x + 35;
      var playerY = player.position.y + 65;
      var rightPointPlayerX = playerX + 73;
      var sound;
      this.gifts.forEach(function (gift) {
        if (gift.y + gift.height / 2 >= playerY) {
          if (gift.x >= playerX && gift.x <= rightPointPlayerX || gift.x + gift.width >= playerX && gift.x + gift.width <= rightPointPlayerX) {
            gift.delete = true;
            debugger;

            if (gift.randomNumber >= 980 && _this2.lives.length < 5) {
              //lives
              sound = new Sound("src/sounds/heart.mp3");
              if (_this2.unmute) sound.play();

              _this2.lives.push(1);
            } else if (gift.randomNumber >= 850) {
              //coinBag
              sound = new Sound("src/sounds/coinSound.mp3");
              if (_this2.unmute) sound.play();
              _this2.score += 750;
            } else if (gift.randomNumber >= 650) {
              // coinStack
              sound = new Sound("src/sounds/coinSound.mp3");
              if (_this2.unmute) sound.play();
              _this2.score += 500;
            } else if (gift.randomNumber >= 450) {
              // goldCoin
              sound = new Sound("src/sounds/coinSound.mp3");
              if (_this2.unmute) sound.play();
              _this2.score += 100;
            }
          }
        }
      });
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
          _this2.loseLife();

          return true;
        }

        if (bubble.size === 1 && bubbleCenterX >= playerX && bubbleCenterX <= rightPointPlayerX && bubbleCenterY >= playerY) {
          _this2.loseLife();

          return true;
        }

        _this2.lasers.forEach(function (shot) {
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
            _this2.explodeBubble(bubble, idx);
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
      var sound = new Sound("src/sounds/lifeLostSound.mp3");
      if (this.unmute) sound.play();
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
        var sound = new Sound("src/sounds/gameOverSound.mp3");
        if (this.unmute) sound.play();
        this.gameState = GAMESTATE.GAMEOVER;
        this.currentLevel = 1;
        this.lives = [1, 1, 1];
        var storagedHighScore = localStorage.getItem("highscore"); // debugger

        if (this.score > parseInt(storagedHighScore)) {
          localStorage.setItem("highscore", this.score);
        }

        this.score = 0;
        this.restartLevel();
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      if (this.gameState === GAMESTATE.RUNNING) {
        var laser = new Laser(this.canvas, this.ctx, this); // laser.sound.play()

        this.lasers.push(laser);
      }
    }
  }, {
    key: "createBubbles",
    value: function createBubbles() {
      var _this3 = this;

      this.bubbles = this.level.map(function (bubble) {
        if (bubble.size === 5) {
          return new Bubble(_this3.canvas, _this3.ctx, 5, {
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
          return new Bubble(_this3.canvas, _this3.ctx, 4, {
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
          return new Bubble(_this3.canvas, _this3.ctx, 3, {
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
          return new Bubble(_this3.canvas, _this3.ctx, 2, {
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
          return new Bubble(_this3.canvas, _this3.ctx, 1, {
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
      var _this4 = this;

      var sound = new Sound("src/sounds/explosionSound.mp3");
      if (this.unmute) sound.play();
      this.score += 250;
      this.lasers = [];
      this.level.forEach(function (levelBubble, idx1) {
        _this4.bubbles.forEach(function (bubble, idx2) {
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
          bubbleDX: bubble.bubbleDX + 0.5,
          bubbleDY: bubble.bubbleDY
        });
        this.level.push({
          size: bubble.size - 1,
          x: bubble.x,
          y: bubble.y,
          bubbleDX: -bubble.bubbleDX - 0.5,
          bubbleDY: -bubble.bubbleDY
        });
      }

      if (this.level.length === 0) {
        this.levelCleared();
      }

      this.dropGift(bubble.x, bubble.y);
      this.createBubbles();
    }
  }, {
    key: "levelCleared",
    value: function levelCleared() {
      var _this5 = this;

      this.currentLevel += 1;
      this.restartLevel();
      this.gameState = GAMESTATE.LEVELDONE;
      setTimeout(function () {
        _this5.gameState = GAMESTATE.RUNNING;
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
    this.randomNumber = Math.floor(Math.random() * 1000);
    this.game = game;
    this.delete = false;
    this.height = 0;
    this.width = 0;
  }

  _createClass(Gifts, [{
    key: "draw",
    value: function draw() {
      if (this.randomNumber >= 980) {
        //lives
        var heart = new Image();
        heart.src = 'src/images/heart.png';
        this.height = 110;
        this.width = 100;
        this.game.ctx.drawImage(heart, this.x, this.y, 100, 100);
      } else if (this.randomNumber >= 850) {
        //coinBag
        var coinBag = new Image();
        coinBag.src = 'src/images/coin_bag.png';
        this.height = 109;
        this.width = 60;
        this.game.ctx.drawImage(coinBag, this.x, this.y, 60, 60);
      } else if (this.randomNumber >= 650) {
        // coinStack
        var coinStack = new Image();
        coinStack.src = 'src/images/coin_stack.png';
        this.height = 50;
        this.width = 30;
        this.game.ctx.drawImage(coinStack, this.x, this.y, 30, 30);
      } else if (this.randomNumber >= 200) {
        // goldCoin
        var goldCoin = new Image();
        goldCoin.src = 'src/images/gold_coin.png';
        this.height = 60;
        this.width = 35;
        this.game.ctx.drawImage(goldCoin, this.x, this.y, 35, 35);
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
        }, 500);
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
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Sound = __webpack_require__(/*! ./sound */ "./dist/sound.js");

var InputHandler = function InputHandler(game) {
  var _this = this;

  _classCallCheck(this, InputHandler);

  this.locked = false;
  this.shootingSound = new Sound("src/sounds/shooting.mp3");
  document.addEventListener("keydown", function (e) {
    debugger;

    switch (e.keyCode) {
      case 39:
        //right arrow
        game.board.player.moveRight();
        break;

      case 37:
        //left arrow
        game.board.player.moveLeft();
        break;

      case 80:
        //p
        game.togglePause();
        break;

      case 13:
        //enter
        game.start();
        break;

      case 77:
        //enter
        game.unmute ? game.unmute = false : game.unmute = true;
        break;

      case 32:
        if (game.unmute) _this.shootingSound.play();
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
    switch (e.keyCode) {
      case 39:
        if (game.board.player.speed > 0) game.board.player.stop();
        break;

      case 37:
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
    this.x = this.game.board.player.position.x + 53;
    this.y = this.canvas.height - 80;
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
      bubbleDY: 5.1
    }],
    2: [{
      size: 3,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }],
    3: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }],
    4: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }],
    5: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }, {
      size: 3,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }],
    6: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }, {
      size: 5,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }],
    7: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: -5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 400,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }],
    8: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: -5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 400,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }],
    9: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 100,
      y: 40,
      bubbleDX: -5,
      bubbleDY: 5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 300,
      y: 40,
      bubbleDX: -5,
      bubbleDY: 5.1
    }],
    10: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 5,
      x: game.canvas.width / 2 - 100,
      y: 40,
      bubbleDX: -5,
      bubbleDY: 5.1
    }, {
      size: 5,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 300,
      y: 40,
      bubbleDX: -5,
      bubbleDY: 5.1
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
    this.height = 135;
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

/***/ "./dist/sound.js":
/*!***********************!*\
  !*** ./dist/sound.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound = /*#__PURE__*/function () {
  function Sound(src) {
    _classCallCheck(this, Sound);

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  _createClass(Sound, [{
    key: "play",
    value: function play() {
      this.sound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.sound.pause();
    }
  }]);

  return Sound;
}();

module.exports = Sound;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJMYXNlciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2FtZSIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY3VycmVudExldmVsIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJidWJibGVzIiwiZm9yRWFjaCIsImJ1YmJsZSIsImRyYXciLCJzaXplIiwiZHJhd0xpdmVzIiwibGFzZXJzIiwic2hvdCIsImRyYXdUZXh0IiwiZ2lmdHMiLCJnaWZ0IiwiZGVsZXRlIiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJpZHgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsInJlYWxDb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJidWJibGVYIiwiYnViYmxlWSIsIklucHV0SGFuZGxlciIsIkxldmVsIiwiR2lmdCIsIlNvdW5kIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1bm11dGUiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImhpZ2hTY29yZSIsImdldEl0ZW0iLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic291bmQiLCJyYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwbGF5IiwicHVzaCIsInNvbWUiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJQb2ludFgiLCJsYXNlclBvaW50WSIsImRpc3RMYXNlclgiLCJkaXN0TGFzZXJZIiwiZGlzdExhc2VyRG93blkiLCJkaXN0TGFzZXJNaWRZIiwiZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQiLCJkaXN0YW5jZUxhc2VyRG93blBvaW50IiwiZGlzdGFuY2VMYXNlck1pZFBvaW50IiwicG9wIiwicmVzdGFydExldmVsIiwic3RvcmFnZWRIaWdoU2NvcmUiLCJwYXJzZUludCIsImxhc2VyIiwibWFwIiwibGV2ZWxCdWJibGUiLCJpZHgxIiwiaWR4MiIsImxldmVsQ2xlYXJlZCIsImRyb3BHaWZ0Iiwic2V0VGltZW91dCIsIkdpZnRzIiwiZFkiLCJmbG9vciIsInJhbmRvbSIsImNvaW5CYWciLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsImxvY2tlZCIsInNob290aW5nU291bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgLy8gdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4LCB7XG5cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9IGBzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfJHt0aGlzLmdhbWUuY3VycmVudExldmVsfS5qcGdgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmdhbWUuYnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUuZHJhdyhidWJibGUuc2l6ZSkpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dCgpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LmRyYXcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5nYW1lLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIGdpZnQudXBkYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goKGhlYXJ0Q291bnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCA2MjAgKyBpZHggKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTY29yZTogJHt0aGlzLmdhbWUuc2NvcmV9YCwgNDAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTGV2ZWwgJHt0aGlzLmdhbWUuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMzApO1xuICAgIH1cblxuICAgIGRyYXdHaWZ0cygpIHtcblxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCBcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggXG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IG9wdGlvbnMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSBvcHRpb25zLmJ1YmJsZURZO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBvcHRpb25zLmdyYXZpdHk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gb3B0aW9ucy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIHRoaXMuYm91bmNlID0gb3B0aW9ucy5ib3VuY2U7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIGRyYXcoc2l6ZSkge1xuICAgICAgICBsZXQgYnViYmxlXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZpdmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1mb3VyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtdGhyZWVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10d29cIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZXG4gICAgICAgIC8vIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgIC8vICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gdGhpcy5oZWlnaHQgLyAxMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLSB0aGlzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuYnViYmxlRFkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIHx8IHRoaXMueSArIHRoaXMuYnViYmxlRFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURZID0gLXRoaXMuYnViYmxlRFk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIHJlYWxDb29yZGluYXRlcygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0NztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0NztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAyNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxMjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcbkxldmVsID0gcmVxdWlyZSgnLi9sZXZlbHMnKTtcbkdpZnQgPSByZXF1aXJlKCcuL2dpZnRzJyk7XG5Tb3VuZCA9IHJlcXVpcmUoJy4vc291bmQnKTtcbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIExFVkVMRE9ORTogNFxufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzID0gdGhpcy5jcmVhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZSA9IHRoaXMuZXhwbG9kZUJ1YmJsZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFsxLCAxLCAxXTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKVxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKClcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdpZnRzID0gW11cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgMCk7XG4gICAgICAgIHRoaXMudW5tdXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKClcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMSwgMSwgMV07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBFbnRlciB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTYwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEhpZ2ggU2NvcmUgJHtoaWdoU2NvcmV9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMRVZFTCAke3RoaXMuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goKGdpZnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0cy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBjb25zdCBwbGF5ZXJYID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgY29uc3QgcGxheWVyWSA9IHBsYXllci5wb3NpdGlvbi55ICsgNjU7XG4gICAgICAgIGNvbnN0IHJpZ2h0UG9pbnRQbGF5ZXJYID0gcGxheWVyWCArIDczO1xuICAgICAgICBsZXQgc291bmRcblxuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoZ2lmdC55ICsgZ2lmdC5oZWlnaHQgLyAyID49IHBsYXllclkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKGdpZnQueCA+PSBwbGF5ZXJYICYmIGdpZnQueCA8PSByaWdodFBvaW50UGxheWVyWCkgfHwgKGdpZnQueCArIGdpZnQud2lkdGggPj0gcGxheWVyWCAmJiBnaWZ0LnggKyBnaWZ0LndpZHRoIDw9IHJpZ2h0UG9pbnRQbGF5ZXJYKSkge1xuICAgICAgICAgICAgICAgICAgICBnaWZ0LmRlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA5ODAgJiYgdGhpcy5saXZlcy5sZW5ndGggPCA1KSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2hlYXJ0Lm1wM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlcy5wdXNoKDEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gODUwKSB7Ly9jb2luQmFnXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvY29pblNvdW5kLm1wM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5tdXRlKSBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDc1MFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA0NTApey8vIGdvbGRDb2luXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvY29pblNvdW5kLm1wM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5tdXRlKSBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYnViYmxlcy5zb21lKChidWJibGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGJ1YmJsZS53aWR0aCAvIDQuNTtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclggPSBidWJibGUuYnViYmxlWCArIHJhZGl1c1xuICAgICAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZS5idWJibGVZICsgcmFkaXVzXG4gICAgICAgICAgICAvL2NoZWtpbmcgbGVmdCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdExlZnRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxlZnQgPSBNYXRoLmh5cG90KGRpc3RMZWZ0WCwgZGlzdExlZnRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdFJpZ2h0WCA9IHJpZ2h0UG9pbnRQbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgICAgICAvL2NoZWtpbmcgbWlkZGxlIG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdE1pZFggPSAocGxheWVyWCArIDY3LjUpIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZU1pZGRsZSA9IE1hdGguaHlwb3QoZGlzdE1pZFgsIGRpc3RNaWRZKVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGVmdCA8PSByYWRpdXMgfHwgZGlzdGFuY2VSaWdodCA8PSByYWRpdXMgfHwgZGlzdGFuY2VNaWRkbGUgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gMSAmJiBidWJibGVDZW50ZXJYID49IHBsYXllclggJiYgYnViYmxlQ2VudGVyWCA8PSByaWdodFBvaW50UGxheWVyWCAmJiBidWJibGVDZW50ZXJZID49IHBsYXllclkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NoZWtpbmcgbGFzZXIgYW5kIGJ1YmJsZSBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WCA9IHNob3QueCArIDEzXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFkgPSBzaG90LnkgKyA3XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWCA9IGxhc2VyUG9pbnRYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJZID0gbGFzZXJQb2ludFkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlckRvd25ZID0gbGFzZXJQb2ludFkgKyA3MCAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyTWlkWSA9IGxhc2VyUG9pbnRZICsgMzUgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJVcHBlclBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlckRvd25ZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyTWlkWSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICBcbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIGxldCBzb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvbGlmZUxvc3RTb3VuZC5tcDNcIik7XG4gICAgICAgaWYgKHRoaXMudW5tdXRlKSBzb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMubGl2ZXMucG9wKCk7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgfVxuXG4gICAgcmVzdGFydExldmVsKCl7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVsKHRoaXMpO1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9nYW1lT3ZlclNvdW5kLm1wM1wiKTtcbiAgICAgICAgICAgaWYgKHRoaXMudW5tdXRlKSBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMSwgMSwgMV1cbiAgICAgICAgICAgIGxldCBzdG9yYWdlZEhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID4gcGFyc2VJbnQoc3RvcmFnZWRIaWdoU2NvcmUpKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgbGV0IGxhc2VyID0gbmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcylcbiAgICAgICAgICAgIC8vIGxhc2VyLnNvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzZXJzLnB1c2gobGFzZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVCdWJibGVzKCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmxldmVsLm1hcChidWJibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1YmJsZS5zaXplID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA1LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA0LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMiwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KSB7XG4gICAgICAgIGxldCBzb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvZXhwbG9zaW9uU291bmQubXAzXCIpO1xuICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnNjb3JlICs9IDI1MDtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3JFYWNoKChsZXZlbEJ1YmJsZSwgaWR4MSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idWJibGVzLmZvckVhY2goKGJ1YmJsZSwgaWR4MikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHgxID09PSBpZHgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnggPSBidWJibGUueDtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueSA9IGJ1YmJsZS55O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWCA9IGJ1YmJsZS5idWJibGVEWDtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFkgPSBidWJibGUuYnViYmxlRFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5sZXZlbC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChidWJibGUuc2l6ZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCwgeTogYnViYmxlLnksIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFggKyAwLjUsIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFkgfSk7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IC1idWJibGUuYnViYmxlRFggLSAwLjUsIGJ1YmJsZURZOiAtYnViYmxlLmJ1YmJsZURZfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsQ2xlYXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcEdpZnQoYnViYmxlLngsIGJ1YmJsZS55KVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICB9XG4gICAgXG4gICAgbGV2ZWxDbGVhcmVkKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCArPSAxO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5MRVZFTERPTkU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGRyb3BHaWZ0KHgsIHkpIHtcbiAgICAgICAgdGhpcy5naWZ0cy5wdXNoKG5ldyBHaWZ0KHgsIHksIHRoaXMpKVxuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBHaWZ0cyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZ2FtZSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRZID0gNTtcbiAgICAgICAgdGhpcy5yYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kZWxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMFxuICAgIH1cblxuICAgIGRyYXcoKSBcbiAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gOTgwKSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShoZWFydCwgdGhpcy54LCB0aGlzLnksIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gODUwKSB7Ly9jb2luQmFnXG4gICAgICAgICAgICAgICAgbGV0IGNvaW5CYWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb2luQmFnLnNyYyA9ICdzcmMvaW1hZ2VzL2NvaW5fYmFnLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDYwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGNvaW5CYWcsIHRoaXMueCwgdGhpcy55LCA2MCwgNjApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICBsZXQgY29pblN0YWNrID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29pblN0YWNrLnNyYyA9ICdzcmMvaW1hZ2VzL2NvaW5fc3RhY2sucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShjb2luU3RhY2ssIHRoaXMueCwgdGhpcy55LCAzMCwgMzApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gMjAwKSB7Ly8gZ29sZENvaW5cbiAgICAgICAgICAgICAgICBsZXQgZ29sZENvaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBnb2xkQ29pbi5zcmMgPSAnc3JjL2ltYWdlcy9nb2xkX2NvaW4ucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDYwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzNTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShnb2xkQ29pbiwgdGhpcy54LCB0aGlzLnksIDM1LCAzNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZFk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5kWSA+PSB0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRZID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmRlbGV0ZSA9IHRydWU7IH0sIDUwMCk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdpZnRzOyIsIlNvdW5kID0gcmVxdWlyZSgnLi9zb3VuZCcpO1xuXG5cbmNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hvb3RpbmdTb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvc2hvb3RpbmcubXAzXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKDM5KTovL3JpZ2h0IGFycm93XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKDM3KTovL2xlZnQgYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZUxlZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICg4MCk6IC8vcFxuICAgICAgICAgICAgICAgICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICgxMyk6IC8vZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoNzcpOiAvL2VudGVyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudW5tdXRlID8gZ2FtZS51bm11dGUgPSBmYWxzZSA6IGdhbWUudW5tdXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKDMyKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUudW5tdXRlKSB0aGlzLnNob290aW5nU291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAyNTApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKDM5KTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKDM3KTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkIDwgMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0SGFuZGxlcjsiLCJjbGFzcyBMYXNlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuYm9hcmQucGxheWVyLnBvc2l0aW9uLnggKyA1MztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gODA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0dXAgPSB7XG4gICAgICAgICAgICAxOiBbeyBzaXplOiAyLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgMzogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICA0OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDU6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMywgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH1dLFxuICAgICAgICAgICAgNjogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfV0sXG4gICAgICAgICAgICA3OiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IC01LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSA0MDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDg6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogLTUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDQwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgOTogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMTAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH0sXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAzMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICAxMDogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMTAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH0sXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAzMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiA1LjEgfV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTM1OyBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzU7IFxuXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyLnNyYyA9ICdzcmMvaW1hZ2VzL3BsYXllci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocGxheWVyLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtMzBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGggKyAzMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjbGFzcyBTb3VuZCB7XG4gICAgY29uc3RydWN0b3Ioc3JjKSB7XG5cbiAgICAgICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc2V0QXR0cmlidXRlKFwiY29udHJvbHNcIiwgXCJub25lXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnNvdW5kKTtcbiAgICB9XG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5wYXVzZSgpO1xuICAgICAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmQiLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgpO1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICBcbiAgICBnYW1lTG9vcCA9ICh0aW1lU3RhbXApID0+IHtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICAgIGdhbWUudXBkYXRlKCk7XG4gICAgICAgIGdhbWUuZHJhdygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=