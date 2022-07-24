import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../src/layouts/AuthLayouts';
import '../utils/i18n';

const home = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [result, setResult] = useState(0);
  const [alphabet, setAlphabet] = useState('');
  const [inputValue, setInputValue] = useState(alphabet);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [classname, setClassName] = useState(3);

  const handleStart = () => {
    if (counter < 20) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleAlphabet = () => {
    setAlphabet(
      Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 1)
        .toUpperCase(),
    );
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setInputValue('');
    setCounter(0);
    setPenalty(0);
    handleAlphabet();
    setClassName(3);
  };

  const checkAlphabet = () => {
    if (inputValue?.charAt(inputValue.length - 1) !== alphabet) {
      if (counter !== 0) {
        setPenalty(penalty + 0.5);
        handleStart();
      }
    } else {
      handleAlphabet();
      if (counter !== 0) {
        handleStart();
      }
      setCounter(counter + 1);
    }
  };

  const handleAlphabetInput = (e) => {
    e?.preventDefault();
    setInputValue(e?.target.value.toUpperCase());
  };

  const displayResults = () => {
    handlePauseResume();
    if (time + penalty < result || result === 0) {
      setAlphabet(t('game_success'));
      setResult(time + penalty);
      localStorage.setItem('highscore', JSON.stringify(time + penalty));
      setClassName(1);
    } else {
      setAlphabet(t('game_failure'));
      setClassName(0);
    }
  };
  useEffect(() => {
    const highscore = JSON.parse(localStorage.getItem('highscore'));
    if (highscore) {
      setResult(highscore);
    }
  }, []);

  useEffect(() => {
    if (counter <= 20) {
      checkAlphabet();
    } else {
      displayResults();
    }
  }, [inputValue]);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((timer) => timer + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  return (
    <AuthLayout>
      <div className="main_container">
        <div className="title_container">
          {' '}
          <h1>{t('game_title')}</h1>
        </div>
        <div className="title_container">
          <h3>{t('game_head')}</h3>
        </div>
        <div className="alphabet_container">
          {' '}
          <h1 className={`${classname === 1 ? 'green_success' : classname === 3 ? 'alphabet' : 'red_failure'}`}>{alphabet}</h1>
        </div>
        <div className="timer_container">
          <h3>
            {`${t('game_timer')} ${('0' + Math.floor((time / 60000) % 60)).slice(-2)}
             : ${('0' + Math.floor((time / 1000) % 60)).slice(-2)}
             : ${('0' + ((time / 10) % 100)).slice(-2)}s`}
          </h3>
        </div>
        <div className="result_container">
          <h4>
            {`${t('game_best_time')} ${('0' + Math.floor((result / 60000) % 60)).slice(-2)}
             : ${('0' + Math.floor((result / 1000) % 60)).slice(-2)}
             : ${('0' + ((result / 10) % 100)).slice(-2)}s`}
          </h4>
        </div>
      </div>
      <div className="input_container">
        <input
          className="custom_input"
          type="text"
          placeholder="Type here"
          onChange={(e) => handleAlphabetInput(e)}
          value={inputValue}
        />
        <div
          className="button_container"
          role="button"
          onClick={() => handleReset()}
          aria-hidden="true"
        >
          RESET
        </div>
      </div>
    </AuthLayout>
  );
};

export default home;
