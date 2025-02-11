
//Europian computer manufacture association.(ECMA)
//if we change in style it came in camel case.
//arrow function->it is the function(one line of function.)
//Callback function(in the function argument we can pass function called callback function),
//Array of object is used to store multiple data of an data.
//map function is used to assign the data in new array and fetch it also.
//map fuction assign and fetch the data and return that into new array.
//map function accept function in argument.
//Return boolean value.

let emp=[
    {
        name:"Amit",age:50,contact:123,id:101
    },
    {
        name:"shusanshu",age:50,contact:123,id:101

    },
    {
        name:"Amit",age:50,contact:123,id:101
    },
]

let data = emp.map((e)=>{return e.name})
console.log(data);