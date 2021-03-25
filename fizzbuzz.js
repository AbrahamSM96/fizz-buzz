function fizzbuzz(num) {
  if (typeof num !== 'number') {
    return 'Error: the argument must be a number'
  }
  const divisible = (num, divisor) => num % divisor === 0

  if (num === 0) {
    return num
  }

  if (divisible(num, 3) && divisible(num, 5)) {
    return 'fizzbuzz'
  }
  if (divisible(num, 3)) {
    return 'fizz'
  }
  if (divisible(num, 5)) {
    return 'buzz'
  }
  return num
}

function print(num) {
  for (i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
}

print(16)

module.exports = fizzbuzz
