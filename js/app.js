const myNumbersSquare = document.getElementById("myNumbers");
let bgDiv = ("bg-blue")

for(let i = 1;i <= 100; i++){

    // variabile let che mi servirà per far scrivere il mio testo sia in console che nel mio HTML
    let text = i.toString();

    // condizioni in cui voglio che il mio ciclo numerico cambi
    if ((i % 3 == 0) && (i % 5 == 0)) {
        text = "FizzBuzz";
        bgDiv=("bg-red");
    } else if (i % 3 == 0) {
        text ="Fizz";
        bgDiv=("bg-green");
    }else if (i % 5 == 0) {
        text="Buzz";
        bgDiv=("bg-yellow");
    }
    console.log(text);

    // innerHTML che trascriverà il mio for e le mie condizioni nella pagina HTML

 myNumbersSquare.innerHTML  += `<div class="col-7">
<div class="row justify-content-center align-items-center square fw-bold ${bgDiv} ">
   ${text}
</div>
</div>`


// si può fare anche in quest'altro modo 
// nota che ho usato i + insieme ad apici"" e virgolette '' per concatenare l'elemento e la variabile

{/* <div class="row justify-content-center align-items-center square fw-bold '" + bgDiv + "'  ">
    "'+ text +'"
</div> */}
}