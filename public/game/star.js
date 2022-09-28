var stars = [];

getRandomInt = (max) => {
	return Math.ceil(Math.random() * Math.ceil(max));
};

choose = (choices) => {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
  };

starFactory = (height=-5) => {
	let cur = {
		x: getRandomInt(canvas.width),
		y: height,
		sz: choose([1,2,2,3,3]),
	};
	cur.speed = (cur.sz == 1) ? choose([0.5, 1, 1]) : (cur.sz == 2) ? choose([1, 1.5, 1.5]) : choose([1.5, 1.5, 2]);
	return cur;
};

populateStars = () => {
	let i = 0;
	for (i = -5; i < canvas.height; i += 10) {
		stars.push(starFactory(i));
	}
	stars.reverse();
};


drawStars = (ctx) => {
	ctx.fillStyle = 'yellow';
	let i = 0;
	for (i = 0; i < stars.length; i++) {
		ctx.save();
		ctx.translate(stars[i].x, stars[i].y);
		ctx.fillRect(0, 0, stars[i].sz, stars[i].sz);
		ctx.restore();
	}
}

updateStars = () => {
	stars.forEach(s => s.y += s.speed);

	// Create a new star when one goes off bottom of canvas
	stars.sort((a, b) => {return b.y - a.y});
	while (stars[0].y >= canvas.height) {
		stars.shift();
		stars.push(starFactory());
	}
}

init = () => {
    canvas = document.getElementById('gameArea');
	populateStars();
    updateState();
	updateCanvas();
    
}

updateState = () => {
	window.setTimeout(updateState, 33);

	updateStars();
	
	
}

updateCanvas = () => {
	window.requestAnimationFrame(updateCanvas);
	let ctx = canvas.getContext('2d');
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawStars(ctx);
}


window.onload = init;