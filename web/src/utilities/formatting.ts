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

export const capitalizeWord = wordToCapitalize => wordToCapitalize[0].toUpperCase() + wordToCapitalize.substr(1).toLowerCase()

export const convertKebabToUpper = wordToCapitalize => {
  if(wordToCapitalize.includes('-')){
    const kebabArray = wordToCapitalize.split('-')
    const reducedKebab = kebabArray.reduce((firstVal, secondVal) => {
      const capitalizedFirstWord = capitalizeWord(firstVal)
      const capitalizedSecondWord = capitalizeWord(secondVal)
      return `${capitalizedFirstWord} ${capitalizedSecondWord}`  
    })
    return reducedKebab
  } else {
    return capitalizeWord(wordToCapitalize)
  }
}