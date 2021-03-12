import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* bookShelf (action) {
  // yield takeEvery('CALL_SHELF');
  yield takeEvery('POST_SHELF', shelfPost);
}; // end bookShelf

function* shelfPost(action) {
  try {
    yield axios.post('/api/shelf', action.payload);
    yield put({
      type: 'GET_SHELF'
    });
  }
  catch (err) {
    console.err('error posting item', err);
  }
}

export default bookShelf;