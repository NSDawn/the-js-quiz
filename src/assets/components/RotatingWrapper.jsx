function RotatingWrapper(props) {
    
    const theta = props.rotation ?? (Math.floor(Math.random() * 14) -7)
    
    return (
        <div style={{transform: `rotate(${theta}deg)`}} >
            {props.children}
        </div>
    )
}

export default RotatingWrapper;