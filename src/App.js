import React, { useEffect, useState } from 'react'
import './App.css'
import Clock from './screens/Clock/Clock.jsx'
import { setTime } from './services/time.js'

const App = () => {
  const { hour, setHour} = useState('')
  const { minute, setMinute } = useState('')
  const { second, setSecond } = useState('')

  

  return (
    <>
      <Clock hourHand={hour} minuteHand={minute} secondHand={second}/>
   </>
  );
}

export default App;