
let visu = document.getElementById('visualization');
let grid = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
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

                    grid[i][j] = this.attr("fill") === "black" ? 1:0;
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

function classify(grid, nnNeurons) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let neuronIndex = i+j*grid.length;
            let correspondingNeuron = nnNeurons[0][neuronIndex];
            let value = grid[i][j];
            if (value === 1) { // black pixel
                correspondingNeuron.attr("fill", "black");
            } else { // white pixel
                correspondingNeuron.attr("fill", "white");
            }
        }
    }
}

$("#blocklySvgZone").hide();
let gridRaphael = create3x3InteractiveGrid(grid);
let nnRapheal = createNeuralNetwork(nnNeurons);