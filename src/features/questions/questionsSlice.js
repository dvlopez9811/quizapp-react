import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_GENERAL_CULTURE_QUIZ } from '../../constants/webConstants';
import { client } from '../webServices/client';

const initialState = 
    {
        questions: [],
        currentQuestionId: 1,
        correctAnswers: 0,
        totalQuestions: 10,
        status: 'idle',
        error: null
}


export const fetchQuestions = createAsyncThunk("questions/fetchQuestions",async() => {
    const response = await client.get(URL_GENERAL_CULTURE_QUIZ);
    return response.results
})

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
      nextQuestion(state, action) {
        const {answer} = action.payload;
        if(answer === 'correct')
        state.correctAnswers++;

        if(state.currentQuestionId < state.totalQuestions)
        state.currentQuestionId++;

      }, resetQuiz(state,action){
        state.currentQuestionId = 1
        state.correctAnswers= 0
        state.totalQuestions= 10
        state.error= null      } 

    },
    extraReducers: {
        [fetchQuestions.pending]: (state, action) => {
            state.status = "loading";
          },
          [fetchQuestions.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.questions = state.questions.concat(action.payload)
            let contador = 1;
            state.questions.forEach(element => {
              element.question_id = contador++
            });
          },
          [fetchQuestions.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          },
    }
})

export default questionsSlice.reducer

export const {nextQuestion, resetQuiz} = questionsSlice.actions

export const selectAllQuestions = state => state.questions

export const selectQuestionById = (state,questionId) => state.questions.questions.find(question => question.question_id === questionId)

export const selectCurrentQuestion = state => state.questions.questions
.find( question => question.question_id === state.questions.currentQuestionId)
