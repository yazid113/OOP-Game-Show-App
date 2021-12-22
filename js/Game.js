/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases(){
        const phr = [
            new Phrase ("Hello there"),
            new Phrase ("Ciao bambino"),
            new Phrase ("Back to the future"),
            new Phrase ("My precious"),
            new Phrase ("Hasta la vista baby")
        ]
        return phr;
    };
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let num = Math.floor(Math.random()*this.createPhrases().length)
        const randomPhrase = this.phrases[num]
        return randomPhrase
        
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/    
    startGame() {
        document.querySelector('#overlay').style.display = 'none'
       game.activePhrase = game.getRandomPhrase()
       game.activePhrase.addPhraseToDisplay()
    };
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
    const phraseList = document.querySelectorAll('#phrase ul li')
    for (let i = 0; i < phraseList.length; i++) {
            if (phraseList[i].classList.contains('hide')) {
                return false;
            }
            
        }
        return true
    };
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {

    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {

    };
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    console.log(button);
    };
}

