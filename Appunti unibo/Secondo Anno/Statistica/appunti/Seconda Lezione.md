## Distribuzioni Discrete
### Variabili Aleatorie

<b><i><u>Definizione.</u></i></b> Una *variabile aleatoria (o casuale) X* è una funzione $$X:S \to R$$
che associa ad ogni elemento *w* ∈ *S* un numero *X(w) = x* ∈ *R*

- Si indicano solitamente le variabili aleatorie con lettere maiuscole e il loro valore (osservato) con lettere minuscole.
- Si dice ***supporto di X*** l'insieme di tutti i possibili valori casuali di un dato esperimento e si indica con <i>S<sub>x</sub></i>.

==**Esempio**== 
*Consideriamo l'esperimento di lanciare una moneta due volte*

S = {TT, TC, CT, CC} 
X(w) = {numero di C}

X(TT) = 0
X(TC) = X(CT) = 1
X(CC) = 2

<i>S<sub>x</sub></i> = {0, 1, 2}

---
### Funzione di densità di probabilità
*Poichè il supporto S<sub>x</sub> di una variabile aleatoria discreta X è un insieme numerabile, è possibile definire una funzione f<sub>x</sub>, detta ==funzione di massa o di probabilità di X (Probability Mass Function - PMF)==*$$f_{x}:S_{x} \to [0,1], \space f_{x}(x)=P(X=x),\space x \in S_{x}$$
*La **PMF** possiede alcune proprietà che derivano dal fatto che il suo valore è una probabilità*
$$\begin{align}
&1. \space f_{x}(x) \geq 0 \space \forall x \in S_{x} \\
&2. \space \sum_{x \in S_{x}} f_{x}(x) = 1 \\
&3. \space P(X (x \in A))= \sum_{x \in A} f_{x}(x) \text{ per ogni evento } A \subset S_{x}
\end{align}$$
*Associati alla **PMF** si hanno i seguenti valori:*
- **media** $$\mu = E[X] = \sum_{x \in S_{x}}xf_{x}(x) $$
- **varianza** $$\sigma^2=\sum_{x \in S_{x}}(x-\mu)^2 f_{x}(x)$$
- **deviazione standard** $$\sigma = \sqrt{\sigma^2}$$
---
==**Esempio**== 
*riprendiamo l'esperimento precedente*

S = {TT, TC, CT, CC} 
X(w) = {numero di C}

X(TT) = 0
X(TC) = X(CT) = 1
X(CC) = 2

<i>S<sub>x</sub></i> = {0, 1, 2}
$$f_{x}:S_{x} \to [0,1], \space f_{x}(x)=P(X=x)$$
f<sub>x</sub>(0) = P(X = 0) = 1/4
f<sub>x</sub>(1) = P(X = 1) = 1/2
f<sub>x</sub>(2) = P(X = 2) = 1/4

f<sub>x</sub>(0) + f<sub>x</sub>(1) + f<sub>x</sub>(2) = 1/4 + 1/2 + 1/4 = 1

S<sub>x</sub> = {0, 1, 2}
$$\begin{align}
\mu &= E[X] = \sum_{x \in S_{x}}xf_{x}(x) \\
&=0f_{x}(0)+1f_{x}(1)+2f_{x}(2) \\
&=0 \cdot \frac{1}{4}+1 \cdot \frac{1}{2} +2 \cdot \frac{1}{4} = \frac{1}{2} + \frac{1}{2} = 1
\end{align}$$

$$\begin{align}
\sigma^2&=\sum_{x \in S_{x}}(x-\mu)^2 f_{x}(x) \\
&=(0-1)^2 f_{x}(0)+(1-1)^2 f_{x}(1) + (2-1)^2 f_{x}(2) \\
&=1 \cdot \frac{1}{4}+0 \cdot \frac{1}{2}+1 \cdot \frac{1}{4}= \frac{1}{4} + \frac{1}{4} = \frac{1}{2}
\end{align}$$

$$\sigma = \sqrt{ \sigma^2 }=\frac{1}{\sqrt{ 2 }}$$

---
<b><i><u>Definizione.</u></i></b> *Si dice ==funzione di ripartizione o di distribuzione di una variabile aleatoria discreta (Cumulative Distribution Function - CDF) F<sub>x</sub>(t)== la funzione:* $$F:R \to [0,1] \space F_{x}(t) = P(X \leq t), \space -\infty < t < \infty$$
*La **CDF** soddisfa le seguenti proprietà*
$$\begin{align}
&1. \space F_{x}(t) \text{ è non decrescente} \\
&1. \space F_{x}(t) \text{ è continua a destra, cioè: } \lim_{ n \to a^+}F_{x}(t) = F_{x}(a) \\
&3. \text{ vale: } \lim_{ t \to -\infty } F_{x}(t)=0 \text{ e }\lim_{ t \to +\infty }F_{x}(t)=1  
\end{align}$$
### Distribuzione discreta uniforme
![[Pasted image 20240507165804.png|500]]

==**Esempio**== 
*Lancio un dado e sia X = {il risultato del lancio}*

S<sub>x</sub>=1,...,6
f<sub>x</sub>(x) = 1/6 ∀x ∈ \[1,6]

μ = 1/6 + 2/6 + 3/6 + 4/6 + 5/6 + 6/6 = 21/6 = 3.5
σ<sup>2</sup> = (6<sup>2</sup> - 1)/12 = 35/12
### Distribuzione binomiale
*La **distribuzione binomiale** si basa sul ==processo di Bernoulli==, che è un esperimento casuale che ha <i><u>solo</u></i> due possibili risultati: successo(**S**) o insuccesso (**I**).*

*Sia X la variabile aleatoria tale che: {X=0 se S, X=1 se I}, p la probabilità di successo del singolo processo, la **PMF** è:* $$f_{x}(x)=p^x(1-p)^{1-x}, \space x = 0,1, \space S_{x}={0,1}$$
Si ha che *μ = p* e *σ<sup>2</sup> = np(1-p)*

**==Esempio==**
*Lancio di una moneta*
*X* = {*X* = 0 se esce T, *X* = 1 se esce C}
*p* = 0.5

*f<sub>x</sub>(0) = p<sup>0</sup>(1-p)<sup>1-0</sup> = 0.5<sup>0</sup>(1-0.5)<sup>1</sup> = 1 \* 0.5 = 0.5*
*f<sub>x</sub>(1) = p<sup>1</sup>(1-p)<sup>1-1</sup> = 0.5<sup>1</sup>(1-0.5)<sup>0</sup> = 0.5 \* 1 = 0.5*

**==Esempio==**
*Nascita di un figlio*
*X* = {*X* = 0 se Maschio, *X* = 1 se Femmina}
*p* = 0.52

*f<sub>x</sub>(0) = p<sup>0</sup>(1-p)<sup>1-0</sup> = 0.52<sup>0</sup>(1-0.52)<sup>1</sup> = 1 \* 0.48 = 0.48*      *probabilità che nasca un maschio*
*f<sub>x</sub>(1) = p<sup>1</sup>(1-p)<sup>1-1</sup> = 0.52<sup>1</sup>(1-0.52)<sup>0</sup> = 0.52 \* 1 = 0.52*      *probabilità che nasca una femmina*

Il modello binomiale si basa su 3 principi:
- È costituito da *n* processi di Bernoulli
- I processi sono tra loro indipendenti
- ogni processo ha la stesso probabilita *p* di successo

*Se X è la variabile aleatoria che conta i successi negli n processi, allora la PMF di X è:* 
$$f_{x}(x)= \begin{pmatrix}
n \\
x
\end{pmatrix} p^x(1-p)^(n-x), \space x=0,1,\dots n.$$
Si ha che la media della distribuzione è *μ = np* e la varianza *σ<sup>2</sup> = n(n-1)p<sup>2</sup>*

**==Esempio==**
*In una famiglia di 5 figli, sia X = {numero di femmine}. Se supponiamo che la nascita di un maschio abbia probabilità 49% e quella di una femmina 51%, qual è la probabilità P(X=2)?*

*n* = 5
*p* = 0.51
*x* = 2
$$f_{x}(2)=\begin{pmatrix}
5 \\
2
\end{pmatrix} 0.51^20.49^3=0.306\dots$$
**==Esempio==**
*Lancio di 5 dadi contemporaneamente. Sia X = {numero di 6 che escono}. calcolare di ottenere un numero di 6 nell'intervallo \[3,5]*

>*Ogni dado lanciato rispetto ad avere come risultato 6 è un processo di Bernoulli con probabilità   p = 1/6*

*Dobbiamo calcolare P(3 ≤ X ≤ 5). Quindi:* $$P(3\leq X\leq 5) = \sum_{x=7}^9\begin{pmatrix}
5 \\
2
\end{pmatrix} (1/6)^x(5/6)^{5-x}$$
>boh questa non la capisco, per me dovrebbe essere:$$P(3\leq X\leq 5) = \sum_{x=3}^5\begin{pmatrix}
5 \\
x
\end{pmatrix} (1/6)^x(5/6)^{5-x}$$


*Oppure posso scrivere:*$$P(3\leq X\leq 5) = P(x \leq 5) - P(x \leq 2)=F_{x}(5) - F_{x}(2)$$
### Distribuzione di Poisson
*La **distribuzione di Poisson** è connessa con eventi 'rari' quali l'arrivo di un cliente in banca, un auto da un benzinaio, errori tipografici, ricettore di particelle su un sensore, incidenti, ecc.*

*Se λ è la media dell'evento nell'intervallo di tempo \[0,1], e X = {numero di eventi che accadono nell'unità di tempo} allora la PMF di X è:*$$f_{x}(x)=e^{-\lambda} \frac{\lambda^x}{x!}, \space x = 0,1,\dots$$
*Se invece la variabile aleatoria X={numero di eventi che accadono nell'intervallo \[0,t], e λ è sempre la media degli eventi che accadono nell'unità di tempo \[0,1], allora la PMF di X è:*
$$f_{x}(x)=e^{-\lambda t} \frac{(\lambda t)^x}{x!}, \space x = 0,1,\dots$$
*In questo caso media e varianza coincidono: μ = σ<sup>2</sup> = λ*

**==Esempio==**
*Sia λ = 25 media dei clienti in un'ora*

1) *Qual è la probabilità che arrivino 30 clienti dalle 9 allle 11?*
	*x = 30*
	*t = 2 => \[0,2] (2 ore di lasso di tempo)*
$$f_{x}(30)=e^{-\lambda t} \cdot \frac{(\lambda t)^x}{x!} = e^{-50} \cdot \frac{50^{30}}{30!}$$
2) *Qual è la probabilità che arrivino 10 clienti tra le 9 e le 9.30?*
	*\[0,1/2] -> t = 1/2*
$$f_{x}(10) = e^{12.5} \cdot \frac{12.5^{10}}{10!}$$


