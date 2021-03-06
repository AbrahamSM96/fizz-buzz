function fizzbuzz(num) {
  if (typeof num !== 'number') {
    return 'Error: the argument must be a number'
  }
  const divisible = (num, divisor) => num % divisor === 0

  if (num === 0) {
    return num
  }

  if (divisible(num, 3) && divisible(num, 5)) {
    return 'FizzBuzz'
  }
  if (divisible(num, 3)) {
    return 'Fizz'
  }
  if (divisible(num, 5)) {
    return 'Buzz'
  }
  return num
}

module.exports = fizzbuzz
