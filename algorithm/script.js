const array = [40, 100, 1, 6, 35, 10]
function sumArray(mang) {
  let sum = 0
  for (let i = 0; i < mang.length - 1; i++) {
    sum += mang[i]
  }

  return sum
}

const arrayMin = array.sort(function (a, b) {
  return a - b
})

document.getElementById('arrayMin').innerHTML = arrayMin
document.getElementById('sumMin').innerHTML = sumArray(arrayMin)

const arrayMax = array.sort(function (a, b) {
  return b - a
})

document.getElementById('arrayMax').innerHTML = arrayMax
document.getElementById('sumMax').innerHTML = sumArray(arrayMax)
