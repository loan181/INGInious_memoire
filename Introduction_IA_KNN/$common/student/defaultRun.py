#!/bin/python3
#Open source licence goes here

import os
import subprocess
import shlex
from inginious import feedback
from inginious import input


def main():
    input.parse_template("correction.py") #Replace correction.py by your filename on this line and the next
    p = subprocess.Popen(shlex.split("python3 correction.py"), stderr=subprocess.STDOUT, stdout=subprocess.PIPE)
    make_output = p.communicate()[0].decode('utf-8')
    if p.returncode:
        feedback.set_global_result("failed")
        feedback.set_global_feedback("Your code could not be executed. Please verify that all your blocks are correctly connected.")
        exit(0)
    elif make_output == "True\n":
        feedback.set_global_result("success")
        feedback.set_global_feedback("You solved the task !")
    else:
        feedback.set_global_result("failed")
        feedback.set_global_feedback("You made a mistake ! " + make_output)