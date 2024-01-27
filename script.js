"use strict";

const examplePlant = {
  name: "Spider Plant",
  species: "Chlorophytum comosum",
  water: "once a week",
};

let plants = [];
plants.push(examplePlant);

const form = document.getElementById("plantForm");
const nameInput = document.getElementById("name");
const speciesInput = document.getElementById("species");
const waterInput = document.getElementById("water");

function loadLocalStorage() {
  const plantData = JSON.parse(localStorage.getItem("plants"));
  if (plantData) {
    plants = plantData;
  }
}
loadLocalStorage();

function displayPlants() {
  const plantList = document.getElementById("plantList");
  plantList.innerHTML = "";

  plants.forEach((plant) => {
    const li = document.createElement("li");
    li.innerText = `Name: ${plant.name} \n 
    Species: ${plant.species} \n 
    Water Schedule: ${plant.water}`;
    plantList.appendChild(li);
  });
}
displayPlants();

function addPlants(name, species, water) {
  const newPlant = { name, species, water };
  plants.push(newPlant);

  const storePlants = JSON.stringify(plants);
  localStorage.setItem("plants", storePlants);
}

function addPlantFromForm(event) {
  event.preventDefault();

  const name = form.name.value;
  const species = form.species.value;
  const water = form.water.value;

  if (name.length === 0) {
    nameInput.style.borderColor = "red";
    alert("Name input cannot be blank");
  } else if (name.length < 3) {
    nameInput.style.borderColor = "red";
    alert("Name input cannot be less than 3 characters");
  } else if (name.length > 30) {
    nameInput.style.borderColor = "red";
    alert("Name input cannot be more than 30 characters");
  } else {
    nameInput.style.borderColor = "green";
  }

  if (species.length === 0) {
    speciesInput.style.borderColor = "red";
    alert("Species input cannot be blank");
  } else if (species.length < 3) {
    speciesInput.style.borderColor = "red";
    alert("Species input cannot be less than 3 characters");
  } else if (species.length > 30) {
    speciesInput.style.borderColor = "red";
    alert("Species input cannot be more than 30 characters");
  } else {
    speciesInput.style.borderColor = "green";
  }

  if (water.length === 0) {
    waterInput.style.borderColor = "red";
    alert("Water Schedule cannot be blank");
  } else if (water.length < 3) {
    waterInput.style.borderColor = "red";
    alert("Water Schedule cannot be less than 3 characters");
  } else if (water.length > 30) {
    waterInput.style.borderColor = "red";
    alert("Water Schedule cannot be more than 30 characters");
  } else {
    waterInput.style.borderColor = "green";
  }

  addPlants(name, species, water);
  displayPlants();
  form.reset();
}
form.addEventListener("submit", addPlantFromForm);

function removePlant() {
  let removal = form.removePlant.value;
  for (let index = 0; index < plants.length; index++) {
    if (plants[index].name === removal) {
      plants.splice(index, 1);

      const storePlants = JSON.stringify(plants);
      localStorage.setItem("plants", storePlants);
    }
  }
  displayPlants();
  form.reset();
}
const btn = document.getElementById("removeBtn");
btn.addEventListener("click", removePlant);
