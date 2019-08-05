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

Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("quand l'exécution commence");
    this.setNextStatement(true, null);
    this.setColour(105);
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
    this.setColour(285);
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
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_conclusion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tirer une conclusion de la couche de sortie");
    this.setOutput(true, null);
    this.setColour(285);
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

Blockly.Blocks['grid_special'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("grille spéciale")
        .appendField(new Blockly.FieldImage("/course/Introduction_IA_NN/preparationHandleInput2/grid.svg", 15, 15, "*"));
    this.setOutput(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_get_neuron_layer'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Obtenir la valeur des neurones de la couche");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_get_weight_layer'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("Obtenir la valeur des poids de la couche");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_matrix_prod'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("calculer le produit matriciel de");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("avec");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_neuron_set_value_layer'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("donner la valeur");
    this.appendValueInput("neuron_i")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("au neurone");
    this.appendValueInput("layer_i")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("de la couche");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_sigmoid'] = {
  init: function() {
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("sigmoide");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_mat_len'] = {
  init: function() {
    this.appendValueInput("mat")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("longueur de");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_mat_get'] = {
  init: function() {
    this.appendValueInput("mat")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("dans la matrice");
    this.appendValueInput("elem_i")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("obtenir l'élément");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_neuron_last_layer'] = {
  init: function() {
    this.appendValueInput("neuron_i")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("obtenir la valeur du neurone n°");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("de la couche de sortie");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_res_hor'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ligne horizontale");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['nn_res_ver'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("ligne verticale");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};