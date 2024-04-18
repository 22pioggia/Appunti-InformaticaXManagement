### Problema
Un problema di notevole importanza: 
- determinare come interconnettere diversi elementi fra loro considerando e minimizzando certi vincoli sulle connessioni 

Esempio classico: 
- progettazione dei circuiti elettronici dove si vuole minimizzare la quantità di filo elettrico per collegare fra loro i diversi componenti 

Questo problema prende il nome di: 
- albero di copertura (di peso) minimo 
- albero di connessione (di peso) minimo 
- Minimum Spanning Tree (MST)

### Definizione del problema
![[Pasted image 20240301101433.png|400]]
- **Output**
	_albero di copertura di peso minimo_
- albero di copertura il cui peso totale $$w(T)=\sum_{(u,v)\in T}w(u,v)$$sia minimo, tra tutti i possibili alberi di copertura T
![[Pasted image 20240301101551.png|400]]
---
![[Pasted image 20240301102045.png|400]]
### Algoritmo generico
_vediamo un algoritmo **greedy** generico e due istanze di esso_:
- **Kruskal**
- **Prim**

l'idea è di accrescere un sottoinsieme T di archi in modo tale che venga rispettata la seguente condizione
- T è un sottoinsieme di qualche albero di copertura minimo

un arco {u,v} è detto **sicuro** per T se $$T\space\cup\space \{u,v\}$$ è ancora un sottoinsieme di qualche MST

>Tree Generic-MST(Grafo G=(V,E,w)) 
>	Tree T ← Albero vuoto 
>	while T non forma un albero di copertura do trova un arco sicuro {u, v} 
>		T ← T ∪ {u, v} 
>	endwhile 
>return T

- Archi **blu**
	-> sono gli archi che fanno parte del MST 
- Archi **rossi** 
	-> sono gli archi che non fanno parte del MST

### Definizioni
Per caratterizzare gli archi sicuri dobbiamo introdurre alcune definizioni: 
- Un ==**taglio**== (S, V - S) di un grafo non orientato G = (V, E) è una partizione di V in due sottoinsiemi disgiunti 
- Un arco {u, v} **attraversa il taglio** se $$u \in S \space e \space v \in V-S$$
- Un taglio rispetta un insieme di archi T se nessun arco di T attraversa il taglio 
- Un arco che attraversa un taglio è ==leggero== se il suo peso è minimo fra i pesi di tutti gli archi che attraversano quel taglio
![[Pasted image 20240301105553.png|400]]
### Regole
- Regola del ==**ciclo**== 
	_-> Scegli un ciclo semplice in G che non contenga archi rossi. Tra tutti gli archi non colorati del ciclo, seleziona un arco di costo massimo e coloralo di rosso_
- Regola del ==**taglio**== 
	_-> Scegli un taglio in G che non contenga archi blu. Tra tutti gli archi non colorati che attraversano il taglio seleziona un arco di costo minimo e coloralo di blu_ 
- Metodo ==**greedy**==
	_-> Costruisce un MST applicando, ad ogni passo, una delle due regole precedenti (una qualunque, purché si possa usare)_

==**Esempio**== -> [[L03-1-Minimum-Spanning-Tree.pdf]] pag. 15
### Algoritmo di Kruskal
Idea: 
- Ingrandire sottoinsiemi disgiunti di un albero di copertura minimo connettendoli fra di loro fino ad avere l’albero finale 
	- _Inizialmente la ==**foresta di copertura**== è composta da n alberi, uno per ciascun nodo, e nessun arco_ 
- Si considerano gli archi in ordine non decrescente di peso 
	- _Se l'arco e = {u, v} connette due alberi blu distinti, lo si colora di blu. Altrimenti lo si colora di rosso_ 
- L’algoritmo è greedy perché ad ogni passo si aggiunge alla foresta un arco con il peso minimo

==**Esempio**== -> [[L03-1-Minimum-Spanning-Tree.pdf]] pag. 46
#### Implementazione
Come determiniamo se gli estremi di un arco appartengono allo stesso albero oppure no?
	-> usando le strutture **==merge-find==**

>Tree Kruskal-MST(Grafo G=(V,E,w)) 
>	Tree T ← albero vuoto 
>	MergeFind MF ← new mfset( G.numNodi() ); 
>	// ordina gli archi di E per peso w crescente 
>	sort(E, w) 
>	for each {u, v} ∊ E do 
>		Tu ← MF.find(u) 
>		Tv ← MF.find(v) 
>		if (Tu ≠ Tv) then            // evita i cicli 
>			T ← T ∪ {u, v}        // aggiungi arco 
>			MF.merge(Tu, Tv)  // unisci componenti 
>		endif 
>	endfor 
>return T

#### Costo computazionale
- L'ordinamento richiede tempo ==**O(m log m) = O(m log n2) = O(m log n)**== dove m è il numero di archi e n il numero di nodi 
- Il tempo di esecuzione dipende dalla realizzazione della struttura Merge-Find 
	- Vengono effettuate 2m ==**Find**== e (n - 1) ==**Merge**==, oltre alla creazione della struttura Merge-Find 
- Se usiamo QuickUnion con euristica sul rango, la sequenza di operazioni costa in tutto O((m + n) log n) 
- Totale: ==**O(2m log n + n log n) = O(m log n)**==
### Algoritmo di Prim
L’algoritmo di **Prim** procede mantenendo un singolo albero T che viene fatto “crescere” 
- L’albero parte da un nodo arbitrario ==**r**== (la **radice**) e cresce fino a quando ricopre tutti i vertici 
- Ad ogni passo viene aggiunto l'_**arco di peso minimo**_ che collega un nodo già raggiunto dell'albero con uno non ancora raggiunto

==**Esempio**== -> [[L03-1-Minimum-Spanning-Tree.pdf]] pag. 65
#### Implementazione
- Una struttura dati per i nodi non ancora nell'albero 
	- i nodi non ancora nel MST si trovano in una coda con priorità Q ordinata in base ad un valore d[v] 
	- d[v] è il peso minimo di un arco che collega il nodo v, che non appartiene all'albero, ad un nodo già nell'albero 
		- +∞ se tale arco non esiste 
- Come mantenere l'albero 
	- Mediante il vettore padri p[v] 
- Terminazione: quando l'insieme Q è vuoto 
	- Tutti i nodi tranne la radice conoscono il proprio padre

>int[] Prim-MST(Grafo G=(V,E,w), nodo s) 
>	double d[1..n]; 
>	int p[1..n]; boolean added[1..n]; 
>	CodaPriorita <int, double> Q;
>	for v ← 1 to n do 
>		p[v] ← -1; 
>		added[v] ← false; 
>		if (v\==s) then 
>			d[v] ← 0; 
>		else 
>			d[v] ← +∞ 
>		endif 
>		Q.insert(v, d[v]); 
>	endfor 
>	while (not Q.isEmpty()) do 
>		u ← Q.find(); 
>		Q.deleteMin(); 
>		added[u] ← true; 
>		for each v adiacente a u do 
>			if (not added[v] and w(u,v) < d[v]) then 
>				d[v] ← w(u,v); 
>				Q.decreaseKey(v, d[v]); 
>				p[v] ← u; 
>			endif 
>		endfor 
>	endwhile 
> return p;
#### Costo computazionale
Utilizzando una coda di priorità basata su [[Definizioni#MinHeap|min-heap]] binario 
- n deleteMin() costano _**O(n log n)**_ 
- n insert() costano _**O(n log n)**_
- n find() costano _**O(n)**_ 
- O(m) decreaseKey() costano _**O(m log n)**_ 

Costo computazionale totale: 
- O(2 n log n + n + m log n) = O((n + m) log n) = O(m log n) (se il grafo è connesso)