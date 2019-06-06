//defense towers
// base tower 

var towers=[];

var tower1= new Image();
tower1.src = ("image/tower1.png");
var tower1upgrade1= new Image();
tower1upgrade1.src = ("image/tower1upgrade1.png");
var tower1upgrade2= new Image();
tower1upgrade2.src = ("image/tower1upgrade2.png");
var tower1upgrade3= new Image();
tower1upgrade3.src = ("image/tower1upgrade3.png");

var tower2= new Image();
tower2.src = ("image/tower2.png");
var tower2upgrade1= new Image();
tower2upgrade1.src = ("image/tower2upgrade1.png");
var tower2upgrade2= new Image();
tower2upgrade2.src = ("image/tower2upgrade2.png");
var tower2upgrade3= new Image();
tower2upgrade3.src = ("image/tower2upgrade3.png");

var tower3= new Image();
tower3.src = ("image/tower3.png");
var tower3upgrade1= new Image();
tower3upgrade1.src = ("image/tower3upgrade1.png");
var tower3upgrade2= new Image();
tower3upgrade2.src = ("image/tower3upgrade2.png");
var tower3upgrade3= new Image();
tower3upgrade3.src = ("image/tower3upgrade3.png");

let build = new Audio();
let clear = new Audio();

clear.src = "sound/clear.mp3";
build.src = "sound/build.mp3";
//Tower 1
function Tower(x,y,z) {
  this.x = x,
  this.y = y,
  this.type=1,
  this.hurt = 5;
  this.upgrade = z;
  build.play();
};
Tower.prototype.r = rectWidth; //radius
//Tower.prototype.constructor = Tower1;
Tower.prototype.type=1;
Tower.prototype.rateOfFire = FPS; //DPS
Tower.prototype.range = rectWidth*5;
Tower.prototype.color = 'green';
Tower.prototype.cost = 50;
Tower.prototype.findTarget = function() {
  //if no enemies, no target
  if(enemies.length === 0) {
    this.target = null;
    return;
  }
  //if target dead, remove target reference
  if(this.target && this.target.life <= 0) {
    this.target = null;
  }
  //find first enemy withing range and select that as tower's target
  for (var i = 0, j = enemies.length; i < j; i ++) {
	var dist = (enemies[i].x-this.x)*(enemies[i].x-this.x+rectWidth)+(enemies[i].y-this.y)*(enemies[i].y-this.y+rectWidth); //rectWidth included to look at center of rectangle, not top left corner
    if (dist < (this.range*this.range)) { //sqaure of range. avoice Math.sqrt which is expensive
    	this.target = enemies[i];
    	return; //only need a single target
    }
  }
  if(this.target){
    if(((this.target.x-this.x)*(this.target.x-this.x+rectWidth)+(this.target.y-this.y)*(this.target.y-this.y+rectWidth))>(this.range*this.range)){
	   this.target = null;
	   return;
    }
  }
};

var Tower2 = function(x,y,z) {
	  this.x = x,
	  this.y = y,
	  this.upgrade = z,
	  this.hurt = 6;
	  this.type=2;
	  build.play();
};
	Tower2.prototype = Object.create(Tower.prototype);
	Tower2.prototype.constructor = Tower2;
	Tower2.prototype.type=2;
	Tower2.prototype.range = Tower.prototype.range*1.4;//looking to double area, not radius or range
	Tower2.prototype.cost = Tower.prototype.cost * 1.5;
	Tower2.prototype.rateOfFire = Tower.prototype.rateOfFire / 3;

	//short range high damage tower
	var Tower3 = function(x,y,z) {
	  this.x = x,
	  this.y = y,
	  this.type=3,
	  this.hurt = 10;
	  this.upgrade = z;
	  build.play();
	};
	Tower3.prototype = Object.create(Tower.prototype);
	Tower3.prototype.constructor = Tower3;
	Tower3.prototype.type=3;
	Tower3.prototype.range = Tower.prototype.range * 0.7; //0.7 rather than 0.5 because looking at area
	Tower3.prototype.hurt = Tower.prototype.hurt*2;
	Tower3.prototype.cost = Tower.prototype.cost * 1.5;


Tower.prototype.findUnitVector = function() {
  if (!this.target) return false; //if there is no target, dont bother calculating unit vector
  var xDist = this.target.x-this.x;
  var yDist = this.target.y-this.y;
  var dist = Math.sqrt(xDist*xDist+yDist*yDist); 
  this.xFire = this.x+this.r*xDist/dist; //where turret ends and bullets start
  this.yFire = this.y+this.r*yDist/dist;
};
Tower.prototype.draw= function() {
  //draw outter circle
  if(this.type==1 && this.upgrade == 0)
     context.drawImage(tower1,this.x-25,this.y-25,50,50);
  else if(this.upgrade == 1 && this.type==1)
     context.drawImage(tower1upgrade1, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 2 && this.type==1)
	     context.drawImage(tower1upgrade2, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 3 && this.type==1)
	     context.drawImage(tower1upgrade3, this.x-30, this.y-30, 60, 60);
	  
  else if(this.type==3 && this.upgrade == 0)
     context.drawImage(tower3,this.x-25,this.y-25,50,50);
  else if(this.upgrade == 1 && this.type==3)
	     context.drawImage(tower3upgrade1, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 2 && this.type==3)
		 context.drawImage(tower3upgrade2, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 3 && this.type==3)
	     context.drawImage(tower3upgrade3, this.x-30, this.y-30, 60, 60);
  
  else if(this.type==2 && this.upgrade == 0)
     context.drawImage(tower2,this.x-25,this.y-25,50,50);
  else if(this.upgrade == 1 && this.type==2)
	     context.drawImage(tower2upgrade1, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 2 && this.type==2)
		 context.drawImage(tower2upgrade2, this.x-30, this.y-30, 60, 60);
  else if(this.upgrade == 3 && this.type==2)
	     context.drawImage(tower2upgrade3, this.x-30, this.y-30, 60, 60);
  
};

Tower.prototype.fire = function() {
  this.rateOfFire--;
  if(this.target && this.rateOfFire <=0) {
    bullets.push(new Bullet(this.xFire,this.yFire,this.target,this.hurt,this.type));
    //reset this objects rateOfFire to the prototypes
    this.rateOfFire = this.constructor.prototype.rateOfFire;
  };
};

//other types of towers
//long range tower:



//populate array of towers
//this is used to figure out which 
//class of tower to add when mouse is clicked
var towerClasses = [Tower,Tower2,Tower3];
