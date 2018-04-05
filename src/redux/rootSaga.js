import { all, fork } from 'redux-saga/effects';

import watchGetArtists from './getArtists/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetArtists)
  ]);
}
