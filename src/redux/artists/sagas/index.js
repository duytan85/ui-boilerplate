import {
  take, put, call, fork
} from 'redux-saga/effects';

import makeApiRequest from '../../../utils/makeApiRequest';
import { GET_ARTISTS } from '../constants';
import {
  getArtistsRequest,
  getArtistsFailure,
  getArtistsSuccess
} from '../actions';

// -------------------------------------------------
// WORKER SAGAS
// -------------------------------------------------
function* getArtists(query) {
  yield put(getArtistsRequest());

  try {
    const payload = yield call(makeApiRequest, {
      url: `/search?term=${query}&entity=allArtist&attribute=allArtistTerm`
    });

    yield put(getArtistsSuccess(payload.data));
  } catch (error) {
    yield put(getArtistsFailure(error.message));
  }
}

// -------------------------------------------------
// WATCHER SAGAS
// -------------------------------------------------
export default function* watchGetArtists() {
  while (true) {
    const { query } = yield take(GET_ARTISTS);

    yield fork(getArtists, query);
  }
}
