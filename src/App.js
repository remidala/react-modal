import { useState, useEffect } from 'react';
// import Animal component from a components folder in the src folder
import AnimalComponent from './components/AnimalComponent';
import './App.css';

function App() {
  const [animals, setAnimals] = useState([]);

  // getting data from API and stroing the returned array of objects in the state
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
          const data = await response.json()
          setAnimals(data)
      }
      fetchData()
  }, [])

  // map through the data in the state and render the animal component for each item in the array
  return (
    <div>
      <h1>ANIMALS!!! - using react-modal package</h1>
      {animals.map((currentAnimal, index) => {
        return <AnimalComponent key={index} animal={currentAnimal}  />
      })}
    </div>
  );
}

export default App;