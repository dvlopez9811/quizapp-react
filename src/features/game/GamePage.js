import React from 'react'
import { QuizPage } from '../questions/QuizPage'
import { BoardPanel } from '../board/BoardPanel'

export const GamePage = () => {
    return(
        <div >
            <div className="title">
                Quiz App with React+Redux
            </div>
            <div className="flexbox-container">
                <div className="quiz-page">
                <QuizPage/>
                </div>
                <div className="board-right">
                <BoardPanel/>
                </div>
            </div>
        </div>
    )
}
