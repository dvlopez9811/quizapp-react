import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice'
import gameReducer from '../features/game/gameSlice'
export default configureStore({
  reducer: {
    questions: questionsReducer,
    game: gameReducer
  },
});
