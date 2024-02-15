// function play(){
//     // step-1: hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key
   
    // console.log('player pressed',playerPressed);
    // console.log('player pressed', playerPressed)

    // stop the game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementById('current-score', updatedScore)





        // ---------------------------------------
        // update score:
        // step 1 get the correct score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScoreText)

        // // 2. increase the score by 1
        // const newScore = currentScore + 1
        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        // // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        console.log('you missed. you lost a life')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver()
        }


        // -----------------------
        // // step-1 : get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step-2 : reduce the life count 
        // const lifeLeft = currentLife - 1;
        // // step-3 : display the updated life count
        // currentLifeElement.innerText = lifeLeft;
    }

    function newFunction() {
        If(playerPressed === 'Escaped'); {
            gameOver();
        }
    }
    
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    // console.log(alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    // reset score and life
    setTextElementById('current-life', 5)
    setTextElementById('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementById('game-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);

}