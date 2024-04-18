import numpy as np

# scegliamo il numero di dati
N =  1000

# generiamo N dati Gaussiani con media e deviazione standard date
mean = 0
std = 1

# distribuzione normale
x = np.random.normal(mean, std, (N,)) # mettiamo (N,) perchè è una tupla, ci evita errori più avanti

# distribuzione normale standardizzata
u = np.random.uniform(-1,1,(N,)) # low = -1, high = 1, estremi, low incluso high escluso

# facciamo statistica
print(f"Mean: {x.mean()}, Std: {x.std()}")
print(f"Mean: {u.mean()}, Std: {u.std()}")