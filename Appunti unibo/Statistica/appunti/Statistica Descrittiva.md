
![[Pasted image 20240312161031.png|500]]
### Caratteristiche di un insieme di dati
![[Pasted image 20240312161150.png|500]]![[Pasted image 20240312162323.png|500]]
### Misure delle caratteristiche dei dati
#### Misure del centro
- _**Media semplice**_
	$$\bar{x}=\frac{\sum_{i=1}^{N}x_{i}}{N}$$
- _**Mediana semplice**_
	_Si devono ordinare i punti in maniera crescente. Se N è dispari la mediana è il valore centrale, se è pari è la media tra i valori centrali_
- _**Media troncata**_
	Si elimina una frazione 0 < t < 0.5 delle osservazioni dagli estremi della lista ordinata e poi si calcola la media sui dati che rimangono
#### Statistica ordinata
per statistica ordinata si intende una statistica fatta dopo aver ordinato i dati in ordine non decrescente. La statistica ordinata dà informazioni sulla distribuzione dei dati e su dove essi sono meno concentrati

Lo strumento più utilizzato è il _quantile semplice_. Il quantile semplice di ordine **p**, 0< p <1, indicato con q_p, è un valore che indica che circa il 100p% dei dati è minore di q_p

Non c'è una definizione univoca su come calcolare il quantile, uno dei modi utilizzati è il seguente
1. $$\text{Calcolare }(n-1)p+1 \text{ e scriverlo nella forma mista }k.d$$
2. $$q_{p} =x_{k} + d(x_{k+1}-x_{k})$$
#### Misure della diffusione dei dati
- _**Varianza e deviazione standard**_
	La _varianza campionaria è definita come_ $$s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_{i}-\bar{x})^2$$
	La _deviazione standard_ è $$s=\sqrt{s^2}$$
- _**Range interquartile (IQR)**_
	$$IQR = q_{0.75}-q_{0.25}$$
- _**Deviazione assoluta dalla media (MAD)**_
	bisogna innanzitutto calcolare la mediana e quindi le deviazioni assolute della mediana. Quindi si calcola la mediana di questi valori, moltiplicata per un coefficiente c $$MAD=c \cdot median(|x_{1}-\bar{x}|,|x_{2}-\bar{x}|,\dots,|x_{n}-\bar{x}|)$$
#### Misure della forma
- _**Misura della simmetria**_
	$$g_{1}= \frac{1}{n} \frac{\sum_{i=1}^{n}(x_{i}-\bar{x})^3}{s^3}$$
	g_1 > 0 _distribuzione asimmetrica a destra_
	g_1 < 0 _distribuzione asimmetrica a sinistra_
	|g_1| < e   _simmetrica_
	
	Si definisce in generale _asimmetrica_ una distribuzione che abbia un valore di $$\mid g_{1}\mid>2\sqrt{6/n} $$
- _**Misura della curtosi**_
	$$g_{2}=\frac{1}{n} \frac{\sum_{i=1}^{n}(x_{i}-\bar{x})^4}{s^4}-3$$
	g_2 > 0 _leptocurtica_
	g_2 < 0 _platicurtica_
	|g_2| < e   _mesocurtica_
	
	una distribuzione ha un _eccesso di curtosi_ se $$\mid g_{2}\mid>4\sqrt{6/n} $$
#### I cardini e i cinque numeri di sintesi
I _**cardini**_ di un insieme sono definiti nel modo seguente (dopo aver ordinato in ordine crescente gli elementi)
- _**cardine inferiore**_ h_L è l'elemento in posizione: $$L=\lfloor (n+3) /2 \rfloor /2 $$
	se L non è intero, il cardine inferiore è la media dei due valori adiacenti ad L
- cardine superiore h_U è l'elemento in posizione n+1-L
Dati i cardini i **cinque numeri di sintesi (5NS)** sono definiti come: $$5NS=(x_{1},h_{L},\tilde{x},h_{U},x_{n})$$
#### Outliers

Si definisce un **outlier potenziale** un'osservazione che si trova ad una distanza del centro superiore a 1.5 volte rispetto all'ampiezza dell'intervallo [hL, hU], cioè che appartiene all'intervallo [hL-1.5(hU-hL), hU+1.5(hU-hL)]

Si definisce un **outlier potenziale** un'osservazione che si trova ad una distanza del centro superiore a 3 volte rispetto all'ampiezza dell'intervallo [hL, hU], cioè che appartiene all'intervallo [hL-3(hU-hL), hU+3(hU-hL)]

Nel momento in cui si identificano degli outliers, è necessario innanzitutto cercare di capire quale è la causa, per poi agire di conseguenza. Per esempio, se si verifica un errore di trascrizione della misura, può essere corretto; se invece dipende da qualche malfunzionamento, si elimina; se non si trova la causa, bisogna considerare la possibilità che sia effettivamente un valore dei dati e quindi tenere conto della modifica dell'insieme stesso dei dati
