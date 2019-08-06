
addAnimationSpeedWidget();
let lastLayersValue = [0.0, 0.1, 0.1, 0.05, 0.2, 0.1, 0.3, 0.1, 0.15];
nnNeurons = [[], [], [], [], []
];
for (let i = 0; i < lastLayersValue.length; i++) {
    let obj = $(new Object());
    obj.data(neuronRaphaelJSValueName, lastLayersValue[i]); // Oblige to use .data() as it is the way values are read
    nnNeurons[nnNeurons.length-1].push(obj)
}
Animation.reset = function () {};