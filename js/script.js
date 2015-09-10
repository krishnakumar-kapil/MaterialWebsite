const skillCard = '#skillContainer .mdl-parentSkill-card .mdl-grid .mdl-skill-card.mdl-cell';
const supportinText = ' .mdl-card__supporting-text';
var colorSkill = {"Expert": "#4CAF50","Proficient": "#2196F3","Familiar": "Orange","Exposure": "#F44336",
					};

$(document).ready(function() {

	toggle('#readMoreBreak', "#displayMoreBreak");
	toggle('#readMoreRailway', "#displayMoreRailway");
	toggle('#readMoreMuseum', '#displayMoreMuseum');

	addColorSkill();
});

function toggle(buttonName, divName){
	$(buttonName).on('click',function(){
		$(divName).toggle('show');
		if($(buttonName).html() == "Read Less"){
			$(buttonName).html("Read More");
		} else{
			$(buttonName).html("Read Less");
		}
	});
}

function addColorSkill(){
	$(skillCard).each(function(){

		var level = $(this).children('div.mdl-card__supporting-text').text().trim();
		console.log(level);
		console.log(colorSkill[level]);
		$(this).css('background-color', colorSkill[level]);
		// console.log(level);
	});
}