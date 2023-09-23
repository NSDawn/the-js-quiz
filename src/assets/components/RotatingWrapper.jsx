function RotatingWrapper(props) {
    
    const theta = props.rotation ?? (Math.floor(Math.random() * 8) -4)
    
    return (
        <div style={{transform: `rotate(${theta}deg)`}} >
            {props.children}
        </div>
    )
}

export default RotatingWrapper;