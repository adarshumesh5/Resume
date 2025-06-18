import React from 'react';
import { Box, useTheme } from "@mui/material";

function ProfilePicture() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      mb={3}
      sx={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover img': {
          transform: 'scale(1.08)',
          boxShadow: `0 0 25px 4px ${theme.palette.mode === 'dark' ? '#00e5ff' : '#2979ff'}`
        }
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Adarsh Umesh"
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: `3px solid ${theme.palette.mode === 'dark' ? '#00e5ff' : '#2979ff'}`,
          objectFit: "cover",
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: `0 0 15px 2px ${theme.palette.mode === 'dark' ? '#00e5ff' : '#90caf9'}`,
        }}
      />
    </Box>
  );
}

export default ProfilePicture;
