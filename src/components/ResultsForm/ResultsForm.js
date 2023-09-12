import React, { useState } from 'react';

import classes from './ResultsForm.module.css';

const initialUserInput = {
    savings: 10000,
    contribution: 1200,
    return: 7,
    duration: 10,
};

const ResultsForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const inputChangeHandler = (identifier, value) => {
        console.log('Identifier: ', identifier, ' value: ', value);
        setUserInput((prevState) => {
            return {
                ...prevState,
                [identifier]: +value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    }

    const resetHandler = () => {
        setUserInput(initialUserInput);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler} onReset={resetHandler}>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" value={userInput.savings} onChange={(event) => inputChangeHandler('savings', event.target.value)} />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" value={userInput.contribution} onChange={(event) => inputChangeHandler('contribution', event.target.value)} />
            </p>
            </div>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" value={userInput.return} onChange={(event) => inputChangeHandler('return', event.target.value)} />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" value={userInput.duration} onChange={(event) => inputChangeHandler('duration', event.target.value)} />
            </p>
            </div>
            <p className={classes.actions}>
            <button type="reset" className={classes.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={classes.button}>
                Calculate
            </button>
            </p>
      </form>
    );
};

export default ResultsForm;