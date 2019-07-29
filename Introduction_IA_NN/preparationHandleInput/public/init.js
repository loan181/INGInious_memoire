$("#blocklySvgZone").hide();
addAnimationSpeedWidget();
let nnRapheal = createNeuralNetwork(nnNeurons);

Animation.reset = function () {
    Animation.resetNeurons();
};

Animation.reset();