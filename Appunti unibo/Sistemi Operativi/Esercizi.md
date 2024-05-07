
| A    | B    | C    |
| ---- | ---- | ---- |
| loop | loop | loop |
| P(T) | P(S) | P(S) |
| PA   | PB   | PC   |
| V(S) | V(S) | V(S) |
in questo modo stamperebbe *PA* e poi una serie infinita di o *PB* o *PC*, senza mai più toccare *PA*

t=1,   s=0,   u=0

| A    | B    | C    |
| ---- | ---- | ---- |
| loop | loop | loop |
| P(T) | P(S) | P(U) |
| PA   | PB   | PC   |
| V(S) | V(U) | V(T) |
Soluzione giusta, ma **non permette** tutto il determinismo che il vincolo iniziale richiedeva

==Esercizio con non determinismo== => *una soluzione deterministica è **semigiusta***, rappresenta un sottoinsieme delle soluzioni che mi servono (*!ma non tutte*)

t=0,   s=2

| A    | B    | C    |
| ---- | ---- | ---- |
| loop | loop | loop |
| P(T) |      |      |
| P(T) | P(S) | P(S) |
| PA   | PB   | PC   |
| V(S) | V(T) | V(T) |
| V(S) |      |      |
- funziona ma non del tutto (!RISCHIO DI UN DEADLOCK CLAMOROSO) 
- dio merda

t=1,   u=1 s=0 s'=0

| A     | B    | C     |
| ----- | ---- | ----- |
| P(U)  |      |       |
| P(T)  | P(S) | P(S') |
| PA    | PB   | PC    |
| V(S)  | V(U) | V(T)  |
| V(S') |      |       |
- grazie a dio questa funziona
---

| page | loadtime | last_ref | ref bit |
| ---- | -------- | -------- | ------- |
| 0    | 19       | 30       | 1       |
| 1    | 29       | 35       | 0       |
| 2    | 8        | 32       | 1       |
| 3    | 26       | 39       | 0       |
loadtime = tempo in cui è stato caricato
last ref = tempo ultimo accesso, ultimo utilizzo
ref bit = bit messo a 0 a intervalli regolari, quando frame usato si setta a 1, ci dice recente uso del frame

***==Quale sarà il frame "vittima" nei seguenti algoritmi?===***
- FIFO -> page \#2, perchè è il primo che è stato caricato
- LRU  -> page \#0, perchè ha il tempo di utilizzo più vecchio
- Second chance - assumendo che l'ordine delle pagine siano dalla più vecchia in avanti 
	>non viene sostituita sempre la più vecchia (*con load time minore*), se ha il ref bit a 1 gli viene data una seconda chance -> page \#3
---

Page table

| n   | Frame | bit validità |
| --- | ----- | ------------ |
| 0   | 00101 | i            |
| 1   | 00001 | v            |
| 2   | 11011 | v            |
| 3   | 11000 | v            |
| 4   | 10001 | i            |
| 5   | 11000 | i            |
| 6   | 00111 | v            |
pagine 2<sup>6</sup> bytes => 2<sup>6</sup> bit offset disponibili

Quale dei seguenti indirizzi produce un page fault?
	Se non c'è page fault quale indirizzo fisico?
1. 0000101101001
	0000101 n pagina => 5
	101001 offset
	la pagina n.5 è invalida -> page fault
2. 0000010010010
	0000010 n pagina => 2
	010010 offset
	entry 2 > valid > no page fault
	indirizzo fisico: 11011 010010 (indirizzo nell'entry + offset)
3. 0000100010101
	0000100 n pagina => 4
	010101 offset
	entry 4 > invalid > page fault
4. 0000001110101
	0000001 n pagina => 1
	110101 offset
	entry 1 > valid 
	indirizzo fisico: 00001 110101
---

Cifrario di cesare - con un alfabeto di 21 caratteri quante sono le chiavi?
	chiavi => 21

fare shift secondo *3478* polialfabeto -> la prima di 3, seconda di 4 e così via

quante sono le possibili chiavi se usassi le permutazioni?
	chiavi => 21!

Usare le proprietà dell'aritmetica modulare per calcolare 26<sup>5</sup> % 11

26<sup>5</sup> % 11 = (26 % 11)<sup>5</sup> % 11 = 4<sup>5</sup> % 11 = (4<sup>2</sup> x 4<sup>2</sup> x 4) % 11

= ((4<sup>2</sup> % 11)  (4<sup>2</sup> % 11) 4) % 11 = (5 x 5 x 4) % 11 = ((25 % 11) x 4) % 11 

= (3 x 4) % 11 = 12 % 11 = 1

