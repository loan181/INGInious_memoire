//License
'use strict';

{
	let flowerEndNames = ['setosa', 'versicolor', 'virginica'];
	let saturation = [210, 0, 80];
	let icon = ["blue_circle", "red_triangle", "green_square"];

	for (let i = 0; i < flowerEndNames.length; i++) {
		let flowerEndName = flowerEndNames[i]
			Blockly.Blocks[`flower_iris_${flowerEndName}`] = {
		  init: function() {
		    this.appendDummyInput()
		    	.appendField(new Blockly.FieldImage(`$common/img/${icon[i]}.svg`, 15, 15, "*"))
		        .appendField("Iris-"+flowerEndName);
		    this.setOutput(true, "Flower");
		    this.setColour(saturation[i]);
			this.setTooltip("");
			this.setHelpUrl("");
		  }
		};

		Blockly.Python[`flower_iris_${flowerEndName}`] = function(block) {
		  let code = `"Iris-${flowerEndName}"`;
		  return [code, Blockly.Python.ORDER_ATOMIC];
		};
	}
}