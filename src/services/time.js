const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

export const setHour = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  return hoursRatio
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setMinute = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  
  return minutesRatio
  // setRotation(secondHand, secondsRatio)
  // setRotation(secondHand, minutesRatio)
  // setRoation(secondHand, hoursRatio)
}

export const setSecond = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  
  return secondsRatio
  
}

// setRotation = (element, rotationRatio) => {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }