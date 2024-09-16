"""
ci sono 2 giocatori P1 e P2 che giocano a lanciare dadi a 6 facce

vince chi fa il risultato più alto nel lancio

fanno 50_000 partite, in caso di parità vince P1

simula queste partite e, ad ogni esecuzione, ritorna il punteggio dei due giocatori
"""

import numpy as np
import time

N = 50_000

P1 = np.random.randint(1, 7, size = (N,))
P2 = np.random.randint(1, 7, size = (N,))

# soluzione 1
start_time = time.time()
print(f"Risultato P1: {(P1 >= P2).sum()}.")
print(f"Time: {time.time()-start_time}")

# soluzione 2
# print(f"Risultato P1: {P1[P1 >= P2].size()}")

# soluzione stupida
start_time = time.time()
punteggio = 0
for i in range(len(P1)):
    if P1[i] >= P2[i]:
        punteggio = punteggio + 1
print(f"Time: {time.time()-start_time}")
        
print(punteggio)




