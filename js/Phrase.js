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
    let html =''
    if(game.activePhrase.phrase === "my precious"){
       html = 
       `<li class="hide letter m">m</li>
        <li class="hide letter y">y</li>
        <li class="space"> </li>
        <li class="hide letter p">p</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="hide letter c">c</li>
        <li class="hide letter i">i</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
        <li class="hide letter s">s</li>`
    }
    else if(game.activePhrase.phrase === "hello there"){
        html = 
        `<li class="hide letter h">h</li>
         <li class="hide letter e">e</li>
         <li class="hide letter l">l</li>
         <li class="hide letter l">l</li>
         <li class="hide letter o">o</li>
         <li class="space"> </li>
         <li class="hide letter t">t</li>
         <li class="hide letter h">h</li>
         <li class="hide letter e">e</li>
         <li class="hide letter r">r</li>
         <li class="hide letter e">e</li>`
     }
    else if(game.activePhrase.phrase === "ciao bambino"){
        html = 
        `<li class="hide letter c">c</li>
         <li class="hide letter i">i</li>
         <li class="hide letter a">a</li>
         <li class="hide letter o">o</li>
         <li class="space"> </li>
         <li class="hide letter b">b</li>
         <li class="hide letter a">a</li>
         <li class="hide letter m">m</li>
         <li class="hide letter b">b</li>
         <li class="hide letter i">i</li>
         <li class="hide letter n">n</li>
         <li class="hide letter o">o</li>`
     }
    else if(game.activePhrase.phrase === "back to the future"){
        html = 
        `<li class="hide letter b">b</li>
         <li class="hide letter a">a</li>
         <li class="hide letter c">c</li>
         <li class="hide letter k">k</li>
         <li class="space"> </li>
         <li class="hide letter t">t</li>
         <li class="hide letter o">o</li>
         <li class="space"> </li>
         <li class="hide letter t">t</li>
         <li class="hide letter h">h</li>
         <li class="hide letter e">e</li>
         <li class="space"> </li>
         <li class="hide letter f">f</li>
         <li class="hide letter u">u</li>
         <li class="hide letter t">t</li>
         <li class="hide letter u">u</li>
         <li class="hide letter r">r</li>
         <li class="hide letter e">e</li>`
     }
    else {
        html = 
        `<li class="hide letter h">h</li>
         <li class="hide letter a">a</li>
         <li class="hide letter s">s</li>
         <li class="hide letter t">t</li>
         <li class="hide letter a">a</li>
         <li class="space"> </li>
         <li class="hide letter l">l</li>
         <li class="hide letter a">a</li>
         <li class="space"> </li>
         <li class="hide letter v">v</li>
         <li class="hide letter i">i</li>
         <li class="hide letter s">s</li>
         <li class="hide letter t">t</li>
         <li class="hide letter a">a</li>
         <li class="space"> </li>
         <li class="hide letter b">b</li>
         <li class="hide letter a">a</li>
         <li class="hide letter b">b</li>
         <li class="hide letter y">y</li>`
     }

    phraseContainer.insertAdjacentHTML('afterbegin',html)
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