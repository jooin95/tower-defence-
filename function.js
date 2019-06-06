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
	
	$("#step").text("Stage " + stage);
	$("#step").show();
    save = stage;
    delay = 50;
	triger = true;
};

function gameovers(){
	$("gameover").html("<br/>your score : " + attackerPoints);
	$(".gameover").show();

};
