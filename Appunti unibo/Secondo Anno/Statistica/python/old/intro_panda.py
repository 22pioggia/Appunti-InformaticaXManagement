import numpy as np
import pandas as pd

d = np.arange(1,4)
D = np.diag(d)

df = pd.DataFrame(D, columns=["C_1", "C_2", "C_3"])
print(df)

df2 = pd.DataFrame({
    "nome": ["Marco","Fabio"],
    "cognome": ["Rossi","Bianchi"],
    "eta": [45, 23]
    })

print(df2)
print("")

# SLICING
print(df2["nome"])
print(df2.iloc[1])