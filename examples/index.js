const polling = require('../index')

const inc = n =>
  n + 1

const main = async () => {
  let n = 0
  await polling(() => {
    n = inc(n)
    console.log(n)
    if (
      n === 10
    ) {
      console.log("Polling finished correctly after 10 inc after 10 seconds")
      return true
    } else {
      return false
    }
  }, 1000)
}

main()