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

//creating a table from the dom
// const previousTable = document.querySelector('table'); //does not work
// const previousTable = document.getElementById('1');
// const newTable = document.createElement('table');
// body.append(newTable);
// console.log("successfuuly inserted a table");

//cleaning data from the table
const tableData = document.querySelector('table.kook-holder');
const analyzing = tableData.rows[1].innerText;
console.log(analyzing[0]);
const tobeadded = document.createElement('ul');
body.append(tobeadded);

// body.append(mehrdad);



// const godknowswhat = tableData[0].innerText;
// console.log(godknowswhat);