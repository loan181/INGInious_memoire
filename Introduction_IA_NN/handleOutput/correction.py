#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *

def tirer_une_conclusion_de_la_couche_de_sortie():
    raise NameError('La fonction "tirer une conclusion de la couche de sortie" n\'a pas était définie par l\'utilisateur')

@@blocklyRes@@

if __name__ == '__main__':
    # Check for errors into student code
    try:
        tirer_une_conclusion_de_la_couche_de_sortie()
    except NameError as e:
        print(e)
        exit()
    except TypeError:
        pass # Call if the user tirer_une_conclusion_de_la_couche_de_sortie function have been defined

    testingSituations = [
        (1.0, 0.0),
        (0.9, 0.1),
        (0.6, 0.4),
        (0.4, 0.6),
        (0.0, 1.0),
        (0.49, 0.51),
        (0.51, 0.49),
    ]

    for valV, valH in testingSituations:
        globalNN.setNeuronValue(len(globalNN) - 1, 0, valV)
        globalNN.setNeuronValue(len(globalNN) - 1, 1, valH)
        actualResult = globalNN.conclude()

        studentResult = tirer_une_conclusion_de_la_couche_de_sortie()

        if studentResult != actualResult:
            print("Une ligne {} à été incorrectement prédite comme {} pour les valeurs suivantes {}".format(actualResult, studentResult, (valV, valH)))
            exit()

    print("True")
