#!/bin/python3

import os
import sys

import sys
sys.path.insert(1, '/course/common')
from contextlib import redirect_stdout

from shareFunctions import *
from testPictures import NNImg
import layersWeightsValue as nn


def classifier(image):
    raise NameError('La fonction "classifier" n\'a pas était définie par l\'utilisateur')

def g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(image):
    raise NameError('La fonction "gérer la couche d\entrée à partir de l\'image" n\'a pas était définie par l\'utilisateur')

def calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(couche_c):
    raise NameError('La fonction "calculer la valeur des neurones de la couche n°" n\'a pas était définie par l\'utilisateur')

def tirer_une_conclusion_de_la_couche_sortie():
    raise NameError('La fonction "tirer une conclusion de la couche sortie" n\'a pas était définie par l\'utilisateur')

NNSize = (28 * 28, 200, 10)
globalNN.size = NNSize
globalNN.reset()
try:
@   @blocklyRes@@
except:
    pass


if __name__ == '__main__':
    corectionNN = NeuralNetwork(NNSize)
    NNs = (globalNN, corectionNN)
    for NN in NNs:
        NN.layersMat[0] = nn.w12
        NN.layersMat[1] = nn.w23
        NN.bias = [nn.bias2, nn.bias3]
    try:
        classifier(None)
        g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(None)
        calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(None)
        tirer_une_conclusion_de_la_couche_sortie()
    except NameError as n:
        print(n)
        exit()
    except:
        pass # Call if the user classifier function have been defined


    def classifyCorrection(image):
        corectionNN.reset()
        corectionNN.handleInputLayer(image)
        corectionNN.handleLayer(2)
        corectionNN.handleLayer(3)
        return corectionNN.concludeIndex()

    testPicturesKey = [i for i in range(10)]
    incorrects = []
    for testPictureKey in testPicturesKey:
        globalNN.reset()
        image = NNImg[testPictureKey]
        studentRes = classifier(image)
        #correctionRes = classifyCorrection(image)
        if studentRes != testPictureKey:
            incorrects.append(testPictureKey)

    # Correction feedback
    if len(incorrects) > 0:
        print("Les images des chiffres suivant ne sont pas reconnus dans ton réseau :")
        print(" "*4, end="")
        for incorrect in incorrects:
            print(incorrect, end=" ")
        print("\n\n" + " "*4 + "Vérification des étapes pour la première image incorrecte :")

        # Init
        image = NNImg[incorrects[0]]
        globalNN.reset()
        corectionNN.reset()

        # Check for step 1
        corectionNN.handleInputLayer(image)
        g_C3_A9rer_la_couche_d_entr_C3_A9e__C3_A0_partir_de_l_image(image)
        corectionL1 = corectionNN.nnValues[0]
        studentL1 = globalNN.nnValues[0]
        step1OK = corectionL1 == studentL1

        step1ResDisp = "OK"
        if not step1OK:
            step1ResDisp = "MAUVAIS"
        print(" "*4+"  1) Gestion de l'entrée :", step1ResDisp)
        if not step1OK:
            print(" " * 8, "Attendu",  corectionL1)
            print(" " * 8, "Trouvé ", studentL1)

        # Check for step 2
        if step1OK:
            corectionNN.bias = None # Too dificult too apply bias on student answer, so we disable it here
            corectionNN.handleLayer(2)
            corectionNN.handleLayer(3)
            corectionL23 = corectionNN.nnValues[1:2]

            calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(2)
            calculer_la_valeur_des_neurones_de_la_couche_n_C2_B0(3)
            studentL23 = globalNN.nnValues[1:2]

            step2OK = corectionL23 == studentL23

            step2ResDisp = "OK"
            if not step2OK:
                step2ResDisp = "MAUVAIS"
            print(" " * 4 + "  2) Gestion des autres couches :", step2ResDisp)
            if not step2OK:
                print(" " * 8, "Attendu", corectionL23)
                print(" " * 8, "Trouvé ", studentL23)

            # Check for step 3
            if step2OK:
                correctionConclusion = corectionNN.concludeIndex()
                studentConclusion = tirer_une_conclusion_de_la_couche_sortie()

                step3OK = correctionConclusion == studentConclusion

                step3ResDisp = "OK"
                if not step3OK:
                    step3ResDisp = "MAUVAIS"
                print(" " * 4 + "  3) Conclusion :", step3ResDisp)
                if not step3OK:
                    print(" " * 8, "Attendu", correctionConclusion)
                    print(" " * 8, "Trouvé ", studentConclusion)

        exit()

    print("True")
