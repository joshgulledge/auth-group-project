
import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* bookShelf (action) {
  yield takeEvery('CALL_SHELF', setTheShelf)
}; // end bookShelf

function* setTheShelf (action) {
  try {
    const response = yield axios.get('/api/shelf');

    yield put({
      type: 'SET_SHELF',
      payload: response.data
    })
    
  }
  catch (err) {
    console.log(err);
  }
}; // end setTheShelf

export default bookShelf;