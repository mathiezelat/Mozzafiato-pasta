const footerDesarrollo = document.querySelector('.container-desarrollo')
const footerHover = document.querySelector('.desarrollo-hover-enter')
footerDesarrollo.addEventListener('mouseenter', ()=>{
    footerHover.setAttribute('transition-style','in:circle:center')
})
footerDesarrollo.addEventListener('mouseleave', ()=>{
    footerHover.setAttribute('transition-style','out:circle:hesitate')
})
