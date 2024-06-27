## Sincronizzazione
distinguiamo 3 tipi di gestione di processi multipli:
- _**Multiprogramming**_ - più processi su un solo processore - parallelismo <font color="#ff0000">apparente</font>
- _**Multiprocessing**_ - più processi su una sola macchina con processori multipli - parallelismo <font color="#00b050">reale</font>
- _**Distributed Processing**_ - più processi su un insieme di computer distribuiti e indipendenti - parallelismo <font color="#00b050">reale</font>

Esecuzione concorrente: 
>	due programmi si dicono in esecuzione concorrente se vengono eseguiti in parallelo (con parallelismo reale o apparente)

Concorrenza: 
- è l'insieme di notazioni per descrivere l'esecuzione concorrente di due o più programmi 
- è l'insieme di tecniche per risolvere i problemi associati all'esecuzione concorrente, quali comunicazione e sincronizzazione

_Dove possiamo trovare la concorrenza?_ 
- Applicazioni multiple 
	>la multiprogrammazione è stata inventata per condividere del processore da parte di più processi indipendenti 
- Applicazioni strutturate 
>	estensione del principio di progettazione modulare; alcune applicazioni possono essere progettate come un insieme di processi o thread concorrenti ! 
- Struttura del sistema operativo 
>	molte funzioni del sistema operativo possono essere implementate come un insieme di processi o thread

In un singolo processore: 
- processi multipli sono "_alternati nel tempo_" per dare l'impressione di avere un multiprocessore 
- ad ogni istante, al massimo un processo è in esecuzione 
- si parla di _**interleaving**_ 
In un sistema multiprocessore: 
- più processi vengono eseguiti simultaneamente su processori diversi 
- i processi sono "_alternati nello spazio_" 
- si parla di _**overlapping**_
>entrambi presentano gli stessi problemi, riassumibili in uno solo: _**non è possibile prevedere la velocità relativa dei processi**_

**Esempio**
![[Pasted image 20240307120732.png|400]]
**Scenario 1 - Multiprogramming - Corretto**
![[Pasted image 20240307120754.png|400]]
**Scenario 1 - Multiprogramming - Errato**
![[Pasted image 20240307120854.png|400]]
**Scenario 1 - Multiprocessing - Errato**
![[Pasted image 20240307120936.png|400]]
istruzioni Assembly -> istruzioni **<font color="#0070c0">atomiche</font>** (vengono eseguite senza interruzioni) ^e46ab5

I problemi derivano dal fatto che: 
- non è possibile predire gli istanti temporali in cui vengono eseguite le istruzioni 
- i due processi accedono ad una o più risorse condivise
><font color="#ff0000">NON</font> dalla differenza tra **multiprogramming** e **multiprocessing**
### Producer-Consumer problem
_**paradigma dei processi cooperativi**_, processi _producer_ producono informazioni consumate da processi _consumer_
- _**unbounded-buffer**_ non limita la dimensione del buffer
- _**bounded-buffer**_ imposta una dimensione definita

![[Pasted image 20240308133628.png|300]]![[Pasted image 20240308133605.png|300]]
**Bounded Buffer**
>public class BoundedBuffer { 
>	public void enter(Object item) { 
>		// producer calls this method 
>	}
> 
>	public Object remove() { 
>		// consumer calls this method 
>	} 
>	// potential race condition on count 
>	private volatile int count; 
>}

**Metodo enter()**
>// producer calls this method public void enter(Object item) { 
>	while (count == BUFFER_SIZE) 
>		; // do nothing 
>	// add an item to the buffer 
>	++count; 
>	buffer[in] = item; 
>	in = (in + 1) % BUFFER_SIZE; 
>}

**Metodo remove()**
>// consumer calls this method public Object remove() { 
>	Object item; 
>		while (count == 0) 
>			; // do nothing 
>		// remove an item from the buffer 
>		--count; 
>		item = buffer[out]; 
>		out = (out + 1) % BUFFER_SIZE; 
>		return item; 
>}

la cosa che fa scaturire la maggior parte dei possibili errori è **count**, perchè è una variabile **==utilizzata e modificata da più processi contemporaneamente==** -> [[Appunti unibo/Sistemi Operativi/Settima Lezione#^e46ab5|Esempio]]

![[Pasted image 20240308140522.png|300]]![[Pasted image 20240308140601.png|300]]

_come facciamo a risolvere questo problema?_
**impedendo ai processi che utilizzano una risorsa condivisa di utilizzarla in un istante**
>bisogna però fare cautela -> problemi di inefficienza

la parte di un programma o processo che utilizza una risorsa condivisa prende il nome di _**regione critica**_ (_=sorgente di possibili interferenze tra processi_)

>dobbiamo assicurarci che le regioni critiche di due processi non vengano mai eseguite concorrenzialmente (**_mutual exclusion_**)
>**solo un processo può usare contemporaneamente una risorsa condivisa**
#### Soluzioni ai problemi di regione critica

1. _**Mutual exclusion**_
	>Se un processo <font color="#0070c0">P_i</font> sta eseguendo nella sua zona critica, allora nessun altro processo può eseguirsi nella sua zona critica
2. _**Progress**_
	>Se nessun processo sta utilizzando la sua zona critica e esiste un processo che vuole entrare nella propria zona critica, la selezione del processo che vuole entrare in zona critica <u>non può essere posticipato indefinitivamente</u> ^ed117b
3. _**Bounded Waiting**_
	>Deve esistere un limite al numero di volte che altri processi sono autorizzati a entrare nella loro zona critica dopo che un processo ne ha fatto richiesta e prima che la richiesta sia soddisfatta 

**Come gestiamo il problema sezione critica da _programmatori_?**
creiamo dei <font color="#00b050">Worker threads</font>, ovvero quelli che vorranno accedere alla sezione critica
- **i** - identificatore thread
- **mutual exclusion** - arbitro/gestore
dedichiamo un _**arbitro**_ a una zona critica in modo che i thread chiedano all'arbitro prima di utilizzare la sezione critica, poi il thread comunicherà all'arbitro di aver finito
l'**arbitro** tiene traccia di tutte le attività che avvengono nelle zone critiche assegnate

**Worker Thread**
>public class Worker extends Thread { 
>	public Worker(String n, int i, MutualExclusion s) { 
>		name = n; 
>		id = i; 
>		shared = s; 
>	} 
>	public void run() { 
>		/* next*/ 
>	} 
>	private String name; 
>	private int id; 
>	private MutualExclusion shared; 
>}

**metodo run()**
>public void run() { 
>	while (true) { 
>		shared.enteringCriticalSection(id); 
>		// in critical section code shared.leavingCriticalSection(id); 
>		// out of critical section code 
>	} 
>}

**Classe astratta Mutual Exclusion**
>public abstract class MutualExclusion { 
>	public static void criticalSection() { 
>		// simulate the critical section 
>	} 
>	public static void nonCriticalSection() { 
>		// simulate the non-critical section 
>	} 
>	public abstract void enteringCriticalSection(int t); 
>	public abstract void leavingCriticalSection(int t); 
>	public static final int TURN_0 = 0; 
>	public static final int TURN_1 = 1; 
>}
##### Algoritmo 1
>public class Algorithm_1 extends MutualExclusion { 
>	public Algorithm_1() { 
>		turn = TURN_0; 
>	} 
>	public void enteringCriticalSection(int t) { 
>		while (turn != t) Thread.yield(); 
>	} 
>	public void leavingCriticalSection(int t) { 
>		turn = 1 - t; 
>	} 
>	private volatile int turn; 
>}

Si passa da thread0 a thread1, i threads sono arbitrari
>_t0>t1>t0>t1>.._

==**Problema**== = l'arbitro esegue un'alternanza esatta tra i thread, ma non sa se qualcuno ha bisogno di più utilizzi e qualcuno meno, quando uno dei due finisce le esecuzioni in zona critica l'altro perde la possibilità di eseguire -> violata la condizione sul [[Appunti unibo/Sistemi Operativi/Settima Lezione#^ed117b|processo]]
##### Algoritmo 2
>public class Algorithm_2 extends MutualExclusion { 
>	public Algorithm_2() { 
>		flag[0] = false; 
>		flag[1] = false; 
>	} 
>	public void enteringCriticalSection(int t) { 
>		//next
>	} 
>	public void leavingCriticalSection(int t) { 
>		flag[t] = false; 
>	} 
>	private volatile boolean[] flag = new boolean[2]; 
>}

**enteringCriticalSection()**
>public void enteringCriticalSection(int t) { 
>	int other = 1 - t; 
>	flag[t] = true; 
>		while (flag[other] == true) 
>			Thread.yield(); 
>}

- **flag[]** - array che tiene traccia delle richieste dei thread

**Problema** = rischio di _**deadlock**_ prima del _while_, si verifica un _context switch_ dopo aver cambiato il flag a true, poi l'altro thread fa richiesta impedendo ad entrambi di entrare nel ciclo, bloccandoli
##### Algoritmo 3
>public class Algorithm_3 extends MutualExclusion { 
>	public Algorithm_3() { 
>		flag[0] = false; 
>		flag[1] = false; 
>		turn = TURN_0; 
>	} 
>	public void enteringCriticalSection(int t) {/next/ } 
>	public void leavingCriticalSection(int t) {
>		flag[t] = false; 
>	} 
>	private volatile int turn; 
>	private volatile boolean[] flag = new boolean[2]; 
>}

**enteringCriticalSection**
>public void enteringCriticalSection(int t) { 
>	int other = 1 - t; 
>	flag[t] = true; 
>	turn = other; 
>	while ( (flag[other] == true) && (turn == other) ) 
>		Thread.yield(); 
>}

**Soluzione finale** = inseriamo di nuovo _turn_( precedentemente rimosso), quindi se ci troviamo nella situazione di _**deadlock**_ di prima avere un secondo controllo sulla variabile turn ci aiuta, uno dei due threads avrà false, e solo uno true
##### Semafori
_Strumento di sincronizzazione che non richiede **busy waiting** (nonostante si aspetti, il processore lavora)_
	noi utilizziamo il **semaforo binario** (<font color="#ff0000">mutex</font>)
possiamo immaginare il semaforo come un _intero_ **S**

P(S) = decrementa la chiave da 1 a 0 -> unica operazione in cui il processo può essere fermato
	quando la chiave è 1 il processo esegue l'operazione, se un processo trova chiave 0 quando fa richiesta significa che un altro processo è in situazione critica, quindi aspetta che finisca e che la chiave torni ad essere 1.
V(S) = incrementa la chiave da 0 a 1

<font color="#ff0000">Problemi</font> = 
- due processi arrivano contemporaneamente ed entrano entrambi in sezione critica
- il solito problema dell'aggiornamento di una variabile
<font color="#00b0f0">Risoluzione</font> = **Semaforo ennario** -> risorsa disponibile da 1 a **n** processi per volta -> possono verificarsi un qualsiasi numero di incrementi e decrementi contemporaneamente senza problemi

può essere utilizzato solo tramite due operazioni <u>indivisibili</u> (**atomiche**)
- P(S): **while** S <= 0 **do** no-op; 
	S--; 
- V(S): S++;
il sistema operativo sa che dovrà garantire l'atomicità a certe instruzioni
	se il while viene verificato <u>non può essere effettuato un context switch</u> prima del decremento

>Semaphore S; // initialized to 1 
>
>P(S);                     permesso di entrare in regione critica 
>CriticalSection() 
>V(S);                     notifica di uscita dalla regione critica

i semafori che attuano **busy-waiting** (quelli che aspettano attivamente nel while) sono detti _**spinlock**_

qualsiasi accorgimento usiamo per limitare il parallelismo va <u>contro l'efficienza</u>, fatto sta che l'obiettivo più importante è la **correttezza**, meglio avere un processo lento che sbagliato
>_conviene usare i semafori in situazioni di sezioni critiche **ridotte** e tempi di attesa **minimi**_

**==Semaforo che elimina il busy-waiting==**
>P(S) { 
>	S--; 
>	if (S < 0) { 
>		add this process to list 
>		block 
>	} 
>} 
>
>V(S) { 
>	S++; 
>	if (S <= 0) { 
>		remove a process P from list 
>		wakeup(P); 
>	} 
>}

Si dispone di una lista di processi bloccati, in modo da aspettare senza processare nulla -> evitiamo il processo di _**spinlock**_

---
**==Sincronizzazione usando i semafori==**
>public class FirstSemaphore { 
>	public static void main(String args[]) { 
>		Semaphore sem = new Semaphore(1); 
>		Worker[] bees = new Worker[5]; 
>		
>		for (int i = 0; i < 5; i++) 
>			bees[i] = new Worker(sem, "Worker " + (new Integer(i)).toString() ); 
>		
>		for (int i = 0; i < 5; i++) 
>			bees[i].start(); 
>	} 
>}

**==Worker thread con semaforo==**
>public class Worker extends Thread { 
>	public Worker(Semaphore) { 
>		sem = s;
>	} 
>	
>	public void run() { 
>		while (true) { 
>			sem.P();
>			// in critical section 
>			sem.V(); 
>			// out of critical section 
>		} 
>	} 
>	private Semaphore sem; 
> }
---
###### Bounded-Buffer problem
non abbiamo garanzie sul fatto che possa entrare _un consumer in un buffer vuoto_ o _un producer in un buffer pieno_
- consumer -> userebbe un remove() in un buffer da cui non può prendere nulla
- producer -> userebbe un enter() in un buffer pieno, sovrascrivendo qualcosa

>public class BoundedBuffer { 
>	public BoundedBuffer() { /next/ } 
>	public void enter() { /next/ } 
>	public Object remove() { /next/ } 
>	
>	private static final int BUFFER_SIZE = 2; 
>	private Semaphore mutex; 
>	private Semaphore empty; 
>	private Semaphore full; 
>	private int in, out; 
>	private Object[] buffer; 
>}

full, empty -> semafori n-ari
mutex -> semaforo binario

_**empty**_ indica il numero di celle vuote;
_**full**_ quelle piene
sommando empty e full si ottiene buffer_size <font color="#ff0000">SE NON</font> siamo nel codice, ovvero se un semaforo è stato decrementato o incrementato

**==Bounded-buffer constructor==**
>public BoundedBuffer() { 
>	// buffer is initially empty 
>	count = 0; 
>	in = 0; 
>	out = 0; 
>	buffer = new Object[BUFFER_SIZE]; 
>	mutex = new Semaphore(1); 
>	empty = new Semaphore(BUFFER_SIZE); 
>	full = new Semaphore(0); 
>}

**==Metodo enter()==**
>public void enter(Object item) { 
>	empty.P(); 
>	mutex.P(); 
>	
>	// add an item to the buffer 
>	buffer[in] = item; 
>	in = (in + 1) % BUFFER_SIZE; 
>	mutex.V(); 
>	full.V(); 
>}

**==Metodo remove()**==
>public Object remove() { 
>	full.P(); 
>	mutex.P(); 
>	
>	// remove an item from the buffer 
>	Object item = buffer[out]; 
>	out = (out + 1) % BUFFER_SIZE; 
>	
>	mutex.V(); 
>	empty.V(); 
>	return item; 
>}
---
###### Readers-Writers problem
_abbiamo processi **lettori** e **scrittori**, ognuno può solo occuparsi di ciò che il nome esplica_

se più processi leggono in contemporanea, non si infastidiscono tra di loro, situazione differente per i _writers_, questo comporta una semplificazione a livello concorrenziale -> <u>se tanti readers vogliono accedere a una risorsa glielo permetto, non causano interferenze</u>

non sappiamo se _un lettore che arriva in contemporanea con lo scrittore_ leggerà la vecchia o la nuova scritta o ancor peggio, **se unirà/confonderà le informazioni** (_nel caso di risorsa composta_)
	_Es. se ho una risorsa con nome, cognome e via, il lettore può iniziare a leggere, leggendo il nome e il cognome corretto, poi interverrebbe lo scrittore, che modificherebbe il dato, per poi far leggere al lettore una via sbagliata quando riprenderà_

**==Reader==**
>public class Reader extends Thread { 
>	public Reader(Database db) { 
>		server = db; 
>	} 
>	public void run() { 
>		int c; 
>		while (true) { 
>			c = server.startRead(); 
>			// now reading the database 
>			c = server.endRead(); 
>		} 
>	} 
>	private Database server; 
>}

il primo reader che arriva (utilizza startRead()) è come se aprisse la porta per tutti gli altri Readers, loro non hanno bisogno di fare richiesta per leggere, diverso per i Writers, <u>non voglio che Readers e Writers eseguano in contemporaneo</u>
	per farlo ci serve una variabile ReaderCounter, per tenere traccia del numero di lettori (_che come al solito - essendo una variabile incrementata - potrebbe causare interferenze, ecco perchè ha bisogno di un semaforo_)

Attenzione, ci sono casi in cui lettori e scrittori possono eseguire assieme, ma sono casi molto singolari, _ad esempio se lo scrittore deve modificare una piccola variabile come un booleano_

**==startRead()==**
>public int startRead() { 
>	mutex.P(); 
>	++readerCount; 
>	
>	// if I am the first reader tell all others 
>	// that the database is being read 
>	if (readerCount == 1) 
>		db.P(); 
>	
>	mutex.V(); 
>	return readerCount; 
>}

quando readerCount diventa 1 apro la possibilità di accedere ai Readers, qualsiasi quantità essi siano, e chiudo **solo** quando readerCount va a 0 (quando tutti hanno finito di leggere)

**==endRead()==**
>public int endRead() { 
>	mutex.P(); 
>	--readerCount; 
>	
>	// if I am the last reader tell all others 
>	// that the database is no longer being read 
>	if (readerCount == 0) 
>		db.V(); 
>	
>	mutex.V(); 
>	return readerCount; 
>}

nel caso un lettore provi ad accedere mentre sta eseguendo uno scrittore, esso viene bloccato subito dopo l'if, _**bloccando tutta la coda**_, gli altri lettori verranno fermati ancora prima, al _mutex_

questa soluzione potrebbe causare una situazione di _**starvation**_ -> _uno scrittore non riesce mai a eseguire a causa di lettori che continuano ad accedere_

---
**==Writer==**
>public class Writer extends Thread { 
>	public Writer(Database db) { 
>		server = db; 
>	} 
>	public void run() { 
>		while (true) { 
>			server.startWrite(); 
>			// now writing the database 
>			server.endWrite(); 
>		} 
>	} 
>	private Database server; 
>}

**==Metodi Writer==**
>public void startWrite() { db.P(); } 
>public void endWrite() { db.V(); }

!! - conviene introdurre nuovi semafori piuttosto che riusarne di vecchi nel momento in cui il riutilizzo va a causare un problema, tendenzialmente uso un semaforo diverso per ogni sincronizzazione (_che voglio gestire_)

[[Appunti unibo/Sistemi Operativi/Ottava lezione|Next]]





