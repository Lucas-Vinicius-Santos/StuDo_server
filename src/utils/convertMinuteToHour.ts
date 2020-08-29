
export default function convertMinuteToHour(stringNumber: string) {

  const number = parseInt(stringNumber)

  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  
  var voceAchouUmEasterEgg

  minutes 
    ? voceAchouUmEasterEgg = `${hours}:${minutes}`
    : voceAchouUmEasterEgg = `${hours}h`

  return voceAchouUmEasterEgg
}
