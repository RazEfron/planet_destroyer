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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJMYXNlciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2FtZSIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY3VycmVudExldmVsIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJidWJibGVzIiwiZm9yRWFjaCIsImJ1YmJsZSIsImRyYXciLCJzaXplIiwiZHJhd0xpdmVzIiwibGFzZXJzIiwic2hvdCIsImRyYXdUZXh0IiwiZ2lmdHMiLCJnaWZ0IiwiZGVsZXRlIiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJpZHgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsInJlYWxDb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJidWJibGVYIiwiYnViYmxlWSIsIklucHV0SGFuZGxlciIsIkxldmVsIiwiR2lmdCIsIlNvdW5kIiwiR0FNRVNUQVRFIiwiUEFVU0VEIiwiUlVOTklORyIsIk1FTlUiLCJHQU1FT1ZFUiIsIkxFVkVMRE9ORSIsIkdhbWUiLCJnYW1lU3RhdGUiLCJoYW5kbGVJbnB1dCIsInN0YXJ0IiwiY29sbGlzaW9uIiwidG9nZ2xlUGF1c2UiLCJsb3NlTGlmZSIsImdhbWVPdmVyIiwic2hvb3QiLCJjcmVhdGVCdWJibGVzIiwiZXhwbG9kZUJ1YmJsZSIsImxldmVscyIsImxldmVsIiwic2V0dXAiLCJib2FyZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ1bm11dGUiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImhpZ2hTY29yZSIsImdldEl0ZW0iLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwic291bmQiLCJyYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwbGF5IiwicHVzaCIsInNvbWUiLCJyYWRpdXMiLCJidWJibGVDZW50ZXJYIiwiYnViYmxlQ2VudGVyWSIsImRpc3RMZWZ0WCIsImRpc3RMZWZ0WSIsImRpc3RhbmNlTGVmdCIsImh5cG90IiwiZGlzdFJpZ2h0WCIsImRpc3RSaWdodFkiLCJkaXN0YW5jZVJpZ2h0IiwiZGlzdE1pZFgiLCJkaXN0TWlkWSIsImRpc3RhbmNlTWlkZGxlIiwibGFzZXJQb2ludFgiLCJsYXNlclBvaW50WSIsImRpc3RMYXNlclgiLCJkaXN0TGFzZXJZIiwiZGlzdExhc2VyRG93blkiLCJkaXN0TGFzZXJNaWRZIiwiZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQiLCJkaXN0YW5jZUxhc2VyRG93blBvaW50IiwiZGlzdGFuY2VMYXNlck1pZFBvaW50IiwicG9wIiwicmVzdGFydExldmVsIiwic3RvcmFnZWRIaWdoU2NvcmUiLCJwYXJzZUludCIsImxhc2VyIiwibWFwIiwibGV2ZWxCdWJibGUiLCJpZHgxIiwiaWR4MiIsImxldmVsQ2xlYXJlZCIsImRyb3BHaWZ0Iiwic2V0VGltZW91dCIsIkdpZnRzIiwiZFkiLCJmbG9vciIsInJhbmRvbSIsImNvaW5CYWciLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsImxvY2tlZCIsInNob290aW5nU291bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInBhdXNlIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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YWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIC8vIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCwge1xuXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBgc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsXyR7dGhpcy5nYW1lLmN1cnJlbnRMZXZlbH0uanBnYFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLmRyYXcoYnViYmxlLnNpemUpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoIWdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgZ2lmdC5kcmF3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LnVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdMaXZlcygpIHtcbiAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgIHRoaXMuZ2FtZS5saXZlcy5mb3JFYWNoKChoZWFydENvdW50LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgNjIwICsgaWR4ICogNDAsIDAsIDEwMCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgU2NvcmU6ICR7dGhpcy5nYW1lLnNjb3JlfWAsIDQwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYExldmVsICR7dGhpcy5nYW1lLmN1cnJlbnRMZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDMwKTtcbiAgICAgICAgLy8gdGhpcy5nYW1lLnVubXV0ZSA/IFxuICAgIH1cblxuICAgIGRyYXdHaWZ0cygpIHtcblxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCBcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggXG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IG9wdGlvbnMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSBvcHRpb25zLmJ1YmJsZURZO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBvcHRpb25zLmdyYXZpdHk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gb3B0aW9ucy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIHRoaXMuYm91bmNlID0gb3B0aW9ucy5ib3VuY2U7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIGRyYXcoc2l6ZSkge1xuICAgICAgICBsZXQgYnViYmxlXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZpdmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1mb3VyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtdGhyZWVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10d29cIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZXG4gICAgICAgIC8vIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgIC8vICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gdGhpcy5oZWlnaHQgLyAxMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLSB0aGlzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuYnViYmxlRFkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIHx8IHRoaXMueSArIHRoaXMuYnViYmxlRFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURZID0gLXRoaXMuYnViYmxlRFk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIHJlYWxDb29yZGluYXRlcygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0NztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0NztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAyNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxMjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcbkxldmVsID0gcmVxdWlyZSgnLi9sZXZlbHMnKTtcbkdpZnQgPSByZXF1aXJlKCcuL2dpZnRzJyk7XG5Tb3VuZCA9IHJlcXVpcmUoJy4vc291bmQnKTtcbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIExFVkVMRE9ORTogNFxufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzID0gdGhpcy5jcmVhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZSA9IHRoaXMuZXhwbG9kZUJ1YmJsZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFsxLCAxLCAxXTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKVxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKClcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdpZnRzID0gW11cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgMCk7XG4gICAgICAgIHRoaXMudW5tdXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUikge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKClcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMSwgMSwgMV07XG4gICAgICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZHJhd0dhbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBFbnRlciB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTYwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgRW50ZXIgdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBIaWdoIFNjb3JlICR7aGlnaFNjb3JlfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTEVWRUxET05FKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTEVWRUwgJHt0aGlzLmN1cnJlbnRMZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5QQVVTRUQgfHwgXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTEVWRUxET05FKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gXG5cbiAgICAgICAgdGhpcy5jb2xsaXNpb24oKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLmJvYXJkLnVwZGF0ZUdhbWUoKTtcbiAgICAgICAgdGhpcy5naWZ0cy5mb3JFYWNoKChnaWZ0LCBpZHgpID0+IHtcbiAgICAgICAgICAgIGlmIChnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2lmdHMuc3BsaWNlKGlkeCwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgY29sbGlzaW9uKCkge1xuICAgICAgICBjb25zdCB7IHBsYXllciB9ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgY29uc3QgcGxheWVyWCA9IHBsYXllci5wb3NpdGlvbi54ICsgMzU7XG4gICAgICAgIGNvbnN0IHBsYXllclkgPSBwbGF5ZXIucG9zaXRpb24ueSArIDY1O1xuICAgICAgICBjb25zdCByaWdodFBvaW50UGxheWVyWCA9IHBsYXllclggKyA3MztcbiAgICAgICAgbGV0IHNvdW5kXG5cbiAgICAgICAgdGhpcy5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQueSArIGdpZnQuaGVpZ2h0IC8gMiA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgaWYgKChnaWZ0LnggPj0gcGxheWVyWCAmJiBnaWZ0LnggPD0gcmlnaHRQb2ludFBsYXllclgpIHx8IChnaWZ0LnggKyBnaWZ0LndpZHRoID49IHBsYXllclggJiYgZ2lmdC54ICsgZ2lmdC53aWR0aCA8PSByaWdodFBvaW50UGxheWVyWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2lmdC5kZWxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gOTgwICYmIHRoaXMubGl2ZXMubGVuZ3RoIDwgNSkgey8vbGl2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9oZWFydC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXMucHVzaCgxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA3NTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdW5kID0gbmV3IFNvdW5kKFwic3JjL3NvdW5kcy9jb2luU291bmQubXAzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gNTAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gNDUwKXsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgICAgICAgICAgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2NvaW5Tb3VuZC5tcDNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ1YmJsZXMuc29tZSgoYnViYmxlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBidWJibGUud2lkdGggLyA0LjU7XG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJYID0gYnViYmxlLmJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclkgPSBidWJibGUuYnViYmxlWSArIHJhZGl1c1xuICAgICAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFggPSBwbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyByaWdodCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFggPSByaWdodFBvaW50UGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVJpZ2h0ID0gTWF0aC5oeXBvdChkaXN0UmlnaHRYLCBkaXN0UmlnaHRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIG1pZGRsZSBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VNaWRkbGUgPSBNYXRoLmh5cG90KGRpc3RNaWRYLCBkaXN0TWlkWSlcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDEgJiYgYnViYmxlQ2VudGVyWCA+PSBwbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclggPD0gcmlnaHRQb2ludFBsYXllclggJiYgYnViYmxlQ2VudGVyWSA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzZXJzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFggPSBzaG90LnggKyAxM1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWSA9IGxhc2VyUG9pbnRZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJEb3duWSA9IGxhc2VyUG9pbnRZICsgNzAgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlck1pZFkgPSBsYXNlclBvaW50WSArIDM1IC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyRG93blBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJEb3duWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlck1pZFkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGFzZXJVcHBlclBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyRG93blBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICBsZXQgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2xpZmVMb3N0U291bmQubXAzXCIpO1xuICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICB0aGlzLmxpdmVzLnBvcCgpO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIH1cblxuICAgIHJlc3RhcnRMZXZlbCgpe1xuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxldCBzb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvZ2FtZU92ZXJTb3VuZC5tcDNcIik7XG4gICAgICAgICAgIGlmICh0aGlzLnVubXV0ZSkgc291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdXG4gICAgICAgICAgICBsZXQgc3RvcmFnZWRIaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA+IHBhcnNlSW50KHN0b3JhZ2VkSGlnaFNjb3JlKSkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaHNjb3JlXCIsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIGxldCBsYXNlciA9IG5ldyBMYXNlcih0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpXG4gICAgICAgICAgICAvLyBsYXNlci5zb3VuZC5wbGF5KClcbiAgICAgICAgICAgICAgICB0aGlzLmxhc2Vycy5wdXNoKGxhc2VyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQnViYmxlcygpIHtcbiAgICAgICAgdGhpcy5idWJibGVzID0gdGhpcy5sZXZlbC5tYXAoYnViYmxlID0+IHtcbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgNSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gICBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgNCwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAzLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDIsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMSwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzUsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeCkge1xuICAgICAgICBsZXQgc291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL2V4cGxvc2lvblNvdW5kLm1wM1wiKTtcbiAgICAgICBpZiAodGhpcy51bm11dGUpIHNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyNTA7XG4gICAgICAgIHRoaXMubGFzZXJzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWwuZm9yRWFjaCgobGV2ZWxCdWJibGUsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5mb3JFYWNoKChidWJibGUsIGlkeDIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4MSA9PT0gaWR4Mikge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS54ID0gYnViYmxlLng7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnkgPSBidWJibGUueTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFggPSBidWJibGUuYnViYmxlRFg7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURZID0gYnViYmxlLmJ1YmJsZURZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubGV2ZWwuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYnViYmxlLnNpemUgIT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYICsgMC41LCBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZIH0pO1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCwgeTogYnViYmxlLnksIGJ1YmJsZURYOiAtYnViYmxlLmJ1YmJsZURYIC0gMC41LCBidWJibGVEWTogLWJ1YmJsZS5idWJibGVEWX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbENsZWFyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3BHaWZ0KGJ1YmJsZS54LCBidWJibGUueSlcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgfVxuICAgIFxuICAgIGxldmVsQ2xlYXJlZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTEVWRUxET05FO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORyB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBkcm9wR2lmdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuZ2lmdHMucHVzaChuZXcgR2lmdCh4LCB5LCB0aGlzKSlcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgR2lmdHMge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGdhbWUpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kWSA9IDU7XG4gICAgICAgIHRoaXMucmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZGVsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDBcbiAgICB9XG5cbiAgICBkcmF3KCkgXG4gICAge1xuICAgICAgICAgICAgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDk4MCkgey8vbGl2ZXNcbiAgICAgICAgICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTEwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIHRoaXMueCwgdGhpcy55LCAxMDAsIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgIGxldCBjb2luQmFnID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29pbkJhZy5zcmMgPSAnc3JjL2ltYWdlcy9jb2luX2JhZy5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA5O1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShjb2luQmFnLCB0aGlzLngsIHRoaXMueSwgNjAsIDYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gNjUwKSB7Ly8gY29pblN0YWNrXG4gICAgICAgICAgICAgICAgbGV0IGNvaW5TdGFjayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvaW5TdGFjay5zcmMgPSAnc3JjL2ltYWdlcy9jb2luX3N0YWNrLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoY29pblN0YWNrLCB0aGlzLngsIHRoaXMueSwgMzAsIDMwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDIwMCkgey8vIGdvbGRDb2luXG4gICAgICAgICAgICAgICAgbGV0IGdvbGRDb2luID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgZ29sZENvaW4uc3JjID0gJ3NyYy9pbWFnZXMvZ29sZF9jb2luLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoZ29sZENvaW4sIHRoaXMueCwgdGhpcy55LCAzNSwgMzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRZO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuZFkgPj0gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kWSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5kZWxldGUgPSB0cnVlOyB9LCA1MDApOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaWZ0czsiLCJTb3VuZCA9IHJlcXVpcmUoJy4vc291bmQnKTtcblxuXG5jbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnNob290aW5nU291bmQgPSBuZXcgU291bmQoXCJzcmMvc291bmRzL3Nob290aW5nLm1wM1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICgzOSk6Ly9yaWdodCBhcnJvd1xuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICgzNyk6Ly9sZWZ0IGFycm93XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoODApOiAvL3BcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoMTMpOiAvL2VudGVyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKDc3KTogLy9lbnRlclxuICAgICAgICAgICAgICAgICAgICBnYW1lLnVubXV0ZSA/IGdhbWUudW5tdXRlID0gZmFsc2UgOiBnYW1lLnVubXV0ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlICgzMik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLnVubXV0ZSkgdGhpcy5zaG9vdGluZ1NvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMjUwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICgzOSk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA+IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICgzNyk6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA8IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgTGFzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmJvYXJkLnBsYXllci5wb3NpdGlvbi54ICsgNTM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDgwO1xuICAgICAgICB0aGlzLnNwZWVkWSA9IDEwO1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IGxhc2VyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxhc2VyLnNyYyA9ICdzcmMvaW1hZ2VzL2xhc2VyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShsYXNlciwgdGhpcy54LCB0aGlzLnksIDMwLCA5MCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRZO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMYXNlcjsiLCJjbGFzcyBMZXZlbCB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgICAgICB0aGlzLnNldHVwID0ge1xuICAgICAgICAgICAgMTogW3sgc2l6ZTogMiwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICAyOiBbeyBzaXplOiAzLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDM6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgNDogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICA1OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9XSxcbiAgICAgICAgICAgIDY6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNS4xIH1dLFxuICAgICAgICAgICAgNzogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogLTUsIGJ1YmJsZURZOiAtNS4xIH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gNDAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1LjEgfV0sXG4gICAgICAgICAgICA4OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IC01LjEgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSA0MDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUuMSB9XSxcbiAgICAgICAgICAgIDk6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDEwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9LFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMzAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogNS4xIH1dLFxuICAgICAgICAgICAgMTA6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDEwMCwgeTogNDAsIGJ1YmJsZURYOiAtNSwgYnViYmxlRFk6IDUuMSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUuMSB9LFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMzAwLCB5OiA0MCwgYnViYmxlRFg6IC01LCBidWJibGVEWTogNS4xIH1dXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDEzNTsgXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTM1OyBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYykge1xuXG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvdW5kIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgXG4gICAgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLnVwZGF0ZSgpO1xuICAgICAgICBnYW1lLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufSkiXSwic291cmNlUm9vdCI6IiJ9