#!/bin/python3
#Open source licence goes here
from math import exp
from contextlib import redirect_stdout

layersMat = [
    [
        [6, 6, 0],
        [-4, 8, -1],
        [6, 7, 9],
        [8, -4, -3],
        [-5, -5, -1],
        [8, -4, 7],
        [6, 4, 1],
        [-4, 9, -1],
        [7, 7, 8]
    ]
    , [
        [-5, 5],
        [7, -7],
        [-4, 4]
    ]
]

layersNeuronsNumber = [9, 3, 2]
nnValues = []
for neuronNumber in layersNeuronsNumber:
    nnValues.append([None] * neuronNumber)

def handleInputLayer(image):
    global nnValues
    inc = 0
    for rows in image:
        for value in rows:
            nnValues[0][inc] = value
            inc += 1

def matmult(a,b):
    zip_b = list(zip(*b))
    return [[sum(ele_a*ele_b for ele_a, ele_b in zip(row_a, col_b))
             for col_b in zip_b] for row_a in a]

def sigmoide(x):
    return 1 / (1 + exp(-x))

def handleLayer(layerInd):
    layerInd = layerInd-1 # Be coherent with 1 based index
    global nnValues, layersMat
    previousLayerInd = layerInd-1
    currentLayersMat = layersMat[previousLayerInd]
    previousLayerNeuronValues = nnValues[previousLayerInd]
    layerNeuronsValue = matmult([previousLayerNeuronValues], currentLayersMat)[0]
    for i in range(len(layerNeuronsValue)):
        nnValues[layerInd][i] = sigmoide(layerNeuronsValue[i])

def conclude():
    global nnValues
    verticalValue, horizontalValue = nnValues[2]
    if verticalValue > horizontalValue:
        return "vertical"
    else:
        return "horizontal"

# Added so it does not crash
def getGrid():
    pass

@@tuto1@@

if __name__ == '__main__':
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
            print("Une ligne horizontale a été incorrectement prédite comme verticale")
            exit()
    for verGrid in testVerGrids:
        predicted = classifier(verGrid)
        if predicted != "vertical":
            print("Une ligne verticale a été incorrectement prédite comme horizontale")
            exit()

    print("True")
