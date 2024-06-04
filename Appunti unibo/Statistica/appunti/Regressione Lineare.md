# Regressione lineare semplice
## Modellazione statistica
La modellazione statistica, cioè la creazione di modelli su basi probabilistiche e non deterministiche, <u>richiede una interazione con i dati</u>. 

Di solito si parte da una osservazione visuale dei dati, ==evidenziando relazioni e/o correlazioni fra di essi==. 

Come risultato si definisce un modello che possa rappresentare i dati. 

Pacchetti Python per modellazione statistica: 
- <font color="#92cddc">statsmodel</font> 
- <font color="#92cddc">Scikit-learn</font>
## Correlazione
Date due variabili aleatorie, la ***correlazione*** misura la relazione esistente fra di esse. La *regressione lineare* è invece un modello che permette di fare previsione di una variabile <u>conoscendo l’altra</u>. 

Il coefficiente di correlazione è un numero che risponde alla domanda: 
<font color="#b2a2c7">«Sono le due variabili in relazione fra di loro? Se si, quando cambia una, come cambia l’altra?»</font>

**Coefficiente di correlazione di Pearson fra le variabili aleatorie X e Y**
$$r = \frac{\sum_{i=1}^n(X_{i}-\bar{X})(Y_{i}-\bar{Y})}{\sqrt{ \sum_{i=1}^n(X_{i}-\bar{X})^2 } \sqrt{ \sum_{i=1}^n(Y_{i}-\bar{Y})^2 }}$$
$$\bar{X} \, e \, \bar{Y} \text{ medie campionarie}$$
il valore è nell'intervallo \[-1,1].

![[Pasted image 20240530165401.png|600]]

[[https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html]]
### Matrice di correlazione
Un altro modo per visualizzare le correlazioni di coppie di variabili è la **matrice di correlazione**.

>import numpy as np
>import seaborn as sns
>import matplotlib.pyplot as plt
>sns.set(style="darkgrid")
>
>rs = np.random.RandomState(33)
>d = rs.normal(size = (100, 30))
>
>f, ax = plt.subplots(figsize=(9, 9))
>cmap = sns.diverging_palette(220, 10, as_cmap=True)
>sns.corrplot(d, annot=False, sig_stars=False, diag_names=False, cmap=cmap, ax=ax)
>f.tight_layout()

![[Pasted image 20240530171158.png|400]]
## Regressione lineare - introduzione
La **regressione lineare** è il cuore della statistica.
Risponde alla domanda: 
><font color="#bfbfbf">« come posso utilizzare i dati che ho misurato per fare previsoni su dati che non conosco?»</font> 

utilizzando in particolare un modello di tipo lineare.

La *regressione lineare* è la parte della statistica che studia la relazione fra due o più variabili, che sono legate in modo <u>NON DETERMINISTICO</u>, per fare inferenze sul modello

In particolare, si usano relazioni fra due o più variabili in modo da ottenere informazioni su una di esse conoscendo i valori dell'altra. 
Esempi di variabili non legate tra di loro da una relazione deterministica:
- x= età di un bambino, Y= la sua altezza
- x= volume di un motore, Y= il suo consumo di carburante
- x= tempo di studio, Y= voto all'esame
Poichè x non è una variabile casuale la indichiamo con la lettera minuscola, mentre Y, variabile casuale, la indichiamo con la lettera maiuscola.

Nel caso lineare supponiamo una relazione appunto lineare tra le due variabili x e Y:
$$Y=\beta_{0}+\beta_{1}x$$

---
Questa relazione, *di per se deterministica*, viene generalizzata a una relazione probabilistica. Date quindi informazioni su x e Y, l'obiettivo è quello di *predire* un valore futuro di Y per un particolare valore di x

In questo modello x viene detta *variabile indipendente*, e Y *variabile dipendente*

Il modello viene costruito a partire da alcune osservazioni ==(xi, Yi), i = 1, ..., n..==

---
L'estensione al modello probabilistico è necessaria nel momento in cui le due variabili non hanno una relazione deterministica. In pratica, in corrispondenza di *n* variabili indipendenti x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub> si hanno *n* valori Y<sub>1</sub>, Y<sub>2</sub>, ..., Y<sub>n</sub>, che sono legati dalla relazione:
$$Y_{i}=\beta_{0}+\beta_{1}x+\epsilon_{i}, \quad i=1,\dots,n$$
Quindi differiscono, rispetto al modello lineare esatto, di una quantità ϵ<sub>i</sub>
I valori Y<sub>i</sub> sono in generale variabili aleatorie

![[Pasted image 20240531175810.png|300]]
### Modello di regressione lineare semplice 
*Esistono parametri β<sub>0</sub>, β<sub>1</sub>, σ<sup>2</sup> **tc** per ogni valore fissato della variabile indipendente x, la variabile dipendente è una variabile aleatoria legata a x dal modello:*
$$Y=\beta_{0}+\beta_{1}+\epsilon$$
*Dove ϵ è una variabile aleatoria, detta **errore casuale**, che si assume con distribuzione <font color="#b7dde8">norm(0,σ)</font>*

β<sub>0</sub>, β<sub>1</sub> = parte deterministica della formula
Y = variabile aleatoria con distribuzione normale

---
#### Stima dei parametri: MLE

*Come calcolare stime dei parametri β<sub>0</sub> e β<sub>1</sub> della retta di degressione lineare assegnate le coppie* 
*(x<sub>i</sub>, Y<sub>i</sub>), i = 1, ..., n? Cioè come determinare, fra le infinite rette del piano, **una buona retta**? Esiste **una retta** migliore delle altre?*

Visto che gli errori ϵ<sub>i</sub> hanno distribuzione <font color="#b7dde8">norm(mean=0, sd=σ)</font>, allora la variabile aleatoria Y<sub>i</sub> ha distribuzione normale con deviazione standard σ. La funzione di verosomiglianza è:
$$\begin{align}
L(\beta_{0},\beta_{1})&=\prod_{i=1}^n f_{Y_{i}}(x_{i}) \\
&=\prod_{i=1}^n (2\pi \sigma^2)^{-1/2}\exp \left\{ \frac{-(Y_{i}-\beta_{0}-\beta_{1}x_{i})^2}{2\sigma^2} \right\} \\
&=(2\pi \sigma^2)^{-n/2}\exp \left\{ \frac{-\sum_{i=1}^n(Y_{i}-\beta_{0}-\beta_{1}x_{i})^2}{2\sigma^2} \right\};
\end{align}$$
L(β<sub>0</sub>, β<sub>1</sub>) = norm(μ, σ)
μ = β<sub>0</sub> - β<sub>1</sub>x

---
**==PROF==**
1. Calcolare la funzione di likelihood (verosomiglianza) $$\alpha(a_{1},a_{2},\dots,a_{k})$$
2. $$\begin{align}
&\text{argmax}_{a_{1},a_{1},\dots a_{k}} \, \alpha(a_{1},a_{1},\dots a_{k})= \\
&\text{argmin}_{a_{1},a_{1},\dots a_{k}}- \log \alpha(a_{1},a_{1},\dots a_{k})
\end{align}$$
---
facendo il logaritmo naturale di L(β<sub>0</sub>, β<sub>1</sub>) si ha:
$$F(\beta_{0},\beta_{1})=\ln(L(\beta_{0},\beta_{1}))=-\frac{n}{2}\ln(2\pi \sigma^2)-\frac{\sum_{i=1}^n(Y_{i}-\beta_{0}-\beta_{1}x_{i})^2}{2\sigma^2}$$

Per minimizzare questa funzione rispetto alle variabili *β*<sub>0</sub> e *β*<sub>1</sub>
$$\frac{\delta F}{\delta \beta_{0}}=0, \quad \frac{\delta F}{\delta \beta_{1}}=0.$$
Quindi:
$$\frac{\delta F}{\delta \beta_{0}}=-\frac{1}{2\sigma^2}\sum_{i=1}^n 2(Y_{i}-\beta_{0}-\beta_{1}x_{i})(-1)$$
da cui:
$$\frac{\delta t}{\delta \beta_{0}}=0 \implies n\beta_{0}+\beta_{1}\sum_{i=1}^nx_{i}=\sum_{i=1}^nY_{i}$$

---
==**PROF**==

Calcolare
$$\text{argmin}_{\beta_{0}\, \beta_{1}} \; F(\beta_{0},\beta_{1})=-\frac{n}{2}\ln(2\pi \sigma^2)-\frac{\sum_{i=1}^n(Y_{i}-\beta_{0}-\beta_{1}x_{i})^2}{2\sigma^2}$$ punto stazionario -> x*
$$\begin{align}
\Delta &f(x*)=0 \\
&\downarrow \\
&\left( \frac{\delta t}{\delta \beta_{0}},\frac{\delta t}{\delta \beta_{1}} \right)
\end{align}$$
$$\begin{cases}
\frac{\delta t}{\delta \beta_{0}}=0 \\
\frac{\delta t}{\delta \beta_{1}}=0
\end{cases}$$
---
Per quanto riguarda l'altra derivata:
$$\begin{align}
\frac{\delta \ln L}{\delta \beta_{1}}&=-\frac{1}{2\sigma^2}\sum_{i=1}^n 2(Y_{i}-\beta_{0}-\beta_{1}x_{i})(-x_{i}) \\
&=-\frac{1}{\sigma^2}\sum_{i=1}^n (x_{i}Y_{i}-\beta_{0}x_{i}-\beta_{1}x_{i}^2)
\end{align}$$
da cui:
$$\frac{\delta t}{\delta \beta_{1}}=0 \implies \beta_{0}\sum_{i=1}^nx_{i}+\beta_{1}\sum_{i=1}^nx_{i}^2=\sum_{i=1}^nx_{i}Y_{i}$$

Quindi devo risolvere il sistema costituito dalle due equazioni:
$$\begin{cases}
\frac{\delta t}{\delta \beta_{0}}=0 \implies n\beta_{0}+\beta_{1}\sum_{i=1}^nx_{i}=\sum_{i=1}^nY_{i} \\
\frac{\delta t}{\delta \beta_{1}}=0 \implies \beta_{0}\sum_{i=1}^nx_{i}+\beta_{1}\sum_{i=1}^nx_{i}^2=\sum_{i=1}^nx_{i}Y_{i}
\end{cases}$$
che da come soluzione:
$$\hat{\beta_{1}}=\frac{\sum_{i=1}^n x_{i}Y_{i}-\left( \sum_{i=1}^n x_{i} \right)\left( \sum_{i=1}^n Y_{i} \right)/n}{\sum_{i=1}^nx_{i}^2-\left( \sum_{i=1}^n x_{i} \right)^2/n}$$
e
$$\hat{\beta_{0}}=\bar{Y}-\hat{\beta_{1}}\bar{x}, \qquad \bar{Y},\bar{x}\text{ media campionaria}$$
media campionaria => media dei valori di Y<sub>i</sub> e x<sub>i</sub>
#### Stima dei parametri: Minimi Quadrati
*Una formulazione differente ma equivalente (i risultati sono i medesimi) è quella dei Minimi Quadrati.*

**Principio dei Minimi Quadrati** 
Detto *residuo i-esimo* la differenza verticale tra l'osservazione i-esima e la retta di regressione lineare:
$$E_{i}=Y_{i}-(\beta_{0}-\beta_{1}x_{i})$$
e detta *funzione somma dei quadrati dei residui*:
$$f(\beta_{0},\beta_{1})=\sum_{i=1}^n[Y_{i}-(\beta_{0}+\beta_{1}x_{i})]^2=\sum_{i=1}^2E_{i}^2$$
$$\text{le stime }\beta_{0} \text{ e } \beta_{1} \text{ si ottengono minimizzando la funzione }f(\beta_{0},\beta_{1}).$$
![[Pasted image 20240604172524.png|600]]

![[Pasted image 20240604173232.png|600]]
#### Significato dei parametri della retta
Se per esempio abbiamo trovato una retta che rappresenta il modello di crescita di un bambino (in centimetri) in funzione della sua età in mesi e la retta ha equazione:
$$y(x)=50+0.753x$$
- il coefficiente angolare indica la pendenza della retta. In questo esempio rappresenta di quanto aumenta l'altezza in funzione dei mesi di età. Per ogni mese aumenta di 0.753 cm.
- L'intercetta rappresenta l'altezza a 0 mesi, cioè alla nascita. In base ai dati a disposizione è stata stimata in 50cm
- Cosa significa calcolare y(5)? l'altezza del modello stimato a 5 mesi, cioè 50+0.753\*5
#### Inferenza sui parametri

![[Pasted image 20240604174403.png|600]]
#### Valori predetti
Il modello serve per predire il valore della variabile aleatoria in corrispondenza di un o piu’ Valori della variabile indipendente. I valori predetti possono essere:
- **In sample**. I valori della variabile indipendente in cui si fa la predizione sono nell’ insieme dei dati a disposizione . Posso confrontare le predizioni con i valori osservati nelle stesse ascisse.
><font color="#ff00dd">stimare "quanto bene" il modello si adatta ('fitta') bene ai dati calcolando i residui</font>

- **Out of sample**. I valori della variabile indipendente NON sono nell’ insieme dei dati a disposizione. Non ho quindi nessun termine di confronto per i valori che vengono predetti.

![[Pasted image 20240604174747.png|400]]
#### Il coefficiente r<sup>2</sup>
*E' possibile avere un singolo numero che mi dà indicazioni sulla bontà del modello di regressione lineare semplice rispetto al campione di dati a disposizione*

*il coefficiente **semplice di determinazione** viene calcolato appunto per questo scopo. Esso è definito dalla formula:*
$$r^2=1- \frac{\sum_{i=1}^n(Y_{i}-\hat{Y_{i}})^2}{\sum_{i=1}^n(Y_{i}-\bar{Y})^2}$$
![[Pasted image 20240604175749.png]]

*Si ha che 0 ≤ r<sup>2</sup> ≤ 1. Tanto più r<sup>2</sup> è vicino a 1, tanto più il modello di regressione lineare è **buono**; tanto più è vicino a 0, tanto più il modello **non è rappresentativo** del campione dei dati.*

In quest'ultimo caso l'analista cerca un modello differente da quello lineare per rappresentare i dati (*una regressione non lineare o multivariata che coinvolga più di una variabile per esempio*).

Associato al coefficiente semplice di determinazione *r*<sup>2</sup> si utilizza il *coefficiente semplice di correlazione* *r* che si ottiene come: $$|r|=\sqrt{ r^2 }$$
per quanto riguarda il segno di *r*, si assume il segno della stima di *β*<sub>1</sub> calcolata.

---
Il valore del coefficiente *r*<sup>2</sup> che indica un buon modello non si puo definire a priori. 

Dipende dalla disciplina, di solito nelle discipline scientifiche *r*<sup>2</sup> è maggiore rispetto alle discipline sociali. 
In finanza e marketing, dipende da quali dati stiamo considerando. 

><b><font color="#ff00dd">Attenzione!</font></b> Il coefficiente *r*<sup>2</sup> da solo non ha significato se non c’è effettivamente una dipendenza lineare fra i dati.
#### Librerie python

[Slides](https://virtuale.unibo.it/pluginfile.php/2047577/mod_resource/content/0/slides_regr_note.pdf)-> pg. 39