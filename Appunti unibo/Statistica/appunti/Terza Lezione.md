## Distribuzioni continue
*quando una variabile aleatoria ha il supporto coincidente con un intervallo di numeri reali,                S<sub>x</sub> = \[a, b], è dette variabile aleatoria continua*

*Esempi di variabile aleatoria conitnua possono essere l'altezza o il peso di una persona, la durata di un evento in tempo*
### Funzioni di variabili casuali continue - PDF e CDF
*Se X è una variabile aleatoria continua, si definisce **funzione di densità di probabilità (PDF)** f<sub>x</sub> associata a X la funzione* $$f_{x}:S_{x} \to R, \space S_{x} = [a,b]$$
*tale che*$$p(X \in A) = \int_{A} f_{x}(x) \, dx, \space A=[c,d]\subset[a,b]$$
- L'insieme A è a sua volta un intervallo \[c,d] ⊂ \[a,b], oppure un unione di intervalli contenuti in \[a,b]. Quindi: $$P(c\leq X\leq d)=\int_{c}^d f_{x}(x) \, dx $$
	è l'area sottesa dalla funzione f<sub>x</sub> nell'intervallo \[c,d].
- In particolare P(X = c) = 0, ∀c, poichè l'area sottesa da una retta è nulla

Valgono per la PDF proprietà analoghe a quelle viste per la PMF: 
$$\begin{align}
&1. \space f_{x}(x) \geq 0 \space \forall x \in S_{x} \\
&2. \space \int_{x \in S_{x}}f_{x}(x)=1 \, dx 
\end{align}$$
*Se X è una variabile aleatoria continua, si definisce anche la **funzione di ripartizione o di distribuzione di X (CDF)** F<sub>x</sub>(t):* $$F_{x}(t) = P(X \leq t), \space -\infty<t<\infty.$$
Anche per la CDF valgono le proprietà viste per la CDF di variabili discrete:
$$\begin{align}
&1. \space F_{x}(t) \text{ è non decrescente} \\
&2. \text{ vale: } \lim_{ t \to -\infty }F_{x}(t)=0 \text{ e }\lim_{ t \to \infty }F_{x}(t)=1
\end{align}$$
Si definiscono anche nel caso continuo i seguenti valori particolari per le distribuzioni:
- **media** $$\mu = EX = \int_{x \in S_{x}}xf_{x}(x) \, dx, \space S_{x} =\int_{a}^bxf_{x}(x) \, dx, \space S_{x} = [a,b] $$
- **varianza** $$\sigma^2 = \int_{x \in S_{x}}(x-\mu)^2 f_{x}(x) = \int_{a}^b(x-\mu)^2 f_{x}(x) \, dx $$
- **deviazione standard** $$\sigma = \sqrt{ \sigma^2 }$$
**==Esempio==**
*Supponiamo che X abbia la PDF f(x) = 3x<sup>2</sup>, 0 < x < 1*

1. *Calcolare la probabilità che X sia nell'intervallo \[0.2, 0.65]*

	P(0.2 ≤ x ≤ 0.65) ? 
	\[0.2, 0.65] = \[c,d] ⊂ \[a,b] = \[0,1]
	$$P(0.2 \leq x \leq 0.65) = \int_{0.2}^{0.65}3x^2 \, dx $$
2. *Calcolare inoltre la media della distribuzione*

$$\mu =\int_{0}^1x3x^2 \, dx =\int_{0}^13x^3 \, dx$$
$$\sigma= \int_{a}^b(x-\mu)^2 3x^2 \, dx$$
### Distribuzione continua uniforme
![[Pasted image 20240227162427.png|]]
![[Pasted image 20240227162451.png]]
### Distribuzione Normale

![[Pasted image 20240227162550.png]]
![[Pasted image 20240227162638.png]]
di solito si usa per errori/rumori

\- per maggiori informazioni [[Distribuzione normale|clicca qui]]

![[Pasted image 20240227163349.png]]
$$CDF \to F_{x}(t) = P(x\leq t)$$
a, b sono gli estremi da valutare
$$F_{x}(b) = P(x\leq b)$$
$$F_{x}(a) = P(x\leq a)$$
$$F_{x}(b)-F_{x}(a) = P(a \leq x\leq b)$$
### Distribuzioni di variabili aleatorie di misura di un tempo di attesa
![[Pasted image 20240227163851.png]]
#### Distribuzione esponenziale
![[Pasted image 20240227164118.png]]
$$\lambda \text{ è la media degli eventi nell'unità tempo}$$
$$x \in S_{x} = [a,b],\space a\geq 0$$
$$\text{la media è }\mu=\frac{1}{\lambda}\text{, e la varianza }\sigma^2=\frac{1}{\lambda^2}$$
### Distribuzione Chi Quadro
==da non fare==
![[Pasted image 20240227164626.png]]
![[Pasted image 20240227164723.png]]


