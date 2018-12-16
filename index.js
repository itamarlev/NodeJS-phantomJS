//import resources
const fs = require('fs');
const phantom = require('phantom');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;


//create a csv file
const csvWriter = createCsvWriter({
    header: ['NAME', 'LANGUAGE'],
    path: './file.csv'
});

//read urls from file
const urlList = fs.readFileSync('./urls.json', 'utf8');
const urls = JSON.parse(urlList).urls;
console.log(urls);

//open each url in a phantom browser 
//create and array with 2 dimentions 
//1. the url
//2. the request dat
//fill the array
var urlToRequestsArray = [];


(async function() {
const instance = await phantom.create();
const page = await instance.createPage();
await page.on('onResourceRequested' , function(requestedData){
    urlToRequestsArray.push([url, `Request (#${requestedData.id}): ${JSON.stringify(requestedData.url)}`]);
});

//going over the urls fetching the requested data and writing it in an array
let status, content, url;

for(url of urls){
    console.info(url);
    status = await page.open(url);
};  
instance.exit();

csvWriter.writeRecords(urlToRequestsArray)       
    .then(() => {
        console.log('...Done');
    })
    .catch(function(err) {
        console.log(err);
    } );
})();




    
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