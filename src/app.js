// Limit slider paragraph text characters and add "..." + read more button with a link.
document.addEventListener('DOMContentLoaded',()=>{
    limiteCaracterSlide();
    limiteCaracterVideo();
    firstSlideShow();
    eventos();
})

/*========================== variables ==========================*/
//texto del slide
const slideParagraphs=document.querySelectorAll('.slide-paragraph');
//texto del video
const videoParagraphs=document.querySelectorAll('.video-paragraph');

//slider and slides
const slider=document.querySelector('.slider');
const slides=slider.querySelectorAll('.slide');
const numberOfSlide=slides.length;
const slideButtons=document.querySelectorAll('.slide-btn');
const slideIndicadorBars=document.querySelectorAll('.indicator-bar');
let slidesNumber=0;

// Slider next/prev buttons navigation.
const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');

//primer slide and first button
const firstSlide=document.querySelector('.first-slide');
const firstSlideBtn=document.querySelector('.first-slide-btn');
const firstIndicatorBar=document.querySelector('.first-indicator-bar');

//watch video modal, play
const watchVideosBtns=document.querySelectorAll('.watch-video-btn');
// console.log(watchVideoBtn)
const slideVideoModals=document.querySelectorAll('.slide-video-modal');
const videoCloseBtns=document.querySelectorAll('.video-close-btn');
const animalVideos = document.querySelectorAll('.animal-video');
//repeater value
let playSlider;
//asi se hace el autoSlider con un setInterval
const repeater=()=>{
    playSlider=setInterval(()=>{
        slides.forEach(slide=>{
            slide.classList.remove('active');
        })
        slideButtons.forEach(slideButton=>{
            slideButton.classList.remove('active');
        })
        slideIndicadorBars.forEach(slideIndicadorBar=>{
            slideIndicadorBar.classList.remove('active');
        })
        slidesNumber++;
        if (slidesNumber > (numberOfSlide - 1)) { //al ultimo que es 9
            slidesNumber = 0;
        }

        slides[slidesNumber].classList.add('active');
        slideButtons[slidesNumber].classList.add('active');
        slideIndicadorBars[slidesNumber].classList.add('active');
    },8200);
}
repeater();


/* eventos */

function eventos(){


    nextBtn.addEventListener('click',()=>{
        slides.forEach(slide=>{
            slide.classList.remove('active');
        })
        slideButtons.forEach(slideButton=>{
            slideButton.classList.remove('active');
        })
        slideIndicadorBars.forEach(slideIndicadorBar=>{
            slideIndicadorBar.classList.remove('active');
        })
        slidesNumber++;
        if (slidesNumber > (numberOfSlide - 1)) { //al ultimo que es 9
            slidesNumber = 0;
        }

        slides[slidesNumber].classList.add('active');
        slideButtons[slidesNumber].classList.add('active');
        slideIndicadorBars[slidesNumber].classList.add('active');

        clearInterval(playSlider); //al dar click en el boton next que detiene el temporizador de setInterval 
        repeater(); //con esto lo vuelve a activer para que vuelva a 0 el temporizador o mas bien el tiempo
    });

    prevBtn.addEventListener('click',()=>{
        slides.forEach(slide=>{
            slide.classList.remove('active');
        })
        slideButtons.forEach(slideButton=>{
            slideButton.classList.remove('active');
        })
        slideIndicadorBars.forEach(slideIndicadorBar=>{
            slideIndicadorBar.classList.remove('active');
        })
        slidesNumber--;
        if (slidesNumber < 0) { //al ultimo que es 9
            slidesNumber = numberOfSlide - 1;
        }

        slides[slidesNumber].classList.add('active');
        slideButtons[slidesNumber].classList.add('active');
        slideIndicadorBars[slidesNumber].classList.add('active');

        clearInterval(playSlider); //al dar click en el boton next que detiene el temporizador de setInterval 
        repeater(); //con esto lo vuelve a activer para que vuelva a 0 el temporizador o mas bien el tiempo
    })
    /*cargar primero el loader del slide primero que es el de fox*/

}

// Load first slide carga primero la pagina y le agrega el active mostrando el primer slide
function firstSlideShow(){
    setTimeout(()=>{
        firstSlide.classList.add('active');
    },300);

    firstSlideBtn.classList.add('active');
    firstIndicatorBar.classList.add('active');
}
/* funciones de limite de caracteres */
    function limiteCaracterSlide(){
        //console.log(slideParagraphs);
        slideParagraphs.forEach(slideParagraph => {
            const textLimit=100;
            const textoCompleto=slideParagraph.innerText; //devuelve el contenido del texto sin codigo html ni espacios extras solo uno por cada palabra
            const aTag=slideParagraph.querySelector('.paragraph-anchor-tag'); //como referencia ese texto y accedemos a su hijo en este caso es el enlace

            if (slideParagraph.innerText.length > textLimit) { //si slide paragraph.su texto contando cada letra o caracter es mayor a 100 caracteres
                slideParagraph.innerHTML=textoCompleto.substring(0,textLimit) + "..." + aTag.innerHTML; //le agregara como html el texto completo desde la primer letra hasta el limite que es 100 agrega ... y luego el enlace de read more
            }
        });
    }

    function limiteCaracterVideo(){
        videoParagraphs.forEach(videoParagraph=>{
            const textLimit=100;
            const textoCompleto=videoParagraph.innerText;
            const atag=videoParagraph.querySelector(".read-more");

            if(videoParagraph.innerText.length>textLimit){
                videoParagraph.innerHTML=textoCompleto.substring(0,textLimit) + "... " + atag.innerHTML;
            }
        })
    }
// Javascript for slider

// Slider autoplay



// Slider next button navigation.

// Slider previous button navigation.

// Slider pagination.
let slideBtnNav=function(slideBtnClick){
    slides.forEach(slide=>{
        slide.classList.remove('active');
    })
    slideButtons.forEach(slideButton=>{
        slideButton.classList.remove('active');
    })
    slideIndicadorBars.forEach(slideIndicadorBar=>{
        slideIndicadorBar.classList.remove('active');
    })

    slides[slideBtnClick].classList.add('active');
    slideButtons[slideBtnClick].classList.add('active');
    slideIndicadorBars[slideBtnClick].classList.add('active');

}

slideButtons.forEach((slideButton,i)=>{
    slideButton.addEventListener('click',()=>{ //le da click a cada boton
        slideBtnNav(i); //pasara esa posicion a la funcion de arriba y pueda activar ese boton y slide, y indicador bar y remover lo demas
        clearInterval(playSlider); //al dar click en el boton next que detiene el temporizador de setInterval 
        repeater();
        slidesNumber=i; //para que lo deje en ese numero en este caso i es la posicion, si da click en el 3 tomara el 3
    })
})



// Javascript for video modals.
 // Eventos para los botones de ver video

//  watchVideosBtns.forEach((btn) => {
//     console.log(btn)
//     let index;
//     btn.addEventListener('click', (e) => {
//         index=e.target.getAttribute('data-index')
//         console.log("diste click en ", index)
//         slideVideoModals.forEach((modal, i) => {
//             modal.classList.remove('active');
//             if (index === i) {
//                 modal.classList.add('active');
//                 setTimeout(() => {
//                     modal.querySelector('.modal-video-content').classList.add('active');
//                 }, 100);
//                 animalVideos[i].play();
//             }
//         });

//         // Clear interval and reset indicator bar
//         clearInterval(playSlider);
//         slideIndicadorBars.forEach(indicator => {
//             indicator.classList.remove('active');
//         });
//         setTimeout(() => {
//             slideIndicadorBars[index].classList.add('active');
//         }, 0);
//     });

//     // slideVideoModals[index].addEventListener('mouseover', () => {
//     //     clearInterval(playSlider);
//     // });
// });

// // Eventos para los botones de cerrar video
// videoCloseBtns.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//         slideVideoModals[index].classList.remove('active');
//         slideIndicadorBars.forEach(indicator => {
//             indicator.classList.remove('active');
//         });
//         animalVideos[index].pause();
//         clearInterval(playSlider);
//         repeater();
//         setTimeout(() => {
//             slideIndicadorBars[slidesNumber].classList.add('active');
//         }, 0);
//     });
// });



slides.forEach((slide,i)=>{
    let watchVideoBtn=slide.querySelector('.watch-video-btn');
    // console.log(watchVideoBtn)
    let slideVideoModal=slide.querySelector('.slide-video-modal');
    let videoModalContent=slide.querySelector('.modal-video-content');
    let videoCloseBtn=slide.querySelector('.video-close-btn');
    let animalVideo=slide.querySelector('.animal-video');

    watchVideoBtn.addEventListener('click',()=>{ //damos click en su slide respectivo
        // console.log('diste click', i); //asi accedemos a cada boton de su slide
        // console.log(slideVideoModal)
        slideVideoModal.classList.add('active');//al dar click que abra el modal
       
       setTimeout(()=>{
            videoModalContent.classList.add("active");
       })
        animalVideo.play();
    })
    
    slideVideoModal.addEventListener('mouseover',()=>{
        clearInterval(playSlider);
    });

    //reiniciar el indicator bar al ver el video
    let videoClose=function(closeBtnClick){
        slideIndicadorBars.forEach((slideIndicadorBar)=>{
            slideIndicadorBar.classList.remove('active');
        });

        setTimeout(()=>{
            slideIndicadorBars[closeBtnClick].classList.add('active');
        },0)
    }

    videoCloseBtn.addEventListener('click',()=>{
        slideVideoModal.classList.remove('active');
        slideIndicadorBars.forEach((slideIndicadorBar)=>{
            slideIndicadorBar.classList.remove('active');
        });
        animalVideo.pause();
        clearInterval(playSlider);
        repeater();
        //console.log(i);
        videoClose(i);
    })
})