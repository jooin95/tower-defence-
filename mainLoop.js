var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d'),
rectWidth = 20, //basic game unit size (pixles)
gamespeed = 1000,
maxWidth = canvas.width, //add maxHight if not perfect square
FPS = 30,
baseSpeed = 4*rectWidth/FPS,
mouse, //mouse x and y for drawing range
currentTower = 0, //tower type selector.
currentSkill = 0,
//borders for attacker's path
leftBorder = maxWidth/17-3,		//���� ���� 2�� �� ������ ��Ÿ��
rightBorder = maxWidth*9/11-4,	//������ ���� 
//vertical borders:
firstBorder = maxWidth*35/120,	// ù���� �� ��ġ
secondBorder = maxWidth*61/120-1,	// �ι�° �� ��ġ
thirdBorder = maxWidth*11/15-6,	// 3��° �� ��ġ
//points/statistics
attackerPoints = 0,
stopped = 0,
//counter for when to add enemy units
addEnemyTimer = 60,
money = 700,
moneyIncrement = 5,
tower1_up = 0,
tower2_up = 0,
tower3_up = 0,
sk0_delay = 300,
sk1_delay = 300,
sk2_delay = 300,
sk3_delay = 300,
triger = false,
delay = 0,
wave =5,		//add source code
stage = 1,
totalunit = 5,
total = 5,
life = 5,
save = false;

mainLoopRender = function() {
  context.beginPath();
  context.clearRect(0,0,canvas.width,canvas.height);
  for(var i =0, j = enemies.length; i < j; i ++ ) {
    enemies[i].draw();
  }
  for(var i = 0, j = towers.length; i < j; i++ ) {
    towers[i].draw();
  }
  for(var i = 0, j = bullets.length; i < j; i++) {
    bullets[i].draw();
  }
  for(var i = 0, j = skills.length; i < j; i++) {
	if(skills[i].type == '0'){
		if(skills[i].animationcount > 0 && sk0_delay <= 0){
			skills[i].draw();
			skills[i].checkEnemy();
		}
		else if(sk0_delay == 0)
		{
			skills.splice(i,1);
			skilluse = false;	
			sk0_delay= 300;
		}
	}
	else if(skills[i].type == '1'){
		if(skills[i].animationcount > 0 && sk1_delay <= 0){
			skills[i].draw();
			skills[i].checkEnemy();
		}
		else if(sk1_delay == 0)
		{
			skills.splice(i,1);
			skilluse = false;	
			sk1_delay= 300;
		}
	}
	else if(skills[i].type == '2'){
		if(skills[i].animationcount > 0 && sk2_delay <= 0){
			skills[i].draw();
			skills[i].checkEnemy();
		}
		else if(sk2_delay == 0)
		{
			skills.splice(i,1);
			skilluse = false;	
			sk2_delay= 300;
		}
	}
	else if(skills[i].type == '3'){
		if(skills[i].animationcount > 0 && sk3_delay <= 0){
			skills[i].draw();
			skills[i].checkEnemy();
		}
		else if(sk3_delay == 0)
		{
			skills.splice(i,1);
			skilluse = false;
			sk3_delay= 300;
		}
	}
  }
  skill_delay();
  if(mouseDown){
    drawMouse(); //potential gun radius
  }
  requestAnimationFrame(mainLoopRender);
};

//game logic (seperate from draw stuff)
mainLoopLogic = function() {
  if(stage != save && delay == 0 && triger == false){
	  stages();
  }
  if(triger == true && delay == 0)
  {
     $("#step").hide();
     triger = false;
  }
  if(delay ==0){
  checkForDead();
  addEnemyTimer--;
  if(total > 0){
	if(addEnemyTimer<1) {
	  addEnemy()
	  addEnemyTimer = (stopped > 40) ? 20 : 30;  //how quicklly a new enemy is generated
  	}
  }
  for(var i =0, j = enemies.length; i < j; i ++ ) {
    //true if attacker scored
    if(enemies[i].move()){
      life--;
      document.getElementById('totalunit').innerHTML = --totalunit;
      document.getElementById('life').innerHTML = life;
      if(life == 0){
    	  gameovers();
      }
      enemies.splice(i,1);
      i--;
      j--;
    }
  }
  for(var i = 0, j = towers.length; i < j; i++ ) {
    towers[i].findTarget();
    towers[i].findUnitVector();
    towers[i].fire();
  }
  //move bullets, check for hits, remove bullets if hit
  for(var i = 0, j = bullets.length; i < j; i++) {
    bullets[i].move();
    if(bullets[i].checkCollision()) {
     bullets.splice(i,1);
     j--;
     i--;
    }
   }
  }
  document.getElementById('skill_1').innerHTML = parseInt(sk0_delay/FPS);
  document.getElementById('skill_2').innerHTML = parseInt(sk1_delay/FPS);
  document.getElementById('skill_3').innerHTML = parseInt(sk2_delay/FPS);
  document.getElementById('skill_4').innerHTML = parseInt(sk3_delay/FPS);
  setTimeout(mainLoopLogic, 1000/FPS);

  if(delay > 0)
	  delay--;
};
	skill_delay = function(){
		if(sk2_delay >0)
		{
			sk2_delay -= 1;
		}
		if(sk1_delay > 0)
		{
			sk1_delay -= 1;
		}
		if(sk0_delay > 0)
		{
			sk0_delay -= 1;
		}
		if(sk3_delay > 0)
		{
			sk3_delay -= 1;
		}
	};
	window.onload = function() {
	  setTimeout(mainLoopLogic, 1000/FPS);
	  requestAnimationFrame(mainLoopRender);
	};