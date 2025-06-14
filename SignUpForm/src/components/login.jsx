import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

const SignupForm = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser =  users.find((user) => user.email === data.email && user.password === data.password);
    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser)); // Update user data in localStorage // Update user data in localStorage
      navigate('/dashboard');
    }
    else{
      alert ('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="signup-form">
      <h2>Login !</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

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

        {/* Submit Button */}
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <p style={{ marginTop: '20px', marginLeft: "20px", color: 'black' }}>Don't have an account?{' '}
            <Link to="/Signup" style={{ color: '#2563eb', textDecoration: 'none' }}>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;

