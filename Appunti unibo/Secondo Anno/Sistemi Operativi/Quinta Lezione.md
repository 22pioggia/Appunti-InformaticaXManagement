## Threads
_parliamo di processo come un'unità dinamica, ma anche come un qualcosa che ha associate delle risorse_
il passaggio da processo a **thread** avviene quando comprendiamo che questi due aspetti del processo sono ben distinti 

dentro un processo posso esserci diversi flussi di controllo, questi sono i **threads**, se essi vengono eseguiti contemporaneamente seppur diverso, la macchina è multithread

![[Pasted image 20240229122230.png|350]]

i threads hanno un puntatore per capire a che punto siamo arrivati e condividono le risorse tra di loro

![[Pasted image 20240301132054.png|400]]

inseriamo il concetto di thread per
- sfruttare il parallelismo delle architetture modere
- rendere più facile il lavoro dei programmatori
	è più semplice, ogni thread rappresenta un attività, quindi posso andare ad agire su una singola attività ben precisa senza andare a toccare troppo l'insieme, con il rischio di causare danni; il tutto permettendo comunque threads paralleli
- quando processi diversi lavorano sugli stessi dati le cose si complicano per i vari discorsi sulla concorrenza, con i threads è tutto più gestibile

creare threads è molto più rapido rispetto a un processo, e il loro numero dipende dalle richieste che arrivano, è inoltre possibile fare un context switch tra threads di uno stesso processo (velocissimo rispetto a quello tra processori)
### Vantaggi e svantaggi
i vantaggi dei **threads** sono:
- Responsiveness
	_rapidità di risposta, minimizza gli impedimenti di attesa di risposta_
- Efficienza
	_inclusa la capacità di sfruttare il parallelismo delle architetture moderne_
- Programming
	_aiutano a programmare in maniera più "naturale"_
- Resource sharing
- Economy

invece gli svantaggi sono:
- interferenza tra processi
	_il fatto di avere più attività concorrenti potrebbe produrre errori di programmazione molto difficili da gestire_

### Java threads
si implementano
1. estendendo la classe **Thread**
2. implementano l'interfaccia **Runnable**

1. 
**estendere la classe thread**
>class Worker1 extends Thread 
>{
>	public void run() { 
>		System.out.println(“I am a Worker Thread”); 
>	} 
>}

\- necessario ridefinire il metodo run, il metodo che viene eseguito quando il thread viene lanciato

**creare il thread**
>public class First 
>{ 
>	public static void main(String args[]) { 
>		Worker runner = new Worker1(); 
>		runner.start();       //attiva l'oggetto -> crea il thread -> invoca run
>		System.out.println(“I am the main thread”); 
>	} 
>}

\- abbiamo così due attività in parallelo, l'estenzione della classe thread(Worker1) e il programma principale (First)
\- quando un thread viene lanciato non parte immediatamente, stato ready > stato run

---
2. 
**l'interfaccia Runnable**
>public interface Runnable 
>{ 
>	public abstract void run(); 
>}

**implementare l'interfaccia Runnable**
>class Worker2 implements Runnable 
>{ 
>	public void run() { 
>		System.out.println(“I am a Worker Thread”); 
>	} 
>}

**creare il thread**
>public class Second 
>{ 
>	public static void main(String args[]) { 
>		Runnable runner = new Worker2(); 
>		Thread thrd = new Thread(runner); 
>		thrd.start(); 
>		System.out.println(“I am the main thread”); 
>	} 
>}
#### Java thread management
- **start()** - creates the thread, calls the run function
- **suspend()** – suspends execution of the currently running thread. 
- **sleep()** – puts the currently running thread to sleep for a specified amount of time. 
- **resume()** – resumes execution of a suspended thread. 
- **stop()** – stops execution of a thread.

![[Pasted image 20240301150334.png|500]]

---
**esempio di thread che conta fino a 10**
>public class DueThread implements Runnable {
>	public void run() { 
>		for(int i=0;i<10;i++) { 
>			System.out.print(this+" "+(i+1)+" "); 
>		} 
>		System.out.println(" "); 
>	} 
>	
>	public static void main(String args[]) { 
>		DueThread t1 = new DueThread(); 
>		Thread threadContatore = new Thread(t1); 
>		threadContatore.start(); 
>		System.out.println("Thread contatore attivato"); 
>		DueThread t2 = new DueThread(); 
>		
>		t2.run();    //non abbiamo fatto t2.start, lui non è un vero thread, non lavora in maniera                     concorrenziale
>		return; 
>	} 
>}

**continuo dell'esempio ->** [[thread_lab_1.pdf|esempi di runnable]]

---









