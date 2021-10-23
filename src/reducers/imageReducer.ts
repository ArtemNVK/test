import {
  IMAGES_ADD_TO_FAVORITE,
  IMAGES_PREVIEW_FAIL,
  IMAGES_PREVIEW_LOADING,
  IMAGES_PREVIEW_SUCCESS,
  IMAGES_REMOVE_FROM_FAVORITE,
  IMAGE_DELETE,
} from '../constants/imageConstants';

interface State {
  loading: boolean;
  images: any[];
}

interface Action {
  type: string;
  payload: any;
}

export const imageReducer = (
  state: State = {loading: true, images: []},
  action: Action,
) => {
  switch (action.type) {
    case IMAGES_PREVIEW_LOADING:
      return {loading: true};
    case IMAGES_PREVIEW_SUCCESS:
      return {loading: false, images: action.payload};
    case IMAGES_PREVIEW_FAIL:
      return {loading: false, error: action.payload};
    case IMAGE_DELETE:
      return {
        ...state,
        images: state.images.filter(x => x !== action.payload),
      };
    default:
      return state;
  }
};

export const favoriteImagesReducer = (
  state: {favoriteImgs: any[]} = {favoriteImgs: []},
  action: Action,
) => {
  switch (action.type) {
    case IMAGES_ADD_TO_FAVORITE:
      const item = action.payload;
      const existItem = Array.from(state.favoriteImgs).find(x => x === item);
      if (Array.from(state.favoriteImgs) && existItem) {
        return {
          ...state,
          favoriteImgs: Array.from(state.favoriteImgs).map(x =>
            x === existItem ? item : x,
          ),
        };
      } else {
        return {
          ...state,
          favoriteImgs: [...Array.from(state.favoriteImgs), item],
        };
      }
    case IMAGES_REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteImgs: state.favoriteImgs.filter(x => x !== action.payload),
      };
    default:
      return state;
  }
};
