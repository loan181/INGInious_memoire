#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *

def calculer_le_produit_matriciel_de(mat1, mat2):
    raise NameError('La fonction "calculer le produit matriciel de" n\'a pas était définie par l\'utilisateur')

@@blocklyRes@@

# Source : https://stackoverflow.com/a/10508133
def matrixMult(A, B):
    rows_A = len(A)
    cols_A = len(A[0])
    rows_B = len(B)
    cols_B = len(B[0])

    # Create the result matrix
    # Dimensions would be rows_A x cols_B
    C = [[0 for row in range(cols_B)] for col in range(rows_A)]

    for i in range(rows_A):
        for j in range(cols_B):
            for k in range(cols_A):
                C[i][j] += A[i][k] * B[k][j]
    return C

if __name__ == '__main__':
    try:
        calculer_le_produit_matriciel_de(None, None)
    except NameError as n:
        print(n)
        exit()
    except TypeError:
        pass # Call if the user classifier function have been defined

    l = (
        (
            [[1, 0],
             [2, -1]],
            [[3, 4],
             [-2, -3]]
        ),
        (
            [[1, 0],
             [2, -1]],
            [[2, -1],
             [0, 1]]
        ),
        (
          [[1, 2, 3, 4]],
          [[1], [0], [-1], [2]]
        ),
        (
            [[1, 2],
             [3, 4],
             [1, 2],
             [3, 4]],
            [[1, 0, -1],
             [2, -1, 0]]
        )
    )



    for subL in l:
        matA, matB = subL
        actualResult = matrixMult(matA, matB)
        try:
            studentResult = calculer_le_produit_matriciel_de(matA, matB)
        except IndexError as e:
            print(str(e))
            exit()
        if studentResult != actualResult:
            print(
                "Le résultat du produit matriciel de {} avec {} attendu est {}, ton résultat est {}".format(matA,
                                                                                                            matB,
                                                                                                            actualResult,
                                                                                                            studentResult))
            print() # Leave a blank line to
            print(r"$$ {} \\times {} = {} \\neq {} $$".format(
                inginiousMatrixDisp(matA),
                inginiousMatrixDisp(matB),
                inginiousMatrixDisp(actualResult),
                inginiousMatrixDisp(studentResult)))
            exit()

    print("True")
