import { Box, Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/authSlice'
import type { AppDispatch, RootState } from '../store/store'

function AdminDashboard() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome, {user?.name || 'Admin'}.
      </Typography>
    </Box>
  )
}

export default AdminDashboard
