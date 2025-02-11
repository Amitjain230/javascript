//API=>Application programming interface.
//fetch(URL,{method})//method is in object form.//in fatch their is two parameter 1.methood  2.URL. 
//methods-->get,post,delete,put,patch(HTTp methods-->Because url ke through data access kar rahe ha or bo un ki method ha.).
//By default get method work.
//fetch method return Promise.
//Promise have three stages 1.Reject. 2.Pending 3.fullfill,
//javascript is a syncronus type language light weigth(so it works fast).
//synchronus         and                asynch(the line of code and execute less time taken and run that code)
//1.                                    1.
//2.                                    2.
//3.                                    3.
//4.                                    4.
//5.                                    5.
//6.                                    6.
//.in server their is code and with the help of javascript we can take code by the means of jaavascript.
//if server slow then data not came then work as asynchronus.
//For hsndling the promise asynch and await.
// await is also a part ofd promise.
async function Demo() {
    let apidata = await fetch("https://jsonplaceholder.typicode.com/comments")
    let fdata=await apidata.json()
    let api=document.querySelector('#apidata')
    let dt=fdata.map((e)=>{return e.name})
    api.innerHTML = dt
   // console.log(fdata)
}

Demo()

//how to print that data in the form of table.
//
