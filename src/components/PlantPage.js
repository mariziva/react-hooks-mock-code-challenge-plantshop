import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleNewPlant(newPlant) {
    const updatedList = [...plants, newPlant]
    setPlants(updatedList)
  }

  const newPlantArray = plants.filter((plant) => {
    return plant.name.includes(searchInput)
  })

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PlantList plants={newPlantArray}/>
    </main>
  );
}

export default PlantPage;
