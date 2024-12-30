/*function code(a){
    return a*a
}
let a= code(2)
if(a%2==0){
    alert("Even")
}
else{
    alert("Odd")
}
console.log(code(10))*/


function code(a){
    return a*a*a
}
let a=console.log(2)
for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
        if(i==a || j==i ||j==1)
        document.write("* ")
    }
    document.write("\n")
}
