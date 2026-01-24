document.addEventListener("DOMContentLoaded", function(){
    fetch("http://diiorio.nws.cs.unibo.it/twe/07.06.2022a/api/index.php")
    .then(r => r.json())
    .then(data => caricaEventi(data));

    function caricaEventi(data){
        Array.from(data).forEach((evento)=>{
            if(evento.evidenza){
                var main = document.getElementsByClassName("main")[0];

                var articolo = document.createElement("article");
                articolo.classList.add("evento");

                main.appendChild(articolo);

                var titolo = document.createElement("h3");
                articolo.appendChild(titolo);

                var titlelink = document.createElement("a");
                titlelink.setAttribute("href",evento.title+".html");
                titlelink.setAttribute("class","titolo");
                titlelink.textContent = evento.title;
                titolo.appendChild(titlelink);

                var dispo = document.createElement("p");
                dispo.classList.add("dispo");
                dispo.textContent = evento.n_biglietti + " biglietti disponibili";
                articolo.appendChild(dispo);

                var dataeora = document.createElement("div");
                articolo.appendChild(dataeora);

                var data = document.createElement("p");
                data.textContent = evento.time;
                dataeora.appendChild(data);

                var orastart = document.createElement("p");
                orastart.textContent = evento.ora_min + ":00";
                dataeora.appendChild(orastart);
                
                var sep = document.createElement("p");
                sep.textContent = "-";
                dataeora.appendChild(sep);


                var oraend = document.createElement("p");
                oraend.textContent = evento.ora_max + ":00";
                dataeora.appendChild(oraend);

                var luogo = document.createElement("p");
                luogo.textContent = evento.place;
                articolo.appendChild(luogo);

                var acquista = document.createElement("a");
                acquista.setAttribute("class", "acquisto")
                acquista.setAttribute("href","ticket-details.html");
                acquista.textContent = "Acquista biglietti";
                articolo.appendChild(acquista);
            }
        })
    }
})