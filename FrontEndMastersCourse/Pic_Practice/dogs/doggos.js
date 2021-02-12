const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const selectDropdown = document.querySelector('.breed-select');
const img = document.querySelector('.doggo-img');
const refreshButton = document.querySelector('.refresh-btn');
const breedHeader = document.querySelector('.breed-header');
const spinner = document.querySelector('.spinner');

let lastBreed = 'Random';

fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const breedsArray = Object.keys(data.message);
        
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            selectDropdown.appendChild(option);
        }
    })

addDoggo("https://dog.ceo/api/breeds/image/random")
selectDropdown.addEventListener("change", function(event) {
    lastBreed = event.target.value;
    breedHeader.innerHTML = lastBreed.charAt(0).toUpperCase() + lastBreed.slice(1);
    addDoggo(`https://dog.ceo/api/breed/${lastBreed}/images/random`);
});
refreshButton.addEventListener("click", function(event) {
    if (lastBreed === 'Random') {
        addDoggo("https://dog.ceo/api/breeds/image/random");
    } else {
        addDoggo(`https://dog.ceo/api/breed/${lastBreed}/images/random`);
    }
});

function addDoggo(dog_url) {
    spinner.classList.add("show");
    img.classList.remove("show");
    fetch(dog_url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            img.src = data.message;
        })
}

img.addEventListener("load", function () {
    spinner.classList.remove("show");
    img.classList.add("show");
})