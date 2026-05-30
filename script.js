function mostrarMensaje(){

    alert(
        "Bienvenido a SmartCommerce Assistant.\n\n" +
        "Sistema de Inteligencia Artificial para atención automatizada al cliente."
    );

}

/* EFECTO SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });

    });

});