import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    startTime: new Date().getTime,
    quizTime: 0,
    gameStatus: 'playing',
    gameResult: 'You won yei'
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setTime(state, action) {

        },
        finishGame(state, action) {
            const {correctAnswers} = action.payload
            if(correctAnswers > 6)
            state.gameResult = 'Good job! You passed'
            else
            state.gameResult = "You failed :(  \n Better luck next time"

            state.gameStatus = 'finished'
        },
        resetGame: state => initialState
    }
})

export default gameSlice.reducer

export const {setTime, finishGame, resetGame} = gameSlice.actions
