const getSleepHours = day => {

switch (day) {
  case 'monday':
  return 8;
  break;

  case 'tuesday':
  return 6;
  break;

  case 'wednesday':
  return 5;
  break;

  case 'thursday':
  return 7;
  break;
  case 'friday':
  return 4;
  break;
  case 'saturday':
  return 4;
  break;
  case 'sunday':
  return 7;
  break;

  default:
  console.log('Only days of the week accepted!');
}

};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


const getIdealSleepHours = () => {
idealHours = 8;
return idealHours * 7

}

const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours) {
  console.log('Well done you sleep perfectly!');
}
else if
  (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - actualSleepHours) + ' more than needed!');
  }
  else if(actualSleepHours < idealSleepHours){
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' under your ideal sleep hours. You should get more rest!');
  }
   else {
    console.log('Error with code');
  }
}

console.log(getActualSleepHours());
calculateSleepDebt();
