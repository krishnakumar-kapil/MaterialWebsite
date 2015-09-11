const skillCard = '#skillContainer .mdl-parentSkill-card .mdl-grid .mdl-skill-card.mdl-cell';
const supportinText = ' .mdl-card__supporting-text';
//light
// var colorSkill = {"Expert": "#66BB6A",
// 					"Proficient": "#90CAF9",
// 					"Familiar": "#FFCC80",
// 					"Exposure": "#FFF59D",
// 					};

//dark
// var colorSkill = {"Expert": "#1B5E20",
// 					"Proficient": "#0D47A1",
// 					"Familiar": "#311B92",
// 					"Exposure": "#3E2723",
// 					};

//medium
var colorSkill = {"Expert": "#8BC34A",
					"Proficient": "#FFC107",
					"Familiar": "#03A9F4",
					"Exposure": "#00BCD4",
					};

$(document).ready(function() {
	changeActive();

	toggle('#readMoreBreak', "#displayMoreBreak");
	toggle('#readMoreRailway', "#displayMoreRailway");
	toggle('#readMoreMuseum', '#displayMoreMuseum');
	toggle('#readMoreHuffman', '#displayMoreHuffman');

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
		$(this).css('background-color', colorSkill[level]);
		// console.log(level);
	});
}

function changeActive(){
	var loc = window.location.pathname;
	console.log(loc);
	$('#topBar').find('a').each(function() {
	  $(this).toggleClass('active', $(this).attr('href') == loc);
	});
}

function resumeButton(){
	// $('#resumeButton').on('click',function(){

	// });
}