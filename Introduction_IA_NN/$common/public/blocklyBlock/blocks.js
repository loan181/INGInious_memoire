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
        .appendField("tirer une conclusion de la couche de sortie");
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

Blockly.Blocks['nn_input_neuron_value'] = {
  init: function() {
    this.appendValueInput("neuron_i")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("donner au neurone d'entrée n°");
    this.appendValueInput("neuron_value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("la valeur");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_picture_get_pixel'] = {
  init: function() {
    this.appendValueInput("pixel_i")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("obtenir la valeur du pixel n°");
    this.appendValueInput("picture")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("de l'image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_flatten_picture'] = {
  init: function() {
    this.appendValueInput("picture")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("aplatir l'image");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_random_01'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("aléatoirement 0 ou 1");
    this.setOutput(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};