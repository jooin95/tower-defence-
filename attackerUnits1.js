var enemies = [];

var addedLife = 0; //incremented in checkForDead()



var animation =0; 

var enemy1 = new Array();
var boss1 = new Array();

for(var i = 1; i <= 4; i++){

	enemy1[i-1] = new Image();
	boss1[i-1] = new Image();
	
	enemy1[i-1].src = "image/enemy" + i + ".png";
	boss1[i-1].src = "image/enemy" + i + ".png";
}



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

  if(animation<4){

	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);  
	  
	  animation++;

  }

  else{

	  animation = 0;

	  context.drawImage(enemy1[animation],this.x,this.y,rectWidth,rectWidth);
	  context.drawImage(boss1[animation],this.x,this.y,rectWidth,rectWidth);

  }

  //context.fillStyle = this.color;

  //context.fillRect(this.x,this.y,rectWidth,rectWidth);

  //life bar

  context.beginPath();

  context.fillStyle='red';

  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);

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

function Boss(x,y) {

	  this.x = x,

	  this.y = y,

	  this.life = this.maxLife;

	}

	//common to all Emeny objects

	Boss.prototype.maxLife = 400;
	
	Boss.prototype.speed = baseSpeed;

	Boss.prototype.color = 'red';

	Boss.prototype.draw = function() {

	  if(animation<4){

		  context.drawImage(boss1[animation],this.x,this.y,rectWidth,rectWidth); 
		  
		  animation++;

	  }

	  else{

		  animation = 0;

		  context.drawImage(boss1[animation],this.x,this.y,rectWidth,rectWidth);
		  

	  }

	  //context.fillStyle = this.color;

	  //context.fillRect(this.x,this.y,rectWidth,rectWidth);

	  //life bar

	  context.beginPath();

	  context.fillStyle='red';

	  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);

	};



	Boss.prototype.move = function() {

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
    
  if(totalunit <= 0){
  	  ++stage;
  	  document.getElementById('stage').innerHTML = stage; 
  	  total = totalunit = wave * stage;
  }
  for (var i = 0, j = enemies.length; i < j; i++ ) {

    if (enemies[i].life <=0) {
      attackerPoints++;	
      addedLife = Math.floor(stopped/10) * (1 + Math.floor(stopped/100)); //used to make enemies tougher as the number of stopped enemies goes up

      money += moneyIncrement;
      
      document.getElementById('money').innerHTML = money;
      
      document.getElementById('totalunit').innerHTML = --totalunit;
      
      enemies.splice(i,1);
      
      i--;
      j--; 

    }

  }

}



var addEnemy = function() {

   var enemy;
   
   if(stage % 5 == 0) {
	   total = totalunit = 1;
	   enemy = new bossTypes[0](0,rectWidth+25);
   }
   else if(totalunit < wave*stage/2) { 
     //select random enemy type
	 var pick = Math.floor(Math.random()*enemyTypes.length);
     enemy = new enemyTypes[pick](0,rectWidth+25);
     
     
   } else {

     enemy = new Enemy(0,rectWidth+25);

   }
  enemies.push(enemy);
  total--;

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
var bossTypes = [Boss];