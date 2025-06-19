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
          boxShadow: `0px 8px 24px ${theme.palette.mode === 'dark' ? 'rgba(0, 229, 255, 0.6)' : 'rgba(0,0,0,0.2)'}`,
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
          border: "3px solid #888",
          objectFit: "cover",
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
        }}
      />
    </Box>
  );
}

export default ProfilePicture;
