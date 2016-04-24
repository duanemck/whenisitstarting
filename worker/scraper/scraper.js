var rest = require('./request_promise');
var cheerio = require('cheerio');
var moment = require('moment');

const BOUQUETID = '{BOUQUETID}';
const CHANNELTAG = '{CHANNELTAG}';
const DATE = '{DATE}';
const EPISODEID = '{EPISODEID}';

var url_home = 'http://guide.dstv.com';
var url_bouquets = 'http://guide.dstv.com/api/bouquet?countryCode=&productId=&language=EN';
var url_channels = `http://guide.dstv.com/api/channel/fetchChannelsByGenresInBouquet?bouquetId=${BOUQUETID}&genre=all`
var url_schedule = `http://guide.dstv.com/ChannelView/Content?channelTag=${CHANNELTAG}&date=${DATE}`;
var url_episode = `http://guide.dstv.com/popup/${EPISODEID}`;

function getBouquets() {
    return rest.get(url_bouquets)
        .then(function(data) {
            return data.items.map(function(item) {
                return {
                    _id: item.Id,
                    name: item.Title,
                    code: item.ProductCode
                };
            });
        });
}

function getChannels(bouquetId) {
    var url = url_channels.replace(BOUQUETID, bouquetId);
    return rest.get(url)
        .then(function(data) {
            return data.items.map(function(item) {
                item._id = item.id;
                delete item.id;
                return item;
            });
        });
};

function parseHtmlSchedule(html, channelTag, date){
    console.log(html);
    var $ = cheerio.load(html);
    var schedule = {
        channelTag,
        date,
        episodes : []
    }
    
    var links = $('div.eventLink');
    for (var i = 0; i < links.length; i++){
        var startTimeGMT = moment(`${date}T${links[i].children[0].children[0].data}:00Z`);
        
        schedule.episodes.push({
           episodeId : links[i].attribs['data-id'],
           startTimeGMT : startTimeGMT.utc().toDate(),
           description : links[i].children[1].data.trim()
        });
    }
    return schedule;
}

function getSchedule(channelTag, date) {
    //Make sure we have a cookie from the DSTV guide page, else the schedule request doesn't work
    return rest.getRaw(url_home)
        .then(() => {
            var url = url_schedule.replace(CHANNELTAG, channelTag).replace(DATE, date);
            return rest.getRaw(url)
                .then(function(data) {
                    return parseHtmlSchedule(data, channelTag, date);                    
                });
        });
};

module.exports = {
    getBouquets,
    getChannels,
    getSchedule
}