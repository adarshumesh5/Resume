import React from 'react'
import {Typography,  Link } from "@mui/material";
function Header() {
  return (
    <div>
        <Typography variant="h4" gutterBottom align="center">
          ADARSH UMESH
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Los Angeles, CA | +1 (747)333-4258 | adarshumesh657@gmail.com |{" "}
          <Link href="https://www.linkedin.com/in/adarsh-umesh/" target="_blank" rel="noopener">
            LinkedIn
          </Link>{" "} | {" "}
          <Link href="https://github.com/adarshumesh5" target="_blank" rel="noopener">
            GitHub
          </Link>{" "}
        </Typography>
    </div>
  )
}

export default Header
