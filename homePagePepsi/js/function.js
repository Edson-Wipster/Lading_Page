const imagem=document.querySelector('#imgTrocar')
const body=document.querySelector('body')

function imgTrocar(img){
    imagem.setAttribute('src',img)
}
function mudBgk(color){
    body.style.backgroundColor=color
}