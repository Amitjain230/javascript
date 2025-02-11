function multi(){
    let userdata = {
        name:document.querySelector('#name').value,
        email:document.querySelector('#email').value,
        password:document.querySelector('#password').value
    }

    localStorage.setItem("userdata",JSON.stringify(userdata))

    
}

let data=JSON.parse(localStorage.getItem('userdata'))
console.log(data)

function fun(){
    let logindata ={
        loginemail :document.querySelector('#loginemail').value,
        loginpassword:document.querySelector('#loginpass').value
    }
    if(data.email != logindata.loginemail || data.password != logindata.loginpassword){
        alert("user not found")
        return false
    }
}
//JSON.stringify=>it convrt object into string.
//JSON.parse=>string to object  OR convert string to given data.
//jis formate mae data datae usi mae retreive kartae ha.