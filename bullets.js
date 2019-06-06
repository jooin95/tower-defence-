var bullets = [];
var bulletImage = new Image();
bulletImage.src="image/bullet.png";
var bulletImage1 = new Image();
bulletImage1.src="image/bulletImage1.png";
var bulletImage2 = new Image();
bulletImage2.src="image/bulletImage2.png";
function Bullet(x,y,target,hurt,type) {
  this.x = x,
  this.y = y,
  this.target = target,
  this.hurt = hurt,
  this.type = type
};
Bullet.prototype.r = rectWidth/4;
Bullet.prototype.speed = baseSpeed*2;

Bullet.prototype.move = function() {
  //find unit vector
  var xDist = this.target.x+rectWidth/2-this.x; //"+rectWidth/2" because we want bullet to go for center of enemy no top left corner
  var yDist = this.target.y+rectWidth/2-this.y;
  var dist = Math.sqrt(xDist*xDist+yDist*yDist);
  this.x = this.x+this.speed*xDist/dist;
  this.y = this.y+this.speed*yDist/dist;
};

Bullet.prototype.draw = function() {
  context.beginPath();
  if(this.type == 1){
	  context.drawImage(bulletImage1,this.x,this.y,15, 15);
  }
  else if(this.type == 2)
  {
	  context.drawImage(bulletImage2,this.x,this.y,15, 15);
  }
  else if(this.type == 3)
  {
	  context.drawImage(bulletImage,this.x,this.y,10, 10);
  }
};
 
Bullet.prototype.checkCollision = function() {
  if(this.x < this.target.x + rectWidth &&
     this.x + this.r > this.target.x &&
     this.y < this.target.y + rectWidth &&
     this.y + this.r > this.target.y) {
       this.target.life -= this.hurt;
       return true;
     }
  return false;
};