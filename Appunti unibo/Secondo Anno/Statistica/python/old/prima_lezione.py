#posso eseguire solo certe righe con F9

print("Hello world")

a = 5
b = 3.4
c = "string"

print(type(a))  # type = tipo della variabile

a = float(a) + b

print(a**3) # ** = potenza

print(f"Resto: {7%2}")  #fstring = mi permette di inserire snippet di codice con le graffe

# tuple = array, possono contenere oggetti di diverso tipo contemporaneamente  -più veloce e meno pesante
t = (1, 2, "Ciao", True)

# liste = a differenza delle tuple, sono mutabili (posso modficare i valori all'interno)
l = [2, 3, "Addio", False]

print(len(t)) # len = lenght

"""
commento
multi-
-linea
"""

if a == b:
    print("Eccomi!")
elif a > b:             # elif = else if
    print("pew pew pew")
else:
    print("cum")
    
# while
k = 0
kmax = 10
while k < kmax:
    print(k)
    k+=1        # += , -= , /= , *= , diverso dal k = k+1 (+= modifica, questo crea una nuova variabile)
    
# for

# range(n) è un iteratore, va da 0 a n
# posso anche usare una stringa, in questo caso i scorre le variabili di una stringa
for i in range(10):
    print(i)
    
    
# def = lo usiamo per creare una funzione

#funzione che torna una cosa
def somma(a, b):
    res = a + b
    return res

#funzione che non torna nulla (None)
def nome(s):
    print(f"il tuo nome è: {s}")

#funzione che torna più cose
def somma_prod(a, b):
    s = a*b
    p = a/b
    return s, p # il risultato ritornato è una tupla

r = somma_prod(3, 5) # prendo una tupla
s, p = somma_prod(3, 5) # "divido" la tupla in più variabili
a, b = 2, 1 # assegnazione multipla

# Dizionario
d ={"Nome": "Davide", "Email": "sprema@unibo.it"}

print(d["Nome"])    #stampo ciò che è associato a nome



















    
    
    


