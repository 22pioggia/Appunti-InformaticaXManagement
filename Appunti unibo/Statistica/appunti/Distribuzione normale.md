>La Distribuzione Normale o Gaussiana è la distribuzione **più importante ed utilizzata in tutta la statistica**

- La curva delle frequenze della distribuzione Normale ha una forma caratteristica, simile ad una campana 
- Il valore medio si trova esattamente al centro della distribuzione, e la curva è simmetrica rispetto ad esso: quindi **valor medio, mediana e moda coincidono** 
- La maggior parte delle osservazioni si concentrano **intorno al valore medio**
- Allontanandosi dal valore medio, la curva si avvicina sempre più all’asse delle ascisse ma non giunge mai a toccarlo: quindi si possono avere anche (pochissime) osservazioni che risultano molto distanti dalla media

![[Pasted image 20240304094730.png|500]]
è come se fosse una funzione di densità di probabilità, una frequenza di quanto spesso si verifica un determinato evento

## Forma
>La distribuzione Normale non descrive in realtà una sola distribuzione, ma piuttosto una famiglia di distribuzioni, tutte con la stessa forma a campana, ma caratterizzate da **media e varianza diverse**
>
>Tutte le curve normali hanno cioè la stessa forma caratteristica, ma possono essere più strette e appuntite, oppure più larghe e piatte

![[Pasted image 20240304095219.png|400]]

## Funzione

$$f(x) = \frac{1}{\sqrt{2\pi\sigma}}e^{\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$$

La funzione f(x) descrive, al variare dei valori assunti dai due parametri, una famiglia di curve normali : 
- **==se si varia μ==** : si sposta orizzontalmente l’asse di simmetria della curva 
- ==**se si varia σ**== : la curva si allarga e appiattisce al crescere del valore di σ

**Variando contemporaneamente μ e σ** : la curva trasla orizzontalmente e contemporaneamente si fa più o meno appuntita 

![[Pasted image 20240304095756.png|400]]

Una distribuzione Normale con media μ e scarto quadratico σ viene indicata semplicemente come: N(μ , σ) 

Per indicare che la variabile X si distribuisce come una Normale si scrive: ==**x ~ N(μ,σ )**==
## Proprietà

- È simmetrica, avendo come asse di simmetria la retta x = µ ; 
- È crescente nell’intervallo (– ∞, µ) e decrescente nell’intervallo (µ, ∞); 
- Ha due punti di flesso in x = µ – σ e x = µ + σ; 
- È concava (verso il basso) nell’intervallo (µ – σ, µ + σ) e convessa altrove; 
- Ha come asintoto l’asse delle x.

![[Pasted image 20240304100056.png|400]]
###### Funzione di densità della curva normale
![[Pasted image 20240304100154.png|400]]
###### Funzione di ripartizione della curva normale
![[Pasted image 20240304100339.png|400]]
## La distribuzione normale standardizzata

>La distribuzione Normale è scomoda da usare per calcolare le aree di interesse, quando i valori critici non sono multipli esatti di sigma, perché dipende da due parametri ( μ e σ ). 
>Per questo si introduce la **Normale Standard**, ottenuta standardizzando la variabile Normale.

$$f(z) = \frac{1}{\sqrt{ 2\pi }}e^{-\frac{z^2}{2}}$$
Questa distribuzione avrà media 0 e scarto quadratico medio pari a 1, si indica con **N(0,1)**

![[Pasted image 20240304101000.png|400]]
