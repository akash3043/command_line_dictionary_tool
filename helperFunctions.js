

var wordInfo = require('./wordInfo')
var async = require('async')

var helperFunctions ={};

helperFunctions.wordExamples= function(word){

  wordInfo('examples',word);
}

helperFunctions.wordDefinitions = function(word){

  wordInfo('definitions', word);
}

helperFunctions.wordSynonyms = function(word){

  wordInfo('synonyms', word);
}

helperFunctions.wordAntonyms = function(word){

  wordInfo('antonyms', word);
}

helperFunctions.wordOfTheDay = function(word){

  wordInfo('wordOfTheDay', word);
}



module.exports = helperFunctions
