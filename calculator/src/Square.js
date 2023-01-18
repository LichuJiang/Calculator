import './Square.css'
function Square(props) {
    return (<button className="square" 
    onClick={() => {
        if (props.value === "AC") {
            props.setExp("");
            props.setRes(0);
        }
        else if (props.value === "=") {
            const requestOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(props.exp),
              };
            console.log(JSON.stringify(props.exp));
            fetch("http://localhost:8000/calculate", requestOptions)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.setRes(data.result)
            });
        }
        else {
            props.setExp(props.exp + props.value);
        }
        
    }}>{props.value}</button>);
}
export default Square;