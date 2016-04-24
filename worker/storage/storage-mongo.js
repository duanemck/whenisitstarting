var mongo = require("mongojs");
var db = mongo("mongodb://localhost/dstv");

const collection_bouquets = 'bouquets';
const collection_channels = 'channels';

const notFound = 'not_found';

function save(dbName, documents) {
    var collection = db.collection(dbName);
    documents.forEach((doc) => {
        collection.findOne({_id:doc._id}, (err, existing) => {
            if (existing) {                
                console.log(`Updating existing document [${doc._id}]`);
                doc._v = data._v;
                collectionupdate({_id : doc._id}, {$set : doc}, (err) => {
                    if (err) console.error(err);
                });
                
            } else {
                collection.save(doc, (err, resData) => {
                    if (err) {
                        console.error(err);
                    }
                    else {
                        console.log(`New ID [${resData._id}]`);
                    }
                });
            }
        });
    });
}

module.exports = {
    saveBouquets: (bouquets) => { save(collection_bouquets, bouquets) },
    saveChannels: (channels) => { save(collection_channels, channels) },
}