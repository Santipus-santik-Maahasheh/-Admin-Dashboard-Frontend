import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {Employee} from '../../types/EmployeeI'

interface AuthState {
  isLoggedIn: boolean
  user: Employee | null 
}


const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Employee>) {
      state.isLoggedIn = true
      state.user = action.payload 
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
