import React from 'react';
import classes from "./result.module.css";

const Result = ({correctAnswers, maxCorrect, restart}) => {
    return (
        <div>
            <h1>YUUPPIIIIEEEEE</h1>
            <p>I've answered correct on {correctAnswers} of {maxCorrect}</p>
            <p>Congratulations!</p>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

export default Result;