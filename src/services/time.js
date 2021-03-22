const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

export const setHour = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  const hourRatio = (minuteRatio + date.getHours()) / 12;

  return hourRatio
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setMinute = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() / 60;
  const minuteRatio = (secondRatio + date.getMinutes()) / 60;
  
  return minuteRatio
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setSecond = () => {
  const date = new Date();
  const secondRatio = date.getSeconds() /60;
  
  return secondRatio
  
}

export const angleClock = (hour, minutes) => {
  const minuteAngle = minutes * 6
  const hourAngle = (hour * 30) + minutes * 0.5
  const angle = Math.abs(hourAngle - minuteAngle)
  return Math.min(angle, 360 - angle)
}
// setRotation = (element, rotationRatio) => {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }