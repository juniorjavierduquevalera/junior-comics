import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import 'animate.css';

import { useForm } from '../hooks/useForm';
import  HeroCard  from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';


const SearchPage = () => {

  const Navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search);
  console.log({query});

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit =  (event) => {
    event.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    Navigate(`?q=${searchText.toLowerCase().trim()}`);

    console.log({searchText});
  }

  return (
    <>
      <h1 className='pt-20 normal-case text-2xl font-bold px-4'>Search</h1>
      <hr />
      <section className='flex px-4 lg:px-0'>
        <form className='flex flex-col lg:flex-row item-center w-screen gap-2 lg:px-0' onSubmit={ onSearchSubmit }>
          <div className='flex item-center gap-x-4 w-full lg:w-2/4 my-6'>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control w-full bg-white rounded-md text-base-100 font-semibold h-12"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
              <button className="btn btn-outline h-full">
                Search
              </button>
          </div>
          <div className='w-full lg:w-2/4 my-6'>
            <div className="alert alert-primary shadow-md animate__animated animate__fadeIn h-auto lg:h-12"
              style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
            </div>

            <div className="alert bg-red-800 shadow-md animate__animated animate__fadeIn h-auto lg:h-12"
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>
          </div>
        </form>
      </section>
      <figure className='mx-4 lg:mx-0'>
        {
          heroes.map( hero => (
          <HeroCard key={ hero.id } {...hero } />
          ))
        }
      </figure>
    </>
  )
}

export default SearchPage
