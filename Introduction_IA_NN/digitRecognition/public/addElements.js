
function createCanva() {
    let canvaDiv = document.createElement("div");

    // Add the canva
    let canva = document.createElement("canvas");
    canva.id = "can";
    canva.style = 'width:100%;top:10%;left:10%;border:2px solid; cursor:crosshair; touch-action: none;';
    canva.height = canva.width;
    canvaDiv.append(canva);

    // Add the checkbox
    let cbs = document.createElement("div");
    cbs.innerHTML = `
        <input type="checkbox" class="form-check-input" id="preprocessing">
        <label class="form-check-label form-label-lg" for="preprocessing">Afficher l'image transformée</label>
        <div style="visibility: hidden"><input type="checkbox" id="scaleStrokeWidth" checked="true"><span style="margin-left:5px;">Scale Stroke Width</span></div>
    `;
    canvaDiv.append(cbs);

    visu.appendChild(canvaDiv);
}

function createPredictionBar() {
    let div = document.createElement("div");
    div.className = "container";

    let div2 = document.createElement("div");
    div2.className = "row no-gutters";

    for (let i = 0; i <= 9; i++) {
        let divBar = document.createElement("div");
        divBar.className = "col";

        let barTitle = document.createElement("h5");
        barTitle.style = "padding-left: 5px;";
        barTitle.innerHTML = i;

        let bar = document.createElement("div");
        bar.className = "progress";

        let barBar = document.createElement("div");
        barBar.id = "percentBar" + i;
        barBar.className = "progress-bar";
        barBar.style = "height: 0%;";

        bar.appendChild(barBar);
        divBar.appendChild(barTitle);
        divBar.appendChild(bar);
        div2.appendChild(divBar)
    }

    div.appendChild(div2);
    visu.appendChild(div);
}

$("#blocklySvgZone").hide();
createCanva();
createPredictionBar();