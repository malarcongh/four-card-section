import React from 'react'

export default function Card({title, text, img, color}) {
  return (
    <div className={`card-container ${color}`}>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      <div className="card-footer">
        <img src={img} alt="" />
      </div>
    </div>
  )
}
