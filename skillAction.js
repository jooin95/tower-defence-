var skills = [];
var skill_0 = new Array();
var skill_1 = new Array();
var skill_2 = new Array();
var count = 0;

let boom = new Audio();
let wind = new Audio();
let war = new Audio();
let shake = new Audio();

shake.src = "sound/shake.mp3";
war.src = "sound/war.mp3";
wind.src = "sound/wind.wav";
boom.src = "sound/boom.wav";

function skill(x,y,z) {
	  this.x = x-25,
	  this.y = y-25,
	  this.type = z;
	  this.animationcount = 10;
	  this.hurt = 3;
	  boom.play();
}

var sk_animation = 0;
for(var i = 1; i<= 4; i++)
{
	skill_0[i-1] = new Image();
	skill_0[i-1].src = "image/skill2_" + i + ".png";
}
for(var i = 1; i<= 16; i++)
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
			if(this.animationcount % 3 == 0){
				context.drawImage(skill_0[sk_animation],this.x-100,this.y-100,50,50);
				context.drawImage(skill_0[sk_animation],this.x,this.y,50,50);
				context.drawImage(skill_0[sk_animation],this.x+50,this.y+100,50,50);
				sk_animation++;
			}
			else if (this.animationcount % 3 == 1){
				context.drawImage(skill_0[sk_animation],this.x-50,this.y-100,50,50);
				context.drawImage(skill_0[sk_animation],this.x-100,this.y-50,50,50);
				context.drawImage(skill_0[sk_animation],this.x+50,this.y+50,50,50);
				sk_animation++;
			}
			else if (this.animationcount % 3 == 2){
				context.drawImage(skill_0[sk_animation],this.x-100,this.y,50,50);
				context.drawImage(skill_0[sk_animation],this.x-50,this.y,50,50);
				context.drawImage(skill_0[sk_animation],this.x+100,this.y+50,50,50);
				sk_animation++;
			}
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
	  this.animationcount = 5;
	  this.hurt = 10;
	  wind.play();
}

skill1.prototype.type = 1;
skill1.prototype.hurt = 10;
skill1.prototype.range = rectWidth * 10;
skill1.prototype.draw = function() {
	if(this.type == 1)
	{
		if(sk_animation<8){
			if(this.animationcount % 3 == 0){
				context.drawImage(skill_1[sk_animation],this.x-150,this.y,50,50);
				context.drawImage(skill_1[sk_animation],this.x+100,this.y-100,50,50);
				context.drawImage(skill_1[sk_animation],this.x+150,this.y+100,50,50);
				context.drawImage(skill_1[sk_animation],this.x-100,this.y-100,50,50);
				sk_animation++;
			}
			else if(this.animationcount % 3 ==1)
			{
				context.drawImage(skill_1[sk_animation],this.x-150,this.y+75,50,50);
				context.drawImage(skill_1[sk_animation],this.x+50,this.y,50,50);
				context.drawImage(skill_1[sk_animation],this.x+50,this.y-100,50,50);
				context.drawImage(skill_1[sk_animation],this.x-50,this.y+100,50,50);
				context.drawImage(skill_1[sk_animation],this.x+125,this.y+75,50,50);
				context.drawImage(skill_1[sk_animation],this.x+25,this.y+25,50,50);
				context.drawImage(skill_1[sk_animation],this.x-25,this.y-125,50,50);
				context.drawImage(skill_1[sk_animation],this.x-75,this.y-75,50,50);
				sk_animation++;
			}
			else if(this.animationcount % 3 ==2)
			{
				context.drawImage(skill_1[sk_animation],this.x+150,this.y,50,50);
				context.drawImage(skill_1[sk_animation],this.x,this.y+25,50,50);
				context.drawImage(skill_1[sk_animation],this.x,this.y-100,50,50);
				context.drawImage(skill_1[sk_animation],this.x-50,this.y,50,50);
				context.drawImage(skill_1[sk_animation],this.x-125,this.y-75,50,50);
				context.drawImage(skill_1[sk_animation],this.x+75,this.y-25,50,50);
				context.drawImage(skill_1[sk_animation],this.x+25,this.y-125,50,50);
				context.drawImage(skill_1[sk_animation],this.x-50,this.y+75,50,50);
				sk_animation++;
			}
		}
		else{
			sk_animation = 0;
			context.drawImage(skill_1[sk_animation],this.x-100,this.y-100,50,50);
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
	  this.animationcount = 100;
	  war.play();
}

skill2.prototype.type = 2;
skill2.prototype.hurt = 1;
skill2.prototype.range = rectWidth * 5;
skill2.prototype.draw = function() {
	if(this.type == 2)
	{
		if(sk_animation<11){
			context.drawImage(skill_2[sk_animation],this.x-25,this.y-25,50,50);
			context.drawImage(skill_2[sk_animation],this.x-75,this.y-75,50,50);
			context.drawImage(skill_2[sk_animation],this.x-25,this.y+25,50,50);
			context.drawImage(skill_2[sk_animation],this.x+25,this.y-25,50,50);
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
function skill3(type) {
	  this.type = type;
	  this.count = 10;
	  this.animationcount = 50;
	  shake.play();
}
skill3.prototype.type = 3;
skill3.prototype.hurt = 1;
skill3.prototype.draw = function(){
	if(this.animationcount < 1)
		context.transform(1, 0, 0, 1, 0, 0);
	if(this.count > 0){
		context.transform(1, 0, 0, 1, this.count, 0);
		this.count -= 20;
		this.animationcount -= 1;
	}
	else if(this.count < 0){
		context.transform(1, 0, 0, 1, this.count, 0);
		this.count += 20;
		this.animationcount -= 1;
	}
}
skill3.prototype.checkEnemy = function(){
	for(var i = 0, j = enemies.length; i < j; i++)
	{
		enemies[i].life -= this.hurt;
	}
}


var skillClasses = [skill,skill1,skill2,skill3];