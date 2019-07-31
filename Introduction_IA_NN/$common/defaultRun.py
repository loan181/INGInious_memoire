#!/bin/python3
#Open source licence goes here

import os
import subprocess
import shlex
from inginious import feedback
from inginious import input


def run():
    input.parse_template("correction.py") #Replace correction.py by your filename on this line and the next
    p = subprocess.Popen(shlex.split("python3 correction.py"), stderr=subprocess.STDOUT, stdout=subprocess.PIPE)
    make_output = p.communicate()[0].decode('utf-8')
    if p.returncode:
        feedback.set_global_result("crash")
        feedback.set_global_feedback(
            "Le code n'a pas pu être exécuté. Vérifie que tes blocs sont bien assemblés.\n"
            "DEBUG information: " + make_output # TODO : a supprimer pour le release
        )
        exit(0)
    elif make_output == "True\n":
        feedback.set_global_result("success")
        feedback.set_global_feedback("Bravo, tu as résolu cet exercice !")
    else:
        feedback.set_global_result("failed")
        feedback.set_global_feedback(
            "Tu as fait une erreur !\n"
            + make_output
        )