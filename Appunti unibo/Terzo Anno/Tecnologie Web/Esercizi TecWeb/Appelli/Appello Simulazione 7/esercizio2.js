document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("start").addEventListener("click", ()=>genera());

    function genera(){
        var possibility = "abcdefghijklmnopqrstuvwxyz";
        var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "1234567890";
        var specials = "!@#$%^&*";

        let jk = false;

        if(document.getElementById("upper").checked) { possibility += upper; jk=true}
        if(document.getElementById("numbers").checked) { possibility += numbers; jk=true}
        if(document.getElementById("specials").checked) { possibility += specials; jk=true}

        if(jk){
            var result = "";
            var length = parseInt(document.getElementById("input").value, 10);

            if(length<6 || length>20 ){
                alert("Idiota sai leggere o no? Porco dio");
            }
            else{
                for(let i=0; i<length; i++){
                    let boh = Math.floor(Math.random()*possibility.length);
                    result += possibility[boh];
                }
            
                document.getElementById("output").textContent = result;
            
                let cacca = document.createElement("li");
                cacca.textContent = result;
                document.getElementById("storico").appendChild(cacca);
            }
        }
        else{
            alert("Coglione seleziona almeno una roba");
        }
    }
})