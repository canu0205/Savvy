import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function CurrentTimeBox() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const daysOfWeekAbbrev = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeekAbbrev = daysOfWeekAbbrev[date.getDay()];

    return `${year}-${month}-${day} (${dayOfWeekAbbrev})`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, null);

  if (window.innerWidth <= 1150 || isMobile) {
    return null; 
  }

  return (
    <Box
      width={125}
      height={20}
      border={1}
      padding={2}
      borderColor="white"
      style={{
        marginTop: '20px',
        marginRight: '32px',
        userSelect: 'none',
        position: 'absolute',
        right: 0,
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
      }}
    >
      <Typography
        style={{
          color: '#9c9c9c',
          fontSize: '12.5px',
          fontFamily: "'tektur', sans-serif",
          fontWeight: '800',
          marginLeft: '10px',
        }}
      >
        {formatDate(currentDate)}
      </Typography>
    </Box>
  );
}

export default CurrentTimeBox;