function sleep(num){	//[1/1000초]

			 var now = new Date();
			 var stop = now.getTime() + num;

			 while(true){
				 now = new Date();
				 if(now.getTime() > stop){
					 return;
				 }
			 }
};

function stages(){
	   
	   $("#step").text("STAGE " + stage);
	   $("#step").show();
	    save = stage;
	    delay = 50;
	   triger = true;
	};

function gameovers(){
	$(".gameover").show();
	$("#gameover").text("your score : " + attackerPoints * 5);
	document.getElementById('score').value = attackerPoints * 5;

};
