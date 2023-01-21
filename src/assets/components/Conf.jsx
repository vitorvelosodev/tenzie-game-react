import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Conf() {
  // const { width, height } = useWindowSize()
  return (
    <Confetti
      gravity={0.8}
    />
  )
}