###### come lavorare agli esercizi?
1. capiamo di che distribuzione si tratta
2. prendiamo la PMF
3. sostituiamo i valori dal testo alla PMF

---

1. Generare lo spazio dei campioni
$$P(A)=\frac{\#A}{\#S}$$
$$1.\space S=\{(1,1),(1,2),(1,3),\dots\},\space \#S=36$$
A = {escono 2 numeri minori di 3}
$$(1,1) (1,2) (2,1) (2,2)$$
$$\#A=4$$
$$P(A)=\frac{\#A}{\#S}=\frac{4}{36}=\frac{1}{9}$$

---

3. estrazione carta mazzo
$$\#S=52$$
A = {asso oppure re}
$$\#A=8,\space P = \frac{8}{52}=\frac{2}{13}$$

---

10. Simulare 500 nascite

maschi = 50%

_capiamo che è una distribuzione binomiale_

qual è la probabilità che nascano 80 maschi?

binomiale
- p = 0.505
- n = 500
- x = 80

b)$$P(x=80) = f_{x}(80) = (500 su80)0.505^{80}(1-0.505)^{500-80}$$
c)$$ P(x<100)=f_{x}(101)=P(x\leq101)$$

---

11. esercizio 11 

_distribuzione di poisson_

$$\lambda=20$$
a)$$P(x=23) = f_{x}(23) = e^{-20}\frac{20^{23}}{23!}$$
b)$$t=\frac{1}{2},\space x=0$$
$$P(x=10)=e^{-10}\frac{10^{10}}{10!}$$

---

$$P(x\geq 30) = 1-F_{x}(30)$$
>se voglio sapere una probabilità **<=** uso la Fx
>se voglio sapere una probabilità **>=** uso 1-Fx




