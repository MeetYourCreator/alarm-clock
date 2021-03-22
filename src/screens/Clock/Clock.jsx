import React from 'react'
import ClockNumber from "../../Components/ClockNumber.jsx"
import SecondHand from "../../Components/SecondHand.jsx"
import MinuteHand from "../../Components/MinuteHand.jsx"
import HourHand from "../../Components/HourHand.jsx"
import {setTime} from '../../services/time.js'
import './Clock.css'

const Clock = ({}) => {

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <div className="clock-face">
            <div className="hand hour"><HourHand /></div>
            <div className="hand minute"><MinuteHand /></div>
            <div className="hand second"><SecondHand /></div>
            <div className="number number1"><ClockNumber number = '1'/></div>
            <div className="number number2"><ClockNumber number = '2' /></div>
            <div className="number number3"><ClockNumber number = '3' /></div>
            <div className="number number4"><ClockNumber number = '4' /></div>
            <div className="number number5"><ClockNumber number = '5' /></div>
            <div className="number number6"><ClockNumber number = '6' /></div>
            <div className="number number7"><ClockNumber number = '7' /></div>
            <div className="number number8"><ClockNumber number = '8' /></div>
            <div className="number number9"><ClockNumber number = '9' /></div>
            <div className="number number10"><ClockNumber number = '10' /></div>
            <div className="number number11"><ClockNumber number = '11' /></div>
            <div className="number number12"><ClockNumber number = '12' /></div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Clock;