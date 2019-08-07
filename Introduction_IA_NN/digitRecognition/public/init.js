addAnimationSpeedWidget();
addRunButton();

// Override the neurons values
let networkSize = [784, 200, 10];
nnNeurons = [];
for (let i = 0; i < networkSize.length; i++) {
    nnNeurons.push([]);
    for (let j = 0; j < networkSize[i]; j++) {
        let obj = $(new Object());
        obj.data(neuronRaphaelJSValueName, 0); // Oblige to use .data() as it is the way values are read
        nnNeurons[i].push(obj)
    }
}

// Override the weights matrix
layersMat = [w12, w23];

// Override the grid so it used the one drawn
function getGrid() {
    return getCanvaPictureToArray()
}

Animation.reset = function () {};