// we are using typescript but we are not yet specifying what props can components get
//here create and export an interface - interface specifies how its specific structure should look like, what variables and values should it have, 
//for example create a CustomButtonProps interface 
import { MouseEventHandler } from 'react'

export interface CustomButtonProps{
    title: string;
    btnType: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}