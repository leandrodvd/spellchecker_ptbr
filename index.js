//init spellchecker
var fs = require('fs');
var path = require('path')

var dic = path.join(path.dirname(fs.realpathSync(__filename)), '/dic');

var spellchecker = require('nodehun-sentences');
var nodehun = require('nodehun');
var hunspell = new nodehun(
		fs.readFileSync(dic+'/pt_BR.aff'),
		fs.readFileSync(dic+'/pt_BR.dic')
);
	
	
	
	


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
			}
			if(typeof callback === 'function'){
				callback(null,typos.length);
			}
		
		});
	
	}
};




