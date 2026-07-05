import { Box, Icon, Typography } from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import '../styles/Footer.css'

function Footer() {
  return (
    <Box className="layout-footer">
      <Box className="layout-footer-content">
        <Typography variant="body2">
          Need help? Our support team is available to assist with any questions.
        </Typography>
        <Box className="layout-footer-contact">
          <Icon><CallIcon /></Icon>
          <Typography variant="body2">Krm Santosh • +91 12345 67890</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
