document.addEventListener("DOMContentLoaded", function(){
    var bottoni = document.getElementsByTagName("button");

    Array.from(bottoni).forEach((bottone)=>bottone.addEventListener("click", ()=> play(bottone)));

    const esito = document.getElementById("esito");
    const results = document.getElementById("results");
    const plabel = document.getElementById("player");
    const clabel = document.getElementById("cpu");
    const values = ["Carta", "Forbice", "Sassofono"];
    var pwin = 0;
    var cwin = 0;
    var draw = 0;

    function play(input){
        var pchoice = parseInt(input.id);
        plabel.textContent = values[pchoice];
        var cpuchoice = Math.floor(Math.random()*3);
        clabel.textContent = values[cpuchoice];

        if(pchoice === cpuchoice){
            draw++;
            esito.textContent = "Pareggio !!";
            esito.setAttribute("class", "yellow");
        }
        else if(pchoice == (cpuchoice + 1)%3){
            pwin++;
            esito.textContent = "Hai vinto !!";
            esito.setAttribute("class", "green");
        }
        else{
            cwin++;
            esito.textContent = "Hai perso !!";
            esito.setAttribute("class", "red");
        }
        
        results.textContent = "W: "+pwin+" - L: "+cwin+" - D: "+draw;

        if(pwin===3) { alert("Player WINS !!"); pwin=0; cwin=0; draw=0;}
        else if(cwin===3) { alert("CPU WINS !!"); pwin=0; cwin=0; draw=0;}
    }
})