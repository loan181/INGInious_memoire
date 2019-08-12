
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
let bias = undefined;
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
    let extraVerticalSpaceForTooltip = 38;
    let paper = Raphael(nnDiv, "100%", "100%");
    paper.setViewBox(0, 0 , paperSize, paperSize+extraVerticalSpaceForTooltip, true);


    let nnInformationText;
    const nnInformationTextDefault = "(Aucun élément survolé)";
    function resetToolTip() {
        nnInformationText.attr({"text":nnInformationTextDefault})
    }

    function neuronEnter(handler, mouse_x, mouse_y) {
        let nnLayer = this.data("layer");
        let nnInd = this.data("index");
        let nnValue = nnNeurons[nnLayer][nnInd].data(neuronRaphaelJSValueName);
        let nnValueText = "Non définie";
        if (nnValue !== undefined) {
            nnValueText = Number(nnValue).toFixed(2);
        }
        let text = "";
        text += `Neurone: ${nnInd+1}\n
    Couche: ${nnLayer+1}\n
    Valeur: ${nnValueText}`;
        nnInformationText.attr({"text":text})
    }

    function weightEnter(handler, mouse_x, mouse_y) {
        let wLayer = this.data("layer");
        let wN1 = this.data("n1");
        let wN2 = this.data("n2");
        let wValue = layersMat[wLayer][wN1][wN2];
        let nnValueText = Number(wValue).toFixed(2);
        let text = "";
        text += `Poids reliant ${wN1+1} à ${wN2+1}\n
    Couche: ${wLayer+1}\n
    Valeur: ${nnValueText}`;
        nnInformationText.attr({"text":text})
    }

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
                .attr({stroke:"#AAA"})
                .data("layer", i)
                .data("index", j);
            neuron.hover(neuronEnter, resetToolTip);
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
                    .toBack()
                    .data("layer", i)
                    .data("n1", j)
                    .data("n2", k);
                line.hover(weightEnter, resetToolTip);
            }
        }
    }

    // Information panel
    paper.rect(0,paperSize,paperSize,extraVerticalSpaceForTooltip).attr({stroke:"black"});
    nnInformationText = paper.text(paperSize/2, paperSize+extraVerticalSpaceForTooltip/2,
        nnInformationTextDefault)
        .attr({"font-size": 10});
    return paper
}

function createConclusionsBarNeuralNetwork() {
    let concluDiv = document.createElement("div");
    concluDiv.id = "conclusionsDiv";
    concluDiv.style = "margin-top: 10px;";
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

function addRunButton() {
    let target = document.getElementById("blocklyButtons");

    let widget = document.createElement("button");
    widget.id = "playDirectlyButton";
    widget.type = "button";
    widget.className = "btn btn-primary";
    widget.style = "border-radius: 10px; margin-left: 5px;";
    widget.innerHTML = '<span class="fa fa-fw fa-forward"></span> Run directly code';

    widget.onclick = function() {
        // See : https://developers.google.com/blockly/guides/app-integration/running-javascript
        Blockly.JavaScript.STATEMENT_PREFIX = ""; // Delete occurences of highlights
        window.LoopTrap = 5000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
        let code = Blockly.JavaScript.workspaceToCode();
        try {
            eval(code);
        } catch (e) {
            alert(e);
            console.warn(e);
        }
    };

    // We put it at the right of the run code button
    target.insertBefore(widget, target.childNodes[6]); // (6 because there is the play, stop and restart that are hidden)
}



// External functions

function customPrint(value) {
    console.log(value);
    // Better custom alert message
    if (value[0] !== undefined && value[0][0] !== undefined) // If it is a matrix
        value = value.join('\n');
    alert(value);
}

function getGrid() {
    return grid;
}

function handleInputLayer(img) {
    Classify.handleInputLayer(img);
    Animation.layerColorNeuron(0);
}

function handleLayer(layer_ind) {
    layer_ind = layer_ind-1;
    Classify.handleLayer(layer_ind);
    Animation.layerColorNeuron(layer_ind);
}

function conclude() {
    let conclusion = Classify.conclude();
    Animation.conclusionBar();
    Animation.conclusionText(conclusion);
    return conclusion;
}

function setNeuronValue(neuronInd, layerInd, value) {
    neuronInd = neuronInd - 1;
    Classify.setNeuronValue(neuronInd, layerInd, value);
    Animation.colorNeuron(layerInd, neuronInd);
}

function getPixelValue(pixel_i, picture) {
    return picture.flat()[pixel_i-1];
}

function getNeuronLayers(layerInd) {
    return getNeuronsValues(layerInd-1);
}

function getWeightLayers(layerInd) {
    return layersMat[layerInd-1];
}

function matrixProd(matNeuron, matWeight) {
    return matrixDot([matNeuron], matWeight);
}

function setValueLayer(layerInd, neuronInd, value) {
    Classify.setNeuronValue(neuronInd-1, layerInd-1, value);
    Animation.colorNeuron(layerInd-1, neuronInd-1);
}


function matrixDot (A, B) {
    if (A[0][0] === undefined) {
        A = [A]; // Convert to matrix if needed
    }

    // Try to find the good bias, we can't ask it as a parameter as it wasn't introduced
    let chosenBias = null;
    if (bias !== undefined) {
        for (let i = 0; i < bias.length; i++) {
            if (B[0].length === bias[i].length) {
                chosenBias = bias[i];
                break;
            }
        }
    }

    let result = new Array(A.length).fill(0).map(row => new Array(B[0].length).fill(0));
    return result.map((row, i) => {
        return row.map((val, j) => {
            let defaultValue = 0;
            if (chosenBias != null) {
                defaultValue = chosenBias[j];
            }
            return A[i].reduce((sum, elm, k) => sum + (elm*B[k][j]), defaultValue)
        })
    })
}

function sigmoid(x) {
    return 1/(1+Math.exp(-x));
}

function getNeuronsValues(layers_ind) {
    let ret = [];
    for (let i = 0; i < nnNeurons[layers_ind].length; i++) {
        ret.push(getNeuronLayer(layers_ind, i));
    }
    return ret;
}

function getNeuronLayer(layerInd, neuronInd) {
    let value;
    let item = nnNeurons[layerInd][neuronInd];
    try {
        // If we use RaphaelJs Interface
        value = item.data(neuronRaphaelJSValueName);
    } catch (e) {
        // If we store the values directly inside the table
        value = item;
    }
    return value;
}

function createMatrix(initSize, ...allValues) {
    let numberOfCols = initSize;
    let numberOfRows = initSize;

    let allValuesToMat = [];
    for (let i = 0; i < initSize; i++) {
        let subL = [];
        for (let j = 0; j < initSize; j++) {
            subL.push(Number(allValues[i*initSize+j]))
        }
        allValuesToMat.push(subL);
    }
    let allValuesToMatTransp = allValuesToMat[0].map((col, i) => allValuesToMat.map(row => row[i]));

    for (let i = initSize-1; i >= 0; i--) {
        if (allValuesToMat[i].every(item => item === 0)) {
            numberOfRows--;
        }
        else {
            break;
        }
    }
    for (let i = initSize-1; i >= 0; i--) {
        if (allValuesToMatTransp[i].every(item => item === 0)) {
            numberOfCols--;
        }
        else {
            break;
        }
    }

    let res = [];
     for (let i = 0; i < numberOfRows; i++) {
        let subL = [];
        for (let j = 0; j < numberOfCols; j++) {
            subL.push(allValues[i*initSize+j])
        }
        res.push(subL);
    }
     return res;
}

function createMatrixDyn(linesN, colsN, val) {
    let res = [];
    for (let i = 0; i < linesN; i++) {
        let subL = [];
        for (let j = 0; j < colsN; j++) {
            subL.push(val);
        }
        res.push(subL);
    }
    return res;
}



function setMatrix(mat, row, column, value) {
    mat[row-1][column-1] = value;
}

function getMatrix(mat, row, col) {
    return mat[row-1][col-1];
}

function getMatWidth(mat) {
    return mat[0].length;
}

function getMatHeight(mat) {
    return mat.length;
}

function getNeuronOutputLayer(neuronInd) {
    return getNeuronLayer(nnNeurons.length-1, neuronInd-1);
}

function getLayersNumber() {
    return nnNeurons.length;
}

function getNeuronNumberOfLayer(layer_i) {
    return nnNeurons[layer_i-1].length
}

function matrixLength(mat) {
    return mat.flat().length;
}

function matrixGet(mat, i) {
    return mat.flat()[i-1];
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
        let value = sigmoid(layerNeuronsValue[i]);
        correspondingNeuron.data(neuronRaphaelJSValueName, value);
    }
};

Classify.conclude = function() {
    let lastLayerValue = getNeuronsValues(2);
    let [verticalValue, horizontalValue] = lastLayerValue;
    return verticalValue > horizontalValue ? "vertical": "horizontal";
};

Classify.setNeuronValue = function(neuronInd, layerInd, value) {
    try {
        nnNeurons[layerInd][neuronInd].data(neuronRaphaelJSValueName, value);
    } catch (e) {
        nnNeurons[layerInd][neuronInd] = value;
    }
};

let Animation = {};
Animation.resetNeurons = function () {
     // Reset all neurons colors and values
    for (let i = 0; i < nnNeurons.length; i++) {
        for (let j = 0; j < nnNeurons[i].length; j++) {
            nnNeurons[i][j].data(neuronRaphaelJSValueName, undefined);
        }
        Animation.layerColorNeuron(i);
    }
};

Animation.reset = function () {
    Animation.resetNeurons();
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

var initInterpreterApi = function(interpreter, scope) {
    let fnNames = [
        "getGrid", "customPrint",
        "handleInputLayer", "handleLayer", "conclude",
        "setNeuronValue", "getPixelValue", "getNeuronLayers",
        'createMatrix', "setMatrix", "createMatrixDyn", "getMatWidth", "getMatHeight",
        "getWeightLayers", "matrixProd", "sigmoid", "matrixLength", 'matrixGet', "setValueLayer", "getMatrix",
        "getNeuronOutputLayer",
        "getLayersNumber", 'getNeuronNumberOfLayer'
    ];
    for (let fnNameI in fnNames) {
        let fnName = fnNames[fnNameI];
        let correspondingFunction = this[fnName]; // find the read function into the code

        interpreter.setProperty(scope, fnName,
            interpreter.createNativeFunction(function() {
                return correspondingFunction.apply(null, arguments); // Call the function with same arguments
            })
        );
    }

    Animation.reset();
};


let Utilities = {};
Utilities.downloadSvg = function () {
    Utilities.download(Utilities.getSvgOfCanva(), "blocklyProjectImg.svg", ".svg");
};

Utilities.getSvgOfCanva = function () { // Source : https://gist.github.com/thomasdenney/aa76acb36d47120ee338b3bd96459556
    /*
    I've only tested this with http://codethemicrobit.com in Chrome, but it should work in other browsers
    Paste the JS below into the Chrome Developer Tools Console and hit enter
    It will then open the generated PNG file in a new tab, from where it can be copied/saved
    Based on https://gist.github.com/acbart/dcda677555e97b59c1c91554270dc80b, with adaptations for styling
    and output format
    */

    //Any modifications are executed on a deep copy of the element
    var cp = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);
    cp.removeAttribute("width");
    cp.removeAttribute("height");
    cp.removeAttribute("transform");

    //It is important to create this element in the SVG namespace rather than the XHTML namespace
    var styleElem = document.createElementNS("http://www.w3.org/2000/svg", "style");
    //I've manually pasted codethemicrobit.com's CSS for blocks in here, but that can be removed as necessary
    styleElem.textContent = Blockly.Css.CONTENT.join('') + ".blocklyPathLight { fill: none;stroke-linecap: round;stroke-width: 1;}.blocklyText { cursor:default;fill: #fff;font-family: sans-serif;font-size: 11pt;}.blocklyNonEditableText>text {pointer-events: none;}.blocklyNonEditableText>rect,.blocklyEditableText>rect {fill: #fff;fill-opacity: .6;}.blocklyNonEditableText>text,.blocklyEditableText>text {fill: #000;}.blocklyIconGroup,.blocklyIconGroupReadonly {opacity: .6;}.blocklyIconShape {fill: #00f;stroke: #fff;stroke-width: 1px;}.blocklyIconSymbol {fill: #fff;}";//".blocklyToolboxDiv {background: rgba(0, 0, 0, 0.05);}.blocklyMainBackground {stroke:none !important;}.blocklyTreeLabel, .blocklyText, .blocklyHtmlInput {font-family:'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace !important;}.blocklyText { font-size:1rem !important;}.rtl .blocklyText {text-align:right;} .blocklyTreeLabel { font-size:1.25rem !important;} .blocklyCheckbox {fill: #ff3030 !important;text-shadow: 0px 0px 6px #f00;font-size: 17pt !important;}";
    cp.insertBefore(styleElem, cp.firstChild);

    //Creates a complete SVG document with the correct bounds (it is necessary to get the viewbox right, in the case of negative offsets)
    var xml = new XMLSerializer().serializeToString(cp);
    var bbox = Blockly.mainWorkspace.svgBlockCanvas_.getBBox();
    xml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + bbox.width + '" height="' + bbox.height + '" viewBox="' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height + '"><rect width="100%" height="100%" fill="white"></rect>' + xml + '</svg>';
    //If you just want the SVG then do console.log(xml)
    //Otherwise we render as an image and export to PNG
    return xml;
};

Utilities.download =  function (data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
};

Utilities.exportProject = function() {
    let xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    return Blockly.Xml.domToText(xml);
};

Utilities.importProject = function(xml_text) {
    let xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
};

Utilities.downloadProject = function() {
    Utilities.download(Utilities.exportProject(), "blocklyProject.xml", ".xml")
};

Utilities.loadProject = function() {
    let input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        // getting a hold of the file reference
        let file = e.target.files[0];

        // setting up the reader
        let reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        // here we tell the reader what to do when it's done reading...
        reader.onload = readerEvent => {
            let content = readerEvent.target.result; // this is the content!
            Utilities.importProject(content);
        }

    };

    input.click();
};

Utilities.JavaScriptCode = function () {
    Blockly.JavaScript.STATEMENT_PREFIX = "";
    return Blockly.JavaScript.workspaceToCode();
};
