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
      <div className='row ml-5 mr-5 d-flex justify-content-center mt-5'>
        {circles.map((circle, index) => {
          return (
            <div className='col-md-2 col-sm-2 col-xs-12 '>
              <div className='d-flex justify-content-center mt-2 mb-2 '>
                <Circle
                  circle={circle}
                  count={circle.circleCount}
                  textColor={circle.circleTextColor}
                  color={circle.circleColor}
                  id={circle.circleId}
                />
              </div>

              <div className='d-flex flex-row justify-content-center mt-2 mb-5'>
                <div
                  class='btn-group'
                  role='group'
                  aria-label='Basic mixed styles example'
                >
                  <button
                    onClick={() => handleIncrement(circle.circleId, index)}
                    type='button'
                    class='btn btn-danger'
                  >
                    Increment
                  </button>
                  <button
                   onClick={() => dispatch(addCircle(index))}
                   
                    type='button'
                    class='btn btn-warning'
                  >
                    Replicate
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
