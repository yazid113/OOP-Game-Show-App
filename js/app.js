/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game();
document.querySelector('#btn__reset').addEventListener('click', game.startGame)

/** 
*Event listener for each letter
*/
document.querySelector('#qwerty')
.addEventListener('click',function (e) {
    if(e.target.tagName.toLowerCase() === 'button'){
        game.handleInteraction(e)
    }  
});





