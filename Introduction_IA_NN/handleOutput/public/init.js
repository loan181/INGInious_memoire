$("#blocklySvgZone").hide();
addAnimationSpeedWidget();
let gridRaphael = create3x3InteractiveGrid(grid);
let nnRapheal = createNeuralNetwork(nnNeurons);
createConclusionsBarNeuralNetwork();
createConclusion();

Animation.reset = function() {
    Classify.handleInputLayer(grid);
    Animation.layerColorNeuron(0);
    for (let i = 1; i < 3; i++) {
        Classify.handleLayer(i);
        Animation.layerColorNeuron(i);
    }
    Animation.conclusionBar();
};
Animation.resetNeurons();
