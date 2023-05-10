import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(curCount => curCount + 1);
    }
    const decrement = () => {
        setCount(curCount => curCount - 1);
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        </div>
    );
};

export default Counter;