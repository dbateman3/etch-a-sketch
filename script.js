$(document).ready(function(){
	var $gridLimit = 256;

	for(i = 1; i <= $gridLimit; i++) {
		$('#container').append('<div class = "grid"></div>');
	}

	$('.grid').mouseenter(function() {
		$(this).css("background-color", "black");
	});

	document.getElementById("clear").onclick = function() {
		$('.grid').css("background-color", "white");
		
		var $gridSize = prompt("Enter new grid size", "16");
	};
});