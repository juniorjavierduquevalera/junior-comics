import React from 'react'
import HeroList from '../components/HeroList'

const DcPage = () => {
  return (
    <> 
      <h1 className='pt-20 px-6 normal-case text-2xl font-bold'>DC Comics</h1>
      <hr />
      <HeroList publisher='DC Comics' />
    </>
  )
}

export default DcPage
