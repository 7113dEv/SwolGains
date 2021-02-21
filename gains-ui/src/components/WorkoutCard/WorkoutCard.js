import React, { useContext } from 'react'
import { MainContext } from '../../utilities/context/MainContext'
import './WorkoutCard.css';

const WorkoutCard = () => {
  const { workoutList } = useContext(MainContext);

  return (
    <div className="card">
      {Object.values(workoutList).map((value) => (
        value && <ul className="list">
          {value.map((workout) => (
            <li className="beans">
              {workout}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default WorkoutCard;
