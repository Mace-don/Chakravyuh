import React from 'react'
import Image from 'next/image'

const Scorer = (props) => {
  const { name, score, position, className, imageUrl } = props
  return (
    <div
      className={`m-3 mx-auto flex w-11/12 justify-around rounded-2xl bg-gray-700 text-white ${className}`}
    >
      <Image src={imageUrl} width="50" height="50" quality="50" />
      <p className="my-auto">{name}</p>
      <p className="my-auto rounded-2xl bg-blue-900 py-1 px-4">{score}</p>
      <div className="bg-rose-700 px-2 pt-2.5">
        <p className="m-auto">#{position}</p>
      </div>
    </div>
  )
}

export default Scorer
