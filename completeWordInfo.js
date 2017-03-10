//get all details of the word (examples, definintions, synonyms & antonyms)
var async = require('async')
var http = require('http')
var printRelatedInfo = require('./printRelatedInfo')

var completeWordInfo=function(word){

var examplesURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var definitionsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var synonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var antonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
//make parallel http requests to get all the details in the final results
async.parallel({
//http request to get examples of the word
    examples: function(callback){
      var results ='';
      http.get(examplesURL, function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null,JSON.parse(results));
        })
      })
    },
//http request to get defintitions of the word
    definitions : function(callback){
      var results = '';
      http.get(definitionsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, JSON.parse(results))
        })
      })
    },
//http request to get the synonyms of the word
    synonyms : function(callback){
      var results = '';
      http.get(synonymsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, JSON.parse(results))
        })
      })
    },
//http request to get the antonyms of the word
    antonyms : function(callback){
      var results = '';
      http.get(antonymsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, JSON.parse(results))
        })
      })
    }
}, function(err, results){
    if(err){
      console.log('There is some error is fethching the details. Please try again');
    }
// print the result on console using printWordDetails menthod
    printRelatedInfo.printWordDetails(results)

  })
}

module.exports = completeWordInfo
