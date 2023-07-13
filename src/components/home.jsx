import React, { useState } from 'react'
import Circle from './circle'
import { useDispatch, useSelector } from 'react-redux'
import { addCircle, incrementCircleCount } from '../state/circle'
import { generateRandomColor, getTextColor } from '../helpers/colorgenerator'

import Breadcrumb from './navbar'

export default function Home () {
  // eslint-disable-next-line no-unused-vars
  const [backgroundColor, setBackgroundColor] = useState('#F7DE3A')
  const [textColor, setTextColor] = useState('#000000')
  const circles = useSelector(state => state.circleReducer.circles)
  const dispatch = useDispatch()

  const handleIncrement = (id, index) => {
    const randomColor = generateRandomColor()
    setBackgroundColor(randomColor)
    setTextColor(getTextColor(randomColor))
    dispatch(incrementCircleCount({ id, bgColor: randomColor, textColor }))
  }

  return (
    <div className='container py-5'>
      <Breadcrumb />
      <div className='row px-5'>
        {circles.map((circle, index) => {
          return (
            <div className='col-2 col-xs-12'>
              <Circle
                circle={circle}
                count={circle.circleCount}
                textColor={circle.circleTextColor}
                color={circle.circleColor}
                id={circle.circleId}
              />
              <div className='d-flex justify-content-between mt-2 mb-5'>
                <button
                  className='btn btn-dark'
                  onClick={() => dispatch(addCircle(index))}
                >
                  Clone
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => handleIncrement(circle.circleId, index)}
                >
                  Increment
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
