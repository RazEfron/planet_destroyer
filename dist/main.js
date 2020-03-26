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
      this.ctx.fillText("Level ".concat(this.game.currentLevel), this.canvas.width / 2, 30); // this.game.unmute ? 
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
    this.lives = [1, 1, 1, 1, 1];
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
        this.lives = [1, 1, 1, 1, 1];
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
        this.ctx.fillText("Press Enter to start a new game", this.canvas.width / 2, this.canvas.height / 2 + 100);
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

        _this2.lasers.forEach(function (shot, laserIdx) {
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
            _this2.explodeBubble(bubble, idx, laserIdx);
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
        this.lives = [1, 1, 1, 1, 1];
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
    value: function explodeBubble(bubble, bubbleIdx, laserIdx) {
      var _this4 = this;

      var sound = new Sound("src/sounds/explosionSound.mp3");
      if (this.unmute) sound.play();
      this.score += 250; // this.lasers = [];

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
      this.level.splice(bubbleIdx, 1);

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
      this.lasers.splice(laserIdx, 1);
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
        }, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJMYXNlciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2FtZSIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY3VycmVudExldmVsIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJidWJibGVzIiwiZm9yRWFjaCIsImJ1YmJsZSIsImRyYXciLCJzaXplIiwiZHJhd0xpdmVzIiwibGFzZXJzIiwic2hvdCIsImRyYXdUZXh0IiwiZ2lmdHMiLCJnaWZ0IiwiZGVsZXRlIiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJpZHgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsInJlYWxDb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJidWJibGVYIiwiYnViYmxlWSIsIklucHV0SGFuZGxlciIsIkxldmVsIiwiR2lmdCIsIlNvdW5kIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1bm11dGUiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImhpZ2hTY29yZSIsImdldEl0ZW0iLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic291bmQiLCJyYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwbGF5IiwicHVzaCIsInNvbWUiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJJZHgiLCJsYXNlclBvaW50WCIsImxhc2VyUG9pbnRZIiwiZGlzdExhc2VyWCIsImRpc3RMYXNlclkiLCJkaXN0TGFzZXJEb3duWSIsImRpc3RMYXNlck1pZFkiLCJkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCIsImRpc3RhbmNlTGFzZXJEb3duUG9pbnQiLCJkaXN0YW5jZUxhc2VyTWlkUG9pbnQiLCJwb3AiLCJyZXN0YXJ0TGV2ZWwiLCJzdG9yYWdlZEhpZ2hTY29yZSIsInBhcnNlSW50IiwibGFzZXIiLCJtYXAiLCJidWJibGVJZHgiLCJsZXZlbEJ1YmJsZSIsImlkeDEiLCJpZHgyIiwibGV2ZWxDbGVhcmVkIiwiZHJvcEdpZnQiLCJzZXRUaW1lb3V0IiwiR2lmdHMiLCJkWSIsImZsb29yIiwicmFuZG9tIiwiY29pbkJhZyIsImNvaW5TdGFjayIsImdvbGRDb2luIiwibG9ja2VkIiwic2hvb3RpbmdTb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwiY2xvc2VQYXRoIiwibWF4U3BlZWQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJnZXRDb250ZXh0IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVTdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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LFlBQVEsR0FBR0UsU0FBWDtBQUNBcEssUUFBSSxDQUFDMEIsTUFBTDtBQUNBMUIsUUFBSSxDQUFDaUIsSUFBTDtBQUNBb0oseUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxHQUxPLENBQVI7O0FBTUFFLHVCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsQ0FkRCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5QbGF5ZXIgPSByZXF1aXJlKCcuLi9kaXN0L3BsYXllcicpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZHJhd0dhbWUgPSB0aGlzLmRyYXdHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQgPSB0aGlzLmRyYXdCYWNrZ3JvdW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy9idWJibGVcbiAgICAgICAgLy8gdGhpcy5idWJibGUgPSBuZXcgQnViYmxlKGNhbnZhcywgY3R4LCB7XG5cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgICAvL3BsYXllclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY2FudmFzLCBjdHgpO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWNrZ3JvdW5kLnNyYyA9IGBzcmMvaW1hZ2VzL2JhY2tncm91bmRfbGV2ZWxfJHt0aGlzLmdhbWUuY3VycmVudExldmVsfS5qcGdgXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmdhbWUuYnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUuZHJhdyhidWJibGUuc2l6ZSkpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dCgpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LmRyYXcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5nYW1lLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIGdpZnQudXBkYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goKGhlYXJ0Q291bnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCA2MjAgKyBpZHggKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTY29yZTogJHt0aGlzLmdhbWUuc2NvcmV9YCwgNDAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTGV2ZWwgJHt0aGlzLmdhbWUuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMzApO1xuICAgICAgICAvLyB0aGlzLmdhbWUudW5tdXRlID8gXG4gICAgfVxuXG4gICAgZHJhd0dpZnRzKCkge1xuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IFxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gb3B0aW9ucy5idWJibGVEWDtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IG9wdGlvbnMuYnViYmxlRFk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSBvcHRpb25zLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRpb25zLmJvdW5jZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgZHJhdyhzaXplKSB7XG4gICAgICAgIGxldCBidWJibGVcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZml2ZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZvdXJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10aHJlZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXR3b1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFlcbiAgICAgICAgLy8gbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwO1xuICAgICAgICAvLyBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtIHRoaXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5idWJibGVEWSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgfHwgdGhpcy55ICsgdGhpcy5idWJibGVEWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFkgPSAtdGhpcy5idWJibGVEWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgcmVhbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQ3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDI1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDE1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDEyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuTGV2ZWwgPSByZXF1aXJlKCcuL2xldmVscycpO1xuR2lmdCA9IHJlcXVpcmUoJy4vZ2lmdHMnKTtcblNvdW5kID0gcmVxdWlyZSgnLi9zb3VuZCcpO1xuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgTEVWRUxET05FOiA0XG59O1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLk1FTlU7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMgPSB0aGlzLmNyZWF0ZUJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlID0gdGhpcy5leHBsb2RlQnViYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzID0gWzEsMSwxLDEsMV07XG4gICAgICAgIHRoaXMubGFzZXJzID0gW11cbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcylcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5naWZ0cyA9IFtdXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIDApO1xuICAgICAgICB0aGlzLnVubXV0ZSA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzEsMSwxLDEsMV07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBFbnRlciB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTYwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgRW50ZXIgdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBIaWdoIFNjb3JlICR7aGlnaFNjb3JlfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTEVWRUxET05FKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTEVWRUwgJHt0aGlzLmN1cnJlbnRMZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQgfHwgXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTEVWRUxET05FKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLmJvYXJkLnVwZGF0ZUdhbWUoKTtcbiAgICAgICAgdGhpcy5naWZ0cy5mb3JFYWNoKChnaWZ0LCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmIChnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2lmdHMuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCB7IHBsYXllciB9ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgY29uc3QgcGxheWVyWCA9IHBsYXllci5wb3NpdGlvbi54ICsgMzU7XG4gICAgICAgIGNvbnN0IHBsYXllclkgPSBwbGF5ZXIucG9zaXRpb24ueSArIDY1O1xuICAgICAgICBjb25zdCByaWdodFBvaW50UGxheWVyWCA9IHBsYXllclggKyA3MztcbiAgICAgICAgbGV0IHNvdW5kXG5cbiAgICAgICAgdGhpcy5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQueSArIGdpZnQuaGVpZ2h0IC8gMiA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgaWYgKChnaWZ0LnggPj0gcGxheWVyWCAmJiBnaWZ0LnggPD0gcmlnaHRQb2ludFBsYXllclgpIHx8IChnaWZ0LnggKyBnaWZ0LndpZHRoID49IHBsYXllclggJiYgZ2lmdC54ICsgZ2lmdC53aWR0aCA8PSByaWdodFBvaW50UGxheWVyWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lmdC5kZWxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gOTgwICYmIHRoaXMubGl2ZXMubGVuZ3RoIDwgNSkgey8vbGl2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9oZWFydC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXMucHVzaCgxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA3NTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9jb2luU291bmQubXAzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gNTAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gNDUwKXsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ1YmJsZXMuc29tZSgoYnViYmxlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBidWJibGUud2lkdGggLyA0LjU7XG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJYID0gYnViYmxlLmJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclkgPSBidWJibGUuYnViYmxlWSArIHJhZGl1c1xuICAgICAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFggPSBwbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyByaWdodCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFggPSByaWdodFBvaW50UGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVJpZ2h0ID0gTWF0aC5oeXBvdChkaXN0UmlnaHRYLCBkaXN0UmlnaHRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIG1pZGRsZSBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VNaWRkbGUgPSBNYXRoLmh5cG90KGRpc3RNaWRYLCBkaXN0TWlkWSlcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDEgJiYgYnViYmxlQ2VudGVyWCA+PSBwbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclggPD0gcmlnaHRQb2ludFBsYXllclggJiYgYnViYmxlQ2VudGVyWSA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzZXJzLmZvckVhY2goKHNob3QsIGxhc2VySWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFggPSBzaG90LnggKyAxM1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWSA9IGxhc2VyUG9pbnRZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJEb3duWSA9IGxhc2VyUG9pbnRZICsgNzAgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlck1pZFkgPSBsYXNlclBvaW50WSArIDM1IC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyRG93blBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJEb3duWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlck1pZFkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGFzZXJVcHBlclBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyRG93blBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeCwgbGFzZXJJZHgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAgIFxuICAgIHRvZ2dsZVBhdXNlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5QQVVTRUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb3NlTGlmZSgpIHtcbiAgICAgICAgbGV0IHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9saWZlTG9zdFNvdW5kLm1wM1wiKTtcbiAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICByZXN0YXJ0TGV2ZWwoKXtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsZXQgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2dhbWVPdmVyU291bmQubXAzXCIpO1xuICAgICAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICAgICAgdGhpcy5saXZlcyA9IFsxLDEsMSwxLDFdXG4gICAgICAgICAgICBsZXQgc3RvcmFnZWRIaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IHBhcnNlSW50KHN0b3JhZ2VkSGlnaFNjb3JlKSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIGxldCBsYXNlciA9IG5ldyBMYXNlcih0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpXG4gICAgICAgICAgICAvLyBsYXNlci5zb3VuZC5wbGF5KClcbiAgICAgICAgICAgICAgICB0aGlzLmxhc2Vycy5wdXNoKGxhc2VyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQnViYmxlcygpIHtcbiAgICAgICAgdGhpcy5idWJibGVzID0gdGhpcy5sZXZlbC5tYXAoYnViYmxlID0+IHtcbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgNSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gICBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgNCwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAzLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDIsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXhwbG9kZUJ1YmJsZShidWJibGUsIGJ1YmJsZUlkeCwgbGFzZXJJZHgpIHtcbiAgICAgICAgbGV0IHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9leHBsb3Npb25Tb3VuZC5tcDNcIik7XG4gICAgICAgaWYgKHRoaXMudW5tdXRlKSBzb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjUwO1xuICAgICAgICAvLyB0aGlzLmxhc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsLmZvckVhY2goKGxldmVsQnViYmxlLCBpZHgxKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlLCBpZHgyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeDEgPT09IGlkeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueCA9IGJ1YmJsZS54O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS55ID0gYnViYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURYID0gYnViYmxlLmJ1YmJsZURYO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWSA9IGJ1YmJsZS5idWJibGVEWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxldmVsLnNwbGljZShidWJibGVJZHgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJ1YmJsZS5zaXplICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCArIDAuNSwgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSB9KTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogLWJ1YmJsZS5idWJibGVEWCAtIDAuNSwgYnViYmxlRFk6IC1idWJibGUuYnViYmxlRFl9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDbGVhcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wR2lmdChidWJibGUueCwgYnViYmxlLnkpXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgICAgICB0aGlzLmxhc2Vycy5zcGxpY2UobGFzZXJJZHgsIDEpO1xuICAgIH1cbiAgICBcbiAgICBsZXZlbENsZWFyZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsICs9IDE7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkxFVkVMRE9ORTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkcgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZHJvcEdpZnQoeCwgeSkge1xuICAgICAgICB0aGlzLmdpZnRzLnB1c2gobmV3IEdpZnQoeCwgeSwgdGhpcykpXG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIEdpZnRzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBnYW1lKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAwXG4gICAgfVxuXG4gICAgZHJhdygpIFxuICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA5ODApIHsvL2xpdmVzXG4gICAgICAgICAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGhlYXJ0LCB0aGlzLngsIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA4NTApIHsvL2NvaW5CYWdcbiAgICAgICAgICAgICAgICBsZXQgY29pbkJhZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvaW5CYWcuc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9iYWcucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwOTtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoY29pbkJhZywgdGhpcy54LCB0aGlzLnksIDYwLCA2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgIGxldCBjb2luU3RhY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb2luU3RhY2suc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9zdGFjay5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDMwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGNvaW5TdGFjaywgdGhpcy54LCB0aGlzLnksIDMwLCAzMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSAyMDApIHsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgIGxldCBnb2xkQ29pbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGdvbGRDb2luLnNyYyA9ICdzcmMvaW1hZ2VzL2dvbGRfY29pbi5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGdvbGRDb2luLCB0aGlzLngsIHRoaXMueSwgMzUsIDM1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5kWTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmRZID49IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZFkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZGVsZXRlID0gdHJ1ZTsgfSwgNTAwKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2lmdHM7IiwiU291bmQgPSByZXF1aXJlKCcuL3NvdW5kJyk7XG5cblxuY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zaG9vdGluZ1NvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9zaG9vdGluZy5tcDNcIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoMzkpOi8vcmlnaHQgYXJyb3dcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoMzcpOi8vbGVmdCBhcnJvd1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKDgwKTogLy9wXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKDEzKTogLy9lbnRlclxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICg3Nyk6IC8vZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS51bm11dGUgPyBnYW1lLnVubXV0ZSA9IGZhbHNlIDogZ2FtZS51bm11dGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoMzIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS51bm11dGUpIHRoaXMuc2hvb3RpbmdTb3VuZC5wbGF5KClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9ja2VkKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUuc2hvb3QoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubG9ja2VkID0gZmFsc2U7IH0sIDIwMCk7IFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoMzkpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPiAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoMzcpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPCAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDUzO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSA4MDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAxMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkWTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFzZXI7IiwiY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCA9IHtcbiAgICAgICAgICAgIDE6IFt7IHNpemU6IDIsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgMjogW3sgc2l6ZTogMywgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICAzOiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDQ6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgNTogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiAzLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfV0sXG4gICAgICAgICAgICA2OiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9XSxcbiAgICAgICAgICAgIDc6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogLTUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDQwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgODogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiAtNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gNDAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICA5OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAxMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSxcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDMwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDEwOiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAxMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSxcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDMwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IDUuMSB9XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMzU7IFxuICAgICAgICB0aGlzLmhlaWdodCA9IDEzNTsgXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMpIHtcblxuICAgICAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgICAgIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICAgIH1cbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZCIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==