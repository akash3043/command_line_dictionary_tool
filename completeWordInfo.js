var async = require('async')
var http = require('http')
var printRelatedInfo = require('./printRelatedInfo')

var completeWordInfo=function(word){

var examplesURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var definitionsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var synonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
var antonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

async.parallel({
    examples: function(callback){
      var results ='';
      http.get(examplesURL, function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null,(results));
        })
      })
    },
    definitions : function(callback){
      var results = '';
      http.get(definitionsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, results)
        })
      })
    },
    synonyms : function(callback){
      var results = '';
      http.get(synonymsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, results)
        })
      })
    },
    antonyms : function(callback){
      var results = '';
      http.get(antonymsURL,function(res){
        res.on('data', function(data){
          results+=data;
        })
        res.on('end', function(){
          callback(null, results)
        })
      })
    }
}, function(err, results){
    if(err){
      console.log('There is some error is fethching the details. Please try again');
    }
    printRelatedInfo.printWordDetails(results)

  })
}

module.exports = completeWordInfo
