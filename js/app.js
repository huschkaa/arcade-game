// Enemies our player must avoid
var Enemy = function(x,y) {
    // The image/sprite for our enemies, this load images for the enemies.
    this.sprite = 'images/enemy-bug.png';
    this.x;
    this.y;
    moveEnemy = this.x;
    if (moveEnemy < 550) {
      moveEnemy = moveEnemy+5;
    }
    else
    {
      
    }
};

//Create enemy bugs that go across the screen
var allEnemies = [new Enemy(100,250)];

// Update the enemy's position, required method for game. Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter. which will ensure the game runs at the same speed for all computers.

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x,y) {
    // The image/sprite for our player, this load images for our player.
    this.sprite = 'images/char-boy.png';
    this.x;
    this.y;
};

var player = new Player(200,400); /* sets starting position of the player*/

// This class requires an update(), render() and
Player.prototype.update = function() { }

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Function added to ensure code works properly need to determine what goes in the function

// a handleInput() method.
Player.prototype.handleInput = function(key) { }

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
