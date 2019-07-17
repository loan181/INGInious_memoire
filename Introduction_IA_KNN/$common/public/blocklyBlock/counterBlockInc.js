'use strict';

Blockly.Blocks["counter_inc"] = {
    init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Augmenter le compteur de la ");
    this.appendDummyInput()
        .appendField("ème fleur la plus proche de 1");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['counter_inc'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `incrementCounter(${value_name})\n` ;
  return code;
};

Blockly.JavaScript['counter_inc'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `incrementCounter(${value_name})\n` ;
  return code;
};