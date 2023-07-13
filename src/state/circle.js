import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  circles: [
    {
      circleId: uuidv4(),
      circleCount: 0,
      circleColor: '#F7DE3A',
      circleTextColor: '#000000'
    }
  ],
  activeCircle: {}
}

export const circleSlice = createSlice({
  name: 'circle',
  initialState,
  reducers: {
    addCircle: (state, action) => {
      if (state.circles.length < 10) {
        let clone = Object.assign({}, state.circles[action.payload])
        clone.circleId = uuidv4()
        clone.circleCount = 0
        state.circles.push(clone)
      }
    },
    incrementCircleCount: (state, action) => {
      const { id, bgColor, textColor } = action.payload
      // eslint-disable-next-line array-callback-return
      state.circles.map(circle => {
        if (circle.circleId === id) {
          circle.circleCount += 1
          circle.circleColor = bgColor
          circle.circleTextColor = textColor
        }
      })
    },
    setActiveCircle: (state, action) => {
      state.activeCircle = action.payload
    }
  }
})

export const { addCircle, incrementCircleCount, setActiveCircle } =
  circleSlice.actions

export default circleSlice.reducer
