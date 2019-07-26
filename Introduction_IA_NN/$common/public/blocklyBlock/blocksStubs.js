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

Blockly.JavaScript['nn_input_neuron_value'] = function(block) {
  var value_neuron_i = Blockly.JavaScript.valueToCode(block, 'neuron_i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_neuron_value = Blockly.JavaScript.valueToCode(block, 'neuron_value', Blockly.JavaScript.ORDER_ATOMIC);
  return `setNeuronValue(${value_neuron_i}, 0, ${value_neuron_value});\n`; // 0 is for the first layer (input layer)
};

Blockly.JavaScript['nn_picture_get_pixel'] = function(block) {
  var value_pixel_i = Blockly.JavaScript.valueToCode(block, 'pixel_i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_picture = Blockly.JavaScript.valueToCode(block, 'picture', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getPixelValue(${value_pixel_i}, ${value_picture})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_flatten_picture'] = function(block) {
  var value_picture = Blockly.JavaScript.valueToCode(block, 'picture', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `flatten(${value_picture})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_random_01'] = function(block) {
  var code = 'Math.round(Math.random())';
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

Blockly.Python['nn_input_neuron_value'] = function(block) {
  var value_neuron_i = Blockly.Python.valueToCode(block, 'neuron_i', Blockly.Python.ORDER_ATOMIC);
  var value_neuron_value = Blockly.Python.valueToCode(block, 'neuron_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['nn_picture_get_pixel'] = function(block) {
  var value_pixel_i = Blockly.Python.valueToCode(block, 'pixel_i', Blockly.Python.ORDER_ATOMIC);
  var value_picture = Blockly.Python.valueToCode(block, 'picture', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_flatten_picture'] = function(block) {
  var value_picture = Blockly.Python.valueToCode(block, 'picture', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_random_01'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};