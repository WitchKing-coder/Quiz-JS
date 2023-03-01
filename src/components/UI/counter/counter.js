import React from 'react';
import classes from './counter.module.css'

const Counter = ({count, setCount}) => {

    const changeCount = (e) => {
        console.log(e)
        if (e === "-" && count > 0)
            setCount(count -= 1)
        else if (e === "+")
            setCount(count += 1)
    }

    return (
        <div>
            <h2 className={classes.counter}>Counter:</h2>
            <h1 className={classes.result}>{count}</h1>
            <button className={classes.minus} value="-" onClick={e => changeCount(e.target.value)}> - Minus</button>
            <button className={classes.plus} value="+" onClick={e => changeCount(e.target.value)}>Plus +</button>
        </div>
    );
};

export default Counter;