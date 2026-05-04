import React from 'react'
import buttonicon from '../assets/button-icon.png'


const ButtonIcon = ({ text }) => {
    return (
        <button className='text-primary text-sm flex gap-1 items-center'>
            {text}
            <img src={buttonicon} alt="button" />
        </button>
    )
}

export default ButtonIcon