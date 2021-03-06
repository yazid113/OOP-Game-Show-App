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
            new Phrase ("hello there"),
            new Phrase ("ciao bambino"),
            new Phrase ("back to the future"),
            new Phrase ("my precious"),
            new Phrase ("you complete me"),
            new Phrase ("houston we have a problem"),
            new Phrase ("i am your father"),
            new Phrase ("show me the money"),
            new Phrase ("avengers assemble"),
            new Phrase ("to infinity and beyond"),
            new Phrase ("hasta la vista baby")
        ]
        return phr;
    };
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let num = Math.floor(Math.random()*this.phrases.length)
        const randomPhrase = this.phrases[num];
        return  randomPhrase;
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/    
    startGame() {
       document.querySelector('#overlay').style.display = 'none'
       if(document.querySelector('#overlay').classList.contains('win') || document.querySelector('#overlay').classList.contains('lose')) {
        this.missed = 0;
        document.querySelector('#phrase ul').innerHTML = ''
       const key = document.querySelectorAll('#qwerty button')
       for (let i = 0; i < key.length; i++) {
           key[i].setAttribute('class','key')
           key[i].disabled = false;
        }
       const hearts = document.querySelectorAll('#scoreboard ol li img')
       for (let i = 0; i < hearts.length; i++) {
           hearts[i].setAttribute('src','images/liveHeart.png')         
         }
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay() 
       }
       else{

        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
       }
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
        const hearts = document.querySelectorAll('#scoreboard ol li img')
        if (this.missed < 4) {
            this.missed += 1;
            hearts[this.missed - 1].setAttribute('src','images/lostHeart.png')
        }
        else{
            this.gameOver()
        }

    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        if (!gameWon && this.missed === 4) {
            document.querySelector('#overlay').setAttribute('class','lose')
            document.querySelector('#game-over-message').innerText = 'Sorry, better luck next time!'
            document.querySelector('#overlay').removeAttribute('style')
        }
        else if(gameWon && this.missed < 4){
            document.querySelector('#overlay').setAttribute('class','win')
            document.querySelector('#game-over-message').innerText = 'Great job!'
            document.querySelector('#overlay').removeAttribute('style')
        }
    };
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
    console.log(button.target.innerText)
    button.target.disabled = true;
    if (this.activePhrase.checkLetter(button.target.textContent)) {
        this.activePhrase.showMatchedLetter(button.target.textContent)
        button.target.setAttribute('class','chosen')
        this.gameOver(this.checkForWin())
        
        }
        else{
        this.removeLife()
        button.target.setAttribute('class','wrong')
        }
    
    };
}

