/*
document.addEventListener: Adjunta un evento al elemento document HTML. 
DOMContentLoaded: Cuando el documento HTML ha sido completamente cargado y parseado, 
todos los elementos están disponibles para ser manipulados a través de JS.
function(): Esta función será ejecutada cuando el evento DOMContentLoaded se active es decir en cada 
vez que pase algo en el documento.
*/

document.addEventListener('DOMContentLoaded', function() {

    const elemCita = document.getElementById('text');
    const elemAuto = document.getElementById('author');
    const elemBoto = document.getElementById('new-quote');
    const elemCont = document.getElementById('container');
    const elemTwiQ   = document.getElementById('tweet-quote');
    const elemTumQ   = document.getElementById('tumblr-quote');
    const veloBacG = 'background-color 4s';
    const veloColo = 'color 4s';

    function obtenerCitaAleatoria() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                elemCita.textContent = ' ' + data.content;
                elemCita.style.opacity = "1"; // Cambia la opacidad a 1
                elemAuto.textContent = '- ' + data.author;})
            .catch(error => console.error('Error al obtener la cita:', error));
    }

    function cambiarColorFondoAleatorio() {
       // Generar colores aleatorios
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Cambiar los colores gradualmente
        elemCont.style.transition = veloBacG;
        elemCita.style.transition = veloColo;
        elemAuto.style.transition = veloColo;
        elemTwiQ.style.transition = veloBacG;
        elemTumQ.style.transition = veloBacG;
        elemBoto.style.transition = veloBacG;
        elemCont.style.backgroundColor = randomColor;
        elemCita.style.color           = randomColor; 
        elemAuto.style.color           = randomColor; 
        elemTwiQ.style.backgroundColor = randomColor;
        elemTumQ.style.backgroundColor = randomColor;
        elemBoto.style.backgroundColor = randomColor;
    }

// Obtener la primera cita y el 1er fondo al cargar la página    
    obtenerCitaAleatoria(); 
    cambiarColorFondoAleatorio()
//Obtener cita cada vez que se hace click
    elemBoto.addEventListener('click', obtenerCitaAleatoria);
    elemBoto.addEventListener('click', cambiarColorFondoAleatorio);
});

document.getElementById('tweet-quote').addEventListener('click', function() {
    var quoteText = document.getElementById('text').textContent;
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quoteText);
    window.open(twitterUrl, '_blank');
});



         




