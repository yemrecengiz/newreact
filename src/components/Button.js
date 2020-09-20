import React from 'react'
import './Button.css'


export const Button = ({
    children,
    
}) => {
    
    return (
        <button className="x-button" >
            {children}
        </button>
    )
}