const mehrdad_table = document.querySelector('table');
const body = document.querySelector('body');
console.log("body was grabbed");
console.log("selection done");
const myObject = {
    name : 'shoor',
    kook :[{
        mi : "bekar",
        fa : "diez"
    }]
};
console.log("object created");
// document.querySelector('button').addEventListener('click',(event)=>{
//     
// })
const newparagrap = document.createElement('p');
newparagrap.textContent = "hello new content is here";
body.append(newparagrap);

const buttons = document.querySelectorAll('button');

