[Slides](https://virtuale.unibo.it/pluginfile.php/2274111/mod_resource/content/2/12_Progettazione_logica.pdf)

![[Pasted image 20250203201130.png|600]]
![[Pasted image 20250203202124.png|600]]

Una possibilità (DA EVITARE) è quella di tradurre ogni entità ed ogni relazione del modello E-R con una tabella corrispondente 

PROBLEMI: 
- **Efficienza** -> Quante tabelle sono generate? Efficienza delle operazioni sui dati? 
- **Correttezza** -> Come si possono tradurre le generalizzazioni? Non esiste un costrutto equivalente nel modello E-R

Per garantire la qualità dello schema prodotto, la progettazione logica tipicamente include due passaggi: 
- **Ristrutturazione del modello concettuale** -> modificare lo schema E-R al fine di abilitare la traduzione nel modello logico e di ottimizzare il progetto nel suo complesso. 
- **Traduzione nel modello logico** -> traduzione dei costrutti del modello E-R nei costrutti equivalenti del modello relazionale
## Ristrutturazione modello concettuale
Prima di tradurre il modello E-R, è necessario ristrutturarlo per motivi di correttezza/efficienza: 
FASI (F) PREVISTE (alcune di esse potrebbero non essere necessarie) 
- **F0.** Eliminazione delle generalizzazioni 
- **F1.** Eliminazione degli attributi multi-valore 
- **F2.** Partizionamento/accorpamento di concetti 
- **F3.** Analisi delle ridondanze
### F0 - Eliminazione delle generalizzazioni
![[Pasted image 20250203203629.png|600]]
![[Pasted image 20250203203705.png|600]]
Quale traduzione utilizzare? 
- **SOL1** introduce valori nulli ed un attributo aggiuntivo, ma è conveniente <u>quando non ci sono troppe differenze concettuali tra E0, E1 ed E2</u>
- **SOL2** è possibile solo se la generalizzazione è totale, non introduce valori nulli, ma **è conveniente quando ci sono operazioni che coinvolgono per lo più E1 ed E2 ma non l’entità genitore E0**

![[Pasted image 20250203203855.png|600]]
- SQL3 non introduce valori nulli, ed <u>è utile quando ci sono operazioni che si riferiscono solo ad istanze di E1, E2 ed E0</u>, ma presenta la necessità di introdurre dei vincoli: 
	- Un’occorrenza di E0 **non può partecipare in contemporanea** ad R01 ed R02.
	- Se la **generalizzazione è totale**, ogni occorrenza di E0 deve appartenere ad R01 o R02
### F1 - Eliminazione degli attributi multi-valore 
![[Pasted image 20250203204410.png|600]]
### F2 - Partizionamento/accorpamento di concetti 
Per una dato modello E-R, è possibile ridurre il numero di accessi: 
- separando attributi che vengono acceduti separatamente -> **partizionamenti** 
- raggruppando attributi di entità diverse ma acceduti allo stesso tempo -> **accorpamenti** 
- E’ necessario avere *una stima sul volume dei dati* per un’indicazione se/come partizionare/accorpare entità.
![[Pasted image 20250203204809.png|600]]
![[Pasted image 20250203204833.png|600]]
### F3 - Analisi delle ridondanze
Nel modello E-R, potrebbero essere presenti **ridondanze sui dati**, ossia <u>informazioni significative ma derivabili da altre</u> già presenti nel modello E-R. 
- (Eventuali) **vantaggi** delle ridondanze:
	- Operazioni sui dati più efficienti 
- **Svantaggi** delle ridondanze: 
	- Maggiore occupazione di memoria
	- Maggiore complessità degli aggiornamenti

![[Pasted image 20250203205125.png|600]]
![[Pasted image 20250203205214.png|600]]
Per scegliere cosa fare di un attributo ridondante, è possibile utilizzare **l’analisi del modello E-R** che abbiamo visto nella progettazione concettuale. 

Sia S lo schema **E-R senza ridondanze** 
Sia S<sub>rid</sub> lo schema **E-R con ridondanze** 
1. Si calcolano il costo e l’occupazione di memoria di entrambi gli schemi: 
	- <c(S),m(S)> e <c(S<sub>rid</sub>),m(S<sub>rid</sub>)>
2. Si confrontano c(S)/c(S<sub>rid</sub>) e |m(s) – m(S<sub>rid</sub>)| 
3. Si prende una decisione in base al valore delle metriche

Esemplèe ->> [p.26 - p.33](https://virtuale.unibo.it/pluginfile.php/2274111/mod_resource/content/2/12_Progettazione_logica.pdf)
## Traduzione nel modello logico
[p.34](https://virtuale.unibo.it/pluginfile.php/2274111/mod_resource/content/2/12_Progettazione_logica.pdf)

La **progettazione logica** deve tradurre i costrutti del modello E-R nei costrutti del modello logico di riferimento (nel nostro caso, il *modello relazionale*), garantendo l’equivalenza dei modelli 

In sintesi: 
- Le **entità** diventano **tabelle** sugli stessi attributi.
- Le **relazioni del modello E-R** diventano **tabelle** sugli identificatori delle entità coinvolte (più gli attributi propri), *ma sono possibili traduzioni differenti sulla base delle cardinalità*.

![[Pasted image 20250203210758.png|600]]
![[Pasted image 20250203210829.png|600]]
![[Pasted image 20250204175454.png|600]]
![[Pasted image 20250204175603.png|600]]
![[Pasted image 20250204175642.png|600]]
![[Pasted image 20250204175825.png|600]]
![[Pasted image 20250204175850.png|600]]
![[Pasted image 20250204175904.png|600]]
analisi su che soluzione adottare in base alla cardinalità -> [p.45-52](https://virtuale.unibo.it/pluginfile.php/2274111/mod_resource/content/2/12_Progettazione_logica.pdf)

Come per la fase di progettazione concettuale, è necessario corredare lo schema logico di opportuna documentazione perchè non tutti i vincoli sono esprimibili nello schema logico: 
- Tabella delle **business rules** (vista in precedenza)
- **Insieme dei vincoli di integrità referenziali**
	- Rappresentati attraverso tabella
	- Rappresentati in maniera grafica (*diagramma logico*).

![[Pasted image 20250204180433.png|600]]

[[(11) Normalizzazione|Next.]]




