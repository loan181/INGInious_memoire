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
    except (TypeError, IndexError):
        pass # Call if the user tirer_une_conclusion_de_la_couche_de_sortie function have been defined

    globalNN.nnValues =  [[] for _ in range(5)] # We force it to have five layers
    testingSituations = [
        (0.0, 0.1, 0.1, 0.05, 0.2, 0.1, 0.3, 0.1, 0.15),
        (0.1, 0.0, 0.1, 0.15, 0.2, 0.1, 0.3, 0.1, 0.05),
        (0.0, 0.9, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0),
        (0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.9),

        (1.0, 0.0),
        (0.9, 0.1),
        (0.6, 0.4),
        (0.4, 0.6),
        (0.0, 1.0),
        (0.49, 0.51),
        (0.51, 0.49),

        [0.0 for _ in range(20)] + [1.0],
    ]

    for values in testingSituations:
        globalNN.nnValues[len(globalNN) - 1] = []
        for value in values:
            globalNN.nnValues[len(globalNN) - 1].append(value)
        actualResult = globalNN.concludeIndex()

        try:
            studentResult = tirer_une_conclusion_de_la_couche_de_sortie() - 1
        except IndexError as e:
            print(e)
            exit()

        if studentResult != actualResult:
            print("Pour les valeurs {} le maximum se trouve en {}. Cepandant, ton programme donne {}".format(values, actualResult+1, studentResult + 1 ))
            exit()

    print("True")
