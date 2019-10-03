import React from 'react'

const InputField = ({ date, parse, showCalendar }) => (
  <div className="input-group">
    <input
      type="text" min="0"
      value={date.toString()}
      onChange={(e) => parse(e.target.value)} />
    <input
      type="button"
      value="C"
      onClick={() => showCalendar()} />
  </div>
)

export default InputField
