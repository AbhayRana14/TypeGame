import { put, takeEvery } from 'redux-saga/effects';
import { saveGameHighestScoreAction } from './reducer';

function* saveGameHighestScoreActionFunction(data) {
  if (localStorage.highscore) {
    localStorage.highscore = Number(data);
  } else {
    localStorage.clickcount = 0;
  }
  yield put(saveGameHighestScoreAction());
}

function* deviceSaga() {
  yield takeEvery('device/saveGameHighestScoreAction', saveGameHighestScoreActionFunction);
}

export default deviceSaga;
