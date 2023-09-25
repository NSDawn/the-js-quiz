import './MCButton.css'
import { useGlobal } from "../../AppContextProvider";
import { useState, useEffect } from 'react';


function MCButton(props) { /* onClick, isCorrect */
    
    const [isAnimating, setIsAnimating] = useState(false);
    function doAnimate(milliseconds) {
        setIsAnimating(true);
        setTimeout (() => {setIsAnimating(false)}, milliseconds);
    }
    // go ahead and reset animation immediately to normal if the children change, change later if animation-correct added;
    useEffect(() => {
        setIsAnimating(false);
    }, [props.children])

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