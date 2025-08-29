[Slides](https://virtuale.unibo.it/pluginfile.php/2274110/mod_resource/content/2/11_Progettazione_concettuale.pdf)

La costruzione di uno schema concettuale deve tenere conto di alcune **proprietà generali** che ne determinano la **qualità**: 
- **Correttezza** -> *utilizzo corretto* (sintattico/semantico) dei costrutti del modello E-R. 
- **Completezza** -> *rappresentazione di tutti i dati di interesse* (e delle operazioni) descritti nel documento di specifica.

>Come garantire tali proprietà? 

In generale dipendono dal progettista, ma esistono alcune metodologie di progettazione concettuale 
- Strategie di progettazione 
- Pattern di progettazione 
- Analisi di prestazione
## Strategie di Progettazione
In generale, il documento di specifica potrebbe essere molto complesso e denso di contenuti … da dove partire per la costruzione del modello E-R? 
- Strategia top-down 
- Strategia bottom-up 
- Strategia inside-out 
- Strategia mista

![[Pasted image 20250203192324.png|600]]
![[Pasted image 20250203192422.png|600]]
![[Pasted image 20250203192450.png|600]]

In pratica si utilizza una combinazione delle strategie precedenti, detta anche **strategia mista**. 
1. Si individuano i **concetti principali** o più citati 
2. Si realizza uno **schema scheletro** 
3. **Si decompone** lo schema 
4. **Si raffina** lo schema si espande, si integra 
In molti casi pratici di una certa complessità, <u>la strategia mista rappresenta la scelta migliore</u> 
## Pattern di progettazione
<u>Non esiste una rappresentazione univoca delle specifiche</u>, nel dubbio è meglio attenersi alle **Regole Concettuali** (RC) del diagramma E-R. 
- RC1. Se un concetto ha proprietà significative e descrive oggetti con esistenza autonoma           ->**Usare Entità** 
- RC2. Se un concetto correla due o più entità -> **Usare Relazioni** 
- RC3. Se un concetto è un caso particolare dell’altro -> **Usare Generalizzazioni**

![[Pasted image 20250203193107.png|600]]

![[Pasted image 20250203193156.png|600]]
![[Pasted image 20250203193218.png|600]]
![[Pasted image 20250203193329.png|600]]
![[Pasted image 20250203193407.png|600]]
## Analisi di Prestazione
Una volta realizzato il <u>modello E-R</u>, è importante analizzarne l’**efficienza dal punto di vista prestazionale**. 
- Indici di prestazione: 
	- ***Costo operazionale*** -> Numero di entità/associazioni mediamente visitate per implementare una certa operazione sui dati. 
	- ***Occupazione di memoria*** -> Spazio di memoria necessario per memorizzare i dati.

![[Pasted image 20250203193628.png|600]]
![[Pasted image 20250203193719.png|600]]
![[Pasted image 20250203193800.png|600]]

La tavola delle operazioni definisce: 
- L’**insieme delle operazioni** che devono essere implementate. 
- La **tipologia** delle operazioni (interattive/batch). 
- La **frequenza** delle operazioni (es. 100 al giorno). 

 **D. Chi fornisce le informazioni delle tavole?** 
 *R. Spesso la raccolta ed analisi dei requisiti*

![[Pasted image 20250203193955.png|600]]

![[Pasted image 20250203194021.png|650]]

![[Pasted image 20250203194129.png|600]]
![[Pasted image 20250203194333.png|330]]![[Pasted image 20250203194349.png|330]]
![[Pasted image 20250203194430.png|600]]
![[Pasted image 20250203194523.png|600]]

<u>Obiettivo del progettista è quello di determinare lo schema E-R di costo minimo</u> 
**Q1.** Come determinare lo schema minimale? 
**Q2.** Cosa dire dell’occupazione di memoria?

![[Pasted image 20250203200529.png|600]]
![[Pasted image 20250203200835.png|600]]

In pratica: si cerca di determinare il <u>miglior trade-off tra occupazione di memoria e costo delle operazioni dello schema</u>  

Gli indici di prestazione di un diagramma E-R sono forniti come input alla fase di **progettazione logica**, e sono utilizzati per: 
- Traduzione del modello concettuale
- Analisi delle ridondanze.

[[(10) Progettazione Logica|Next.]]

