window.addEventListener('scroll',()=>{
subrayadoAnimacion('mozzafiato');
subrayadoAnimacion('cursos');
subrayadoAnimacion('recetas');
subrayadoAnimacion('notas');
})
const subrayadoAnimacion = (valor)=>{
    let animacion = document.getElementById(`subrayado-color-${valor}`)
    let position = animacion.getBoundingClientRect().top;
    console.log(animacion)
    console.log(position)
    let screen = window.innerHeight/1.5;
    const root = document.querySelector(":root");
    if(position<screen){
        root.style.setProperty(`--animacion-${valor}`, 'subrayado 2s ease both');
    }
}