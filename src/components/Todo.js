import Item from './Item';

const Todo = (props) => {
    const tasks = [...props.tasks];
    const dones = [...props.dones];
    tasks.sort((el1, el2) => {
        if (el1.task > el2.task) {
            return 1;
        }
        if (el1.task === el2.task) {
            return 0;
        }
        return -1;
    })
    const items = tasks.map((el) => {
        return <Item key={el.id} task={el.task} important={el.important} date={el.date} delete={() => { props.delete(el.id) }} done={() => { props.done(el.id) }} todo={true} />
    })
    const displayDones = dones.reverse();
    if (displayDones.length > 5) {
        displayDones.length = 5;
    }
    const items2 = displayDones.map((el) => {
        return <Item key={el.id} task={el.task} date={el.done} todo={false} important={el.important} />
    })
    if (props.todo) {
        return (
            <>
                <p>Zadania do wykonania ({tasks.length})</p>
                {tasks.length ? <ul>{items}</ul> : null}
            </>
        )
    }
    return (
        <>
            <p>Wykonane zadania</p>
            {dones.length ? <ul>{items2}</ul> : null}
        </>
    )
}
export default Todo;
