import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'; 
import './App.css';
import Footer from './components/component/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import RegistrationForm from './components/component/RegistrationForm';
import AdminDashboard from './Dashboard/AdminDashboard';
import StudentDashboard from './Dashboard/StudentDashboard';
import TeacherDashboard from './Dashboard/TeacherDashboard';
import Login from './pages/Login';
import Navbar from './components/component/NavBar';



function App() {
    return (
                <div className="container w-screen">
                    <Navbar />
                    <Routes>
                        <Route path="/admin-dashboard" element={<AdminDashboard />} />
                        <Route path="/student-dashboard" element={<StudentDashboard />} />
                        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/academics" element={<Academics />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/login" element={<Login />} />
                    
                    
                    </Routes>
                    
                    <Footer />
                </div>
        
    );
}

export default App;
