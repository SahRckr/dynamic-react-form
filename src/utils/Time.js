export const formatDateTime = date => {
  // DD/MM/YY hh:mm:ss
  let day, month, year, hours, minutes, seconds
  day = date.getDate()
  month = date.getMonth()
  year = date.getFullYear()
  year =
    year > 99 ? year % Math.pow(10, year.toString().split('').length - 1) : year
  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()
  return (
    [day, month + 1, year].map(leftPad).join('/') +
    ' ' +
    [hours, minutes, seconds].map(leftPad).join(':')
  )
}

export const leftPad = number => {
  return number < 10 ? '0' + number : number
}
