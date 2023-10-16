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
  ])

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setExerciseList([
      {
        exerciseName: e.target[0].value, 
        numberOfSets: e.target[1].value, 
        numberOfReps: e.target[2].value, 
      }, 
      ...exerciseList]); 
  }; 

  const listItems = exerciseList.map((exercise, i) => 
      <div className="single-exercise" key={i}>{exercise.exerciseName} {exercise.numberOfSets}x{exercise.numberOfReps}</div>
  ); 

  return (
    <>
      <h1>Exercise Workout Log</h1>
      <ExerciseForm handleFormSubmit = {handleFormSubmit} />
      <div className="exercise-list">
          {listItems}
       </div>
    </>
  );
}

export default App;
