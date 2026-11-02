import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import {Dashboards, Homes} from './redirect/Functions'

function Home() {
  const navigate = useNavigate();
  let [auth, setAuth] = useState(false)
  if(auth) return <Navigate to='/dashboard'  />
  

  return (
    <div className="p-8 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">🏠 Home Page</h1>
      <button 
        onClick={() => navigate("/dashboard")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Dashboard
      </button>
      <button onClick={()=> setAuth(true)}>Auth</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-8 bg-white shadow-md rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4 text-green-600">📊 Dashboard Page</h1>
      <p className="text-gray-600 mb-4">You have successfully navigated!</p>
      <Link to="/" className="text-blue-500 underline">Back to Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
       
        <nav className="mb-6 space-x-4">
          <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
          <Link to="/dashboard" className="text-blue-600 font-semibold hover:underline">Dashboard</Link>
        </nav>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ohome" element={<Homes />} />
          <Route path="/odash" element={<Dashboards />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}