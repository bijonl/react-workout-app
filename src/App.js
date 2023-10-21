import './App.css';
import ExerciseList from './ExecriseList.js';
import ExerciseForm from './ExeciseForm.js';
import {useState} from 'react'; 

function App() {
  const[exerciseList, setExerciseList] = useState([
    { exerciseName : 'Exercise 1', numberOfSets : 3, numberOfReps: 10 }, 
    { exerciseName : 'Exercise 2', numberOfSets : 3, numberOfReps: 10 }, 
    { exerciseName : 'Exercise 3', numberOfSets : 3, numberOfReps: 10 }, 
    { exerciseName : 'Exercise 4', numberOfSets : 3, numberOfReps: 10 }, 
  ]); 

  const moveItemUp = (currentSpot, newSpot) => {
    const exerciseListCopy = [...exerciseList]; 
    const itemToBeMoved = exerciseListCopy[currentSpot]; 
    const itemToBeReplaced = exerciseListCopy[newSpot]; 
    if(newSpot > -1) {
      exerciseListCopy[newSpot] = itemToBeMoved; 
      exerciseListCopy[currentSpot] = itemToBeReplaced; 
    } else {
      console.log('no change bc its the top'); 
    }
    setExerciseList(exerciseListCopy); 
  }

  const moveItemDown = (currentSpot, newSpot) => {
    const exerciseListCopy = [...exerciseList]; 
    const itemToBeMoved = exerciseListCopy[currentSpot]; 
    const itemToBeReplaced = exerciseListCopy[newSpot]; 
    if(newSpot < exerciseListCopy.length) {
      exerciseListCopy[newSpot] = itemToBeMoved; 
      exerciseListCopy[currentSpot] = itemToBeReplaced; 
    } else {
      console.log('not moving because its at the bottom'); 
    }
    setExerciseList(exerciseListCopy); 
  }
 
  const removeItem = (id) => {
    const exerciseListCopy = [...exerciseList]; 
    exerciseListCopy.splice(id, 1); 
    setExerciseList(exerciseListCopy); 
  }; 

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setExerciseList([
      ...exerciseList,
      {
        exerciseName: e.target[0].value, 
        numberOfSets: e.target[1].value, 
        numberOfReps: e.target[2].value, 
      }
      ]); 
  }; 

  return (
    <>
      <h1>Exercise Workout Log</h1>
      <ExerciseForm handleFormSubmit = {handleFormSubmit} />
      <ExerciseList 
        exerciseList = {exerciseList} 
        removeItem = {removeItem} 
        moveItemUp = {moveItemUp} 
        moveItemDown = {moveItemDown} 
      />
    </>
  );
}

export default App;
