var enemies = [];

var addedLife = 0; //incremented in checkForDead()


var animation =0;
var animation1 = 4;
var animation2 = 12;

var enemy1 = new Array();
var enemy2 = new Array();
var enemy3 = new Array();
var boss1 = new Array();
var boss2 = new Array();
var boss3 = new Array();

let Bossbgm = new Audio();

Bossbgm.loop = "loop";
Bossbgm.src = "sound/bossbgm.mp3";

for(var i = 1; i <= 4; i++){

	enemy1[i-1] = new Image();
	

	
	boss1[i-1] = new Image();
	
	enemy1[i-1].src = "image/enemy" + i + ".png";
	boss1[i-1].src = "image/boss" + i + ".png";
}
for(var i = 1; i <= 12; i++){
	enemy2[i-1] =new Image();
	enemy3[i-1] = new Image();
	boss2[i-1] = new Image();
	boss3[i-1] = new Image();
	
	enemy2[i-1].src = "image/enemy2" + i + ".png";
	enemy3[i-1].src = "image/enemy3" + i + ".png";
	boss2[i-1].src = "image/boss2" + i + ".png";
	boss3[i-1].src = "image/boss3" + i + ".png";
}



function Enemy(x,y) {

  this.x = x,

  this.y = y,

  this.life = this.maxLife + addedLife;
  
  this.animation = 4;

}

//common to all Emeny objects

Enemy.prototype.maxLife = 40;

Enemy.prototype.speed = baseSpeed;

Enemy.prototype.color = 'red';

Enemy.prototype.draw = function() {

  if(this.animation<4){

	  context.drawImage(enemy1[this.animation],this.x,this.y,rectWidth,rectWidth);  
	  
	  this.animation++;

  }

  else{

	  this.animation = 0;

	  context.drawImage(enemy1[this.animation],this.x,this.y,rectWidth,rectWidth);

  }

  //context.fillStyle = this.color;

  //context.fillRect(this.x,this.y,rectWidth,rectWidth);

  //life bar

  context.beginPath();

  if(this.life > 0){
	  context.fillStyle='red';

	  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
	  }
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
	  
	  this.animation = 4;

	}

	//common to all Emeny objects

	Boss.prototype.maxLife = 1000 + addedLife * 10;
	
	Boss.prototype.speed = baseSpeed;

	Boss.prototype.color = 'red';

	Boss.prototype.draw = function() {

	  if(this.animation<4){

		  context.drawImage(boss1[this.animation],this.x,this.y,rectWidth,rectWidth); 
		  
		  this.animation++;

	  }

	  else{

		  this.animation = 0;

		  context.drawImage(boss1[this.animation],this.x,this.y,rectWidth,rectWidth);
		  

	  }

	  //context.fillStyle = this.color;

	  //context.fillRect(this.x,this.y,rectWidth,rectWidth);

	  //life bar

	  context.beginPath();

	  if(this.life > 0){
		  context.fillStyle='red';

		  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
		  }
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
  	  clear.play();
  	  
      addedLife = 20;
  	  document.getElementById('stage').innerHTML = stage; 
  	  total = totalunit = wave * stage;
  }
  for (var i = 0, j = enemies.length; i < j; i++ ) {

    if (enemies[i].life <=0) {
    	if(stage % 5 == 0){
    		Bossbgm.pause();
    		bgm.play();
    	}
      attackerPoints++;	
 //used to make enemies tougher as the number of stopped enemies goes up

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
	   
	   bgm.pause();
	   Bossbgm.play();
	   
	   total = totalunit = 1;
	   if(boss == 3){
		   boss = 0;
	   }

	   enemy = new bossTypes[boss](0,rectWidth+25);
	   boss++;
   }
   else if(stage >= 4) { 
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
  this.animation = 12;
};

FastEnemy.prototype = Object.create(Enemy.prototype);

FastEnemy.prototype.constructor = FastEnemy;

FastEnemy.prototype.speed = Enemy.prototype.speed*1.4;

FastEnemy.prototype.color = 'DarkRed';

FastEnemy.prototype.draw = function() {

	  if(this.animation<12){

		  context.drawImage(enemy2[this.animation],this.x,this.y,rectWidth,rectWidth);  
		  
		  this.animation++;

	  }

	  else{

		  this.animation = 0;

		  context.drawImage(enemy2[this.animation],this.x,this.y,rectWidth,rectWidth);

	  }
	  context.beginPath();

	  if(this.life > 0){
		  context.fillStyle='red';

		  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
		  }
};

//stronger enemy

var StrongEnemy = function(x,y) {

  Enemy.call(this,x,y);
  this.animation = 12;
};

StrongEnemy.prototype = Object.create(Enemy.prototype);

StrongEnemy.prototype.constructor = StrongEnemy;

StrongEnemy.prototype.color = 'FireBrick';

StrongEnemy.prototype.maxLife = Enemy.prototype.maxLife*2;

StrongEnemy.prototype.draw = function() {
	  if(this.animation<12){
		  context.drawImage(enemy3[this.animation],this.x,this.y,rectWidth,rectWidth);  
	  
		  this.animation++;
	  }
	  else{

		  this.animation = 0;
		  context.drawImage(enemy3[this.animation],this.x,this.y,rectWidth,rectWidth);
	  }
	  context.beginPath();

	  if(this.life > 0){
		  context.fillStyle='red';

		  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
		  }
};

var FastBoss = function(x,y) {
	  Boss.call(this,x,y);
	  this.animation = 12;
	};
	FastBoss.prototype = Object.create(Boss.prototype);
	FastBoss.prototype.constructor = FastBoss;
	FastBoss.prototype.speed = Boss.prototype.speed*1.4;
	FastBoss.prototype.color = 'DarkRed';
	FastBoss.prototype.draw = function() {
		  if(this.animation<12){
			  context.drawImage(boss2[this.animation],this.x,this.y,rectWidth,rectWidth);  
		  
			  this.animation++;
		  }
		  else{
			  this.animation = 0;
			  context.drawImage(boss2[this.animation],this.x,this.y,rectWidth,rectWidth);
		  }
	  	context.beginPath();
		  if(this.life > 0){
		  context.fillStyle='red';
			  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
		  }
};

	//stronger enemy

	var StrongBoss = function(x,y) {

	 Boss.call(this,x,y);
	 this.animation = 12;
	};
	StrongBoss.prototype = Object.create(Boss.prototype);
	StrongBoss.prototype.constructor = StrongEnemy;
	StrongBoss.prototype.color = 'FireBrick';
	StrongBoss.prototype.maxLife = Boss.prototype.maxLife*2;
	StrongBoss.prototype.draw = function() {
		  if(this.animation<12){
			  context.drawImage(boss3[this.animation],this.x,this.y,rectWidth,rectWidth);  
		  
			  this.animation++;
		  }
		  else{
			  this.animation = 0;
			  context.drawImage(boss3[this.animation],this.x,this.y,rectWidth,rectWidth);
		  }
		  context.beginPath();

		  if(this.life > 0){
			  context.fillStyle='red';

			  context.fillRect(this.x,this.y-10,rectWidth*this.life/(this.maxLife+addedLife),rectWidth/3);
		  }
	};
//list of enemy types

var enemyTypes = [Enemy,FastEnemy,StrongEnemy];
var bossTypes = [Boss, FastBoss, StrongBoss];