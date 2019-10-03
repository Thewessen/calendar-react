import React, { useState, useReducer } from 'react';
import Datetime from './Datetime'
import './App.css';

const initialState = new Datetime(3, 10, 2019)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DAY': {
      try {
        return new Datetime(action.value, state.month, state.year)
      } catch (e) {
        return state
      }
    }
    case 'INC_MONTH': {
      try {
        const month = state.month + 1
        return new Datetime(
          state.day,
          month === 13 ? 1 : month,
          state.year
        )
      } catch (e) {
        return state
      }
    }
    case 'DEC_MONTH': {
      const month = state.month - 1
      try {
        return new Datetime(
          state.day,
          month < 1 ? month + 12 : month,
          state.year
        )
      } catch (e) {
        return state
      }
    }
    case 'INC_YEAR': {
      try {
        return new Datetime(state.day, state.month, state.year + 1)
      } catch (e) {
        return state
      }
    }
    case 'DEC_YEAR': {
      try {
        return new Datetime(state.day, state.month, state.year - 1)
      } catch (e) {
        return state
      }
    }
    default: {
      return state
    }
  }
}

const InputField = ({ date, parse, showCalendar }) => (
  <div className="input-group">
    <input
      type="text" min="0"
      value={date.toString()}
      onChange={(e) => parse(e.target.value)} />
    <input
      type="button"
      onClick={() => showCalendar()} />
  </div>
)

const Week = ({ week, handleClick }) => (
  <div className="calendar-week">
    {week.map(day =>
      <div className="calendar-day"
        key={day}
        onClick={() => handleClick(day)}>{ day }</div>)}
  </div>
)

const Month = ({ month, handleClick }) => month.map(week =>
  <Week
    week={week}
    key={week.join('')}
    handleClick={handleClick}/>)

const Selection = ({ field, inc, dec }) => (
  <div className="selection">
    <span onClick={(e) => { e.preventDefault(); dec() }}>&lt;</span>
      { field }
    <span onClick={(e) => { e.preventDefault(); inc() }}>&gt;</span>
  </div>
)

const Calendar = ({ date, setDay, incYear, decYear, incMonth, decMonth }) => (
  <div className="calendar">
    <div className="selection-group">
      <Selection
        inc={incYear}
        dec={decYear}
        field={date.year}
      />
      <Selection
        inc={incMonth}
        dec={decMonth}
        field={date.monthName} />
    </div>
    <Month
      month={date.fullMonth()}
      handleClick={setDay}/>
  </div>
)

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [calendar, setCalendar] = useState(false)

  return (
    <div className="calendar-container">
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
