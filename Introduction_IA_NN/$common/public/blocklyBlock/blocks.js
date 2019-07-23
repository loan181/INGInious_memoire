Blockly.Blocks['nn_handle_input'] = {
  init: function() {
    this.appendValueInput("picture")
        .setCheck("Array")
        .appendField("gérer la couche d'entrée à partir de l'image");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_handle_layer'] = {
  init: function() {
    this.appendValueInput("layer_i")
        .setCheck("Number")
        .appendField("calculer la valeur des neurones de la couche n°");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_conclusion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tirer une conclusion de la couche de sortie");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// STUB JS
Blockly.JavaScript['nn_handle_input'] = function(block) {
  var value_picture = Blockly.JavaScript.valueToCode(block, 'picture', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['nn_handle_layer'] = function(block) {
  var value_layer_i = Blockly.JavaScript.valueToCode(block, 'layer_i', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['nn_conclusion'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// STUB Python
Blockly.Python['nn_handle_input'] = function(block) {
  var value_picture = Blockly.Python.valueToCode(block, 'picture', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['nn_handle_layer'] = function(block) {
  var value_layer_i = Blockly.Python.valueToCode(block, 'layer_i', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['nn_conclusion'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};