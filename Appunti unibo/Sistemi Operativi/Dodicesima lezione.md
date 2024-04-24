[[https://www.cs.unibo.it/~sangio/SO_currentAA/Luc_SO/FileSystem/File_Systems1.pdf|Slides]]
## File Systems

un ***file system*** è un metodo chiaramente definito che un SO usa per archiviare, catalogare e ottenere i file

File
- dati, in qualsiasi formato
File system
- Set di file <u>nominati</u>, magari organizzati (cartelle)
- Informazioni sui file (**metadati**)
### Files
![[Pasted image 20240424122445.png|400]]

![[Pasted image 20240424122522.png|400]]
#### Attributi dei files

- **Nome** - solo informazioni in scrittura leggibile dall'uomo
- **Tipo** - necessario per strumenti che supportano più tipi
- **Locazione** - puntatore alla locazione del file nel dispositivo
- **Dimensione** - dimensione del file
- **Protezione** - controlla chi può leggere, scrivere o eseguire
- **Tempo, dati e identificazione utente** - dati per protezione, sicurezza e monitoraggio dell'utilizzo
- Informazioni sui file contenuti nella struttura di cartelle, mantenuta sul disco

---
Dal punto di vista logico abbiamo processi che accedono ai file > se il processo in questione ha diritto d'accesso deve conoscere i diritti di sicurezza e protezione del file

Diventa problematico che tutti gli accessi ai file debbano passare per gli attributi (*varrebbe a dire accedere di continuo in memoria secondaria per gli attributi*)

SO fa in modo che quando apre un file per la prima volta utilizza un operazione di <b><u>OPEN</u></b> di un processo, in modo che nei possibili futuri accessi su file saranno veloci, perchè ho già reperito le info in passato

per file utilizzati la prima volta si effettua un ***memory mapping*** dei file > portiamo in memoria centrale, non solo gli attributi, ma il file stesso, o un suo "pezzo" principale con l'obiettivo di rendere più rapidi i successivi accessi al file

<b><u>CLOSE</u></b> > chiusura del file > ci sbarazziamo di tutte le informazioni che abbiamo sul file > in particolare nella lista degli open file verrà eliminata la entry dei file

Questi attributi dei file sono organizzati a loro volta a secinda dei file system in maniera diversa

Open e Close sono delle <b><u>system call</u></b>, che il SO mette a disposizione per gestire i file system

---
![[Pasted image 20240424125040.png|400]]

![[Pasted image 20240424125057.png|400]]

Il SO a seconda del tipo di file mette a disposizione 2 tipi di accessi:
- **Sequenziale** > record > file su nastro > posso chiedere di avanzare al record logico successivo o precedente, una volta che sono sul record posso leggerlo, scriverlo, ecc.
- **Diretto** > il SO permette di leggere arbitrariamente un record logico n indipendente dal record logico in cui eravamo posizionati precedentemente

<font color="#b2a2c7">Open > uso del file (in base all'accesso) > Close</font>
<font color="#92cddc">al processo interessa come usare il file system, quali sono le system call per eseguire le operazioni</font>

![[Pasted image 20240424125206.png|400]]
### Directories

![[Pasted image 20240424125714.png|400]]

**==Informazioni in una Device Directory==**
- Nome
- Tipo
- Address (Indirizzo)
- lunghezza corrente
- lunghezza massima
- Data ultimo accesso 
- Data ultima modifica
- Id possessore
- Informazioni di protezione
**==Operazioni possibili==**
- cercare un file
- Creare un file
- Eliminare un file
- Listare un directory
- Rinominare un file
- Traverse the file system

![[Pasted image 20240424130405.png|300]] ![[Pasted image 20240424130429.png|300]] ![[Pasted image 20240424130453.png|300]] ![[Pasted image 20240424130531.png|300]]
