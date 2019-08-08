addAnimationSpeedWidget();
addRunButton();

// Override the neurons values
let networkSize = [784, 200, 10];
nnNeurons = [];
for (let i = 0; i < networkSize.length; i++) {
    nnNeurons.push([]);
    for (let j = 0; j < networkSize[i]; j++) {
        nnNeurons[i].push(0)
    }
}

// Override the weights matrix
function transpose(a) {
    return a[0].map((col, i) => a.map(row => row[i]));
}
layersMat = [transpose(w12), transpose(w23)];
bias = [bias2, bias3]

// Override the grid so it used the one drawn
function getGrid() {
    return getCanvaPictureToArray()
}

Animation.reset = function () {};
Animation.colorNeuron = function() {};