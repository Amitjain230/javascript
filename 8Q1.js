function formdata(){
    let num1=parseInt(document.getElementById('num1').value)
    let num2=parseInt(document.getElementById('num2').value)
    let head=document.getElementById('head')
    head.innerHTML=num1+num2
    return false
}
//