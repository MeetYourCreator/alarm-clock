const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

export const setHour = () => {
  const date = new Date();
  const hours = date.getHours();

  return hours
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setMinute = () => {
  const date = new Date();
  const minutes = date.getMinutes()
  
  return minutes
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setSecond = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  
  return seconds
  
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