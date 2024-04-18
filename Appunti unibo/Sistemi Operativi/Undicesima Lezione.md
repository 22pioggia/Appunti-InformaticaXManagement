[[https://www.cs.unibo.it/~sangio/SO_currentAA/Luc_SO/Security/SecurityKurosePartI-rotated.pdf| Slide]]
## Network Security
quali proprietà vogliamo garantire?
- ***confidentiality***: solo il *sender* e il *receiver* devono capire il messaggio
	- sender cripta il messaggio 
	- receiver decritta il messaggio 
- ***Autenticazione***: sender e receiver vogliono confermare l'identità dell'altro 
- ***Integrità del messaggio***: sender e receiver vogliono assicurarsi che il messaggio non venga alterato (in transito o in seguito) senza essere rilevato 
- ***Accesso e disponibilità***: i servizi devono essere accessibili e disponibili per gli utenti

![[Pasted image 20240417132640.png|400]]

![[Pasted image 20240417133415.png|400]]

![[Pasted image 20240418094949.png|400]]

![[Pasted image 20240418095347.png|400]]

![[Pasted image 20240418095421.png|400]]

blocchi diversi potrebbero essere tradotti nello stesso modo, o qualcuno potrebbe intercettare le informazioni e, utilizzando un criptaggio statico, ovvero sempre uguale, si potrebbe capire il codice > dobbiamo inserire della ***randomness***

---
m<sub>i</sub> = blocco di codice da codificare
r<sub>i</sub> = blocco random

m<sub>1</sub> = 010
r<sub>1</sub> = 110
m<sub>1</sub> XOR r<sub>1</sub> = 100

K<sub>s</sub>(100) = 011 = c<sub>1</sub>    -messaggio criptato

c<sub>1</sub> = 011
r<sub>1</sub> = 110
K<sub>s</sub><sup>-1</sup>(011) = 100    -chiave di decriptazione

K<sub>s</sub><sup>-1</sup> + r<sub>1</sub> = m<sub>1</sub>
100 + 110 = 010   -messaggio decriptato

chi invia il messaggio non invia solo il cyphertext (c<sub>1</sub>), ma anche il bit random, ciò non è pericoloso -> ci serve comunque il K<sub>s</sub>

---
==Tabella==
Blocchi = U bit
Dimensione tabella = 2<sup>U</sup>
Numero totale chiavi = 2<sup>U</sup>!

Sender e receiver devono avere accesso alla tabella
	nelle crittografie a chiave simmetrica la tabella deve essere privata a entrambi, è buona norma <b><u>rigenerare a intervalli regolari una nuova tabella</b></u>
### Crittografia a chiave simmetrica - DES
DES = Data Encryption Standard

>Problema = dover manipolare un blocco di bit di dimensioni considerevoli
	Idea = pensiamo il blocco in sottoblocchi, usiamo un pò del bit della chiave per una porzione dei nostri bit

Primo passaggio - tutti i bit vengono tradotti separatamente (applicando la funzione ***f***)

Dopo ciò aggiungiamo delle fasi in cui modifichiamo l'ordine dei bit =>ho altri bit che mi dicono come commutare i bit di questa frequenza => effettuiamo uno ***Scramble***

![[Pasted image 20240418110440.png|250]]

Essenzialmente uso <u>tante volte</u> funzioni che <u>cambiano pochi bit</u> per arrivare a un messaggio criptato

Vantaggi
- efficiente
- rapido
Svantaggi
- segretezza della chiave
- n persone che vogliono comunicare, utilizzeranno troppe chiavi -> almeno n<sup>2</sup>

**come posso fare?**
- auggiungo un autorità centrale (di cui posso fidarmi)
- ottengo un numero lineare di chiavi
- la comunicazione non è più diretta
	devo comunicare prima con l'autorità centrale per reperire le chiavi
#### Crittografia a chiave pubblica
![[Pasted image 20240418112136.png|500]]

in questo caso abbiamo <u>2 chiavi</u>
- K<sub>B</sub><sup>+</sup> - chiave pubblica - utilizzata per criptare
- K<sub>B</sub><sup>-</sup> - chiave privata - utilizzata per decriptare

Requisiti
- Nessuno deve poter ottenere nessuna delle due chiavi
- devo poter anche frae operazioni inverse
	*Ex. chiave privata per criptare e chiave pubblica per decriptare*
	**Sarà alla base delle firme digitali**

![[Pasted image 20240418120049.png|400]]

![[Pasted image 20240418123623.png|400]]

