var scraper = require('./background/scraper/scraper');
var storage = require('./background/storage/storage');


scraper.getBouquets().then((bouquets) => {
   storage.saveBouquets(bouquets);
});

scraper.getChannels('745e86d7-0cea-4702-bf80-34e6e43fc911').then((channels) => {
   storage.saveChannels(channels);
});

