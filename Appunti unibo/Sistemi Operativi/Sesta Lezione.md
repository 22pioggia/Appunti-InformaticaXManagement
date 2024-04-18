## Process Scheduling

<u>lo _**scheduling**_ serve a gestire l'ordine con cui i processi sono gestiti</u>

**_cosa ci interessa ottimizzare?_** 
- livello di utilizzo della CPU
- cicli di burst della CPU
	_periodo in cui il processo utilizza il processore e si utilizzano le periferiche I/O_

![[Pasted image 20240306122111.png|200]]
### CPU Scheduler
_seleziona tra i processi pronti all'esecuzione (**ready**) e alloca la CPU a uno di loro_

le decisioni del **CPU scheduling** avvengono quando un processo
- Passa da _**running**_ a _**waiting**_
- Passa da _**running**_ a _**ready**_
- Passa da _**waiting**_ a _**ready**_
- Termina

ci interessano i moduli _**==short time scheduling==**_, ovvero quelli che si occupano di decidere quale processo in stato ready far partire (_e quindi spostare sul processore_), diversi dai _**==long time scheduling**==_, che decidono quale processo portare sulla memoria centrale

quando ci sono problemi con la memoria centrale entra in gioco il _**==medium time scheduling==**_, che si occupa di liberare la memoria interrompendo temporaneamente certi processi e spostandoli in memoria secondaria, _interviene raramente_

un algoritmo può essere
- **==nonpreemptive==**
	_non interviene su un processo **running**  finchè a cose da fare con il processore_
- **==preemptive==**
	_se un algoritmo è preemptive un processo non ha la certezza di terminare tutte le sue azioni prima di essere interrotto_
### Criteri di Scheduling
- **Utilizzo della CPU** - _voglio tenere la CPU più impegnata possibile_
- **Troughput** - _numero di processi che completano l'esecuzione per unità di tempo_
- **Turnaround time** - _tempo complessivo di esecuzione di un determinato processo_
- **Waiting time** - _tempo che un processo aspetta nella **ready queue**_
- **Response time** - _tempo trascorso tra l'invio di un comando (**richiesta**) e la sua esecuzione_
>voglio portare l'utilizzo della CPU e il troughput al **_massimo_** e il turnaround, waiting e response time al **_minimo_** 
### First-Come, First-Served - FCFS
in questo algoritmo i processi vengono eseguiti in base all'arrivo -> primo arrivato = primo eseguito
>non sempre l'ordine d'arrivo è il miglior ordine di esecuzione -> waiting time molto variabile

è molto semplice da implementare, forse il più facile, basta un array

**Esempio**
![[Pasted image 20240306125919.png|350]]![[Pasted image 20240306125846.png|350]]
### Shortest-Job-First - SJF
associa ad ogni processo la lunghezza del suo burst time e usa queste lunghezze per far partire prima i processi più rapidi -> <font color="#ff0000">NON IMPLEMENTABILE</font>

>purtroppo si evince subito un problema sostanziale = _**i processi lunghi potrebbero aspettare per sempre**_

Due varianti
- _**preemptive**_ - _noto anche come Short Remaining Time First - SRTF_
- _**nonpreemptive**_

![[Pasted image 20240307093822.png|400]]
![[Pasted image 20240307093850.png|400]]

**_come facciamo a stimare i comportamenti futuri di un processo?_**
>	_tramite il principio di località_

noi sappiamo che il comportamento di un processo cambia in maniera molto lenta e a noi interessa **l'immediato futuro** -> il periodo di CPU burst
_possiamo pensare di approssimare questo periodo guardando al passato_

per fare previsioni sul CPU burst guardando al passato si usa questa formula
$$\text{1. }t_{n}=\text{ actual lenght of }n^{th} \text{ CPU burst}$$
$$\text{2. }T_{n+1}= \text{ predicted value for the next CPU burst}$$
$$\text{3. } \alpha, 0\leq \alpha\leq 1$$
$$\text{4. Define }\tau_{n=1}=\alpha t_{n} + (1 - \alpha)\tau_{n}$$
**Esempio**
![[Pasted image 20240307101235.png|400]]
### Priority Scheduling
_per gestire la priorità associamo ad ogni processo un intero, la CPU è allocata al processo con la priorità più alta (**intero più piccolo -> priorità più alta** <font color="#ff0000">di solito</font>)_

>ad esempio SJF è un algoritmo di scheduling con priorità, dove la priorità è il prossimo CPU burst time

Problema = **==Starvation==**
	_processi con priorità bassa potrebbero non essere mai eseguiti_
Soluzione = **==Aging==**
	_più il tempo passa più la priorità del processo aumenta_
>dall'**aging** intuiamo che i processi siano strutture dinamiche
### Round Robin - RR
_è la politica dietro ai sistemi di timesharing e interattivi -> ottimizza parecchio il **response time**_

_ogni processo riceve una piccola unità di tempo (**quanto di tempo, time quantum**), di solito 10-100 millisecondi. Dopo che questo è passato, il processo viene **preempted** e inserito alla fine della **ready queue**_

>quando il quanto scade, arriva una interrupt - _dal clock_ - che mi dice di riallocare la CPU

_se ci sono n processi nella ready queue e il quanto di tempo è q, allora ogni processo riceve **1/n** del tempo della CPU in lotti di massimo tempo q per volta. Nessun processo aspetta più di **(n-1)q** unità di tempo_

**Performance**:
- **q grande** -> FIFO
- **q piccola** -> q deve essere grande rispetto ai context switch, altrimenti quest'ultimo occuperebbe troppo tempo e si eseguirebbero i processi spesso ma per poco tempo
	>_quindi dobbiamo scegliere un quanto di tempo adeguato in base a quanti context switch vogliamo si verifichino_

![[Pasted image 20240307111802.png|400]]

**Esempio**
q = 4
![[Pasted image 20240307110406.png|400]]
### Multilevel Queue
la ready queue è suddivisa in queue separate:
- **foreground** - interactive
- **background** - batch
ognuna con il suo algoritmo di scheduling
- foreground -> RR
- background -> FCFS

![[Pasted image 20240307112325.png|400]]
>se un processo è in ready da troppo tempo viene spostato su di un livello di priorità (**aging**), avendo più possibilità di essere eseguito nel breve -> questo per evitare **starvation**
### Multiple-Processor
**Modalità**
- _utilizziamo una singola lista come **ready queue** per servire tutti i processori, purtroppo questo complica la gestione delle **memorie cache**_
- _utilizziamo diverse ready queue, una per processore -> problema di **balancing**, bilanciare il lavoro tra i processori, per evitare ciò il SO può spostare (**migrare**) un processo da una queue all'altra, ovviamente sceglierà un processo che non incide troppo _

[[Appunti unibo/Sistemi Operativi/Settima Lezione|Next]]

