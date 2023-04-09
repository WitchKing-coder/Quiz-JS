import './App.css';
import {useState} from "react";
import Game from "./components/UI/game/game";
import Result from "./components/UI/result/result";

function App() {

    const questions = [
        {title: "React is...",
            answers: ["App", "framework", "library"],
            correct: 3,
        },
        {title: "Jsx is...",
            answers: ["Extension for js", "Programming language", "Function"],
            correct: 1,
        },
        {title: "Css preprocessors is...",
            answers: ["extension for css", "framework", "library"],
            correct: 1,
        },
        {title: "HTML has...",
            answers: ["names", "classes", "intelligence"],
            correct: 2,
        },
        {title: "Callback functions are...",
            answers: ["functions like an argument", "nameless functions", "*correct answer*"],
            correct: 1,
        }
    ]

    const restart = () => {
        setProgress(0)
        setProgressBar(0)
        setCorrectAnswers(0)
    }

    const [progress, setProgress] = useState(0)
    const [progressBar, setProgressBar] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)

  return (
    <div className="App">
        { progressBar === questions.length ?
            <Result correctAnswers={correctAnswers} maxCorrect={questions.length} restart={restart}/>
            : <Game
                questions={questions}
                progressBar={progressBar}
                setProgressBar={setProgressBar}
                progress={progress}
                setProgress={setProgress}
                setCorrectAnswers={setCorrectAnswers}
                correctAnswers={correctAnswers}
            />
        }


    </div>
  );
}

export default App;
