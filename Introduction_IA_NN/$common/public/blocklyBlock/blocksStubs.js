// STUB JS
Blockly.JavaScript['custom_print'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  return `customPrint(${value_value});\n`;
};

Blockly.JavaScript['main'] = function(block) {
  return "";
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

Blockly.JavaScript['nn_random_01'] = function(block) {
  var code = 'Math.round(Math.random())';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['grid_special'] = function(block) {
  let specialGrid = [
      ["","",""],
      ["blue","red",""],
      ["","black",""]
  ];
  var code = JSON.stringify(specialGrid);
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['nn_get_neuron_layer'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getNeuronLayers(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_get_weight_layer'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getWeightLayers(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_matrix_prod'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `matrixProd(${value_x}, ${value_y})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_neuron_set_value_layer'] = function(block) {
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var value_neuron_i = Blockly.JavaScript.valueToCode(block, 'neuron_i', Blockly.JavaScript.ORDER_ATOMIC);
  var value_layer_i = Blockly.JavaScript.valueToCode(block, 'layer_i', Blockly.JavaScript.ORDER_ATOMIC);
  return `setValueLayer(${value_layer_i}, ${value_neuron_i}, ${value_value});\n`;
};

Blockly.JavaScript['nn_sigmoid'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `sigmoid(${value_x})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_mat_len'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `matrixLength(${value_mat})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_mat_get'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_elem_i = Blockly.JavaScript.valueToCode(block, 'elem_i', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `matrixGet(${value_mat}, ${value_elem_i})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_neuron_last_layer'] = function(block) {
  var value_neuron_i = Blockly.JavaScript.valueToCode(block, 'neuron_i', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getNeuronOutputLayer(${value_neuron_i})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_res_hor'] = function(block) {
  var code = '"horizontal"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_res_ver'] = function(block) {
  var code = '"vertical"';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_create_matrix'] = function(block) {
  let allValues = "";
  for (let i = 1; i < 26; i++) {
    allValues += ", " + block.getFieldValue('NAME'+i);
  }
  var code = `createMatrix(5${allValues})`; // 5 indicates the number or rows and cols used
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_get_matrix'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getMatrix(${value_mat}, ${value_row}, ${value_column})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_set_matrix'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  return `setMatrix(${value_mat}, ${value_row}, ${value_column}, ${value_value});\n`;
};

Blockly.JavaScript['nn_get_width'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getMatWidth(${value_mat})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_get_height'] = function(block) {
  var value_mat = Blockly.JavaScript.valueToCode(block, 'mat', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getMatHeight(${value_mat})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_matrix_create2'] = function(block) {
  var value_lines_number = Blockly.JavaScript.valueToCode(block, 'lines_number', Blockly.JavaScript.ORDER_ATOMIC);
  var value_column_number = Blockly.JavaScript.valueToCode(block, 'column_number', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `createMatrixDyn(${value_lines_number}, ${value_column_number}, ${value_value})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_layer_number'] = function(block) {
  var code = 'getLayersNumber()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['nn_layer_neuron_number'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `getNeuronNumberOfLayer(${value_name})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

///// STUB Python /////


Blockly.Python['custom_print'] = function(block) {
  return "";
};

Blockly.Python['main'] = function(block) {
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
  return `setNeuronValue(${value_neuron_i}, 1, ${value_neuron_value})\n`;
};

Blockly.Python['nn_picture_get_pixel'] = function(block) {
  var value_pixel_i = Blockly.Python.valueToCode(block, 'pixel_i', Blockly.Python.ORDER_ATOMIC);
  var value_picture = Blockly.Python.valueToCode(block, 'picture', Blockly.Python.ORDER_ATOMIC);
  var code = `getPixelValue(${value_pixel_i}, ${value_picture})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_random_01'] = function(block) {
  var code = 'choose01()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['grid_special'] = function(block) {
  var code = "...";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nn_get_neuron_layer'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `getNeuronLayers(${value_name})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_get_weight_layer'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `getWeightLayers(${value_name})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_matrix_prod'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var code = `matrixProd(${value_x}, ${value_y})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_neuron_set_value_layer'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_neuron_i = Blockly.Python.valueToCode(block, 'neuron_i', Blockly.Python.ORDER_ATOMIC);
  var value_layer_i = Blockly.Python.valueToCode(block, 'layer_i', Blockly.Python.ORDER_ATOMIC);
  return `setNeuronValue(${value_neuron_i}, ${value_layer_i}, ${value_value})\n`;
};

Blockly.Python['nn_sigmoid'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var code = `sigmoid(${value_x})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_mat_len'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_mat_get'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  var value_elem_i = Blockly.Python.valueToCode(block, 'elem_i', Blockly.Python.ORDER_ATOMIC);
  var code = `matrixGet(${value_mat}, ${value_elem_i})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['get_neuron_last_layer'] = function(block) {
  var value_neuron_i = Blockly.Python.valueToCode(block, 'neuron_i', Blockly.Python.ORDER_ATOMIC);
  var code = `getNeuronValueLastLayer(${value_neuron_i})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_res_hor'] = function(block) {
  var code = '"horizontal"';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_res_ver'] = function(block) {
  var code = '"vertical"';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_create_matrix'] = function(block) {
  let allValues = "";
  for (let i = 1; i < 26; i++) {
    allValues += ", " + block.getFieldValue('NAME'+i);
  }
  var code = `createMatrix(5${allValues})`; // 5 indicates the number or rows and cols used
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_get_matrix'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var value_column = Blockly.Python.valueToCode(block, 'column', Blockly.Python.ORDER_ATOMIC);
  var code = `getMatrix(${value_mat}, ${value_row}, ${value_column})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_set_matrix'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var value_column = Blockly.Python.valueToCode(block, 'column', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  return `setMatrix(${value_mat}, ${value_row}, ${value_column}, ${value_value})\n`;
};

Blockly.Python['nn_get_width'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  var code = `getMatWidth(${value_mat})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_get_height'] = function(block) {
  var value_mat = Blockly.Python.valueToCode(block, 'mat', Blockly.Python.ORDER_ATOMIC);
  var code = `getMatHeight(${value_mat})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_matrix_create2'] = function(block) {
  var value_lines_number = Blockly.Python.valueToCode(block, 'lines_number', Blockly.Python.ORDER_ATOMIC);
  var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = `createMatrixDyn(${value_lines_number}, ${value_column_number}, ${value_value})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_layer_number'] = function(block) {
  var code = 'getLayersNumber()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['nn_layer_neuron_number'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `getLayerNeuronNumber(${value_name})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};