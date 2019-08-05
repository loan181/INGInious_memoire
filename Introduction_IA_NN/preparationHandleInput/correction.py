#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *


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
        (1, 0),
        (3, 1),
        (6, 1),
    )
    for neuronInd, expected in actual_expected:
        actualValue = globalNN.getNeuronValue(0, neuronInd)

        if actualValue != expected:
            if actualValue is None:
                actualValue = "non définie"
            print("La valeur du neurone n°{} est {} au lieu de {}".format(neuronInd+1, actualValue, expected))
            exit()

    print("True")
