addAnimationSpeedWidget();
addRunButton();
$("#blocklySvgZone").hide();

function addMatrixVisu() {
    let div = document.createElement("div");
    div.align = "center";

    let text = document.createElement("h6");
    text.innerText = "dernière matrice modifiée";
    div.appendChild(text);

    // Your CSS as text
    let styles = `
    .matrix {
        position: relative;
    }
    
    .matrix:before, .matrix:after {
        content: "";
        position: absolute;
        top: 0;
        border: 1px solid #000;
        width: 4px;
        height: 100%;
    }
    .matrix:before {
        left: -4px;
        border-right: 0px;
    }
    .matrix:after {
        right: -4px;
        border-left: 0px;
    }
    .matrix td {
        padding: 4px;    
        text-align: center;
    }
    `;

    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    let table = document.createElement("table");
    table.className = "matrix";
    table.innerHTML = "?";
    table.id = "tableMatrix";

    div.appendChild(table);
    visu.appendChild(div);
}
addMatrixVisu();

function setMatrixValues(mat) {
    let matrixTable = document.getElementById("tableMatrix");
    var tableBody = document.createElement('tbody');

    mat.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
    matrixTable.innerHTML = ""; // empty the table first
    matrixTable.appendChild(tableBody);
}

Animation.reset = function () {};

// Override some matrix functions in order to add animation
let old = createMatrixDyn;
createMatrixDyn = function(linesN, colsN, val) {
    let oldValue = old.apply(old, arguments);
    setMatrixValues(oldValue);
    return oldValue
};

let old2 = createMatrix;
createMatrix = function(linesN, colsN, val) {
    let oldValue = old2.apply(old2, arguments);
    setMatrixValues(oldValue);
    return oldValue
};

let old3 = setMatrix;
setMatrix = function (mat, row, column, value) {
    old3.apply(old3, arguments);
    setMatrixValues(mat)
};