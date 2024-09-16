import numpy as np

# v = [1, 3, 2]
# w = [0, 1, -1]

# print(v+w)  #v e w sono LISTE, su python il '+' concatena le stringhe, dovremmo avere dei vettori

v = np.array([1, 3, 2])     #questi array devono contenere sono numeri
w = np.array([0, 1, -1])    #della stessa categoria (tipo)

print(v.shape) #'forma' dell'array
# print(v.ndim, v.size) #'ndim' = numero dimensioni, 'size' = numero elementi

s = v+w

A = np.array([[1,3,2],[1,1,-1]])

"""
print(np.sqrt(4))
print(np.square(w))
print(np.exp(A))
"""

print(v+1) #aggiunge 1 elemento per elemento
print(v*2) #same

"""
nx1     vettore colonna
1xn     vettore riga
nx      vettore (e basta)
"""

# v_row = np.array([1, 0, 1]) # vettore astratto nx
v_row = np.array([[1, 0, 1]]) # vettore riga 1xn
v_col = np.array([[1],[0],[1]]) # vettore colonna nx1

# print(np.dot(A, v)) #'dot' = prodotto scalare
print(A @ v) # versione più simpatica del 'dot'









