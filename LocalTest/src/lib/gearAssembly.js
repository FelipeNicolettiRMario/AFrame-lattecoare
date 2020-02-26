var entidade = document.querySelector('.clickable');
var cilindro = document.querySelector('#tube');
entidade.addEventListener('click',function(){
    cilindro.setAttribute('animation','property: position; dur: 2000; from: 0.74 1.64 -2.14; to: 0.74 1.64 -2.50 ;loop: false;')
})