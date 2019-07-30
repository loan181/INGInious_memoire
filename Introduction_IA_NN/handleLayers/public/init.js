$("#blocklySvgZone").hide();
addAnimationSpeedWidget();
let gridRaphael = create3x3InteractiveGrid(grid);
let nnRapheal = createNeuralNetwork(nnNeurons);

Animation.reset = function () {
    Animation.resetNeurons();
    Classify.handleInputLayer(grid);
    Animation.layerColorNeuron(0);
};
Animation.resetNeurons();
