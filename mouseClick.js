//���� ���� ���콺 �̺�Ʈ
mouseDown = false;
function allowDrop(e) {
e.preventDefault();
}
function handleDragStart(e) {
e.dataTransfer.effectAllowed = 'move';
e.dataTransfer.setData("Text", e.target.id);
}
function handleDragStart1(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
changeTower(0);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
}

function handleDragStart2(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
changeTower(1);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
}

function handleDragStart3(e) {
e.dataTransfer.effectAllowed = 'move';
mouseDown = true;
changeTower(2);
code = '<img id="img1" src="image/tower1.png" width="50" height="50">'
e.dataTransfer.setData("Text", code);
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

//////////////////////////////////////////////////////////////////////////////////////
//add tower
canvas.addEventListener('drop', function() {
  if(towerAllowed(mouse.x,mouse.y)) {
    towers.push(new towerClasses[currentTower](mouse.x,mouse.y,type));
    money -= towerClasses[currentTower].prototype.cost;
    document.getElementById('money').innerHTML = money; //update money when adding tower
  }// end if
}, false);
//���콺 Ŭ������ ��
// ���� ��

canvas.addEventListener('click',function(){
 for (var i = 0, j = towers.length; i < j; i++) {
  if(Math.abs(mouse.x-towers[i].x) < 2*rectWidth && Math.abs(towers[i].y-mouse.y) < 2*rectWidth) {
	  if( towers[i].click==false)
		  towers[i].click=true;
	  else
		  towers[i].click=false;  
  }   
 }
}, false);

 //���콺�� �̵��Ҷ� ���콺�� ��ġ�� ������
window.addEventListener('dragover', getMousePos, false); 

//���콺 �׷���
function drawMouse() {
  //���콺�� ������ �Ƹ�͵� ���� ����
  if(!mouse) return;
  //Ÿ�� ������ ������ ������
  var range = towerClasses[currentTower].prototype.range;
  context.beginPath();

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
}

//Ÿ���� ����� �ִ��� �˷���
//starts at top of page
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