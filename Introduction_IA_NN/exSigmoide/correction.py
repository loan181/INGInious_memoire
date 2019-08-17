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
        l1 = @@exo1@@
        l2 = @@exo2@@
        proba = @@exo3@@
    except Exception as e:
        print(e)
        exit()

    student = (
        l1 ,l2, [proba]
    )
    expect = (
        [0.99999998, 0.00247262, 0.9999833],
        [0.00012556, 0.99987444],
        [99.987]
    )
    for i in range(len(expect)):
        if student[i] != expect[i]:
            for j in range(len(expect[i])):
                if student[i][j] != expect[i][j]:
                    print("Exercice {} incorrect, la valeur {} en position {} est incorrecte".format(i+1, student[i][j], j+1))
                    exit()

    print("True")
