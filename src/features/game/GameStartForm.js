import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel} from '@material-ui/core';

import { resetGame, setCategory } from './gameSlice'
import { resetQuiz, fetchQuestions } from '../questions/questionsSlice'

export const GameStartForm = () => {

    const dispatch = useDispatch();

    const onStartButtonClicked = () => {
        dispatch(resetGame());
        dispatch(resetQuiz());
    }

    const handleChange = (event) => {
        const category = event.target.value
        dispatch(setCategory( { category } ));
        dispatch(fetchQuestions(category))
    }
    return (
        <section>
            <FormControl component="fieldset">
                <FormLabel component="legend">Select a category</FormLabel>
                <RadioGroup defaultValue="general"aria-label="gender" name="gender1" onChange={handleChange} >
                    <FormControlLabel value="general" control={<Radio />} label="General Knowledge" color="secondary"/>
                    <FormControlLabel value="geography" control={<Radio />} label="Geography" />
                    <FormControlLabel value="music" control={<Radio />} label="Music" />
                    <FormControlLabel value="films" control={<Radio />} label="Films" />
                </RadioGroup>
            </FormControl>
<div>
            <Link to={`/quiz`} className="button mutted-button" onClick={onStartButtonClicked()}> Start Quiz!</Link>
            </div>
        </section>
    )
}
