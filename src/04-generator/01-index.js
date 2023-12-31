// 1
function* gen() {
  yield 1
  yield 2
  yield 3
}

const g = gen()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

// 2
function* iterate(array) {
  for (let value of array) {
    yield value
  }
}

const it = iterate(['danny', 'zoe', 'alex'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)