/**
 * ChannelsController
 *
 * @description :: Server-side logic for managing channels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function index (req, res){
    res.send('hello duane');
}

module.exports = {
	'home' : index
};

