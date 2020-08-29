
export default function setColorToActivity(day: string) {

  const [stringJustDay, stringJustMonth] = day.split('/');
  const date = new Date();
  const actualDay = date.getDate()

  const justDay = parseInt(stringJustDay)
  const justMonth = parseInt(stringJustMonth) - 1

  const arrayNumberOfDaysInMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ]

  if ( justMonth == date.getMonth() ) {

    if ( actualDay == justDay ) {
      return 'red'
  
    }
    if ( (actualDay + 1) == justDay ) { 
      return 'orange'
  
    }
    if ( (actualDay + 2) == justDay ) {
      return 'green'
  
    } 

  } else if ( justMonth > date.getMonth() ) {

    if ( (actualDay + 1) == (justDay + arrayNumberOfDaysInMonth[date.getMonth()]) ) {
      return 'orange'
    }

    if ( (actualDay + 2) == (justDay + arrayNumberOfDaysInMonth[date.getMonth()]) ) {
      return 'green'
    }

  }

  return 'blue'
}
