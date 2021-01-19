const grid = document.getElementById("dog-grid");
const dogDropdown = document.getElementById("dog-dropdown");
const dogImage = document.getElementById("image");
const spinner = document.querySelector('.spinner');

newDoggo();
createBreedList();

dogImage.addEventListener("load", function() {
  spinner.classList.add("no-show");
  dogImage.classList.remove("no-show");
});

function newDoggo(breed = dogDropdown.options[dogDropdown.selectedIndex].value) {
  spinner.classList.remove("no-show");
  dogImage.classList.add("no-show");
  if (breed === 'random') {
    fetch(`https://dog.ceo/api/breeds/image/random`).
    then(response => response.json()).
    then(data => dogImage.src = data.message);
  } else {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).
    then(response => response.json()).
    then(data => dogImage.src = data.message);
  }
}

function createBreedList() {
  fetch('https://dog.ceo/api/breeds/list/all').
  then(response => response.json()).
  then(function (data) {
    const breedsArray = Object.keys(data.message);
    breedsArray.forEach(function (breed, thisArg) {
      const btn = document.createElement("BUTTON");;
      btn.innerHTML = breed.toUpperCase();
      btn.onclick = function () {
        newDoggo(breed);
        dogDropdown.selectedIndex = thisArg + 1;
      };
      grid.appendChild(btn);

      const option = document.createElement('option');
      option.value = breed;
      option.innerText = breed.charAt(0).toUpperCase() + breed.slice(1);
      dogDropdown.appendChild(option);
    });
  });
}