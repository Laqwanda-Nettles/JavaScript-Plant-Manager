"use strict";

const examplePlant = {
  name: "Spider Plant",
  species: "Chlorophytum comosum",
  water: "once a week",
};

let plants = [];
plants.push(examplePlant);

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

  const storePlants = JSON.stringify(plants);
  localStorage.setItem("plants", storePlants);

  if (name.trim() === "") {
    alert("Name field cannot be empty");
  } else if (species.trim() === "") {
    alert("Species field cannot be empty");
  } else if (water.trim() === "") {
    alert("Water Schedule field cannot be empty");
  }
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

function removePlant() {
  const removal = form.removePlant.value;
  for (let index = 0; index < plants.length; index++) {
    if (plants[index].name === removal) {
      plants.splice(index, 1);
    }
  }
}
const btn = document.getElementById("removeBtn");
btn.addEventListener("click", removePlant);
