
function ExerciseForm({handleFormSubmit}) {
    return (
        <>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="exercise">Exercises
          <input type="text" id="exercise" name="exercise"/>
          </label>
          <label htmlFor="sets">Number of Sets
          <input type="number" id="sets" name="sets"/>
          </label>
          <label htmlFor="reps">Reps
          <input type="number" id="reps" name="reps"/>
          <input type="submit" value="Add Exercise" />
          </label>
        </form>
        </>
    ); 
}

export default ExerciseForm;