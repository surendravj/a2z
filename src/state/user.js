import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  activeUser: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload
    }
  }
})

export const { setUsers, setActiveUser } = userSlice.actions

export default userSlice.reducer
