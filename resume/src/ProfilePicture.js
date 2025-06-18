import React from 'react'
import { Box } from "@mui/material";
function ProfilePicture() {
  return (
    <div>
      <Box display="flex" justifyContent="center" mb={2}>
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Adarsh Umesh"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "2px solid #888",
              objectFit: "cover"
            }}
          />
        </Box>

    </div>
  )
}

export default ProfilePicture
