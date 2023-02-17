import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';

const HeroCard = (
    {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters ,
    }) => {
        const heroImageUrl = `../public/heroes/${ id }.jpg`;

return (
    <>
        <li className="animate__animated animate__fadeIn list-none shadow-md w-full sm:w-64">
            <figure className="w-full sm:w-64 flex justify-center">
                <img src={ heroImageUrl } className="object-cover object-center" alt={ superhero } />
            </figure>
            <div className="card-body mx-4 sm:mx-0">
                <h5 className="normal-case text-2xl font-bold">{ superhero }</h5>
                <div className=' w-full md:w-48'>
                    <p>{ alter_ego }</p>
                    {
                        ( alter_ego !== characters) && (<p> { characters } </p>)
                    }
                </div>
                <div>
                    <p className="">
                        <small>{ first_appearance }</small>
                    </p>
                </div>
                <Link className='font-bold' to={`/hero/${ id }`}>
                    Más..
                </Link>
            </div>
            <hr/>
        </li>
    </>
  )
}

export default HeroCard