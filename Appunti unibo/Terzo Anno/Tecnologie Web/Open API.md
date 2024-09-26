## YAML
YAML (Ain't a Markup Language) è una linearizzazione di strutture dati con sintassi ispirata a Python: 
- simile a JSON (in realtà un superset) 
- indentazione come modello di annidamento 
- supporto di tipi scalari (stringhe, interi, float), liste (array) e array associativi (coppie \<chiave>:\<valore>)

![[Pasted image 20240925122613.png|400]]

**Open AI (2.0) in YAML**
![[Pasted image 20240925123520.png|300]]
## Sezione PATH
- La parte centrale di un'API descrive i percorsi (URL) corrispondenti alle operazioni possibili sull'API 
- Seguono la struttura: //\<host>/\<basePath>/\<path>
- Per ogni percorso (path o endpoint) si definiscono tutte le possibili operazioni che, secondo i princìpi REST, sono identificate dal metodo HTTP corrispondente 
- Per ogni path quindi ci sono tante sottosezioni quante sono le operazioni e per ognuna: 
- Informazioni generali 
- Parametri di input e di output

![[Pasted image 20240925124319.png|450]]
## Parametri di Input
I parametri in input sono descritti nella sezione parameters e per ogni parametro è possibile definire: 
- tipo del parametro: keyword **in** che può assumere valori **path**, **query** o **body** 
- nome (*name*) e descrizione (*description*) 
- se è opzionale o obbligatorio (*required*) 
- formato del/i valore/i che il dato può assumere (*schema*) 
	- Il tipo può essere scalare (*interi, stringhe, date, ecc.*), o un oggetto o un vettore di valori scalari o oggetti

Esempi di parametri *path* e *query*
![[Pasted image 20240925124536.png|450]]

Esempi di parametri nel *body*
![[Pasted image 20240925124738.png|450]]
## Oggetti e Definizioni
- Nell'esempio precedente il body contiene un oggetto di tipo ***User***; viene infatti passata un'intera risorsa (o meglio la sua rappresentazione) come parametro 
- La sezione ***definitions*** permette di definire i tipi degli oggetti, le loro proprietà e possibili valori 
- Questi tipi possono essere referenziati (tramite ***schema*** -> ***$ref***) sia nelle richieste che nelle risposte

Esempi di schemi
![[Pasted image 20240925125016.png|450]]
## Output
- L'output (dati e codici e messaggi di errore) sono definiti attraverso la keyword ***responses*** 
- Si specifica il tipo di output atteso nel *body* della risposta 
- Inoltre ogni risposta ha un id numerico univoco, associato al codice HTTP corrispondente 
	-  <font color="#ff00dd">200</font> viene usato per indicare che non c’è stato alcun errore 
	- da <font color="#ff00dd">400</font> in su vengono in genere usati per indicare messaggi di errore

Esempio di risposta
![[Pasted image 20240925125255.png|450]]

Editor -> [Swagger](https://editor.swagger.io/)
