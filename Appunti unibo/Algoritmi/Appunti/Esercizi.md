##### [[L00-4-Esercitazioni.pdf|Esercizi]]
###### Es 1.1
$$f(n) = \frac{n(n+1)}{2}$$
Dimostrare e confutare le seguenti affermazioni
 $$f(n) = O(n)$$
$$f(n) = O(n^2)$$

utilizziamo la [[Definizioni#O|definizione asintotica]]

1. $$f(n) \le cn $$ $$ \frac{n(n+1)}{2} \le cn$$
$$\Rightarrow \frac{n+1}{2} \le c$$

2. $$\frac{n(n+1)}{2} \le cn^2$$
$$\Rightarrow \frac{n^2+n}{2n^2} \le c$$
$$\frac{1}{2}+\frac{1}{2n} \le c$$
$$\forall n \ge 1,\space\frac{1}{2}+\frac{1}{2n}\le\frac{1}{2}+\frac{1}{2}=1$$

$$c =1,\space n_0=1$$
###### Es 1.2
$$\text{si consideri la funzione } FUN(n)\space con\space n\ge1$$
>Algoritmo Fun(int n) -> int
>	if(n <= 2) then
>		return n
>	else
>		return Fun(n-1) - 2\*Fun(n-2)
>	endif

1. Determinare un limite inferiore sufficientemente accurato dal tempo di esecuzione T(n)
2. Determinare un limite superiore sufficientemente accurato dal tempo di esecuzione T(n)

Risolvo
$$\begin{cases}
 c_{1} \space se \space n \leq 2 \space(n=1, n=2) \\
T(n-1) + T(n-2)+c_{2}\space altrimenti \space n>2
\end{cases}$$

1. Se prendiamo T(n), funzione monotona crescente $$T(n) \geq T(n-1) \implies T(n-1) \geq  T(n-2)$$
$$\implies T(n-1)+T(n-2) +c_{2} \geq T(n-2)+T(n-2) +c_{2}$$
$$\implies T(n) \geq 2T(n-2) +c_{2}$$
$$\implies T(n-2) \geq 2T(n-4) +c_{2}$$
---
$$T(n) = T(n-1)+T(n-2) +c_{2}$$
$$T(n) \geq 2T(n-2)+c_{2}$$
$$T(n)\geq 4T(n-4)+2c_{2}+c_{2}$$
$$T(n)\geq 8T(n-6)+4c_{2}+2c_{2}+c_{2}$$
$$T(n)\geq\dots\geq 2^kT(n-2k)+\sum_{i=0}^{k-1}2^ic_{2}$$
Quando mi fermo? -> quando arrivo a T(1)
$$2^xT(1)+\sum$$
$$n-2k=1$$
$$k = \frac{n-1}{2}$$
Sostituiamo  (k= n-1/2,   assume valori interi se n è dispari, n pari ci da problemi, allora togliamo il -1 e decidiamo di prender la parte intera di n/2)
$$T(n)\geq 2^\left\lfloor  \frac{n}{2} \right\rfloor  T\left( n-2\left\lfloor  \frac{n}{2} \right\rfloor   \right)+\sum_{i=0}^{\lfloor n/2 \rfloor -1}2^ic_{2}$$



Somma nota: $$N=\left \lfloor  \frac{n}{2} \right \rfloor -1,\space q=2$$
$$\sum_{i=0}^{\lfloor n/2 \rfloor -1}2^i= \frac{1-q^{N+1}}{1-q}= \frac{1-2^{\lfloor n/2 \rfloor -1+1}}{1-2}$$
$$T(n)\geq 2^{\lfloor n/2 \rfloor }c_{1}+c_{2}(2^{\lfloor n/2 \rfloor }-1)=2^{\lfloor n/2 \rfloor }(c_{1}+c_{2})-c_{2}$$
---
###### Es 1.3

$$T(n) = \begin{cases}
O(1),\space se\space n\leq 10 \\
nT(n-1)+O(1)\space altrimenti
\end{cases}$$
>Algoritmo FUN(int n) -> int
	y(n<=10)&&(n>0)
	return 1
else
	int a = 0
	for i=1 to n do
		a=a+FUN(n-1)
	endfor
	return a
endif

---
###### Es 1.5
![[Pasted image 20240228101126.png]]

$$T(n)=\begin{cases}
c_{1}\space se \space n\leq 1 \\
2T\left( \frac{n}{2} \right)+c_{2} \space altrimenti
\end{cases}$$
utilizzando il [[Definizioni#Master Theorem|Master Theorem]]
$$a = 2$$
$$b = 2$$
$$f(n)=c_{2}$$
$$T(n)=\theta(n)$$
---
###### Es 2.1
==min heap binario==
	-> albero quasi completo in cui ogni nodo i è diverso dalla radice e soddisfa la seguente proprietà
>il valore memorizzato in **_parent_**(i) è minore o uguale di quello memorizzato nel nodo i

>algoritmo CheckMinHeap(array A[1...n] di double) -> bool
>	for i :=1 to n do
>		if(2*i <= n && A[i] > A[2*i]) then
>			return false
>		endif
>		if(2*i + 1 <= n && A[i] > A[2*i + 1])
>			return false
>		endif
>	endfor
>return true

**!NB!** è possibile rappresentare un heap con n elementi mediante array[1...3] semplicemente memorizzando i valori dello heap "per livelli"
	->l'elemento il cui valore è memorizzato in posizione i avrà i valori _dei figli_ memorizzati negli elementi di posizione 2i e 2i+1
