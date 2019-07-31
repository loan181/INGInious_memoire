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
        self.nnValues[layerInd][neuronInd] = value

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
