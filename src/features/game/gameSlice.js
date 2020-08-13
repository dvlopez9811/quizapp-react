import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gameStatus: 'playing',
    gameResult: 'Nothing yet',
    category: 'general'
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
 
        finishGame(state, action) {
            const {correctAnswers} = action.payload
            if(correctAnswers > 6)
            state.gameResult = 'Good job! You passed'
            else
            state.gameResult = "You failed :(  \n Better luck next time"

            state.gameStatus = 'finished'
        },
        resetGame: state => initialState,
        setCategory (state,action){
            const {category} = action.payload 
            state.category = category
        }
    }
})

export default gameSlice.reducer

export const {finishGame, resetGame, setCategory} = gameSlice.actions
