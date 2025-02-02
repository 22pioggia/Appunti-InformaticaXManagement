[Slides](http://virtuale.unibo.it/pluginfile.php/2274107/mod_resource/content/3/8_Progettazione_introduzione.pdf)

<font color="#b2a2c7">D. Come procedere se dobbiamo realizzare da zero un nuovo sistema informativo?</font> 

<font color="#7f7f7f">Es. Progettazione di un sistema informativo per gestire i dati di un reparto ospedaliero (anagrafica pazienti, anagrafica medici, cartelle cliniche, etc)</font>. 

In questo caso, <u>partire direttamente con l’implementazione delle tabelle SQL</u> può essere ***complesso se non impossibile*** 

**==PROBLEMA 1: Dimensionamento del problema.==**
Negli esempi proposti fin qui, uno schema di un DB era composto da massimo **5 tabelle**

In pratica, un DB di un sistema informativo di medie dimensioni può contenere **decine di tabelle**

**==PROBLEMA 2: Analisi dei requisiti==**
- Quali sono le specifiche del sistema che si vuole realizzare? 
- Quali sono i dati d’interesse nel modello? 
- Quali sono le operazioni sui dati da gestire? 

Nella pratica, capire le richieste dei clienti è un processo solo apparentemente semplice 

**==PROBLEMA 3: Traduzione nel modello logico (relazionale)==**
![[Pasted image 20250201191004.png|600]]
![[Pasted image 20250201191108.png|600]]
![[Pasted image 20250201191222.png|600]]

**==Come procedere?==** 
**Esistono metodologie consolidate per progettare una “buona” base di dati a partire dai suoi requisiti.** 

*In generale, la progettazione è un solo uno dei componenti del ciclo di vita di un sistema informativo*

![[Pasted image 20250201191715.png|600]]

![[Pasted image 20250201191804.png|600]]

---
*==Esempio: Progettazione di una base di dati per un ente che eroga corsi di formazione di informatica.==*

><b><font color="#ff00dd">SPECIFICA dei REQUISITI sui DATI</font></b>
>
Si vuole progettare una base di dati per una società che eroga corsi, di cui si vogliono rappresentare i dati dei docenti e dgli studenti. Per gli studenti, identificati da un codice, si vuole tenere traccia del codice fiscale, cognome, età, sesso, e corsi che stanno seguendo/hanno seguito. I corsi hanno un codice, un titolo e possono avere varie edizioni con date di inizio/fine e numero degli studenti. Per gli insegnanti, si vuole memorizzare il codice, il cognome, l’afferenza, il nome del corso che insegnano/hanno insegnato.

><b><font color="#ff00dd">SPECIFICA delle OPERAZIONI sui DATI</font></b>
- Inserimento di un nuovo studente (in media, ogni mese) 
- Inserimento di un nuovo docente (in media, ogni anno) 
- Inserimento di un nuovo corso (in media, ogni anno) 
- Stampa di tutti i corsi attivi (ogni giorno) 
- Stampa di tutti gli studenti dell’ultimo anno 
- …

---

![[Pasted image 20250201192915.png|600]]

[Slides -> p.18](http://virtuale.unibo.it/pluginfile.php/2274107/mod_resource/content/3/8_Progettazione_introduzione.pdf)
## Progettazione Concettuale
In questa fase, ci si focalizza sul **==contenuto informativo==** dei dati ad alto livello di astrazione, <u>senza focalizzarsi sull’implementazione nel modello logico di riferimento</u>. 

In output, si produce un **modello concettuale**: 
- indipendente dallo schema logico 
- indipendente dal DBMS in uso 

Utilità della progettazione concettuale: 
- Creare un’astrazione completa dei dati da rappresentare 
- Capire le dipendenze concettuali tra i dati del modello 
- Fornire una documentazione della base di dati

![[Pasted image 20250201193300.png|600]]
## Progettazione Logica
In questa fase, si rappresenta la base di dati nello **schema logico** del DMBS (nel nostro caso, nel modello relazionale). 
La ***progettazione logica*** comprende: 
- **Traduzione** dello schema concettuale
	![[Pasted image 20250201193545.png|400]]
- **Ottimizzazione** dello schema logico ottenuto

Una volta ottenuto lo schema logico, è necessario analizzare la qualità del prodotto finale: 

- Rimozione delle ridondanze (normalizzazione) 
	![[Pasted image 20250201193742.png|400]]
- Analisi delle prestazioni 
	 *In base alle operazioni previste sui dati, lo schema prodotto è **efficiente** dal punto di vista del costo delle singole operazioni?*
## Progettazione Fisica
In questa fase, si descrivono le strutture per la memorizzazione dei dati su memoria secondaria, e l’accesso (efficiente) ai dati

![[Pasted image 20250201195242.png|400]]
- Struttura **sequenziale** 
- Struttura **ad accesso calcolato** (hash) 
- Struttura **ad albero**

[[(7) Raccolta dei Requisiti|Next.]]
