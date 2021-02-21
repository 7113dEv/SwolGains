import React, { useState } from 'react'
import constants from '../../../utilities/constants';

export const WorkoutGeneratorPage = () => {
  const [workoutList, setWorkoutList] = useState([]);

  const randomize = (num) => {
    return Math.floor(Math.random() * (num) + 1); 
  }

  const generateWorkouts = () => {
    console.log('Generating....');
    const { workouts, push } = constants;
    const { chest, shoulder, tricep, back, bicep, leg, core } = workouts;
    
    // 3 Day Workout Generation
    for (let i=1; i<=3; i++) {
      console.log(`Day: ${i}`);
      Object.keys(workouts).map((muscleGroup) => {
        console.log(muscleGroup);
        console.log(workouts[muscleGroup]);
        if (push.includes(muscleGroup)) {
          setWorkoutList(...workoutList, workouts.muscleGroup[0]);
          console.log(workoutList);
        }
        return null;
      });
    //   for (let muscleGroup of workouts) {
    //     console.log(muscleGroup);
    //     if (push.includes(muscleGroup)) {
    //       setWorkoutList(...workoutList, muscleGroup[randomize(muscleGroup.length())])
    //       console.log(workoutList);
    //     }
    //   }
    }
    console.log(workoutList);

  }


  return (
    <div>
    <h1>
      Generate Page
    </h1>
    <button onClick={generateWorkouts}>Generate</button>
    </div>
  )
}

export default WorkoutGeneratorPage;
