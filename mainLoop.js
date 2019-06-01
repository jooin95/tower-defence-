var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d'),
rectWidth = 20, //basic game unit size (pixles)
maxWidth = canvas.width, //add maxHight if not perfect square
FPS = 30,
baseSpeed = 4*rectWidth/FPS,
mouse, //mouse x and y for drawing range
currentTower = 0, //tower type selector.
currentSkill = 0,
//borders for attacker's path
leftBorder = maxWidth/17-3,		
rightBorder = maxWidth*9/11-4,	 
//vertical borders:
firstBorder = maxWidth*35/120,	
secondBorder = maxWidth*61/120-1,
thirdBorder = maxWidth*11/15-6,	
//points/statistics
attackerPoints = 0,
stopped = 0,
//counter for when to add enemy units
addEnemyTimer = 60,
money = 250,
moneyIncrement = 5,
sk0_delay = 300,
sk1_delay = 300,
sk2_delay = 300,
sk3_delay = 300;

//draw stuff
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
	if(skills[i].type == '0')
	{
		if(skills[i].animationcount > 0 && sk0_delay <= 0){
			skills[i].draw();
			skills[i].checkEnemy();
		}
		else if(sk2_delay == 0)
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
  }
  skill_delay();
  if(mouseDown){
    drawMouse(); //potential gun radius
  }
  requestAnimationFrame(mainLoopRender);
};

//game logic (seperate from draw stuff)
mainLoopLogic = function() {
  checkForDead();
  addEnemyTimer--;
  if(addEnemyTimer<1) {
    addEnemy()
    addEnemyTimer = (stopped > 40) ? 20 : 30;  //how quicklly a new enemy is generated
  }
  for(var i =0, j = enemies.length; i < j; i ++ ) {
    //true if attacker scored
    if(enemies[i].move()){
      attackerPoints++;
      //add point outside of canvas
      document.getElementById('attackersScore').innerHTML = attackerPoints; 
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
  setTimeout(mainLoopLogic, 1000/FPS);
};
skill_delay = function(){
	if(sk1_delay > 0)
	{
		sk1_delay -= 1;
	}
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
	}if(sk3_delay > 0)
	{
		sk3_delay -= 1;
	}
};
window.onload = function() {
  setTimeout(mainLoopLogic, 1000/FPS);
  requestAnimationFrame(mainLoopRender);
};
