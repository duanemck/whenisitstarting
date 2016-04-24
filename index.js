var scraper = require('./background/scraper/scraper');
var storage = require('./background/storage/storage-mongo');


// scraper.getBouquets().then((bouquets) => {
//    storage.saveBouquets(bouquets);
// });

scraper.getChannels('c35aaecd-5dd1-480b-ae24-357e600a0e4d').then((channels) => {
   storage.saveChannels(channels);
});

// scraper.getSchedule('ACT','2016-03-27')
// .then(schedule => {
//     console.log(schedule);
// });