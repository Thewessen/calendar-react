import React from 'react'

const Week = ({ week, first, last, clickDay }) => (
  <div className="calendar-week">
    {week.map(day => {
      if ((first && last) || (first && day > 7) || (last && day < 7)) {
        return (
          <div className="disabled calendar-day" key={day}>
            { day }
          </div>
        )
      }
      return (
        <div
          className="clickable calendar-day"
          key={day}
          onClick={(e) => { e.preventDefault(); clickDay(day); }}>
          { day }
        </div>
      )
    })}
  </div>
)

export default Week
