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
        studentsMats = [
            @@prodMat0@@,
            @@prodMat1@@,
            @@prodMat2@@,
            @@prodMat3@@,
            @@prodMat4@@,
        ]
    except Exception as e:
        print(e)
        exit()

    expectedMats = [
        [[3, 4],
         [8, 11]],

        [[2, -1],
         [4, -3]],

        [[2, 1],
         [6, 1]],

        [[6]],

        [[5, -2, -1],
         [11, -4, -3],
         [5, -2, -1],
         [11, -4, -3]],
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
