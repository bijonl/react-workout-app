
function ExerciseForm({handleFormSubmit}) {
    return (
        <div class="exercise-form-wrapper">
        <h1>Exercise Workout Log</h1>
        <form class="exercise-form" onSubmit={handleFormSubmit}>
          <div class="input-container">
            <label htmlFor="exercise">
            Exercises
            </label>
            <div class="">
              <input type="text" id="exercise" name="exercise"/>
            </div>
            
          </div>

          <div class="input-container">
            <label htmlFor="sets">Number of Sets</label>
            <div class="">
            <input type="number" id="sets" name="sets"/>
            </div>
          </div>

          <div class="input-container">
          <label htmlFor="reps">Reps</label>
          <div>
            <input type="number" id="reps" name="reps"/>
          </div>
          </div>

          <input class="btn" type="submit" value="Add Exercise" />

          
        </form>
        </div>
    ); 
}

export default ExerciseForm;