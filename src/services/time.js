// export const setTime = () => {
//   const currentDate = new Date();
//   const secondsRatio = currentDate.getSeconds() / 60;
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

//   return hoursRatio, minutesRatio, secondsRatio
// }

export const setSeconds = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;

  return secondsRatio
}

export const setMinutes = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

  return minutesRatio
}

export const setHours = () => {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  return hoursRatio
}