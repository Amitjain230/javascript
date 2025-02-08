function fun(){
    let n=document.getElementById("name").value
    let r=document.getElementById("roll").value
    let a=document.getElementById("add").value
    let c=document.getElementById("contact").value

    localStorage.setItem("Name",n)
    localStorage.setItem("Rollno",r);
    localStorage.setItem("Address",a);
    localStorage.setItem("contactno",c);

}
function show(){
    h1e.textcontent="Student Details"
    let na =localStorage.getItem("Name")
    let ro=localStorage.getItem("Rollno")
    let ad=localStorage.getItem("Address")
    let co=localStorage.getItem("contactno")
    h1n.textContent="Name"+na
    h1r.textContent="Rollno"+ro
    h1a.textContent="Address"+ad
    h1c.textContent="contactno"+co


    

}

function remove(){
    localStorage.clear()

    location.reload()
}