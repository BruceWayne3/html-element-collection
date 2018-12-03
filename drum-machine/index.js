`use strict`;
let buttons = document.getElementsByClassName('drum-kit__drum');
for (let button of buttons) {
	button.onclick = function() {
		let song = this.getElementsByTagName('audio')[0];
		song.currentTime = 0;
		song.play();
	}; 
};