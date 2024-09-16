
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

---
Process scheduling

- Round robin con quanto di tempo = 3

| Processi | tempo arrivo | burst time |
| -------- | ------------ | ---------- |
| A        | 0            | 7          |
| B        | 2            | 8          |
| C        | 5            | 3          |
| D        | 7            | 6          |
- bisogna tener traccia della lista dei processi ready

| A   | B   | A   | C   | B   | D   | A   | B   | D   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0   | 3   | 6   | 9   | 12  | 15  | 18  | 21  | 24  |
**Waiting Time**
- WT(A) = 12
- WT(B) = 11
- WT(4) = 4
- WT(D) = 11

***--Sbagliato--***

---
Paging

I:F
Offset più grande > 11111 > significa che abbiamo massimo nbit + 1 > 6
T.P più grande 24 bit
no v/i bit

1. Come viene composto l'indirizzo fisico?

{num frame | offset} = 32 bit
   26 bit          6 bit

\#num frame = 2
Taglia frame/page = 2<sup>6</sup> byte

2. Come viene composto l'indirizzo logico?

{num frame | offset} = ?? bit
.                     6 bit

?? possiamo lavorare con la page table > con il numero di entry
24 MB = 3 \* 8 \* 2<sup>20</sup> = 3 \* 2<sup>23</sup>

quanto è grande la singola entry? n di entry / taglia singola entry
taglia singola entry = 4 byte (3 byte = 24 (T.P) => approssimazione più vicina =  4 B = 2<sup>2</sup> B = 32 bit)

3 \* 2<sup>23</sup> / 2<sup>2</sup> = 3 \* 2<sup>21</sup> B potenza del 2 non pura > approssimazione piu vicina per eccesso > 2<sup>23</sup>
prendiamo la potenza e troviamo il *num frame*

{num frame | offset} = 32 bit
   23 bit          6 bit

---

Stampare le lettere BCEFG > processi P, Q
Tutti i soli output devono essere:
- EBFCG
- EFBCG

s=0
t=0
u=0

| P   | Q   |
| --- | --- |
| S.P |     |
| B   | E   |
| T.P | S.V |
| C   | F   |
| U.V | T.V |
|     | U.P |
|     | G   |

---
CPU scheduling

| Processi | Tempo di Arrivo | Burst time |
| -------- | --------------- | ---------- |
| p1       | 0               | 10         |
| p2       | 1               | 8          |
| p3       | 1               | 6          |
| p4       | 11              | 3          |
- Diagramma Gant per SJF preemptive

Tempo 0 > inizia p1
Tempo 1 > (entra p2 e p3) inizia p3 {e finisce}
Tempo 7 > inizia p2 (ha meno burst time)
Tempo 11 > (entra p4) inizia p4 {e finisce}
Tempo 14 > inizia p2 {e finisce}
Tempo 18 > inizia p1 {e finisce}

| Processi | Turnaround | Waiting time |
| -------- | ---------- | ------------ |
| p1       | 27         | 17           |
| p2       | 17         | 9            |
| p3       | 6          | 0            |
| p4       | 3          | 0            |
Tournaround medio = 27 + 17 + 6 + 3 / 4 = 53/4

---
output = AAABAAAB...

s=0
t=3

| P    | Q    |
| ---- | ---- |
| loop | loop |
|      | S.P  |
|      | S.P  |
| T.P  | S.P  |
| A    | B    |
| S.V  | T.V  |
|      | T.V  |
|      | T.V  |
>Questa soluzione funziona

---
- pagine 2<sup>17</sup> B
- IF 31 bit
- RAM (spazio ind fisico) = 1/4 spazio logico

1. \# frame?

I.F.      {n frame | offset}
.               n            m

sappiamo che **n+m = 31**
m = 17 => frame e pagine hanno stessa taglia
	=> taglia pagine = ***x di 2<sup>x</sup>*** = offset
n = 31 - 17 = 14 (n frame)

2. Taglia massima di una page table (assumiamo un solo bit di controllo)

Taglia page table = n° entry \* taglia singola entry

Taglia singola entry = n° bit per singolo frame = 14+1 bit v/i => 15 = 2 B

2<sup>31</sup> \* 4 = 2<sup>33</sup> B => grandezza massima di un processo = spazio di indirizzamento logico (nel nostro caso 4 volte il fisico *{=31}*)

2<sup>33</sup> B / 2<sup>17</sup> pagine = 2<sup>16</sup> 

Quindi taglia max page table = 2<sup>17</sup> (=> taglia del singolo frame)

---
7<sup>9</sup> % 9 = 
7<sup>9</sup> = 7<sup>8</sup> \* 7

7<sup>2</sup> % 9 = 4
7<sup>4</sup> % 9 = 4<sup>2</sup> % 9 = 7
7<sup>8</sup> % 9 = 7<sup>2</sup> % 9 = 4

= (4 \* 7) % 9 = 28 % 9 = 1

---
