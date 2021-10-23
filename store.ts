import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import {favoriteImagesReducer, imageReducer} from './src/reducers/imageReducer';
import {rootSaga} from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

interface State {
  favoriteImgs: any[];
}

const getAsyncStorage = async (item: any) => {
  try {
    const data = await AsyncStorage.getItem(item);
    if (data !== null) {
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

const fetchFavoriteImages = (): any => {
  getAsyncStorage('favoriteImages').then(data => {
    return JSON.parse(data!);
  });
};

const favoriteImages = fetchFavoriteImages();

const initialState: State = {
  favoriteImgs: favoriteImages ? favoriteImages : [],
};

const reducer = combineReducers({
  images: imageReducer,
  favoriteImages: favoriteImagesReducer,
});

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
  reducer as any,
  initialState as any,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
