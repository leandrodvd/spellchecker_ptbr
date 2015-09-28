spellchecker_ptbr
===================
A npm module that executes spell check using a pt-BR dictionary. It relies on nodehun and nodehun-sentences modules and a pt-BR dictionary obtained from project VERO. It is the same dictionary used in open-office, downloaded from http://extensions.openoffice.org/en/project/vero-brazilian-portuguese-spellchecking-dictionary-hyphenator.

## Installation

  npm install spellchecker_ptbr --save

## Usage

	var spellchecker = require('spellchecker_ptbr');


	spellchecker.spellcheckCount("O rato roeu a routa do rei de romaa",
		function(err,errorsCount){
			if (err) {
				console.error("Ocorreu um erro "+err);
			}
			console.log("Total de erros encontrados:"+errorsCount);
		}
	);

	spellchecker.spellcheck("O rato roeu a routa do rei de romaa",
		function(err,typos){
			if (err) {
				console.error("Ocorreu um erro "+err);
			}
			console.log(typos);
		}
	);
	
	spellchecker.spellcheckCountArray(["O rato roeu a routa do rei de romaa","iço estah errrado"],
		function(err,errorsCount){
			if (err) {
				console.error("spellcheckCountArray-Ocorreu um erro "+err);
			}
			console.log("spellcheckCountArray-Total de erros encontrados:"+errorsCount);
		}
	);

## Release History

* 0.1.2 Initial release
* 0.1.3 Added spellcheckCountArray