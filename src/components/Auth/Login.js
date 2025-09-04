import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import './auth.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.email && formData.password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return React.createElement(
    'div',
    { className: 'auth-container' },
    React.createElement(
      Typography,
      { 
        variant: 'h4',
        className: 'auth-title',
        gutterBottom: true 
      },
      'Welcome Back'
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Email',
        name: 'email',
        type: 'email',
        value: formData.email,
        onChange: handleChange,
        className: 'auth-input',
        InputLabelProps: { style: { color: 'rgba(255, 255, 255, 0.7)' } },
        required: true
      }),
      React.createElement(TextField, {
        fullWidth: true,
        label: 'Password',
        name: 'password',
        type: 'password',
        value: formData.password,
        onChange: handleChange,
        className: 'auth-input',
        InputLabelProps: { style: { color: 'rgba(255, 255, 255, 0.7)' } },
        required: true
      }),
      React.createElement(
        Button,
        {
          type: 'submit',
          variant: 'contained',
          fullWidth: true,
          className: 'auth-button'
        },
        'Login'
      )
    ),
    React.createElement(
      'p',
      { 
        className: 'auth-toggle',
        onClick: () => navigate('/signup') 
      },
      "Don't have an account? Sign Up"
    )
  );
}

export default Login;