function validate(){
    let name = document.getElementById('name').value 
    let age = document.getElementById('age') .value 
    let contact=document.getElementById('contact').value
    let email=document.getElementById('email').value
    if(name== "" ){
       alert("P1ease fill your name") 
       document.getELementById('name').focus() 
       return false
   }
   else if(age  == ""){ 
       let erage = document.getElementById('errorage')
       erage.innerHTML = "Please fill this filed" 
       document.getElementById('age').focus() 
       return false
   }
   else if(contact == ""){
       alert("Please eneter number")
       document.getElementById('contact').focus() 
       return false
   }
   else if(isNaN(contact)){
       alert("Please number should be in digit")
       document.getElementById('contact').focus()
       return false 
   }
   else if(contact.length>10||contact.lenght<10){
       alert("10 digit number")
       document.getElementById('contact').focus() 
       return false
   }
   else if(email== ""){
    alert("Please enter your email")
    document.getElementById('email').focus()
    return false
   }
   else if(!(email.includes('@'))){
    alert("Please enter your email")
    document.getElementById('email').focus()
    return false
   }
   }