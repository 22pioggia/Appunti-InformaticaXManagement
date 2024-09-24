***Informazione***: notizia, o elemento che consente di avere conoscenza piu’ o meno esatta di fatti, situazioni e modi d’essere.

***Dato***: elementi di informazione constituiti da simboli che devono essere elaborati.
## DBSM
Un **DBMS** è un sistema software che è in grado di gestire collezioni di dati grandi, condivise e persistenti, in maniera efficiente e sicura.

Alcune funzionalità:
- Creazione di una collezione di dati e sua memorizzazione su memoria secondaria 
- Accesso in lettura/scrittura ad i dati 
- Condivisione di dati tra diversi utenti/applicazioni 
- Protezione dei dati da accessi non autorizzati 
- Reliability dei dati in caso di guasti (hardware/software)

>**Da qui in avanti una base dati è una collezione di dati gestita da un  DBSM**

![[Pasted image 20240918104741.png|600]]
- Tramite i DBMS, è possibile implementare un **paradigma di separazione di dati ed applicazioni**
- Le applicazioni non necessitano di conoscere la struttura fisica dei dati (es. come e dove sono memorizzati su disco) ma <u>solo la struttura logica</u> (cosa rappresentano).
### Caratteristiche
![[Pasted image 20240918104948.png|500]]
#### Efficienza
- DBMS forniscono adeguate strutture dati per organizzare i dati all’interno dei file, e per supportare le operazioni di ricercar, aggiornamento, inserimento, modifica (operazioni **CRUD**).
	- In genere, parliamo di strutture dati ad albero o tabelle hash.

***Indice*** = struttura che contiene informazioni sulla posizione dei contenuti di interesse sulla base del valore di un campo chiave
#### Concorrenza
La maggior parte dei DBMS forniscono un <u>livello di granularità di locking più fine di quello convenzionale</u> (a livello di tabella, pagina, o singola entry).

Al tempo stesso, un DBMS deve garantire il fatto che **accessi da parte di applicazioni diverse non interferiscano tra loro**, lasciando il sistema in uno *stato inconsistente*

Per prevenire tali situazioni, i DBMS implementano *algoritmi di controllo* della concorrenza che garantiscono che operazioni sui dati concorrenti producano lo stesso risultato di un’esecuzione seriale.

***Lock Manager*** = componente del DBMS responsabile di gestire i lock alle risorse del DB, e di implementare le transazioni.

#### Affidabilità
*Alcune operazioni sui dati sono particolarmente delicate, e devono essere gestite in maniera opportuna, secondo la regola del tutto o niente.* 

Per questo, i DBMS devono fornire appositi strumenti per **annullare operazioni non completate e fare roll-back dello stato del sistema**

In molti casi i DBMS mettono a disposizione appositi strumenti ed algoritmi per garantire la persistenza dei dati anche in presenza di *malfunzionamenti hardware/software.*

Il controllore di affidabilità utilizza dei file di log, nei quali sono indicate tutte le operazioni svolte dal DBMS. 
- Algoritmi ad-hoc (es. algorimo di ripresa a caldo/a freddo) per ripristinare lo stato dei dati a partire dai log del DBMS.

![[Pasted image 20240918110355.png|500]]
#### Sicurezza
***Multiutenza*** = La maggior parte dei DBMS implementa politiche di controllo degli accessi ad i dati mediante sistemi di permessi:

***Scalabilità*** = Possibilità di gestire grandi moli di dati aumentando il numero di istanze del DBMS presenti nel sistema (database distribuito).
### Architettura a livelli
In pratica, un DBMS organizza i dati secondo **tre livelli di astrazione complementari**

![[Pasted image 20240918111356.png|500]]

In cosa consiste in pratica il Modello logico? 
1. Insieme di concetti per strutturare/organizzare i dati relativi ad un certo dominio d’interesse.
![[Pasted image 20240924101545.png|600]]
2. Insieme di regole per modellare eventuali vincoli e restrizioni sui dati.

Proprietà (*auspicabili*) dei livelli in un DBMS: 
- ***Indipendenza fisica*** -> interagire con il modello logico in modo indipendente dallo schema fisico. 
- ***Indipendenza logica*** -> interagire con il livello esterno in modo indipendente dallo schema logico dei dati.

[[Modello Relazionale|Next.]]
