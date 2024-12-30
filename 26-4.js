function add(){
    let j=parseInt(prompt("Enter any number:"))
    if(j>=1 && j<11){
        for(let i=15;i>=j;i--){
            console.log(i)
        }
       
    }
    else if(j>=11  && j<20){
        for(let i=1;i<=j;i++){
            console.log(i)
        }
    }
}
add()