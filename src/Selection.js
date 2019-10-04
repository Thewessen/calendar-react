import React from 'react'

const Selection = ({ field, inc, dec }) => (
  <div className="selection">
    <span className="clickable" onClick={(e) => { e.preventDefault(); dec() }}>&lt;</span>
      { field }
    <span className="clickable" onClick={(e) => { e.preventDefault(); inc() }}>&gt;</span>
  </div>
)

export default Selection
