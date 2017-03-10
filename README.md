# command_line_dictionary_tool
command line dictionary tool to get definition, synonyms, antonyms etc or play a word game
The command line tool has following functions -

1. Word Definitions
	Display definitions of a word. 
	./dict def <word>

2. Word Synonyms
	Display synonyms of a word. 
	./dict syn <word>
3. Word Antonyms
	Display antonyms of a word
	./dic ant <word>

4. Word Examples
	Display examples of a word
	./dict ex <word>

5. Word Full Dict
	Display all above details for a word
	./dict <word> or ./dict dict <word>

6. Word of the Day Full Dict
	Display all above details of word of the day
	./dict

7. Word Game
	./dict play
	The program should display a definition
	And ask the user to enter the word

	If correct word is entered, program should tell that the word is correct
	* Other(not displayed) Synonyms of the word should be accepted as correct answer.
	If incorrect word is entered, program should ask for
		- 1. try again
			Lets user enter word again

		- 2. hint
			Display a hint, and let user enter word again
			Hint can be
Display the word randomly jumbled (cat -> atc)

		-3 quit
			Display the word, its full dict, and quit
