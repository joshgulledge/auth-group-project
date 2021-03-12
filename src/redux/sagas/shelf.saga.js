import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* bookShelf (action) {
  yield takeEvery('CALL_SHELF', setTheShelf)
  yield takeEvery('POST_SHELF', postShelf)
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

function* postShelf(action){
  try{
      console.log(action);
      yield axios.post('/api/shelf', action.payload);
      yield put({type: 'CALL_SHELF'});
  } catch(err) {
      console.error(err);
      alert('error posting items');
  }
}

export default bookShelf;

//Alvin is here