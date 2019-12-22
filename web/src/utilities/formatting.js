const convertSecondsToMinutes = seconds => {
  let formattedMinutes
  let formattedSeconds
  const minutes = Math.floor( seconds / 60 )
  const remainingSeconds = seconds % 60
  if(minutes < 10){
    formattedMinutes = `0${minutes}`
  } else {
    formattedMinutes = minutes
  }
  if(remainingSeconds < 10){
    formattedSeconds = `0${remainingSeconds}`
  } else {
    formattedSeconds = remainingSeconds
  }
  return `${formattedMinutes}:${formattedSeconds}`
}

export const formatSeconds = seconds => {
  return convertSecondsToMinutes(seconds)
}