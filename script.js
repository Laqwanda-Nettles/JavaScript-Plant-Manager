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
    li.innerHTML = `Name: ${plant.name}, Species: ${plant.species}, Water Schedule: ${plant.water}`;
    plantList.appendChild(li);
  });
}
displayPlants();

function addPlants(name, species, water) {
  const newPlant = { name, species, water };
  plants.push(newPlant);
}
