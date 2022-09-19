let buttonMenu = document.querySelector('#showMenu');
let menuIcon = document.querySelector('.icon');

function menuShow(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
        menuIcon.classList.remove('x-icon');
    }
    else{
        mobileMenu.classList.add('open');
        menuIcon.classList.add('x-icon');
    }
}
buttonMenu.addEventListener('click', menuShow);

let musica = document.querySelector('#sample1');
let play = document.querySelector('#play-button');
let pause = document.querySelector('#pause-button');
let reload = document.querySelector('#reload-button');
let like = document.querySelector('#like-button');
let onLike = document.querySelector('#on-like-button');
let liked = false;



play.addEventListener('click',() => {
    musica.play();
    play.style.display ='none'
    pause.style.display ='block'
});
pause.addEventListener('click', () => {
    musica.pause();
    play.style.display ='block'
    pause.style.display ='none'
});
like.addEventListener('click', () => {
    like.style.display = 'none';
    onLike.style.display = 'block';
    liked = true;
});
onLike.addEventListener('click', () => {
    like.style.display = 'block';
    onLike.style.display = 'none';
    liked = false;
});
reload.addEventListener('click',() => {
    musica.load();
});


musica.addEventListener('timeupdate', () => {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)* 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundoParaMinuto(Math.floor(musica.currentTime));
    let tempoFinal = document.querySelector('.fim');
    tempoFinal.textContent = segundoParaMinuto(Math.floor(musica.duration));
});

function segundoParaMinuto(segundos){
    let campoMin = Math.floor(segundos/60);
    let campoSeg = segundos % 60;
    if(campoSeg < 10){
        campoSeg = '0'+campoSeg;
    }

    return campoMin + ':' + campoSeg;
}