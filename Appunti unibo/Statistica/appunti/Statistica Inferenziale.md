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
Supponiamo di voler stimare un parametro con lo stimatore. In generale si ha $$\hat{\theta}=\theta + \text{errore di stima}$$
l'errore di stima può essere sia positivo che negativo

Ovviamente, più è piccolo l'errore, migliore è l'estimatore. Per valutare l'errore commesso nella stima, si calcolano delle misure di errore come, per esempio, l'errore quadratico medio (**Mean Square Error**):$$MSE=\frac{\sum_{i=1}^n(\hat{\theta}-\theta)^2}{n}$$
![[Pasted image 20240513153511.png|650]]

![[Pasted image 20240513153631.png|650]]

![[Pasted image 20240513153712.png|650]]
## Derivate parziali
sono derivate ma di punti f(x<sub>1</sub>,x<sub>2</sub>,...,x<sub>n</sub>) -> derivata di x<sub>n</sub> considera solo dove appare x<sub>n</sub>

![[Pasted image 20240513154358.png|400]]
### Il gradiente di una funzione
![[Pasted image 20240513154600.png|650]]
$$\begin{align}
&f:R^2\to R \\
&\nabla f:R^2\to R^2 \\
 \\
&f:R^n\to R \\
&\nabla f =\left( \frac{\delta t}{\delta x_{1}}, \frac{\delta t}{\delta x_{2}},\dots, \frac{\delta t}{\delta x_{n}} \right) \in R^n \\
&\nabla f:R^n\to R^n
\end{align}$$
![[Pasted image 20240513155224.png|650]]

**==Esempio==**
$$\begin{align}
&f(x_{1},x_{2})=3x_{1}^2-x_{1}x_{2}+x_{2}^2 \\
&\nabla f(x_{1},x_{2})= \left( \frac{\delta t}{\delta x_{1}}, \frac{\delta t}{\delta x_{2}}\right)=(6x_{1}-x_{2},-x_{1}+2x_{2}) \\
 \\
&p=(0,0) \\
&\nabla f(0,0)=(0,0) \\
 \\
&p=(1,-2) \\
&\nabla f(1,-2)=(8,-5)
\end{align}$$
>*il **gradiente di una funzione** in un punto fornisce direzione e verso nei quali la funzione cresce più rapidamente
>
>Nel verso opposto al gradiente avviene la massima decrescenza

### Matrice hessiana
$$f:R^n\to R, \qquad \nabla^2f:R^n\to R^{n \times n}$$
$$H=\nabla^2f \begin{pmatrix}
\frac{\delta^2t}{\delta x_{1}^2} &\frac{\delta^2t}{\delta x_{1}\delta x_{2} } &\dots &\frac{\delta^2t}{\delta x_{1}\delta x_{n}} \\
\frac{\delta^2t}{\delta x_{1}\delta x_{2} } &\frac{\delta^2t}{\delta x_{2}^2} \\
\vdots & &\ddots \\
\frac{\delta^2t}{\delta x_{1}\delta x_{n} } & &\frac{\delta^2t}{\delta x_{n}^2}
\end{pmatrix}$$
matrice n x n ***simmetrica***

**==Esempio==**
$$t:R^2\to R \qquad f(x_{1},x_{2})=3x_{1}^2-x_{1}x_{2}+x_{2}^2$$
$$\nabla^2f=\begin{pmatrix}
6 &-1 \\
-1 &2
\end{pmatrix}$$
$$\nabla^2f(x_{1},x_{2})=\begin{pmatrix}
6 &-1 \\
-1 &2
\end{pmatrix}$$
## Ottimizzazione