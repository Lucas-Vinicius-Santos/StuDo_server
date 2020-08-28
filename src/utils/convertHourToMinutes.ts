
export default function convertHourToMinutes(number: string) {
  
  const [hour, minutes] = number.split(':').map(Number);

  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}
