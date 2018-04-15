import { take, put, call, fork } from 'redux-saga/effects';

import makeApiRequest from '../../utils/makeApiRequest';
import { GET_ARTISTS } from './constants';
import {
  getArtistsRequest,
  getArtistsFailure,
  getArtistsSuccess
} from './actions';

// -------------------------------------------------
// WORKER SAGAS
// -------------------------------------------------
export function* getArtists(request) {
  yield put(getArtistsRequest());

  try {
    const payload = yield call(makeApiRequest, {
      // url: `/v1/search?type=artist&q=${request.query}`
      url: 'https://api.spotify.com/v1/search?type=artist&q=beatles'
    });

    console.log('payload: ', payload);

    if (payload) {
      yield put(getArtistsSuccess(payload));
    } else {
      yield put(getArtistsFailure());
    }
  } catch (error) {
    console.log('error: ', error);
    yield put(getArtistsFailure());
  }
}

// -------------------------------------------------
// WATCHER SAGAS
// -------------------------------------------------
export default function* watchgetArtists() {
  while (true) {
    const { request } = yield take(GET_ARTISTS);

    yield fork(getArtists, request);
  }
}
