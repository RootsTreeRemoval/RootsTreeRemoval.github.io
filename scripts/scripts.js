

function out(){
    alert("Your message was sent correctly")
}

    document.addEventListener('scroll', () => {
    const element = document.querySelector('.form_M');
    const element2 = document.querySelector('.Data');
    const element3 = document.querySelector('header');
    const element4 = document.querySelector('.About_us');
    const element5 = document.querySelector('.menu');
    const element6 = document.querySelector('.fond2');

    const position = element.getBoundingClientRect();
    const position2 = element2.getBoundingClientRect();
    const position3 = element3.getBoundingClientRect();
    const position4 = element4.getBoundingClientRect();
    const position6 = element6.getBoundingClientRect();

    // Comprueba si el elemento está visible en la ventana
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('active');
    }

    if (position2.top < window.innerHeight && position2.bottom >= 0) {
        element2.classList.add('active');
    }

    // Muestra el menu a voluntad
    if (position4.top < -100 && position2.bottom >=0) {
        element3.classList.add('active');
        element5.classList.add('active');
        element6.classList.add('active');
    }else{
        if (position4.top < 0 && position2.bottom >=0) {
        element3.classList.remove('active');
        element5.classList.remove('active');
        element6.classList.remove('active');
    }

    }
});