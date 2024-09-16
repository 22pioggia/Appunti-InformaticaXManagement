## Sincronizzazione in Java
in Java non abbiamo i _semafori_, essendo strutture troppo a basso livello, dobbiamo usare costrutti differenti -> creiamo _**metodi synchronized**_

un thread chiama il metodo synchronized, affinche questa chiamata abbia luogo richiede che il thread acquisisca il _**lock**_ del metodo

**==entry set==** -> lista che contiene i threads in coda per acquisire il lock

![[Pasted image 20240315131356.png|400]]

il possesso di un lock da parte di un thread cesserà quando finirà l'esecuzione del metodo synchronized

**==metodo enter() synchronized==**
>public synchronized void enter(Object item) { 
>	while (count == BUFFER_SIZE) 
>		Thread.yield(); 
>	++count; 
>	buffer[in] = item; 
>	in = (in + 1) % BUFFER_SIZE; 
>}

**==metodo remove() synchronized==**
>public synchronized Object remove() { 
>	Object item; 
>	while (count == 0) 
>		Thread.yield(); 
>	--count; 
>	item = buffer[out]; 
>	out = (out + 1) % BUFFER_SIZE; 
>	return item; 
>}

**Thread.yield()** -> il metodo non ha nulla da fare e aspetta un thread che possa eseguirlo 

\- questi metodi possono essere eseguiti solo da un processo/thread per volta, dispone di un lock, le variabili che potrebbero causare interferenze non creano problemi nei metodi synchronized

purtroppo i metodi synchronized non ci danno garanzie sul fatto che possa entrare _un consumer in un buffer vuoto_ o _un producer in un buffer pieno_
- consumer -> userebbe un remove() in un buffer da cui non può prendere nulla
- producer -> userebbe un enter() in un buffer pieno, sovrascrivendo qualcosa

quando un thread chiama il _**==wait()==**_:
- rilascia il lock
- viene impostato su _blocked_
- viene messo in _**wait set**_

![[Pasted image 20240315133614.png|400]]

i threads in wait set sono threads che non sono riusciti a completare il metodo o che magari aspettano una determinata condizione

quando un thread chiama il _**==notify()==**_:
- seleziona un un thread arbitrario T dal **waiting set**
- sposta T nell'**entry set**
- imposta T come _Runnable_
T può tornare a competere per il lock con gli altri threads

<font color="#ff0000">!! Esiste la notifyall() che invece di prendere un singolo thread, li prende tutti, svuotando totalmente il wait set, questo concede ai threads di decidere in autonomia il primo che partirà</font>

**==metodo enter() con wait/notify==**
>public synchronized void enter(Object item) { 
>	while (count == BUFFER_SIZE) {
>		try { 
>			wait(); 
>		} 
>		catch (InterruptedException e) { } 
>	} 
>	++count; 
>	buffer[in] = item; 
>	in = (in + 1) % BUFFER_SIZE; 
>	notify(); 
>}

**==metodo remove() con wait/notify==**
>public synchronized Object remove() { 
>	Object item; 
>	while (count == 0) {
>		try { 
>			wait(); 
>		} 
>		catch (InterruptedException e) { } 
>	}
>	--count; 
>	item = buffer[out]; 
>	out = (out + 1) % BUFFER_SIZE; 
>	notify(); 
>	return item; 
>}

---

|     | Buffer   | Lock     | Entry set | wait set |
| --- | -------- | -------- | --------- | -------- |
| 1-  | Full     | Producer | 0         | 0        |
| 2-  | Full     | Libero   | 0         | Producer |
| 3-  | Full     | Consumer | 0         | Producer |
| 4-  | Not Full | Consumer | 0         | Producer |
| 5-  | Not Full | Consumer | Producer  | 0        |
| 6-  | Not Full | Libero   | Producer  | 0        |
| 7-  | Not Full | Producer | 0         | 0        |
| 8-  | Full     | Producer | 0         | 0        |
| 9-  | Full     | Libero   | 0         | 0        |
1. producer esegue enter()
2. producer esegue wait()
3. consumer esegue remove()
4. consumer libera posizioni sul buffer
5. consumer esegue notify()
6. consumer termina metodo remove()
7. producer riprende esecuzione
8. producer inserisce item nel buffer -> _esegue notify() ma non cambia nulla_
9. prod termina metodo enter()
---
### Metodi Writer/Reader synchronized
>public class Database { 
>	public Database() { 
>		readerCount = 0; 
>		dbReading = false; 
>		dbWriting = false; 
>	} 
>	public synchronized int startRead() { /next/ } 
>	public synchronized int endRead() { /next/ } 
>	public synchronized void startWrite() { /next/ } 
>	public synchronized void endWrite() { /next/ } 
>	private int readerCount; 
>	private boolean dbReading; 
>	private boolean dbWriting; 
>}

dbReading e dbWriting servono a capire se ci sono Readers o Writers attivi

**==startRead()==**
>public synchronized int startRead() { 
>	while (dbWriting == true) { 
>		try { 
>			wait(); 
>		} 
>		catch (InterruptedException e) { } 
>	}
>	++readerCount; 
>	if (readerCount == 1) 
>		dbReading = true; 
>	return readerCount; 
>}

**==endRead()==**
>public synchronized int endRead() { 
>	--readerCount 
>	if (readerCount == 0) 
>		dbReading = false
>		notifyAll(); 
>	return readerCount; 
>}

**==startWrite()==**
>public synchronized void startWrite() { 
>	while (dbReading == true || dbWriting == true) {
>		try { 
>			wait(); 
>		} 
>		catch (InterruptedException e) { } 
>	}
>	dbWriting = true; 
>} 

==**endWrite()**==
>public synchronized void endWrite() { 
>	dbWriting = false; 
>	notifyAll(); 
>}
---

_**!! - possiamo dichiarare parti di codice synchronized, senza sincronizzare interi metodi**_
>Object mutexLock = new Object(); 
>. . . 
>public void someMethod() { 
>	// non-critical section 
>	synchronized(mutexLock) { // critical section } 
>	// non-critical section 
>}
---
### Semafori Java
_Java non ha la classe semaforo, ma un semaforo base può essere costruito utilizzando i meccanismi di Java synchronization_

>public class Semaphore { 
>	public Semaphore() { value = 0; }
>	public Semaphore(int v) { value = v; } 
>	public synchronized void P() { /next/ } 
>	public synchronized void V() { /next/ } 
>	private int value; 
>}

**==P()**==
>public synchronized void P() { 
>	while (value <= 0) { 
>	try { 
>		wait(); 
>	} 
>	catch (InterruptedException e) { } 
>	} 
>	value --; 
>}

**==V()==**
>public synchronized void V() { 
>	++value; 
>	notify(); 
>}
---

[[Appunti unibo/Secondo Anno/Sistemi Operativi/Nona Lezione|Next]]















