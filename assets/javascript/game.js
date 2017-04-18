//variables 
var wins = 0;
var losses = 0;
var score = 0;


//generates random number 1-120
var targetNumber = Math.floor((Math.random()*120)+1);

//writes random number in "traget score"
$("#targetScore").text(targetNumber);

//random values for each crystal
$("img").each(function() {
	$(this).attr("value", Math.floor(Math.random()*12)+1);
	});

//run whole function before printing
$(document).ready(function() {

	//update numbers to start game
	function initialize() {
		//updates var targetNumber with new random
		targetNumber = Math.floor(Math.random()*120)+1;
		//print new targetNumber in targetScore div
		$("#targetScore").text(targetNumber);
		score = 0;
		$("total-score").text(score);
		$("img").each(function(){
			$(this).attr("value", Math.floor(Math.random()*12)+1);
		});
	}


//click catcher for crystals to add to score
$("#crystals").on("click", function() {
	var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);
    score += crystalValue;
    $("#total-score").text(score);

 //win/lose conditions
 //adds win and resets game
 	if(score === targetNumber){
 		wins++;
 		$("#wins-losses").html("<h3>Wins: "+ wins + "</h3><br><h3>Losses: "+ losses + "</h3>");
 		initialize();
 	//loss
 		} else if (score > targetNumber) {
	 		losses++;
	 		$("#wins-losses").html("<h3>Wins: "+ wins + "</h3><br><h3>Losses: "+ losses + "</h3>");
	 		initialize();
 			}
});
	
});

