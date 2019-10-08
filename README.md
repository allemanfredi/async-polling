# :arrows_clockwise: light-async-polling

Super light javascript function for making polling

## :fire: Usage:

``` js

  const polling = require('polling')

  await polling(async () => {
    const r = yourFunction()
    if (
      r
    ) {
      return true //stop polling
    } else {
      return false //continue polling
    }

  }, 2000) //milliseconds
```

## :video_game: Run examples:

``` 
  npm run examples
``` 