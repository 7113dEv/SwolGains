import React, { createContext, useState } from 'react';

export const MainContext = createContext();

/**
 * Component that incorporates useContext to hold all state values,
 * and can be imported to any component as needed
 * @param {} children Any child component of the context
 */
export const MainProvider = ({ children }) => {

  const [workoutList, setWorkoutList] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  })

  return (
    <MainContext.Provider
      value={
        {
          workoutList, setWorkoutList
        }
      }
    >
      {children}
    </MainContext.Provider>
  );
};
