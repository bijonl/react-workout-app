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

  const removeItem = (id) => {
    console.log(id); 
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
      <ExerciseList exerciseList = {exerciseList} removeItem = {removeItem} />
    </>
  );
}

export default App;
