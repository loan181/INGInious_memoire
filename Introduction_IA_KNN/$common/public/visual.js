

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
	};

	appendPictureToSVG(svg, x, y, dic[iris]);
}

function drawCounterTable() {
	let visu = document.getElementById('visualization');
	let counterTableDiv = document.createElement("div");

	let counterTabkeDivTitle = document.createElement("h5");
	counterTabkeDivTitle.appendChild(document.createTextNode("Compteurs"));

	let counterTableDivTable = document.createElement("table");
	counterTableDivTable.style = "text-align: center; width: 100%;";
	counterTableDivTable.className = "table table-bordered";

	let counterTableDivTableTr = document.createElement("tr");
	let imgSrc = ["blue_circle", "red_triangle", "green_square"];
	for (let i = 0; i < 3; i++) {
		let counterTableDivTableTrTd = document.createElement("td");
		let counterTableDivTableTrTdImg = document.createElement("img");
		counterTableDivTableTrTdImg.src = `$common/img/${imgSrc[i]}.svg`;
		counterTableDivTableTrTd.appendChild(counterTableDivTableTrTdImg);
		counterTableDivTableTr.appendChild(counterTableDivTableTrTd);
	}
	counterTableDivTable.appendChild(counterTableDivTableTr);

	counterTableDivTableTr = document.createElement("tr");
	for (let i = 0; i < 3; i++) {
		let counterTableDivTableTrTd = document.createElement("td");
		let counterTableDivTableTrTdSpan = document.createElement("span");
		counterTableDivTableTrTdSpan.id = "counter_"+imgSrc[i];
		counterTableDivTableTrTdSpan.className = "h6";
		counterTableDivTableTrTdSpan.innerText = "0";
		counterTableDivTableTrTd.appendChild(counterTableDivTableTrTdSpan);
		counterTableDivTableTr.appendChild(counterTableDivTableTrTd);
	}
	counterTableDivTable.appendChild(counterTableDivTableTr);


	counterTableDiv.appendChild(counterTabkeDivTitle);
	counterTableDiv.appendChild(counterTableDivTable);

	visu.appendChild(counterTableDiv);
}

function hidePlayButton() {
	$("#playButton").hide();
}
