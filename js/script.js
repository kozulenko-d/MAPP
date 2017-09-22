autoSlider();
var left = 0;
var timer = 0;
var line = document.getElementById('slider');
var frames = document.getElementsByClassName('slide-frame');
var f1 = document.getElementById('frame1');
var f2 = document.getElementById('frame2');
var f3 = document.getElementById('frame3');
var f4 = document.getElementById('frame4');

f1.onclick = function() {
	line.style.left = 0;
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f2.onclick = function() {
	line.style.left = -frames[0].clientWidth + 'px';
	this.style.backgroundColor = '#1ab798';
	f1.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f3.onclick = function() {
	line.style.left = -(frames[0].clientWidth * 2) + 'px';
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f1.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f4.onclick = function() {
	line.style.left = -(frames[0].clientWidth * 3) + 'px';
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f1.style.backgroundColor = '#d4d3d4';
}

function autoSlider() {
	timer = setTimeout(function() {
		// var line = document.getElementById('slider');
		
		left = left - frames[0].clientWidth;
		if (left < -frames[0].clientWidth*(frames.length - 1)) {
			left = 0;
			clearTimeout(timer);
		}
		line.style.left = left + 'px';
		autoSlider();
	}, 12000)
}