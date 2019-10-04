import React from 'react'
import Selection from './Selection'
import Month from './Month'

const Calendar = ({ date, setDay, incYear, decYear, incMonth, decMonth }) => (
  <div className="calendar-container">
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
      dayNames={date.dayNames()}
      handleClick={value => setDay(value)}/>
  </div>
)

export default Calendar
