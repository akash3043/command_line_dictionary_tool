var http = require('http')
var printRelatedInfo = require('./printRelatedInfo');

var wordRelatedInfo = function(requestType, word){

var host = 'api.wordnik.com';

var path, result;

switch(requestType){

    case 'examples' :
        path = '/v4/word.json/'+word+'/examples?includeDuplicates=false&useCanonical=false&skip=0&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
        break;
    case 'definitions' :
        path = '/v4/word.json/'+word+'/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        break;
    case 'synonyms' :
        path = '/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        break;
    case 'antonyms' :
        path = '/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        break;
    case 'wordOfTheDay':
        var currentDate = new Date().toISOString().slice(0,10);
        path = '/v4/words.json/wordOfTheDay?date='+currentDate+'&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
        break;
    default :
        break;
  }

var options = {

     host : host,
     path : path,
     port : 80
  }

http.get(options, function(res){

    var body ='';
    res.on('data', function(data){
      body+=data;
    })
    res.on('end', function(){

      switch(requestType){

          case 'examples' :
              printRelatedInfo.printExamples(JSON.parse(body));
              break;
          case 'definitions' :
              printRelatedInfo.printDefinitions(JSON.parse(body));
              break;
          case 'synonyms' :
              printRelatedInfo.printSynonyms(JSON.parse(body));
              break;
          case 'antonyms' :
              printRelatedInfo.printAntonyms(JSON.parse(body));
              break;
          case 'wordOfTheDay':
              printRelatedInfo.printWordOfTheDay(JSON.parse(body));
              break;
        }

    })

    res.on('error', function(err){
      console.log('We are unable to fetch the details'+ err.messages)
    })
  })

}

module.exports = wordRelatedInfo
