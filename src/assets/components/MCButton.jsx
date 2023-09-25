import './MCButton.css'
import { useGlobal } from "../../AppContextProvider";
import { useState } from 'react';


function MCButton(props) { /* onClick, isCorrect */
    
    const [isAnimating, setIsAnimating] = useState(false);
    function doAnimate(milliseconds) {
        setIsAnimating(true);
        setTimeout (() => {setIsAnimating(false)}, milliseconds);
    }

    return (
        <>
            <button 
                onClick={() => { doAnimate(1000); props.onClick()}}
                className= {isAnimating ? (props.isCorrect ? "mcq-button animate-correct" : "mcq-button animate-incorrect") : 'mcq-button'}
                > 
                    {props.children} 
            </button>
        </>
    )
}

export default MCButton;