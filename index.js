var fs = require('fs');
var path = require('path')

var dic = path.join(path.dirname(fs.realpathSync(__filename)), '/dic');

var spellchecker = require('nodehun-sentences');
var nodehun = require('nodehun');
var hunspell = new nodehun(
		fs.readFileSync(dic+'/pt_BR.aff'),
		fs.readFileSync(dic+'/pt_BR.dic')
);
//uses async to the spell check on multiple entries at a time(like in spellcheckCountArray function)
async = require("async");
	
	


/**
 * Spellchecker for portuguese pt-BR.
 *
 * @param  {String} sentence
 * @param  {String} callback - a callback function that receives (error,result)
 */
module.exports = {
	spellcheck: function (sentence,callback){
		spellchecker(hunspell, sentence, function(err, typos) {
			if (err) {
				callback(err);
				return;
			}
			if(typeof callback === 'function'){
				callback(null,typos);
			}
		
		});
	
	},
	spellcheckCount: function (sentence,callback){
		spellchecker(hunspell, sentence, function(err, typos) {
			if (err) {
				callback(err);
				return;
			}
			if(typeof callback === 'function'){
				callback(null,typos.length);
			}
		
		});
	
	},
	spellcheckCountArray: function (items,callback){
		if (!Array.isArray(items)){
			callback(new Error("The object provided is not an Array"));
			return;
		}
		var count=0;
		var iterator=function(item,iteratorCallback){
			spellchecker(hunspell, item, function(err, typos) {
				if (err) {
					iteratorCallback(err);
					return;
				}
				//add typos count for this item
				count+=typos.length;
				//finished - call iteratorCallback
				iteratorCallback();
			});
		}
		var finalCallback=function(err){
			if(err){
				callback(err);
				return;
			}
			callback(null,count);
		};
		async.each(
			items,
			iterator,
			finalCallback		
		);
			
	}
};




