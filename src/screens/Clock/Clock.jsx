import React, { useEffect, useState } from 'react'
import './Clock.css'
import HourHand from '../../components/HourHand'
import MinuteHand from "../../components/MinuteHand"
import SecondHand from "../../components/SecondHand"

import { setSeconds } from "../../services/time.js"

import { ClockContainer } from "../../Styled/ClockContainer.js"
import { ClockFace } from '../../Styled/ClockFace.js'
import { ClockStyled } from '../../Styled/ClockStyled.js'



const Clock = () => {

  return (
    <>
      <ClockContainer>
        <div className="clock">
        {/* <ClockStyled> */}
          <ClockFace>
            <HourHand name="Hours" />
            <MinuteHand name="Minutes" />
            <SecondHand name="Seconds" />
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
          </ClockFace>
        {/* </ClockStyled> */}
        </div>
      </ClockContainer>
    </>
  )

}

export default Clock;