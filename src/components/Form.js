import React from 'react';

const Form = (props) => {
    const maxDay = () => {
        const timestamp = Date.now() + (14 * 24 * 3600 * 1000);
        const date = new Date(timestamp);
        const date2 = {
            year: date.getFullYear(),
            month: function () {
                const month = date.getMonth() + 1;
                if (month < 10) {
                    return `0${month}`;
                } else {
                    return month;
                }
            },
            day: function () {
                const day = date.getDate();
                if (day < 10) {
                    return `0${day}`;
                } else {
                    return day;
                }
            }
        }
        return `${date2.year}-${date2.month()}-${date2.day()}`;
    }

    return (
        <form>
            <input value={props.todo} onChange={props.change} name="todo" />
            <input type="checkbox" checked={props.important} onChange={props.change} name="important" />
            <label>Priorytet</label>
            <br />
            <label>Do kiedy zrobić:</label>
            <input type="date" value={props.date} onChange={props.change} name="date" min={props.date} max={maxDay()} />
            <br />
            <button onClick={props.newTask}>DODAJ</button>
        </form>
    )
}
export default Form;


