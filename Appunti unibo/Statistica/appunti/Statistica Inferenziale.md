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
2. Rappresentativo – deve coprire i diversi valori delle caratteristiche considerate 
3. Di dimensione adeguata- non troppo piccolo rispetto alla varianza dei valori considerati 
4. Non bias - non ci devono essere distorsioni rispetto alla statistica da misurare.
### Distribuzioni campionarie e teorema del limite centrale
#### Media campionaria
Siano X1 , X2, … Xn SRS(n) da una distribuzione aleatoria normale con (media=mu, sd=sigma). 
Allora: 
1. la variabile aleatoria X media campionaria ha distribuzione normale (media=mu, sd=sigma ). 
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

![[Pasted image 20240529192938.png|500]]

![[Pasted image 20240529193334.png|500]]


## Intervalli di confidenza
### Popolazione normale
Siano X<sub>1</sub> , X<sub>2</sub>, … X<sub>n</sub> SRS(n) da una distribuzione normale con (<b><font color="#92cddc">media=mu, sd=sigma</font></b>). Consideriamo come statistica campionaria la media 𝑋. 
Stimando con la media campionaria la media della distribuzione, si commette un errore non noto. 

Fissato in α \[0,1] e z<sub>α/2</sub>il quantile di indice α/2 della distribuzione normale standard, l’intervallo:
$$\left( \bar{X}-z_{\alpha/2} \frac{\sigma}{\sqrt{ n }}, \quad \bar{X}+ z_{\alpha/2} \frac{\sigma}{\sqrt{ n }} \right)$$
è detto **intervallo di confidenza** 100(1-α)% di μ
α è il **livello di confidenza**
>Possiamo anche dire che la probabilità che il **valore esatto μ** sia nell’ <u>intervallo di confidenza</u> è del **100(1-α)%**

L’intervallo è casuale perché dipende dalla variabile aleatoria media campionaria

Possiamo fare le seguenti considerazioni:
- Per un livello di confidenza fissato 1-α, se *n* <u>aumenta</u>, l'intervallo di confidenza <u>diminuisce</u>
- Per *n* fissato, se 1-α <u>aumenta</u>, l'intervallo di confidenza <u>aumenta</u>

><b><font color="#ff00dd">Se la deviazione standard della popolazione non è nota?</font></b>
- Si utilizza la deviazione standard campionaria:
$$\bar{X} \pm z_{\alpha/2} \frac{S}{\sqrt{ n }}$$
Cosa posso dire di questa approssimazione? 
- SE *n* è grande S tende alla deviazione standard esatta 
- Se *n* è piccolo, sostituisco il valore del quantile della distribuzione normale con quello della distribuzione t di student (*df=1*):
$$\bar{X} \pm t_{\alpha/2}(df=1) \frac{S}{\sqrt{ n }}$$
### Popolazione NON normale
Siano X1 , X2, … Xn SRS(n) da una distribuzione qualunque con (<b><font color="#92cddc">media=mu, sd=sigma</font></b>). Consideriamo come statistica campionaria la media 𝑋. 

Per il Teorema del Limite Centrale, se n è sufficientemente grande la variabile aleatoria media campionaria si comporta come nel caso di campioni estratti da distribuzione normale. Quindi l’intervallo di confidenza si calcola sempre come:
$$\left( \bar{X}-z_{\alpha/2} \frac{\sigma}{\sqrt{ n }}, \quad \bar{X}+ z_{\alpha/2} \frac{\sigma}{\sqrt{ n }} \right)$$
Purtroppo è molto difficile nel caso di distribuzioni **non** normali avere la deviazione standard esatta quindi la sostituisco con quella campionaria S.
$$\bar{X} \pm z_{\alpha/2} \frac{S}{\sqrt{ n }}$$
### Funzioni python
Funzione Python per calcolare il quantile di ordine p della distribuzione normale standard: 

<font color="#92cddc">from scipy import stats </font>
<font color="#92cddc">Q=stats.norm.ppf(p) </font>

Nel caso di distribuzione normale con media=m e deviazione standard=s: 

<font color="#92cddc">Q=stats.norm.ppf(p, loc=m,scale=s) </font>
<font color="#92cddc">Q=stats.norm.ppf(0.95, loc=0,scale=1.5) </font>

Nel caso di distribuzione t di student con gradi di libertà n: 

<font color="#92cddc">Q=stats.t.ppf(p, df) </font>
<font color="#92cddc">Q=stats.t.ppf(0.99, 4)</font>

---
## Test di ipotesi

*Supponiamo che tu sia il direttore di una scuola. Se gli studenti ottengono un punteggio di 110 nell’esame finale, visto che la media nazionale è di 100, ottieni un incentivo. Se il voto è significativamente minore non lo ottieni (devi assumere piu insegnanti), ma anche se è significativamente maggiore non lo ottieni (hai speso troppo e quindi devi licenziare delle insegnanti).*

*Come fare a decidere?*

![[Pasted image 20240529202416.png|300]]

==**Procedura generale**==
Step: 
1. Considero un SRS(n) (il campione dei voti considerato) 
2. Formulo una ipotesi nulla H<sub>0</sub> (La media dei voti è 110) 
3. Formulo una ipotesi alternativa H<sub>1</sub> (la media dei voti è diversa da 110) 
4. Calcolo una statistica (la media campionaria) 
5. Confronto il valore della statistica calcolata con quello della ipotesi nulla e calcolo un valore detto ***p-value*** 
6. Interpreto il p-value e decido se l’ipotesi nulla è da rigettare oppure no
### Interpretazione del p-value
Il p-value è un valore p nell’intervallo \[0,1]. 

Se p < 0.05 possiamo interpretare così: 

SE l’ipotesi nulla è vera, la probabilità di trovare un valore della media campionaria più estremo (maggiore o minore) di quello osservato è del 5%. 

><font color="#ff00dd">N.B. Non significa che l’ipotesi nulla sia falsa e nemmeno che l’ipotesi alternativa sia vera!</font>

In pratica però di solito il p-value si utilizza così per decidete il test di ipotesi: 

>**Se p<0.05 si rigetta l’ipotesi nulla a favore di quella alternativa, per una differenza statisticamente significativa del valore osservato rispetto all’ipotesi nulla.** 

Attenzione però che il p-value rappresenta solo una verosimiglianza che l’ipotesi nulla sia vera, niente di piu!
### Tipi di errore

**Type I errors**:
>Sono gli errori che si commettono quando l’ipotesi nulla è vera anche se la statistica misurata Differisce significativamente. 
>Sono detti *producer risk errors* perché si rigettano dati che in realtà rispondono ai requisiti richiesti.

**Type II errors:**
>Sono gli errori che si commettono quando si accetta l’ipotesi nulla perché la statistica non differisce da essa significativamente anche se l’ipotesi nulla è falsa. 
>Sono detti *consumer risk errors* perchè si accettano misure anche se non conformi ai requisiti richiesti.
### Sensività e Specificità
Sopponiamo di fare un test di ipotesi utilizzando una grandezza che identifica l’esistenza o meno di un tumore. Quindi: 
- Ipotesi nulla: il paziente ha il tumore 
- Ipotesi alternativa: il paziente NON ha il tumore. 
 
- **Sensitività**: anche detta potenza. Proporzione di positivi correttamente identificati da un test.
- **Specificità**: Proporzione di negativi correttamente identificati da un test. 
- **Positive Predicted Value (*PPV*)**: proporzione di pazienti con test positivo che sono stati correttamente diagnosticati 
- **Negative Predicted Value (*NPV*)**: proporzione di pazienti con test negativo che sono stati correttamente diagnosticati

![[Pasted image 20240529204158.png|500]]

Mentre la sensitività e la specificità caratterizzano un test, non indicano quale sensitività e specificità caratterizza un test, non indicao quale porzione di pazienti con test “anormale” sono veramente “non normali”. Questa informazione è data dai valori PPV e NPV. 

Tuttavia, questi valori da soli non sono sufficienti per una valutazione affidabile. 

Per rispondere a questa domanda: 
*Se un paziente ha un test positivo, qual è la probabilità che sia veramente ammalato?* 

Dobbiamo considerare altri due fattori: la **prevalenza** e l’**incidenza**.
### Prevalenza e Incidenza
**Prevalenza**: quante persone su 100000(*numero fissato*) è ammalata 
**Incidenza**: il numero di nuovi casi diagnosticati su 100000 persone.

![[Pasted image 20240529205225.png|500]]

---
**Risultati di un esempio**

![[Pasted image 20240529205321.png|500]]
![[Pasted image 20240529205353.png|500]]
### Funzioni python

Test di ipotesi per decidere se due campioni x e y provengono dalla stessa distribuzione:

<font color="#92cddc">Res=scipy.stats.wilcoxon(x, y=None, zero_method='wilcox' , correction=False, alternative='two-sided' , method='auto', * , axis=0, nan_policy='propagate', keepdims=False)</font> 

<font color="#92cddc">Res.statistic</font> 
<font color="#92cddc">Res.pvalue</font> 

[[scipy.stats.wilcoxon — SciPy v1.10.1 Manual]]
### Test di normalità
QQ-plot: Il quantile del data set considerato e’ plottato rispetto al quantile di una distribuzione (normale in questo caso) di riferimento. 

<font color="#646a73">Se le due distribuzioni sono simili, I punti devono stare molto vicini alla retta.</font>

![[Pasted image 20240529205629.png|300]]

Ci sono diversi test di ipotesi di normalita’ basati sul confronto della distribuzione stimata dei dati rispetto alla distribuzione normale. 

Uno dei più famosi è il test di Shapiro-Wilk, che si basa sulla matrice di covarianza delle statitsiche ordinate delle osservazioni e può essere utilizzato anche con un numero ridotto (<+50) di osservazioni.

H<sub>0</sub>: residui normali 
H<sub>a</sub>: residui non normali.

