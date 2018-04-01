import { take, put, call, fork } from 'redux-saga/effects';

import makeApiRequest from '../../utils/makeApiRequest';
import { GET_DETAILS } from './constants';
import {
  getDetailsRequest,
  getDetailsFailure,
  getDetailsSuccess
} from './actions';

// -------------------------------------------------
// WORKER SAGAS
// -------------------------------------------------
export function* getDetails(request) {
  yield put(getDetailsRequest());

  try {
    const payload = yield call(makeApiRequest, {
      url: `/v1/search?type=artist&q=${request.query}`
    });

    console.log('payload: ', payload);

    if (payload) {
      yield put(getDetailsSuccess());
    } else {
      yield put(getDetailsFailure());
    }
  } catch (error) {
    yield put(getDetailsFailure());
  }
}

// -------------------------------------------------
// WATCHER SAGAS
// -------------------------------------------------
export default function* watchGetDetails() {
  while (true) {
    const { request } = yield take(GET_DETAILS);

    yield fork(getDetails, request);
  }
}
