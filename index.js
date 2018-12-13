const fs = require('fs');
const phantom = require('phantom');
var request = require('request');


const urlList = fs.readFileSync('./urls.json', 'utf8');
//console.log(urlList.urls);
const urls = JSON.parse(urlList).urls;
console.log(urls);
let i = 0;

while(urls[i]){
    console.log(urls[i]);
    i++;
}


/*

var test = function( counter , callback){
    setTimeout(function(){
        callback()
    },counter)
}


test(5000, function(){
    console.log("Done using");
})
console.log("im here")


function greet(name){
    return new Promise(function (resolve , reject){
        setTimeout(function() {
            resolve(`Hello ${name}`);
          }, 3000);
    })
}

greet("hi").then(function (data){
    var temp;
    if(data){
        temp=data;
        console.log(data)
    }

}).then()

async function Testme(){
    const resultFromAsync = await greet("SecondName");
    console.log("From Async"+resultFromAsync)
}
Testme();
*/
