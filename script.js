"use strict";

const examplePlant = {
  name: "Spider Plant",
  species: "Chlorophytum comosum",
  water: "once a week",
};

let plants = [];
plants.push(examplePlant);
const form = document.getElementById("plantForm");

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

  const name = form.name.value.trim();
  const species = form.species.value.trim();
  const water = form.water.value.trim();

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
