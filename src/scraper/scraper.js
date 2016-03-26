var rest = require('./request_promise');

const BOUQUETID = '{BOUQUETID}';
const CHANNELNAME = '{CHANNELNAME}';
const DATE = '{DATE}';
const EPISODEID = '{EPISODEID}';

var url_bouquets = 'http://guide.dstv.com/api/bouquet?countryCode=&productId=&language=EN';
var url_channels = `http://guide.dstv.com/api/channel/fetchChannelsByGenresInBouquet?bouquetId=${BOUQUETID}&genre=all`
var url_schedule = `http://guide.dstv.com/ChannelView/Content?channelTag=${CHANNELNAME}&date=${DATE}`;
var url_episode = `http://guide.dstv.com/popup/${EPISODEID}`;

function getBouquets() {
    return rest.get(url_bouquets)
        .then(function (data) {
            return data.items.map(function (item) {
                return {
                    _id: item.Id,
                    name: item.Title,
                    code: item.ProductCode
                };
            });
        });
}

function getChannels(bouquetId) {
    return rest.get(url_channels.replace(BOUQUETID, bouquetId))
        .then(function (data) {
            return data.items.map(function (item) {
                item._id = item.id;
                delete item.id;
                return item;
            });
        });
};

module.exports = {
    getBouquets,
    getChannels
}