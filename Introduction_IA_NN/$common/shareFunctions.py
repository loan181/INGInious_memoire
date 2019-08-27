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
    bias = None

    def __init__(self, sizes=(9, 3, 2)):
        self.size = sizes
        self.reset()

    def reset(self):
        self.nnValues = []
        for neuronNumber in self.size:
            self.nnValues.append([None] * neuronNumber)

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
        layerNeuronsValue = matmult([previousLayerNeuronValues], currentLayersMat)[0]
        for i in range(len(layerNeuronsValue)):
            biasValue = 0
            if self.bias is not None:
                biasValue = self.bias[previousLayerInd][i]
            self.setNeuronValue(layerInd, i, sigmoid(biasValue+layerNeuronsValue[i]))

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



    def __len__(self):
        return len(self.nnValues)

def matmult(a, b):
    zip_b = list(zip(*b))
    return [[sum(ele_a * ele_b for ele_a, ele_b in zip(row_a, col_b))
             for col_b in zip_b] for row_a in a]

globalNN = NeuralNetwork()


def setNeuronValue(neuronN, layerN, value):
    global globalNN
    globalNN.setNeuronValue(layerN - 1, neuronN - 1, value)

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


def sigmoid(x):
    return 1 / (1 + exp(-x))

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
    try:
        mat[row-1][column-1] = value
    except IndexError:
        raise IndexError("L'élement à la colonne {} rangée {} est inaccesible dans une matrice de taille {} x {}".format(
            column, row, len(mat[0]), len(mat)
        ))


def getMatrix(mat, row, col):
    try:
        return mat[row - 1][col - 1]
    except IndexError:
        raise IndexError("L'élement à la colonne {} rangée {} est inaccesible dans une matrice de taille {} x {}".format(
            col, row, len(mat[0]), len(mat)
        ))


def getMatWidth(mat):
    return len(mat[0])


def getMatHeight(mat):
    return len(mat)

def getLayersNumber():
    global globalNN
    return len(globalNN.nnValues)

def getNeuronLayers(layerI):
    global globalNN
    return [globalNN.nnValues[layerI-1]]

def getWeightLayers(layerI):
    global globalNN
    return globalNN.layersMat[layerI-1]

def matrixProd(matNeuron, matWeight):
    return matmult(matNeuron, matWeight)


# Added so it does not crash
def getGrid():
    return [[0]*3]*3 # dummy grid

# Utilities for Inginious display
def inginiousMatrixDisp(mat):
    s = r"\\begin{pmatrix}"
    firstLine = True
    for line in mat:
        if not firstLine:
            s += r" \\\\\ "
        firstLine = False
        first = True
        for val in line:
            if not first:
                s+= " & "
            s += str(val)
            first = False

    s += r"\\end{pmatrix}"
    return s

