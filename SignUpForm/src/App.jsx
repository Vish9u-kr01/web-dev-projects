import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Signup from './components/signup'
import Dashboard from './components/Dashboard';
import "./App.css"

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;