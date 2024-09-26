- Proposto nel 1970 da E.F. Codd, ricercatore dell’IBM di San Jose, CA. 
- Attualmente il più utilizzato tra i modelli logici disponibili. 
- Garantisce l’indipendenza tra i livelli (esterno/fisico). 
- Intuitivo, e basato su nozioni di algebra di base. 
- **DBMS** basati sul modello relazionale -> ***RDBMS*** (Oracle, MySQL, DB2, SQL Server etc)

**Definizione informale**
>Modello Relazionale -> i dati sono organizzati in record di dimensione fissa, e divisi in tabelle (relazioni).

![[Pasted image 20240924102012.png|600]]
- Colonne della tabella (Proprietà di interesse) -> **Attributi** 
- Intestazione della tabella (i.e. nome tabella + nome attributi) -> **Schema** della relazione 
- Righe della tabella -> **Istanze** della relazione

---
VINCOLI sull’ordine dei dati: 
- L’ordinamento delle righe è irrilevante 
- L’ordinamento delle colonne è irrilevante.
---
![[Pasted image 20240924102434.png|500]]

---
VINCOLI sui dati della relazione 
- Non possono esistere attributi uguali **(1)**. 
- Non possono esistere righe uguali **(2)**. 
- I dati di una colonna devono essere omogenei **(3)**.
---

- E’ possibile avere uno schema di relazioni senza istanze (es. in fase di creazione del DB)
![[Pasted image 20240924102718.png|450]]
- Il viceversa è impossibile
![[Pasted image 20240924102744.png|450]]
- Ogni attributo dispone di un DOMINIO che definisce l’insieme di valori validi per quell’attributo. 
	- Es. dom(Nome) = string 	
- E’ possibile avere domini ripetuti nella stessa relazione

Una relazione si dice in ***Prima Forma Normale (PFN)*** se tutti gli attributi sono definiti su domini atomici e non su domini complessi
![[Pasted image 20240924104815.png|500]]

I dati gestiti dal modello relazionale sono dati strutturati.
- Tutte le istanze presenti nella relazione condividono la stessa struttura: 
	- <Nome, Codice Corso, Docente, Numero Crediti, Semestre>
- Non è possibile gestire istanze che abbiano un numero diverso/variabile di attributi e/o domini

- Una base di dati può essere costituita da molte tabelle
- Spesso, le informazioni contenute in relazioni diverse sono correlate logicamente tra loro
- Nel modello relazionale, i riferimenti tra dati in relazioni differenti sono espressi mediante valori.
![[Pasted image 20240924105058.png|500]]

**Cos'è una relazione matematica?**
>**DEF.** Dati n insiemi D<sub>1</sub>, D<sub>2</sub>, … D<sub>n</sub>, una **relazione matematica** sugli insiemi D<sub>1</sub>, D<sub>2</sub>, … D<sub>n</sub> è definita come un sottoinsieme del prodotto cartesiano D<sub>1</sub> x D<sub>2</sub> x … x D<sub>n</sub>

Dal punto di vista dei dati, i due schemi sono uguali, ma non lo sono se consideriamo la definizione di relazione matematica
![[Pasted image 20240924105424.png|600]]
Soluzione: Usare rappresentazione NON posizionale, mediante gli attributi

Volendo fornire una definizione rigorosa di relazione nel modello relazionale

>Schema di relazione: un nome R con un insieme di attributi A<sub>1</sub>, ..., A<sub>n</sub>: R (A<sub>1</sub>,..., A<sub>n</sub>)

- Una **ennupla** su un insieme di attributi X è una funzione che associa a ciascun attributo A in X un valore del dominio di A. 
- **t\[A]** denota il valore della ennupla t sull'attributo A. 
- **Istanza di relazione** su uno schema R(X): insieme r di ennuple su X.
![[Pasted image 20240924105741.png|400]]
## Null
In una relazione, le ennuple di dati devono essere omogenee (ossia avere tutte le stessa struttura). 
>PROBLEMA (1): Che accade se il valore di un attributo per una certa ennupla non è noto?
>PROBLEMA (2): Che accade se il valore di un attributo per una certa ennupla è inesistente?

Una possibile soluzione per tutti e tre i casi potrebbe essere quella di colmare le informazioni mancanti usando “**valori speciali**”.
- Si richiedono valori speciali per ogni attributo. 
- Si richiede di conoscere la semantica dei valori “speciali” da parte delle applicazioni.
In alternativa: le informazioni mancanti sono etichettate con il valore NULL. 
- **t\[A]**, per ogni attributo A, è un valore del dominio dom(A) oppure il valore NULL. 
- Tramite valori NULL, è possibile gestire i 3 casi visti in precedenza (*valori non noti, inesistenti o senza informazione*), senza necessità di operare distinzione tra gli stessi.
## Vincoli di Integrità
*Non tutte le istanze di una relazione (o di una base di dati) possono considerarsi lecite!*
![[Pasted image 20240924110711.png|500]]

>Un ***vincolo*** è una funzione booleana, che associa ad una istanza r di una base di dati definita su uno schema R = {R<sub>1</sub>(X<sub>1</sub>), ..., R<sub>k</sub>(X<sub>k</sub>)} un valore di verità (*true/false*). 

**Istanza lecita ->** Istanza che soddisfa tutti i vincoli.

- Vincoli ***intra-relazionali*** (*su ciascuna relazione*) 
	- Vincoli di **ennupla** 
	- Vincoli di **chiave** 
- Vincoli ***inter-relazionali*** (*tra relazioni diverse*)
### Vincoli di ennupla
I **vincoli di ennupla** esprimono condizioni su ciascuna ennupla, considerata singolarmente. Possono essere espressi mediante **espressioni algebriche** o **espressioni booleane**.

>C1: (voto ≥18)and(voto ≤ 30) 
>C2: NOT((lode = SI)and(voto ≠ 30))
>C3: (Saldo = Entrate − Uscite)

Come esprimere la condizione che il saldo di un giorno sia dipendente dal saldo del giorno precedente?

>(Saldo(GiornoX +1) = Entrate − Uscite+ Saldo(GiornoX))
### Vincoli di Chiave
>**(Def. Informale)** Una chiave è un insieme di attributi che consente di identificare in maniera univoca le ennuple di una relazione.

*\[Fig. 1]*
![[Pasted image 20240924111438.png|450]]
- Non esistono due studenti con la stessa matricola. 
- Data la matricola di uno studente, è possibile risalire a tutti i suoi dati (cognome/nome/data di nascita).

Un sottoinsieme K di attributi di una relazione è una ***superchiave*** se <u>NON</u> contiene due ennuple distinte t<sub>1</sub> e t<sub>2</sub> con t<sub>1</sub>\[K]=t<sub>2</sub>\[K].

*\[Fig. 1]*
1. {*Matricola*} è una superchiave 
2. {*Cognome*} NON è una superchiave 
3. {*Matricola, Cognome*} è una superchiave 
4. {*Cognome, Nome*} è una superchiave

Una ***chiave*** di una relazione r è una **superchiave minimale** di r (*ossia non esiste un’altra superchiave K’ che sia contenuta in K*).

*\[Fig. 1]*
1. {*Matricola*} è una chiave 
2. {*Cognome*} NON è una chiave 
3. {*Matricola, Cognome*} NON e’ una chiave 
4. {*Cognome, Nome*} è una chiave

Esiste sempre almeno **una superchiave** (*o chiave*) per ogni relazione 
Possono esistere **più superchiavi** (*o chiavi*) per la stessa relazione

Come regola generale, le chiavi dovrebbero essere definite **a livello di schema**, *e non di istanza*.
(*deve applicarsi in tutto lo schema, non nella singola istanza, nel singolo dato*)
![[Pasted image 20240924112306.png|450]]
- {Nome} è una chiave in questa istanza, ma è un caso fortuito
- Per definire una chiave a livello di schema, servono informazioni aggiuntive sul dominio dei dati
#### Chiavi
*Ma a cosa servono le chiavi?*
- Per accedere a ciascuna ennupla della base di dati, in maniera univoca. 
- Per correlare dati tra relazioni differenti.
![[Pasted image 20240924112645.png|500]]

*Che accade se una chiave ha valori NULL?* 
- In questo caso, potrebbero <u>NON</u> essere garantiti l’indirizzamento univoco delle ennuple, e le correlazioni tra tabelle diverse

***Chiave primaria*** -> chiave di un relazione su cui NON sono ammessi valori NULL. 

Gli attributi che formano la chiave primaria sono *per convenzione* indicati con una <u>sottolineatura</u>.
![[Pasted image 20240924112908.png|450]]

***Ogni relazione deve disporre di una chiave primaria.*** 

Come fare nel caso tutte le chiavi presentino dei valori NULL? *Aggiungere codici o identificativi progressivi* 
![[Pasted image 20240924113546.png|450]]

***Una chiave può essere composta da più attributi.***
![[Pasted image 20240924114019.png|450]]
![[Pasted image 20240924114103.png|450]]
## Vincoli inter-relazionali
- Nel modello relazionale, una base di dati può essere composta da molte relazioni collegate tra loro.
- Collegamenti tra relazioni differenti sono espresse mediante valori comuni in attributi replicati.
![[Pasted image 20240925101246.png|500]]

In molti scenari d’uso, risulta utile imporre **un vincolo sulle dipendenze tra relazioni**.

>Ogni riga della tabella referenziante si collega **al massimo ad una riga della riga della tabella referenziata**, sulla base dei <u>valori comuni</u> nell’attributo/negli attributi replicati.
![[Pasted image 20240925101433.png|450]]

>Un *vincolo di integrità referenziale* (“**foreign key**”) fra gli attributi X di una relazione R<sub>1</sub> e un’altra relazione R<sub>2</sub> impone ai valori (diversi da NULL) su X in R<sub>1</sub> di comparire come valori della chiave primaria di R<sub>2</sub>.

In pratica: il vincolo consente di collegare le informazioni tra tabelle diverse attraverso valori comuni

Per definire il vincolo di integrità referenziale, occorre esplicitare i nomi degli attributi (su cui si applica il vincolo) di entrambe le tabelle: 
- VOLI.Arrivi -> AEROPORTO.IdAeroporto 
- Notazione: SCHEMA.NomeAttributo
## Recap
Pro
- Modello intuitivo 
- Basato su proprietà dell’algebra relazionale 
- Garantisce indipendenza dallo schema fisico 
- Riflessività -> meta-informazioni di una relazione sono gestite a loro volta attraverso relazioni.
Contro
- **Poca flessibilità** -> Tutte le istanza di una relazione devono possedere la stessa struttura
- **Ridondanza** dei dati causata dai vincoli
## Altri modelli
Oltre al modello relazionale (proposto negli anni settanta), esistono altri modelli logici di organizzazione dei dati: 
- Modello gerarchico 
- Modello reticolare 
- Modello ad oggetti 
- Modello XML-based
- ...

***Modello Gerarchico***
- I dati sono rappresentati come record.
- Le associazioni tra tabelle sono rappresentate con puntatori in una struttura ad albero.
![[Pasted image 20240925104236.png|450]]

***Modello Reticolare***
- I dati sono rappresentati come record. 
- Le associazioni tra tabelle sono rappresentate con puntatori in una struttura a grafo complesso.
![[Pasted image 20240925104340.png|450]]

***Modello a Oggetti***
- Una base di dati è una collezione di oggetti. 
- Ogni oggetto ha un **indentificatore univoco (OID)** gestito dal sistema (a differenza delle chiavi). 
- Ogni oggetto ha uno <u>stato</u>, definito come una struttura complessa a partire da dati semplici. 
- Ogni oggetto ha dei metodi che consentono di manipolare lo stato. 
- Gli oggetti possono essere incapsulati in altri oggetti, estesi (mediante ereditarietà), etc

***Modelli no SQL***
- Non un singolo modello, ma un insieme di approcci accomunati dal tentativo di **superare la rigidità del modello relazionale**, e di **migliorare la scalabilità della gestione di una base di dati** in ambienti distribuiti. 
- Approcci Key/Value -> Redis, BigTable, etc 
- Approcci document-oriented (JSON/XML)

