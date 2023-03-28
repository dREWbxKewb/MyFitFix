import React from 'react';
import CalorieIntake from './CaloriesIn/CalorieIntake.jsx'
import CaloriesBurned from './CaloriesBurned.jsx'

function CalorieTable() {
  return (
    <div>
      <h1>Calorie Tracker</h1>
      <div>
        <CalorieIntake />
      </div>
      <h1>Calories Burned</h1>
      <div>
        <CaloriesBurned />
      </div>
    </div>
  )
}

export default CalorieTable;