import React, { useState, useEffect } from "react"
import ClockNumber from "../../Components/ClockNumber.jsx"
import SecondHand from "../../Components/SecondHand.jsx"
import MinuteHand from "../../Components/MinuteHand.jsx"
import HourHand from "../../Components/HourHand.jsx"
import { setHour, setMinute, setSecond } from "../../services/time.js"
import "./Clock.css"

const Clock = () => {
  const [hourRatio, setHourRatio] = useState(setHour())
  const [minuteRatio, setMinuteRatio] = useState(setMinute())
  const [secondRatio, setSecondRatio] = useState(setSecond())

  useEffect(() => {
    const interval = setInterval(() => {
      setHourRatio(setHour())
      setMinuteRatio(setMinute())
      setSecondRatio(setSecond())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="clock-edge">
        <div className="clock">
          <div className="clock-face">
            <div
              className="hand hour"
              style={{
                transform: `translate(-50%) rotate(${hourRatio * 360}deg)`,
              }}
            >
              {/* <HourHand/> */}
            </div>
            <div
              className="hand minute"
              style={{
                transform: `translate(-50%) rotate(${minuteRatio * 360}deg)`,
              }}
            >
              {/* <MinuteHand/> */}
            </div>
            <div
              className="hand second"
              style={{
                transform: `translate(-50%) rotate(${secondRatio * 360}deg)`,
              }}
            >
              {/* <SecondHand /> */}
            </div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clock