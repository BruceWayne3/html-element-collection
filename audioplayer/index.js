`use strict`
let audio = document.getElementsByTagName('audio')[0];
let mediaplayer = document.getElementsByClassName('mediaplayer')[0];
let btnPlay = document.getElementsByClassName('playstate')[0];
let btnStop = document.getElementsByClassName('stop')[0];
let btnBack = document.getElementsByClassName('back')[0];
let btnNext = document.getElementsByClassName('next')[0];

btnStop.onclick = function() {
	mediaplayer.classList.remove('play');
	audio.pause();
	audio.currentTime = 0;
};

btnPlay.onclick = function() {
	if (mediaplayer.classList.contains('play')) {
		mediaplayer.classList.remove('play');
		audio.pause();
	} else {
		mediaplayer.classList.add('play');
		audio.play();
	};
};

let songs = [
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3",
    "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"
    ];

let title = document.getElementsByClassName('title')[0];
let songTitle = ["LA Chill Tour","This is it band","LA Fusion Jam"];
let numberOfSong = 0;

btnBack.onclick = function() {
	if (numberOfSong >= 1) {
		numberOfSong--;
	} else {
		numberOfSong = songs.length - 1;
	};

	audio.src = songs[numberOfSong];
	title.title = songTitle[numberOfSong];

	if (mediaplayer.classList.contains('play')) {
		audio.play();
	} else {
		audio.pause();
	};
};

btnNext.onclick = function() {
	if (numberOfSong < songs.length - 1) {
		numberOfSong++;
	} else {
		numberOfSong = 0;
	};

	audio.src = songs[numberOfSong];
	title.title = songTitle[numberOfSong];

	if (mediaplayer.classList.contains('play')) {
		audio.play();
	} else {
		audio.pause();
	};
};