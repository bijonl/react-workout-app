


function ExerciseList({exerciseList}) {
    const listItems = exerciseList.map((exercise, i) => 
        <div className="single-exercise" key={i}>
            {exercise.exerciseName} {exercise.numberOfSets}x{exercise.numberOfReps}
        </div>
    ); 
    return (
        <div className="exercise-list">
           {listItems}
        </div>
    )
}

export default ExerciseList; 
