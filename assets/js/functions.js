const textoElement = document.getElementById('texto');


let mensaje1 = 'Desarrollador Web Full Stack ';

let mensaje2 = ' ';
let mensaje3 = 'Backend ';
const mensajes = [mensaje1];
let mensajeActual = 0;

function escribirYBorrar() {
    const mensaje = mensajes[mensajeActual];
    let texto = '';
    let escribiendo = true;
    let i = 0;

    const intervalo = setInterval(function () {
        if (i === mensaje.length) {
            escribiendo = false;
        }

        texto = escribiendo ? mensaje.slice(0, i + 1) : mensaje.slice(0, i - 1);
        textoElement.textContent = texto;
        i += escribiendo ? 1 : -1;

        if (i <= 0) {
            mensajeActual = (mensajeActual + 1) % mensajes.length;
            setTimeout(escribirYBorrar, 0); // Espera un tiempo antes de escribir el próximo mensaje
            clearInterval(intervalo);
        }
    }, 90); // Velocidad de escritura/borrado en milisegundos
}

escribirYBorrar(); // Comienza el proceso

/*------------------------------------------------------------------------------------*/
/*BOTÓN PARA CAMBIAR DE MODO CLARO A MODO OSCURO Y VISCEVERSA*/
/*------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const modoBtn = document.getElementById('modo-btn');
    const body = document.body;


    let modoActual = localStorage.getItem('modo') || 'dark';


    function cambiarModo() {
        if (modoActual === 'light') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modoActual = 'dark';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modoActual = 'light';
        }


        localStorage.setItem('modo', modoActual);
    }


    if (modoActual === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }


    modoBtn.addEventListener('click', cambiarModo);
});

/*------------------------------------------------------------------------------------*/
/*BOTÓN PARA CAMBIAR DE MODO CLARO A MODO OSCURO Y VISCEVERSA RESPONSIVE*/
/*------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const modoBtn = document.getElementById('modo-btn-responsive');
    const body = document.body;


    let modoActual = localStorage.getItem('modo') || 'dark';


    function cambiarModo() {
        if (modoActual === 'light') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modoActual = 'dark';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modoActual = 'light';
        }


        localStorage.setItem('modo', modoActual);
    }


    if (modoActual === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }


    modoBtn.addEventListener('click', cambiarModo);
});

/*------------------------------------------------------------------------------------*/
/*BOTÓN PARA CAMBIAR DE IDIOMA LA PÁGINA*/
/*------------------------------------------------------------------------------------*/



document.addEventListener('DOMContentLoaded', function () {
    const elementsToTranslate = document.querySelectorAll('[data-translate-es]');
    const btnChangeLanguage = document.getElementById('btn-translate');

    let language = 'es';

    btnChangeLanguage.addEventListener('click', function () {
        if (language === 'es') {
            for (const phrase of elementsToTranslate) {
                const translation = phrase.getAttribute('data-translate-en');
                phrase.textContent = translation;
            }
            language = 'en';
        } else {
            for (const phrase of elementsToTranslate) {
                const translation = phrase.getAttribute('data-translate-es');
                phrase.textContent = translation;
            }
            language = 'es';
        }
    });
});


/*------------------------------------------------------------------------------------*/
/*BOTÓN PARA CAMBIAR DE IDIOMA LA PÁGINA RESPONSIVE*/
/*------------------------------------------------------------------------------------*/


document.addEventListener('DOMContentLoaded', function () {
    const elementsToTranslate = document.querySelectorAll('[data-translate-es]');
    const btnChangeLanguage = document.getElementById('btn-translate-responsive');

    let language = 'es';

    btnChangeLanguage.addEventListener('click', function () {
        if (language === 'es') {
            for (const phrase of elementsToTranslate) {
                const translation = phrase.getAttribute('data-translate-en');
                phrase.textContent = translation;
            }
            language = 'en';
        } else {
            for (const phrase of elementsToTranslate) {
                const translation = phrase.getAttribute('data-translate-es');
                phrase.textContent = translation;
            }
            language = 'es';
        }
    });
});


/*------------------------------------------------------------------------------------*/
/*FUNCIÓN PARA EL BOTÓN QUE REGRESA AL HEADER DE LA PÁGINA*/
/*------------------------------------------------------------------------------------*/



document.addEventListener('DOMContentLoaded', function () {
    const btnBackToTop = document.getElementById('btnBackToTop');

    window.addEventListener('scroll', function () {
        // Muestra u oculta el botón basado en la posición de desplazamiento
        if (window.scrollY > 100) {
            btnBackToTop.style.display = 'block';
        } else {
            btnBackToTop.style.display = 'none';
        }
    });
});

function scrollToTop() {
    // Desplaza suavemente hasta la parte superior de la página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/*------------------------------------------------------------------------------------*/
/*PROGRESS BAR*/
/*------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    // API web animations

    const progressBar = document.getElementById('progress')

    progressBar.animate(
        // como argumento, el metodo animate recibne un array de objetos que describen los estados de la animacion.
        [
            { width: 0 },
            { width: '100%' }
        ],
        {
            fill: 'forwards',
            timeline: new ScrollTimeline({
                subject: document.documentElement
            })

        }
    )

})


/*------------------------------------------------------------------------------------*/
/*FUNCIÓN PARA EL SLIDER  DE LA SECTION PROJECTS*/
/*------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {

    const conteinerProjects = document.getElementById('conteiner_projects');
    const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

    const left = document.querySelector('.left')
    const rigth = document.querySelector('.rigth')
    const articleUl = document.querySelector('.article__ul')

    const data = fetch(URL)
    // console.log(data);

    data
        .then((res) => res.json())
        .then((data) => {

            // console.log(data)


            data.forEach(element => {

                // console.log(element);


                conteinerProjects.innerHTML += `
          
          
<li class='article__li'>
<img src='${element.image}' alt='${element.title}' class='article__img'>
<h3 data-translate-en="${element.title}" data-translate-es="${element.titulo}" class='article__h3'>${element.titulo}</h3>
<p data-translate-en="${element.description}" data-translate-es="${element.descripcion}">${element.descripcion}</p>
<h4 data-translate-en="${element.tecnologias}" data-translate-es="${element.tecnologias}" class='article__h4'>${element.tecnologias}</h4>
</li>
          `
            });

            let index = 0

            left.addEventListener('click', function () {
                // window.alert('left')
                index = (index > 0) ? --index : data.length - 1
                articleUl.style.transform = `translateX(-${index * 100}%)`
            })

            rigth.addEventListener('click', function () {
                // window.alert('rigth')
                index = (index < data.length - 1) ? ++index : 0
                articleUl.style.transform = `translateX(-${index * 100}%)`
            })




        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('Termine de hacer la peticion');
        })

})


/*------------------------------------------------------------------------------------*/
/*FUNCIÓN PARA LA SECTION REVIEWS*/
/*------------------------------------------------------------------------------------*/


document.addEventListener('DOMContentLoaded', function () {



    //asymc/await seguimos usando promesas. Tomaremos distancia del .then(), 'tomamamos distancia de esa forma tradiocional de resolver promesas'

    const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/reviews'

    const reviewsList = document.getElementById('reviews-list')

    async function reviews(url) {

        try {

            const res = await fetch(url)
            const data = await res.json()
            // console.log(data);
            data.forEach(element => {
                console.log(element);
                reviewsList.innerHTML += `
          <li class='review-card'>
            <img src="${element.image}" alt="${element.fullName}" />
            <div class="review-details">
              <h3>${element.fullName}</h3>
              <p data-translate-en="${element.profession}" data-translate-es="${element.profesion}" class="review-profession">${element.profesion}</p>
              <p data-translate-en="${element.message}" data-translate-es="${element.mensaje}" class="review-message">"${element.mensaje}"</p>
              <div class="review-rating">${"★".repeat(element.rating)}</div>
            </div>
        </li>
          
          `

            });


        } catch (error) {
            console.log(error);
        }

    }


    reviews(URL)
})


/*------------------------------------------------------------------------------------*/
/*FUNCIÓN PARA LA SECTION DEL FORMULARIO (DIALOG)*/
/*------------------------------------------------------------------------------------*/



document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById("dialog");

    const showButton = document.getElementById('contactMeBtn');

    const closeButton = document.getElementById("close_button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });


    //form -emailJS

    const btnSend = document.getElementById('btn-send');
    const form = document.getElementById('form')

    btnSend.addEventListener('click', function (e) {
        e.preventDefault();


        const serviceID = 'service_pewdspb';
        const templateID = 'template_cwubds1';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                window.alert('Sent!');
                form.reset();
                dialog.close();

            })
            .catch((error) => {
                alert(JSON.stringify(error));
            })
    })

})