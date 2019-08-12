#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *
from testPictures import NNImg

globalNN = NeuralNetwork((28*28, 200, 10))
#TODO : update weights values and be careful with bias !


def classifier(image):
    raise NameError('La fonction "classifier" n\'a pas était définie par l\'utilisateur')

def g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(image):
    raise NameError('La fonction "gérer la couche d\entrée à partir de l\'image" n\'a pas était définie par l\'utilisateur')

def calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(couche_c):
    raise NameError('La fonction "calculer la valeur des neurones de la couche n°" n\'a pas était définie par l\'utilisateur')

def tirer_une_conclusion_de_la_couche_sortie():
    raise NameError('La fonction "tirer une conclusion de la couche sortie" n\'a pas était définie par l\'utilisateur')

try:
@   @blocklyRes@@
except:
    pass

if __name__ == '__main__':
    try:
        classifier(None)
        g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(None)
        calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(None)
        tirer_une_conclusion_de_la_couche_sortie()
    except NameError as n:
        print(n)
        exit()
    except Exception as e:
        pass # Call if the user classifier function have been defined


    studentRes = classifier(NNImg[0])
    if studentRes != 0:
        print("Un mauvais chifre à été prédit {} pour une image du chiffre {}.".format(studentRes, 0))



    print("True")
