const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agergar-imagen')
const contenedorLight = document.querySelector('.imagen-light')

const imag = [...imagenes];

imag.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        
        imagen.getAttribute('src')
    })
})

