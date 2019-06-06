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
	if(stage != save){
	$("#step").html("Stage " + stage);
	$("#step").show();
    
	sleep(2000);
    
    $("#step").hide();
    save = stage;
	}
};

function gameovers(){
	$("gameover").html("<br/>your score : " + attackerPoints);
	$(".gameover").show();

};
