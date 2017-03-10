var helperFunctions = require('./helperFunctions');
var completeWordInfo = require('./completeWordInfo');
var playWordGames =require('./playWordGames');
var chalk = require('chalk') //To format color of the command line text
var clear = require('clear'); //to clear the console
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
      clear();
      helperFunctions.wordOfTheDay();

  }else if(length ===3){

//Play word game if command is play else ask for correct command
      if(command==='play'){
        clear();
        playWordGames();

      }else{

        console.log(chalk.red('Please enter the correct command'));
      }

  }else if(length===4){

// Return output based on command and input given by the user

    switch(command){

      case 'def' :
          clear();
          console.log('You have entered the word : '+input)
          helperFunctions.wordDefinitions(input);
          break;
      case 'syn' :
          clear();
          console.log('You have entered the word : '+input)
          helperFunctions.wordSynonyms(input);
          break;
      case 'ant' :
          clear();
          console.log('You have entered the word : '+input)
          helperFunctions.wordAntonyms(input);
          break;
      case 'ex' :
          clear();
          console.log('You have entered the word : '+input)
          helperFunctions.wordExamples(input)
          break;
      case 'dict' :
          clear();
          console.log('You have entered the word : '+input)
          completeWordInfo(input);
          break;
      default :
          clear();
          console.log(chalk.red('please enter correct the command'));
          break;
      }
  }else {
      console.log(chalk.red("Please enter the correct command"))
  }
}

dict.returnOutput(process.argv);

module.exports = dict;
