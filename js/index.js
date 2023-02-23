// get Bolatito's class group
let classGroup = 'Arts'

// check which subjects Bolatito will take based on her class group
let subjects
if (classGroup === 'Science') {
  subjects = [
    'Physics',
    'Chemistry',
    'Biology',
    'Technical Drawing',
    'English',
    'Mathematics',
  ]
} else if (classGroup === 'Social Science') {
  subjects = [
    'Accounting',
    'Commerce',
    'Marketing',
    'Geography',
    'English',
    'Mathematics',
  ]
} else if (classGroup === 'Arts') {
  subjects = [
    'Government',
    'Economics',
    'Literature',
    'History',
    'English',
    'Mathematics',
  ]
} else {
  subjects = ['English', 'Mathematics']
}

console.log(subjects)

///4
for (let i = 1; i < 20; i += 7) {
  console.log(i)
}

//output is 1, 8, 15

//5
const num = parseInt('40 ')

if (num <= 0) {
  console.log('Invalid input. Please enter a positive number.')
} else {
  const pwr = Math.pow(2, Math.floor(Math.log2(num)))
  if (num - pwr / 2 <= pwr - num) {
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`)
  } else {
    console.log(`The number ${pwr * 2} is the power of 2 nearest to ${num}.`)
  }
}

function nearestPowerOfTwo(num) {
  let pwr = 1
  while (pwr < num) {
    pwr *= 2
  }
  if (pwr - num > num - pwr / 2) {
    pwr /= 2
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`)
}

nearestPowerOfTwo(40) // The number 32 is the power of 2 nearest to 40.
nearestPowerOfTwo(50) // The number 64 is the power of 2 nearest to 50.
nearestPowerOfTwo(3) // The number 2 is the power of 2 nearest to 3.