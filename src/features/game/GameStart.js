import React from 'react'
import { Link } from 'react-router-dom'

export const GameStart = () => {

    return (
        <section>
            <Link to={`/quiz`} className="button mutted-button"> Start Quiz!</Link>
        </section>
    )
}
