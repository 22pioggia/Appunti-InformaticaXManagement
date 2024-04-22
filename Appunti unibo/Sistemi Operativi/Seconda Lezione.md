## Parallelismo

>ormai i processori sono velocissimi, e siamo praticamente arrivati a limite, quindi per ottimizzarli ancora di più si ricorre alla concorrenza -> _**parallelismo**_
##### Pipelining
un caso semplice di _**parallelismo**_, divide l'operazione in tante sottofasi e le esegue contemporaneamente (non per forza le stesse fasi=_sottoperiodi_ di ogni operazione), scorrendole nella pipeline (=una sorta di array, nell'esempio del prof ha 3 caselle)

==il pipelining è il motivo per cui la [[Prima Lezione#^d81ac6|Control unit]] è divisa in 3 unità==

affinchè il pipelining funzioni è necessario che le fasi siano equilibrate:
**se c'è una fase più lenta le altre devono adeguarsi ad essa**

>nel caso delle fasi della **_control unit_** l'execute è più lunga, per risolvere questo problema duplichiamo la execute unit e aggiungiamo un buffer per smistare le informazioni arrivate dalla decode unit

questo prende il nome di _**superscalarità**_

purtroppo ciò non è abbastanza, ci sono casi in cui una determinata istruzione dipende da un'altra, quindi finchè quest'ultima non è completata la prima non può procedere

o in casi più gravi un'istruzione può "sorpassarne" un'altra e il processo terminerebbe con un valore errato

per poter essere sicuri di utilizzare questo schema bisogna fare un _**grafo delle dipendenze**_, ad occuparsene è il processore, ma l'operazione richiede tempo

=> per questo nel meccanismo di pipelining c'è un trade off tra il tempo che impiega il processore a fare ciò e il tempo ridotto dall'implementazione del parallelismo
##### Multicore 
_suddivido il processore in più sottounità che siano esse stesse dei processori_

Grosso vantaggio => ci permette di eseguire contemporaneamente più attività (soprattutto se indipendenti)
## Interrupts

come facciamo a capire quando un dispositivo I/O ha terminato la sua funzione?

_**prima**_ si interrogava spesso la periferica per capire quando ha terminato(_**polling**_), il che è inefficiente, potremmo interrogare la periferica troppe volte inutilmente o troppo poco spesso e perdere del tempo in cui avrei potuto utilizzare il dispositivo 

_**oggi**_ ciò è stato ottimizzato 
	la periferica manda un segnale(**interrupt**) al processore al termine della sua funzione,
	fra un ciclo e l'altro del processore c'è un bit che si modifica in caso di ricevimento del segnale, in maniera tale da "informare il processore", avviene quindi un'interazione tra processore e SO, quest'ultimo viene avvertito dell'interrupt, analizza il suo tipo in base al suo codice confrontandolo con il vettore di interrupts (contiene le informazioni)
esiste anche un concetto di priorità tra interrupt, ognuno ha il suo livello di priorità

quando il processore si sta occupando di una interrupt non controlla che ce ne siano altre, è importante non perdere quelle che arrivano => si necessita di un _**sistema di storaggio delle interrupts**_

il sistema operativo deve avere una tabella per rimanere informato sullo stato dei dispositivi
![[Pasted image 20240228124350.png|400]]

## DMA - Direct Memory Access

_ci sono dispositivi I/O molto rapidi e che gestiscono grandi quantità di dati, vogliamo evitare che inviano quantità spropositate di interrupts che rallenterebbe sostanzialmente il processo_

Il DMA è un circuito integrato dei dispositivi I/O, formato da 2 registri (uno per l'indirizzo in memoria e una dimensione n)

quando dobbiamo trasferire grandi quantità di dati setto questi registri che mi creano dello spazio in memoria, i dati sono trasferiti dalla memoria centrale a quella secondaria, liberando così il processore

alla fine del processo viene inviato un solo interrupt

>_**Problema del DMA**_ = condivide la memoria centrale (**RAM**) con il processore

## Memoria

- Memoria centrale - (RAM,ROM,..)
		_memoria molto grande e rapida, quando si spegne la macchina si perde tutto_
- Memoria secondaria
		_estensione della memoria centrale molto capiente ma meno rapida, non viene perso nulla in caso di spegnimento_
- Magnetic disks 
		_rigid metal or glass platters covered with magnetic recording material __
	- Disk surface is logically divided into tracks, which are subdivided into sectors. 
	- The disk controller determines the logical interaction between the device and the computer.
- Memoria cache
		_chip esterno al processore ma molto vicino, essendo molto vicina il tempo di propagazione del segnale è molto rapido
		tipicamente contiene  quelle informazioni che supponiamo saranno utilizzate dal processo futuro_
		per sapere quale info serviranno usiamo diversi principi, ad esempio il **principio di località dei processi** -> in sostanza si cerca di capire quale informazione viene utilizzata più spesso

==Principio di località dei processi==
	_"Durante l'esecuzione di una data istruzione presente in memoria, con molta probabilità le successive istruzioni saranno ubicate nelle vicinanze di quella in corso. Nell'arco di esecuzione di un programma si tende a fare riferimenti continui alle stesse istruzioni"_
- Località spaziale
- Località temporale

>nel caso di [[Appunti unibo/Sistemi Operativi/Seconda Lezione#Multicore|multicore]] ogni core ha la sua piccola cache composta di registri, una cache interna al processore condivisa dai core e una cache esterna

davanti tutti questi livelli di memoria cache cominciano a verificarsi problemi di consistenza, i quali vengono risolti tramite protocolli di cache coherence

**Testina mobile di una memoria disco**
![[Pasted image 20240228123436.png|200]]
le memorie disco sono composte da diversi dischi magnetici, uno sopra l'altro, con bit incisi e testine(1 per disco) che leggono i dati in _maniera meccanica_
	-> leggo blocchi di dati(settori) in un colpo solo

il discorso sulla memorizzazione di dati sui dischi è fondamentale per minimizzare i tempi di lettura e scrittura dei dati.
### Gerarchia
![[Pasted image 20240223153749.png|400]]

La gerarchia delle memorie fa affiorare il problema della consistenza dei dati(processi che operano sullo stesso dato hanno una visione diversa di esso, in quanto non abbiamo _sempre_ il dato aggiornato) 
	-> problema della multiprogrammazione e dei multiprocessori

## Protezione Hardware
### Operazioni Dual-Mode
_esistono particolari istruzioni(privilegiate) che soltanto il SO deve eseguire, vogliamo che l'utente possa interagirci tramite il SO_
>tutte le operazioni I/O sono privilegiate

per implementare questo genere di protezione hardware basta aggiungere un bit che ci permette di differenziare tra:
- user mode
- monitor mode(=supervisor mode o system mode)
### Protezione memoria
_in modo da avere protezione memoria, aggiungiamo due registri che determinano il range di indirizzi alla quale un programma può accedere_
- **base register**
	-> tiene il minimo indirizzo fisico di memoria possibile
- **limit register**
	-> contiene il range
la memoria fuori dal range è **protetta**

![[Pasted image 20240228130337.png]] ![[Pasted image 20240228130813.png|430]]
quando si esegue in monitor mode, il SO ha accesso sia alla monitor che user memory
	-> le istruzioni di caricamento per i **base** e **limit** registers sono istruzioni privilegiate

### Protezione CPU
_implementiamo meccanismi di timesharing_

Timer -> interrompe il computer dopo un certo periodo di tempo per assicurarsi che il SO mantenga il controllo
- il timer è decrementato ogni tick del clock
- quando il timer raggiunge 0, viene mandato un interrupt
**Load-timer** è un istruzione privilegiata

[[Appunti unibo/Sistemi Operativi/Quarta Lezione|Next]]
