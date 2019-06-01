//���� ���� ���콺 �̺�Ʈ
mouseDown = false;
skilluse = false;
towerBuild = false;
function allowDrop(e) {
e.preventDefault();
}
function handleDragStart1(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
towerBuild = true;
changeTower(0);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
}

function handleDragStart2(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
towerBuild = true;
changeTower(1);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
}

function handleDragStart3(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
towerBuild = true;
changeTower(2);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
}
function handleDragStart4(e) {
	e.dataTransfer.effectAllowed = 'move';
	mouseDown = true;
	skilluse = true;
	changeSkill(0);
	}
function handleDragStart5(e) {
	e.dataTransfer.effectAllowed = 'move';
	mouseDown = true;
	skilluse = true;
	changeSkill(1);
	}
function handleDragStart6(e) {
	e.dataTransfer.effectAllowed = 'move';
	mouseDown = true;
	skilluse = true;
	changeSkill(2);
	}

function handleDrop(e) {
e.preventDefault();
mouseDown =false;
var src = e.dataTransfer.getData("Text");
}

//���콺 ��ġ

function getMousePos(evt) {
  var rect = canvas.getBoundingClientRect();
  mouse = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top 
  };
} 
/////////////////////////////////////////////////////////////////////////////////////////////

//change tower type
function changeTower(n) {
  currentTower = n;
}
var type = towerClasses[currentTower].prototype.type;
function changeSkill(n) {
	  currentSkill = n;
}
var Skilltype = skillClasses[currentSkill].prototype.type;
//////////////////////////////////////////////////////////////////////////////////////
//add tower
canvas.addEventListener('drop', function() {
  if(towerAllowed(mouse.x,mouse.y) && towerBuild == true) {
    towers.push(new towerClasses[currentTower](mouse.x,mouse.y,type));
    money -= towerClasses[currentTower].prototype.cost;
    document.getElementById('money').innerHTML = money; //update money when adding tower
    towerBuild = false;
  }// end if
  else if(skilluse == true)
	{
	  if(currentSkill == '0' && sk0_delay == 0)
	   skills.push(new skillClasses[currentSkill](mouse.x, mouse.y,0));
	  if(currentSkill == '1' && sk1_delay == 0)
		   skills.push(new skillClasses[currentSkill](mouse.x, mouse.y,1));
	  if(currentSkill == '2' && sk2_delay == 0)
		   skills.push(new skillClasses[currentSkill](mouse.x, mouse.y,2));
	  skilluse = false;
	}
}, false);
canvas.addEventListener('click',function(){
 for (var i = 0, j = towers.length; i < j; i++) {
  if(Math.abs(mouse.x-towers[i].x) < 2*rectWidth && Math.abs(towers[i].y-mouse.y) < 2*rectWidth) {
    towers[i].click=true;
  }   
 }
}, false);

window.addEventListener('dragover', getMousePos, false); 

function drawMouse() {
  if(!mouse) return;
  var range = towerClasses[currentTower].prototype.range;
  var skillrange = skillClasses[currentSkill].prototype.range;
  context.beginPath();
  if(towerBuild==true){
  //����
	  context.globalAlpha = 0.2;
	  //Ÿ���� ������ ǥ������
	  context.arc(mouse.x,mouse.y,range, 0, 2*Math.PI);
	  //���࿡ Ÿ���� ������ ������ �����
	  if(towerAllowed(mouse.x,mouse.y)) context.fillStyle='yellow';
	  //�ƴϸ� ������
	  else context.fillStyle = 'red';
	  context.fill();
	  var type = towerClasses[currentTower].prototype.type;
	  context.globalAlpha = 1;
  }else if(skilluse == true)
  {
	  if(currentSkill == '0'){
		context.globalAlpha = 0.2;
		context.arc(mouse.x,mouse.y,skillrange,0,2*Math.PI);
		if(sk0_delay > 0){
		  context.fillStyle='red';
	  	}
	  	else{
		  context.fillStyle='yellow';
	  	}
		context.fill();
		var Skilltype = skillClasses[currentSkill].prototype.type;
		context.globalAlpha = 1;
	  }
	  else if(currentSkill == '1'){
		  context.globalAlpha = 0.2;
		  context.arc(mouse.x,mouse.y,skillrange,0,2*Math.PI);
		  if(sk1_delay > 0){
			context.fillStyle='red';
		  }
		  else{
			context.fillStyle='yellow';
		  }
		  context.fill();
		  var Skilltype = skillClasses[currentSkill].prototype.type;
		  context.globalAlpha = 1;
		}
	  else if(currentSkill == '2'){
		  context.globalAlpha = 0.2;
		  context.arc(mouse.x,mouse.y,skillrange,0,2*Math.PI);
		  if(sk2_delay > 0){
			context.fillStyle='red';
		  }
		  else{
			context.fillStyle='yellow';
		  }
		  context.fill();
		  var Skilltype = skillClasses[currentSkill].prototype.type;
		  context.globalAlpha = 1;
		}
  }
}

function towerAllowed(x,y) {
  if (money < towerClasses[currentTower].prototype.cost) return false; //can afford tower?
  if( y < rectWidth*2) return true;
  else if( y < rectWidth*3) return false;
  else if (y < firstBorder+rectWidth && x > rightBorder- rectWidth && x < rightBorder+rectWidth*2 ) return false;
  else if (y > firstBorder - rectWidth && y < firstBorder + rectWidth *2 && x > leftBorder - rectWidth && x < rightBorder + rectWidth) return false;
  else if (y > firstBorder + rectWidth*3 && y < secondBorder + rectWidth && x > leftBorder - rectWidth && x < leftBorder + rectWidth*2) return false;
  else if (y > secondBorder - rectWidth && y < secondBorder + rectWidth * 2 && x > leftBorder + rectWidth *2) return false;
  else if (y > secondBorder && y < thirdBorder + rectWidth && x > rightBorder - rectWidth) return false;
  else if (y > thirdBorder - rectWidth && y < thirdBorder + rectWidth) return false;
  else {
    for (var i = 0, j = towers.length; i < j; i++) {
      //check to see if existing tower is too close
      //simple rectangular check, might want to change to circular check at some poit
      if(Math.abs(x-towers[i].x) < 2*rectWidth && Math.abs(towers[i].y-y) < 2*rectWidth) { return false };   
    } //end for
  }
  return true;
}