"use strict";

const examplePlant = {
  name: "Spider Plant",
  species: "Chlorophytum comosum",
  water: "once a week",
};

const plants = [];
plants.push(examplePlant);

function displayPlants() {
  const plantList = document.getElementById("plantList");
  plantList.innerHTML = "";

  plants.forEach((plant) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>Name: ${plant.name}</p> 
    <p>Species: ${plant.species}</p> 
    <p>Water Schedule: ${plant.water}</p>`;
    plantList.appendChild(li);
  });
}
displayPlants();

function addPlants(name, species, water) {
  const newPlant = { name, species, water };
  plants.push(newPlant);
}

const form = document.getElementById("plantForm");
function addPlantFromForm(event) {
  event.preventDefault();

  const name = form.name.value;
  const species = form.species.value;
  const water = form.water.value;

  addPlants(name, species, water);
  displayPlants();
  form.reset();
}
form.addEventListener("submit", addPlantFromForm);
