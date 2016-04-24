var NodeCouchDB = require("node-couchdb");
var couch = new NodeCouchDB("127.0.0.1", 5984);

const dbName_bouquets = 'bouquets';
const dbName_channels = 'channels';

const notFound = 'not_found';

function save(dbName, documents) {
    documents.forEach((doc) => {
        couch.get(dbName, doc._id, (err, resData) => {
            var data = resData.data;

            if (data.error && data.error === notFound) {
                couch.insert(dbName, doc, (err, resData) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(`New ID [${resData.data.id}]`);
                    }
                });
            } else {
                console.log(`Updating existing document [${doc._id}]`);
                doc._rev = data._rev;
                couch.update(dbName, doc, (err) => {
                    if (err) console.error(err);
                });
            }
        });
    });
}

module.exports = {
    saveBouquets: (bouquets) => { save(dbName_bouquets, bouquets) },
    saveChannels: (channels) => { save(dbName_channels, channels) },
}