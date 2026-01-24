document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("start");
    button.addEventListener("click",()=>countdown());

    function countdown(){
        let input = document.getElementById("input");

        var time = Math.floor(input.value);

        var timer = setInterval(()=>conta(), 1000);

        var output = document.getElementById("output");
        var j = 0;
        function conta(){
            output.textContent = time - j;
            j++
            if(time <j){
                clearInterval(timer);
                document.body.classList.add("messi");
            }
        }
    }
})