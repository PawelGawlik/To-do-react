const Item = (props) => {
    if (props.todo) {
        return (
            <li>
                <span style={props.important ? { color: "red" } : {}} >{props.task}- {props.date}</span>
                <button onClick={props.done} >Zrobione</button>
                <button onClick={props.delete} >X</button>
            </li>
        )
    }
    return (
        <li>
            <span style={props.important ? { color: "red" } : {}} >{props.task}</span>
            <br />
            {`Zadanie wykonane dnia ${props.date}`}
        </li>
    )
}

export default Item;