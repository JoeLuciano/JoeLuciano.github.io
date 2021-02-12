const wormProgress = document.querySelector('.worm-progress');
const moleImages = document.querySelectorAll('.mole-img');
const body = document.querySelector('.bg');
const moleHoleContainer = document.querySelector('.mole-hole-container');

let gameProgress = 0;
wormProgress.style.width = `${gameProgress}%`;

startGame();

function startGame() {
    console.log('Starting Game');
    randomlyTimeAllMoleAppearances();
}

function randomlyTimeAllMoleAppearances() {
    moleImages.forEach(element => {
        setTimeout( function() {
            element.classList.add('show');
            element.classList.add('hungry-mole');
            waitForFood(element);
        } , Math.floor(Math.random() * 1000 * 20) + 2000);
    });
}

function waitForFood(element) {
    let foodTimer = setTimeout( function() {
        element.src = "./images/mole-sad.png";
        element.classList.remove('hungry-mole');
        element.removeEventListener("click", feedEvent );
        moleLeavingSequence(element);
    }, 2000);;
    element.addEventListener("click", feedEvent );
    
    function feedEvent() {
        element.removeEventListener("click", feedEvent );
        element.classList.remove('hungry-mole');
        feedMole(element);
        clearTimeout(foodTimer);
    }
}

function feedMole(element) {
    updateGameProgress();
    element.src = "./images/mole-fed.png";
    setTimeout( function() {
        moleLeavingSequence(element);
    }, 500);
}

function moleLeavingSequence(element) {
    setTimeout( function() {
        element.src = "./images/mole-leaving.png";
        setTimeout( function() {
            randomlyTimeMoleAppearance(element);
        }, 500);
    }, 500);
}

function randomlyTimeMoleAppearance(element) {
    element.classList.remove("show");
    element.src = "./images/mole-hungry.png";
    setTimeout( function() {
        element.classList.add('show');
        element.classList.add('hungry-mole');
        waitForFood(element);
    } , Math.floor(Math.random() * 1000) * 20 + 2000);
}

function updateGameProgress() {
    gameProgress += 10;
    wormProgress.style.width = `${gameProgress}%`;
    if (gameProgress === 100) {
        body.classList.remove("bg");
        body.classList.add("win-screen");
        let image = document.createElement('img');
        image.src = "./images/win.png";
        body.appendChild(image);
        moleHoleContainer.classList.add("win");
        wormProgress.classList.add("win");
        body.style.zIndex = "20";
    }
}