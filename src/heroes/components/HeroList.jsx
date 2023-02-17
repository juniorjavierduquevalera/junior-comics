import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher( publisher );
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]);

    return (
        <ul className="flex flex-wrap py-4 lg:py-6 gap-4 md:gap-8 justify-center">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id }
                    {...hero}
                    />
                ))
            }
        </ul>
    )
}

export default HeroList