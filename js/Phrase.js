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
    for (let i = 0; i < this.phrase.length; i++) {
        let li=document.createElement('li')
        if(this.phrase[i] !== ' '){
            li = `<li class = 'hide letter ${this.phrase[i]}'>${this.phrase[i]}</li>`
            html += li        
    }
        else if(this.phrase[i] === ' '){
            li = `<li class = space> </li>`
            html += li
            
        }       
    }phraseContainer.insertAdjacentHTML('afterbegin',html)
}

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
      return this.phrase.includes(letter.toLowerCase())   
    };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
    const phraseList = document.querySelectorAll('#phrase ul li')
    for (let i = 0; i < phraseList.length; i++) {
      if(phraseList[i].innerText === letter){
                phraseList[i].classList = `show letter ${[phraseList[i].innerText]}`
            }        
        }
    };
}