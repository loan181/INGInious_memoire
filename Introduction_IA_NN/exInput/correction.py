#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

if __name__ == '__main__':
    # Check for errors into student code
    X = "X"
    try:
        g1 = @@corr@@
        g2 = @@corr2@@
    except Exception as e:
        print(e)
        exit()

    expecedG1 = [0,1,1,0,0,1,0,0,1]
    expecedG2 = [0,1,1,1,0,0,0,0,1]

    for i in range(len(expecedG1)):
        if expecedG1[i] != g1[i]:
            print("Le résultat attendu pour la grille {} à l'emplacement {} est {} et non {}".format(1, i+1, expecedG1[i],g1[i]))
            exit()

    for i in range(len(expecedG1)):
        if expecedG2[i] != g2[i]:
            print("Le résultat attendu pour la grille {} à l'emplacement {} est {} et non {}".format(2, i+1, expecedG2[i],g2[i]))
            exit()

    print("True")
