
const neuronRaphaelJSValueName = "nnValue";
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
            .attr({stroke:"#AAA"});
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

function addAnimationSpeedWidget() {
    let target = document.getElementById("blocklyButtons");

    let widget = document.createElement("input");
    widget.type = "range";
    widget.min = "0";
    widget.max = "80";
    widget.step = "5";

    widget.oninput = function() {
        blocklyTask.options.speed = this.value;
    };
    target.appendChild(widget);
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
addAnimationSpeedWidget();
let gridRaphael = create3x3InteractiveGrid(grid);
let nnRapheal = createNeuralNetwork(nnNeurons);
createConclusionsBarNeuralNetwork();
createConclusion();


function getNeuronsValues(layers_ind) {
    let ret = [];
    for (let i = 0; i < nnNeurons[layers_ind].length; i++) {
        ret.push(nnNeurons[layers_ind][i].data(neuronRaphaelJSValueName));
    }
    return ret;
}

let Classify = {};
Classify.handleInputLayer = function(img) {
    let imgFlatten = img.flat();
    for (let i = 0; i < imgFlatten.length; i++) {
        let correspondingNeuron = nnNeurons[0][i];
        let value = imgFlatten[i];
        correspondingNeuron.data(neuronRaphaelJSValueName, value);
    }
};

Classify.handleLayer = function(layerInd) {
    let currentLayersMat = layersMat[layerInd-1];
    let previousLayerNeuronValues = getNeuronsValues(layerInd-1);
    let layerNeuronsValue = matrixDot([previousLayerNeuronValues], currentLayersMat)[0];
    for (let i = 0; i < layerNeuronsValue.length; i++) {
        let correspondingNeuron = nnNeurons[layerInd][i];
        let value = sigmoide(layerNeuronsValue[i]);
        correspondingNeuron.data(neuronRaphaelJSValueName, value);
    }
};

Classify.conclude = function() {
    let lastLayerValue = getNeuronsValues(2);
    let [verticalValue, horizontalValue] = lastLayerValue;
    return verticalValue > horizontalValue ? "vertical": "horizontal";
};

Classify.setNeuronValue = function(neuronInd, layerInd, value) {
    nnNeurons[layerInd][neuronInd].data(neuronRaphaelJSValueName, value);
};

let Animation = {};
Animation.reset = function () {
    // Reset all neurons colors and values
    for (let i = 0; i < nnNeurons.length; i++) {
        for (let j = 0; j < nnNeurons[i].length; j++) {
            nnNeurons[i][j].data(neuronRaphaelJSValueName, undefined);
        }
        Animation.layerColorNeuron(i);
    }
    let progressBarVert = document.getElementById("progressBarVert");
    progressBarVert.style = `width:50%;`;
    progressBarVert.innerHTML = "?";

    let progressBarHor = document.getElementById("progressBarHor");
    progressBarHor.style = `width:50%;`;
    progressBarHor.innerHTML = "?";

    let conclusionSpan = document.getElementById("conclusion");
    conclusionSpan.innerHTML = "?";
};

Animation.layerColorNeuron = function (layer_i) {
    for (let i = 0; i < nnNeurons[layer_i].length; i++) {
        Animation.colorNeuron(layer_i, i);
    }
};

Animation.colorNeuron = function(layer_i, neuron_i) {
    let correspondingNeuron = nnNeurons[layer_i][neuron_i];
    let neuronValue = correspondingNeuron.data(neuronRaphaelJSValueName);
    let fillColor = "aqua";
    if (neuronValue !== undefined) {
        let lightness = 100-(neuronValue*100); // 100 = white, 0 = black
        fillColor = Raphael.hsl(0, 0, lightness);
    }
    correspondingNeuron.attr("fill", fillColor)
};

Animation.conclusionBar = function () {
    let [verticalValue, horizontalValue] = getNeuronsValues(2);
    let verticalBarValue = verticalValue*100;
    let horizontalBarValue = horizontalValue*100;

    let progressBarVert = document.getElementById("progressBarVert");
    progressBarVert.style = `width:${verticalBarValue}%;`;
    progressBarVert.innerHTML = Math.round(verticalBarValue);

    let progressBarHor = document.getElementById("progressBarHor");
    progressBarHor.style = `width:${horizontalBarValue}%;`;
    progressBarHor.innerHTML = Math.round(horizontalBarValue);
};

Animation.conclusionText = function (conclusionText) {
    let conclusionSpan = document.getElementById("conclusion");
    conclusionSpan.innerHTML = conclusionText;
};

Animation.reset();


var initInterpreterApi = function(interpreter, scope) {
    var wrapper;
    wrapper = function() {
        return grid;
    };
    interpreter.setProperty(scope, 'getGrid',
        interpreter.createNativeFunction(wrapper)
    );

    wrapper = function(img) {
        Classify.handleInputLayer(img);
        Animation.layerColorNeuron(0);
    };
    interpreter.setProperty(scope, 'handleInputLayer',
        interpreter.createNativeFunction(wrapper)
    );

    wrapper = function(layer_ind) {
        layer_ind = layer_ind-1;
        Classify.handleLayer(layer_ind);
        Animation.layerColorNeuron(layer_ind);
    };
    interpreter.setProperty(scope, 'handleLayer',
        interpreter.createNativeFunction(wrapper)
    );

    wrapper = function() {
        let conclusion = Classify.conclude();
        Animation.conclusionBar();
        Animation.conclusionText(conclusion);
        return conclusion;
    };
    interpreter.setProperty(scope, 'conclude',
        interpreter.createNativeFunction(wrapper)
    );

    wrapper = function(neuronInd, layerInd, value) {
        neuronInd = neuronInd-1;
        Classify.setNeuronValue(neuronInd, layerInd, value);
        Animation.colorNeuron(layerInd, neuronInd);
    };
    interpreter.setProperty(scope, 'setNeuronValue',
        interpreter.createNativeFunction(wrapper)
    );

    Animation.reset();
};
