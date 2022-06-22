function getArrMaxRepetData(arr) {
  const newObj = {}
  arr.forEach((item) => {
    if (newObj[item]) {
      newObj[item]++
    } else {
      newObj[item] = 1
    }
  })
  let num = 0
  let obj = {}
  for (let i in newObj) {
    if (newObj[i] > num) {
      num = newObj[i]
      obj[i] = newObj[i]
    }
  }
  return obj
}
getArrMaxRepetData(arr)

let arr = ['Bob', 'Bob', 'Alice', 'Tiff', 'Alice', 'Bruce', 'Alice']
function getArrMaxRepetData(arr) {
  let originalLen = arr.length + 1
  let realLen = 0
  let current = ''
  arr.forEach((item) => {
    let len = new Set(arr.concat(item)).size
    console.log(len)
    if (originalLen !== len) {
      let total = originalLen - len
      if (realLen < total) {
        current = item
        realLen = total
      }
    }
  })
  const newObj = {
    [current]: realLen,
  }
  return newObj
}
getArrMaxRepetData(arr)

getArrMaxRepetData(['Bruce', 'Bob', 'Alice', 'Alice', 'Tiff', 'Alice'])
function getArrMaxRepetData(arr) {
  let originalLen = arr.length
  let currentName = ''
  let currentCount = 0
  arr.forEach((item) => {
    let data = arr.filter((item2) => item2 !== item)
    let loss = originalLen - data.length
    if (loss > 0) {
      if (loss > currentCount) {
        currentName = item
        currentCount = loss
      }
    }
  })
  return {
    [currentName]: currentCount,
  }
}
getArrMaxRepetData(arr)
