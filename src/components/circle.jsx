import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setActiveCircle } from '../state/circle'

///hdfjhdjfjh
export default function Circle ({ id, count, color, textColor, circle }) {
  const circleStyle = {
    width: '10vh',
    height: '10vh',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: textColor,
    cursor: 'pointer',
    fontSize: 'xx-large'
  }

  const dispatch = useDispatch()

  return (
    <Link
      className='ml-2 mr-2'
      onClick={() => dispatch(setActiveCircle(circle))}
      style={{ textDecoration: 'none' }}
      to={`users/${count}`}
    >
      <div key={id} style={circleStyle}>
        {count}
      </div>
    </Link>
  )
}
