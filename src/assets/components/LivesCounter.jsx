import { useState, useEffect } from "react";
import { useGlobal } from "../../AppContextProvider";
import S from "../data/en.json"
import "./LivesCounter.css";

function LivesCounter(props) {

    const [global, setGlobal] = useGlobal();
    
    const [isAnimating, setIsAnimating] = useState(false);
    function doAnimate(milliseconds) {
        setIsAnimating(true);
        setTimeout (() => {setIsAnimating(false)}, milliseconds);
    }
    // go ahead and reset animation immediately to normal if the children change, change later if animation-correct added;
    useEffect(() => {
        doAnimate(500);
    }, [global.lives])



    return (
        <>
            <h3 className={isAnimating? ( global.lives === global.MAX_LIVES ? "lives-counter animate-reset" : "lives-counter animate-loss"): "lives-counter"}>
                {S.titles.lives} {global.lives}
            </h3>
        </>
    )
}

export default LivesCounter;