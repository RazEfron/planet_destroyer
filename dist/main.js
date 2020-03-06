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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9ib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2J1YmJsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9naWZ0cy5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2lucHV0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L2xhc2VyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL2Rpc3QvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJCdWJibGUiLCJyZXF1aXJlIiwiUGxheWVyIiwiTGFzZXIiLCJCb2FyZCIsImNhbnZhcyIsImN0eCIsImdhbWUiLCJkcmF3R2FtZSIsImJpbmQiLCJkcmF3QmFja2dyb3VuZCIsInBsYXllciIsImJhY2tncm91bmQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiY2xlYXJSZWN0IiwiYnViYmxlcyIsImZvckVhY2giLCJidWJibGUiLCJkcmF3Iiwic2l6ZSIsImRyYXdMaXZlcyIsImxhc2VycyIsInNob3QiLCJkcmF3VGV4dCIsImdpZnRzIiwiZ2lmdCIsImRlbGV0ZSIsInVwZGF0ZSIsImhlYXJ0IiwibGl2ZXMiLCJoZWFydENvdW50IiwiaWR4IiwiZm9udCIsInRleHRBbGlnbiIsImZpbGxUZXh0Iiwic2NvcmUiLCJjdXJyZW50TGV2ZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIngiLCJ5IiwiYnViYmxlRFgiLCJidWJibGVEWSIsImdyYXZpdHkiLCJncmF2aXR5U3BlZWQiLCJib3VuY2UiLCJyZWFsQ29vcmRpbmF0ZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwiYXJjIiwiTWF0aCIsIlBJIiwiYnViYmxlWCIsImJ1YmJsZVkiLCJJbnB1dEhhbmRsZXIiLCJMZXZlbCIsIkdpZnQiLCJHQU1FU1RBVEUiLCJQQVVTRUQiLCJSVU5OSU5HIiwiTUVOVSIsIkdBTUVPVkVSIiwiTEVWRUxET05FIiwiR2FtZSIsImdhbWVTdGF0ZSIsImhhbmRsZUlucHV0Iiwic3RhcnQiLCJjb2xsaXNpb24iLCJ0b2dnbGVQYXVzZSIsImxvc2VMaWZlIiwiZ2FtZU92ZXIiLCJzaG9vdCIsImNyZWF0ZUJ1YmJsZXMiLCJleHBsb2RlQnViYmxlIiwibGV2ZWxzIiwibGV2ZWwiLCJzZXR1cCIsImJvYXJkIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGVHYW1lIiwic3BsaWNlIiwicGxheWVyWCIsInBvc2l0aW9uIiwicGxheWVyWSIsInJpZ2h0UG9pbnRQbGF5ZXJYIiwiY29uc29sZSIsImxvZyIsInJhbmRvbU51bWJlciIsImxlbmd0aCIsInB1c2giLCJzb21lIiwicmFkaXVzIiwiYnViYmxlQ2VudGVyWCIsImJ1YmJsZUNlbnRlclkiLCJkaXN0TGVmdFgiLCJkaXN0TGVmdFkiLCJkaXN0YW5jZUxlZnQiLCJoeXBvdCIsImRpc3RSaWdodFgiLCJkaXN0UmlnaHRZIiwiZGlzdGFuY2VSaWdodCIsImRpc3RNaWRYIiwiZGlzdE1pZFkiLCJkaXN0YW5jZU1pZGRsZSIsImxhc2VyUG9pbnRYIiwibGFzZXJQb2ludFkiLCJkaXN0TGFzZXJYIiwiZGlzdExhc2VyWSIsImRpc3RMYXNlckRvd25ZIiwiZGlzdExhc2VyTWlkWSIsImRpc3RhbmNlTGFzZXJVcHBlclBvaW50IiwiZGlzdGFuY2VMYXNlckRvd25Qb2ludCIsImRpc3RhbmNlTGFzZXJNaWRQb2ludCIsInBvcCIsInJlc3RhcnRMZXZlbCIsImxhc2VyIiwibWFwIiwibGV2ZWxCdWJibGUiLCJpZHgxIiwiaWR4MiIsImxldmVsQ2xlYXJlZCIsImRyb3BHaWZ0Iiwic2V0VGltZW91dCIsIkdpZnRzIiwiZFkiLCJmbG9vciIsInJhbmRvbSIsImNvaW5CYWciLCJjb2luU3RhY2siLCJnb2xkQ29pbiIsImxvY2tlZCIsInNvdW5kIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsIm1vdmVSaWdodCIsIm1vdmVMZWZ0IiwicGxheSIsInNwZWVkIiwic3RvcCIsInNwZWVkWSIsImNsb3NlUGF0aCIsIm1heFNwZWVkIiwiZ2V0Q29udGV4dCIsImxhc3RUaW1lIiwiZ2FtZUxvb3AiLCJ0aW1lU3RhbXAiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQWhCO0FBQ0FDLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFoQjtBQUNBRSxLQUFLLEdBQUdGLG1CQUFPLENBQUMsc0NBQUQsQ0FBZjs7SUFFTUcsSztBQUNGLGlCQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBQXRCLENBTDJCLENBTzNCO0FBQ0E7QUFFQTtBQUVBOztBQUNBLFNBQUtFLE1BQUwsR0FBYyxJQUFJVCxNQUFKLENBQVdHLE1BQVgsRUFBbUJDLEdBQW5CLENBQWQ7QUFDSDs7OztxQ0FFZ0I7QUFDYixVQUFJTSxVQUFVLEdBQUcsSUFBSUMsS0FBSixFQUFqQjtBQUNBRCxnQkFBVSxDQUFDRSxHQUFYLEdBQWlCLHFDQUFqQjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQkgsVUFBbkIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsS0FBS1AsTUFBTCxDQUFZVyxLQUFqRCxFQUF3RCxLQUFLWCxNQUFMLENBQVlZLE1BQXBFO0FBQ0EsV0FBS1gsR0FBTCxDQUFTWSxTQUFUO0FBQ0g7OzsrQkFFVTtBQUNQLFdBQUtaLEdBQUwsQ0FBU2EsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLZCxNQUFMLENBQVlXLEtBQXJDLEVBQTRDLEtBQUtYLE1BQUwsQ0FBWVksTUFBeEQ7QUFDQSxXQUFLUCxjQUFMO0FBQ0EsV0FBS0gsSUFBTCxDQUFVYSxPQUFWLENBQWtCQyxPQUFsQixDQUEwQixVQUFBQyxNQUFNO0FBQUEsZUFBSUEsTUFBTSxDQUFDQyxJQUFQLENBQVlELE1BQU0sQ0FBQ0UsSUFBbkIsQ0FBSjtBQUFBLE9BQWhDO0FBQ0EsV0FBS2IsTUFBTCxDQUFZWSxJQUFaO0FBQ0EsV0FBS0UsU0FBTDtBQUNBLFdBQUtsQixJQUFMLENBQVVtQixNQUFWLENBQWlCTCxPQUFqQixDQUF5QixVQUFBTSxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDSixJQUFMLEVBQUo7QUFBQSxPQUE3QjtBQUNBLFdBQUtLLFFBQUw7QUFDQSxXQUFLckIsSUFBTCxDQUFVc0IsS0FBVixDQUFnQlIsT0FBaEIsQ0FBd0IsVUFBQVMsSUFBSSxFQUFJO0FBQzVCLFlBQUksQ0FBQ0EsSUFBSSxDQUFDQyxNQUFWLEVBQWtCO0FBQ2RELGNBQUksQ0FBQ1AsSUFBTDtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7aUNBRVk7QUFDVCxXQUFLWixNQUFMLENBQVlxQixNQUFaO0FBQ0EsV0FBS3pCLElBQUwsQ0FBVWEsT0FBVixDQUFrQkMsT0FBbEIsQ0FBMEIsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sQ0FBQ1UsTUFBUCxFQUFKO0FBQUEsT0FBaEM7QUFDQSxXQUFLekIsSUFBTCxDQUFVbUIsTUFBVixDQUFpQkwsT0FBakIsQ0FBeUIsVUFBQU0sSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0ssTUFBTCxFQUFKO0FBQUEsT0FBN0I7QUFDQSxXQUFLekIsSUFBTCxDQUFVc0IsS0FBVixDQUFnQlIsT0FBaEIsQ0FBd0IsVUFBQVMsSUFBSSxFQUFJO0FBQzVCLFlBQUksQ0FBQ0EsSUFBSSxDQUFDQyxNQUFWLEVBQWtCO0FBQ2RELGNBQUksQ0FBQ0UsTUFBTDtBQUNIO0FBQ0osT0FKRDtBQUtIOzs7Z0NBRVc7QUFBQTs7QUFDUixVQUFJQyxLQUFLLEdBQUcsSUFBSXBCLEtBQUosRUFBWjtBQUNBb0IsV0FBSyxDQUFDbkIsR0FBTixHQUFZLHNCQUFaO0FBQ0EsV0FBS1AsSUFBTCxDQUFVMkIsS0FBVixDQUFnQmIsT0FBaEIsQ0FBd0IsVUFBQ2MsVUFBRCxFQUFhQyxHQUFiLEVBQXFCO0FBQ3pDLGFBQUksQ0FBQzlCLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQmtCLEtBQW5CLEVBQTBCLE1BQU1HLEdBQUcsR0FBRyxFQUF0QyxFQUEwQyxDQUExQyxFQUE2QyxHQUE3QyxFQUFrRCxHQUFsRDtBQUNILE9BRkQ7QUFHSDs7OytCQUVVO0FBQ1AsV0FBSzlCLEdBQUwsQ0FBUytCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxXQUFLL0IsR0FBTCxDQUFTZ0MsU0FBVCxHQUFxQixPQUFyQjtBQUNBLFdBQUtoQyxHQUFMLENBQVNpQyxRQUFULHVCQUFpQyxLQUFLaEMsSUFBTCxDQUFVaUMsS0FBM0MsR0FBb0QsRUFBcEQsRUFBd0QsRUFBeEQ7QUFDQSxXQUFLbEMsR0FBTCxDQUFTK0IsSUFBVCxHQUFnQixZQUFoQjtBQUNBLFdBQUsvQixHQUFMLENBQVNnQyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsV0FBS2hDLEdBQUwsQ0FBU2lDLFFBQVQsaUJBQTJCLEtBQUtoQyxJQUFMLENBQVVrQyxZQUFyQyxHQUFxRCxLQUFLcEMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXpFLEVBQTRFLEVBQTVFO0FBQ0g7OztnQ0FFVyxDQUVYOzs7Ozs7QUFJTDBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZDLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDN0VNSixNO0FBQ0Ysa0JBQVlLLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCa0IsSUFBekIsRUFBK0JvQixPQUEvQixFQUF3QztBQUFBOztBQUNwQyxTQUFLdkMsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS3VDLENBQUwsR0FBU0QsT0FBTyxDQUFDQyxDQUFqQjtBQUNBLFNBQUtDLENBQUwsR0FBU0YsT0FBTyxDQUFDRSxDQUFqQjtBQUNBLFNBQUs3QixNQUFMLEdBQWMyQixPQUFPLENBQUMzQixNQUF0QjtBQUNBLFNBQUtELEtBQUwsR0FBYTRCLE9BQU8sQ0FBQzVCLEtBQXJCO0FBRUEsU0FBSytCLFFBQUwsR0FBZ0JILE9BQU8sQ0FBQ0csUUFBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCSixPQUFPLENBQUNJLFFBQXhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlTCxPQUFPLENBQUNLLE9BQXZCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQk4sT0FBTyxDQUFDTSxZQUE1QjtBQUNBLFNBQUtDLE1BQUwsR0FBY1AsT0FBTyxDQUFDTyxNQUF0QjtBQUNBLFNBQUszQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLNEIsZUFBTDtBQUNIOzs7O3lCQUVJNUIsSSxFQUFNO0FBQ1AsVUFBSUYsTUFBSjs7QUFDQSxjQUFRRSxJQUFSO0FBQ0ksYUFBSyxDQUFMO0FBQ0lGLGdCQUFNLEdBQUcrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBVDtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJaEMsZ0JBQU0sR0FBRytCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFUO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0loQyxnQkFBTSxHQUFHK0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQVQ7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSWhDLGdCQUFNLEdBQUcrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBVDtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJaEMsZ0JBQU0sR0FBRytCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFUO0FBQ0E7O0FBQ0o7QUFDSTtBQWpCUjs7QUFtQkEsV0FBS2hELEdBQUwsQ0FBU1MsU0FBVCxDQUFtQk8sTUFBbkIsRUFBMkIsS0FBS3VCLENBQWhDLEVBQW1DLEtBQUtDLENBQXhDLEVBQTJDLEtBQUs5QixLQUFMLEdBQWEsRUFBeEQsRUFBNEQsS0FBS0MsTUFBTCxHQUFjLEVBQTFFO0FBQ0EsV0FBS1gsR0FBTCxDQUFTaUQsd0JBQVQsR0FBb0MsZ0JBQXBDO0FBQ0EsV0FBS2pELEdBQUwsQ0FBU2tELEdBQVQsQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLEVBQXVCLENBQXZCLEVBQTBCQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxDQUFwQztBQUNBLFdBQUtwRCxHQUFMLENBQVNpRCx3QkFBVCxHQUFvQyxhQUFwQztBQUNIOzs7NkJBRVE7QUFFTDtBQUNBLFdBQUtWLENBQUwsSUFBVSxLQUFLRSxRQUFmO0FBQ0EsV0FBS0QsQ0FBTCxJQUFVLEtBQUtFLFFBQWYsQ0FKSyxDQUtMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSSxLQUFLSCxDQUFMLEdBQVMsS0FBS0UsUUFBZCxHQUF5QixLQUFLMUMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLEtBQUtBLEtBQUwsR0FBYSxDQUFqQyxHQUFxQyxLQUFLQyxNQUFMLEdBQWMsRUFBNUUsSUFBa0YsS0FBSzRCLENBQUwsR0FBUyxLQUFLRSxRQUFkLEdBQXlCLENBQUUsS0FBSzlCLE1BQVAsR0FBZ0IsRUFBL0gsRUFBbUk7QUFDL0gsYUFBSzhCLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNIOztBQUNELFVBQUksS0FBS0QsQ0FBTCxHQUFTLEtBQUtFLFFBQWQsSUFBMEIsS0FBSzNDLE1BQUwsQ0FBWVksTUFBWixHQUFxQixLQUFLQSxNQUFMLEdBQWMsQ0FBN0QsSUFBa0UsS0FBSzZCLENBQUwsR0FBUyxLQUFLRSxRQUFkLEdBQXlCLENBQS9GLEVBQWtHO0FBQzlGLGFBQUtBLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLQSxRQUF0QjtBQUNIOztBQUNELFdBQUtJLGVBQUw7QUFDSDs7O3NDQUVpQjtBQUNkLGNBQVEsS0FBSzVCLElBQWI7QUFDSSxhQUFLLENBQUw7QUFDSSxlQUFLbUMsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBLGVBQUtlLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSSxlQUFLYSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0EsZUFBS2UsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBOztBQUNKLGFBQUssQ0FBTDtBQUNJLGVBQUthLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQSxlQUFLZSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0E7O0FBQ0osYUFBSyxDQUFMO0FBQ0ksZUFBS2EsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBLGVBQUtlLE9BQUwsR0FBZSxLQUFLZCxDQUFMLEdBQVMsRUFBeEI7QUFDQTs7QUFDSixhQUFLLENBQUw7QUFDSSxlQUFLYSxPQUFMLEdBQWUsS0FBS2QsQ0FBTCxHQUFTLEVBQXhCO0FBQ0EsZUFBS2UsT0FBTCxHQUFlLEtBQUtkLENBQUwsR0FBUyxFQUF4QjtBQUNBOztBQUNKO0FBQ0k7QUF0QlI7QUF3Qkg7Ozs7OztBQUdMSixNQUFNLENBQUNDLE9BQVAsR0FBaUIzQyxNQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQUksS0FBSyxHQUFHSCxtQkFBTyxDQUFDLHNDQUFELENBQWY7QUFDQTRELFlBQVksR0FBRzVELG1CQUFPLENBQUMsb0RBQUQsQ0FBdEI7QUFDQUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLHNDQUFELENBQWY7QUFDQUQsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQWhCO0FBQ0E2RCxLQUFLLEdBQUc3RCxtQkFBTyxDQUFDLGtDQUFELENBQWY7QUFDQThELElBQUksR0FBRzlELG1CQUFPLENBQUMsZ0NBQUQsQ0FBZDtBQUVBLElBQU0rRCxTQUFTLEdBQUc7QUFDZEMsUUFBTSxFQUFFLENBRE07QUFFZEMsU0FBTyxFQUFFLENBRks7QUFHZEMsTUFBSSxFQUFFLENBSFE7QUFJZEMsVUFBUSxFQUFFLENBSkk7QUFLZEMsV0FBUyxFQUFFO0FBTEcsQ0FBbEI7O0lBUU1DLEk7QUFDRixnQkFBWWpFLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCO0FBQUE7O0FBQ3JCLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtpRSxTQUFMLEdBQWlCUCxTQUFTLENBQUNHLElBQTNCO0FBQ0EsU0FBS0ssV0FBTCxHQUFtQixJQUFJWCxZQUFKLENBQWlCLElBQWpCLENBQW5CO0FBRUEsU0FBS1ksS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV2hFLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBYjtBQUNBLFNBQUtjLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVkLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLdUIsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWXZCLElBQVosQ0FBaUIsSUFBakIsQ0FBZDtBQUNBLFNBQUtpRSxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZWpFLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxTQUFLa0UsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCbEUsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLbUUsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNuRSxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS29FLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjcEUsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNBLFNBQUtxRSxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXckUsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS3NFLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQnRFLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBQ0EsU0FBS3VFLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQnZFLElBQW5CLENBQXdCLElBQXhCLENBQXJCO0FBRUEsU0FBS3lCLEtBQUwsR0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFiO0FBQ0EsU0FBS1IsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLdUQsTUFBTCxHQUFjLElBQUluQixLQUFKLENBQVUsSUFBVixDQUFkO0FBQ0EsU0FBS3JCLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLeUMsS0FBTCxHQUFhLEtBQUtELE1BQUwsQ0FBWUUsS0FBWixDQUFrQixLQUFLMUMsWUFBdkIsQ0FBYjtBQUNBLFNBQUtzQyxhQUFMO0FBQ0EsU0FBS0ssS0FBTCxHQUFhLElBQUloRixLQUFKLENBQVUsS0FBS0MsTUFBZixFQUF1QixLQUFLQyxHQUE1QixFQUFpQyxJQUFqQyxDQUFiO0FBRUEsU0FBS2tDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS1gsS0FBTCxHQUFhLEVBQWI7QUFFSDs7Ozs0QkFFTztBQUNKLFVBQUksS0FBSzBDLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0csSUFBakMsRUFBdUM7QUFDbkMsYUFBS0ksU0FBTCxHQUFpQlAsU0FBUyxDQUFDRSxPQUEzQjtBQUNIOztBQUVELFVBQUksS0FBS0ssU0FBTCxLQUFtQlAsU0FBUyxDQUFDSSxRQUFqQyxFQUEyQztBQUN2QyxhQUFLVyxhQUFMO0FBQ0EsYUFBSzdDLEtBQUwsR0FBYSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQWI7QUFDQSxhQUFLa0QsS0FBTCxHQUFhLElBQUloRixLQUFKLENBQVUsS0FBS0MsTUFBZixFQUF1QixLQUFLQyxHQUE1QixFQUFpQyxJQUFqQyxDQUFiO0FBQ0EsYUFBS2lFLFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0UsT0FBM0I7QUFDSDtBQUVKOzs7MkJBRU07QUFDSCxXQUFLa0IsS0FBTCxDQUFXNUUsUUFBWDs7QUFDQSxVQUFJLEtBQUsrRCxTQUFMLEtBQW1CUCxTQUFTLENBQUNHLElBQWpDLEVBQXVDO0FBQ25DLGFBQUs3RCxHQUFMLENBQVMrRSxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLaEYsTUFBTCxDQUFZVyxLQUFoQyxFQUF1QyxLQUFLWCxNQUFMLENBQVlZLE1BQW5EO0FBQ0EsYUFBS1gsR0FBTCxDQUFTZ0YsU0FBVCxHQUFxQixpQkFBckI7QUFDQSxhQUFLaEYsR0FBTCxDQUFTaUYsSUFBVDtBQUNBLGFBQUtqRixHQUFMLENBQVMrQixJQUFULEdBQWdCLFlBQWhCO0FBQ0EsYUFBSy9CLEdBQUwsQ0FBU2dGLFNBQVQsR0FBcUIsT0FBckI7QUFDQSxhQUFLaEYsR0FBTCxDQUFTZ0MsU0FBVCxHQUFxQixRQUFyQjtBQUNBLGFBQUtoQyxHQUFMLENBQVNpQyxRQUFULENBQWtCLDZCQUFsQixFQUFpRCxLQUFLbEMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXJFLEVBQXdFLEtBQUtYLE1BQUwsQ0FBWVksTUFBWixHQUFxQixDQUE3RjtBQUNIOztBQUNELFVBQUksS0FBS3NELFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUM7QUFFckMsYUFBSzNELEdBQUwsQ0FBUytFLElBQVQsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtoRixNQUFMLENBQVlXLEtBQWhDLEVBQXVDLEtBQUtYLE1BQUwsQ0FBWVksTUFBbkQ7QUFDQSxhQUFLWCxHQUFMLENBQVNnRixTQUFULEdBQXFCLGlCQUFyQjtBQUNBLGFBQUtoRixHQUFMLENBQVNpRixJQUFUO0FBQ0EsYUFBS2pGLEdBQUwsQ0FBUytCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxhQUFLL0IsR0FBTCxDQUFTZ0YsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGFBQUtoRixHQUFMLENBQVNnQyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsYUFBS2hDLEdBQUwsQ0FBU2lDLFFBQVQsQ0FBa0IsUUFBbEIsRUFBNEIsS0FBS2xDLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFoRCxFQUFtRCxLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBeEU7QUFDSDs7QUFDRCxVQUFJLEtBQUtzRCxTQUFMLEtBQW1CUCxTQUFTLENBQUNJLFFBQWpDLEVBQTJDO0FBRXZDLGFBQUs5RCxHQUFMLENBQVMrRSxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixLQUFLaEYsTUFBTCxDQUFZVyxLQUFoQyxFQUF1QyxLQUFLWCxNQUFMLENBQVlZLE1BQW5EO0FBQ0EsYUFBS1gsR0FBTCxDQUFTZ0YsU0FBVCxHQUFxQixlQUFyQjtBQUNBLGFBQUtoRixHQUFMLENBQVNpRixJQUFUO0FBQ0EsYUFBS2pGLEdBQUwsQ0FBUytCLElBQVQsR0FBZ0IsWUFBaEI7QUFDQSxhQUFLL0IsR0FBTCxDQUFTZ0YsU0FBVCxHQUFxQixPQUFyQjtBQUNBLGFBQUtoRixHQUFMLENBQVNnQyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsYUFBS2hDLEdBQUwsQ0FBU2lDLFFBQVQsQ0FBa0IsV0FBbEIsRUFBK0IsS0FBS2xDLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFuRCxFQUFzRCxLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBM0U7QUFDQSxhQUFLWCxHQUFMLENBQVNpQyxRQUFULENBQWtCLDZCQUFsQixFQUFpRCxLQUFLbEMsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXJFLEVBQXdFLEtBQUtYLE1BQUwsQ0FBWVksTUFBWixHQUFxQixDQUFyQixHQUF5QixHQUFqRztBQUNIOztBQUNELFVBQUksS0FBS3NELFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0ssU0FBakMsRUFBNEM7QUFFeEMsYUFBSy9ELEdBQUwsQ0FBUytFLElBQVQsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUtoRixNQUFMLENBQVlXLEtBQWhDLEVBQXVDLEtBQUtYLE1BQUwsQ0FBWVksTUFBbkQ7QUFDQSxhQUFLWCxHQUFMLENBQVNnRixTQUFULEdBQXFCLGVBQXJCO0FBQ0EsYUFBS2hGLEdBQUwsQ0FBU2lGLElBQVQ7QUFDQSxhQUFLakYsR0FBTCxDQUFTK0IsSUFBVCxHQUFnQixZQUFoQjtBQUNBLGFBQUsvQixHQUFMLENBQVNnRixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsYUFBS2hGLEdBQUwsQ0FBU2dDLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxhQUFLaEMsR0FBTCxDQUFTaUMsUUFBVCxpQkFBMkIsS0FBS0UsWUFBaEMsR0FBZ0QsS0FBS3BDLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFwRSxFQUF1RSxLQUFLWCxNQUFMLENBQVlZLE1BQVosR0FBcUIsQ0FBNUY7QUFDSDtBQUNKOzs7NkJBRVE7QUFBQTs7QUFDTCxVQUFJLEtBQUtzRCxTQUFMLEtBQW1CUCxTQUFTLENBQUNDLE1BQTdCLElBQ0EsS0FBS00sU0FBTCxLQUFtQlAsU0FBUyxDQUFDSSxRQUQ3QixJQUVBLEtBQUtHLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0csSUFGN0IsSUFHQSxLQUFLSSxTQUFMLEtBQW1CUCxTQUFTLENBQUNLLFNBSGpDLEVBRzRDO0FBQ3hDO0FBQ0g7O0FBRUQsV0FBS0ssU0FBTDtBQUNBLFdBQUtHLFFBQUw7QUFDQSxXQUFLTyxLQUFMLENBQVdJLFVBQVg7QUFDQSxXQUFLM0QsS0FBTCxDQUFXUixPQUFYLENBQW1CLFVBQUNTLElBQUQsRUFBT00sR0FBUCxFQUFlO0FBQzlCLFlBQUlOLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNiLGVBQUksQ0FBQ0YsS0FBTCxDQUFXNEQsTUFBWCxDQUFrQnJELEdBQWxCLEVBQXVCLENBQXZCO0FBQ0g7QUFDSixPQUpEO0FBS0g7OztnQ0FFVztBQUFBOztBQUFBLFVBQ0F6QixNQURBLEdBQ1csS0FBS3lFLEtBRGhCLENBQ0F6RSxNQURBO0FBRVIsVUFBTStFLE9BQU8sR0FBRy9FLE1BQU0sQ0FBQ2dGLFFBQVAsQ0FBZ0I5QyxDQUFoQixHQUFvQixFQUFwQztBQUNBLFVBQU0rQyxPQUFPLEdBQUdqRixNQUFNLENBQUNnRixRQUFQLENBQWdCN0MsQ0FBaEIsR0FBb0IsRUFBcEM7QUFDQSxVQUFNK0MsaUJBQWlCLEdBQUdILE9BQU8sR0FBRyxFQUFwQztBQUVBLFdBQUs3RCxLQUFMLENBQVdSLE9BQVgsQ0FBbUIsVUFBQVMsSUFBSSxFQUFJO0FBQ3ZCLFlBQUlBLElBQUksQ0FBQ2dCLENBQUwsR0FBU2hCLElBQUksQ0FBQ2IsTUFBTCxHQUFjLENBQXZCLElBQTRCMkUsT0FBaEMsRUFBeUM7QUFDckMsY0FBSzlELElBQUksQ0FBQ2UsQ0FBTCxJQUFVNkMsT0FBVixJQUFxQjVELElBQUksQ0FBQ2UsQ0FBTCxJQUFVZ0QsaUJBQWhDLElBQXVEL0QsSUFBSSxDQUFDZSxDQUFMLEdBQVNmLElBQUksQ0FBQ2QsS0FBZCxJQUF1QjBFLE9BQXZCLElBQWtDNUQsSUFBSSxDQUFDZSxDQUFMLEdBQVNmLElBQUksQ0FBQ2QsS0FBZCxJQUF1QjZFLGlCQUFwSCxFQUF3STtBQUNwSUMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQWpFLGdCQUFJLENBQUNDLE1BQUwsR0FBYyxJQUFkOztBQUNBLGdCQUFJRCxJQUFJLENBQUNrRSxZQUFMLElBQXFCLEdBQXJCLElBQTRCLE1BQUksQ0FBQzlELEtBQUwsQ0FBVytELE1BQVgsR0FBb0IsQ0FBcEQsRUFBdUQ7QUFBQztBQUN0RCxvQkFBSSxDQUFDL0QsS0FBTCxDQUFXZ0UsSUFBWCxDQUFnQixDQUFoQjtBQUNELGFBRkQsTUFFTyxJQUFJcEUsSUFBSSxDQUFDa0UsWUFBTCxJQUFxQixHQUF6QixFQUE4QjtBQUFDO0FBQ2xDLG9CQUFJLENBQUN4RCxLQUFMLElBQWMsR0FBZDtBQUNILGFBRk0sTUFFQSxJQUFJVixJQUFJLENBQUNrRSxZQUFMLElBQXFCLEdBQXpCLEVBQThCO0FBQUM7QUFDbEMsb0JBQUksQ0FBQ3hELEtBQUwsSUFBYyxHQUFkO0FBQ0gsYUFGTSxNQUdGLElBQUlWLElBQUksQ0FBQ2tFLFlBQUwsSUFBcUIsR0FBekIsRUFBNkI7QUFBQztBQUMvQixvQkFBSSxDQUFDeEQsS0FBTCxJQUFjLEdBQWQ7QUFDSDtBQUNKO0FBQ0o7QUFDSixPQWpCRDtBQW1CQSxXQUFLcEIsT0FBTCxDQUFhK0UsSUFBYixDQUFrQixVQUFDN0UsTUFBRCxFQUFTYyxHQUFULEVBQWlCO0FBQy9CLFlBQUlnRSxNQUFNLEdBQUc5RSxNQUFNLENBQUNOLEtBQVAsR0FBZSxHQUE1QjtBQUNBLFlBQU1xRixhQUFhLEdBQUcvRSxNQUFNLENBQUNxQyxPQUFQLEdBQWlCeUMsTUFBdkM7QUFDQSxZQUFNRSxhQUFhLEdBQUdoRixNQUFNLENBQUNzQyxPQUFQLEdBQWlCd0MsTUFBdkMsQ0FIK0IsQ0FJL0I7O0FBQ0EsWUFBTUcsU0FBUyxHQUFHYixPQUFPLEdBQUdXLGFBQTVCO0FBQ0EsWUFBTUcsU0FBUyxHQUFHWixPQUFPLEdBQUdVLGFBQTVCO0FBQ0EsWUFBTUcsWUFBWSxHQUFHaEQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXSCxTQUFYLEVBQXNCQyxTQUF0QixDQUFyQixDQVArQixDQVEvQjs7QUFDQSxZQUFNRyxVQUFVLEdBQUdkLGlCQUFpQixHQUFHUSxhQUF2QztBQUNBLFlBQU1PLFVBQVUsR0FBR2hCLE9BQU8sR0FBR1UsYUFBN0I7QUFDQSxZQUFNTyxhQUFhLEdBQUdwRCxJQUFJLENBQUNpRCxLQUFMLENBQVdDLFVBQVgsRUFBdUJDLFVBQXZCLENBQXRCLENBWCtCLENBWS9COztBQUNBLFlBQU1FLFFBQVEsR0FBSXBCLE9BQU8sR0FBRyxJQUFYLEdBQW1CVyxhQUFwQztBQUNBLFlBQU1VLFFBQVEsR0FBR25CLE9BQU8sR0FBR1UsYUFBM0I7QUFDQSxZQUFNVSxjQUFjLEdBQUd2RCxJQUFJLENBQUNpRCxLQUFMLENBQVdJLFFBQVgsRUFBcUJDLFFBQXJCLENBQXZCOztBQUNBLFlBQUlOLFlBQVksSUFBSUwsTUFBaEIsSUFBMEJTLGFBQWEsSUFBSVQsTUFBM0MsSUFBcURZLGNBQWMsSUFBSVosTUFBM0UsRUFBbUY7QUFFL0UsZ0JBQUksQ0FBQ3hCLFFBQUw7O0FBQ0EsaUJBQU8sSUFBUDtBQUNIOztBQUNELFlBQUl0RCxNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBaEIsSUFBcUI2RSxhQUFhLElBQUlYLE9BQXRDLElBQWlEVyxhQUFhLElBQUlSLGlCQUFsRSxJQUF1RlMsYUFBYSxJQUFJVixPQUE1RyxFQUFxSDtBQUNqSCxnQkFBSSxDQUFDaEIsUUFBTDs7QUFDQSxpQkFBTyxJQUFQO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDbEQsTUFBTCxDQUFZTCxPQUFaLENBQW9CLFVBQUFNLElBQUksRUFBSTtBQUN4QjtBQUNBLGNBQU1zRixXQUFXLEdBQUd0RixJQUFJLENBQUNrQixDQUFMLEdBQVMsRUFBN0I7QUFDQSxjQUFNcUUsV0FBVyxHQUFHdkYsSUFBSSxDQUFDbUIsQ0FBTCxHQUFTLENBQTdCO0FBQ0EsY0FBTXFFLFVBQVUsR0FBR0YsV0FBVyxHQUFHWixhQUFqQztBQUNBLGNBQU1lLFVBQVUsR0FBR0YsV0FBVyxHQUFHWixhQUFqQztBQUNBLGNBQU1lLGNBQWMsR0FBR0gsV0FBVyxHQUFHLEVBQWQsR0FBbUJaLGFBQTFDO0FBQ0EsY0FBTWdCLGFBQWEsR0FBR0osV0FBVyxHQUFHLEVBQWQsR0FBbUJaLGFBQXpDO0FBQ0EsY0FBTWlCLHVCQUF1QixHQUFHOUQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXUyxVQUFYLEVBQXVCQyxVQUF2QixDQUFoQztBQUNBLGNBQU1JLHNCQUFzQixHQUFHL0QsSUFBSSxDQUFDaUQsS0FBTCxDQUFXUyxVQUFYLEVBQXVCRSxjQUF2QixDQUEvQjtBQUNBLGNBQU1JLHFCQUFxQixHQUFHaEUsSUFBSSxDQUFDaUQsS0FBTCxDQUFXUyxVQUFYLEVBQXVCRyxhQUF2QixDQUE5Qjs7QUFFQSxjQUFJQyx1QkFBdUIsSUFBSW5CLE1BQTNCLElBQXFDb0Isc0JBQXNCLElBQUlwQixNQUEvRCxJQUF5RXFCLHFCQUFxQixJQUFJckIsTUFBdEcsRUFBOEc7QUFDMUcsa0JBQUksQ0FBQ3BCLGFBQUwsQ0FBbUIxRCxNQUFuQixFQUEyQmMsR0FBM0I7QUFDSDtBQUNKLFNBZkQ7QUFnQkgsT0F6Q0Q7QUEwQ0g7OztrQ0FFYTtBQUNWLFVBQUksS0FBS21DLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUM7QUFDckMsYUFBS00sU0FBTCxHQUFpQlAsU0FBUyxDQUFDRSxPQUEzQjtBQUNILE9BRkQsTUFFTyxJQUFJLEtBQUtLLFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0UsT0FBakMsRUFBMEM7QUFDN0MsYUFBS0ssU0FBTCxHQUFpQlAsU0FBUyxDQUFDQyxNQUEzQjtBQUNIO0FBQ0o7OzsrQkFFVTtBQUVQLFdBQUsvQixLQUFMLENBQVd3RixHQUFYO0FBQ0EsV0FBS0MsWUFBTDtBQUNBLFdBQUs1QyxhQUFMO0FBQ0EsV0FBS0ssS0FBTCxHQUFhLElBQUloRixLQUFKLENBQVUsS0FBS0MsTUFBZixFQUF1QixLQUFLQyxHQUE1QixFQUFpQyxJQUFqQyxDQUFiO0FBQ0EsV0FBS2lFLFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0UsT0FBM0I7QUFDSDs7O21DQUVhO0FBQ1YsV0FBS2UsTUFBTCxHQUFjLElBQUluQixLQUFKLENBQVUsSUFBVixDQUFkO0FBQ0EsV0FBS29CLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlFLEtBQVosQ0FBa0IsS0FBSzFDLFlBQXZCLENBQWI7QUFDSDs7OytCQUVVO0FBQ1AsVUFBSSxLQUFLUCxLQUFMLENBQVcrRCxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQUsxQixTQUFMLEdBQWlCUCxTQUFTLENBQUNJLFFBQTNCO0FBQ0EsYUFBSzNCLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLa0YsWUFBTDtBQUNIO0FBQ0o7Ozs0QkFFTztBQUNKLFVBQUksS0FBS3BELFNBQUwsS0FBbUJQLFNBQVMsQ0FBQ0UsT0FBakMsRUFBMEM7QUFDdEM7QUFDQSxZQUFJMEQsS0FBSyxHQUFHLElBQUl6SCxLQUFKLENBQVUsS0FBS0UsTUFBZixFQUF1QixLQUFLQyxHQUE1QixFQUFpQyxJQUFqQyxDQUFaLENBRnNDLENBR3RDOztBQUNJLGFBQUtvQixNQUFMLENBQVl3RSxJQUFaLENBQWlCMEIsS0FBakI7QUFDUDtBQUNKOzs7b0NBRWU7QUFBQTs7QUFDWixXQUFLeEcsT0FBTCxHQUFlLEtBQUs4RCxLQUFMLENBQVcyQyxHQUFYLENBQWUsVUFBQXZHLE1BQU0sRUFBSTtBQUNwQyxZQUFJQSxNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIsaUJBQU8sSUFBSXhCLE1BQUosQ0FBVyxNQUFJLENBQUNLLE1BQWhCLEVBQXdCLE1BQUksQ0FBQ0MsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUM7QUFDeEN1QyxhQUFDLEVBQUV2QixNQUFNLENBQUN1QixDQUQ4QjtBQUV4Q0MsYUFBQyxFQUFFeEIsTUFBTSxDQUFDd0IsQ0FGOEI7QUFHeEM3QixrQkFBTSxFQUFFLEdBSGdDO0FBSXhDRCxpQkFBSyxFQUFFLEdBSmlDO0FBS3hDK0Isb0JBQVEsRUFBRXpCLE1BQU0sQ0FBQ3lCLFFBTHVCO0FBTXhDQyxvQkFBUSxFQUFFMUIsTUFBTSxDQUFDMEIsUUFOdUI7QUFPeENDLG1CQUFPLEVBQUUsR0FQK0I7QUFReENDLHdCQUFZLEVBQUUsQ0FSMEI7QUFTeENDLGtCQUFNLEVBQUU7QUFUZ0MsV0FBckMsQ0FBUDtBQVdILFNBWkQsTUFZUyxJQUFJN0IsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLENBQXBCLEVBQXVCO0FBQzVCLGlCQUFPLElBQUl4QixNQUFKLENBQVcsTUFBSSxDQUFDSyxNQUFoQixFQUF3QixNQUFJLENBQUNDLEdBQTdCLEVBQWtDLENBQWxDLEVBQXFDO0FBQ3hDdUMsYUFBQyxFQUFFdkIsTUFBTSxDQUFDdUIsQ0FEOEI7QUFFeENDLGFBQUMsRUFBRXhCLE1BQU0sQ0FBQ3dCLENBRjhCO0FBR3hDN0Isa0JBQU0sRUFBRSxHQUhnQztBQUl4Q0QsaUJBQUssRUFBRSxHQUppQztBQUt4QytCLG9CQUFRLEVBQUV6QixNQUFNLENBQUN5QixRQUx1QjtBQU14Q0Msb0JBQVEsRUFBRTFCLE1BQU0sQ0FBQzBCLFFBTnVCO0FBT3hDQyxtQkFBTyxFQUFFLEdBUCtCO0FBUXhDQyx3QkFBWSxFQUFFLENBUjBCO0FBU3hDQyxrQkFBTSxFQUFFO0FBVGdDLFdBQXJDLENBQVA7QUFXSCxTQVpRLE1BWUYsSUFBSTdCLE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQixDQUFwQixFQUF1QjtBQUMxQixpQkFBTyxJQUFJeEIsTUFBSixDQUFXLE1BQUksQ0FBQ0ssTUFBaEIsRUFBd0IsTUFBSSxDQUFDQyxHQUE3QixFQUFrQyxDQUFsQyxFQUFxQztBQUN4Q3VDLGFBQUMsRUFBRXZCLE1BQU0sQ0FBQ3VCLENBRDhCO0FBRXhDQyxhQUFDLEVBQUV4QixNQUFNLENBQUN3QixDQUY4QjtBQUd4QzdCLGtCQUFNLEVBQUUsR0FIZ0M7QUFJeENELGlCQUFLLEVBQUUsR0FKaUM7QUFLeEMrQixvQkFBUSxFQUFFekIsTUFBTSxDQUFDeUIsUUFMdUI7QUFNeENDLG9CQUFRLEVBQUUxQixNQUFNLENBQUMwQixRQU51QjtBQU94Q0MsbUJBQU8sRUFBRSxHQVArQjtBQVF4Q0Msd0JBQVksRUFBRSxDQVIwQjtBQVN4Q0Msa0JBQU0sRUFBRTtBQVRnQyxXQUFyQyxDQUFQO0FBV0gsU0FaTSxNQVlBLElBQUk3QixNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDMUIsaUJBQU8sSUFBSXhCLE1BQUosQ0FBVyxNQUFJLENBQUNLLE1BQWhCLEVBQXdCLE1BQUksQ0FBQ0MsR0FBN0IsRUFBa0MsQ0FBbEMsRUFBcUM7QUFDeEN1QyxhQUFDLEVBQUV2QixNQUFNLENBQUN1QixDQUQ4QjtBQUV4Q0MsYUFBQyxFQUFFeEIsTUFBTSxDQUFDd0IsQ0FGOEI7QUFHeEM3QixrQkFBTSxFQUFFLEdBSGdDO0FBSXhDRCxpQkFBSyxFQUFFLEdBSmlDO0FBS3hDK0Isb0JBQVEsRUFBRXpCLE1BQU0sQ0FBQ3lCLFFBTHVCO0FBTXhDQyxvQkFBUSxFQUFFMUIsTUFBTSxDQUFDMEIsUUFOdUI7QUFPeENDLG1CQUFPLEVBQUUsR0FQK0I7QUFReENDLHdCQUFZLEVBQUUsQ0FSMEI7QUFTeENDLGtCQUFNLEVBQUU7QUFUZ0MsV0FBckMsQ0FBUDtBQVdILFNBWk0sTUFZQSxJQUFJN0IsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLENBQXBCLEVBQXVCO0FBQzFCLGlCQUFPLElBQUl4QixNQUFKLENBQVcsTUFBSSxDQUFDSyxNQUFoQixFQUF3QixNQUFJLENBQUNDLEdBQTdCLEVBQWtDLENBQWxDLEVBQXFDO0FBQ3hDdUMsYUFBQyxFQUFFdkIsTUFBTSxDQUFDdUIsQ0FEOEI7QUFFeENDLGFBQUMsRUFBRXhCLE1BQU0sQ0FBQ3dCLENBRjhCO0FBR3hDN0Isa0JBQU0sRUFBRSxFQUhnQztBQUl4Q0QsaUJBQUssRUFBRSxFQUppQztBQUt4QytCLG9CQUFRLEVBQUV6QixNQUFNLENBQUN5QixRQUx1QjtBQU14Q0Msb0JBQVEsRUFBRTFCLE1BQU0sQ0FBQzBCLFFBTnVCO0FBT3hDQyxtQkFBTyxFQUFFLEdBUCtCO0FBUXhDQyx3QkFBWSxFQUFFLENBUjBCO0FBU3hDQyxrQkFBTSxFQUFFO0FBVGdDLFdBQXJDLENBQVA7QUFXSDtBQUVKLE9BL0RjLENBQWY7QUFnRUg7OztrQ0FFYTdCLE0sRUFBUWMsRyxFQUFLO0FBQUE7O0FBQ3ZCLFdBQUtJLEtBQUwsSUFBYyxHQUFkO0FBQ0EsV0FBS2QsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLd0QsS0FBTCxDQUFXN0QsT0FBWCxDQUFtQixVQUFDeUcsV0FBRCxFQUFjQyxJQUFkLEVBQXVCO0FBQ3RDLGNBQUksQ0FBQzNHLE9BQUwsQ0FBYUMsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQVMwRyxJQUFULEVBQWtCO0FBQ25DLGNBQUlELElBQUksS0FBS0MsSUFBYixFQUFtQjtBQUNmRix1QkFBVyxDQUFDakYsQ0FBWixHQUFnQnZCLE1BQU0sQ0FBQ3VCLENBQXZCO0FBQ0FpRix1QkFBVyxDQUFDaEYsQ0FBWixHQUFnQnhCLE1BQU0sQ0FBQ3dCLENBQXZCO0FBQ0FnRix1QkFBVyxDQUFDL0UsUUFBWixHQUF1QnpCLE1BQU0sQ0FBQ3lCLFFBQTlCO0FBQ0ErRSx1QkFBVyxDQUFDOUUsUUFBWixHQUF1QjFCLE1BQU0sQ0FBQzBCLFFBQTlCO0FBQ0g7QUFDSixTQVBEO0FBUUgsT0FURDtBQVVBLFdBQUtrQyxLQUFMLENBQVdPLE1BQVgsQ0FBa0JyRCxHQUFsQixFQUF1QixDQUF2Qjs7QUFFQSxVQUFJZCxNQUFNLENBQUNFLElBQVAsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIsYUFBSzBELEtBQUwsQ0FBV2dCLElBQVgsQ0FBZ0I7QUFBRTFFLGNBQUksRUFBRUYsTUFBTSxDQUFDRSxJQUFQLEdBQWMsQ0FBdEI7QUFBeUJxQixXQUFDLEVBQUV2QixNQUFNLENBQUN1QixDQUFuQztBQUFzQ0MsV0FBQyxFQUFFeEIsTUFBTSxDQUFDd0IsQ0FBaEQ7QUFBbURDLGtCQUFRLEVBQUV6QixNQUFNLENBQUN5QixRQUFwRTtBQUE4RUMsa0JBQVEsRUFBRTFCLE1BQU0sQ0FBQzBCO0FBQS9GLFNBQWhCO0FBQ0EsYUFBS2tDLEtBQUwsQ0FBV2dCLElBQVgsQ0FBZ0I7QUFBRTFFLGNBQUksRUFBRUYsTUFBTSxDQUFDRSxJQUFQLEdBQWMsQ0FBdEI7QUFBeUJxQixXQUFDLEVBQUV2QixNQUFNLENBQUN1QixDQUFuQztBQUFzQ0MsV0FBQyxFQUFFeEIsTUFBTSxDQUFDd0IsQ0FBaEQ7QUFBbURDLGtCQUFRLEVBQUUsQ0FBQ3pCLE1BQU0sQ0FBQ3lCLFFBQXJFO0FBQStFQyxrQkFBUSxFQUFFLENBQUMxQixNQUFNLENBQUMwQjtBQUFqRyxTQUFoQjtBQUNIOztBQUNELFVBQUksS0FBS2tDLEtBQUwsQ0FBV2UsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUN6QixhQUFLZ0MsWUFBTDtBQUNIOztBQUNELFdBQUtDLFFBQUwsQ0FBYzVHLE1BQU0sQ0FBQ3VCLENBQXJCLEVBQXdCdkIsTUFBTSxDQUFDd0IsQ0FBL0I7QUFDQSxXQUFLaUMsYUFBTDtBQUNIOzs7bUNBRWM7QUFBQTs7QUFDWCxXQUFLdEMsWUFBTCxJQUFxQixDQUFyQjtBQUNBLFdBQUtrRixZQUFMO0FBQ0EsV0FBS3BELFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0ssU0FBM0I7QUFDQThELGdCQUFVLENBQUMsWUFBTTtBQUFFLGNBQUksQ0FBQzVELFNBQUwsR0FBaUJQLFNBQVMsQ0FBQ0UsT0FBM0I7QUFBb0MsT0FBN0MsRUFBK0MsSUFBL0MsQ0FBVjtBQUNIOzs7NkJBRVFyQixDLEVBQUdDLEMsRUFBRztBQUNYLFdBQUtqQixLQUFMLENBQVdxRSxJQUFYLENBQWdCLElBQUluQyxJQUFKLENBQVNsQixDQUFULEVBQVlDLENBQVosRUFBZSxJQUFmLENBQWhCO0FBRUg7Ozs7OztBQUdMSixNQUFNLENBQUNDLE9BQVAsR0FBaUIyQixJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ2hWTThELEs7QUFDRixpQkFBWXZGLENBQVosRUFBZUMsQ0FBZixFQUFrQnZDLElBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtzQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLdUYsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLckMsWUFBTCxHQUFvQnZDLElBQUksQ0FBQzZFLEtBQUwsQ0FBVzdFLElBQUksQ0FBQzhFLE1BQUwsS0FBZ0IsSUFBM0IsQ0FBcEI7QUFDQSxTQUFLaEksSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3dCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS2QsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLRCxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7OzJCQUdEO0FBQ1EsVUFBSSxLQUFLZ0YsWUFBTCxJQUFxQixHQUF6QixFQUE4QjtBQUFDO0FBQzNCLFlBQUkvRCxLQUFLLEdBQUcsSUFBSXBCLEtBQUosRUFBWjtBQUNBb0IsYUFBSyxDQUFDbkIsR0FBTixHQUFZLHNCQUFaO0FBQ0EsYUFBS0csTUFBTCxHQUFjLEdBQWQ7QUFDQSxhQUFLRCxLQUFMLEdBQWEsR0FBYjtBQUNBLGFBQUtULElBQUwsQ0FBVUQsR0FBVixDQUFjUyxTQUFkLENBQXdCa0IsS0FBeEIsRUFBK0IsS0FBS1ksQ0FBcEMsRUFBdUMsS0FBS0MsQ0FBNUMsRUFBK0MsR0FBL0MsRUFBb0QsR0FBcEQ7QUFDSCxPQU5ELE1BTU8sSUFBSSxLQUFLa0QsWUFBTCxJQUFxQixHQUF6QixFQUE4QjtBQUFDO0FBQ2xDLFlBQUl3QyxPQUFPLEdBQUcsSUFBSTNILEtBQUosRUFBZDtBQUNBMkgsZUFBTyxDQUFDMUgsR0FBUixHQUFjLHlCQUFkO0FBQ0EsYUFBS0csTUFBTCxHQUFjLEdBQWQ7QUFDQSxhQUFLRCxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUtULElBQUwsQ0FBVUQsR0FBVixDQUFjUyxTQUFkLENBQXdCeUgsT0FBeEIsRUFBaUMsS0FBSzNGLENBQXRDLEVBQXlDLEtBQUtDLENBQTlDLEVBQWlELEVBQWpELEVBQXFELEVBQXJEO0FBQ0gsT0FOTSxNQU1BLElBQUksS0FBS2tELFlBQUwsSUFBcUIsR0FBekIsRUFBOEI7QUFBQztBQUNsQyxZQUFJeUMsU0FBUyxHQUFHLElBQUk1SCxLQUFKLEVBQWhCO0FBQ0E0SCxpQkFBUyxDQUFDM0gsR0FBVixHQUFnQiwyQkFBaEI7QUFDQSxhQUFLRyxNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtELEtBQUwsR0FBYSxFQUFiO0FBQ0EsYUFBS1QsSUFBTCxDQUFVRCxHQUFWLENBQWNTLFNBQWQsQ0FBd0IwSCxTQUF4QixFQUFtQyxLQUFLNUYsQ0FBeEMsRUFBMkMsS0FBS0MsQ0FBaEQsRUFBbUQsRUFBbkQsRUFBdUQsRUFBdkQ7QUFDSCxPQU5NLE1BT0YsSUFBSSxLQUFLa0QsWUFBTCxJQUFxQixHQUF6QixFQUE4QjtBQUFDO0FBQ2hDLFlBQUkwQyxRQUFRLEdBQUcsSUFBSTdILEtBQUosRUFBZjtBQUNBNkgsZ0JBQVEsQ0FBQzVILEdBQVQsR0FBZSwwQkFBZjtBQUNBLGFBQUtHLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBS0QsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLVCxJQUFMLENBQVVELEdBQVYsQ0FBY1MsU0FBZCxDQUF3QjJILFFBQXhCLEVBQWtDLEtBQUs3RixDQUF2QyxFQUEwQyxLQUFLQyxDQUEvQyxFQUFrRCxFQUFsRCxFQUFzRCxFQUF0RDtBQUNIO0FBQ0o7Ozs2QkFFSTtBQUFBOztBQUNMLFdBQUtBLENBQUwsSUFBVSxLQUFLdUYsRUFBZjs7QUFFQSxVQUFJLEtBQUt2RixDQUFMLEdBQVMsS0FBS3VGLEVBQWQsSUFBb0IsS0FBSzlILElBQUwsQ0FBVUYsTUFBVixDQUFpQlksTUFBakIsR0FBMEIsS0FBS0EsTUFBTCxHQUFjLENBQWhFLEVBQW1FO0FBRS9ELGFBQUtvSCxFQUFMLEdBQVUsQ0FBVjtBQUNBRixrQkFBVSxDQUFDLFlBQU07QUFBRSxlQUFJLENBQUNwRyxNQUFMLEdBQWMsSUFBZDtBQUFxQixTQUE5QixFQUFnQyxHQUFoQyxDQUFWO0FBQ0g7QUFDSjs7Ozs7O0FBR0xXLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnlGLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7SUNyRE12RSxZLEdBQ0Ysc0JBQVl0RCxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsT0FBS29JLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLElBQUlDLEtBQUosQ0FBVSxnRUFBVixDQUFiO0FBQ0F4RixVQUFRLENBQUN5RixnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFDdEMsWUFBUUEsQ0FBQyxDQUFDQyxHQUFWO0FBQ0ksV0FBTSxZQUFOO0FBQ0l6SSxZQUFJLENBQUM2RSxLQUFMLENBQVd6RSxNQUFYLENBQWtCc0ksU0FBbEI7QUFDQTs7QUFFSixXQUFNLFdBQU47QUFDSTFJLFlBQUksQ0FBQzZFLEtBQUwsQ0FBV3pFLE1BQVgsQ0FBa0J1SSxRQUFsQjtBQUNBOztBQUVKLFdBQU0sR0FBTjtBQUNJM0ksWUFBSSxDQUFDb0UsV0FBTDtBQUNBOztBQUNKLFdBQU0sR0FBTjtBQUNJcEUsWUFBSSxDQUFDa0UsS0FBTDtBQUNBOztBQUNKLFdBQU0sR0FBTjtBQUNJLGFBQUksQ0FBQ21FLEtBQUwsQ0FBV08sSUFBWDs7QUFDQSxZQUFJLEtBQUksQ0FBQ1IsTUFBVCxFQUFpQjtBQUNicEksWUFBSSxDQUFDdUUsS0FBTDtBQUNKLGFBQUksQ0FBQzZELE1BQUwsR0FBYyxJQUFkO0FBQ0FSLGtCQUFVLENBQUMsWUFBTTtBQUFFLGVBQUksQ0FBQ1EsTUFBTCxHQUFjLEtBQWQ7QUFBc0IsU0FBL0IsRUFBaUMsR0FBakMsQ0FBVjtBQUNBOztBQUNKO0FBQ0k7QUF2QlI7QUF5QkgsR0ExQkQ7QUE0QkF0RixVQUFRLENBQUN5RixnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFBQyxDQUFDLEVBQUk7QUFDcEMsWUFBUUEsQ0FBQyxDQUFDQyxHQUFWO0FBQ0ksV0FBTSxZQUFOO0FBQ0ksWUFBSXpJLElBQUksQ0FBQzZFLEtBQUwsQ0FBV3pFLE1BQVgsQ0FBa0J5SSxLQUFsQixHQUEwQixDQUE5QixFQUFpQzdJLElBQUksQ0FBQzZFLEtBQUwsQ0FBV3pFLE1BQVgsQ0FBa0IwSSxJQUFsQjtBQUNqQzs7QUFFSixXQUFNLFdBQU47QUFDSSxZQUFJOUksSUFBSSxDQUFDNkUsS0FBTCxDQUFXekUsTUFBWCxDQUFrQnlJLEtBQWxCLEdBQTBCLENBQTlCLEVBQWlDN0ksSUFBSSxDQUFDNkUsS0FBTCxDQUFXekUsTUFBWCxDQUFrQjBJLElBQWxCO0FBQ2pDOztBQUNKO0FBQ0k7QUFUUjtBQVdILEdBWkQ7QUFhSCxDOztBQUdMM0csTUFBTSxDQUFDQyxPQUFQLEdBQWlCa0IsWUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoRE0xRCxLO0FBQ0YsaUJBQVlFLE1BQVosRUFBb0JDLEdBQXBCLEVBQXlCQyxJQUF6QixFQUErQjtBQUFBOztBQUMzQixTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLc0MsQ0FBTCxHQUFTLEtBQUt0QyxJQUFMLENBQVU2RSxLQUFWLENBQWdCekUsTUFBaEIsQ0FBdUJnRixRQUF2QixDQUFnQzlDLENBQWhDLEdBQW9DLEVBQTdDO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEtBQUt6QyxNQUFMLENBQVlZLE1BQVosR0FBcUIsR0FBOUI7QUFDQSxTQUFLcUksTUFBTCxHQUFjLEVBQWQ7QUFFQSxTQUFLL0gsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVWQsSUFBVixDQUFlLElBQWYsQ0FBWjtBQUNBLFNBQUt1QixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZdkIsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBR0g7Ozs7MkJBRU07QUFDSCxVQUFJbUgsS0FBSyxHQUFHLElBQUkvRyxLQUFKLEVBQVo7QUFDQStHLFdBQUssQ0FBQzlHLEdBQU4sR0FBWSxzQkFBWjtBQUNBLFdBQUtSLEdBQUwsQ0FBU1ksU0FBVDtBQUNBLFdBQUtaLEdBQUwsQ0FBU1MsU0FBVCxDQUFtQjZHLEtBQW5CLEVBQTBCLEtBQUsvRSxDQUEvQixFQUFrQyxLQUFLQyxDQUF2QyxFQUEwQyxFQUExQyxFQUE4QyxFQUE5QztBQUNBLFdBQUt4QyxHQUFMLENBQVNpSixTQUFUO0FBQ0g7Ozs2QkFFUTtBQUNMLFdBQUt6RyxDQUFMLElBQVUsS0FBS3dHLE1BQWY7QUFDSDs7Ozs7O0FBR0w1RyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QyxLQUFqQixDOzs7Ozs7Ozs7Ozs7O0lDNUJNMkQsSyxHQUNGLGVBQVl2RCxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsT0FBSzRFLEtBQUwsR0FBYTtBQUNULE9BQUcsQ0FBQztBQUFFM0QsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQWxDO0FBQXFDOEIsT0FBQyxFQUFFLEVBQXhDO0FBQTRDQyxjQUFRLEVBQUUsQ0FBdEQ7QUFBeURDLGNBQVEsRUFBRTtBQUFuRSxLQUFELENBRE07QUFFVCxPQUFHLENBQUM7QUFBRXhCLFVBQUksRUFBRSxDQUFSO0FBQVdxQixPQUFDLEVBQUV0QyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFsQztBQUFxQzhCLE9BQUMsRUFBRSxFQUF4QztBQUE0Q0MsY0FBUSxFQUFFLENBQXREO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxDQUZNO0FBR1QsT0FBRyxDQUFDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbEM7QUFBcUM4QixPQUFDLEVBQUUsRUFBeEM7QUFBNENDLGNBQVEsRUFBRSxDQUF0RDtBQUF5REMsY0FBUSxFQUFFO0FBQW5FLEtBQUQsQ0FITTtBQUlULE9BQUcsQ0FBQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQWxDO0FBQXFDOEIsT0FBQyxFQUFFLEVBQXhDO0FBQTRDQyxjQUFRLEVBQUUsQ0FBdEQ7QUFBeURDLGNBQVEsRUFBRTtBQUFuRSxLQUFELENBSk07QUFLVCxPQUFHLENBQUM7QUFBRXhCLFVBQUksRUFBRSxDQUFSO0FBQVdxQixPQUFDLEVBQUV0QyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFsQztBQUFxQzhCLE9BQUMsRUFBRSxFQUF4QztBQUE0Q0MsY0FBUSxFQUFFLENBQXREO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxFQUNDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsR0FBdEM7QUFBMkM4QixPQUFDLEVBQUUsRUFBOUM7QUFBa0RDLGNBQVEsRUFBRSxDQUE1RDtBQUErREMsY0FBUSxFQUFFLENBQUM7QUFBMUUsS0FERCxDQUxNO0FBT1QsT0FBRyxDQUFDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbEM7QUFBcUM4QixPQUFDLEVBQUUsRUFBeEM7QUFBNENDLGNBQVEsRUFBRSxDQUF0RDtBQUF5REMsY0FBUSxFQUFFO0FBQW5FLEtBQUQsRUFDQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXBCLEdBQXdCLEdBQXRDO0FBQTJDOEIsT0FBQyxFQUFFLEVBQTlDO0FBQWtEQyxjQUFRLEVBQUUsQ0FBNUQ7QUFBK0RDLGNBQVEsRUFBRSxDQUFDO0FBQTFFLEtBREQsQ0FQTTtBQVNULE9BQUcsQ0FBQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQWxDO0FBQXFDOEIsT0FBQyxFQUFFLEVBQXhDO0FBQTRDQyxjQUFRLEVBQUUsQ0FBdEQ7QUFBeURDLGNBQVEsRUFBRTtBQUFuRSxLQUFELEVBQ0M7QUFBRXhCLFVBQUksRUFBRSxDQUFSO0FBQVdxQixPQUFDLEVBQUV0QyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFwQixHQUF3QixHQUF0QztBQUEyQzhCLE9BQUMsRUFBRSxFQUE5QztBQUFrREMsY0FBUSxFQUFFLENBQTVEO0FBQStEQyxjQUFRLEVBQUUsQ0FBQztBQUExRSxLQURELEVBRUM7QUFBRXhCLFVBQUksRUFBRSxDQUFSO0FBQVdxQixPQUFDLEVBQUV0QyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFwQixHQUF3QixHQUF0QztBQUEyQzhCLE9BQUMsRUFBRSxFQUE5QztBQUFrREMsY0FBUSxFQUFFLENBQTVEO0FBQStEQyxjQUFRLEVBQUUsQ0FBQztBQUExRSxLQUZELENBVE07QUFZVCxPQUFHLENBQUM7QUFBRXhCLFVBQUksRUFBRSxDQUFSO0FBQVdxQixPQUFDLEVBQUV0QyxJQUFJLENBQUNGLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFsQztBQUFxQzhCLE9BQUMsRUFBRSxFQUF4QztBQUE0Q0MsY0FBUSxFQUFFLENBQXREO0FBQXlEQyxjQUFRLEVBQUU7QUFBbkUsS0FBRCxFQUNDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsR0FBdEM7QUFBMkM4QixPQUFDLEVBQUUsRUFBOUM7QUFBa0RDLGNBQVEsRUFBRSxDQUE1RDtBQUErREMsY0FBUSxFQUFFLENBQUM7QUFBMUUsS0FERCxFQUVDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBcEIsR0FBd0IsR0FBdEM7QUFBMkM4QixPQUFDLEVBQUUsRUFBOUM7QUFBa0RDLGNBQVEsRUFBRSxDQUE1RDtBQUErREMsY0FBUSxFQUFFLENBQUM7QUFBMUUsS0FGRCxDQVpNO0FBZVQsT0FBRyxDQUFDO0FBQUV4QixVQUFJLEVBQUUsQ0FBUjtBQUFXcUIsT0FBQyxFQUFFdEMsSUFBSSxDQUFDRixNQUFMLENBQVlXLEtBQVosR0FBb0IsQ0FBbEM7QUFBcUM4QixPQUFDLEVBQUUsRUFBeEM7QUFBNENDLGNBQVEsRUFBRSxDQUF0RDtBQUF5REMsY0FBUSxFQUFFO0FBQW5FLEtBQUQsRUFDQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXBCLEdBQXdCLEdBQXRDO0FBQTJDOEIsT0FBQyxFQUFFLEVBQTlDO0FBQWtEQyxjQUFRLEVBQUUsQ0FBNUQ7QUFBK0RDLGNBQVEsRUFBRSxDQUFDO0FBQTFFLEtBREQsRUFFQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXBCLEdBQXdCLEdBQXRDO0FBQTJDOEIsT0FBQyxFQUFFLEVBQTlDO0FBQWtEQyxjQUFRLEVBQUUsQ0FBNUQ7QUFBK0RDLGNBQVEsRUFBRSxDQUFDO0FBQTFFLEtBRkQsRUFHQztBQUFFeEIsVUFBSSxFQUFFLENBQVI7QUFBV3FCLE9BQUMsRUFBRXRDLElBQUksQ0FBQ0YsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLENBQXBCLEdBQXdCLEdBQXRDO0FBQTJDOEIsT0FBQyxFQUFFLEVBQTlDO0FBQWtEQyxjQUFRLEVBQUUsQ0FBNUQ7QUFBK0RDLGNBQVEsRUFBRSxDQUFDO0FBQTFFLEtBSEQ7QUFmTSxHQUFiO0FBb0JILEM7O0FBR0xOLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm1CLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekJNNUQsTTtBQUNGLGtCQUFZRyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUNyQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFFQSxTQUFLVSxLQUFMLEdBQWEsR0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBRUEsU0FBS3VJLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLSixLQUFMLEdBQWEsQ0FBYjtBQUVBLFNBQUt6RCxRQUFMLEdBQWdCO0FBQ1o5QyxPQUFDLEVBQUUsS0FBS3hDLE1BQUwsQ0FBWVcsS0FBWixHQUFvQixDQUFwQixHQUF3QixLQUFLQSxLQUFMLEdBQWEsQ0FENUI7QUFFWjhCLE9BQUMsRUFBRSxLQUFLekMsTUFBTCxDQUFZWSxNQUFaLEdBQXFCLEtBQUtBLE1BQTFCLEdBQW1DO0FBRjFCLEtBQWhCO0FBSUg7Ozs7K0JBRVU7QUFDUCxXQUFLbUksS0FBTCxHQUFhLENBQUMsS0FBS0ksUUFBbkI7QUFDSDs7O2dDQUVXO0FBQ1IsV0FBS0osS0FBTCxHQUFhLEtBQUtJLFFBQWxCO0FBQ0g7OzsyQkFFTTtBQUNILFVBQUk3SSxNQUFNLEdBQUcsSUFBSUUsS0FBSixFQUFiO0FBQ0FGLFlBQU0sQ0FBQ0csR0FBUCxHQUFhLHVCQUFiO0FBQ0EsV0FBS1IsR0FBTCxDQUFTWSxTQUFUO0FBQ0EsV0FBS1osR0FBTCxDQUFTUyxTQUFULENBQW1CSixNQUFuQixFQUEyQixLQUFLZ0YsUUFBTCxDQUFjOUMsQ0FBekMsRUFBNEMsS0FBSzhDLFFBQUwsQ0FBYzdDLENBQTFELEVBQTZELEtBQUs5QixLQUFsRSxFQUF5RSxLQUFLQyxNQUE5RTtBQUNBLFdBQUtYLEdBQUwsQ0FBU2lKLFNBQVQ7QUFFSDs7OzZCQUVRO0FBRUwsV0FBSzVELFFBQUwsQ0FBYzlDLENBQWQsSUFBbUIsS0FBS3VHLEtBQXhCOztBQUVBLFVBQUksS0FBS3pELFFBQUwsQ0FBYzlDLENBQWQsR0FBa0IsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixhQUFLOEMsUUFBTCxDQUFjOUMsQ0FBZCxHQUFrQixDQUFDLEVBQW5CO0FBQ0g7O0FBRUQsVUFBSSxLQUFLOEMsUUFBTCxDQUFjOUMsQ0FBZCxHQUFrQixLQUFLN0IsS0FBdkIsR0FBK0IsS0FBS1gsTUFBTCxDQUFZVyxLQUFaLEdBQW9CLEVBQXZELEVBQTJEO0FBQ3ZELGFBQUsyRSxRQUFMLENBQWM5QyxDQUFkLEdBQWtCLEtBQUt4QyxNQUFMLENBQVlXLEtBQVosR0FBb0IsS0FBS0EsS0FBekIsR0FBaUMsRUFBbkQ7QUFDSDtBQUNKOzs7MkJBRU07QUFDSCxXQUFLb0ksS0FBTCxHQUFhLENBQWI7QUFDSDs7Ozs7O0FBR0wxRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QyxNQUFqQixDOzs7Ozs7Ozs7OztBQ3BEQW9FLElBQUksR0FBR3JFLG1CQUFPLENBQUMsb0NBQUQsQ0FBZDtBQUVBb0QsUUFBUSxDQUFDeUYsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBTXpJLE1BQU0sR0FBR2dELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0EsTUFBTWhELEdBQUcsR0FBR0QsTUFBTSxDQUFDb0osVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTWxKLElBQUksR0FBRyxJQUFJK0QsSUFBSixDQUFTakUsTUFBVCxFQUFpQkMsR0FBakIsQ0FBYjtBQUNBLE1BQUlvSixRQUFRLEdBQUcsQ0FBZjs7QUFHQUMsVUFBUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxJQUFHLFVBQUNDLFNBQUQsRUFBZTtBQUN0QkYsWUFBUSxHQUFHRSxTQUFYO0FBQ0FySixRQUFJLENBQUN5QixNQUFMO0FBQ0F6QixRQUFJLENBQUNnQixJQUFMO0FBQ0FzSSx5QkFBcUIsQ0FBQ0YsUUFBRCxDQUFyQjtBQUNILEdBTE8sQ0FBUjs7QUFNQUUsdUJBQXFCLENBQUNGLFFBQUQsQ0FBckI7QUFDSCxDQWRELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcblBsYXllciA9IHJlcXVpcmUoJy4uL2Rpc3QvcGxheWVyJyk7XG5MYXNlciA9IHJlcXVpcmUoJy4uL2Rpc3QvbGFzZXInKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY3R4LCBnYW1lKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5kcmF3R2FtZSA9IHRoaXMuZHJhd0dhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCA9IHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKTtcblxuICAgICAgICAvL2J1YmJsZVxuICAgICAgICAvLyB0aGlzLmJ1YmJsZSA9IG5ldyBCdWJibGUoY2FudmFzLCBjdHgsIHtcblxuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vcGxheWVyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjYW52YXMsIGN0eCk7XG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhY2tncm91bmQuc3JjID0gJ3NyYy9pbWFnZXMvYmFja2dyb3VuZF9sZXZlbF9vbmUuanBnJ1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIH1cblxuICAgIGRyYXdHYW1lKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4gYnViYmxlLmRyYXcoYnViYmxlLnNpemUpKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZHJhdygpO1xuICAgICAgICB0aGlzLmRyYXdMaXZlcygpO1xuICAgICAgICB0aGlzLmdhbWUubGFzZXJzLmZvckVhY2goc2hvdCA9PiBzaG90LmRyYXcoKSk7XG4gICAgICAgIHRoaXMuZHJhd1RleHQoKTtcbiAgICAgICAgdGhpcy5nYW1lLmdpZnRzLmZvckVhY2goZ2lmdCA9PiB7XG4gICAgICAgICAgICBpZiAoIWdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgZ2lmdC5kcmF3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZ2FtZS5idWJibGVzLmZvckVhY2goYnViYmxlID0+IGJ1YmJsZS51cGRhdGUoKSk7XG4gICAgICAgIHRoaXMuZ2FtZS5sYXNlcnMuZm9yRWFjaChzaG90ID0+IHNob3QudXBkYXRlKCkpO1xuICAgICAgICB0aGlzLmdhbWUuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmICghZ2lmdC5kZWxldGUpIHtcbiAgICAgICAgICAgICAgICBnaWZ0LnVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdMaXZlcygpIHtcbiAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhlYXJ0LnNyYyA9ICdzcmMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG4gICAgICAgIHRoaXMuZ2FtZS5saXZlcy5mb3JFYWNoKChoZWFydENvdW50LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShoZWFydCwgNjIwICsgaWR4ICogNDAsIDAsIDEwMCwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd1RleHQoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgSGlnaCBTY29yZTogJHt0aGlzLmdhbWUuc2NvcmV9YCwgNDAsIDUwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgTGV2ZWwgJHt0aGlzLmdhbWUuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgMzApO1xuICAgIH1cblxuICAgIGRyYXdHaWZ0cygpIHtcblxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImNsYXNzIEJ1YmJsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnggPSBvcHRpb25zLng7XG4gICAgICAgIHRoaXMueSA9IG9wdGlvbnMueTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCBcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGggXG5cbiAgICAgICAgdGhpcy5idWJibGVEWCA9IG9wdGlvbnMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMuYnViYmxlRFkgPSBvcHRpb25zLmJ1YmJsZURZO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSBvcHRpb25zLmdyYXZpdHk7XG4gICAgICAgIHRoaXMuZ3Jhdml0eVNwZWVkID0gb3B0aW9ucy5ncmF2aXR5U3BlZWQ7XG4gICAgICAgIHRoaXMuYm91bmNlID0gb3B0aW9ucy5ib3VuY2U7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemVcbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIGRyYXcoc2l6ZSkge1xuICAgICAgICBsZXQgYnViYmxlXG4gICAgICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGJ1YmJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhbmV0LWZpdmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1mb3VyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgYnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFuZXQtdGhyZWVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC10d29cIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBidWJibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldC1vbmVcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJ1YmJsZSwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGggKiAuNywgdGhpcy5oZWlnaHQgKiAuNyk7XG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1pbic7XG4gICAgICAgIHRoaXMuY3R4LmFyYygwLCAwLCA1MCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMuZ3Jhdml0eVNwZWVkICs9IHRoaXMuZ3Jhdml0eTtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuYnViYmxlRFg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmJ1YmJsZURZXG4gICAgICAgIC8vIGxldCByb2NrYm90dG9tID0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMueSA+IHJvY2tib3R0b20pIHtcbiAgICAgICAgLy8gICAgIHRoaXMueSA9IHJvY2tib3R0b207XG4gICAgICAgIC8vICAgICB0aGlzLmdyYXZpdHlTcGVlZCA9IC0odGhpcy5ncmF2aXR5U3BlZWQgKiB0aGlzLmJvdW5jZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRoaXMueCArIHRoaXMuYnViYmxlRFggPiB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggLyAyIC0gdGhpcy5oZWlnaHQgLyAxMCB8fCB0aGlzLnggKyB0aGlzLmJ1YmJsZURYIDwgLSB0aGlzLmhlaWdodCAvIDEwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURYID0gLXRoaXMuYnViYmxlRFg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueSArIHRoaXMuYnViYmxlRFkgPj0gdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyIHx8IHRoaXMueSArIHRoaXMuYnViYmxlRFkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZURZID0gLXRoaXMuYnViYmxlRFk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWFsQ29vcmRpbmF0ZXMoKVxuICAgIH1cblxuICAgIHJlYWxDb29yZGluYXRlcygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0MDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyA0NztcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyA0NztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAyNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxNTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVggPSB0aGlzLnggKyAxMjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1YmJsZVkgPSB0aGlzLnkgKyAyNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnViYmxlOyIsIkJvYXJkID0gcmVxdWlyZSgnLi4vZGlzdC9ib2FyZCcpO1xuSW5wdXRIYW5kbGVyID0gcmVxdWlyZSgnLi4vZGlzdC9pbnB1dF9oYW5kbGUnKTtcbkxhc2VyID0gcmVxdWlyZSgnLi4vZGlzdC9sYXNlcicpO1xuQnViYmxlID0gcmVxdWlyZSgnLi9idWJibGUnKTtcbkxldmVsID0gcmVxdWlyZSgnLi9sZXZlbHMnKTtcbkdpZnQgPSByZXF1aXJlKCcuL2dpZnRzJyk7XG5cbmNvbnN0IEdBTUVTVEFURSA9IHtcbiAgICBQQVVTRUQ6IDAsXG4gICAgUlVOTklORzogMSxcbiAgICBNRU5VOiAyLFxuICAgIEdBTUVPVkVSOiAzLFxuICAgIExFVkVMRE9ORTogNFxufTtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5NRU5VO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0ID0gbmV3IElucHV0SGFuZGxlcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uID0gdGhpcy5jb2xsaXNpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGVQYXVzZSA9IHRoaXMudG9nZ2xlUGF1c2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5sb3NlTGlmZSA9IHRoaXMubG9zZUxpZmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRoaXMuZ2FtZU92ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRoaXMuc2hvb3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzID0gdGhpcy5jcmVhdGVCdWJibGVzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZSA9IHRoaXMuZXhwbG9kZUJ1YmJsZS5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcyA9IFsxLCAxLCAxXTtcbiAgICAgICAgdGhpcy5sYXNlcnMgPSBbXVxuICAgICAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbCh0aGlzKVxuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDFcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMubGV2ZWxzLnNldHVwW3RoaXMuY3VycmVudExldmVsXVxuICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKVxuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5naWZ0cyA9IFtdXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1YmJsZXMoKVxuICAgICAgICAgICAgdGhpcy5saXZlcyA9IFswLCAxLCAyLCAzLCA0XTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5kcmF3R2FtZSgpO1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5NRU5VKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlByZXNzIE4gdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmN0eC5yZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuNSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIlBhdXNlZFwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLkdBTUVPVkVSKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIsIHRoaXMuY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQcmVzcyBOIHRvIHN0YXJ0IGEgbmV3IGdhbWVcIiwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyICsgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcblxuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBMRVZFTCAke3RoaXMuY3VycmVudExldmVsfWAsIHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCB8fCBcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuR0FNRU9WRVIgfHxcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID09PSBHQU1FU1RBVEUuTUVOVSB8fFxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5MRVZFTERPTkUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbigpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlR2FtZSgpO1xuICAgICAgICB0aGlzLmdpZnRzLmZvckVhY2goKGdpZnQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdpZnQuZGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5naWZ0cy5zcGxpY2UoaWR4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBjb2xsaXNpb24oKSB7XG4gICAgICAgIGNvbnN0IHsgcGxheWVyIH0gPSB0aGlzLmJvYXJkO1xuICAgICAgICBjb25zdCBwbGF5ZXJYID0gcGxheWVyLnBvc2l0aW9uLnggKyAzNTtcbiAgICAgICAgY29uc3QgcGxheWVyWSA9IHBsYXllci5wb3NpdGlvbi55ICsgNjU7XG4gICAgICAgIGNvbnN0IHJpZ2h0UG9pbnRQbGF5ZXJYID0gcGxheWVyWCArIDczO1xuXG4gICAgICAgIHRoaXMuZ2lmdHMuZm9yRWFjaChnaWZ0ID0+IHtcbiAgICAgICAgICAgIGlmIChnaWZ0LnkgKyBnaWZ0LmhlaWdodCAvIDIgPj0gcGxheWVyWSkge1xuICAgICAgICAgICAgICAgIGlmICgoZ2lmdC54ID49IHBsYXllclggJiYgZ2lmdC54IDw9IHJpZ2h0UG9pbnRQbGF5ZXJYKSB8fCAoZ2lmdC54ICsgZ2lmdC53aWR0aCA+PSBwbGF5ZXJYICYmIGdpZnQueCArIGdpZnQud2lkdGggPD0gcmlnaHRQb2ludFBsYXllclgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb2xsaXNpb24nKVxuICAgICAgICAgICAgICAgICAgICBnaWZ0LmRlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA5ODAgJiYgdGhpcy5saXZlcy5sZW5ndGggPCA1KSB7Ly9saXZlc1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGl2ZXMucHVzaCgxKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdpZnQucmFuZG9tTnVtYmVyID49IDg1MCkgey8vY29pbkJhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA3NTBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnaWZ0LnJhbmRvbU51bWJlciA+PSA2NTApIHsvLyBjb2luU3RhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gNTAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2lmdC5yYW5kb21OdW1iZXIgPj0gNDUwKXsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJ1YmJsZXMuc29tZSgoYnViYmxlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpdXMgPSBidWJibGUud2lkdGggLyA0LjU7XG4gICAgICAgICAgICBjb25zdCBidWJibGVDZW50ZXJYID0gYnViYmxlLmJ1YmJsZVggKyByYWRpdXNcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZUNlbnRlclkgPSBidWJibGUuYnViYmxlWSArIHJhZGl1c1xuICAgICAgICAgICAgLy9jaGVraW5nIGxlZnQgb2YgcGxheWVyXG4gICAgICAgICAgICBjb25zdCBkaXN0TGVmdFggPSBwbGF5ZXJYIC0gYnViYmxlQ2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RMZWZ0WSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VMZWZ0ID0gTWF0aC5oeXBvdChkaXN0TGVmdFgsIGRpc3RMZWZ0WSlcbiAgICAgICAgICAgIC8vY2hla2luZyByaWdodCBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RSaWdodFggPSByaWdodFBvaW50UGxheWVyWCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0UmlnaHRZID0gcGxheWVyWSAtIGJ1YmJsZUNlbnRlclk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZVJpZ2h0ID0gTWF0aC5oeXBvdChkaXN0UmlnaHRYLCBkaXN0UmlnaHRZKVxuICAgICAgICAgICAgLy9jaGVraW5nIG1pZGRsZSBvZiBwbGF5ZXJcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNaWRYID0gKHBsYXllclggKyA2Ny41KSAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBkaXN0TWlkWSA9IHBsYXllclkgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VNaWRkbGUgPSBNYXRoLmh5cG90KGRpc3RNaWRYLCBkaXN0TWlkWSlcbiAgICAgICAgICAgIGlmIChkaXN0YW5jZUxlZnQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlUmlnaHQgPD0gcmFkaXVzIHx8IGRpc3RhbmNlTWlkZGxlIDw9IHJhZGl1cykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubG9zZUxpZmUoKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnViYmxlLnNpemUgPT09IDEgJiYgYnViYmxlQ2VudGVyWCA+PSBwbGF5ZXJYICYmIGJ1YmJsZUNlbnRlclggPD0gcmlnaHRQb2ludFBsYXllclggJiYgYnViYmxlQ2VudGVyWSA+PSBwbGF5ZXJZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb3NlTGlmZSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzZXJzLmZvckVhY2goc2hvdCA9PiB7XG4gICAgICAgICAgICAgICAgLy9jaGVraW5nIGxhc2VyIGFuZCBidWJibGUgY29sbGlzaW9uXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzZXJQb2ludFggPSBzaG90LnggKyAxM1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc2VyUG9pbnRZID0gc2hvdC55ICsgN1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlclggPSBsYXNlclBvaW50WCAtIGJ1YmJsZUNlbnRlclg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdExhc2VyWSA9IGxhc2VyUG9pbnRZIC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TGFzZXJEb3duWSA9IGxhc2VyUG9pbnRZICsgNzAgLSBidWJibGVDZW50ZXJZO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RMYXNlck1pZFkgPSBsYXNlclBvaW50WSArIDM1IC0gYnViYmxlQ2VudGVyWTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyVXBwZXJQb2ludCA9IE1hdGguaHlwb3QoZGlzdExhc2VyWCwgZGlzdExhc2VyWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyRG93blBvaW50ID0gTWF0aC5oeXBvdChkaXN0TGFzZXJYLCBkaXN0TGFzZXJEb3duWSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPSBNYXRoLmh5cG90KGRpc3RMYXNlclgsIGRpc3RMYXNlck1pZFkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlTGFzZXJVcHBlclBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyRG93blBvaW50IDw9IHJhZGl1cyB8fCBkaXN0YW5jZUxhc2VyTWlkUG9pbnQgPD0gcmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwbG9kZUJ1YmJsZShidWJibGUsIGlkeClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICAgICAgXG4gICAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlBBVVNFRCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gR0FNRVNUQVRFLlJVTk5JTkcpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlBBVVNFRDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvc2VMaWZlKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5saXZlcy5wb3AoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCdWJibGVzKCk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQodGhpcy5jYW52YXMsIHRoaXMuY3R4LCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBHQU1FU1RBVEUuUlVOTklORztcbiAgICB9XG5cbiAgICByZXN0YXJ0TGV2ZWwoKXtcbiAgICAgICAgdGhpcy5sZXZlbHMgPSBuZXcgTGV2ZWwodGhpcyk7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmxldmVscy5zZXR1cFt0aGlzLmN1cnJlbnRMZXZlbF1cbiAgICB9XG5cbiAgICBnYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IEdBTUVTVEFURS5HQU1FT1ZFUjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMucmVzdGFydExldmVsKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IEdBTUVTVEFURS5SVU5OSU5HKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgbGV0IGxhc2VyID0gbmV3IExhc2VyKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgdGhpcylcbiAgICAgICAgICAgIC8vIGxhc2VyLnNvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgIHRoaXMubGFzZXJzLnB1c2gobGFzZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVCdWJibGVzKCkge1xuICAgICAgICB0aGlzLmJ1YmJsZXMgPSB0aGlzLmxldmVsLm1hcChidWJibGUgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1YmJsZS5zaXplID09PSA1KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA1LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLCBcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSAgIGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCA0LCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURYOiBidWJibGUuYnViYmxlRFgsXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZURZOiBidWJibGUuYnViYmxlRFksXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHk6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eVNwZWVkOiAwLFxuICAgICAgICAgICAgICAgICAgICBib3VuY2U6IDEuMDA1XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnViYmxlLnNpemUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ1YmJsZSh0aGlzLmNhbnZhcywgdGhpcy5jdHgsIDMsIHtcbiAgICAgICAgICAgICAgICAgICAgeDogYnViYmxlLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGJ1YmJsZS55LFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCxcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSxcbiAgICAgICAgICAgICAgICAgICAgZ3Jhdml0eTogMC4xLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5U3BlZWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5jZTogMS4wMDVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChidWJibGUuc2l6ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQnViYmxlKHRoaXMuY2FudmFzLCB0aGlzLmN0eCwgMiwge1xuICAgICAgICAgICAgICAgICAgICB4OiBidWJibGUueCxcbiAgICAgICAgICAgICAgICAgICAgeTogYnViYmxlLnksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJ1YmJsZS5zaXplID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCdWJibGUodGhpcy5jYW52YXMsIHRoaXMuY3R4LCAxLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGJ1YmJsZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBidWJibGUueSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1LFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWDogYnViYmxlLmJ1YmJsZURYLFxuICAgICAgICAgICAgICAgICAgICBidWJibGVEWTogYnViYmxlLmJ1YmJsZURZLFxuICAgICAgICAgICAgICAgICAgICBncmF2aXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIGdyYXZpdHlTcGVlZDogMCxcbiAgICAgICAgICAgICAgICAgICAgYm91bmNlOiAxLjAwNVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBsb2RlQnViYmxlKGJ1YmJsZSwgaWR4KSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMjUwO1xuICAgICAgICB0aGlzLmxhc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmxldmVsLmZvckVhY2goKGxldmVsQnViYmxlLCBpZHgxKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlLCBpZHgyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlkeDEgPT09IGlkeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxCdWJibGUueCA9IGJ1YmJsZS54O1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS55ID0gYnViYmxlLnk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsQnViYmxlLmJ1YmJsZURYID0gYnViYmxlLmJ1YmJsZURYO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbEJ1YmJsZS5idWJibGVEWSA9IGJ1YmJsZS5idWJibGVEWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxldmVsLnNwbGljZShpZHgsIDEpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGJ1YmJsZS5zaXplICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxldmVsLnB1c2goeyBzaXplOiBidWJibGUuc2l6ZSAtIDEsIHg6IGJ1YmJsZS54LCB5OiBidWJibGUueSwgYnViYmxlRFg6IGJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IGJ1YmJsZS5idWJibGVEWSB9KTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwucHVzaCh7IHNpemU6IGJ1YmJsZS5zaXplIC0gMSwgeDogYnViYmxlLngsIHk6IGJ1YmJsZS55LCBidWJibGVEWDogLWJ1YmJsZS5idWJibGVEWCwgYnViYmxlRFk6IC1idWJibGUuYnViYmxlRFl9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxDbGVhcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcm9wR2lmdChidWJibGUueCwgYnViYmxlLnkpXG4gICAgICAgIHRoaXMuY3JlYXRlQnViYmxlcygpO1xuICAgIH1cbiAgICBcbiAgICBsZXZlbENsZWFyZWQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExldmVsICs9IDE7XG4gICAgICAgIHRoaXMucmVzdGFydExldmVsKCk7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLkxFVkVMRE9ORTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZ2FtZVN0YXRlID0gR0FNRVNUQVRFLlJVTk5JTkcgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgZHJvcEdpZnQoeCwgeSkge1xuICAgICAgICB0aGlzLmdpZnRzLnB1c2gobmV3IEdpZnQoeCwgeSwgdGhpcykpXG4gICAgICAgIFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIEdpZnRzIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBnYW1lKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZFkgPSA1O1xuICAgICAgICB0aGlzLnJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgICAgICB0aGlzLmRlbGV0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAwXG4gICAgfVxuXG4gICAgZHJhdygpIFxuICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA5ODApIHsvL2xpdmVzXG4gICAgICAgICAgICAgICAgbGV0IGhlYXJ0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaGVhcnQuc3JjID0gJ3NyYy9pbWFnZXMvaGVhcnQucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDExMDtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGhlYXJ0LCB0aGlzLngsIHRoaXMueSwgMTAwLCAxMDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSA4NTApIHsvL2NvaW5CYWdcbiAgICAgICAgICAgICAgICBsZXQgY29pbkJhZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGNvaW5CYWcuc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9iYWcucG5nJztcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDEwOTtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmN0eC5kcmF3SW1hZ2UoY29pbkJhZywgdGhpcy54LCB0aGlzLnksIDYwLCA2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmFuZG9tTnVtYmVyID49IDY1MCkgey8vIGNvaW5TdGFja1xuICAgICAgICAgICAgICAgIGxldCBjb2luU3RhY2sgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICBjb2luU3RhY2suc3JjID0gJ3NyYy9pbWFnZXMvY29pbl9zdGFjay5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDMwO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGNvaW5TdGFjaywgdGhpcy54LCB0aGlzLnksIDMwLCAzMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnJhbmRvbU51bWJlciA+PSAyMDApIHsvLyBnb2xkQ29pblxuICAgICAgICAgICAgICAgIGxldCBnb2xkQ29pbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIGdvbGRDb2luLnNyYyA9ICdzcmMvaW1hZ2VzL2dvbGRfY29pbi5wbmcnO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDM1O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jdHguZHJhd0ltYWdlKGdvbGRDb2luLCB0aGlzLngsIHRoaXMueSwgMzUsIDM1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5kWTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnkgKyB0aGlzLmRZID49IHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZFkgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuZGVsZXRlID0gdHJ1ZTsgfSwgNTAwKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2lmdHM7IiwiY2xhc3MgSW5wdXRIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhcIi9Vc2Vycy9yYXplZnJvbi9EZXNrdG9wL2J1YmJsZV90cm91YmxlL3NyYy9zb3VuZHMvc2hvb3RpbmcubXAzXCIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChcIkFycm93UmlnaHRcIik6XG4gICAgICAgICAgICAgICAgICAgIGdhbWUuYm9hcmQucGxheWVyLm1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBnYW1lLmJvYXJkLnBsYXllci5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwicFwiKTogXG4gICAgICAgICAgICAgICAgICAgIGdhbWUudG9nZ2xlUGF1c2UoKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiblwiKTpcbiAgICAgICAgICAgICAgICAgICAgZ2FtZS5zdGFydCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAoXCIgXCIpOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NrZWQpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5zaG9vdCgpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2NrZWQgPSBmYWxzZTsgfSwgMjUwKTsgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dSaWdodFwiKTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWUuYm9hcmQucGxheWVyLnNwZWVkID4gMCkgZ2FtZS5ib2FyZC5wbGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgKFwiQXJyb3dMZWZ0XCIpOlxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZS5ib2FyZC5wbGF5ZXIuc3BlZWQgPCAwKSBnYW1lLmJvYXJkLnBsYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0gXG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRIYW5kbGVyOyIsImNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGN0eCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5ib2FyZC5wbGF5ZXIucG9zaXRpb24ueCArIDc1O1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMDA7XG4gICAgICAgIHRoaXMuc3BlZWRZID0gMTA7XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgbGFzZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbGFzZXIuc3JjID0gJ3NyYy9pbWFnZXMvbGFzZXIucG5nJ1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGxhc2VyLCB0aGlzLngsIHRoaXMueSwgMzAsIDkwKTtcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZFk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExhc2VyOyIsImNsYXNzIExldmVsIHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0dXAgPSB7XG4gICAgICAgICAgICAxOiBbeyBzaXplOiAyLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfV0sXG4gICAgICAgICAgICAyOiBbeyBzaXplOiAzLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfV0sXG4gICAgICAgICAgICAzOiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfV0sXG4gICAgICAgICAgICA0OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfV0sXG4gICAgICAgICAgICA1OiBbeyBzaXplOiA1LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiAzLCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH1dLFxuICAgICAgICAgICAgNjogW3sgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9XSxcbiAgICAgICAgICAgIDc6IFt7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogNSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDIwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAyMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH1dLFxuICAgICAgICAgICAgODogW3sgc2l6ZTogNSwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiA1IH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9LCBcbiAgICAgICAgICAgICAgICB7IHNpemU6IDQsIHg6IGdhbWUuY2FudmFzLndpZHRoIC8gMiAtIDQwMCwgeTogNDAsIGJ1YmJsZURYOiA1LCBidWJibGVEWTogLTUgfV0sXG4gICAgICAgICAgICA5OiBbeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IDUgfSwgXG4gICAgICAgICAgICAgICAgeyBzaXplOiA0LCB4OiBnYW1lLmNhbnZhcy53aWR0aCAvIDIgLSAxMDAsIHk6IDQwLCBidWJibGVEWDogNSwgYnViYmxlRFk6IC01IH0sIFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMjAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9LFxuICAgICAgICAgICAgICAgIHsgc2l6ZTogNCwgeDogZ2FtZS5jYW52YXMud2lkdGggLyAyIC0gMzAwLCB5OiA0MCwgYnViYmxlRFg6IDUsIGJ1YmJsZURZOiAtNSB9XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExldmVsOyIsImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSAxMzU7IFxuICAgICAgICB0aGlzLmhlaWdodCA9IDEzNTsgXG5cbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0ICsgMzBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMubWF4U3BlZWRcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXIuc3JjID0gJ3NyYy9pbWFnZXMvcGxheWVyLnBuZydcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShwbGF5ZXIsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAtMzApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IC0zMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmNhbnZhcy53aWR0aCArIDMwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGggKyAzMFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsIkdhbWUgPSByZXF1aXJlKCcuLi9kaXN0L2dhbWUnKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCk7XG4gICAgbGV0IGxhc3RUaW1lID0gMDtcblxuICAgIFxuICAgIGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgICAgZ2FtZS51cGRhdGUoKTtcbiAgICAgICAgZ2FtZS5kcmF3KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==