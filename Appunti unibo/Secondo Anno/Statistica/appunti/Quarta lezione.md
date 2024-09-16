## Introduzione al Data Science e Data Mining

![[Pasted image 20240305162832.png]]

1. Colleziono i dati (il chi lo fa dipende dal genere dei dati _Ex. dati medici raccolti da un medico_)
2. Preparo i dati
3. Esploro i dati - li controllo meglio - e li trasformo(grafici)
4. Costruisco un modello **matematico** o **statistico** e lo implemento
5. Comunico i risultati
6. Do una misura dell'efficacia del modello
### Perchè Data Mining

ci sono molti **dati**(_insieme di valori grezzi_) ed è molto facile estrarre **informazioni** (_il risultato di prendere e organizzare i dati_), come:
- relazioni tra i dati
- contesto e significato

>noi miriamo a qualcosa di più delle **informazioni** = ==dobbiamo trasformare i dati in conoscenza==

==conoscenza== = capire le informazioni riconoscendo i pattern

![[Pasted image 20240305164116.png|500]]
>riusciamo a collegare le parti giuste perchè abbiamo capito le relazioni che collegano i dati

*come facciamo a trovare i pattern da enormi data set* -> **con gli algoritmi**
### Tipi di dati
There are three common types of data structures, for data analysis: 
1. **Unstructured data** is information that either does not have a predefined data model or is not organized in a pre-defined manner. 
2. **Semi-structured data** is a form of structured data that does not conform with the formal structure of data models associated with relational databases or other forms of data tables, but nonetheless contain tags or other markers to separate semantic elements and enforce hierarchies of records and fields within the data. Examples include JSON and XML. 
3. **Structured data** is data that adheres to a pre-defined data model and is therefore straightforward to analyze. Structured data conforms to a tabular format with relationship between the different rows and columns. Examples: Excel files or SQL databases. Each of these have structured rows and columns that can be sorted.
#### Dati strutturali
A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. 
- Each record consists of one or more fields, separated by commas. 
- A CSV file typically stores tabular data (numbers and text) in plain text, in which case each line will have the same number of fields. 
- CSV is a common data exchange format that is widely supported by consumer, business, and scientific applications. 
A database is an organized collection of data and it can handle very complicated queries. 
- Relational databases became dominant in the 1980s. These model data as rows and columns in a series of tables, and the vast majority use SQL for writing and querying data. 
- In the 2000s, non-relational databases became popular, referred to as NoSQL because they use different query languages.
#### Caratteristiche di un data set

1. Dimensionalità (numero di colonne)
2. Generalità = il gruppo campione deve essere eterogeneo e vario
3. Sparsity (quando ci sono molti dati mancanti)

![[Pasted image 20240305165044.png]]
#### Data Processing
è il processo che trasforma i dati grezzi in un formato comprensibile

è gestire alcune cose:
- dati mancanti
- rumori o outliers
- presenza di duplicati 
- dimensione (quando è troppo grande)
## Algoritmi per il Data Science
in passato esisteva solo la statistica pura, oggi si è sviluppata e suddivisa in:
- statistica descrittiva
- statistica inferenziale
- modelli statistici

![[Pasted image 20240305165624.png|500]]
### Machine Learning
il _**machine learning**_ è un campo di studi che da a un computer l'abilità di imparare **senza** essere stato esplicitamente programmato (impara da esempi)

![[Pasted image 20240305170719.png|600]]

**step del machine learning**
![[Pasted image 20240305170855.png|500]]

**poi si costruisce un albero di decisione**
![[Pasted image 20240305172226.png|500]]
#### Reti neurali per Deep Learning
le **reti neurali** sono schemi che accettano come input dati non strutturati come immagini, suoni, segnali, testo...

le due architetture principali utilizzate sono
- Convolutional Neural Network - **CNN**
- Recurrent Neural Network - **RNN**

![[Pasted image 20240305172829.png|500]]




