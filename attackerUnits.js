var enemies = [];

var addedLife = 0; //incremented in checkForDead()

<<<<<<< HEAD
var animation =0; 
var enemy1 = new Array();
for(var i = 1; i <= 4; i++){
	enemy1[i-1] = new Image();
	enemy1[i-1].src = "image/enemy" + i + ".png";
}

=======


var animation =0; 

var enemy1 = new Array();

for(var i = 1; i <= 4; i++){

	enemy1[i-1] = new Image();

	enemy1[i-1].src = "image/enemy" + i + ".png";

}



>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
function Enemy(x,y) {

  this.x = x,

  this.y = y,

  this.life = this.maxLife + addedLife;

}



//common to all Emeny objects

Enemy.prototype.maxLife = 40;

Enemy.prototype.speed = baseSpeed;

Enemy.prototype.color = 'red';



Enemy.prototype.draw = function() {
<<<<<<< HEAD
  if(animation<4){
	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);  
	  animation++;
  }
  else{
	  animation = 0;
	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);
  }
  //context.fillStyle = this.color;
  //context.fillRect(this.x,this.y,rectWidth,rectWidth);
  //life bar
  context.beginPath();
  context.fillStyle='red';
  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
=======

  if(animation<4){

	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);  

	  animation++;

  }

  else{

	  animation = 0;

	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);

  }

  //context.fillStyle = this.color;

  //context.fillRect(this.x,this.y,rectWidth,rectWidth);

  //life bar

  context.beginPath();

  context.fillStyle='red';

  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);

>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
};



Enemy.prototype.move = function() {

  var move = this.speed;

  if(this.x < rightBorder && this.y < firstBorder) this.x += move;

  else if (this.x >= rightBorder && this.y < firstBorder) this.y += move;

  else if (this.x >= leftBorder && this.y <= secondBorder) this.x -= move; 

  else if (this.x <= leftBorder && this.y <= secondBorder) this.y += move;

  else if (this.x <= rightBorder && this.y < thirdBorder) this.x += move;

  else if (this.x >= rightBorder  && this.y <= thirdBorder) this.y += move;

  else  {

    this.x -= move;

    //returns true so enemy can be removed if another function

    if(this.x < 0) return true; 

  }

  return false;

};

 

function checkForDead() {

  for (var i = 0, j = enemies.length; i < j; i++ ) {

    if (enemies[i].life <=0) {

      addedLife = Math.floor(stopped/10) * (1 + Math.floor(stopped/100)); //used to make enemies tougher as the number of stopped enemies goes up

      document.getElementById('stopped').innerHTML = ++stopped;

      money += moneyIncrement;

      document.getElementById('money').innerHTML = money;

      enemies.splice(i,1);

      i--;

      j--; 

    }

  }

}



var addEnemy = function() {

   var enemy;

   if(stopped > 20) { 

     var pick = Math.floor(Math.random()*enemyTypes.length); 

     //select random enemy type

     enemy = new enemyTypes[pick](0,rectWidth+25);

   } else {

     enemy = new Enemy(0,rectWidth+25);

   }

  enemies.push(enemy);

}



//faster enemy

var FastEnemy = function(x,y) {

  Enemy.call(this,x,y);

};

FastEnemy.prototype = Object.create(Enemy.prototype);

FastEnemy.prototype.constructor = FastEnemy;



FastEnemy.prototype.speed = Enemy.prototype.speed*1.4;

FastEnemy.prototype.color = 'DarkRed';



//stronger enemy

var StrongEnemy = function(x,y) {

  Enemy.call(this,x,y);

};

StrongEnemy.prototype = Object.create(Enemy.prototype);

StrongEnemy.prototype.constructor = StrongEnemy;



StrongEnemy.prototype.color = 'FireBrick';

StrongEnemy.prototype.maxLife = Enemy.prototype.maxLife*2;





//list of enemy types

var enemyTypes = [Enemy,FastEnemy,StrongEnemy];