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
    this.score = 0; // this.highScore = this.score;

    this.gifts = [];
    localStorage.setItem("highscore", 0);
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
              sound.play();

              _this2.lives.push(1);
            } else if (gift.randomNumber >= 850) {
              //coinBag
              sound = new Sound("src/sounds/coinSound.mp3");
              sound.play();
              _this2.score += 750;
            } else if (gift.randomNumber >= 650) {
              // coinStack
              sound = new Sound("src/sounds/coinSound.mp3");
              sound.play();
              _this2.score += 500;
            } else if (gift.randomNumber >= 450) {
              // goldCoin
              sound = new Sound("src/sounds/coinSound.mp3");
              sound.play();
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
      sound.play();
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
        sound.play();
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
      sound.play();
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
    // debugger
    switch (e.keyCode) {
      case 39:
        game.board.player.moveRight();
        break;

      case 37:
        game.board.player.moveLeft();
        break;

      case 80:
        game.togglePause();
        break;

      case 78:
        game.start();
        break;

      case 32:
        _this.shootingSound.play();

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
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
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
      bubbleDX: 5,
      bubbleDY: -5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 400,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
    }],
    9: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5.1
    }, {
      size: 4,
      x: game.canvas.width / 2 - 100,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5.1
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
      bubbleDX: 5,
      bubbleDY: -5.1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJMYXNlciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2FtZSIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY3VycmVudExldmVsIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJidWJibGVzIiwiZm9yRWFjaCIsImJ1YmJsZSIsImRyYXciLCJzaXplIiwiZHJhd0xpdmVzIiwibGFzZXJzIiwic2hvdCIsImRyYXdUZXh0IiwiZ2lmdHMiLCJnaWZ0IiwiZGVsZXRlIiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJpZHgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsInJlYWxDb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJidWJibGVYIiwiYnViYmxlWSIsIklucHV0SGFuZGxlciIsIkxldmVsIiwiR2lmdCIsIlNvdW5kIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImhpZ2hTY29yZSIsImdldEl0ZW0iLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic291bmQiLCJyYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwbGF5IiwicHVzaCIsInNvbWUiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJQb2ludFgiLCJsYXNlclBvaW50WSIsImRpc3RMYXNlclgiLCJkaXN0TGFzZXJZIiwiZGlzdExhc2VyRG93blkiLCJkaXN0TGFzZXJNaWRZIiwiZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQiLCJkaXN0YW5jZUxhc2VyRG93blBvaW50IiwiZGlzdGFuY2VMYXNlck1pZFBvaW50IiwicG9wIiwicmVzdGFydExldmVsIiwic3RvcmFnZWRIaWdoU2NvcmUiLCJwYXJzZUludCIsImxhc2VyIiwibWFwIiwibGV2ZWxCdWJibGUiLCJpZHgxIiwiaWR4MiIsImxldmVsQ2xlYXJlZCIsImRyb3BHaWZ0Iiwic2V0VGltZW91dCIsIkdpZnRzIiwiZFkiLCJmbG9vciIsInJhbmRvbSIsImNvaW5CYWciLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsImxvY2tlZCIsInNob290aW5nU291bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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OzsyQkFDVTtBQUNILFdBQUtBLEtBQUwsQ0FBV0csSUFBWDtBQUNIOzs7MkJBQ007QUFDSCxXQUFLSCxLQUFMLENBQVdpRSxLQUFYO0FBQ0g7Ozs7OztBQUdUMUgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCcUIsS0FBakIsQzs7Ozs7Ozs7Ozs7QUNsQkFPLElBQUksR0FBR3RFLG1CQUFPLENBQUMsb0NBQUQsQ0FBZDtBQUVBb0QsUUFBUSxDQUFDK0YsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTS9JLE1BQU0sR0FBR2dELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTWhELEdBQUcsR0FBR0QsTUFBTSxDQUFDZ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTTlKLElBQUksR0FBRyxJQUFJZ0UsSUFBSixDQUFTbEUsTUFBVCxFQUFpQkMsR0FBakIsQ0FBYjtBQUNBLE1BQUlnSyxRQUFRLEdBQUcsQ0FBZjs7QUFHQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQUNDLFNBQUQsRUFBZTtBQUN0QkYsWUFBUSxHQUFHRSxTQUFYO0FBQ0FqSyxRQUFJLENBQUMwQixNQUFMO0FBQ0ExQixRQUFJLENBQUNpQixJQUFMO0FBQ0FpSix5QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILEdBTE8sQ0FBUjs7QUFNQUUsdUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxDQWRELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICAvLyB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgsIHtcblxuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gYHNyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF8ke3RoaXMuZ2FtZS5jdXJyZW50TGV2ZWx9LmpwZ2BcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB9XG5cbiAgICBkcmF3R2FtZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS5kcmF3KGJ1YmJsZS5zaXplKSk7XG4gICAgICAgIHRoaXMucGxheWVyLmRyYXcoKTtcbiAgICAgICAgdGhpcy5kcmF3TGl2ZXMoKTtcbiAgICAgICAgdGhpcy5nYW1lLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4gc2hvdC5kcmF3KCkpO1xuICAgICAgICB0aGlzLmRyYXdUZXh0KCk7XG4gICAgICAgIHRoaXMuZ2FtZS5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIGdpZnQuZHJhdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmdhbWUuYnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUudXBkYXRlKCkpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5nYW1lLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoIWdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgZ2lmdC51cGRhdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3TGl2ZXMoKSB7XG4gICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICB0aGlzLmdhbWUubGl2ZXMuZm9yRWFjaCgoaGVhcnRDb3VudCwgaWR4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIDYyMCArIGlkeCAqIDQwLCAwLCAxMDAsIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdUZXh0KCkge1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFNjb3JlOiAke3RoaXMuZ2FtZS5zY29yZX1gLCA0MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMZXZlbCAke3RoaXMuZ2FtZS5jdXJyZW50TGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAzMCk7XG4gICAgfVxuXG4gICAgZHJhd0dpZnRzKCkge1xuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IFxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gb3B0aW9ucy5idWJibGVEWDtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IG9wdGlvbnMuYnViYmxlRFk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSBvcHRpb25zLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRpb25zLmJvdW5jZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgZHJhdyhzaXplKSB7XG4gICAgICAgIGxldCBidWJibGVcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZml2ZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZvdXJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10aHJlZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXR3b1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFlcbiAgICAgICAgLy8gbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwO1xuICAgICAgICAvLyBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtIHRoaXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5idWJibGVEWSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgfHwgdGhpcy55ICsgdGhpcy5idWJibGVEWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFkgPSAtdGhpcy5idWJibGVEWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgcmVhbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQ3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDI1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDE1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDEyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuTGV2ZWwgPSByZXF1aXJlKCcuL2xldmVscycpO1xuR2lmdCA9IHJlcXVpcmUoJy4vZ2lmdHMnKTtcblNvdW5kID0gcmVxdWlyZSgnLi9zb3VuZCcpO1xuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgTEVWRUxET05FOiA0XG59O1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLk1FTlU7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMgPSB0aGlzLmNyZWF0ZUJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlID0gdGhpcy5leHBsb2RlQnViYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdXG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVsKHRoaXMpXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMVxuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICB0aGlzLmdpZnRzID0gW11cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgMCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTYwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEhpZ2ggU2NvcmUgJHtoaWdoU2NvcmV9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMRVZFTCAke3RoaXMuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goKGdpZnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0cy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBjb25zdCBwbGF5ZXJYID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgY29uc3QgcGxheWVyWSA9IHBsYXllci5wb3NpdGlvbi55ICsgNjU7XG4gICAgICAgIGNvbnN0IHJpZ2h0UG9pbnRQbGF5ZXJYID0gcGxheWVyWCArIDczO1xuICAgICAgICBsZXQgc291bmRcblxuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoZ2lmdC55ICsgZ2lmdC5oZWlnaHQgLyAyID49IHBsYXllclkpIHtcbiAgICAgICAgICAgICAgICBpZiAoKGdpZnQueCA+PSBwbGF5ZXJYICYmIGdpZnQueCA8PSByaWdodFBvaW50UGxheWVyWCkgfHwgKGdpZnQueCArIGdpZnQud2lkdGggPj0gcGxheWVyWCAmJiBnaWZ0LnggKyBnaWZ0LndpZHRoIDw9IHJpZ2h0UG9pbnRQbGF5ZXJYKSkge1xuICAgICAgICAgICAgICAgICAgICBnaWZ0LmRlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA5ODAgJiYgdGhpcy5saXZlcy5sZW5ndGggPCA1KSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2hlYXJ0Lm1wM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXMucHVzaCgxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDc1MFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDUwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDQ1MCl7Ly8gZ29sZENvaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9jb2luU291bmQubXAzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ1YmJsZXMuc29tZSgoYnViYmxlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBidWJibGUud2lkdGggLyA0LjU7XG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJYID0gYnViYmxlLmJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclkgPSBidWJibGUuYnViYmxlWSArIHJhZGl1c1xuICAgICAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFggPSBwbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyByaWdodCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFggPSByaWdodFBvaW50UGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVJpZ2h0ID0gTWF0aC5oeXBvdChkaXN0UmlnaHRYLCBkaXN0UmlnaHRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIG1pZGRsZSBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VNaWRkbGUgPSBNYXRoLmh5cG90KGRpc3RNaWRYLCBkaXN0TWlkWSlcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDEgJiYgYnViYmxlQ2VudGVyWCA+PSBwbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclggPD0gcmlnaHRQb2ludFBsYXllclggJiYgYnViYmxlQ2VudGVyWSA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzZXJzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFggPSBzaG90LnggKyAxM1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWSA9IGxhc2VyUG9pbnRZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJEb3duWSA9IGxhc2VyUG9pbnRZICsgNzAgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlck1pZFkgPSBsYXNlclBvaW50WSArIDM1IC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyRG93blBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJEb3duWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlck1pZFkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGFzZXJVcHBlclBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyRG93blBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICBsZXQgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2xpZmVMb3N0U291bmQubXAzXCIpO1xuICAgICAgICBzb3VuZC5wbGF5KCk7XG4gICAgICAgIHRoaXMubGl2ZXMucG9wKCk7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgfVxuXG4gICAgcmVzdGFydExldmVsKCl7XG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVsKHRoaXMpO1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGV0IHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9nYW1lT3ZlclNvdW5kLm1wM1wiKTtcbiAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICAgICAgdGhpcy5saXZlcyA9IFsxLCAxLCAxXVxuICAgICAgICAgICAgbGV0IHN0b3JhZ2VkSGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoc2NvcmVcIik7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiBwYXJzZUludChzdG9yYWdlZEhpZ2hTY29yZSkpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hzY29yZVwiLCB0aGlzLnNjb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICBsZXQgbGFzZXIgPSBuZXcgTGFzZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKVxuICAgICAgICAgICAgLy8gbGFzZXIuc291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXNlcnMucHVzaChsYXNlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUJ1YmJsZXMoKSB7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHRoaXMubGV2ZWwubWFwKGJ1YmJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDUsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMywge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAyLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGV4cGxvZGVCdWJibGUoYnViYmxlLCBpZHgpIHtcbiAgICAgICAgbGV0IHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9leHBsb3Npb25Tb3VuZC5tcDNcIilcbiAgICAgICAgc291bmQucGxheSgpO1xuICAgICAgICB0aGlzLnNjb3JlICs9IDI1MDtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5sZXZlbC5mb3JFYWNoKChsZXZlbEJ1YmJsZSwgaWR4MSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idWJibGVzLmZvckVhY2goKGJ1YmJsZSwgaWR4MikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpZHgxID09PSBpZHgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnggPSBidWJibGUueDtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueSA9IGJ1YmJsZS55O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWCA9IGJ1YmJsZS5idWJibGVEWDtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFkgPSBidWJibGUuYnViYmxlRFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5sZXZlbC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChidWJibGUuc2l6ZSAhPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCwgeTogYnViYmxlLnksIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFkgfSk7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IC1idWJibGUuYnViYmxlRFgsIGJ1YmJsZURZOiAtYnViYmxlLmJ1YmJsZURZfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGV2ZWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsQ2xlYXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcEdpZnQoYnViYmxlLngsIGJ1YmJsZS55KVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICB9XG4gICAgXG4gICAgbGV2ZWxDbGVhcmVkKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCArPSAxO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5MRVZFTERPTkU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGRyb3BHaWZ0KHgsIHkpIHtcbiAgICAgICAgdGhpcy5naWZ0cy5wdXNoKG5ldyBHaWZ0KHgsIHksIHRoaXMpKVxuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsiLCJjbGFzcyBHaWZ0cyB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgZ2FtZSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRZID0gNTtcbiAgICAgICAgdGhpcy5yYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kZWxldGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMFxuICAgIH1cblxuICAgIGRyYXcoKSBcbiAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gOTgwKSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgIGxldCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMTA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShoZWFydCwgdGhpcy54LCB0aGlzLnksIDEwMCwgMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gODUwKSB7Ly9jb2luQmFnXG4gICAgICAgICAgICAgICAgbGV0IGNvaW5CYWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb2luQmFnLnNyYyA9ICdzcmMvaW1hZ2VzL2NvaW5fYmFnLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDk7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDYwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGNvaW5CYWcsIHRoaXMueCwgdGhpcy55LCA2MCwgNjApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICBsZXQgY29pblN0YWNrID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29pblN0YWNrLnNyYyA9ICdzcmMvaW1hZ2VzL2NvaW5fc3RhY2sucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzMDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShjb2luU3RhY2ssIHRoaXMueCwgdGhpcy55LCAzMCwgMzApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gMjAwKSB7Ly8gZ29sZENvaW5cbiAgICAgICAgICAgICAgICBsZXQgZ29sZENvaW4gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBnb2xkQ29pbi5zcmMgPSAnc3JjL2ltYWdlcy9nb2xkX2NvaW4ucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDYwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAzNTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShnb2xkQ29pbiwgdGhpcy54LCB0aGlzLnksIDM1LCAzNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZFk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5kWSA+PSB0aGlzLmdhbWUuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRZID0gMDtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmRlbGV0ZSA9IHRydWU7IH0sIDUwMCk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdpZnRzOyIsIlNvdW5kID0gcmVxdWlyZSgnLi9zb3VuZCcpO1xuXG5cbmNsYXNzIElucHV0SGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuc2hvb3RpbmdTb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvc2hvb3RpbmcubXAzXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKDM5KTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoMzcpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKDgwKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKDc4KTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoMzIpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290aW5nU291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAyNTApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKDM5KTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKDM3KTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkIDwgMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0SGFuZGxlcjsiLCJjbGFzcyBMYXNlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmdhbWUuYm9hcmQucGxheWVyLnBvc2l0aW9uLnggKyA1MztcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gODA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0dXAgPSB7XG4gICAgICAgICAgICAxOiBbeyBzaXplOiAyLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgMzogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICA0OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDU6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogMywgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH1dLFxuICAgICAgICAgICAgNjogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfV0sXG4gICAgICAgICAgICA3OiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9XSxcbiAgICAgICAgICAgIDg6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gNDAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH1dLFxuICAgICAgICAgICAgOTogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAxMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01LjEgfSxcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDMwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMzU7IFxuICAgICAgICB0aGlzLmhlaWdodCA9IDEzNTsgXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNvdW5kIHtcbiAgICBjb25zdHJ1Y3RvcihzcmMpIHtcblxuICAgICAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNyYyA9IHNyYztcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJwcmVsb2FkXCIsIFwiYXV0b1wiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIik7XG4gICAgICAgIHRoaXMuc291bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc291bmQpO1xuICAgIH1cbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XG4gICAgICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZCIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==