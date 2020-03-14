# tchatche-react

A react port of the [tchatche](https://www.npmjs.com/package/tchatche) conversational bot UI.

## Usage

```tsx
import React from 'react'
import Tchatche from 'tchatche-react'
import { BotMessage } from 'tchatche-react/dist/types'

const messages: BotMessage[] = [
  // ...
]

const onEnd = (
  ({ conversation, data }: { conversation: Message[]; data: object }) => {
    // ...
  }
)

export default <Tchatche messages={messages} onEnd={onEnd} pace={300} />
```

Find a more thorough explanation of the structure of `BotMessage` [here](https://www.npmjs.com/package/tchatche)