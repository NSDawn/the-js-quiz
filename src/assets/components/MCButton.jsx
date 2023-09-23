import './MCButton.css'

function MCButton(props) {

    return (
        <>
            <button onClick={props.onclick}> {props.text} </button>
        </>
    )
}

export default MCButton;