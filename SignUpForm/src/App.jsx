import React from 'react';
import { useForm } from 'react-hook-form';
import "./App.css"

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert('Form submitted successfully');
    console.log(data);
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username Field */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <span className="error">{errors.username.message}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Password must be at least 8 characters long, contain at least one letter and one number',
              },
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) =>
                value === document.getElementById('password').value || 'Passwords do not match',
            })}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
