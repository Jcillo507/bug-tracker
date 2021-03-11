import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUsers: (state) => {
      state.push({name:"joe"})
      state.push({ name: "mike" })
    }
  }
})

export default slice.reducer

export const{getUser}=slice.actions