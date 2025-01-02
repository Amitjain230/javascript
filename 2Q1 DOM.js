//DOM is the document object model.
//By the means of DOM we can change in html & css.
//Every element is called node in dom.
//content is called text node in Dom.
//It converts the html page int tree like structure.
//We can target or apply node with three types:
//1.Id.
//2.Class name.
//3.Tag name.
//Id:
//To call html page we write document.
//getelementbyid returns only Single node. 
//Id is unique. Class is not unique.
// document.write we can write tags.
//For more than one class we can write getelementsbyclassname(). It returns multiple node list in the formate of array.
//Class name and tags return node list.
//In (.innerHtml) we can apply changes in element and we can pass tags in our content.
// textcontent print only content with tags.
let h = document.getElementsByClassName("head")
console.log(h)

h[1].innerHTML="<i>kjfvndfkj</i>"
h[2].textContent="<i>kjdfn</i>"

let para=document.getElementsByClassName("para")
para[2].textContent="this is para"
para[1].innerHTML="<i>Changed by javascript</i>"

document.write="Hello"
document.write="<i>Hello</i>"
//Q1.What is Hoisting and es6 ECMA.
