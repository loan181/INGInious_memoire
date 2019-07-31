#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
import shareFunctions
from contextlib import redirect_stdout

globalNN = shareFunctions.NeuralNetwork()

def setNeuronValue(neuronN, layerN, value):
    global globalNN
    globalNN.setNeuronValue(layerN-1, neuronN-1, value)

def studentCode():
@   @blocklyCode@@

if __name__ == '__main__':
    # Check for errors into student code
    try:
        studentCode()
    except Exception as e:
        print(e)
        exit()

    # Check if it answer to the question
    actual_expected = (
        (globalNN.getNeuronValue(0, 1), 0),
        (globalNN.getNeuronValue(0, 3), 1),
        (globalNN.getNeuronValue(0, 6), 1),
    )
    for actual, expected in actual_expected:
        if actual != expected:
            print("La valeur attendue ({}) n'est pas celle trouvée ({})".format(expected, actual))
            exit()

    print("True")
