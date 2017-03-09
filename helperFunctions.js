var wordRelatedInfo = require('./wordRelatedInfo')
var async = require('async')

var helperFunctions ={};

helperFunctions.wordExamples= function(word){

  wordRelatedInfo('examples',word);
}

helperFunctions.wordDefinitions = function(word){

  wordRelatedInfo('definitions', word);
}

helperFunctions.wordSynonyms = function(word){

  wordRelatedInfo('synonyms', word);
}

helperFunctions.wordAntonyms = function(word){

  wordRelatedInfo('antonyms', word);
}

helperFunctions.wordOfTheDay = function(word){

  wordRelatedInfo('wordOfTheDay', word);
}



module.exports = helperFunctions
