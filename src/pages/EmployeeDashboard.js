import React from 'react';
import { Typography, Paper } from '@mui/material';

const EmployeeDashboard = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4">Employee Dashboard</Typography>
      <Typography>Welcome to your employee portal!</Typography>
    </Paper>
  );
};

export default EmployeeDashboard;