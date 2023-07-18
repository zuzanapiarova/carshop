// we are using typescript but we are not yet specifying what props can components get
//here create and export an interface - interface specifies how its specific structure should look like, what variables and values should it have, 
//for example create a CustomButtonProps interface 
import { MouseEventHandler } from 'react'

export interface CustomButtonProps{
    title: string;
    btnType: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title: string; 
    options: OptionProps[];  
}

export interface CarProps{
    city_mpg: number;
    type: string;
    combination_mpg:number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make:string;
    model:string;
    transmission:string;
    year:2012   
}

export interface FilterProps{
    manufacturer?: string; 
    model?: string;
    year?: number;
    fuel?: string;
    limit?: number;
}

export interface HomeProps {
    searchParams: FilterProps;
  }

  export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
  }