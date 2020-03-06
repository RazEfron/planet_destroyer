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
      this.ctx.fillText("High Score: ".concat(this.game.score), 40, 50);
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
        this.restartLevel();
      }
    }
  }, {
    key: "shoot",
    value: function shoot() {
      if (this.gameState === GAMESTATE.RUNNING) {
        debugger;
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
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(game) {
  var _this = this;

  _classCallCheck(this, InputHandler);

  this.locked = false;
  this.sound = new Audio("/Users/razefron/Desktop/bubble_trouble/src/sounds/shooting.mp3");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWJibGUiLCJyZXF1aXJlIiwiUGxheWVyIiwiTGFzZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImdhbWUiLCJkcmF3R2FtZSIsImJpbmQiLCJkcmF3QmFja2dyb3VuZCIsInBsYXllciIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiYnViYmxlcyIsImZvckVhY2giLCJidWJibGUiLCJkcmF3Iiwic2l6ZSIsImRyYXdMaXZlcyIsImxhc2VycyIsInNob3QiLCJkcmF3VGV4dCIsImdpZnRzIiwiZ2lmdCIsImRlbGV0ZSIsInVwZGF0ZSIsImhlYXJ0IiwibGl2ZXMiLCJoZWFydENvdW50IiwiaWR4IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic2NvcmUiLCJjdXJyZW50TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJyZWFsQ29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJJbnB1dEhhbmRsZXIiLCJMZXZlbCIsIkdpZnQiLCJHQU1FU1RBVEUiLCJQQVVTRUQiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiTEVWRUxET05FIiwiR2FtZSIsImdhbWVTdGF0ZSIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsImNyZWF0ZUJ1YmJsZXMiLCJleHBsb2RlQnViYmxlIiwibGV2ZWxzIiwibGV2ZWwiLCJzZXR1cCIsImJvYXJkIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwiY29uc29sZSIsImxvZyIsInJhbmRvbU51bWJlciIsImxlbmd0aCIsInB1c2giLCJzb21lIiwicmFkaXVzIiwiYnViYmxlQ2VudGVyWCIsImJ1YmJsZUNlbnRlclkiLCJkaXN0TGVmdFgiLCJkaXN0TGVmdFkiLCJkaXN0YW5jZUxlZnQiLCJoeXBvdCIsImRpc3RSaWdodFgiLCJkaXN0UmlnaHRZIiwiZGlzdGFuY2VSaWdodCIsImRpc3RNaWRYIiwiZGlzdE1pZFkiLCJkaXN0YW5jZU1pZGRsZSIsImxhc2VyUG9pbnRYIiwibGFzZXJQb2ludFkiLCJkaXN0TGFzZXJYIiwiZGlzdExhc2VyWSIsImRpc3RMYXNlckRvd25ZIiwiZGlzdExhc2VyTWlkWSIsImRpc3RhbmNlTGFzZXJVcHBlclBvaW50IiwiZGlzdGFuY2VMYXNlckRvd25Qb2ludCIsImRpc3RhbmNlTGFzZXJNaWRQb2ludCIsInBvcCIsInJlc3RhcnRMZXZlbCIsImxhc2VyIiwibWFwIiwibGV2ZWxCdWJibGUiLCJpZHgxIiwiaWR4MiIsImxldmVsQ2xlYXJlZCIsImRyb3BHaWZ0Iiwic2V0VGltZW91dCIsIkdpZnRzIiwiZFkiLCJmbG9vciIsInJhbmRvbSIsImNvaW5CYWciLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsImxvY2tlZCIsInNvdW5kIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwicGxheSIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQWhCO0FBQ0FDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFoQjtBQUNBRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsc0NBQUQsQ0FBZjs7SUFFTUcsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFw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QUFNbEosSUFBSSxHQUFHLElBQUkrRCxJQUFKLENBQVNqRSxNQUFULEVBQWlCQyxHQUFqQixDQUFiO0FBQ0EsTUFBSW9KLFFBQVEsR0FBRyxDQUFmOztBQUdBQyxVQUFRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLElBQUcsVUFBQ0MsU0FBRCxFQUFlO0FBQ3RCRixZQUFRLEdBQUdFLFNBQVg7QUFDQXJKLFFBQUksQ0FBQ3lCLE1BQUw7QUFDQXpCLFFBQUksQ0FBQ2dCLElBQUw7QUFDQXNJLHlCQUFxQixDQUFDRixRQUFELENBQXJCO0FBQ0gsR0FMTyxDQUFSOztBQU1BRSx1QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILENBZEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJCdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuUGxheWVyID0gcmVxdWlyZSgnLi4vZGlzdC9wbGF5ZXInKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGdhbWUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRyYXdHYW1lID0gdGhpcy5kcmF3R2FtZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kID0gdGhpcy5kcmF3QmFja2dyb3VuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vYnViYmxlXG4gICAgICAgIC8vIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZShjYW52YXMsIGN0eCwge1xuXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy9wbGF5ZXJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGNhbnZhcywgY3R4KTtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgbGV0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSAnc3JjL2ltYWdlcy9iYWNrZ3JvdW5kX2xldmVsX29uZS5qcGcnXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgfVxuXG4gICAgZHJhd0dhbWUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICB0aGlzLmdhbWUuYnViYmxlcy5mb3JFYWNoKGJ1YmJsZSA9PiBidWJibGUuZHJhdyhidWJibGUuc2l6ZSkpO1xuICAgICAgICB0aGlzLnBsYXllci5kcmF3KCk7XG4gICAgICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QuZHJhdygpKTtcbiAgICAgICAgdGhpcy5kcmF3VGV4dCgpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LmRyYXcoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKCkge1xuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLnVwZGF0ZSgpKTtcbiAgICAgICAgdGhpcy5nYW1lLmxhc2Vycy5mb3JFYWNoKHNob3QgPT4gc2hvdC51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKCFnaWZ0LmRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIGdpZnQudXBkYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0xpdmVzKCkge1xuICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgdGhpcy5nYW1lLmxpdmVzLmZvckVhY2goKGhlYXJ0Q291bnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGhlYXJ0LCA2MjAgKyBpZHggKiA0MCwgMCwgMTAwLCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3VGV4dCgpIHtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBIaWdoIFNjb3JlOiAke3RoaXMuZ2FtZS5zY29yZX1gLCA0MCwgNTApO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMZXZlbCAke3RoaXMuZ2FtZS5jdXJyZW50TGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCAzMCk7XG4gICAgfVxuXG4gICAgZHJhd0dpZnRzKCkge1xuXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiY2xhc3MgQnViYmxlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMueCA9IG9wdGlvbnMueDtcbiAgICAgICAgdGhpcy55ID0gb3B0aW9ucy55O1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IFxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aCBcblxuICAgICAgICB0aGlzLmJ1YmJsZURYID0gb3B0aW9ucy5idWJibGVEWDtcbiAgICAgICAgdGhpcy5idWJibGVEWSA9IG9wdGlvbnMuYnViYmxlRFk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy5ncmF2aXR5U3BlZWQgPSBvcHRpb25zLmdyYXZpdHlTcGVlZDtcbiAgICAgICAgdGhpcy5ib3VuY2UgPSBvcHRpb25zLmJvdW5jZTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgZHJhdyhzaXplKSB7XG4gICAgICAgIGxldCBidWJibGVcbiAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtZml2ZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZvdXJcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10aHJlZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LXR3b1wiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LW9uZVwiKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYnViYmxlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCAqIC43LCB0aGlzLmhlaWdodCAqIC43KTtcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLWluJztcbiAgICAgICAgdGhpcy5jdHguYXJjKDAsIDAsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ncmF2aXR5U3BlZWQgKz0gdGhpcy5ncmF2aXR5O1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5idWJibGVEWDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuYnViYmxlRFlcbiAgICAgICAgLy8gbGV0IHJvY2tib3R0b20gPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwO1xuICAgICAgICAvLyBpZiAodGhpcy55ID4gcm9ja2JvdHRvbSkge1xuICAgICAgICAvLyAgICAgdGhpcy55ID0gcm9ja2JvdHRvbTtcbiAgICAgICAgLy8gICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gLSh0aGlzLmdyYXZpdHlTcGVlZCAqIHRoaXMuYm91bmNlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy54ICsgdGhpcy5idWJibGVEWCA+IHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy53aWR0aCAvIDIgLSB0aGlzLmhlaWdodCAvIDEwIHx8IHRoaXMueCArIHRoaXMuYnViYmxlRFggPCAtIHRoaXMuaGVpZ2h0IC8gMTApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFggPSAtdGhpcy5idWJibGVEWDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5idWJibGVEWSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIgfHwgdGhpcy55ICsgdGhpcy5idWJibGVEWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlRFkgPSAtdGhpcy5idWJibGVEWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlYWxDb29yZGluYXRlcygpXG4gICAgfVxuXG4gICAgcmVhbENvb3JkaW5hdGVzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDQ3O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDQ3O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDI1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDIwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDE1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWCA9IHRoaXMueCArIDEyO1xuICAgICAgICAgICAgICAgIHRoaXMuYnViYmxlWSA9IHRoaXMueSArIDI1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCdWJibGU7IiwiQm9hcmQgPSByZXF1aXJlKCcuLi9kaXN0L2JvYXJkJyk7XG5JbnB1dEhhbmRsZXIgPSByZXF1aXJlKCcuLi9kaXN0L2lucHV0X2hhbmRsZScpO1xuTGFzZXIgPSByZXF1aXJlKCcuLi9kaXN0L2xhc2VyJyk7XG5CdWJibGUgPSByZXF1aXJlKCcuL2J1YmJsZScpO1xuTGV2ZWwgPSByZXF1aXJlKCcuL2xldmVscycpO1xuR2lmdCA9IHJlcXVpcmUoJy4vZ2lmdHMnKTtcblxuY29uc3QgR0FNRVNUQVRFID0ge1xuICAgIFBBVVNFRDogMCxcbiAgICBSVU5OSU5HOiAxLFxuICAgIE1FTlU6IDIsXG4gICAgR0FNRU9WRVI6IDMsXG4gICAgTEVWRUxET05FOiA0XG59O1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLk1FTlU7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXQgPSBuZXcgSW5wdXRIYW5kbGVyKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSB0aGlzLmNvbGxpc2lvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRvZ2dsZVBhdXNlID0gdGhpcy50b2dnbGVQYXVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvc2VMaWZlID0gdGhpcy5sb3NlTGlmZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdGhpcy5nYW1lT3Zlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnNob290ID0gdGhpcy5zaG9vdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMgPSB0aGlzLmNyZWF0ZUJ1YmJsZXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlID0gdGhpcy5leHBsb2RlQnViYmxlLmJpbmQodGhpcyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzID0gWzEsIDEsIDFdO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdXG4gICAgICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVsKHRoaXMpXG4gICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMVxuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5sZXZlbHMuc2V0dXBbdGhpcy5jdXJyZW50TGV2ZWxdXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnNjb3JlID0gMFxuICAgICAgICB0aGlzLmdpZnRzID0gW11cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpXG4gICAgICAgICAgICB0aGlzLmxpdmVzID0gWzAsIDEsIDIsIDMsIDRdO1xuICAgICAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmJvYXJkLmRyYXdHYW1lKCk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLk1FTlUpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUHJlc3MgTiB0byBzdGFydCBhIG5ldyBnYW1lXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUGF1c2VkXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIgKyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkxFVkVMRE9ORSkge1xuXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYExFVkVMICR7dGhpcy5jdXJyZW50TGV2ZWx9YCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEIHx8IFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5HQU1FT1ZFUiB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VIHx8XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkxFVkVMRE9ORSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuXG4gICAgICAgIHRoaXMuY29sbGlzaW9uKCk7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVHYW1lKCk7XG4gICAgICAgIHRoaXMuZ2lmdHMuZm9yRWFjaCgoZ2lmdCwgaWR4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdpZnRzLnNwbGljZShpZHgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGNvbGxpc2lvbigpIHtcbiAgICAgICAgY29uc3QgeyBwbGF5ZXIgfSA9IHRoaXMuYm9hcmQ7XG4gICAgICAgIGNvbnN0IHBsYXllclggPSBwbGF5ZXIucG9zaXRpb24ueCArIDM1O1xuICAgICAgICBjb25zdCBwbGF5ZXJZID0gcGxheWVyLnBvc2l0aW9uLnkgKyA2NTtcbiAgICAgICAgY29uc3QgcmlnaHRQb2ludFBsYXllclggPSBwbGF5ZXJYICsgNzM7XG5cbiAgICAgICAgdGhpcy5naWZ0cy5mb3JFYWNoKGdpZnQgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQueSArIGdpZnQuaGVpZ2h0IC8gMiA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgaWYgKChnaWZ0LnggPj0gcGxheWVyWCAmJiBnaWZ0LnggPD0gcmlnaHRQb2ludFBsYXllclgpIHx8IChnaWZ0LnggKyBnaWZ0LndpZHRoID49IHBsYXllclggJiYgZ2lmdC54ICsgZ2lmdC53aWR0aCA8PSByaWdodFBvaW50UGxheWVyWCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbGxpc2lvbicpXG4gICAgICAgICAgICAgICAgICAgIGdpZnQuZGVsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDk4MCAmJiB0aGlzLmxpdmVzLmxlbmd0aCA8IDUpIHsvL2xpdmVzXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXZlcy5wdXNoKDEpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gODUwKSB7Ly9jb2luQmFnXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDc1MFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA0NTApey8vIGdvbGRDb2luXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYnViYmxlcy5zb21lKChidWJibGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGJ1YmJsZS53aWR0aCAvIDQuNTtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclggPSBidWJibGUuYnViYmxlWCArIHJhZGl1c1xuICAgICAgICAgICAgY29uc3QgYnViYmxlQ2VudGVyWSA9IGJ1YmJsZS5idWJibGVZICsgcmFkaXVzXG4gICAgICAgICAgICAvL2NoZWtpbmcgbGVmdCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WCA9IHBsYXllclggLSBidWJibGVDZW50ZXJYO1xuICAgICAgICAgICAgY29uc3QgZGlzdExlZnRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxlZnQgPSBNYXRoLmh5cG90KGRpc3RMZWZ0WCwgZGlzdExlZnRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIHJpZ2h0IG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdFJpZ2h0WCA9IHJpZ2h0UG9pbnRQbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFkgPSBwbGF5ZXJZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlUmlnaHQgPSBNYXRoLmh5cG90KGRpc3RSaWdodFgsIGRpc3RSaWdodFkpXG4gICAgICAgICAgICAvL2NoZWtpbmcgbWlkZGxlIG9mIHBsYXllclxuICAgICAgICAgICAgY29uc3QgZGlzdE1pZFggPSAocGxheWVyWCArIDY3LjUpIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZU1pZGRsZSA9IE1hdGguaHlwb3QoZGlzdE1pZFgsIGRpc3RNaWRZKVxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGVmdCA8PSByYWRpdXMgfHwgZGlzdGFuY2VSaWdodCA8PSByYWRpdXMgfHwgZGlzdGFuY2VNaWRkbGUgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWJibGUuc2l6ZSA9PT0gMSAmJiBidWJibGVDZW50ZXJYID49IHBsYXllclggJiYgYnViYmxlQ2VudGVyWCA8PSByaWdodFBvaW50UGxheWVyWCAmJiBidWJibGVDZW50ZXJZID49IHBsYXllclkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvc2VMaWZlKClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NoZWtpbmcgbGFzZXIgYW5kIGJ1YmJsZSBjb2xsaXNpb25cbiAgICAgICAgICAgICAgICBjb25zdCBsYXNlclBvaW50WCA9IHNob3QueCArIDEzXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFkgPSBzaG90LnkgKyA3XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWCA9IGxhc2VyUG9pbnRYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJZID0gbGFzZXJQb2ludFkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlckRvd25ZID0gbGFzZXJQb2ludFkgKyA3MCAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyTWlkWSA9IGxhc2VyUG9pbnRZICsgMzUgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJVcHBlclBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlckRvd25ZKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyTWlkWSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VMYXNlclVwcGVyUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJEb3duUG9pbnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTGFzZXJNaWRQb2ludCA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgICAgICBcbiAgICB0b2dnbGVQYXVzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUEFVU0VEKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuUlVOTklORykge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUEFVU0VEO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9zZUxpZmUoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdmVzLnBvcCgpO1xuICAgICAgICB0aGlzLnJlc3RhcnRMZXZlbCgpO1xuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5SVU5OSU5HO1xuICAgIH1cblxuICAgIHJlc3RhcnRMZXZlbCgpe1xuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgIH1cblxuICAgIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5saXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkdBTUVPVkVSO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBsZXQgbGFzZXIgPSBuZXcgTGFzZXIodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKVxuICAgICAgICAgICAgLy8gbGFzZXIuc291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXNlcnMucHVzaChsYXNlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUJ1YmJsZXMoKSB7XG4gICAgICAgIHRoaXMuYnViYmxlcyA9IHRoaXMubGV2ZWwubWFwKGJ1YmJsZSA9PiB7XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDUsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCwgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICAgZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDQsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMywge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAyLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDEsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzUsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGV4cGxvZGVCdWJibGUoYnViYmxlLCBpZHgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAyNTA7XG4gICAgICAgIHRoaXMubGFzZXJzID0gW107XG4gICAgICAgIHRoaXMubGV2ZWwuZm9yRWFjaCgobGV2ZWxCdWJibGUsIGlkeDEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcy5mb3JFYWNoKChidWJibGUsIGlkeDIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaWR4MSA9PT0gaWR4Mikge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS54ID0gYnViYmxlLng7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLnkgPSBidWJibGUueTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUuYnViYmxlRFggPSBidWJibGUuYnViYmxlRFg7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURZID0gYnViYmxlLmJ1YmJsZURZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubGV2ZWwuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYnViYmxlLnNpemUgIT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLCBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZIH0pO1xuICAgICAgICAgICAgdGhpcy5sZXZlbC5wdXNoKHsgc2l6ZTogYnViYmxlLnNpemUgLSAxLCB4OiBidWJibGUueCwgeTogYnViYmxlLnksIGJ1YmJsZURYOiAtYnViYmxlLmJ1YmJsZURYLCBidWJibGVEWTogLWJ1YmJsZS5idWJibGVEWX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sZXZlbENsZWFyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3BHaWZ0KGJ1YmJsZS54LCBidWJibGUueSlcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgfVxuICAgIFxuICAgIGxldmVsQ2xlYXJlZCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgKz0gMTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuTEVWRUxET05FO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORyB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBkcm9wR2lmdCh4LCB5KSB7XG4gICAgICAgIHRoaXMuZ2lmdHMucHVzaChuZXcgR2lmdCh4LCB5LCB0aGlzKSlcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7IiwiY2xhc3MgR2lmdHMge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIGdhbWUpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kWSA9IDU7XG4gICAgICAgIHRoaXMucmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuZGVsZXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDBcbiAgICB9XG5cbiAgICBkcmF3KCkgXG4gICAge1xuICAgICAgICAgICAgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDk4MCkgey8vbGl2ZXNcbiAgICAgICAgICAgICAgICBsZXQgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBoZWFydC5zcmMgPSAnc3JjL2ltYWdlcy9oZWFydC5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTEwO1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoaGVhcnQsIHRoaXMueCwgdGhpcy55LCAxMDAsIDEwMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgIGxldCBjb2luQmFnID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgY29pbkJhZy5zcmMgPSAnc3JjL2ltYWdlcy9jb2luX2JhZy5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA5O1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY3R4LmRyYXdJbWFnZShjb2luQmFnLCB0aGlzLngsIHRoaXMueSwgNjAsIDYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yYW5kb21OdW1iZXIgPj0gNjUwKSB7Ly8gY29pblN0YWNrXG4gICAgICAgICAgICAgICAgbGV0IGNvaW5TdGFjayA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvaW5TdGFjay5zcmMgPSAnc3JjL2ltYWdlcy9jb2luX3N0YWNrLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoY29pblN0YWNrLCB0aGlzLngsIHRoaXMueSwgMzAsIDMwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDIwMCkgey8vIGdvbGRDb2luXG4gICAgICAgICAgICAgICAgbGV0IGdvbGRDb2luID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgZ29sZENvaW4uc3JjID0gJ3NyYy9pbWFnZXMvZ29sZF9jb2luLnBuZyc7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMzU7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoZ29sZENvaW4sIHRoaXMueCwgdGhpcy55LCAzNSwgMzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmRZO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuZFkgPj0gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kWSA9IDA7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5kZWxldGUgPSB0cnVlOyB9LCA1MDApOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaWZ0czsiLCJjbGFzcyBJbnB1dEhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKFwiL1VzZXJzL3JhemVmcm9uL0Rlc2t0b3AvYnViYmxlX3Ryb3VibGUvc3JjL3NvdW5kcy9zaG9vdGluZy5tcDNcIik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5ib2FyZC5wbGF5ZXIubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVMZWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJwXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJuXCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLnN0YXJ0KClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIChcIiBcIik6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2tlZCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLnNob290KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvY2tlZCA9IGZhbHNlOyB9LCAyNTApOyBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd1JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPiAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAoXCJBcnJvd0xlZnRcIik6XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lLmJvYXJkLnBsYXllci5zcGVlZCA8IDApIGdhbWUuYm9hcmQucGxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEhhbmRsZXI7IiwiY2xhc3MgTGFzZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nYW1lLmJvYXJkLnBsYXllci5wb3NpdGlvbi54ICsgNzU7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2FudmFzLmhlaWdodCAtIDEwMDtcbiAgICAgICAgdGhpcy5zcGVlZFkgPSAxMDtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBsYXNlciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsYXNlci5zcmMgPSAnc3JjL2ltYWdlcy9sYXNlci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UobGFzZXIsIHRoaXMueCwgdGhpcy55LCAzMCwgOTApO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkWTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGFzZXI7IiwiY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICAgICAgdGhpcy5zZXR1cCA9IHtcbiAgICAgICAgICAgIDE6IFt7IHNpemU6IDIsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDI6IFt7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDM6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDQ6IFt7IHNpemU6IDUsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9XSxcbiAgICAgICAgICAgIDU6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9LCB7IHNpemU6IDMsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMZXZlbDsiLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLndpZHRoID0gMTM1OyBcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzU7IFxuXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDBcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodCArIDMwXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlTGVmdCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5tYXhTcGVlZFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGxheWVyLnNyYyA9ICdzcmMvaW1hZ2VzL3BsYXllci5wbmcnXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocGxheWVyLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgLTMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAtMzBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gdGhpcy5jYW52YXMud2lkdGggKyAzMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLndpZHRoICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJHYW1lID0gcmVxdWlyZSgnLi4vZGlzdC9nYW1lJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjdHgpO1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICBcbiAgICBnYW1lTG9vcCA9ICh0aW1lU3RhbXApID0+IHtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICAgIGdhbWUudXBkYXRlKCk7XG4gICAgICAgIGdhbWUuZHJhdygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=