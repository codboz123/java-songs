function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();    
}
const plank = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < plank.length){
    const efeito = plank[contador].classList[1];
    const idAudio = "#som_"+efeito;
    plank[contador].onclick = function(){

        tocaSom (idAudio); 
    }
    contador = contador + 1;
    console.log(contador);
    
}