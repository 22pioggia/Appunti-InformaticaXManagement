[Inizio slides che mi sono perso svegliandomi tardi](https://virtuale.unibo.it/pluginfile.php/2274099/mod_resource/content/2/3_SQL_1.pdf)
## SQL
**SQL** è un linguaggio per basi di dati basate sul modello relazionale. 

*Valgono i concetti generali del modello relazionale visto fin qui*, ma con qualche differenza: 
- Si parla di **tabelle** (e non relazioni). 
- Il risultato di un’operazione sui dati può restituire una tabella con **righe duplicate**. 
- Il sistema dei **vincoli** è **più espressivo**. 
- Il vincolo di **integrità referenziale** (chiave esterna) è **meno stringente**

Due componenti principali: 
- **DDL** (*Data Definition Language*) Contiene i costrutti necessari per la creazione e modifica dello schema della base di dati. 
- **DML/DQL** (*Data Manipulation/Query Language*) Contiene i costrutti per le interrogazioni e di inserimento, eliminazione e modifica di dati.

![[Pasted image 20241001102454.png|400]]
## DDL

Tramite il costrutto create database, è possibile costruire uno schema di una base di dati (ossia il collettore di tabelle/viste/etc). 

>create database \[if not exists] NomeDB 
>drop database \[if exists] NomeDB 

- ***if exists*** verifica l’esistenza o meno del database nel DBMS

![[Pasted image 20241001102703.png|400]]

Tramite il costrutto create table, è possibile costruire una tabella all’interno dello schema. 

>create table NomeTabella ( 
>	nomeAttributo1 Dominio \[ValDefault]\[Vincoli], 
>	nomeAttributo2 Dominio \[ValDefault]\[Vincoli], 
>	… 
>); 

Per ciascun attributo, è possibile specificare, oltre al *nome* e *dominio*, un **valore di default** e i **vincoli**
### Domini elementari
In SQL, è possibile associare i seguenti domini (elementari) agli attributi di uno schema. 
- Caratteri 
- Tipi numerici esatti 
- Tipi numerici approssimati 
- Istanti temporali 
- Intervalli temporali
---
Il dominio ***character*** consente di rappresentare singoli caratteri o stringhe di lunghezza max fissa. 

>character/char \[varying]\[(Lunghezza)] 

Lunghezza non specificata -> Singolo carattere 

*Es. specificare una stringa di max 20 caratteri. *
- *character varying (20)* 
- *varchar (20)*
---
I tipi ***numerici esatti*** consentono di rappresentare valori esatti, interi o con una parte decimale di lunghezza prefissata. 

- numeric \[(Precisione\[, Scala])]) 
- decimal \[(Precisione\[, Scala])]) 
- integer 
- smallint 

*Es. numeric(4,2) -> Intervallo [-99.99:99.99]*

La keyword auto_increment consente di creare dei campi numerici che si auto-incrementano ad ogni nuovo inserimento nella tabella. 
- integer ***auto_increment***
- smallint ***auto_increment***
---
I tipi ***numerici approssimati*** consentono di rappresentare valori reali con rappresentazione in virgola mobile. 
- float \[(Precisione)] 
- real 
- double precision 

*Es. float(5) -> Mantissa di lunghezza 5.*

---
I domini temporali consentono di rappresentare informazioni temporali o intervalli di tempo. 
- date \[(Precisione)] 
- time \[(Precisione)] 
- timestamp 

*Es. time (2) -> 21:03:04* 
*time (4) -> 21:03:04:34*

interval PrimaUnità \[to UltimaUnità] 

*Es. interval month to second*

Il dominio boolean consente di rappresentare valori di verità (true/false).

---

I domini ***blob*** e ***cblob*** consentono di rappresentare oggetti di grandi dimensioni come sequenza di valori binari (*blob*) o di caratteri (*cblob*) .
- La dimensione massima del file dipende dalle specifiche implementazioni (es. MySQL 4GB). 
- Non è possibile specificare interrogazioni sui dati in base al valore del dominio 
---
Tramite il costrutto domain, l’utente può costruire un proprio dominio di dati a partire dai domini elementari. 

>create domain NomeDominio as TipoDati 
>	\[Valore di default] 
>	\[Vincolo] (vedremo dopo)

*Ex*
>*CREATE DOMAIN Voto AS SMALLINT* 
>	*DEFAULT NULL*
>	*CHECK ( value >=18 AND value <= 30 )*
### Vincoli
<u>Per ciascun dominio o attributo</u>, è possibile definire dei **vincoli** che devono essere rispettati da tutte le istanze di quel dominio o attributo. 
- Vincoli intra-relazionali 
	- vincoli generici di ennupla 
	- vincolo not null 
	- vincolo unique 
	- vincolo primary key 
- Vincoli inter-relazionali 
	- vincolo references
---
Mediante la clausola ***check*** è possible esprimere vincoli di ennupla arbitrari. 

NomeAttributo … check (Condizione) 
VOTO SMALLINT CHECK((VOTO>=18) and (VOTO<=30)) 

- Il vincolo viene valutato ennupla per ennupla. 
- E’ possibile creare vincoli più complessi mediante le asserzioni.
---
Il vincolo ***not null*** indica che il valore null <u>non è ammesso</u> come valore dell’attributo. 

*Es. NUMEROORE SMALLINT NOT NULL*

- In caso di inserimento, <u>l’attributo deve essere specificato</u>, a meno che non sia stato specificato un valore di default diverso dal valore null. 
 
*Es. NUMEROORE SMALLINT DEFAULT 40*

---
Il vincolo ***unique*** impone che l’attributo/attributi su cui sia applica non presenti valori comuni in righe differenti à ossia che l’attributo/i sia una superchiave della tabella. 
Due sintassi: 
- Attributo Dominio \[ValDefault] unique 
	- Se la superchiave è <u>un solo attributo</u>. 
- unique(Attributo1, Attributo2, ..) 
	- Se la superchiave è <u>composta da più attributi</u>.
---
Il vincolo ***primary key*** impone che l’attributo/attributi su cui sia applica non presenti valori comuni in righe differenti e non assuma valori **NULL** -> ossia che l’attributo/i sia una *chiave primaria*. 
Due sintassi: 
- Attributo Dominio \[ValDefault] primary key 
	- Se la chiave è <u>un solo attributo</u>. 
- primary key(Attributo1, Attributo2, ..) 
	- Se la chiave è <u>composta da più attributi</u>.

***IMPORTANTE***: A differenza di *unique* e *not null* che possono essere definiti su più attributi della stessa tabella, il vincolo ***primary key*** <u>deve apparire una sola volta per tabella.</u>

---
I vincoli references e foreign key consentono di definire dei **vincoli di integrità referenziale** tra i valori di un attributo nella tabella in cui è definito (*tabella interna*) ed i valori di un attributo in una seconda tabella (*tabella esterna*). 

*NOTA: L’attributo/i cui si fa riferimento nella tabella esterna deve/devono essere soggetto/i al vincolo unique.*

![[Pasted image 20241001113039.png|500]]
>CREATE TABLE ESAMI ( 
>	CORSO VARCHAR(4) REFERENCES CORSI(CODICE),
>	STUDENTE VARCHAR(20), 
>	PRIMARY KEY(CORSO, MATRICOLA), 
>	… 
>   )

Il costrutto foreign key si utilizza nel caso il vincolo di integrità referenziale riguardi più di un attributo delle tabelle interne/esterne.

>CREATE TABLE STUDENTE { 
	MATRICOLA CHARACTER(20) PRIMARY KEY, 
	NOME VARCHAR(20), 
	COGNOME VARCHAR(20), 
	DATANASCITA DATE, FOREIGN KEY(NOME,COGNOME,DATANASCITA) REFERENCES ANAGRAFICA(NOME,COGNOME,DATA) 
   );
   
---

E’ possibile associare azioni specifiche da eseguire sulla tabella interna in caso di violazioni del vincolo di integrità referenziale. 

on (delete | update) 
(cascade | set null | set default| no action) 

- cascade -> elimina/aggiorna righe (della tabella interna) 
- set null -> setta i valori a null 
- set default -> ripristina il valore di default 
- no action -> non consente l’azione (sulla tabella esterna)

![[Pasted image 20241001114037.png|500]]
>CREATE TABLE ESAMI ( 
>	CORSO VARCHAR(4) REFERENCES CORSI(CODICE) 
>		ON DELETE NO ACTION 
>		ON UPDATE CASCADE 
>	STUDENTE VARCHAR(20), 
>	PRIMARY KEY(CORSO, STUDENTE), 
>	… 
   )

![[Pasted image 20241001114321.png|500]]
>CREATE TABLE ESAMI ( 
>	CORSO VARCHAR(4) REFERENCES CORSI(CODICE) 
>		ON DELETE SET NULL 
>		ON UPDATE CASCADE 
>	STUDENTE VARCHAR(20), 
>	PRIMARY KEY(CORSO, STUDENTE), 
>	… 
>)

E’ possibile **modificare** gli schemi di dati precedentemente creati tramite le primitive di alter (*modifica*) e drop (*cancellazione*). 

**drop** (schema|domain|table|view) NomeElemento 
**drop** (restrict|cascade) NomeElemento 

**alter** NomeTabella 
	alter column NomeAttributo 
	add column NomeAttributo 
	drop column NomeAttributo 
	add contraint DefVincolo
	...
## DDL

[parla delle query, spero di saperle fare](https://virtuale.unibo.it/pluginfile.php/2274100/mod_resource/content/4/3_SQL_2.pdf)
	