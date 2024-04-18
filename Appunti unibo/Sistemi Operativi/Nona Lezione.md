## Memory-management Strategies
quando si parla di gestione della memoria intendiamo la _memoria centrale_ (**RAM**)

==obiettivo SO== -> sfruttare al meglio la RAM e assicurarsi che i processi presenti non si danneggino a vicenda

un paio di **base** e **limit** registers definiscono lo spazio degli indirizzi logici
![[Pasted image 20240320125425.png|250]]

la memoria centrale è composta da _celle numerate_, e quando chiamo un comando devo specificare il numero della cella con cui interagire

---
![[Pasted image 20240320130556.png|250]]

L'associazione degli indirizzi di istruzioni e dati agli indirizzi di memoria può avvenire in tre fasi diverse 
- _**Compile time**_: Se la locazione di memoria è nota a priori, è possibile generare _==codice assoluto==_; È necessario ricompilare il codice se la posizione iniziale cambia 
- _**Tempo di caricamento**_: Deve generare _==codice rilocabile==_ se la posizione di memoria non è nota in fase di compilazione 
- ***Tempo di esecuzione***: associazione ritardata fino alla fase di esecuzione se il processo può essere spostato durante la sua esecuzione da un segmento di memoria all'altro. È necessario il supporto hardware per le mappe degli indirizzi (ad esempio, registri di base e limite)
---
### Indirizzi Logici vs Fisici

Il concetto di uno spazio di indirizzamento logico associato a uno spazio di indirizzi fisico separato è fondamentale per una corretta gestione della memoria 
- ==***Indirizzo logico***== - generato dalla CPU; Detto anche indirizzo virtuale 
- ==***Indirizzo fisico***== - indirizzo visualizzato dall'unità di memoria 
 
Gli indirizzi logici e fisici sono gli stessi negli schemi di associazione degli indirizzi in fase di compilazione e in fase di caricamento. Gli indirizzi logici (virtuali) e fisici differiscono nello schema di associazione degli indirizzi in fase di esecuzione
### Memory-management Unit (MMU)

Dispositivo hardware che esegue il mapping dall'indirizzo virtuale a quello fisico 

Nello schema MMU, il valore nel _**relocation register**_ viene aggiunto a ogni indirizzo generato da un processo utente nel momento in cui viene inviato alla memoria 

Il programma utente si occupa degli indirizzi logici; _non vede mai i veri indirizzi fisici_

**Dynamic relocation using a relocation register**
![[Pasted image 20240320133350.png|300]]
### Swapping
Un processo può essere spostato temporaneamente fuori memoria in un archivio di backup e quindi riportato in memoria per l'esecuzione continua 

**==Backing Store==** - disco veloce abbastanza grande da contenere copie di tutte le immagini di memoria per tutti gli utenti; deve fornire l'accesso diretto a queste immagini di memoria 

**==Roll out, roll in==** - variante di scambio utilizzata per gli algoritmi di pianificazione basati sulle priorità; Il processo con priorità più bassa viene sostituito in modo che il processo con priorità più alta possa essere caricato ed eseguito 

La maggior parte del tempo di swap è il tempo di trasferimento; Il tempo di trasferimento totale è direttamente proporzionale alla quantità di memoria scambiata 

Il sistema mantiene una coda pronta di processi pronti per l'esecuzione che hanno immagini di memoria su disco

![[Pasted image 20240321094353.png|300]]
### Allocazione contigua
Memoria principale solitamente in due partizioni: 
- Sistema operativo residente, di solito tenuto in memoria insufficiente con vettore di interrupt 
- I processi utente vengono quindi mantenuti in *high memory* 
 
Registri di rilocazione utilizzati per proteggere i processi utente l'uno dall'altro e dalla modifica del codice e dei dati del sistema operativo 
- Il ***registro di base*** contiene il valore dell'indirizzo fisico più piccolo 
- Il ***registro limite*** contiene un intervallo di indirizzi logici: ogni indirizzo logico deve essere inferiore al registro limite 
- MMU mappa l'indirizzo logico in modo dinamico

![[Pasted image 20240321094535.png|400]]
Multiple-partition allocation 
- Hole - blocco di memoria disponibile; buchi di varie dimensioni sono sparsi in tutta la memoria 
- Quando arriva un processo, gli viene allocata memoria da un buco abbastanza grande da contenerlo 
- Il sistema operativo conserva le informazioni su: 
	a) partizioni allocate b) partizioni libere (foro)

![[Pasted image 20240321094655.png|400]]
#### Dynamic Storage-Allocation Problem
Come soddisfare una richiesta di dimensione n da una lista di fori liberi 
- ***First-fit***: Assegna il primo buco abbastanza grande 
- ***Best-fit***: Assegna il foro più piccolo che è abbastanza grande; **deve cercare nell'intero elenco**, a meno che non sia ordinato in base alle dimensioni 
	- Produce il buco residuo più piccolo 
	- Soluzione: utilizzare una *lista ordinata*
- ***Worst-fit***: Assegna il foro più grande; deve anche cercare nell'intero elenco 
	- Produce il buco residuo più grande  
First fit e best-fit migliore del worst-fit in termini di velocità e utilizzo dello spazio di archiviazione
### Frammentazione
- **==External Fragmentation==** - La memoria totale esiste per soddisfare una richiesta, ma non è contigua
- **==Internal Fragmentation==** - la memoria allocata può essere leggermente più grande della memoria richiesta; Questa differenza di dimensioni è la memoria interna a una partizione, ma non viene utilizzata 
Ridurre la frammentazione esterna mediante compattazione (***compaction***) 
- Mescola il contenuto della memoria per mettere insieme tutta la memoria libera in un unico grande blocco 
- La compattazione è possibile solo se la rilocazione è dinamica e viene eseguita al momento dell'esecuzione 
- Problema di I/O 
	- Lavoro di latch in memoria mentre è coinvolto nell'I/O 
	- Esegui I/O solo nei buffer del sistema operativo
### Paging
Lo spazio degli indirizzi logici di un processo può essere non contiguo. al processo viene allocata memoria fisica ogni volta che quest'ultima è disponibile 
- Divide la memoria fisica in blocchi di dimensioni fisse chiamati ***frame*** (la dimensione è una potenza di 2, tra 512 byte e 8.192 byte) 
- Divide la memoria logica in blocchi della stessa dimensione chiamate pagine (***pages***)
- Tieni traccia di tutti i frames liberi 
- Per eseguire un programma di dimensioni **n** pagine, è necessario trovare *n* frame liberi e caricare il programma 
- Impostare una tabella delle pagine per convertire gli indirizzi logici in indirizzi fisici 
- Frammentazione interna

L'indirizzo generato dalla CPU si divide in: 
- ***Page number (p)*** - usato come indice in una *tabella di pagine* che contiene l'indirizzo di base di ogni pagina nella memoria fisica 
- ***Page offset(d)*** - combinato con l'indirizzo di base per definire l'indirizzo di memoria fisica che viene inviato all'unità di memoria 
 
![[Pasted image 20240321112537.png|300]]
- Per uno spazio di indirizzamento logico dato 2<sup>m</sup> e dimensione pagina 2<sup>n</sup>

![[Pasted image 20240321114539.png|350]]

**! - non possiamo permetterci di portare tutta la page table in memoria cache -> occuperebbe troppo spazio, _carico soltanto le righe della page table che fano riferimento alle pagine occupate_**
	_per spostare nella cache determinate celle/righe aggiungo una nuova colonna alla page table,
	**quando poi cercherò l'indirizzo fisico nella page table rischierò di dover rimanere molto tempo all'interno della cache per la ricerca**_
#### Memoria Associativa
quindi si sviluppa un _"altro tipo di memoria chache"_

![[Pasted image 20240322133816.png|300]]
La memoria associativa è costituita  da chiavi e info collegate (k<sub>1</sub> - i<sub>1</sub>, k<sub>2</sub> - i<sub>2</sub>, ..) ,quando la consulto, risalgo istantaneamente alle info sulla relativa chiave

chiave = numero pagina
info = numero frame

Traduzione degli indirizzi (p, d)  
- Se p è nel registro associativo, tira fuori il _frame_ # 
- In caso contrario, ottenere il _frame_ # dalla _page table_ in memoria

![[Pasted image 20240322134221.png|400]]
**TLB =** translation look-aside buffers = memoria associativa

TLB hit -> ho trovato ciò che cercavo nella memoria associativa
TLB miss -> non ho trovato ciò che cercavo nella memoria associativa, cerco nella page table

*se non ho trovato ciò che cercavo magari la memoria associativa è piena, cerco di riportare le "associazioni" nella TLB, ma devo seguire un algoritmo per capire cosa andare a sostituire*

_purtroppo con questo schema accedo alla memoria centrale 2 volte per esecuzione, e questo NON va bene_

---
**==Tempo d'accesso effettivo==**

- Ricerca associativa = unità di tempo epsilon
- Si assume che il tempo di ciclo della memoria sia di 1 microsecondo 
- Hit ratio - percentuale di volte in cui un numero di pagina viene trovato nei registri associativi; rapporto relativo al numero di registri associativi 
- Hit ratio = alpha 
- _**Effective Access Time (EAT)**_
$$\text{EAT} = (1+ \epsilon)\alpha + (2 + \epsilon)(1 - \alpha)$$$$= 2 + \epsilon - \alpha$$
>Perchè abbia senso bisogna avere percentuali di _Hit Ratio_ alte
---
#### Memory Protection
Protezione della memoria implementata associando il bit di protezione a ciascun frame 

<b><font color="#245bdb">valid-invalid bit</font></b> associato a ogni cella nella page table:
- _**valid**_ - indica che la page associata si trova all'indirizzo logico del processo, ed è una page "legale"
- ***invalid*** - indica che la page associata <u>non</u> si trova all'indirizzo logico del processo

![[Pasted image 20240322144032.png|350]]
#### Shared Pages

- _**Shared code**_
	- Una copia di codice di sola lettura (rientrante) condiviso tra i processi (ad esempio, editor di testo, compilatori, sistemi di finestre). 
	- Il codice condiviso deve essere visualizzato nella stessa posizione nello spazio degli indirizzi logici di tutti i processi 
- _**Private code and data**_
	- Ogni processo conserva una copia separata del codice e dei dati 
	- Le pagine per il codice e i dati privati possono essere visualizzate in qualsiasi punto dello spazio degli indirizzi logici

![[Pasted image 20240322145401.png|350]]
#### Hierarchical Page Tables
Spezza l'indirizzo logico in page tables multiple, una tecnica semplice è la ***two-level page table*** 
##### Two-Level Page-Table Scheme
se voglio inserire un processo grande in una page table potrebbe occupare troppo spazio o non entrarci nemmeno, per ovviare a questo problema divido il processo in più page table (*in questo caso 2*) -> **avrò bisogno di una struttura per gestire gli indici e le posizioni**

![[Pasted image 20240410122625.png|400]]

Un indirizzo logico (_di una macchina 32-bit con un 1k di dimensione page) è diviso in
- un ***page number*** di 22 bits
- un ***page offset*** di 10 bits

Visto che la *page table* è **paged** (*non entra in un singolo frame, va divisa*), il *page number* è diviso in:
- un ***page number*** di 12 bits
- un ***page offset*** di 10 bits

![[Pasted image 20240410123315.png|300]]
dove p<sub>i</sub> è un indice dentro la **page table esterna**, e p<sub>2</sub> è il piazzamento della pagina nella page table esterna

**==Address-Translation Scheme==**
![[Pasted image 20240410124918.png|450]]




















