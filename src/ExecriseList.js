


function ExerciseList({listItems}) {
    const list = listItems.map((item) => {
        <div>{item.exerciseName}</div>
    }); 

    return (
        <div className="exercise-list">
           {list}
        </div>
    )
}

export default ExerciseList; 
