import React, { useState, useReducer } from 'react'
import InputField from './InputField'
import Calendar from './Calendar'
import { initialState, reducer } from './state'
import './App.css';


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [calendar, setCalendar] = useState(false)

  return (
    <div className="app-container">
      <InputField
        date={state}
        parse={(value) => dispatch({ type: 'SET_YEAR', value })}
        showCalendar={() => setCalendar(calendar => !calendar)}
        />
      { (() => calendar && <Calendar
          className="calendar-month"
          date={state}
          incMonth={() => dispatch({ type: 'INC_MONTH' })}
          decMonth={() => dispatch({ type: 'DEC_MONTH' })}
          incYear={() => dispatch({ type: 'INC_YEAR' })}
          decYear={() => dispatch({ type: 'DEC_YEAR' })}
          setDay={value => dispatch({ type: 'SET_DAY', value })}
        />)() }
    </div>
  )
}

export default App;
