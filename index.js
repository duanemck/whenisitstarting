var scraper = require('./src/scraper/scraper');
var storage = require('./src/storage/storage');

scraper();

storage.save('dstv');