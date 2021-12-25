/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

document.querySelector('#btn__reset').addEventListener('click', ()=>{
    game = new Game()
    game.startGame()
})

/** 
*Event listener for each letter
*/
document.querySelector('#qwerty')
.addEventListener('click',function (e) {
    if(e.target.tagName.toLowerCase() === 'button'){
        game.handleInteraction(e)
    }  
});





