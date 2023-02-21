import React from 'react';
import { useState, useEffect } from 'react';
import ResContainer from '../ResContainer/ResContainer';
import ResForm from '../ResForm/ResForm';
import './App.css';


function App() {
  const [allReservations, setAllReservations] = useState([]);
  const [error, setError] = useState('');

  const getAllReservations = async () => {
    const url = 'http://localhost:3001/api/v1/reservations';
  
    try {
      const response = await fetch(url);
      const reservations = await response.json();
      setAllReservations(reservations);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getAllReservations()
  }, [])

  const addNewRes = (event, newRes) => {
    event.preventDefault();
    setAllReservations([newRes, ...allReservations])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <ResForm addNewRes={addNewRes} />
      </div>
      <div className='resy-container'>
        <ResContainer reservations={allReservations} />
      </div>
    </div>
  )

}

export default App;
