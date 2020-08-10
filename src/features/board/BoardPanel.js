import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  Clock  from './Clock'

import {resetGame} from '../game/gameSlice'
import { resetQuiz } from '../questions/questionsSlice'

const startTime = new Date().getTime();

export const BoardPanel = () => {

    const  currentQuestionId = useSelector(state => state.questions.currentQuestionId)
    const correctAnswers = useSelector(state => state.questions.correctAnswers)


    let passOrFailContent;
    let tryAgainButton;
    const gameStatus = useSelector(state => state.game.gameStatus)

    const gameResult = useSelector(state => state.game.gameResult)
    
    const dispatch = useDispatch();

    const onRetryButtonClicked = () => {
        dispatch(resetGame());
        dispatch(resetQuiz());
    }
   

    if(gameStatus === 'finished'){
 
        tryAgainButton =
        <div>
            <button className="greenbutton" onClick={onRetryButtonClicked}>Retry</button>
        </div>

        passOrFailContent =
            <div>
                <h1 className="content">
                {gameResult}
                </h1>
            </div>
        
   }

   

return(
    <section>
        <div>
            <h3>Question # {currentQuestionId}/10</h3>
            <h2>Correct answers: {correctAnswers}</h2>
            <Clock startTime={ startTime }/>
            <div>{passOrFailContent}</div>
            <div>{tryAgainButton}</div>

        </div>
    </section>
)

}
