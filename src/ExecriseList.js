


function ExerciseList({exerciseList, removeItem, moveItem, moveItemDown}) {
    const listItems = exerciseList.map((exercise, i) => 
        <div className="single-exercise" key={i} data-key={i}>
            {exercise.exerciseName} {exercise.numberOfSets}x{exercise.numberOfReps}
            
            {/* Move Item Up by going move the index down 1 */}
            <button type="button" onClick={() => moveItem(i, i - 1)}>Up</button>
            {/* Move Item Up by going move the index up 1 */}
            <button type="button" onClick={() => moveItem(i, i + 1)}>Down</button>
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
