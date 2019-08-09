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
        try:
            return self.nnValues[layerInd][neuronInd]
        except IndexError as e:
            raise IndexError("Le neurone {} de la couche {} n'existe pas".format(neuronInd+1, layerInd+1))

    def conclude(self):
        verticalValue, horizontalValue = self.nnValues[len(self)-1]
        if verticalValue > horizontalValue:
            return "vertical"
        else:
            return "horizontal"

    def concludeIndex(self):
        lastLayer = self.nnValues[len(self)-1]
        indMax = 0
        for i in range(1, len(lastLayer)):
            if lastLayer[i] > lastLayer[indMax]:
                indMax = i
        return indMax

    def matmult(self, a, b):
        zip_b = list(zip(*b))
        return [[sum(ele_a * ele_b for ele_a, ele_b in zip(row_a, col_b))
                 for col_b in zip_b] for row_a in a]

    def sigmoide(self, x):
        return 1 / (1 + exp(-x))

    def __len__(self):
        return len(self.nnValues)


globalNN = NeuralNetwork()


def setNeuronValue(neuronN, layerN, value):
    global globalNN
    globalNN.setNeuronValue(layerN-1, neuronN-1, value)

def getNeuronValue(neuronN, layerN):
    global globalNN
    return globalNN.getNeuronValue(layerN-1, neuronN-1)

def getNeuronValueLastLayer(neuronN):
    global globalNN
    return getNeuronValue(neuronN, len(globalNN))

def handleInputLayer(image):
    global globalNN
    globalNN.handleInputLayer(image)


def handleLayer(layerInd):
    global globalNN
    globalNN.handleLayer(layerInd)


def conclude():
    global globalNN
    return globalNN.conclude()

def getLayerNeuronNumber(layerN):
    global globalNN
    return len(globalNN.nnValues[layerN-1])

def getPixelValue(pixelI, img):
    flat_list = []
    for sublist in img:
        for item in sublist:
            flat_list.append(item)
    return flat_list[pixelI-1]

def choose01():
    return round(random())

# Matrix related
def createMatrix(initSize, *allValues):
    numberOfCols = initSize
    numberOfRows = initSize

    allValuesToMat = []
    for i in range(initSize):
        subL = []
        for j in range(initSize):
            subL.append(allValues[i*initSize + j])
        allValuesToMat.append(subL)

    allValuesToMatTransp = [[allValuesToMat[j][i] for j in range(len(allValuesToMat))] for i in range(len(allValuesToMat[0]))]

    for i in range(initSize-1, 0, -1):
        if allValuesToMat[i] == [0]*len(allValuesToMat[i]):
            numberOfRows -= 1
        else:
            break

    for i in range(initSize-1, 0, -1):
        if allValuesToMatTransp[i] == [0]*len(allValuesToMatTransp[i]):
            numberOfCols -= 1
        else:
            break

    res = []
    for i in range(numberOfRows):
        subL = []
        for j in range(numberOfCols):
            subL.append(allValues[i * initSize + j])
        res.append(subL)
    return res

def createMatrixDyn(linesN, colsN, val):
    return [[val for _ in range(linesN)] for _ in range(colsN)]

def setMatrix(mat, row, column, value):
    mat[row-1][column-1] = value


def getMatrix(mat, row, col):
    return mat[row-1][col-1]


def getMatWidth(mat):
    return len(mat[0])


def getMatHeight(mat):
    return len(mat)



# Added so it does not crash
def getGrid():
    return [[0]*3]*3 # dummy grid

