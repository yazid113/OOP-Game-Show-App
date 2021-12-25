/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
    const phraseContainer = document.querySelector('#phrase ul')
    let html =``;
    for (let i = 0; i < game.activePhrase.phrase.length; i++) {
        let li=document.createElement('li')
        if(game.activePhrase.phrase[i] !== ' '){
            li = `<li class = 'hide letter ${game.activePhrase.phrase[i]}'>${game.activePhrase.phrase[i]}</li>`
            console.log(li)
            html += li        
    }
        else if(game.activePhrase.phrase[i] === ' '){
            li = `<li class = space> </li>`
            console.log(li)
            html += li
            
        }       
    }phraseContainer.insertAdjacentHTML('afterbegin',html)
}

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
      return game.activePhrase.phrase.includes(letter.toLowerCase())   
    };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
    const phraseList = document.querySelectorAll('#phrase ul li')
    for (let i = 0; i < phraseList.length; i++) {
      if(game.activePhrase.checkLetter(letter) && phraseList[i].innerText === letter){
                phraseList[i].classList = `show letter ${[phraseList[i].innerText]}`
            }        
        }
    };
}