import React from 'react';
import { Arrayquestions } from './ArrayQuestions';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Questions() {
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [resColor, setResColor] = useState({
        bg: '',
        cl: '',
    });

    function handleRes(isCorrect) {
        if (isCorrect) {
            setScore(score + 1);
        }
        setResColor({
            bg: 'green',
            cl: 'white',
        });
        const NextQuestion = currentQuestion + 1;

        setTimeout(() => {
            setResColor({
                bg: '',
                cl: '',
            });

            if (NextQuestion < Arrayquestions.length) {
                setCurrentQuestion(NextQuestion);
            } else {
                setShowScore(true);
            }
        }, 1500);
    }

    return (
        <div className="Questions">
            {showScore ? (
                <div className="Recomeçar">
                    <h1>
                        Você conseguiu acertar
                        <span className="point">{score}</span>!
                    </h1>
                    <Link to="/">
                        <button>Recomeçar</button>
                    </Link>
                </div>
            ) : (
                <section>
                    <div>
                        <span className="qts">
                            Questão {currentQuestion + 1} /{' '}
                            {Arrayquestions.length}
                        </span>
                    </div>
                    <h1>{Arrayquestions[currentQuestion].question}</h1>
                    <div className="btns">
                        {Arrayquestions[currentQuestion].answers.map(
                            (answers, index) => (
                                <button
                                    key={index}
                                    style={{
                                        backgroundColor: answers.isCorrect? resColor.bg : ' ',
                                        color: answers.isCorrect? resColor.cl : ' '
                                    }}
                                    onClick={() => handleRes(answers.isCorrect)}
                                >
                                    {answers.answer}
                                </button>
                            )
                        )}
                    </div>
                </section>
            )}
        </div>
    );
}
export default Questions;
