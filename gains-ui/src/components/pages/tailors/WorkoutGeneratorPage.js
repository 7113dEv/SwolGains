import React, { useContext } from 'react'
import constants from '../../../utilities/constants';
import { MainContext } from '../../../utilities/context/MainContext';
import WorkoutCard from '../../WorkoutCard/WorkoutCard';

export const WorkoutGeneratorPage = () => {
  const { workoutList, setWorkoutList } = useContext(MainContext);

  const randomize = (num) => {
    return Math.floor(Math.random() * (num));
  }
  const generateWorkouts = () => {
    // const { workouts, push, pull, core } = constants;
    // const { chest, shoulder, tricep, back, bicep, leg, core } = workouts

    let day = 'seven_day';
    let unshuffled = constants[day];
    setWorkoutList({
      0: [],
      1: [],
      2: [],
      3: [],
      4: [],
      5: []
    })

    let shuffled = unshuffled
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);

    // Workout Generation
    for (let i = 0; i < shuffled.length; i++) {
      while (workoutList[i].length < 5) {
        let { workouts } = constants;
        for (const [key, values] of Object.entries(workouts)) {
          let exercise = values[randomize(values.length)];
          if (constants[shuffled[i]].includes(key)) {
            if (!workoutList[i].includes(exercise)) {
              let list = workoutList[i];
              list.push(exercise);
              setWorkoutList((prevWorkouts) => ({ ...prevWorkouts, [i]: list }));
              break;
            }
          }
        }
      }
    }

    console.log(workoutList);
  }

  return (
    <div>
      <h1>
        Generate Page
      </h1>
      <button onClick={generateWorkouts}>Generate</button>
      <WorkoutCard />
    </div>
  )
}

export default WorkoutGeneratorPage;
