[Slides](https://virtuale.unibo.it/pluginfile.php/2274108/mod_resource/content/3/9_Analisi_requisiti.pdf)

La ***raccolta/analisi dei requisiti*** consiste nella completa <u>individuazione dei problemi</u> che il sistema informativo da realizzare deve risolvere <u>e le caratteristiche</u> che il sistema sw deve avere. 

- Caratteristiche dei **dati (informazioni + vincoli)** 
- Caratteristiche delle **applicazioni** 

<font color="#646a73">D. Come e dove raccogliere informazioni sui requisiti dei dati e delle applicazioni?</font>

==Fonti dell’analisi dei requisiti:== 
- **Utenti** dell’applicazione 
	- Interviste con i committenti. 
	- Documentazione scritta (vedi dopo) 
- **Documentazione** esistente 
	- Normative esistenti 
	- Procedure aziendali 
	- Regolamenti interni 
- **Realizzazioni/applicazioni** preesistenti

==Workflow==
**PROBLEMA**: Il linguaggio naturale è spesso fonte di ambiguità e fraintendimenti 

==STEP 1==
**Buona prassi per la redazione di un documento di specifica**: 
- Scegliere il corretto livello di astrazione 
- Standardizzare la struttura delle frasi 
- Evitare frasi contorte 
- Individuare omonimi/sinonimi 
- Esplicitare il riferimento tra i termini

Può essere utile decomporre il testo di specifica in frasi omogenee, relative agli stessi concetti

==STEP 2.== Costruire un glossario dei termini, contenente: descrizione, sinonimi, collegamenti.

![[Pasted image 20250201200606.png|400]]

==STEP 3==. Definire le operazioni sui dati 
*Ex.*
- OPERAZIONE 1. Inserire un nuovo partecipante. 
- OPERAZIONE 2. Assegnare un partecipante ad un’edizione del corso. 
- OPERAZIONE 3. Inserire un nuovo corso. 
- OPERAZIONE 4. Visualizzare le informazioni dei corsi. 
- OPERAZIONE 5. Per ogni docente, visualizzare le informazioni sui partecipanti dei suoi corsi. 
- OPERAZIONE 6. Calcolare la media dei partecipanti
- ...
Definire le operazioni sui dati è utile per: 
- Verificare <u>la completezza dei modelli</u> sviluppati nella fase di progettazione (*logica/concettuale*). 
- Valutare <u>le prestazioni dei modelli</u> sviluppati nella fase di progettazione (*logica/concettuale*). 
- Fornire <u>linee guida per l’implementazione</u> dei dati (*es. usare stored procedures per le operazioni*).

Per il full Example -> [p. 7](https://virtuale.unibo.it/pluginfile.php/2274108/mod_resource/content/3/9_Analisi_requisiti.pdf)

Ricapitolando: 
- La raccolta/analisi dei requisiti è una fase molto complessa e difficilmente standardizzabile. 
- Una **metodologia** da applicare: 
	1. Definizione di un documento di specifica. 
	2. Decomposizione del testo in gruppi di frasi. 
	3. Costruzione di un glossario. 
	4. Definizione delle operazioni sui dati

