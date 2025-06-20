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
    "secondary" : "bg-violet-300 text-violet-700"
}



export const Button = (props : ButtonProps) =>{

    return <button className={variantStyles[props.variant]}>{props.text}</button>

}

{/* <Button variant="primary" size="sm" text="asas" onClick={()=>{}} /> */}