var request = require('request');
var BBPromise = require('bluebird');



function getJSON(url, options){
    return new BBPromise(function(resolve, reject){
       request(url, function(error, response, body){
           if (error){
               reject(error, response);
           }else{
               resolve(JSON.parse(body), response);
           }
       });
    });
}

module.exports = {
    get : getJSON
}