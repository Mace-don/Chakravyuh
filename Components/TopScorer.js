import React from 'react'
import Image from 'next/image'

const TopScorer = (props) => {
  const { name, position, score, imageUrl, className } = props
  return (
    <div
      className={`rounded-2xl bg-gradient-to-b px-16 py-8 text-center text-white ${className}`}
    >
      <div className="mx-auto h-36 w-36 -translate-y-1/2 overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          height="300"
          width="300"
          quality="100"
          className=""
        />
      </div>
      <div className="-translate-y-1/4">
        <h1 className="text-3xl font-semibold">#{position}</h1>
        <h1 className="text-xl">{name}</h1>
        <p className="pt-3 text-xl uppercase">Score</p>
        <p className="text-3xl font-bold">{score}</p>
      </div>
    </div>
  )
}

export default TopScorer
