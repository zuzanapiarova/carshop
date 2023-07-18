"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useRouter} from 'next/navigation'

const SearchButton = ({otherClasses}: {otherClasses : string}) => {
  return(
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={'/magnifying-glass.svg'} alt='magnifying glass' width={40} height={40} className='object-contain'/>
  </button>)
}

const Searchbar = () => {

  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '') return alert('Please fill in the search bar to browse cars.');

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams= new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathName)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className='searchbar__item'>
          <Image src='/model-icon.png' width={25} height={25} className='absolute h-[20px] w-[20px] ml-4' alt='car-model'/>
          <input type='text' name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='e.g. Tiguan' className='searchbar__input'></input>
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default Searchbar
