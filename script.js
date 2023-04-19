/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

isplaying = false;
function play() {
	isplaying = !isplaying;
	if(isplaying)
	{video.play();
	document.getElementById("toggle").innerText = "\u23f8"
	}
	else
	{
		video.pause()
		document.getElementById("toggle").innerText = "\u23f5"
	}
	
}