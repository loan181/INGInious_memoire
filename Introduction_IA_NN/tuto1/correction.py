#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
import shareFunctions
from contextlib import redirect_stdout

globalNN = shareFunctions.NeuralNetwork()

def handleInputLayer(image):
    global globalNN
    globalNN.handleInputLayer(image)

def handleLayer(layerInd):
    global globalNN
    globalNN.handleLayer(layerInd)

def conclude():
    global globalNN
    return globalNN.conclude()

# Added so it does not crash
def getGrid():
    pass

def classifier(image):
    raise NameError('La fonction "classifier" n\'a pas était définie par l\'utilisateur')

@@tuto1@@

if __name__ == '__main__':
    try:
        classifier(None)
    except NameError as n:
        print(n)
        exit()
    except TypeError:
        pass # Call if the user classifier function have been defined


    testHorGrids = [
        [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        , [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 1]
        ]
    ]
    testVerGrids = [
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ]
        , [
            [0, 0, 1],
            [0, 1, 0],
            [0, 1, 0]
        ]
    ]
    for horGrid in testHorGrids:
        predicted = classifier(horGrid)
        if predicted != "horizontal":
            print("Une ligne horizontale a été incorrectement prédite en", predicted)
            exit()
    for verGrid in testVerGrids:
        predicted = classifier(verGrid)
        if predicted != "vertical":
            print("Une ligne verticale a été incorrectement prédite en", predicted)
            exit()

    print("True")
