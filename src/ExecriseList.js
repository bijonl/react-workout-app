function ExerciseList({exerciseList, removeItem, moveItem, moveItemDown}) {
    
    const listItems = exerciseList.map((exercise, i) => 
        <div className="single-exercise" key={exercise} data-key={i}>
            <div class="single-exercise-content">
                {exercise.exerciseName} {exercise.numberOfSets}x{exercise.numberOfReps}
            </div>
            <div class="action-button-wrapper">
                {/* Move Item Up by going move the index down 1 */}
                <button class="increase-btn" type="button" onClick={() => moveItem(i, i - 1)}>
                    <img src='./chevron-down-solid.svg' alt="up arrow"/>
                </button>
                {/* Move Item Up by going move the index up 1 */}
                <button class="decrease-btn" type="button" onClick={() => moveItem(i, i + 1)}>
                    <img src='./chevron-down-solid.svg' alt="down arrow" />
                </button>
                <button class="delete-button" type="button" onClick={() => removeItem(i)}>
                    <img src='./x-solid.svg' alt="remove button" />

                </button>
            </div>
        </div>
    ); 
    return (
        <div className="exercise-list">
            <div class="exercise-list-title">
                <h4>Exercise List</h4>
            </div>
           {listItems}
        </div>
    )
}

export default ExerciseList; 
