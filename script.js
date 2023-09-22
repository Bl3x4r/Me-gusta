function liked(elemento) {
    let numeroBoton = elemento;
    let numeroLikes = document.querySelectorAll('.num-likes');
   
    if (numeroBoton === 1) {
        console.log(numeroBoton);
        numeroLikes[numeroBoton-1].innerText++;
    }
    if(numeroBoton === 2){
        console.log(numeroBoton);
        numeroLikes[numeroBoton-1].innerText++;
    }
    if (numeroBoton === 3) {
        console.log(numeroBoton);
        numeroLikes[numeroBoton-1].innerText++;
    }
    
}