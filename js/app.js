//Variables to be utilized in determining speed of enemies
var maxspeed = 700;
var minspeed = 100
var normspeed = 50;
//Variables to be utilized in determining height of enemies on the screen
var maxvertical = 220;
var minvertical = 40;

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
                  new Enemy(0, 120),
                  new Enemy(0, 220)];

// Update the enemy's position, required method for game. Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter. which will ensure the game runs at the same speed for all computers.
    if (this.x < 500) {
      this.x += this.speed * dt;
    } else {
      this.x = -100;
      this.y = Math.floor(Math.random()*(maxvertical - minvertical + 1 ) + minvertical);
    }
  }


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y) {
    // The image/sprite for our player, this load images for our player.
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

var player = new Player(200,400); /* sets starting position of the player*/

// This class requires an update()
Player.prototype.update = function() {

}

//This render function draws the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Function added to ensure code works properly need to determine what goes in the function

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
      if (this.y > 40) {
        this.y -= 90;
    }
    else{
      this.reset();
    }
    break;
      case 'down':
        if (this.y < 400) {
          this.y += 90;
    }
    break;
    }
 }

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
