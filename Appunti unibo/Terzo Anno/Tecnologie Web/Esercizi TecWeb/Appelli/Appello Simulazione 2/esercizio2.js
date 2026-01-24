document.addEventListener("DOMContentLoaded", function(){

    let but = document.getElementById("start");
    but.addEventListener("click", () => doit());

    function doit(){
        const input = document.getElementById("input").value;

        let words = input.split(" ");

        var lecter = [];
        Array.from(words).forEach((word) => lecter.push(word.charAt(0)));

        lecter.sort((a,b)=> a.localeCompare(b))

        filteredlecter = lecter.filter((l, i) => lecter.indexOf(l)===i);

        let output = document.getElementById("output");
        output.textContent = filteredlecter.join(", ");   
    }
})