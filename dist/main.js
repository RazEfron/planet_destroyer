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
    this.gameState = GAMESTATE.GAMEOVER;
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
    this.currentLevel = 6;
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
      this.gifts.forEach(function (gift) {
        if (gift.y + gift.height / 2 >= playerY) {
          if (gift.x >= playerX && gift.x <= rightPointPlayerX || gift.x + gift.width >= playerX && gift.x + gift.width <= rightPointPlayerX) {
            console.log('collision');
            gift.delete = true;

            if (gift.randomNumber >= 980 && _this2.lives.length < 5) {
              //lives
              _this2.lives.push(1);
            } else if (gift.randomNumber >= 850) {
              //coinBag
              _this2.score += 750;
            } else if (gift.randomNumber >= 650) {
              // coinStack
              _this2.score += 500;
            } else if (gift.randomNumber >= 450) {
              // goldCoin
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
        this.gameState = GAMESTATE.GAMEOVER;
        this.currentLevel = 1;
        this.lives = [1, 1, 1];
        var storagedHighScore = localStorage.getItem("highscore");
        debugger;

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
  this.sound = new Sound("src/sounds/shooting.mp3");
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
        _this.sound.play();

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
      size: 5,
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
    }],
    6: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }, {
      size: 5,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }],
    7: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }],
    8: [{
      size: 5,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 400,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }],
    9: [{
      size: 4,
      x: game.canvas.width / 2,
      y: 40,
      bubbleDX: 5,
      bubbleDY: 5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 100,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 200,
      y: 40,
      bubbleDX: 5,
      bubbleDY: -5
    }, {
      size: 4,
      x: game.canvas.width / 2 - 300,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL2Rpc3Qvc291bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1YmJsZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJMYXNlciIsIkJvYXJkIiwiY2FudmFzIiwiY3R4IiwiZ2FtZSIsImRyYXdHYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwicGxheWVyIiwiYmFja2dyb3VuZCIsIkltYWdlIiwic3JjIiwiY3VycmVudExldmVsIiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJiZWdpblBhdGgiLCJjbGVhclJlY3QiLCJidWJibGVzIiwiZm9yRWFjaCIsImJ1YmJsZSIsImRyYXciLCJzaXplIiwiZHJhd0xpdmVzIiwibGFzZXJzIiwic2hvdCIsImRyYXdUZXh0IiwiZ2lmdHMiLCJnaWZ0IiwiZGVsZXRlIiwidXBkYXRlIiwiaGVhcnQiLCJsaXZlcyIsImhlYXJ0Q291bnQiLCJpZHgiLCJmb250IiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJzY29yZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJvcHRpb25zIiwieCIsInkiLCJidWJibGVEWCIsImJ1YmJsZURZIiwiZ3Jhdml0eSIsImdyYXZpdHlTcGVlZCIsImJvdW5jZSIsInJlYWxDb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJhcmMiLCJNYXRoIiwiUEkiLCJidWJibGVYIiwiYnViYmxlWSIsIklucHV0SGFuZGxlciIsIkxldmVsIiwiR2lmdCIsIkdBTUVTVEFURSIsIlBBVVNFRCIsIlJVTk5JTkciLCJNRU5VIiwiR0FNRU9WRVIiLCJMRVZFTERPTkUiLCJHYW1lIiwiZ2FtZVN0YXRlIiwiaGFuZGxlSW5wdXQiLCJzdGFydCIsImNvbGxpc2lvbiIsInRvZ2dsZVBhdXNlIiwibG9zZUxpZmUiLCJnYW1lT3ZlciIsInNob290IiwiY3JlYXRlQnViYmxlcyIsImV4cGxvZGVCdWJibGUiLCJsZXZlbHMiLCJsZXZlbCIsInNldHVwIiwiYm9hcmQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJoaWdoU2NvcmUiLCJnZXRJdGVtIiwidXBkYXRlR2FtZSIsInNwbGljZSIsInBsYXllclgiLCJwb3NpdGlvbiIsInBsYXllclkiLCJyaWdodFBvaW50UGxheWVyWCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21OdW1iZXIiLCJsZW5ndGgiLCJwdXNoIiwic29tZSIsInJhZGl1cyIsImJ1YmJsZUNlbnRlclgiLCJidWJibGVDZW50ZXJZIiwiZGlzdExlZnRYIiwiZGlzdExlZnRZIiwiZGlzdGFuY2VMZWZ0IiwiaHlwb3QiLCJkaXN0UmlnaHRYIiwiZGlzdFJpZ2h0WSIsImRpc3RhbmNlUmlnaHQiLCJkaXN0TWlkWCIsImRpc3RNaWRZIiwiZGlzdGFuY2VNaWRkbGUiLCJsYXNlclBvaW50WCIsImxhc2VyUG9pbnRZIiwiZGlzdExhc2VyWCIsImRpc3RMYXNlclkiLCJkaXN0TGFzZXJEb3duWSIsImRpc3RMYXNlck1pZFkiLCJkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCIsImRpc3RhbmNlTGFzZXJEb3duUG9pbnQiLCJkaXN0YW5jZUxhc2VyTWlkUG9pbnQiLCJwb3AiLCJyZXN0YXJ0TGV2ZWwiLCJzdG9yYWdlZEhpZ2hTY29yZSIsInBhcnNlSW50IiwibGFzZXIiLCJtYXAiLCJsZXZlbEJ1YmJsZSIsImlkeDEiLCJpZHgyIiwibGV2ZWxDbGVhcmVkIiwiZHJvcEdpZnQiLCJzZXRUaW1lb3V0IiwiR2lmdHMiLCJkWSIsImZsb29yIiwicmFuZG9tIiwiY29pbkJhZyIsImNvaW5TdGFjayIsImdvbGRDb2luIiwiU291bmQiLCJsb2NrZWQiLCJzb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJwbGF5Iiwic3BlZWQiLCJzdG9wIiwic3BlZWRZIiwiY2xvc2VQYXRoIiwibWF4U3BlZWQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwicGF1c2UiLCJnZXRDb250ZXh0IiwibGFzdFRpbWUiLCJnYW1lTG9vcCIsInRpbWVTdGFtcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7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QUFDQTFCLFFBQUksQ0FBQ2lCLElBQUw7QUFDQWtKLHlCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsR0FMTyxDQUFSOztBQU1BRSx1QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILENBZEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIC8vIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCwge1xuXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBgc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsXyR7dGhpcy5nYW1lLmN1cnJlbnRMZXZlbH0uanBnYFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLmRyYXcoYnViYmxlLnNpemUpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoIWdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgZ2lmdC5kcmF3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LnVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdMaXZlcygpIHtcbiAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgIHRoaXMuZ2FtZS5saXZlcy5mb3JFYWNoKChoZWFydENvdW50LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgNjIwICsgaWR4ICogNDAsIDAsIDEwMCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgU2NvcmU6ICR7dGhpcy5nYW1lLnNjb3JlfWAsIDQwLCA1MCk7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYExldmVsICR7dGhpcy5nYW1lLmN1cnJlbnRMZXZlbH1gLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIDMwKTtcbiAgICB9XG5cbiAgICBkcmF3R2lmdHMoKSB7XG5cbiAgICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJjbGFzcyBCdWJibGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBzaXplLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy54ID0gb3B0aW9ucy54O1xuICAgICAgICB0aGlzLnkgPSBvcHRpb25zLnk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoIFxuXG4gICAgICAgIHRoaXMuYnViYmxlRFggPSBvcHRpb25zLmJ1YmJsZURYO1xuICAgICAgICB0aGlzLmJ1YmJsZURZID0gb3B0aW9ucy5idWJibGVEWTtcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gb3B0aW9ucy5ncmF2aXR5O1xuICAgICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IG9wdGlvbnMuZ3Jhdml0eVNwZWVkO1xuICAgICAgICB0aGlzLmJvdW5jZSA9IG9wdGlvbnMuYm91bmNlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplXG4gICAgICAgIHRoaXMucmVhbENvb3JkaW5hdGVzKClcbiAgICB9XG5cbiAgICBkcmF3KHNpemUpIHtcbiAgICAgICAgbGV0IGJ1YmJsZVxuICAgICAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1maXZlXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZm91clwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXRocmVlXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtdHdvXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtb25lXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShidWJibGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoICogLjcsIHRoaXMuaGVpZ2h0ICogLjcpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24taW4nO1xuICAgICAgICB0aGlzLmN0eC5hcmMoMCwgMCwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmdyYXZpdHlTcGVlZCArPSB0aGlzLmdyYXZpdHk7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmJ1YmJsZURYO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5idWJibGVEWVxuICAgICAgICAvLyBsZXQgcm9ja2JvdHRvbSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMTA7XG4gICAgICAgIC8vIGlmICh0aGlzLnkgPiByb2NrYm90dG9tKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnkgPSByb2NrYm90dG9tO1xuICAgICAgICAvLyAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSAtKHRoaXMuZ3Jhdml0eVNwZWVkICogdGhpcy5ib3VuY2UpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLnggKyB0aGlzLmJ1YmJsZURYID4gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoIC8gMiAtIHRoaXMuaGVpZ2h0IC8gMTAgfHwgdGhpcy54ICsgdGhpcy5idWJibGVEWCA8IC0gdGhpcy5oZWlnaHQgLyAxMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWCA9IC10aGlzLmJ1YmJsZURYO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmJ1YmJsZURZID49IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0IC8gMiB8fCB0aGlzLnkgKyB0aGlzLmJ1YmJsZURZIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5idWJibGVEWSA9IC10aGlzLmJ1YmJsZURZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVhbENvb3JkaW5hdGVzKClcbiAgICB9XG5cbiAgICByZWFsQ29vcmRpbmF0ZXMoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVYID0gdGhpcy54ICsgNDA7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVZID0gdGhpcy55ICsgNDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVYID0gdGhpcy54ICsgNDc7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVZID0gdGhpcy55ICsgNDc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVYID0gdGhpcy54ICsgMjU7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVZID0gdGhpcy55ICsgMjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVYID0gdGhpcy54ICsgMTU7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVZID0gdGhpcy55ICsgMjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVYID0gdGhpcy54ICsgMTI7XG4gICAgICAgICAgICAgICAgdGhpcy5idWJibGVZID0gdGhpcy55ICsgMjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ1YmJsZTsiLCJCb2FyZCA9IHJlcXVpcmUoJy4uL2Rpc3QvYm9hcmQnKTtcbklucHV0SGFuZGxlciA9IHJlcXVpcmUoJy4uL2Rpc3QvaW5wdXRfaGFuZGxlJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcbkJ1YmJsZSA9IHJlcXVpcmUoJy4vYnViYmxlJyk7XG5MZXZlbCA9IHJlcXVpcmUoJy4vbGV2ZWxzJyk7XG5HaWZ0ID0gcmVxdWlyZSgnLi9naWZ0cycpO1xuXG5jb25zdCBHQU1FU1RBVEUgPSB7XG4gICAgUEFVU0VEOiAwLFxuICAgIFJVTk5JTkc6IDEsXG4gICAgTUVOVTogMixcbiAgICBHQU1FT1ZFUjogMyxcbiAgICBMRVZFTERPTkU6IDRcbn07XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuR0FNRU9WRVI7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMgPSB0aGlzLmNyZWF0ZUJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlID0gdGhpcy5leHBsb2RlQnViYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdXG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVsKHRoaXMpXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gNlxuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICB0aGlzLmdpZnRzID0gW11cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgMCk7XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMTYwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiArIDEwMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYEhpZ2ggU2NvcmUgJHtoaWdoU2NvcmV9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMRVZFTCAke3RoaXMuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goKGdpZnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0cy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBjb25zdCBwbGF5ZXJYID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgY29uc3QgcGxheWVyWSA9IHBsYXllci5wb3NpdGlvbi55ICsgNjU7XG4gICAgICAgIGNvbnN0IHJpZ2h0UG9pbnRQbGF5ZXJYID0gcGxheWVyWCArIDczO1xuXG4gICAgICAgIHRoaXMuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChnaWZ0LnkgKyBnaWZ0LmhlaWdodCAvIDIgPj0gcGxheWVyWSkge1xuICAgICAgICAgICAgICAgIGlmICgoZ2lmdC54ID49IHBsYXllclggJiYgZ2lmdC54IDw9IHJpZ2h0UG9pbnRQbGF5ZXJYKSB8fCAoZ2lmdC54ICsgZ2lmdC53aWR0aCA+PSBwbGF5ZXJYICYmIGdpZnQueCArIGdpZnQud2lkdGggPD0gcmlnaHRQb2ludFBsYXllclgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaXNpb24nKVxuICAgICAgICAgICAgICAgICAgICBnaWZ0LmRlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA5ODAgJiYgdGhpcy5saXZlcy5sZW5ndGggPCA1KSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXMucHVzaCgxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA3NTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gNTAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gNDUwKXsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ1YmJsZXMuc29tZSgoYnViYmxlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBidWJibGUud2lkdGggLyA0LjU7XG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJYID0gYnViYmxlLmJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclkgPSBidWJibGUuYnViYmxlWSArIHJhZGl1c1xuICAgICAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFggPSBwbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyByaWdodCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFggPSByaWdodFBvaW50UGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVJpZ2h0ID0gTWF0aC5oeXBvdChkaXN0UmlnaHRYLCBkaXN0UmlnaHRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIG1pZGRsZSBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VNaWRkbGUgPSBNYXRoLmh5cG90KGRpc3RNaWRYLCBkaXN0TWlkWSlcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDEgJiYgYnViYmxlQ2VudGVyWCA+PSBwbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclggPD0gcmlnaHRQb2ludFBsYXllclggJiYgYnViYmxlQ2VudGVyWSA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzZXJzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFggPSBzaG90LnggKyAxM1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWSA9IGxhc2VyUG9pbnRZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJEb3duWSA9IGxhc2VyUG9pbnRZICsgNzAgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlck1pZFkgPSBsYXNlclBvaW50WSArIDM1IC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyRG93blBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJEb3duWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlck1pZFkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGFzZXJVcHBlclBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyRG93blBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICByZXN0YXJ0TGV2ZWwoKXtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMubGl2ZXMgPSBbMSwgMSwgMV1cbiAgICAgICAgICAgIGxldCBzdG9yYWdlZEhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaHNjb3JlXCIpO1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3JlID4gcGFyc2VJbnQoc3RvcmFnZWRIaWdoU2NvcmUpKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoc2NvcmVcIiwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgbGV0IGxhc2VyID0gbmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcylcbiAgICAgICAgICAgIC8vIGxhc2VyLnNvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzZXJzLnB1c2gobGFzZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVCdWJibGVzKCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmxldmVsLm1hcChidWJibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1YmJsZS5zaXplID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA1LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA0LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMiwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjUwO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsLmZvckVhY2goKGxldmVsQnViYmxlLCBpZHgxKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlLCBpZHgyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeDEgPT09IGlkeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueCA9IGJ1YmJsZS54O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS55ID0gYnViYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURYID0gYnViYmxlLmJ1YmJsZURYO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWSA9IGJ1YmJsZS5idWJibGVEWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxldmVsLnNwbGljZShpZHgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJ1YmJsZS5zaXplICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSB9KTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogLWJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IC1idWJibGUuYnViYmxlRFl9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDbGVhcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wR2lmdChidWJibGUueCwgYnViYmxlLnkpXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgIH1cbiAgICBcbiAgICBsZXZlbENsZWFyZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsICs9IDE7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkxFVkVMRE9ORTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkcgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZHJvcEdpZnQoeCwgeSkge1xuICAgICAgICB0aGlzLmdpZnRzLnB1c2gobmV3IEdpZnQoeCwgeSwgdGhpcykpXG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIEdpZnRzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBnYW1lKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAwXG4gICAgfVxuXG4gICAgZHJhdygpIFxuICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA5ODApIHsvL2xpdmVzXG4gICAgICAgICAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGhlYXJ0LCB0aGlzLngsIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA4NTApIHsvL2NvaW5CYWdcbiAgICAgICAgICAgICAgICBsZXQgY29pbkJhZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvaW5CYWcuc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9iYWcucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwOTtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoY29pbkJhZywgdGhpcy54LCB0aGlzLnksIDYwLCA2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgIGxldCBjb2luU3RhY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb2luU3RhY2suc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9zdGFjay5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDMwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGNvaW5TdGFjaywgdGhpcy54LCB0aGlzLnksIDMwLCAzMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSAyMDApIHsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgIGxldCBnb2xkQ29pbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGdvbGRDb2luLnNyYyA9ICdzcmMvaW1hZ2VzL2dvbGRfY29pbi5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGdvbGRDb2luLCB0aGlzLngsIHRoaXMueSwgMzUsIDM1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5kWTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmRZID49IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZFkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZGVsZXRlID0gdHJ1ZTsgfSwgNTAwKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2lmdHM7IiwiU291bmQgPSByZXF1aXJlKCcuL3NvdW5kJyk7XG5cblxuY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZChcInNyYy9zb3VuZHMvc2hvb3RpbmcubXAzXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwicFwiKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiblwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMjUwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPCAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDUzO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSA4MDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAxMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkWTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFzZXI7IiwiY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCA9IHtcbiAgICAgICAgICAgIDE6IFt7IHNpemU6IDIsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDM6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDQ6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDU6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfV0sXG4gICAgICAgICAgICA2OiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH1dLFxuICAgICAgICAgICAgNzogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfV0sXG4gICAgICAgICAgICA4OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gNDAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9XSxcbiAgICAgICAgICAgIDk6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDEwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH0sXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAzMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH1dXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGV2ZWw7IiwiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IDEzNTsgXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTM1OyBcblxuICAgICAgICB0aGlzLm1heFNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBsYXllci5zcmMgPSAnc3JjL2ltYWdlcy9wbGF5ZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHBsYXllciwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IC0zMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gLTMwXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuY2FudmFzLndpZHRoICsgMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiY2xhc3MgU291bmQge1xuICAgIGNvbnN0cnVjdG9yKHNyYykge1xuXG4gICAgICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXVkaW9cIik7XG4gICAgICAgIHRoaXMuc291bmQuc3JjID0gc3JjO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcImNvbnRyb2xzXCIsIFwibm9uZVwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gICAgfVxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZC5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmQucGF1c2UoKTtcbiAgICAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNvdW5kIiwiR2FtZSA9IHJlcXVpcmUoJy4uL2Rpc3QvZ2FtZScpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgXG4gICAgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgICBnYW1lLnVwZGF0ZSgpO1xuICAgICAgICBnYW1lLmRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKVxufSkiXSwic291cmNlUm9vdCI6IiJ9