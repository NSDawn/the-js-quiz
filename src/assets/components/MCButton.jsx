import './MCButton.css'

function MCButton(props) {

    return (
        <>
            <button className="mcq-button"> {props.children} </button>
        </>
    )
}

export default MCButton;