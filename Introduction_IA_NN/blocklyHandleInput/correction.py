#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *

def g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(image):
    raise NameError('La fonction "gérer la couche d\entrée à partir de l\'image" n\'a pas était définie par l\'utilisateur')

try:
@   @blocklyRes@@
except: # catch any error with
    pass

if __name__ == '__main__':
    try:
        g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(None)
    except NameError as n:
        print(n)
        exit()
    except TypeError:
        pass # Call if the user classifier function have been defined


    testNumber = 4
    randomGrid = [[None for _ in range(3)] for _ in range(3)]
    for i in range(testNumber):
        # Generate new random grid
        for j in range(len(randomGrid)):
            for k in range(len(randomGrid[j])):
                randomGrid[j][k] = choose01()

        g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(randomGrid)

        # Check if the values are well assigned
        for j in range(len(randomGrid)):
            for k in range(len(randomGrid[j])):
                nnValue = globalNN.getNeuronValue(0,j*3+k)
                gridValue = randomGrid[j][k]
                if nnValue != gridValue:
                    print("La valeur dans la grille/image ne correspond pas à celle assignée dans le réseau")
                    exit()
    print("True")
