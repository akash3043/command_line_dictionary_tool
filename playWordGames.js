//function to play word game with user
var http = require('http')
var async = require('async')
var completeWordInfo = require('./completeWordInfo')
var readline = require('readline')
var completeWordInfo = require('./completeWordInfo')
var chalk= require('chalk')


var playWordGames = function(){
//function to generate random word using wordnik http get request
    function generateRandomWord(){
          var url = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
          var results ='';
          http.get(url, function(res){
              res.on('data', function(data){
                results+=data;
              })
              res.on('end', function(){
                getWordInfo(JSON.parse(results).word);
              })
            })
      }
//function to get word info(definitions, synonyms, antonyms) for the random word
    function getWordInfo(word){
      var definitionsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
      var antonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
      var synonymsURL = 'http://api.wordnik.com:80/v4/word.json/'+word+'/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
//making parallel http requests to get all the details of the word
      async.parallel({
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
            playGame(word,results);
        })
      }
//function to play game with the user. input provided are random word and its related info generated using getWordInfo above
      function playGame(word, wordInfo){
          var antonyms = wordInfo.antonyms[0].words;
          var synonyms = wordInfo.synonyms[0].words;
          var definitions = wordInfo.definitions;
          if(wordInfo.definitions.length>0){
              console.log('Welcome to word game. Enter the correct word based on below information');
              console.log(chalk.yellow('Definition : ')+ definitions[0].text);
//using readline module to read user's input
              var rl = readline.createInterface({
                  input:process.stdin,
                  output:process.stdout
              })
              rl.question('Enter your answer here: ', function(answer){
                if(checkCorrectAnswer(answer)){
                  console.log(chalk.green("correct answer"));
                  rl.close();
                }else {
                  console.log(chalk.red('Wrong Answer'));
                  rl.question("Select one the three options to continue : try again, hint, quit: ", function(answer){
                        if(answer==='try again'){
                              rl.question('Enter your answer again here: ', function(answer){
                                  if(checkCorrectAnswer(answer)){
                                    console.log(chalk.green('Correct Answer'))
                                    rl.close();
                                  }else{
                                    console.log(chalk.red('Wrong Answer.')+' Correct answer is: '+chalk.yellow(word))
                                    rl.close();
                                    completeWordInfo(word);
                                  }
                              })
                          }else if(answer==='hint'){
                              console.log("Hint is given below");
                              console.log(chalk.yellow("Jumbled Word: ")+ shuffleWord(word));
                              rl.question('Enter your answer here: ', function(answer){
                                    if(checkCorrectAnswer(answer)){
                                        console.log('Correct answer');
                                        rl.close();
                                    }else{
                                        console.log(chalk.red('Wrong Answer.')+' Correct answer is: '+chalk.yellow(word))
                                        rl.close();
                                        completeWordInfo(word);
                                    }
                              })
                          }else if(answer==='quit'){
                              rl.close();
                              console.log('Correct answer is '+chalk.yellow(word));
                              completeWordInfo(word);
                          }
                  })
                }
              })
            }
//function to check if the answer provided by the user is correct
        function checkCorrectAnswer(answer){
            return answer===word||(synonyms!=null&&synonyms.indexOf(answer))>0
        }
//function to generate jumbled word from a given word
        function shuffleWord(word){
            var a = word.split("");
            var length = a.length
            for(var i=length-1;i>0;i--){
                var j = Math.floor(Math.random()*(i+1));
                var temp = a[i];
                a[i]=a[j];
                a[j] = temp;
            }
           return a.join('');
        }
    }
//call to function to generate random word
    generateRandomWord();

}



module.exports = playWordGames
