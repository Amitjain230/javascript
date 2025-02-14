async function fetchdata() {
    let data=await fetch("http://localhost:3000/student")
    let fdata=await data.json()
    let tdata=fdata.map((e)=>`
    <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    <td><button onclick="mydel('${e.id}')">Delete</button></td>
    </tr>
    `).join("")
    document.querySelector('#display').innerHTML= tdata
} 
fetchdata()

function mydel(id){
fetch(`http://localhost:3000/student/${id}`,
{
    method:'DELETE'
})
.then(r=>alert("Delete successfully"))
}

function insertdata(){
    let fdata={
        name:document.querySelector('#name').value,
        age:document.querySelector('#age').value,
        contact:document.querySelector('#contact').value,
        city:document.querySelector('#city').value,
    }

    fetch('http://localhost:3000/student',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(fdata)
    })
    .then(r=>alert("data inserted"))
}