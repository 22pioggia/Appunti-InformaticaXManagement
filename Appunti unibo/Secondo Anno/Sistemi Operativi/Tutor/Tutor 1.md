##### Recap modello ISO/OSI

![[Pasted image 20240403122443.png]]

*TCP/IP*
- Applicazione
- Trasporto
- Rete
- Network Access

utilizziamo il TCP/IP (*internet protocol suite*) in quanto l'ISO/OSI non è adatto alla nostra realtà, ovvero non con una comunicazione senza errori

## Socket
**In teoria**
- Ad ogni _dispositivo_ collegato ad una rete è associato un _indirizzo_
- Ad ogni _servizio_ sul dispositivo è associato un _numero di porta_
- Ad ogni _servizio_ corrisponde un _processo_
- La comunicazione tra due dispositivi può essere descritta come una quintupla:
	- (protocollo, indirizzo locale, porta locale, indirizzo remoto, porta remota)
- Il socket 
	- è uno dei due endpoint di questo canale di comunicazione
	- rientra nel livello Sessione del modello OSI
	- agisce come interfaccia tra il livello Applicazione e quello Trasporto nella Internet Protocol Suite
**In pratica**
- Le appricazioni utilizzano la ***Socket API*** per inviare e ricevere messaggi tramite socket
- *Lato server* - _l'applicazione inizialmente ha comportamento passivo_
	1. Creazione del socket (con specifica porta e opzionalmente indirizzo)
	2. "Ascolto" sulla porta e all'indirizzo specificato, in attesa di una connessione
	3. Accettazione della richiesta di connessione
	4. La coppia di socket server-client forma il canale di comunicazione, attraverso cui vengono scambiati i dati
- _Lato client - l'applicazione ha comportamento attivo_
	1. Creazione del socket (specificando porta e indirizzo del server)
	2. La porta locale viene assegnata generalmente in automatico
	3. Richiesta di comunicazione al server
	4. La coppia di socket client-server forma il canale di comunicazione, attraverso cui vengono scambiati i dati
---
**Codice**
>Socket s = new Socket(host, port);
>Scanner from = new Scanner(s.getInputStream());
>PrintWriter to = new PrintWriter(s.getOutputStream(), true);
>
>...
>to.println("some request");
>String response = from.nextLine();
>...
>
s.close()

**Client**
>String host = "127.0.0.1"
>int port = 9000
>Socket s = new Socket(host, port);
>
...
s.close()

**Server**
>int port = 9000
>ServerSocket server = new ServerSocket(port);
>Socket s = server.accept();
>server.close();
>
...
s.close();

---

