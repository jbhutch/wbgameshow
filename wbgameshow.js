$(document).ready(function(){

		whichKeypress();
		resetListener();

});

function whichKeypress(){
	$(document).one('keydown' ,function(e){
		switch (e.which){
			case 49:
				$('#winner').append('<img src="images/beaver.jpg"/>');
				break;
			case 50:
				$('#winner').append('<img src="images/bobwhite.jpg"/>');
				break;
			case 51:
				$('#winner').append('<img src="images/eagle.jpg"/>');
				break;
			case 52:
				$('#winner').append('<img src="images/fox.jpg"/>');
				break;
			case 53:
				$('#winner').append('<img src="images/owl.jpg"/>');
				break;
			case 54:
				$('#winner').append('<img src="images/bear.jpg"/>');
				break;
			case 55:
				$('#winner').append('<img src="images/buffalo.jpg"/>');
				break;
			case 56:
				$('#winner').append('<img src="images/antelope.jpg"/>');
				break;
			default:
				whichKeypress();
		}
		playSound (e.which);
	});
	return true;
}

function refresh(){
	window.location.reload();	
}

function resetListener(){
	$(document).keydown(function(e){
		if (e.which === 32){
			refresh();
		}
	});
}

function playSound(e){
	var audio = new Audio;
	switch (e){
		case 49:
			audio.src = 'audio/beaver.mp3';
			break;
		case 50:
			audio.src = 'audio/bobwhite.mp3';
			break;
		case 51:
			var random = Math.floor((Math.random()*2));
			if (random === 0){
				audio.src = 'audio/eagleland.mp3';
			}
			else {
				audio.src = 'audio/eagle.mp3';
			}
			break;
		case 52:
			audio.src = 'audio/fox.mp3';
			break;
		case 53:
			audio.src = 'audio/owl.mp3';
			break;
		case 54:
			var random = Math.floor((Math.random()*2));
			if (random === 0){
				audio.src = 'audio/dabears.mp3';
			}
			else {
				audio.src = 'audio/bear.mp3';
			}
			break;
		case 55:
			audio.src = 'audio/buffalo.mp3';
			break;
		case 56:
			audio.src = 'audio/antelope.mp3';
			break;
		default:
			audio.src = '';
	}
	audio.play();
}