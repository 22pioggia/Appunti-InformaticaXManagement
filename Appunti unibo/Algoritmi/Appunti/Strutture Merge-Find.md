==Struttura dati per insiemi disgiunti==
- Operazioni fondamentali:
	- Creare n insiemi composti da un singolo elemento; assumiamo che gli insiemi siano {1}, {2}, … {n} 
	- Unire due insiemi 
	- Identificare l'insieme a cui appartiene un elemento 
- Ogni insieme è identificato da un _**rappresentante univoco**_ 
	- Il rappresentante è un qualsiasi membro dell’insieme 
	- Operazioni di ricerca del rappresentante su uno stesso insieme devono restituire sempre lo stesso elemento
	- Solo in caso di unione con altro insieme il rappresentante può cambiare
### Operazioni
- _**Mfset(integer n)**_ 
	- Crea n insiemi disgiunti {1}, {2}, … {n} 
- _**integer find(integer x)**_ 
	- Restituisce il rappresentante dell’unico insieme contenente x 
- _**merge(integer x, integer y)**_ 
	- Unisce i due insiemi che contengono x e y (se x e y appartengono già allo stesso insieme, non fa nulla)
	- Il rappresentante può essere scelto in modo arbitrario; ad esempio, come uno dei vecchi rappresentanti degli insiemi contenenti x e y.

**Esempio**
_i valori sottolineati indicano il rappresentante_
![[Pasted image 20240306100427.png|400]]
## QuickFind
- Ogni insieme viene rappresentato (concettualmente) con un albero di altezza uno 
	- Le foglie dell'albero contengono gli elementi dell'insieme 
	- Il rappresentante è la radice
- Generalmente si rappresentano gli insiemi _**QuickFind**_ con strutture concatenate simili a liste

![[Pasted image 20240306100919.png|400]]

**QuickFind --> merge(3,2)**
![[Pasted image 20240306101214.png|400]]
### Operazioni

- _**Mfset(n)**_ 
	- Crea n liste, ciascuna contenente un singolo intero 
	- Costo O(n) 
- _**find(x)**_ 
	- Restituisce il riferimento al rappresentante di x 
	- Costo O(1) 
- _**merge(x,y)**_ 
	- Tutti gli elementi della lista contenente y vengono spostati nella lista contenente x 
	- Costo nel caso pessimo O(n), essendo n il numero complessivo di elementi in entrambi gli insiemi disgiunti 
		- _Nel caso peggiore l'insieme contenente y ha n - 1 elementi_
## QuickUnion
- Implementazione basata su foresta 
	- Si rappresenta ogni insieme con un albero radicato generico 
	- Ogni nodo contiene 
		- un intero 
		- un riferimento al padre (la radice è padre di se stessa) 
	- Il rappresentante di un insieme è la radice dell'albero corrispondente

**QuickUnion --> merge(2,7)**
![[Pasted image 20240306101952.png|400]]
### Operazioni
- Mfset(n) 
	- Crea n alberi, ciascuno contenente un singolo intero 
	- Costo O(n) 
- find(x) 
	- Risale la lista degli antenati di x fino a trovare la radice e ne ritorna il contenuto come rappresentante 
	- Costo O(n) nel caso pessimo 
- merge(x,y) 
	- Rende la radice dell'albero che contiene y figlia della radice dell'albero che contiene x
	- Costo O(1) nel caso ottimo (x e y sono già le radici dei rispettivi alberi)
		- _O(n) nel caso pessimo_

>**_Un modo molto comodo per rappresentare una foresta di alberi QuickUnion è di usare un array di interi (vettore di padri)_**

![[Pasted image 20240306102129.png|450]]
### Implementazione
==Java==
>public class QuickUnion 
>{ 
>	private int[] p; 
>	public QuickUnion(int n) { 
>		p = new int[n]; 
>		for (int i = 0; i < n; i++) { 
>			p[i] = i; 
>		} 
>	} 
>	private int find(int x) { 
>		while (x != p[x]) { 
>			x = p[x]; 
>		} 
>		return x; 
>	} 
>	public void merge(int x, int y) { 
>		int rx = find(x); 
>		int ry = find(y); 
>		p[ry] = rx; 
>	} 
>}

---
![[Pasted image 20240306103023.png|400]]
- Quando usare _**QuickFind**_? 
	- Quando le merge() sono rare e le find() frequenti 
- Quando usare _**QuickUnion**_? 
	- Quando le find() sono rare e le merge() frequenti 
- Esistono euristiche che permettono di migliorare questi risultati
---
**Ottimizzazioni -> [[Strutture-Merge-Find.pdf]] pag. 36














