
function ExerciseForm() {
    return (
        <>
        <form>
            <label for="exercise">Exercises</label>
            <input type="text" id="exercise" name="exercise"/>
            <label for="sets">Number of Sets</label>
            <input type="number" id="sets" name="sets"/>
            <label for="reps">Reps</label>
            <input type="number" id="reps" name="reps"/>
            <input type="submit" value="Add Exercise" />
        </form>
        </>
    ); 
}

export default ExerciseForm;