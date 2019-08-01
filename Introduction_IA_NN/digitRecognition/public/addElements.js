
function createCanva() {
    let canva = document.createElement("canvas");
    canva.id = "can";
    canva.style = 'width:100%;top:10%;left:10%;border:2px solid; cursor:crosshair; touch-action: none;';
    canva.height = canva.width;
    visu.appendChild(canva);
}

$("#blocklySvgZone").hide();
createCanva();