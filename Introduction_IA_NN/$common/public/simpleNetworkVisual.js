
let visu = document.getElementById('visualization');
let grid = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];
let layersMat = [
    [
        [6, 6, 0],
        [-4, 8, -1],
        [6, 7, 9],
        [8, -4, -3],
        [-5, -5, -1],
        [8, -4, 7],
        [6, 4, 1],
        [-4, 9, -1],
        [7, 7, 8]
    ]
    ,[
        [-5, 5],
        [7, -7],
        [-4, 4]
    ]
];
let nnNeurons = [];

function create3x3InteractiveGrid(grid) {
    let gridDiv = document.createElement("div");
    gridDiv.id = "raphaelGrid";
    visu.appendChild(gridDiv);

    let paperSize = 120;
    let paper = Raphael(gridDiv, "100%", "100%");
    paper.setViewBox(0, 0 , paperSize, paperSize, true);

    let gridNumber = 3;
    let offset = paperSize/gridNumber;
    for (let i = 0; i < gridNumber; i++) {
        for (let j = 0; j < gridNumber; j++) {
            let gridCell = paper.rect(i*offset, j*offset, offset, offset)
                .attr({fill: "white", stroke:"#AAA"})
                .data("i", i)
                .data("j", j)
                .click(function () {
                    if (this.attr("fill") === "white") {
                        this.attr("fill", "black");
                    } else {
                        this.attr("fill", "white");
                    }

                    grid[j][i] = this.attr("fill") === "black" ? 1:0;
                });
        }
    }
    return paper;
}

function createNeuralNetwork(nnNeurons) {
    let nnDiv = document.createElement("div");
    nnDiv.id = "raphaelNN";
    visu.appendChild(nnDiv);

    let paperSize = 120;
    let paper = Raphael(nnDiv, "100%", "100%");
    paper.setViewBox(0, 0 , paperSize, paperSize, true);

    const layersNeuronsNumber = [9, 3, 2];
    const neuronSize = 10;

    let saveXYPos = [];
    for (let _ = 0; _ < layersNeuronsNumber.length; _++) {
        saveXYPos.push([]);
        nnNeurons.push([])
    }


    const neuronRadius = neuronSize/2;
    let paperHorizontalSpace = paperSize - neuronSize;
    let horizontalOffset = paperHorizontalSpace/(layersNeuronsNumber.length-1);
    for (let i = 0; i < layersNeuronsNumber.length; i++) {
        let x = neuronRadius + i*horizontalOffset;
        let verticalOffset = paperSize/(layersNeuronsNumber[i]+1);
        for (let j = 0; j < layersNeuronsNumber[i]; j++) {
            let y = (j+1)*verticalOffset;
            let neuron = paper.circle(x, y, neuronRadius)
            .attr({fill: "aqua", stroke:"#AAA"});
            nnNeurons[i].push(neuron);
            saveXYPos[i].push([x, y]);
        }
    }

    let layersAbsoluteMaximum = 9; // TODO : calculer dynamiquement

    for (let i = 0; i < saveXYPos.length-1; i++) {
        let currentLayerMat = layersMat[i];
        for (let j = 0; j < saveXYPos[i].length; j++) {
            for (let k = 0; k < saveXYPos[i + 1].length; k++) {
                let x1 = saveXYPos[i][j][0];
                let y1 = saveXYPos[i][j][1];
                let x2 = saveXYPos[i+1][k][0];
                let y2 = saveXYPos[i+1][k][1];

                let weight = currentLayerMat[j][k];
                let color = "green";
                if (weight < 0) {
                    color = "red";
                    weight = -weight;
                }
                let opacity = weight/layersAbsoluteMaximum;

                let line = paper.path(`M${x1} ${y1}L${x2} ${y2}`)
                    .attr({stroke:color, "stroke-opacity": opacity})
                    .toBack();
            }
        }
    }

    return paper
}

function matrixDot (A, B) {
    var result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));

    return result.map((row, i) => {
        return row.map((val, j) => {
            return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]) ,0)
        })
    })
}

function sigmoide(x) {
    return 1/(1+Math.exp(-x));
}

function classify(grid, nnNeurons, layersMat) {
    // Set the value of the first layer
    let gridFlatten = grid.flat();
    for (let i = 0; i < gridFlatten.length; i++) {
        let correspondingNeuron = nnNeurons[0][i];
        let value = gridFlatten[i];
        if (value === 1) { // black pixel
            correspondingNeuron.attr("fill", "black");
        } else { // white pixel
            correspondingNeuron.attr("fill", "white");
        }
    }
    // Set the value of the second layer
    let secondLayerNeuronValues = matrixDot([gridFlatten], layersMat[0]);
    for (let i = 0; i < secondLayerNeuronValues[0].length; i++) {
        let neuronValue = sigmoide(secondLayerNeuronValues[0][i]);
        secondLayerNeuronValues[0][i] = neuronValue;
        let correspondingNeuron = nnNeurons[1][i];
        let lightness = 100-(neuronValue*100); // 100 = white, 0 = black
        let color = Raphael.hsl(0,0, lightness);
        correspondingNeuron.attr("fill", color)
    }

    // TODO : enorme copy-paste de au-dessus
    let thirdLayerNeuronValues = matrixDot(secondLayerNeuronValues, layersMat[1]);
    for (let i = 0; i < thirdLayerNeuronValues[0].length; i++) {
        let neuronValue = sigmoide(thirdLayerNeuronValues[0][i]);
        thirdLayerNeuronValues[0][i] = neuronValue;
        let correspondingNeuron = nnNeurons[2][i];
        let lightness = 100-(neuronValue*100); // 100 = white, 0 = black
        let color = Raphael.hsl(0,0, lightness);
        correspondingNeuron.attr("fill", color)
    }
    let pourcentageVertical = thirdLayerNeuronValues[0][0]*100;
    let pourcentageVerticalBar = 100-thirdLayerNeuronValues[0][0]*100;

    let progressBarVert = document.getElementById("progressBarVert");
    progressBarVert.style = `width:${pourcentageVerticalBar}%;`;
    progressBarVert.innerHTML = Math.round(pourcentageVerticalBar);

    let progressBarHor = document.getElementById("progressBarHor");
    progressBarHor.style = `width:${pourcentageVertical}%;`;
    progressBarHor.innerHTML = Math.round(pourcentageVertical);

    // Refresh prediction
    let conclusionSpan = document.getElementById("conclusion");
    let conclusionText = "?";
    if (pourcentageVertical >= 50) {
        conclusionText = "Vertical"
    } else {
        conclusionText = "Horizontal";
    }
    conclusionSpan.innerHTML = conclusionText
}

function createConclusionsBarNeuralNetwork() {
    let concluDiv = document.createElement("div");
    concluDiv.id = "conclusionsDiv";
    visu.appendChild(concluDiv);

    let progress = document.createElement("div");
    progress.classList.add("progress");
    concluDiv.appendChild(progress);

    let progressBarVert = document.createElement("div");
    progressBarVert.id = "progressBarVert";
    progressBarVert.classList.add("progress-bar");
    progressBarVert.style = "width:50%";
    progressBarVert.innerHTML = "?";
    progress.appendChild(progressBarVert);

    let progressBarHor = document.createElement("div");
    progressBarHor.id = "progressBarHor";
    progressBarHor.classList.add("progress-bar");
    progressBarHor.classList.add("bg-info");
    progressBarHor.style = "width:50%";
    progressBarHor.innerHTML = "?";
    progress.appendChild(progressBarHor);

    // Labels
     let progressLabels = document.createElement("div");
    concluDiv.appendChild(progressLabels);

    let startLabel = document.createElement("span");
    startLabel.style = "float:left";
    startLabel.innerHTML = "Vertical";
    progressLabels.appendChild(startLabel);

    let endLabel = document.createElement("span");
    endLabel.style = "float:right;text-align:right;";
    endLabel.innerHTML = "Horizontal";
    progressLabels.appendChild(endLabel);
}

function createConclusion() {
    let concluDiv = document.createElement("div");
    concluDiv.style = "display: inline-block;";
    concluDiv.classList.add("h5");
    concluDiv.id = "conclusionsDiv";
    concluDiv.innerHTML = "Résultat prédit : ";
    visu.appendChild(concluDiv);

    let result = document.createElement("span");
    result.id = "conclusion";
    result.style = "font-weight: bold;";
    result.innerHTML = "?";
    concluDiv.appendChild(result);
}

$("#blocklySvgZone").hide();
let gridRaphael = create3x3InteractiveGrid(grid);
let nnRapheal = createNeuralNetwork(nnNeurons);
createConclusionsBarNeuralNetwork();
createConclusion();