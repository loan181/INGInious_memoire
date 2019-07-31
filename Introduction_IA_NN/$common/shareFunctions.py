from random import random
from math import exp


class NeuralNetwork:
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

    def __init__(self, sizes=(9, 3, 2)):
        self.nnValues = []
        for neuronNumber in sizes:
            self.nnValues.append([None] * neuronNumber)

    def reset(self):
        for i in range(len(self.nnValues)):
            for j in range(len(self.nnValues[i])):
                self.nnValues[i][j] = None

    def handleInputLayer(self, img):
        inc = 0
        for rows in img:
            for value in rows:
                self.setNeuronValue(0, inc, value)
                inc += 1

    def handleLayer(self, layerInd):
        layerInd = layerInd - 1  # Be coherent with 1 based index
        previousLayerInd = layerInd - 1
        currentLayersMat = self.layersMat[previousLayerInd]
        previousLayerNeuronValues = self.nnValues[previousLayerInd]
        layerNeuronsValue = self.matmult([previousLayerNeuronValues], currentLayersMat)[0]
        for i in range(len(layerNeuronsValue)):
            self.setNeuronValue(layerInd, i, self.sigmoide(layerNeuronsValue[i]))

    def setNeuronValue(self, layerInd, neuronInd, value):
        try:
            self.nnValues[layerInd][neuronInd] = value
        except IndexError as e:
            raise IndexError("Le neurone {} de la couche {} n'existe pas".format(neuronInd+1, layerInd+1))

    def getNeuronValue(self, layerInd, neuronInd):
        return self.nnValues[layerInd][neuronInd]

    def conclude(self):
        verticalValue, horizontalValue = self.nnValues[2]
        if verticalValue > horizontalValue:
            return "vertical"
        else:
            return "horizontal"

    def matmult(self, a, b):
        zip_b = list(zip(*b))
        return [[sum(ele_a * ele_b for ele_a, ele_b in zip(row_a, col_b))
                 for col_b in zip_b] for row_a in a]

    def sigmoide(self, x):
        return 1 / (1 + exp(-x))


globalNN = NeuralNetwork()


def setNeuronValue(neuronN, layerN, value):
    global globalNN
    globalNN.setNeuronValue(layerN-1, neuronN-1, value)


def handleInputLayer(image):
    global globalNN
    globalNN.handleInputLayer(image)


def handleLayer(layerInd):
    global globalNN
    globalNN.handleLayer(layerInd)


def conclude():
    global globalNN
    return globalNN.conclude()

def getPixelValue(pixelI, img):
    flat_list = []
    for sublist in img:
        for item in sublist:
            flat_list.append(item)
    return flat_list[pixelI-1]

def choose01():
    return round(random())

# Added so it does not crash
def getGrid():
    return [[0]*3]*3 # dummy grid

