
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
        <div style="display: none;"><input type="checkbox" id="scaleStrokeWidth" checked="true"><span style="margin-left:5px;">Scale Stroke Width</span></div>
    `;
    canvaDiv.append(cbs);

    visu.appendChild(canvaDiv);
}

function createPredictionBar() {
    let predictionTable = document.createElement("table");
    predictionTable.className = "table table-sm table-borderless";

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.style = 'width:1px;';
        th.innerText = i;
        th.scope = "row";

        let td = document.createElement("td");
        let tdDiv = document.createElement("div");
        tdDiv.className = "progress";
        let bar = document.createElement("div");
        bar.role = "progressbar";
        bar.id = `percentBar${i}`;
        bar.className = "progress-bar";
        bar.style = "width:0%;";

        tdDiv.appendChild(bar);
        td.appendChild(tdDiv);
        tr.appendChild(th);
        tr.appendChild(td);

        predictionTable.appendChild(tr);
    }

    visu.appendChild(predictionTable);
}

function createResultText() {
    let p = document.createElement("p");
    p.innerHTML = "Chiffre prédit : ";

    let span = document.createElement("span");
    span.id = "nnOut";
    span.className = "h5";
    span.innerHTML = "?";

    p.appendChild(span);
    visu.appendChild(p);
}

$("#blocklySvgZone").hide();
createCanva();
createPredictionBar();
createResultText();