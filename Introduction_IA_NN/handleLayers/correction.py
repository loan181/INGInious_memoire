#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *

def calculer_la_valeur_des_neurones_de_la_nouche_n_C2_B0():
    raise NameError('La fonction "calculer la valeur des neurones de la nouche n°" n\'a pas était définie par l\'utilisateur')

try:
@   @blocklyRes@@
except:
    pass

if __name__ == '__main__':
    # Check for errors into student code
    try:
        calculer_la_valeur_des_neurones_de_la_nouche_n_C2_B0(None)
    except NameError as e:
        print(e)
        exit()
    except:
        pass

    # Testing now
    vPicture = {"name": "verticale", "grid" :
        [[0, 1, 0],
         [0, 1, 0],
         [0, 1, 0]]
    }
    hPicture = {"name": "verticale", "grid" :
        [[0, 0, 0],
         [1, 1, 1],
         [0, 0, 0]]
    }
    for picture in (vPicture, hPicture):
        nn = NeuralNetwork()
        nn.handleInputLayer(picture["grid"])
        nn.handleLayer(2)
        nn.handleLayer(3)
        expectedNNValues = nn.nnValues


        globalNN.reset()
        globalNN.handleInputLayer(picture["grid"])
        try:
            calculer_la_valeur_des_neurones_de_la_nouche_n_C2_B0(2)
            calculer_la_valeur_des_neurones_de_la_nouche_n_C2_B0(3)
        except:
            print("An error happenned : " + str(e))
            exit()
        studentNNValues = globalNN.nnValues

        if studentNNValues != expectedNNValues:
            for i in range(1, 3):
                if studentNNValues[i] != expectedNNValues[i]:
                    print("Pour l'image d'une ligne {} la couche {} n'est pas correcte. Les valeurs attendues sont {} et les tiennes sont {}".format(picture["name"], i+1, expectedNNValues[i], studentNNValues[i]))
                    exit()

    print("True")
