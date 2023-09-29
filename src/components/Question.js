import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AlertCard = ({ title, message }) => {
  return (
    <Card variant="outlined" sx={{  backgroundColor: '#e3f3fa',margin:'2em 2em 0px 2em',borderLeft:'2px solid #92d9f7' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AlertCard;
