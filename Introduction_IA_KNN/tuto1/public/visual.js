// Need the common visual.js functions !

function main() {
	hidePlayButton();
	
	let svg = getSVG();
	initSVG(svg);
	drawMarker(svg, 84, 84, "unknown")
	drawMarker(svg, 20, 50, "virginica")
}

main();