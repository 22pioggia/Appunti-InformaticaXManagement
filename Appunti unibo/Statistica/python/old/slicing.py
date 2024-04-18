import numpy as np

x = np.array([1, 3, -1, 2])
A = np.array([[1,0,1],[1,2,3],[-2,1,0]])

#SLICING
print(x[2])
print(x[1:3]) # stampa gli elementi di posto 1 e 2 (l'ultimo valore è escluso)

# B = A[1:3,0:3] # funziona ma non è il metodo standard
B = A[1:,0:] # lasciare vuoto il secondo valore significa fino alla fine, la stessa cosa vale al contrario B[1:,:], B[:2,1:], ...
print(B)

v = A[:,1]

x = np.array([1, 3, -1, 2, -3, 0])
bool_idx = np.array([True, True, False, True, False, True])
bool_idx2 = (x >= 0)

# print(x[np.array([0,1,3,5])]) # estrae i valori in questi indici
print(x[bool_idx]) # funziona anche con i boolean, prende solo i true
print(x[bool_idx2]) # prende solo i valori >= 0
# posso anche fare print(x[x>=0])








