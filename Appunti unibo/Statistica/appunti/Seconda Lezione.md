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











