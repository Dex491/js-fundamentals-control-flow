// Use conditional statements to set answerOne to true if STR_ONE is 'Hello'
const STR_ONE = 'Hello'

let answerOne
if ( STR_ONE === 'Hello') {
  answerOne = true
}

// Use conditional statements to set answerTwo to true if STR_TWO is not 'Hello'
const STR_TWO = 'Goodbye'

let answerTwo
if (STR_TWO !== 'Hello') {
  answerTwo = true
}

// Use conditional statements to set answerThree to true if STR_THREE is
// longer than STR_FOUR
const STR_THREE = 'Hello'
const STR_FOUR = 'Good'

let answerThree
if(STR_THREE.length > STR_FOUR.length) {
  answerThree = true
}

// Use a combination of a loop and conditional statements to set answerFour
// to false if STR_FIVE has an odd number of vowels, or true if it has an
// even number
const STR_FIVE = 'Alex'
let answerFour

if (!STR_FIVE.length % 2 === 0) {
  answerFour = true
}else if (STR_FIVE.length % 2 === 0) {
  answerFour = false
}



// Use a combination of a loop and conditional statements to set answerFive
// to false if STR_SIX has an odd number of vowels, or true if it has an
// even number
const STR_SIX = 'Joanna'
let answerFive

const Vowels =  STR_SIX.match(/[aeiou]/gi);
const VowelCount = Vowels.length

if (VowelCount % 2 === 0) {
  answerFive = true
}else if (!VowelCount % 2 === 0) {
  answerFive = false
}

// Use conditional statements to set answerSix to the middle character of STR_SEVEN
// if STR_SEVEN has an odd number of characters
const STR_SEVEN = 'Kayla'

let answerSix
if(STR_SEVEN.length %2 !== 0 ) {
  answerSix = STR_SEVEN.slice(2, 3)
}

// Use conditional statements to set answerSeven to the middle two characters of
// STR_EIGHT if STR_EIGHT has an even number of characters
const STR_EIGHT = 'Alex'

let answerSeven
if(STR_EIGHT.length %2 === 0) {
  answerSeven = STR_EIGHT.slice(1, 3)
}

// Set answerEight to the appropriate season based on what MONTH is set to
//
// For example, if MONTH is 'January', answerEight should be 'Winter'
//
// The below table shows the season for each range of months:
//
// March to May: Spring
// June to August: Summer
// September to November: Autumn
// December to February: Winter
//
// Run the test after changing the value of MONTH to check you've covered every month correctly
const MONTH = 'July'

let answerEight
if (['December', 'January', 'February'].includes(MONTH)) {
  answerEight = 'Winter'
} else if (['September', 'October', 'November'].includes(MONTH)) {
  answerEight = 'Autumn'
} else if (['June', 'July', 'August'].includes(MONTH)) {
  answerEight = 'Summer'
} else if (['March', 'April', 'May'].includes(MONTH)) {
  answerEight = 'Spring'
}

module.exports = {
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
  answerSix,
  answerSeven,
  MONTH,
  answerEight
}