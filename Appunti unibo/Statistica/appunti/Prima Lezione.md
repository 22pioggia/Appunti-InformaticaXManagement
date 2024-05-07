## Elementi di base della probabilità
### Spazio dei campioni
Un *esperimento* è un processo il cui risultato è soggetto ad incertezza
	Esistono due tipi di esperimenti: *deterministici* e *casuali*
Per un esperimento **E**, l'insieme di tutti i possibili risultati è detto **==spazio dei campioni S==**

![[Pasted image 20240422162401.png|500]]

Un ==*evento*== è un insieme di risultati, cioè un sottospazio dello spazio dei campioni.
### Definizione e proprietà della probabilità
Dato un esperimento e il suo spazio dei campioni, S, obiettivo della probabilità è assegnare ad ogni evento A un numero P(A), detto **probabilità dell'evento A** che dia una misura della possibilità che si verifichi l'evento A.
- Quindi la probabilità dell'evento A è una funzione:
$$P:S(A) \rightarrow R$$
dove S(A) è l'insieme di tutti i possibili eventi di A

La probabilità soddisfa i seguenti ***assiomi di Kolmogorov***:
$$\begin{align}
&1. \text{ }P(A) \geq 0 \space \forall A  \\
&2. \text{ }P(S) = 1 \\
&3. \text{ Se } A_{1},A_{2},\dots A_{n} \text{ sono eventi disgiunti allora:} \\
&\text{ - }P(A_{1}\cup A_{2}\cup \dots \cup A_{n}) = \sum_{i=1}^{n}P(A_{i}), \text{ } \forall n
\end{align}$$
Detto A <sup>C</sup> l'insieme complementare di A nello spazio dei campioni S, e detti A e B due eventi, valgono le seguenti proprietà:
$$\begin{align}
&1. \text{ } P(A^C)=1-P(A) \\
&2. \text{ } P(\oslash) = 0 \\
&3. \text{ Se } A \subset B \text{ allora } P(A) < P(B) \\
&4. \text{ } P(A \cup B) = P(A) + P(B) - P(A \cap B)
\end{align}$$
#### Il modello Equally Likely - ELM
In alcuni tipi di esperimenti tutti gli eventi hanno uguale probabilità di accadere, allora il modello utilizzato, detto **Equally Likely Model (ELM)**, calcola la probabilità di un evento A come:
$$P(A) = \frac{\text{numero di casi favorevoli}}{\text{numero di casi possibile}} = \frac{\#A}{\#S}$$
>***#*** - indica cardinalità -> numero degli elementi di

*Esempi classici di esperimenti di questo tipo sono il lancio di una moneta, il lancio di un dado, l'estrazione di una carta da un mazzo, ecc.*
### Metodi di conteggio
Nell'applicare il modello ELM è quindi necessario *contare* il numero di elementi di un insieme. Consideriamo quindi alcune tecniche di conteggio

<b><u>Principio della moltiplicazione</u></b>. Se un esperimento di compone di m fasi, realizzabili rispettivamente in n<sub>1</sub>, n<sub>2</sub> ... n<sub>m</sub> modi, allora l'intero esperimento potrà essere realizzato 
in n<sub>1</sub> n<sub>2</sub> ... n<sub>m</sub> modi
![[Pasted image 20240422171609.png|500]]

<b><u>Numero di permutazioni.</u></b> il possibile numero di *permutazioni* di *n* elementi è **n!**
#### Insiemi ordinati
Torniamo all'esperimento di estrazione di k palline da un'urna con n indistinguibili palline, ciascuna numerata con un diverso numero in \[1,n\]. Se considero insiemi *ordinati* (in cui cioè due insiemi con gli stessi k elementi ma estratti in ordine diverso sono considerati <u>diversi</u>), il numero di risultati che posso avere dall'esperimento è:
- n<sup>k</sup> se faccio l'esperimento *con reimmisione*
- n(n-1)...(n-k+1) nel caso *senza reimmissione*

![[Pasted image 20240422172347.png|500]]
#### Insiemi non ordinati
Sempre nell'esperimento precedente dell'estrazione di palline, se ora considero insiemi *non ordinati* (in cui cioè due insiemi con gli stessi k elementi ma estratti in ordine diverso sono considerati <u>uguali</u>), il numero di risultati che posso avere dall'esperimento è:
- con reimmissione $$\frac{(n-1+k)!}{(n-1)!k!}$$
- senza reimmissione (*coefficiente binomiale*)
	![[Pasted image 20240422172923.png]]

==**Esempio**==
_Lancio 3 dadi. Quante possibili sequenze di numeri posso avere, senza considerare il diverso ordine dei numeri nella sequenza_

**con reimmissione**
n = 6
k = 3
$$\frac{n-1+k!}{n-1!k!}=\frac{8!}{5!3!}=56$$

---
### Probabilità condizionata ed eventi indipendenti
*Supponiamo di estrarre due carte da un mazzo. Qual è la probabilità di estrarre due carte di cuori?
Per quanto riguarda la prima carta, ==A={"la prima carta è di cuori"}== la probabilità è 1/4.
Per quanto riguarda la seconda, ==B={"la seconda carta è di cuori"}==, la probabilità di B dipende ovviamente dalla prima carta estratta > Se la prima NON era di cuori, la probabilità è 13/51, ma se la prima carta era di cuori diventa 12/51. Quindi:* $$P(B|A) = \frac{12}{51}$$
*La seconda probabilità è quindi condizionata dal primo evento. Si parla allora di **probabilità condizionata***

<b><i><u>Definizione.</u></i></b> Dati due eventi *A* e *B*, si definisce probabilità condizionata di *B* dato *A* e si scrive P(B|A): $$P(B|A) = \frac{P(A \cap B)}{P(A)}, \text{ if } P(A)>0$$ $$P(A|B) = \frac{P(A \cap B)}{P(B)}, \text{ if } P(B)>0$$

==**Esempio 1**==
*Lancio una moneta tre volte. Lo spazio dei campioni è:*

*S* = {TTT, TTC, TCT, TCC, CTT, CTC, CCT, CCC}

*Sia A = {escono due T} e B = {escono una T e una C}.*

Si ha che: 

$$\begin{align}
&P(A) = 4/8 = 1/2  \\
&P(B) = 6/8 = 3/4 \\
&P(A \cap B) = 3/8 \\ 
\end{align}$$
Quindi:
$$\begin{align}
&P(B|A) = \frac{3/8}{1/2}=\frac{3}{4} \\
&P(B|A) = \frac{3/8}{3/4}=\frac{1}{2}
\end{align}$$
==**Esempio 2**==
*Si supponga di lanciare un dado due volte e si considerino gli eventi* 
*A = {la somma dei numeri è 9} e B={il primo dado è 3}*

*A = {(3,6) , (4,5) , (6,3) , (5,4)}*
*B = {(3,1) , (3,2) , (3,3) , (3,4) , (3,5) , (3,6)}*

\#S = 36
$$\begin{align}
&P(A) = \frac{4}{36} = \frac{1}{9} \\
&P(B) = \frac{6}{36} = \frac{1}{6}  \\
 \\
&A\cap B = \{(3,6)\} \\
&P(A\cap B)=\frac{1}{36} \\
 \\
&P(A|B)=\frac{1/36}{1/6}= \frac{1}{6}  \\
&P(A|B)=\frac{1/36}{1/9}= 4
\end{align}$$

<b><i><u>Definizione.</u></i></b> Due eventi *A* e *B* sono detti **indipendenti** se: $$P(A\cap B)=P(A)P(B)$$
In caso contrario, sono detti *dipendenti*
Seguono alcune proprietà.
Se *A* e *B* sono eventi *indipendenti* si ha:

1. *A* e <i>B<sup>C</sup></i> sono indipendenti.
2. <i>A<sup>C</sup></i> e B sono indipendenti.
3. <i>A<sup>C</sup></i> e <i>B<sup>C</sup></i> sono indipendenti.