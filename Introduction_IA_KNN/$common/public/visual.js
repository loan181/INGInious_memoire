

function getSVG() {
	return document.getElementById('blocklySvgZone');
}

function appendPictureToSVG(svg, x, y, href) {
	let existingSVG = document.createElementNS("http://www.w3.org/2000/svg", "image")
    existingSVG.setAttribute('x', x);
    existingSVG.setAttribute('y', y);
    existingSVG.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `$common/img/${href}.svg`);
    svg.appendChild(existingSVG);
}

function initSVG(svg) {
    svg.setAttribute('viewBox', '0 0 200 200');
    svg.setAttribute('style', 'border: 1px solid black;');

    appendPictureToSVG(svg, 0, 0, "grid");
}

function drawMarker(svg, x, y, iris) {
	let dic = {
		"setosa" : "blue_circle",
		"virginica" : "green_square",
		"versicolor" : "red_triangle",
		"unknown" : "dark_diamond",
	}

	appendPictureToSVG(svg, x, y, dic[iris]);
}

function hidePlayButton() {
	$("#playButton").hide();
}
