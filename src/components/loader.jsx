import React from 'react'
import { useSelector } from 'react-redux'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Loader () {
  const activeCircle = useSelector(state => state.circleReducer.activeCircle)

  return (
    <div className='loading-container'>
      <ClipLoader size={50} color={activeCircle.circleColor} />
    </div>
  )
}
