import React from 'react'
import Week from './Week'

const Month = ({ month, dayNames, handleClick }) => (
  <div className="calendar">
    <Week
      week={dayNames}
      first={true}
      last={true} />
    <Week
      week={month[0]}
      first={true}
      last={false}
      clickDay={value => handleClick(value)} />
    {month.slice(1, -1).map(week => (
      <Week
        week={week}
        first={false}
        last={false}
        key={week.join('')}
        clickDay={value => handleClick(value)}/>
    ))}
    <Week
      week={month[month.length-1]}
      first={false}
      last={true}
      clickDay={value => handleClick(value)} />
  </div>
)

export default Month
