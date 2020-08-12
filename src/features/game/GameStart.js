import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const GameStart = () => {

    const dispatch = useDispatch();
    const resetGame = () => {

    }

    return (
        <section>
            <div>
                <button> General Knowledge </button>

            </div>
            <div>
            <Link to={`/quiz`} className="button mutted-button" onClick={resetGame()}> Start Quiz!</Link>
            </div>
        </section>
    )
}
