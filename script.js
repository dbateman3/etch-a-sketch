$(document).ready(function(){
	var $gridLimit = 256;

	for(i = 1; i <= $gridLimit; i++) {
		$('#container').append('<div id = "grid"></div>');
	}

	$('#grid').mouseenter(function() {
		$('#grid').addClass("hover");
	});
});