var NodeCouchDB = require("node-couchdb");
var couch = new NodeCouchDB("127.0.0.1", 5984);

function save(database, documents) {
    couch.insert(database, {
            _id: "document_id", 
            field: ["sample", "data", true]
        }, function (err, resData) {
            if (err)
                return console.error(err);

            console.dir(resData)
        });
}

module.exports = {
    save : save
}