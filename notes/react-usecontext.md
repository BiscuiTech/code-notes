---
title: useContext
tags:
  - react
emoji: 🎣
---

- Docs: http://reactjs.org/docs/hooks-reference.html#usecontext
- TS/React docs: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#context

## Setup

This example uses the [`use-timer`](https://github.com/thibaultboursier/use-timer) hook to create a provider that passes a timer and it's methods to any consumers.

```tsx
import React, { createContext } from 'react'
import { useTimer } from 'use-timer'

export interface TimerContextInterface {
  time: string
  start: () => void
  pause: () => void
  reset: () => void
  isRunning: boolean
}

export const TimerContext = createContext<TimerContextInterface>({
  time: '',
  start: () => {},
  pause: () => {},
  reset: () => {},
  isRunning: false,
})

export const TimerProvider = ({ children }) => {
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 5000,
    timerType: 'DECREMENTAL',
    step: 1000,
    },
  })

  return (
    <TimerContext.Provider value={{ time, start, pause, reset, isRunning }}>
      {children({ time, start, pause, reset, isRunning })}
    </TimerContext.Provider>
  )
}
```

## Usage

```tsx
import React, { useContext } from "react";

const MyComponent = () => {
  const { time } = useContext(TimerContext);
  return <div>Timer expires in {time}</div>;
};
```

```tsx
<TimerProvider>
  <MyComponent />
</TimerProvider>

// or
<TimerProvider>
  {({time})=> (
    <div>Timer expires in {time}</div>
  )}
</TimerProvider>
```
