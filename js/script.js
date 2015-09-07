$(document).ready(function() {

	toggle('#readMoreBreak', "#displayMoreBreak");
	toggle('#readMoreRailway', "#displayMoreRailway");
	toggle('#readMoreMuseum', '#displayMoreMuseum');
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