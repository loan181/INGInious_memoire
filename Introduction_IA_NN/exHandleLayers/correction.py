#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

if __name__ == '__main__':
    X = "X"
    try:
        studentsMats = [
            @@res@@,
            @@res2@@,
        ]
    except Exception as e:
        print(e)
        exit()

    expectedMats = [
        [[11, -13, 3]],

        [[-158, 158]],
    ]

    for i in range(len(expectedMats)):
        studentMat = studentsMats[i]
        expectedMat = expectedMats[i]
        if studentMat != expectedMat:
            for j in range(len(expectedMat)):
                for k in range(len(expectedMat[j])):
                    if studentMat[j][k] != expectedMat[j][k]:
                        print("La réponse à la question {} est incorrecte, l'élément {} à la colonne {} et rangé {} n'est pas correct".format(i+1, studentMat[j][k], k+1, j+1))
                        exit()


    print("True")
