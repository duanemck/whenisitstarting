var request = require('request').defaults({jar : true});
var BBPromise = require('bluebird');

function getJSON(url, options){
    return new BBPromise((resolve, reject) => { 
        getRaw(url, options)
            .then((body, response) => {
                resolve(JSON.parse(body), response);
            });
    });    
}

function getRaw(url, options){
    console.log(`Fetching {${url}}`);
    return new BBPromise(function(resolve, reject){
       request(url, function(error, response, body){
           if (error){
               reject(error, response);
           }else{
               resolve(body, response);
           }
       });
    });
}

module.exports = {
    get : getJSON,
    getRaw
}