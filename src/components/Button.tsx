import type { ReactElement } from "react";


type variants = "primary" | "secondary" ;


interface ButtonProps {
    variant : variants;
    size : "sm" | "md" | "lg";
    text : string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick : ()=> void ;
}


const variantStyles = {
    "primary" : "bg-violet-600 text-white ",
    "secondary" : "bg-violet-200 text-violet-700"
}

const defaultStyles = "flex rounded-md py-1 px-4 m-2 "

const varientSize = {
    "sm" : "p-2 text-sm",
    "md" : "p-4 text-md",
    "lg" : "p-6 text-lg"
}


export const Button = (props : ButtonProps) =>{

    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${varientSize[props.size]}`}>{props.startIcon ? <div className="pr-1">{props.startIcon}</div> : null} {props.text} {props.endIcon ? <div className="pr-1">{props.endIcon}</div> : null}</button>

}
