import { Box, Button, Icon } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/slices/authSlice'
import type { RootState } from '../store/store'
import '../styles/Header.css'

function Header() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login', { replace: true })
  }

  return (
    <Box className="layout-header">
      <Box className="layout-header-content">
        <Box className="layout-brand" onClick={() => navigate('/')}>
          <Box className="layout-brand-logo">
            <Icon>dashboard</Icon>
          </Box>
          <h1>Admin Dashboard</h1>
        </Box>

        <Box className="layout-actions">
          {isLoggedIn ? (
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={() => navigate('/login')}>
              Login
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Header
