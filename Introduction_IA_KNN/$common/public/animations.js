Animation = {};
Animation.incrementCounter = function (x) {
    // TODO : refactor, par exemple quand on ajoute une fleur dans visual.js ça ajoute sa position pour qu'on puisse déterminer dynamiquement ici
    x = x.data;
    if (x === 1) {
        Animation.animIncreaseCounter("blue_circle")
    }
    // TODO : faire pour les autres fleurs !
};

Animation.animIncreaseCounter = function(spanIdEnd) {
    let spanId = "counter_" + spanIdEnd;
    let spanElem = document.getElementById(spanId);
    let existingValue = parseInt(spanElem.innerText);
    spanElem.innerText = existingValue + 1;
};

Animation.reset = function() {
    let imgSrc = ["blue_circle", "red_triangle", "green_square"];
    for (let i = 0; i < imgSrc.length; i++) {
        let spanId = "counter_" + imgSrc[i];
        let spanElem = document.getElementById(spanId);
        spanElem.innerText = 0;
        // TODO : refactor avec la ligne du haut
    }
};

var initInterpreterApi = function(interpreter, scope) {
    var wrapper;
    wrapper = function(x) {
        Animation.incrementCounter(x);
    };
    interpreter.setProperty(scope, 'incrementCounter',
        interpreter.createNativeFunction(wrapper)
    );

    Animation.reset();
};

