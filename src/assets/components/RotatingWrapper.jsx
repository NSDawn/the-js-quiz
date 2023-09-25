import { useState, useEffect } from "react"
import { useGlobal } from "../../AppContextProvider"

function RotatingWrapper(props) {
    
    const randTheta = () => {return (Math.floor(Math.random() * 8) -4)}
    const [theta, setTheta] = useState(props.rotation ?? randTheta())
    const [global, setGlobal] = useGlobal();

    useEffect(() => {
        setTheta(props.rotation ?? randTheta());
    }, [global.currQuestion])

    return (
        <div style={{transform: `rotate(${theta}deg)`}} >
            {props.children}
        </div>
    )
}

export default RotatingWrapper;

