


function ExerciseList({exerciseList, removeItem}) {
    const listItems = exerciseList.map((exercise, i) => 
        <div className="single-exercise" key={i} data-key={i}>
            {exercise.exerciseName} {exercise.numberOfSets}x{exercise.numberOfReps}
            <button type="button" onClick={() => removeItem(i)}>Remove</button>
        </div>
    ); 
    return (
        <div className="exercise-list">
           {listItems}
        </div>
    )
}

export default ExerciseList; 
