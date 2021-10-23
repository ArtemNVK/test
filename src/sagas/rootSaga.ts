import {fork} from 'redux-saga/effects';
import {loadImagesWatcher} from './imageSaga';

export function* rootSaga() {
  yield fork(loadImagesWatcher);
}
