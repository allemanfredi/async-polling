const sleep = ms => 
  new Promise(resolve => 
    setTimeout(resolve, ms)
  )

const polling = (func, ms) => 
  new Promise(async (resolve, reject) => {
    const r = await func()
    if (
      !r
    ) {
      await sleep(ms)
      await polling(func, ms)
      resolve()
    } else {
      resolve()
    }
  })

module.exports = polling