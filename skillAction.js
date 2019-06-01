var skills = [];
var skill_0 = new Array();
var skill_1 = new Array();
var skill_2 = new Array();
var count = 0;

function skill(x,y,z) {
	  this.x = x-25,
	  this.y = y-25,
	  this.type = z;
	  this.animationcount = 10;
	  this.hurt = 3;
}

var sk_animation = 0;
for(var i = 1; i<= 4; i++)
{
	skill_0[i-1] = new Image();
	skill_0[i-1].src = "image/skill2_" + i + ".png";
}
for(var i = 1; i<= 15; i++)
{
	skill_1[i-1] = new Image();
	skill_1[i-1].src = "image/1_" + i + ".png";
}
for(var i = 1; i<= 11; i++)
{
	skill_2[i-1] = new Image();
	skill_2[i-1].src = "image/3_" + i + ".png";
}

skill.prototype.type = 0;
skill.prototype.hurt = 1;
skill.prototype.range = rectWidth * 5;
skill.prototype.checkEnemy = function(){
	for(var i = 0, j = enemies.length; i < j; i++)
	{
		var dist = (enemies[i].x-this.x+10)*(enemies[i].x-(this.x+rectWidth*3))+(enemies[i].y-this.y)*(enemies[i].y-(this.y+rectWidth*2));
		if(dist < (this.range*this.range)){
			enemies[i].life -= this.hurt;
		}
	}
}
skill.prototype.draw = function() {
	if(this.type == 0)
	{
		if(sk_animation<4){
			context.drawImage(skill_0[sk_animation],this.x-50,this.y-50,100,100);
			sk_animation++;
			this.animationcount -= 1;
		}
		else{
			sk_animation = 0;
			context.drawImage(skill_0[sk_animation],this.x-50,this.y-50,100,100);
			this.animationcount -= 1;
		}
	}
}

function skill1(x,y,type) {
	  this.x = x,
	  this.y = y,
	  this.type = type;
	  this.animationcount = 20;
	  this.hurt = 10;
}

skill1.prototype.type = 1;
skill1.prototype.hurt = 10;
skill1.prototype.range = rectWidth * 10;
skill1.prototype.draw = function() {
	if(this.type == 1)
	{
		if(sk_animation<15){
			context.drawImage(skill_1[sk_animation],this.x-100,this.y-100,200,200);
			sk_animation++;
			this.animationcount -= 1;
		}
		else{
			sk_animation = 0;
			context.drawImage(skill_1[sk_animation],this.x-100,this.y-100,200,200);
			this.animationcount -= 1;
		}
	}
}
skill1.prototype.checkEnemy = function(){
	for(var i = 0, j = enemies.length; i < j; i++)
	{
		var dist = (enemies[i].x-this.x+100)*(enemies[i].x-(this.x+rectWidth*3))+(enemies[i].y-this.y+45)*(enemies[i].y-(this.y+rectWidth*3));
		if(dist < (this.range*this.range)){
			enemies[i].life -= this.hurt;
		}
	}
}
function skill2(x,y,type) {
	  this.x = x,
	  this.y = y,
	  this.type = type;
	  this.animationcount = 30;
}

skill2.prototype.type = 2;
skill2.prototype.hurt = 10;
skill2.prototype.range = rectWidth * 5;
skill2.prototype.draw = function() {
	if(this.type == 2)
	{
		if(sk_animation<11){
			context.drawImage(skill_2[sk_animation],this.x-25,this.y-25,50,50);
			sk_animation++;
			this.animationcount -= 1;
		}
		else{
			sk_animation = 0;
			context.drawImage(skill_2[sk_animation],this.x-25,this.y-25,50,50);
			this.animationcount -= 1;
		}
	}
}
skill2.prototype.checkEnemy = function(){
	for(var i = 0, j = enemies.length; i < j; i++)
	{
		var dist = (enemies[i].x-this.x+20)*(enemies[i].x-(this.x+rectWidth*3))+(enemies[i].y-this.y+40)*(enemies[i].y-(this.y+rectWidth*2));
		if(dist < (this.range*this.range)){
			enemies[i].life -= this.hurt;
		}
	}
}

var skillClasses = [skill,skill1,skill2];