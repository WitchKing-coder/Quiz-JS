import React from 'react';
import classes from './game.module.css'

const Game = ({questions, progress, setProgress, progressBar, setProgressBar, setCorrectAnswers, correctAnswers}) => {

    const setStage = (answer) => {
        if (answer == questions[progress].correct)
            setCorrectAnswers((correctAnswers) => correctAnswers + 1)
        if (progress < questions.length - 1){
            setProgress((progress) => progress + 1)
        }
        setProgressBar((progressBar) => progressBar + 1)
    }

    return (
        <div className={classes.questionsForm}>
            <progress max={questions.length} value={progressBar}></progress>
            <h1 className={classes.question}>{questions[progress].title}</h1>
            <div className={classes.answers}>
                <button onClick={e => setStage(e.target.value)} value={1}>{questions[progress].answers[0]}</button>
                <button onClick={e => setStage(e.target.value)} value={2}>{questions[progress].answers[1]}</button>
                <button onClick={e => setStage(e.target.value)} value={3}>{questions[progress].answers[2]}</button>
            </div>

        </div>
    );
};

export default Game;