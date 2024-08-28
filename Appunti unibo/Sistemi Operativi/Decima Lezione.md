## Virtual-Memory Management

***Memoria virtuale*** - _separazione della memoria logica dell'utente dalla memoria fisica_
- Solo parte del programma deve essere in memoria per l'esecuzione
- Lo spazio di indirizzamento (*address space*) logico può essere molto più grande dello spazio fisico
- Consente allo spazio di indirizzamento di essere condiviso da vari processi
- Consente una creazione di processi più efficente

La ***memoria virtuale*** può essere implementata tramite
- *raffinamento di* **Paging**
- *raffinamento di* **Segmentation**

sappiamo che per eseguire un processo dobbiamo spostarlo in memoria centrale, introduciamo la memoria virtuale, in modo da poter caricare in memoria solo le pagine a noi necessarie > **risparmio tempo**

![[Pasted image 20240411094846.png|400]]

grazie alla memoria virtuale possiamo fare lo *swap in* e lo *swap out* di singole pagine, cosa che prima non ci era permessa
![[Pasted image 20240411094933.png|400]]
### Valid-Invalid Bit
per ogni entry della page table è associato un bit valid-invalid 
	(***v*** -> in-memory, ***i*** -> not-in-memory)
inizialmente il bit è sempre settato su ***i***

![[Pasted image 20240411095449.png|200]]

**page table quando alcune pagine non sono in memoria centrale**
![[Pasted image 20240411100059.png|400]]
### Page Fault
se durante l'address translation il bit valid-invalid è ***i*** si ottiene un ***page fault***, ovvero che non è stata trovata la pagina

**step per gestire un page fault**
![[Pasted image 20240411100738.png|400]]
1. Il sistema operativo consulta un'altra tabella per decidere
	- Referenza invalida -> **abort**
	- Solo non in memoria
2. Individua un frame libero
3. *Swappa* la pagina nel frame
4. Resetta le tabelle
5. Setta il validation bit = ***v***
6. Restarta le istruzioni che hanno causato il page fault
---
**==Performance del Paging *Raffinato*==**
![[Pasted image 20240411103828.png|300]]

---
### Page replacement
lo usiamo per prevenire sovraccarico di allocazioni

usiamo un ***dirty bit*** per ridurre l'overhead del trasferimento di pagine, solo le pagine *modificate* sono scritte sul disco

il ***page replacement*** completa la separazione tra memoria logica e fisica

![[Pasted image 20240411105654.png|400]]
![[Pasted image 20240411110152.png|400]]
1. Trova la posizione della pagina desiderata sul disco
2. Trova un frame libero:
	- se c'è usalo
	- se non c'è, usa un ***page replacement algorithm*** per selezionare un fram **victim**
3. Sposta la pagina desiderata nel (*nuovo*) frame libero, aggiorna le pagine e le frame tables
4. Restarta il processo
#### Page replacement algorithm
vuole il più basso page-fault-rate possibile

valuta un algoritmo eseguendolo su una particolare stringa di referenze alla memoria (reference string) e computando il numero di page fault su quella stringa

![[Pasted image 20240411110847.png|400]]
##### FIFO
![[Pasted image 20240411111147.png|350]]
questo algoritmo non considera l'**uso effettivo** delle pagine, prende sempre la prima, non sa quale gli serva di più e quale di meno, non sa il **valore delle pagine**
##### Algoritmo ottimale
![[Pasted image 20240411112909.png|400]]

![[Pasted image 20240626194016.png|400]]
##### LRU - Last Recently Used
![[Pasted image 20240411115308.png|400]]

il futuro prossimo sarà simile al passato prossimo -> i processi cambiano *lentamente*
si sceglie la pagina usata più nel passato per fare lo scambio

<font color="#92cddc">per questo algoritmo bisogna implementare un counter -> associarlo ad ogni pagina e ogni volta che una pagina viene utilizzata scriviamo l'ora (il counter ci da il valore dell'ultimo uso della pagina), confrontando i counter possiamo capire quale pagina è stata utilizzata meno recentemente</font>
<font color="#b2a2c7">oppure implementare uno stack, una lista ordinata, in modo da segnarmi l'ordine di utilizzo</font>
###### LRU Approximation algorithms

Reference bit
- associa ad ogni pagina un bit, inizialmente = 0
- quando una pagina è '*referenced*' il bit diventa = 1
- rimpiazza la pagina con bit = 0 se ce n'è una
Second chance
- ha bisogno del reference bit
- clock replacement
- se la pagina da essere rimpiazzata (con l'ordine del clock) ha bit = 1
	- setta il bit a 0
	- lascia la pagina in memoria
	- rimpiazza la prossima pagina (con l'ordine del clock), soggetta alle stesse regole

![[Pasted image 20240411121835.png|400]]
### Allocation of Frames
ogni processo ha bisogno di un *numero minimo* di pagine
	*certe volte individuare un frame libero costa *l'eliminazione* di una pagina*

*Ex. IBM 370 - 6 pages to handle SS MOVE instruction*
- *l'istruzione è 6 byte, potrebbe entrare in 2 pagine
- *2 pagine per tenere from*
- *2 pagine per tenere to*

2 schemi allocativi principali:
- fixed allocation
- priority allocation
#### Fixed allocation
- ***equal allocation*** - si dividono i frame ai processi in parti uguali
- ***proportional allocation*** - alloca in base alla dimensione del processo

$$ s_{i}= \text{dimensione del processo } p_{i}$$$$S=\sum s_{i}$$ $$m = \text{numero totale di frames}$$
$$a_{i} = \text{allocazione per } p_{i}=\frac{s_{i}}{S}m$$
#### Priority Allocation
usa uno *schema di allocazione proporzionale* utilizzando le priorità piuttosto che la dimensione

se un processo P<sub>i</sub> genera un **page fault**
- seleziona per il *replacement* un suo frame
- seleziona per il *replacement* un frame di un processo con priorità inferiore

---
**==Global vs Local Allocation==**
- **Global** - il processo seleziona un *replacement frame* dal set di tutti i frame, un processo può prendere un frame da un altro
- **Local** - il processo seleziona solo dal suo set di frame allocati
---
### Trashing
![[Pasted image 20240417123901.png|400]]

il **trashing** è un rischio importante della memoria centrale, dobbiamo capire cosa succede alla memoria virtuale al variare del livello di multiprogrammazione
	ottengo un più alto livello di multiprogrammazione *con la memoria virtuale*

Obiettivo costante > liberare l'uso della CPU, non voglio un basso rate di utilizzo

Se un processo non ha abbastanza pagine, **il rateo di page-fault è molto alto**, questo dipende da:
- poco utilizzo della CPU
- il sistema operativo pensa sia necessario aumentare il livello di multiprogrammazione
- un altro processo aggiunto al sistema
>quando il processore è poco utilizzato **bisogna** aumentare il livello di multiprogrammazione

***Trashing*** = <u>un processo è occupato a swappare pagine in e out</u>
	aumenta la frequenza di page-fault e ciò comporta una diminuzione dell'attività della CPU

![[Pasted image 20240411110847.png|400]]
### Monitoraggio del Working Set
il SO sa che dopo un certo timing il processo *genererà un certo numero di page fault*, se il SO si accorge che il processo sta causando troppi page fault avrà bisogno di altri frame per lavorare
	***il working set di quel processo***

![[Pasted image 20240417125710.png|500]]

[[Sistemi Operativi/Undicesima Lezione|Next]]

