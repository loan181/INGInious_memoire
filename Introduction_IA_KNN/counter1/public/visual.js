// Need the common visual.js functions !

function main() {	
	let svg = getSVG();
	initSVG(svg);
	drawMarker(svg, 140, 50, "versicolor");
	drawMarker(svg, 40, 120, "versicolor");
	drawMarker(svg, 110, 100, "setosa");
	drawMarker(svg, 5, 10, "virginica");
	drawMarker(svg, 84, 84, "unknown");
	drawCounterTable();
}

main();