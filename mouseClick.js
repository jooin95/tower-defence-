<<<<<<< HEAD
//ÀÌÂÊ ºÎÅÍ ¸¶¿ì½º ÀÌº¥Æ®
=======
//ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ì½º ï¿½Ìºï¿½Æ®
>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
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

<<<<<<< HEAD
//¸¶¿ì½º À§Ä¡
=======
//ï¿½ï¿½ï¿½ì½º ï¿½ï¿½Ä¡
>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8

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
<<<<<<< HEAD
=======
}, false);
//ï¿½ï¿½ï¿½ì½º Å¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½
// ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½

canvas.addEventListener('click',function(){
 for (var i = 0, j = towers.length; i < j; i++) {
  if(Math.abs(mouse.x-towers[i].x) < 2*rectWidth && Math.abs(towers[i].y-mouse.y) < 2*rectWidth) {
	  if( towers[i].click==false)
		  towers[i].click=true;
	  else
		  towers[i].click=false;  
  }   
 }
>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
}, false);
//¸¶¿ì½º Å¬¸¯ÇßÀ» ¶§
// ¿À·ù ¶ä
canvas.addEventListener('click',function(){
 for (var i = 0, j = towers.length; i < j; i++) {
  if(Math.abs(mouse.x-towers[i].x) < 2*rectWidth && Math.abs(towers[i].y-mouse.y) < 2*rectWidth) {
    towers[i].click=true;
  }   
 }
}, false);
 //¸¶¿ì½º°¡ ÀÌµ¿ÇÒ¶§ ¸¶¿ì½ºÀÇ À§Ä¡¸¦ °¡Á®¿È
window.addEventListener('dragover', getMousePos, false); 

<<<<<<< HEAD
//¸¶¿ì½º ±×·ÁÁÜ
function drawMouse() {
  //¸¶¿ì½º°¡ ¾øÀ¸¸é ¾Æ¸ð°Íµµ ÇÏÁö ¾ÊÀ½
  if(!mouse) return;
  //Å¸¿ö Á¾·ùÀÇ ¹üÀ§¸¦ °¡Á®¿È
  var range = towerClasses[currentTower].prototype.range;
  context.beginPath();

  //Åõ¸íµµ
  context.globalAlpha = 0.2;
  //Å¸¿öÀÇ ¹üÀ§¸¦ Ç¥½ÃÇØÁÜ
  context.arc(mouse.x,mouse.y,range, 0, 2*Math.PI);
  //¸¸¾à¿¡ Å¸¿ö¸¦ ÁöÀ»¼ö ÀÖÀ¸¸é ³ë¶õ»ö
  if(towerAllowed(mouse.x,mouse.y)) context.fillStyle='yellow';
  //¾Æ´Ï¸é »¡°£»ö
=======
 //ï¿½ï¿½ï¿½ì½ºï¿½ï¿½ ï¿½Ìµï¿½ï¿½Ò¶ï¿½ ï¿½ï¿½ï¿½ì½ºï¿½ï¿½ ï¿½ï¿½Ä¡ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
window.addEventListener('dragover', getMousePos, false); 

//ï¿½ï¿½ï¿½ì½º ï¿½×·ï¿½ï¿½ï¿½
function drawMouse() {
  //ï¿½ï¿½ï¿½ì½ºï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½Æ¸ï¿½Íµï¿½ ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½
  if(!mouse) return;
  //Å¸ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
  var range = towerClasses[currentTower].prototype.range;
  context.beginPath();

  //ï¿½ï¿½ï¿½ï¿½
  context.globalAlpha = 0.2;
  //Å¸ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ Ç¥ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
  context.arc(mouse.x,mouse.y,range, 0, 2*Math.PI);
  //ï¿½ï¿½ï¿½à¿¡ Å¸ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½
  if(towerAllowed(mouse.x,mouse.y)) context.fillStyle='yellow';
  //ï¿½Æ´Ï¸ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
  else context.fillStyle = 'red';
  context.fill();
  var type = towerClasses[currentTower].prototype.type;
  context.globalAlpha = 1;
}

<<<<<<< HEAD
//Å¸¿ö¸¦ ¸¸µé¼ö ÀÖ´ÂÁö ¾Ë·ÁÁÜ
=======
//Å¸ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½Ö´ï¿½ï¿½ï¿½ ï¿½Ë·ï¿½ï¿½ï¿½
>>>>>>> c081c23fdb173edeabf584394eb039b6464371e8
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