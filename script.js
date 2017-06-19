$(document).ready(function(){
	var $gridLimit = 256;

	for(i = 1; i <= $gridLimit; i++) {
		$('#container').append('<div class = "grid"></div>');
	}
});