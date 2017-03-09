var printRelatedInfo = {};

printRelatedInfo.printExamples = function(data){
 console.log('Examples :');
  var examplesArr = data.examples;
  if(examplesArr.length){
        var new_arr = examplesArr.map(function(element, index){
        console.log("\t"+(index+1)+': '+element.text);
    })
  }else{
        console.log('\tNo examples available for this word')
  }
}

printRelatedInfo.printDefinitions = function(data){

  console.log('Definitions: ');
  if(data.length){
        var new_arr = data.map(function(element, index){
            console.log("\t"+(index+1)+': '+element.text);
    })
  }else{
      console.log('\tNo definitions available for this word');
  }
}

printRelatedInfo.printSynonyms = function(data){
  console.log("Synonyms: ");
  if(data.length){
    var synonymsWords = data[0].words;
    if(synonymsWords.length){
          var new_arr = synonymsWords.map(function(element,index){
              console.log("\t"+(index+1)+": "+element)
        })
    }else{
        console.log("\tNo synonyms available for this word")
    }
  }else{
      console.log('\tNo synonyms available for this word')
  }
}

printRelatedInfo.printAntonyms = function(data){
  console.log("Antonyms: ");
  if(data.length){
    var antonymsWords = data[0].words;
    if(antonymsWords.length){
        var new_arr = antonymsWords.map(function(element,index){
            console.log("\t"+(index+1)+": "+element)
      })
    }else{
        console.log('\tNo antonyms available for this word');
    }

  }else{
      console.log('\tNo antonyms available for this word');
  }
}

printRelatedInfo.printWordOfTheDay = function(data){
  console.log("Word of the day is: "+data.word)
  console.log("Below are the details of "+data.word);
  console.log("\tExamples: ");
  if(data.examples.length){
      var new_arr=data.examples.map(function(element, index){
          console.log("\t\t"+(index+1)+": "+ element.text);
      })
  }else{
      console.log("\t\tNo examples available for this word");
  }
  console.log("\tDefinitions: ")
  if(data.definitions.length){
      var new_arr = data.definitions.map(function(element, index){
          console.log("\t\t"+(index+1)+": "+ element.text);
      })
  }else{
      console.log("\t\tNo definitions available for this word")
  }
  console.log("\tSynonyms: ")
  if(data.synonyms){
      if(data.synonyms.words){
          var new_arr = data.synonyms.words.map(function(element, index){
              console.log("\t\t"+(index+1)+": "+element)
          })
      }else{
          console.log("\t\tNo synonyms available for this word")
      }
  }else{
      console.log("\t\tNo synonyms available for this word")
  }
  console.log("\tAntonyms: ")
  if(data.antonyms){
      if(data.antonyms.words){
          var new_arr = data.antonyms.words.map(function(element, index){
              console.log("\t\t"+(index+1)+": "+element)
          })
      }else{
          console.log("\t\tNo antonyms available for this word")
      }
  }else{
      console.log("\t\tNo antonyms available for this word")
  }
}

printRelatedInfo.printWordDetails = function(data){
  console.log("Below are the details of the word");
  console.log("\tExamples: ");
  if(data.examples){
      if(data.examples.examples.length){
          var new_arr = data.examples.examples.map(function(element, index){
              console.log("\t\t"+(index+1)+": "+element.text)
          })
      }else{
          console.log("\t\tNo examples available for this word")
      }
  }else{
      console.log("\t\tNo examples available for this word")
  }
  console.log("\tDefinitions: ");
  if(data.definitions.length){
      var new_arr = data.definitions.map(function(element, index){
          console.log("\t\t"+(index+1)+": "+element.text)
      })
  }else{
      console.log("\t\tNo definitions available for this word")
  }
  console.log("\tSynonyms: ")
  if(data.synonyms.length){
      if(data.synonyms[0].words.length){
          var new_arr = data.synonyms[0].words.map(function(element, index){
              console.log("\t\t"+(index+1)+": "+element)
          })
      }else{
          console.log("\t\tNo synonyms available for this word")
      }
  }else{
      console.log("\t\tNo synonyms available for this word");
  }
  console.log("\tAntonyms: ")
  if(data.antonyms.length){
      if(data.antonyms[0].words.length){
          var new_arr = data.antonyms[0].words.map(function(element, index){
              console.log("\t\t"+(index+1)+": "+element)
          })
      }else{
          console.log("\t\tNo antonyms available for this word")
      }
  }else{
      console.log("\t\tNo antonyms available for this word");
  }
}

module.exports = printRelatedInfo
