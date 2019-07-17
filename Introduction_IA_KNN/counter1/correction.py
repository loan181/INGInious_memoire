#!/bin/python3
#Open source licence goes here

from contextlib import redirect_stdout

# 			setosa, versicolor, virginica
counters = [0, 		0, 			0]
def incrementCounter(x):
	if x <= 0 or x >= 5:
		print("Valeur inadéquate pour augmenter le compteur", x)
		exit()
	elif x == 1:
		counters[0] += 1
	elif x == 2 or x == 3:
		counters[1] += 1
	else:
		counters[2] += 1


if __name__ == "__main__":
    @@tuto1@@
    if counters == [0, 0, 1]:
    	print("True")
    else:
    	print("Les valeurs totales des compteurs sont incorrectes", counters)