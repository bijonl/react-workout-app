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

  const moveItem = (currentSpot, newSpot) => {
    {/* Move a shallow copy of the current exercise list*/}
    const exerciseListCopy = [...exerciseList]; 
    {/* Variables of the two list items that are going to be moved*/}
    const itemToBeMoved = exerciseListCopy[currentSpot]; 
    const itemToBeReplaced = exerciseListCopy[newSpot]; 
    // First check that the top items isn't being moved up and the last item isn't being moved down.
    if(newSpot > -1 && newSpot < exerciseListCopy.length) {
      exerciseListCopy[newSpot] = itemToBeMoved; 
      exerciseListCopy[currentSpot] = itemToBeReplaced; 
    } 
    // Reorder the List
    setExerciseList(exerciseListCopy); 
  }

  const removeItem = (id) => {
    const exerciseListCopy = [...exerciseList]; 
    // Removes one item at the index that is clicked. 
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
        moveItem = {moveItem} 
      />
    </>
  );
}

export default App;
