//helper functions for various user requests

var wordRelatedInfo = require('./wordRelatedInfo')
var async = require('async')

var helperFunctions ={};

//function to get examples of the word
helperFunctions.wordExamples= function(word){

  wordRelatedInfo('examples',word);
}
//function to get definitions of the word
helperFunctions.wordDefinitions = function(word){

  wordRelatedInfo('definitions', word);
}
//function to get the synonyms of the word
helperFunctions.wordSynonyms = function(word){

  wordRelatedInfo('synonyms', word);
}

//function to get the antonyms of the word
helperFunctions.wordAntonyms = function(word){

  wordRelatedInfo('antonyms', word);
}

//function to get the word of the day
helperFunctions.wordOfTheDay = function(word){

  wordRelatedInfo('wordOfTheDay', word);
}



module.exports = helperFunctions
