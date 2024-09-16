import numpy as np

x = np.linspace(-1, 3, 30)  # contiene 30 elementi equispaziati tra -1 e 3(incluso) (in questo caso)
y = np.arange(-1,3,1) # contiene n elementi tra -1 e 3 (escluso) con passo 1

# print(y>0) #quando y è maggiore di zero => ritorna una vettore di boolean

b1 = y>0
b2 = y<=1

print(b1)
print(b2)

print(b1 & b2)  # &: AND , |: OR , ~: NOT
print(~b1)

