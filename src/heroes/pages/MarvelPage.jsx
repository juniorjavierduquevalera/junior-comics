import React from 'react'
import HeroList from '../components/HeroList'

const MarvelPage = () => {
  return (
    <>
      <h1 className='pt-20 px-6 normal-case text-2xl font-bold'>Marvel Comics</h1>
      <hr />
      <HeroList publisher='Marvel Comics' />

    </>
  )
}

export default MarvelPage
