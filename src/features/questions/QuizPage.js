import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestionById, fetchQuestions, nextQuestion, resetQuiz} from '../questions/questionsSlice'

import {finishGame, resetGame} from '../game/gameSlice'

export const QuizPage = () => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.game.category)

    useEffect(() => {
        dispatch(fetchQuestions(category));
    }, [category , dispatch])

    let content;
    const requestStatus = useSelector(state => state.questions.status)
    const  currentQuestionId = useSelector(state => state.questions.currentQuestionId)
    const currentQuestion = useSelector(state => selectQuestionById(state, currentQuestionId))
    const correctAnswers = useSelector(state => state.questions.correctAnswers)
    const gameStatus = useSelector(state => state.game.gameStatus)

   if(requestStatus === "succeeded"){
        content = <div>
            <h2>{currentQuestion.question}</h2>

    </div>
   }

    const onTruebuttonClick = () => {
        if(currentQuestion.correct_answer === 'True')
        dispatch(nextQuestion({answer: 'correct'}));
        else 
        dispatch(nextQuestion({answer: 'wrong'}));

        if(currentQuestionId === 10){
            dispatch(finishGame({correctAnswers}))
        }

    }

    const onFalsebuttonClick = () => {
        if(currentQuestion.correct_answer === 'False')
        dispatch(nextQuestion({answer: 'correct'}));
        else 
        dispatch(nextQuestion({answer: 'wrong'}));

        if(currentQuestionId === 10){
            dispatch(finishGame({correctAnswers}))
        }    }


        const onQuitButtonClicked = () => {
            dispatch(resetQuiz());
            dispatch(resetGame());
        }

    return (
        <div>
            <div className="question-panel">{content} </div>
        <div>
            <button className="greenbutton" 
            onClick={onTruebuttonClick} 
            disabled={gameStatus === 'finished'} > 
            True</button>

            <button className="redbutton" type="button" 
            onClick={onFalsebuttonClick} disabled={gameStatus === 'finished'}> 
            False</button>

        </div>
        <Link to={`/`} className="button" onClick={onQuitButtonClicked}>Quit</Link>

        </div>   
         )
}
