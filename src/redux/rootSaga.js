import { all, fork } from 'redux-saga/effects';

import watchGetDetails from './getDetails/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetDetails)
  ]);
}
