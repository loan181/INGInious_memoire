#!/bin/python3

import os
import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *

def studentCode():
@   @blocklyRes@@

if __name__ == '__main__':
    try:
        studentCode()
    except Exception as e:
        print(e)
        exit()

    # Check if it replies to the assignment
    layerI_neuronI_expectedValue = [
            ((1, 2), 0),
            ((2, 0), 1),
    ]
    for i in range(9):
        layerI_neuronI_expectedValue.append(
            ((0, i), 1)
        )

    for (layerI, neuronI), expectedValue in layerI_neuronI_expectedValue:
        value = globalNN.getNeuronValue(layerI, neuronI)
        if value != expectedValue:
            print("La valeur du neurone n°{} de la couche {} n'est pas {}, mais {}".format(neuronI+1, layerI+1, expectedValue, value))
            exit()

    print("True")
