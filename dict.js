#!/usr/bin/env node

var dict ={};

dict.returnOutput = function(arguments){

//store length of command line aruguments
  let length =  arguments.length;
//store command given by the user
  let command = arguments[2]||null;
//store word input given by the user
  let input = arguments[3]||null;

  if(length===2){
//Display the word of the day if there are only two inputs i.e. node ./dict
      console.log('Display word of the day');

  }else if(length ===3){

//Play word game if command is play else ask for correct command
      if(command='play'){

        console.log('lets play a word game');

      }else{

        console.log('Please enter the correct command');
      }

  }else if(length===4){

// Return output based on command and input given by the user

    switch(command){

      case 'def' :
          console.log('display the definition of '+input);
          break;
      case 'syn' :
          console.log('display the synonyms of '+ input);
          break;
      case 'ant' :
          console.log('display the antonyms of '+ input);
          break;
      case 'ex' :
          console.log('display the examples of '+ input);
          break;
      case 'dict' :
          console.log('display the details of ' + input);
          break;
      default :
          console.log('please enter correct the command');
          break;
      }
  }
}

dict.returnOutput(process.argv);

module.exports = dict;
