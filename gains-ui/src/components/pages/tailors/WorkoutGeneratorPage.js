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
  }

  return (
    <div>
      <h1>
        Generate Page
      </h1>
      <button onClick={generateWorkouts}>Generate</button>
      <div>
        {workoutList[5].length === 5 && Object.keys(workoutList).map((key) => {
          <div>
            <ul>
              {workoutList[key].map((workout) => {
                <li>
                  {workout}
                </li>
              })}
            </ul>
          </div>
        })}
      </div>
    </div>
  )
}

export default WorkoutGeneratorPage;
