Gli ***URI*** (Uniform Resource Identifier) sono una sintassi usata in WWW per definire i nomi e gli indirizzi delle risorse 
- Sono stati verosimilmente il fattore determinante per il successo del WWW 

Attraverso gli URI, il WWW è stato in grado di identificare risorse accessibili tramite il proprio protocollo, HTTP, e tramite tutti gli altri protocolli esistenti (FTP, Telnet, ecc.).

Il punto principale a cui gli altri sistemi non erano arrivati era una <u>sintassi universale, indipendente dal protocollo e facilmente memorizzabile (o quasi) con cui identificare le risorse di rete</u>.

---
Gli Uniform Resource Identifier (URI) sono, per definizione: 
- **Uniform Resource Locator (URL)**: una sintassi che contiene informazioni immediatamente utilizzabili per accedere alla risorsa (ad esempio, il suo indirizzo di rete) 
- ***Uniform Resource Names (URN)***: una sintassi che permette una etichettatura permanente e non ripudiabile della risorsa, indipendentemente dal riportare informazioni sull'accesso. Necessario quindi un meccanismo di traduzione verso gli URL

![[Pasted image 20240918122225.png|500]]

---
**Risorse vs File**

Una risorsa non è necessariamente un file presente su un filesystem ma potrebbe essere: 
- in un database, e l’URI essere la chiave di ricerca 
- il risultato dell’elaborazione di un’applicazione, e l’URI essere i parametri di elaborazione. 
- una risorsa non elettronica (un libro, una persona, un pezzo di produzione industriale) e l'URI essere il suo nome, ad esempio nel caso di account Twitter, Instagram, etc. 
- un concetto astratto 
 
>Per questo si usa il termine Risorsa, invece che File, e si fornisce una sintassi indipendente dal sistema effettivo di memorizzazione.
---
## Componenti 
![[Pasted image 20240918123111.png|500]]
<b><font color="#00b0f0">schema : [// authority]</font></b>
- Lo schema (negli URL è il protocollo) é identificato da una stringa registrata presso IANA usata come prefisso. 
- L’autorità è a sua volta divisa in: – authority = <b><font color="#00b0f0">[userinfo @] host [: port]</font></b> 
	- La parte **userinfo** non deve essere presente se lo schema non prevede identificazione personale. 
	- La parte **host** è o un nome di dominio o un indirizzo IP. 
	- La **port** può essere omessa se ci si riferisce ad una well-known port (per http è la porta 80).
<b><font color="#00b0f0">path</font></b>
- La parte **path** è la parte identificativa della risorsa all’interno dello spazio di nomi identificato dallo schema e (se esistente) dalla authority. 
- La parte path è divisa in blocchi separati da slash “*/*”, ciascuno dei quali è un componente del path organizzato in gerarchia. 
	- In questo caso diventano significativi gli pseudo componenti “*.*” e “*..*”.
<b><font color="#00b0f0">[? query]</font></b>
- La parte **query** individua un’ulteriore specificazione della risorsa all’interno dello spazio di nomi identificato dallo schema e dall’URI precedente. 
- Di solito questi sono parametri passati all’URI (un processo) per specificare un risultato dinamico (es. l’output di una query su un motore di ricerca). 
- Tipicamente ha la forma *nome1=valore1&nome2=valore+in+molte+parole*
<b><font color="#00b0f0">[# fragment]</font></b>
- La parte **fragment** individua una risorsa secondaria (una risorsa associata, dipendente o in molti casi un frammento) della risorsa primaria 
- E’ tutta la parte che sta dopo al carattere di hash “#”. 
- Usata ad esempio per identificare sezioni all'interno di una pagina HTML

![[Pasted image 20240918132132.png|500]]
![[Pasted image 20240918132153.png|500]]
![[Pasted image 20240918132213.png|500]]
## Server Web
Un Server Web è un software in grado di gestire richieste HTTP 
- E’ in ascolto su una porta TCP/IP (di default 80) 
- La richiesta indica una risorsa tramite un URL e usa quindi lo schema HTTP o HTTPS
![[Pasted image 20240918132340.png|500]]
## Route
Una route è un'associazione della parte path di un URI ad una risorsa gestita o restituita da un server web
- ***Managed route***: il server associa ogni URI ad una risorsa o attraverso il file system locale             (*risorse statiche*) oppure generate attraverso una computazione (*risorse dinamiche*). 
	- Molto di moda oggi con node.js e express.js 
- ***File-system route***: il server associa la radice della parte path ad una directory del file system locale e ogni filename valido all'interno di quella directory genera un URI corretto e funzionante. 
	- Il vecchio approccio via web server come Apache

![[Pasted image 20240918132942.png|500]]

**Managed Route**
![[Pasted image 20240918132824.png|500]]
## URI reference (o URI relativo)
- Un ***URI assoluto*** contiene tutte le parti predefinite dal suo schema, esplicitamente precisate. 
- Un ***URI gerarchico*** può però anche essere relativo, (detto tecnicamente un URI reference) ed in questo caso riportare solo una parte dell'URI assoluto corrispondente "tagliando progressivamente parti da sinistra" 
- Un ***URI reference*** fa sempre riferimento ad un ***URI di base*** (ad esempio, l'URI assoluto del documento ospitante l'URI reference) rispetto al quale fornisce porzioni differenti.

 >**Es.:** l'URL reference pippo.html posto dentro al documento di URI <font color="#ff00dd">http://www.sito.com/dir1/dir2/pluto.html</font> fa riferimento al documento il cui URI assoluto è <font color="#ff00dd">http://www.sito.com/dir1/dir2/pippo.html</font>

Risolvere un URI relativo significa identificare l'URI assoluto cercato sulla base dell'URI
![[Pasted image 20240918133951.png|500]]
![[Pasted image 20240918134009.png|500]]
