import './MCButton.css'
import { useGlobal } from "../../AppContextProvider";


function MCButton(props) {

    return (
        <>
            <button className="mcq-button" onClick={props.onClick}> {props.children} </button>
        </>
    )
}

export default MCButton;