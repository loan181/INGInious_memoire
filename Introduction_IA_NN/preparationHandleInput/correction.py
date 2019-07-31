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
    studentCode()

    print("True")
