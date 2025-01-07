//toggle is use to apply and remove the css property.true or false.

function change(){
    let head=document.getElementById('head')
    head.classList.add('drk')
}
function remove(){
    let head=document.getElementById('head')
    head.classList.remove('drk')
}
function both(){
    let head=document.getElementById('head')
    head.classList.toggle('drk')
}