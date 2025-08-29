 [Slides](https://virtuale.unibo.it/pluginfile.php/2274112/mod_resource/content/4/13_Normalizzazione.pdf)
 
 Le ridondanze sui dati possono essere di due tipi: 
 - ***Ridondanza concettuale*** -> non ci sono duplicazioni dello stesso dato, ma sono memorizzate informazioni che possono essere ricavate da altre già contenute nel DB.
 - ***Ridondanza fisica*** -> esistono duplicazioni sui dati, che possono generare anomalie nelle operazioni sui dati

![[Pasted image 20250205192517.png|600]]
![[Pasted image 20250205192551.png|600]]
![[Pasted image 20250205192622.png|600]]
**Anomalia di aggiornamento** >> se varia lo stipendio, devo modificare tutte le tuple del docente!
**Anomalia di cancellazione** >> Se un docente non ha corsi, dobbiamo eliminare tutti i suoi dati

- **V1**. Ogni dipartimento ha un solo direttore. 
- **V2**. Ogni docente ha un solo stipendio (anche se ha più corsi).
- **V3**. Lo stipendio dipende dal livello e non dal dipartimento o dal corso tenuto! 
>PROBLEMA: Abbiamo usato un’unica tabella per rappresentare informazioni eterogenee!

Da dove deriva una ridondanza?
- Traduzioni non corrette nel modello logico relazionale
- Errori durante la progettazione concettuale 
## Dipendenza Funzionale
[p.14-27](https://virtuale.unibo.it/pluginfile.php/2274112/mod_resource/content/4/13_Normalizzazione.pdf)
x esempi (poco comprensibili) e "definizioni"(ancora meno comprensibili) ((Che in realtà ora ho pseudo capito quindi nvm))

![[Pasted image 20250205193006.png|600]]
![[Pasted image 20250205193032.png|600]]

- Le dipendenze funzionali sono una generalizzazione del vincolo di chiave (*e di superchiave*).
- Data una tabella con schema R(X), con superchiave K. 
	- *Esiste un vincolo di dipendenza funzionale tra K e qualsiasi attributo dello tabella o combinazione degli stessi.*
$$K\to X_{1},\, X_{1} \; \subseteq \,X $$
![[Pasted image 20250205194035.png|600]]
![[Pasted image 20250205194204.png|600]]
![[Pasted image 20250205194332.png|600]]
>Perchè DF3 non causa anomalie a differenza di DF1 e di DF2?
- Motivo: 
	- **DF3** ha sulla sinistra una (*super*)chiave.
	- **DF1** e **DF2** non contengono una (*super*)chiave.

<b><u><font color="#ff0000">!!!</font></u></b>
![[Pasted image 20250205194528.png|600]]

![[Pasted image 20250205194659.png|600]]
![[Pasted image 20250205194715.png|600]]
![[Pasted image 20250205194737.png|600]]
![[Pasted image 20250205194759.png|600]]
![[Pasted image 20250205195108.png|600]]
![[Pasted image 20250205195148.png|600]]
![[Pasted image 20250205195511.png|600]]
![[Pasted image 20250205195529.png|600]]
D. Tutte le decomposizioni vanno bene? 

R. NO! Le decomposizione deve soddisfare tre proprietà:
- **Soddisfacimento della FNBC**: ogni tabella <u>deve essere in FNBC.</u> 
- **Decomposizione senza perdita**: il join delle tabelle decomposte <u>deve produrre la relazione originaria</u>.
- **Conservazione delle dipendenze**: il join delle tabelle decomposte <u>deve rispettare tutte le DF dello schema originario</u>.

![[Pasted image 20250205195906.png|600]]

<b><u><font color="#ff0000">!!!</font></u></b>
![[Pasted image 20250205195940.png|600]]
![[Pasted image 20250205200045.png|600]]
![[Pasted image 20250205200138.png|600]]
## Algoritmo di Normalizzazione in Terza Forma Normale (TFN)
[p.42](https://virtuale.unibo.it/pluginfile.php/2274112/mod_resource/content/4/13_Normalizzazione.pdf)

![[Pasted image 20250205200403.png|600]]
![[Pasted image 20250205200426.png|600]]
![[Pasted image 20250205200509.png|600]]
IDEA alla base dell’algoritmo di normalizzazione:
- <u><b>Semplificare l’insieme di dipendenze F</b></u>, rimuovendo quelle non necessarie, e trasformando ogni dipendenza in modo che nella parte destra compaia un singolo attributo.
- <u><b>Raggruppare gli attributi coinvolti nelle stesse dipendenze</b></u>, e costruire le tabelle corrispondenti.
- <u><b>Assicurarsi che almeno una delle tabella prodotta contenga la chiave</b></u> della tabella originaria.

![[Pasted image 20250205200801.png|600]]
![[Pasted image 20250205200734.png|600]]

![[Pasted image 20250205200945.png|600]]
![[Pasted image 20250205201108.png|335]]![[Pasted image 20250205201124.png|335]]

![[Pasted image 20250206165954.png|600]]
![[Pasted image 20250206170012.png|600]]

![[Pasted image 20250206165658.png|600]]

![[Pasted image 20250206170245.png|600]]
![[Pasted image 20250206170316.png|600]]

![[Pasted image 20250206170417.png|600]]
![[Pasted image 20250206170501.png|600]]
![[Pasted image 20250206171722.png]]

![[Pasted image 20250206171944.png]]
![[Pasted image 20250206172412.png]]
![[Pasted image 20250206172541.png]]
![[Pasted image 20250206172610.png]]
![[Pasted image 20250206172628.png]]

![[Pasted image 20250206173023.png]]
![[Pasted image 20250206173044.png]]
![[Pasted image 20250206173059.png]]
***4\****
![[Pasted image 20250206173119.png]]
![[Pasted image 20250206173200.png]]
![[Pasted image 20250206173217.png]]

==***Esempio***==
![[Pasted image 20250206173255.png]]
![[Pasted image 20250206173306.png]]
![[Pasted image 20250206173316.png]]

Perchè si chiama ***Terza Forma Normale (TFN)***?
- **Prima Forma Normale (PFN)** -> si suppone sempre rispettata
- **Seconda Forma Normale (SFN)** -> variante debole della TFN.
Procedendo per gradi, si dovrebbe normalizzare in PFN, poi in SFN, e quindi in TFN.

![[Pasted image 20250207192107.png]]
![[Pasted image 20250207192124.png]]

- Una tabella con schema R(U) è in ***Quarta Forma Normale (4FN)*** se non presenta dipendenze multivalore non banali diverse da una chiave della tabella. **Es. X -> Y X -> Z**
- Una tabella con schema R(U) è in ***Quinta Forma Normale (5FN)*** se non è possibile decomporre ulteriormente la tabella senza perdere informazioni.

[[(12) Web Information System|Next.]]
