import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { login } from '../store/slices/authSlice'
import type { AppDispatch, RootState } from '../store/store'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard', { replace: true })
    }
  }, [isLoggedIn, navigate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // if (username && password) {
    //   dispatch(login())
    //   navigate('/dashboard', { replace: true })
    // }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} className="login-form">
      <Typography variant="h5" gutterBottom className="login-title">
        Login
      </Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" fullWidth className="login-button">
        Login
      </Button>
    </Box>
  )
}

export default Login
