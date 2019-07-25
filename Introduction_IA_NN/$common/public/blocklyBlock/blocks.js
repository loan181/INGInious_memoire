Blockly.Blocks['custom_print'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("afficher");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

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

Blockly.Blocks['nnimgcustom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("image déssinée")
        .appendField(new Blockly.FieldImage("$common/img/pencilGrid.jpg", 32, 32, "*"));
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// STUB JS
Blockly.JavaScript['custom_print'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  return `alert(${value_value});\n`;
};

Blockly.JavaScript['nn_handle_input'] = function(block) {
  var value_picture = Blockly.JavaScript.valueToCode(block, 'picture', Blockly.JavaScript.ORDER_ATOMIC);
  return `handleInputLayer(${value_picture});\n`;
};

Blockly.JavaScript['nn_handle_layer'] = function(block) {
  var value_layer_i = Blockly.JavaScript.valueToCode(block, 'layer_i', Blockly.JavaScript.ORDER_ATOMIC);
  return `handleLayer(${value_layer_i});\n`;
};

Blockly.JavaScript['nn_conclusion'] = function(block) {
  var code = 'conclude()';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['nnimgcustom'] = function(block) {
  var code = 'getGrid()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// STUB Python
Blockly.Python['custom_print'] = function(block) {
  return "";
};

Blockly.Python['nn_handle_input'] = function(block) {
  var value_picture = Blockly.Python.valueToCode(block, 'picture', Blockly.Python.ORDER_ATOMIC);
  return `handleInputLayer(${value_picture})\n`;
};

Blockly.Python['nn_handle_layer'] = function(block) {
  var value_layer_i = Blockly.Python.valueToCode(block, 'layer_i', Blockly.Python.ORDER_ATOMIC);
    return `handleLayer(${value_layer_i})\n`;
};

Blockly.Python['nn_conclusion'] = function(block) {
  var code = 'conclude()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nnimgcustom'] = function(block) {
  var code = 'getGrid()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};