document.addEventListener("DOMContentLoaded", function(){
    const prodotti = document.getElementsByTagName("span");
    const desideri = document.getElementById("containerProdotti");
    const quant = [0, 0, 0]

    function addtoDesideri(key){
        quant[key]++;

        if(quant[key]>= 10){
            let button = document.getElementById("btnP"+(key+1));
            button.disabled= true;
            button.classList.add("disabled");
        }

        let listitem = document.getElementById("prd-"+key);
        if(!listitem){
            listitem = document.createElement("li");
            listitem.id = "prd-"+key;
            desideri.appendChild(listitem);
        }

        listitem.textContent = prodotti[key].textContent +": "+quant[key];

        sortList();
    }

    function sortList(){
        var items = Array.from(desideri.children);

        items.sort((a,b) => a.textContent.localeCompare(b.textContent));

        items.forEach((item) => desideri.appendChild(item));
    }

    Array.from(prodotti).forEach((_,i) =>  {
        let button = document.getElementById("btnP"+ (i+1));
        button.addEventListener("click", () => addtoDesideri(i));
    })

})