Nella analisi statistica dei dati si utilizzano dei campioni di dati per inferire (dedurre) delle informazioni sulla popolazione da cui il campione (i campioni) sono stati estratti. 

- _**Popolazione**_: tutti gli elementi di un data set 
- _**Campione**_: una o piu osservazioni relative alla popolazione. Il campione viene scelto casualmente (Simple Random Sample - **SRS**) -> SRS(n) contiene n elementi
- _**Parametro**_: valore caratteristico di una popolazione, come la media, la deviazione standard. (di solito indicati con lettere greche) 
- _**Statistica**_: valori misurabili delle caratteristiche di un campione, come la media, la deviazione standard il massimo e il minimo. 
- _**Distribuzione dei campioni**_: La distribuzione di una statistica (misurata sui campioni) 
- _**Statistica inferenziale**_: stimare uno o piu parametri della popolazione utilizzando la statistica dei campioni

![[Pasted image 20240312164356.png|500]]
media/devianza campione = calcolata
media/devianza popolazione = stimata

Il campione scelto deve essere: 
1. casuale- scelto in modo random dalla popolazione 
2. Rappresentativo – deve coprire le i diversi valori delle caratteristiche considerate 
3. Di dimensione adeguata- non troppo piccolo rispetto alla varianza dei valori considerati 
4. Non bias - non ci devono essere distorsioni rispetto alla statistica da misurare.
### Distribuzioni campionarie e teorema del limite centrale
#### Media campionaria
Siano X1 , X2, … Xn SRS(n) da una distribuzione aleatoria normale con (media=mu, sd=sigma). 
Allora: 
1. la variabile aleatoria X media campionaria ha distribuzione normale (media=mu, sd=sigma/ ). 
2. La variabile aleatoria: $$Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{ n }}$$
 
Ha distribuzione campionaria normale standard
#### Teorema del limite centrale
Siano X_1,..,X_n una SRS(n) da una distribuzione di popolazione con media mu e deviazione standard sigma. allora la variabile aleatoria $$Z= \frac{\bar{X}-\mu}{\sigma /\sqrt{ n }}$$
ha una distribuzione campionaria che **ha come limite**, per n -> infinito, la distribuzione normale standard
## Stima di parametri
Generalizziamo ora il concetto di stima di parametri di una distribuzione che abbiamo visto per ora Applicato alla media e alla deviazione standard (o varianza).

---
$$\text{La stima puntuale di un parametro } \theta \text{ (con le lettere greche indichiamo il parametro di interesse)}$$
$$\text{è un numero che può essere un valore sensibile di } \theta. \text{ Una stima puntuale è ottenuta scegliendo}$$
$$\text{un'opportunità statistica e calcolando il suo valore a partire da campioni casuali. La statistica scelta è}$$
$$\text{detta stimatore puntuale di } \theta \text{ e si indica generalmente con } \hat{\theta}$$

---
