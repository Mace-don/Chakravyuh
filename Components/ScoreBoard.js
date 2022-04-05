import React from 'react'
import TopScorer from './TopScorer'
import Scorer from './Scorer'

const ScoreBoard = () => {
  return (
    <div className="mx-auto h-screen w-11/12 max-w-screen-xl bg-gray-800">
      <h1 className="py-2 text-center text-white">Leaderboard</h1>
      <div className="my-8 flex justify-around">
        <TopScorer
          name="Divyam Kaushik"
          position="01"
          score="1255"
          imageUrl={'/profile.jpeg'}
          className="from-red-500 to-pink-500"
        />
        <TopScorer
          name="Divyam Kaushik"
          position="02"
          score="1055"
          imageUrl={'/profile2.jpeg'}
          className="from-orange-400 to-orange-600"
        />
        <TopScorer
          name="Divyam Kaushik"
          position="03"
          score="946"
          imageUrl={'/profile2.jpeg'}
          className="from-blue-500 to-purple-500"
        />
      </div>

      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
      <Scorer
        name="Divyam Kaushik"
        score="900"
        position="04"
        imageUrl={'/profile2.jpeg'}
        className=""
      />
    </div>
  )
}

export default ScoreBoard
