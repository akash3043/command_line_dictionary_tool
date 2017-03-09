#!/usr/bin/env node
var helperFunctions = require('./helperFunctions');
var completeWordInfo = require('./completeWordInfo');
var playWordGames =require('./playWordGames');
var dict ={};

dict.returnOutput = function(arguments){

//store length of command line aruguments
  var length =  arguments.length;
//store command given by the user
  var command = arguments[2]||null;
//store word input given by the user
  var input = arguments[3]||null;

  if(length===2){
//Display the word of the day if there are only two inputs i.e. node ./dict
      helperFunctions.wordOfTheDay();

  }else if(length ===3){

//Play word game if command is play else ask for correct command
      if(command='play'){

        playWordGames();

      }else{

        console.log('Please enter the correct command');
      }

  }else if(length===4){

// Return output based on command and input given by the user

    switch(command){

      case 'def' :
          helperFunctions.wordDefinitions(input);
          break;
      case 'syn' :
          helperFunctions.wordSynonyms(input);
          break;
      case 'ant' :
          helperFunctions.wordAntonyms(input);
          break;
      case 'ex' :
          helperFunctions.wordExamples(input)
          break;
      case 'dict' :
          completeWordInfo(input);
          break;
      default :
          console.log('please enter correct the command');
          break;
      }
  }
}

dict.returnOutput(process.argv);

module.exports = dict;
