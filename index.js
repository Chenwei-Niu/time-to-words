// expecting time to be a string in the format like '8:15' or '12:30'
const hourMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four"
};

const minutesMap = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half"
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === "12:00") {
    return 'midday';
  }
  const splittedArray = time.split(':');
  let hours = +splittedArray[0];
  let minutes = +splittedArray[1];

  if (minutes > 30) {
    if (hours === 23) {
      hours = 0;
    } else {
      hours++;
    }

    if (hours > 12){
      hours-=12;
    }

    return minutesMap[60-minutes] + ' to ' + hourMap[hours];

  } else if (minutes === 0){
    if (hours > 12){
      hours-=12;
    }
    return hourMap[hours] + " o'clock";
  } else {
    if (hours > 12){
      hours-=12;
    }
    return minutesMap[minutes] + ' past ' + hourMap[hours];
  }

}

module.exports = { convertTimeToWords };