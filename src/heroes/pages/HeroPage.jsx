import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import 'animate.css';

const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const hero = getHeroById( id );
  // console.log(hero)

  const hero = useMemo( () => getHeroById( id ), [ id ]);

  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-start pt-20 gap-x-6">
      <img
        src={ `../public/heroes/${ id }.jpg` }
        alt={ hero.superhero }
        className="img-thumbnail animate__animated animate__fadeInLeft"
      />

      <section className='p-6 lg:p-0'>
        <h3 className='normal-case text-2xl font-bold mb-4'>{ hero.superhero }</h3>
        <ul>
          <li><b>Alter ego:</b> { hero.alter_ego } </li>
          <li><b>Publisher:</b> { hero.publisher } </li>
          <li><b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h4 className="mt-3"><b>Characters</b></h4>
        <p>{ hero.characters }</p>
        <div className='flex justify-center my-10'>
          <button
            className="btn btn-outline"
            onClick={ onNavigateBack }
          >
          Regresar
          </button>
        </div>
      </section>
    </div>
  )
}

export default HeroPage
