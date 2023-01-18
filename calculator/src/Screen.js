import './Screen.css'
function Screen(props) {
    return(
        <div className="screen">
            <div className="screen-row1">Exp:{props.exp}</div>
            <div className="screen-row2">Res:{props.result}</div>
        </div>
    )
}

export default Screen;