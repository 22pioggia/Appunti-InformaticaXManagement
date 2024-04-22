## Multiprogrammazione

##### Feature del SO per la multiprogrammazione
- Routine di I/O fornita dal sistema
- Gestione di memoria
		 il sistema deve allocare la memoria per più processi
- CPU scheduling
		 il sistema deve scegliere tra più processi da eseguire
- Allocazione di Dispositivi

##### Time-sharing Systems - Interactive Computing

l'utente esige che il sistema sia totalmente 'responsive', deve dare un output di ritorno il prima possibile -> l'utente vuole avere la sensazione che il dispositivo sia interamente dedicato a lui

- The CPU is multiplexed among several jobs that are kept in memory and on disk (the CPU is allocated to a job only if the job is in memory). 
- A job is swapped in and out of memory to the disk. 
- On-line communication between the user and the system is provided; when the operating system finishes the execution of one command, it seeks the next “control statement” not from a card reader, but rather from the user’s keyboard. 
-   On-line system must be available for users to access data and code



##### Personal-Computer Systems
>questi sistemi sono molto comodi per chi deve fare un utilizzo semplice del computer, senza aver bisogno di features di protezione avanzate della CPU
- Personal Computer
		computer dedicato a un singolo utente
- Dispositivi I/O

##### Parallel Systems
- Sistemi multiprocesso con più di una CPU in stretta comunicazione. 
- Tightly coupled system 
	_i processori condividono memoria e un clock; di solito la comunicazione avviene tramite memoria condivisa._ 
- Vantaggi dei parallel systems: 
	- Throughput incrementato 
	- Economico
	- Maggior affidabilità 
		- graceful degradation 
				_l'abilità di un sistema di mantenere limitate funzionalità anche quando una grande porzione di esso è stata distrutta o resa non operativa_
		- fail-soft systems
				_a seguito di un guasto, il sistema è in grado di fornire solo alcune funzionalità oppure tutte le funzionalità ma con performance ridotte_
- Symmetric multiprocessing (SMP) 
	- Ogni processore esegue una copia identica del sistema operativo. 
	- Più processi possono essere eseguiti contemporaneamente senza perdita di performance. 
	- Gran parte dei sistemi operativi moderni supportano SMP. 
- Asymmetric multiprocessing 
	- Ogni processore ha assegnata un'istruzione precisa; _"**master processor** schedules and allocates work to **slave processors**._ 
	- Più comune in sistemi estremamente vasti.

##### Real-Time Systems
- Spesso utilizzati come dispositivi di controllo, come per controllare esperimenti scientifici, sistemi di monitoraggio medici, sistemi di controllo industriali e qualche sistema dispositivo.
- Well-defined fixed-time constraints. 
- Hard real-time system. 
	- Archivio secondario limitato o assente, i dati sono archiviati in memorie di breve durata (volatili), o read-only memory (ROM). 
	- Conflitti con sistemi di time-sharing, non supportati dai sistemi operativi di uso comune. 
- Soft real-time system 
	- Limitata utilità in controllo industriale o robotica. 
	- Utili nelle applicazioni(multimedia, realtà virtuale) che richiedono features avanzate del sistema operativo.


##### Distributed Systems
- Distribuisce il calcolo ai vari processori fisici. 
- Loosely coupled system 
		_ogni processore ha la sua memoria locale; i processori comunicano tra loro tramite varie linee di comunicazione, come bus ad altà velocità o linee telefoniche. 
- Vantaggi dei sistemi distribuiti: 
	- Condivisione di risorse (Resources Sharing) 
	- maggior rapidità di calcolo 
	- Bilanciamento del carico (load sharing)
	- Affidabilità 
	- Comunicazioni



## Computer-System
### Struttura
- Computer System Operation 
- I/O Structure 
- Storage Structure 
- Storage Hierarchy 
- Hardware Protection 
- General System Architecture
### Architettura

![[Pasted image 20240222120116.png|600]]

- CPU 
		_molto veloce, lavora a cicli (nanosec)_
- Memorie e periferiche
- BUS
		_"cavi" relativamente rapidi_
- Controllers
		_circuito integrato situato nell'interfaccia della periferica_
- Driver
		_si occupa del dialogo tra processore e periferica_

### Operazioni
- I/O devices and the CPU can execute concurrently. 
- Each device controller is in charge of a particular device type. 
- Each device controller has a local buffer. 
- CPU moves data from/to main memory to/from local buffers 
- I/O is from the device to local buffer of controller. 
- Device controller informs CPU that it has finished its operation by causing an interrupt.

### Von Neumann Computer

![[Pasted image 20240222121116.png|600]]
il processore è diviso in:
- ALU
		svolge i calcoli
		![[Pasted image 20240222121406.png|500]]
-  Control unit
		il vero e proprio cervello, decide la prossima istruzione da eseguire, lavora con la memoria centrale
		![[Pasted image 20240222122918.png|500]] ^d81ac6
	- Fetch unit
			_recupera le istruzioni dalla memoria centrale_
	- Decode unit
			_capisce cosa bisogna fare_
	- Execute unit
			_esegue l'operazione_
	- PC - Program Counter
			_registro che contiene la cella di memoria con l'istruzione da eseguire_
	- IR - Instructure Register
			_per eseguire l'istruzione va inserita qui_
- Memory unit
		![[Pasted image 20240222121755.png|500]]
- un __elevatissimo__ numero di transistors (dimensione minuscola, più piccolo di un virus)	

##### Linguaggio di alto livello vs Assembly vs Machine language
![[Pasted image 20240222122109.png|500]] 
![[Pasted image 20240222122817.png|500]]
questa differenza diventa fondamentale nel contesto di interferenza di processi
**istruzioni di alto livello possono diventare lunghissime in assembly, questo potrebbe causare problemi**

[[Appunti unibo/Sistemi Operativi/Seconda Lezione|Next]]