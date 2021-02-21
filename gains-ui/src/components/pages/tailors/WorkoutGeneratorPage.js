import React, { useState } from 'react'
import constants from '../../../utilities/constants';

export const WorkoutGeneratorPage = () => {
  const [workoutList, setWorkoutList] = useState([]);

  const randomize = (num) => {
    return Math.floor(Math.random() * (num));
  }

  const generateWorkouts = () => {
    // const { workouts, push, pull, core } = constants;
    // const { chest, shoulder, tricep, back, bicep, leg, core } = workouts;
    const testWorkoutLists = {
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: []
    };

    let day = 'seven_day';
    let unshuffled = constants[day];

    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);

    // Workout Generation
    for (let i = 0; i < shuffled.length; i++) {
      while (testWorkoutLists[i].length < 5) {
        let { workouts } = constants;
        for (const [key, values] of Object.entries(workouts)) {
          let exercise = values[randomize(values.length)];
          if (constants[shuffled[i]].includes(key)) {
            if (!testWorkoutLists[i].includes(exercise)) {
              let list = testWorkoutLists[i];
              list.push(exercise);
              testWorkoutLists[i] = list;
              break;
            }
          }
        }
      }
      // Object.entries(workouts).map((muscleGroup) => {
      //   console.log(muscleGroup);
      //   if (push.includes(muscleGroup)) {
      //     // setWorkoutList(...workoutList, exercises[0]);
      //   }
      //   return null;
      // });
      //   for (let muscleGroup of workouts) {
      //     console.log(muscleGroup);
      //     if (push.includes(muscleGroup)) {
      //       setWorkoutList(...workoutList, muscleGroup[randomize(muscleGroup.length())])
      //       console.log(workoutList);
      //     }
      //   }
    }
    console.log(testWorkoutLists);
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
