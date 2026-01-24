function onclick_fn() {
    var button = document.getElementsByTagName("button")[0];
    var para1 = document.getElementById("para1");

    button.disabled = true;

    var maxsec = sec = 10;

    var timer = setInterval(function(){
        para1.textContent = maxsec - (--sec);

        if(sec <= 0){
            clearInterval(timer);
            button.disabled = false;
        }
    }, 1000);   
}