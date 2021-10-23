import {put, call, takeLatest} from 'redux-saga/effects';
import {setImages} from '../actions/imageActions';
import {fetchImages} from '../api';
import {IMAGES_PREVIEW_LOADING} from '../constants/imageConstants';

export function* loadImagesWatcher() {
  yield takeLatest(IMAGES_PREVIEW_LOADING, loadImagesFlow);
}

function* loadImagesFlow(): any {
  const images = yield call(fetchImages);
  yield put(setImages(images.photos));
}
