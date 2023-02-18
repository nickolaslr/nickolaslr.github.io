let totalSlides = document.querySelectorAll('.slider--item').length; //Total baseado no número de itens
let currentSlide = 0; //iniciar no slide 0

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`; //a largura da página será o tamanho do monitor * o número de itens
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`; //centralizr os botões no meio do .slider

function goPrev() { //funcão para voltar um slide, diminuindo o currentSlide. 
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth
    let newMargin = (currentSlide * sliderItemWidth); //a nova margem será o número do slide atual * a largura da tela do client
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`; //o slider--width, que atualmente possui a largura de todas as fotos, receberá a nova margem, que será -a variável acima
}

//setInterval(goNext, 4000);