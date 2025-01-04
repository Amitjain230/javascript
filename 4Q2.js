let head = document.createElement('h1')
head.textContent="Hi we are developers..!!!"

let bc=document.body
bc.setAttribute('bgcolor','blue')

bc.append(head)
head.setAttribute('align','center')
let as=document.getElementById('heee')
as.removeAttribute('align')
as.setAttribute('style', "background-color:pink; color:white; text-align:center")