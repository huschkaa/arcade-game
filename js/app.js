//Variables to be utilized in determining speed of enemies
var maxspeed = 700;
var minspeed = 100
var normspeed = 50;
//Variables to be utilized in determining height of enemies on the screen

// Enemies the player must avoid
var Enemy = function(x,y) {
    // The image/sprite for our enemies, this load images for the enemies.
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = this.randomspeed(); /* calling function for random speed the bugs will move*/
};

//Function to calculate the speed the enemies will travel across the screen
Enemy.prototype.randomspeed = function() {
    return Math.floor(Math.random() * (maxspeed - minspeed + 1) + normspeed);
};

//Set inital location for the enemy bug - 3 bugs are utilized
var allEnemies = [new Enemy(0, 40),
                  new Enemy(0, 130),
                  new Enemy(0, 220)];

// Update the enemy's position, required method for game. Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter. which will ensure the game runs at the same speed for all computers.
    if (this.x < 500) {
      this.x += this.speed * dt;
    } else {
      //When bug reaches end of game board resets at random new location on game board
      this.x = -100;
    }
  }

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This is the player class to setup location and load image
var Player = function(x,y) {
    // The image/sprite for our player, this load images for our player.
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

//sets starting position of the player
var player = new Player(200,400);

//Setup scoreboard to track each time player makes it across to the water
let score = 0;
function gameScore(){
    document.getElementById('gameScore').innerHTML = "Score: " + score;
}
//Setup scoreboard to track number of cockroach collisions
let collision = 0;
function collisionScore() {
    document.getElementById('collisionScore').innerHTML = "Cockroach Collisions: " + collision;
}


/*
Function set if player collides with an enemy at same exact location then the player is reset.
Parameters used for 2D Collision:
Rectangle = {x, y, width, height}
Player Rectangle = {this.x, this.y, 70 ,80}
Enemy Rectangle = {allEnemies[i].x, allEnemies[i].y, 98, 70}
Measured height/width of enemy/player pixels to determine values above
*/
Player.prototype.update = function() {
  for (var i = 0; i < allEnemies.length; i++) {
      if ((this.y == allEnemies[i].y) && (this.x < allEnemies[i].x + 70 && this.x + 98 > allEnemies[i].x)) {
        this.reset();
        //update collision scoreboad
        collision++;
        collisionScore();
      };
      //reset player if they make it to the river and win
      if (this.y < 10) {
        this.reset();
        //update scoreboard
        score++;
        gameScore();
      };
    };
  }

//Player reset function for when a player collides with a bug or wins the game
Player.prototype.reset = function () {
  this.x = 200;
  this.y = 400;
};

//This render function draws the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// a handleInput() method.
Player.prototype.handleInput = function(key) {
  switch (key) {
    case 'left':
      if (this.x > 0) {
        this.x -= 100;
    }
      break;
    case 'right':
      if (this.x < 400) {
        this.x += 100;
    }
      break;
    case 'up':
      if (this.y > 10) {
        this.y -= 90;
    }
      break;
    case 'down':
      if (this.y < 400) {
        this.y += 90;
    }
      break;
    }
 }

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
