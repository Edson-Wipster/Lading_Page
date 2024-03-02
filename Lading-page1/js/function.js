let scroll=document.querySelector('.cover')
let esquerda=document.querySelector('.esquerda')
let direita=document.querySelector('.direita')

esquerda.onclick=()=>{
    scroll.scrollBy(-350,0)
}
direita.onclick=()=>{
    scroll.scrollBy(350,0)  
}