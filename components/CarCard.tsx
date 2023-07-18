"use client";

import { CarProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import CustomButton from './CustomButton'
import CarDetail from './CarDetail';

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({car} :  CarCardProps) => {

    const { city_mpg, combination_mpg, drive, fuel_type, highway_mpg, make, model, transmission, year, type } = car;

    const carRent = calculateCarRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='car-card group'>
            <div className="car-card__content">
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] front-semibold'>
                    $
                </span>
                {carRent}
                <span className='self-end text-[14px] front-medium'>
                    /day
                </span> 
            </p>

            <div className='relative w-full h-40 margin-3 object-contain'>
                <Image src={ generateCarImageUrl(car)} alt='car model' fill priority className='object-contain'/>
            </div>

            <div className='relative flex w-full mt-2'>
                <div className="flex group-hover:invisible w-full justify-between text-gray">

                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src='/steering-wheel.svg' height={20} width={20} alt='steering wheel icon'/>
                        <p className='text-[14px]'>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src='/tire.svg' height={20} width={20} alt='tire icon'/>
                        <p className='text-[14px]'>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 items-center">
                        <Image src='/gas.svg' height={20} width={20} alt='gas icon'/>
                        <p className='text-[14px]'>
                            {city_mpg} MPG
                        </p>
                    </div>

                </div>

                <div className="car-card__btn-container">
                    <CustomButton btnType='button' title='View more' 
                                  containerStyles='w-full py-[16px] rounded-full bg-primary-blue' 
                                  textStyles='text-white text-[14px] leading-[17px] font-bold'
                                  rightIcon = '/right-arrow.svg' 
                                  handleClick={() => setIsOpen(true)}/>
                </div>
            </div>

            < CarDetail isOpen={isOpen} closeModal={() => {setIsOpen(false)}} car={car}/>
        </div>
    )
}

export default CarCard