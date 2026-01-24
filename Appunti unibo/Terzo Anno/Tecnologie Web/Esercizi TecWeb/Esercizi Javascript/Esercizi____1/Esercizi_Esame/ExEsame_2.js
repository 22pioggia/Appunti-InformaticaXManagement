document.addEventListener("DOMContentLoaded", (event) => {
    function main(){
        var c1 = document.getElementsByClassName("C1");
        var c2 = document.getElementsByClassName("C2");

        var array_1 = {};
        var array_2 = {};

        function popolaArray(data, array, index=0 ){
            for(var i=0; i< data.length; i++){
                var key = "K-" + (i+index);

                array[key] = data[i];
            }
        }

        popolaArray(c1, array_1);
        let indecs = array_1.length;

        popolaArray(c2, array_1, indecs);

        function creaArrayNuovo(array1, array2){
            for(var key in array1){
                newkey = key + "placeholder";
                array2[newkey] = array1[key];
            }
        }

        creaArrayNuovo(array_1, array_2);

        return [array_1, array_2];
    }

    var data = main();
    console.log(data[0]);
    console.log(data[1]);
});