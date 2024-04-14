var timer = 60;
var score = 0;
var hitrn;
function increaseScore() {
	score += 10;
	document.querySelector(".score").textContent = score;
}
function bubbleGen() {
	var clutter = "";

	for (var i = 1; i <= 105; i++) {
		var rn = Math.floor(Math.random() * 10);
		clutter += `<div class="bubble">${rn}</div>`;
	}

	document.querySelector("#panelb").innerHTML = clutter;
}

function runTime() {
	var timerint = setInterval(function () {
		if (timer > 0) {
			timer--;
			document.querySelector(".timer").textContent = timer;
		} else {
			clearInterval(timerint);
			document.querySelector("#panelb").innerHTML = `<h1>Game over</h1>`;
		}
	}, 1000);
}

function getHit() {
	hitrn = Math.floor(Math.random() * 10);
	document.querySelector(".hitvalue").textContent = hitrn;
}

document.querySelector("#panelb").addEventListener("click", function (dets) {
	var clickedno = Number(dets.target.textContent);
	if (clickedno == hitrn) {
		increaseScore();
		bubbleGen();
		getHit();
	}
});

bubbleGen();
runTime();
getHit();
