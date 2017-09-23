autoSlider();
var leftMove = 0;
var timer = 0;
var line = document.getElementById('slider');
var frames = document.getElementsByClassName('slide-frame');
var f1 = document.getElementById('frame1');
var f2 = document.getElementById('frame2');
var f3 = document.getElementById('frame3');
var f4 = document.getElementById('frame4');

f1.onclick = function() {
	leftMove = 0;
	line.style.left = 0;
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f2.onclick = function() {
	leftMove = -frames[0].clientWidth;
	line.style.left = -frames[0].clientWidth + 'px';
	this.style.backgroundColor = '#1ab798';
	f1.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f3.onclick = function() {
	leftMove = -(frames[0].clientWidth * 2);
	line.style.left = -(frames[0].clientWidth * 2) + 'px';
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f1.style.backgroundColor = '#d4d3d4';
	f4.style.backgroundColor = '#d4d3d4';
}
f4.onclick = function() {
	leftMove = -(frames[0].clientWidth * 3);
	line.style.left = -(frames[0].clientWidth * 3) + 'px';
	this.style.backgroundColor = '#1ab798';
	f2.style.backgroundColor = '#d4d3d4';
	f3.style.backgroundColor = '#d4d3d4';
	f1.style.backgroundColor = '#d4d3d4';
}

function autoSlider() {
	timer = setTimeout(function() {
		leftMove = leftMove - frames[0].clientWidth;
		if (leftMove < -frames[0].clientWidth*(frames.length - 1)) {
			leftMove = 0;
			clearTimeout(timer);
		}
		if (leftMove >= 0) {
			f1.style.backgroundColor = '#1ab798';
			f2.style.backgroundColor = '#d4d3d4';
			f3.style.backgroundColor = '#d4d3d4';
			f4.style.backgroundColor = '#d4d3d4';
		} else if (leftMove >= -(frames[0].clientWidth)) {
			f2.style.backgroundColor = '#1ab798';
			f1.style.backgroundColor = '#d4d3d4';
			f3.style.backgroundColor = '#d4d3d4';
			f4.style.backgroundColor = '#d4d3d4';
		} else if (leftMove >= -(frames[0].clientWidth * 2)) {
			f3.style.backgroundColor = '#1ab798';
			f2.style.backgroundColor = '#d4d3d4';
			f1.style.backgroundColor = '#d4d3d4';
			f4.style.backgroundColor = '#d4d3d4';
		} else if (leftMove >= -(frames[0].clientWidth * 3)) {
			f4.style.backgroundColor = '#1ab798';
			f2.style.backgroundColor = '#d4d3d4';
			f3.style.backgroundColor = '#d4d3d4';
			f1.style.backgroundColor = '#d4d3d4';
		}
		line.style.left = leftMove + 'px';
		autoSlider();
	}, 12000)
}