## Sistema Operativo

##### System call
in una qualunque macchina esistono dei comandi che l'utente può facilmente usare(linguaggio shell(terminale))

---
_Ex. copiare un file su un altro - sembra che stia dialogando con il SO (machine web)_
>cp file1 file2

un programma che implementa _cp_ probabilmente userà delle system call, per occuparsi di:
- leggere i nomi dei file
- aprire il file di input
	_errori possibili: file non esistente, file protetto_
- creare il file di output
- se un file chiamato file2 esiste: cancella il vecchio file2, manda un errore o chiedi all'utente cosa fare
- in caso di errore: manda il messaggio ed esci
- senza errore: un loop dove i caratteri sono letti da file1 e copiati su file2
	_2 system call con possibili errori, Ex. spazio sul disco insufficiente_

---
in realtà queste istruzioni sono di livello superiore rispetto al SO -> sono "system programs" meglio noti come **_utilities_**

le **system call** non sono banali da usare, dipendono strettamente dal SO, utilizzano linguaggi diversi
>**Portabilità** = utilizzare lo stesso programma con linguaggi diversi

principali gruppi di **system call**
- process management
- file manipulation
- device manipulation
- communication
## Struttura del SO
_tempo addietro i Sistemi Operativi erano semplici programmi scritti(di dimensioni ridotte), insiemi di istruzioni a "blocchi monolitici", col tempo questi blocchi di istruzioni sono andati via via ampliandosi_

e qui si figura l'ostacolo più grande -> la possibilità di avere errori(spesso scoperti con software gia in uso)
	con la crescente esigenza che il software venga utilizzato da tutti, diventa necessaria una **garanzia** e una sua versione semplificata

---
si è quindi deciso di dividere il SO in più componenti, ognuna dotata di un interfaccia, essa offre funzionalità alle altre interfacce e si appoggia alle funzionalità degli altri moduli

in questo modo, qualora si trovasse un bug, basterebbe andar modificare solo il modulo relativo alla parte in cui il bug è avvenuto

_Ex. bug in memoria centrale, vado a sistemare il modulo che la gestisce_

purtroppo questa non fu la soluzione più efficiente in quanto utilizzasse un numero di moduli enorme

---
si è così deciso di optare per un architettura a **layers**(livelli)
	l'insieme di moduli non viene trattato come un modello unico, ma gli viene imposto un altro livello di strutture

partendo dall'hardware e arrivando alle interfacce esterne si è pensato di dividere questi spazi in **livelli successivi di astrazione** (_ogni livello si appoggia sul precedente_)

questa struttura è rimasta in uso per parecchio tempo, fino a quando i progressi tecnologici non hanno generato un esplosione in quantità di dispositivi e periferiche 
	-> creando l'esigenza di modificabilità(customization) e quindi l'estensione del SO diventa più importante

---
quindi passiamo alla struttura 
##### Microkernel

quando dobbiamo implementare una nuova risorsa il SO deve introdurre meccanismi e politica per poterlo fare, altro compito del SO è gestire i context switch (passaggio da un processo a un altro)

Il SO può decidere la priorità dei processi, scelta che fa in base alle politiche (diverse che si appoggiano sullo stesso meccanismo)
meccanismi = importantissimi
politica = modificabile

il **kernel** contiene solo le features più essenziali (meccanismi)
- manipolazione di processi e memoria base
- qualche aiuto alla comunicazione, di solito message-passing(la feature più importante del microkernel)

il microkernel è molto più piccolo del SO e dobbiamo fare in modo sia al sicuro

I servizi principali del SO sono aggiunti in cima, come moduli che interagiscono tra loro utilizzando gli aiuti alla comunicazione del microkernel

i vantaggi del **microkernel** sono:
- estenzione 
- portabilità
- facilità di modifica 
	per modificare un servizio, solo un modulo viene toccato
- reliability
	se un servizio fallisce, il resto del SO rimane intoccato

_possiamo già notare innumerevoli somiglianze con i **sistemi distribuiti** (livelli sottostanti, reti implementati che si appoggiano a un unica rete principale, server per la gestione di risorse locali, ecc..)_

## Processi
un **processo** è un **programma** in esecuzione
- esegue le istruzioni poste su un programma
- ha un puntatore per tenere traccia di dove ci troviamo nell'esecuzione del programma
- ha delle strutture dati per gestire l'esecuzione
- ha uno stato associato 
	- new: _processo creato_. 
	- running: _stiamo eseguendo le istruzioni_. 
	- waiting: _il processo sta aspettando che qualche evento avvenga_. 
	- ready: _il processo sta aspettando di essere assegnato a un altro processo_. 
	- terminated: _il processo ha finito l'esecuzione_.

quando il SO crea un processo deve farlo tenendo conto del codice da eseguire e tenendo conto che il processo avrà bisogno di strutture dati, quindi dovrà allocare dello spazio

![[Pasted image 20240229105707.png|600]]
### PCB - Process Control Block
si occupa della **gestione dei processi**, ovvero la gestione delle seguenti informazioni:
- Process state 
- Program counter 
- CPU registers 
- CPU scheduling information 
- Memory-management information 
- Accounting information 
- I/O status information

il **PCB** è una tabella con l'obiettivo di gestire i context switch (passaggio della CPU da un processo a un altro)

![[Pasted image 20240229111214.png|150]]

nei registri del processore si trova il **Program counter**, il puntatore che si occupa di ricordare la parte di codice alla quale siamo arrivati(facendo degli **snapshot**)
	_se effettuo un context switch prima che il processo sia terminato devo avere la garanzia di poter riprendere l'esecuzione del processo in un momento successivo_

>**snapshot** = copiare i registri del processore nel PCB

**CPU che cambia processo in esecuzione**
![[Pasted image 20240229111801.png|400]]
### Creazione
i principali eventi che causano la creazione di un processo sono:
- Inizializzazione del sistema
- Esecuzione di un sistema di creazione processi
- Richiesta dell'utente
- Inizializzazione di un processo batch

il processo **genitore** crea processi **figli** che in caso creeranno altri processi figli, formando un albero di processi

Esistono diversi tipi di:
- Resource sharing 
	- Parent and children share all resources. 
	- Children share subset of parent’s resources. 
	- Parent and child share no resources. 
- Execution 
	- Parent and children execute concurrently. 
	- Parent waits until children terminate.
- Address space 
	- Child duplicate of parent. 
	- Child has a program loaded into it. 
- UNIX examples 
	- fork system call creates new process 
	- execve system call used after a fork to replace the process’ memory space with a new program.
### Terminazione
le condizioni che causano la terminazione di un processo sono:
- Normal exit (volontarie)
- Error exit (volontarie)
- Fatal error (involontarie)
- Killed by another process (involontarie)
	_esistono vari livelli di kill, un processo non soccombe a un livello di kill inferiore a quello definito per esso_
### Process scheduling queues
esistono più code di processi, distinte per tipo:
- Job queue – set of all processes in the system. 
- Ready queue – set of all processes residing in main memory, ready and waiting to execute. 
- Device queues – set of processes waiting for an I/O device. 
- Process migration between the various queues.

![[Pasted image 20240229121014.png|400]]

[[Appunti unibo/Sistemi Operativi/Quinta Lezione|Next]]






