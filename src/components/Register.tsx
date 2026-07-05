import { Box, Button, MenuItem, TextField, Typography } from '@mui/material'
import '../styles/Register.css'

function Register() {
  return (
    <Box className="register-page">
      <Box className="register-card">
        <Typography variant="h5">Create account</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Join the admin panel with your details below.
        </Typography>

        <Box className="register-grid">
          <TextField label="Full name" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Phone" fullWidth />
          <TextField label="Employee ID" fullWidth />
          <TextField label="Department" fullWidth />
          <TextField select label="Role" fullWidth defaultValue="Employee">
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </TextField>
          <TextField label="Password" type="password" fullWidth required />
          <TextField label="Confirm Password" type="password" fullWidth required />
        </Box>

        <Box className="register-actions">
          <Button variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button variant="contained">Register</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
