import {
  IMAGES_ADD_TO_FAVORITE,
  IMAGES_PREVIEW_FAIL,
  IMAGES_PREVIEW_LOADING,
  IMAGES_PREVIEW_SUCCESS,
  IMAGES_REMOVE_FROM_FAVORITE,
  IMAGE_DELETE,
} from '../constants/imageConstants';

const loadImages = () => ({
  type: IMAGES_PREVIEW_LOADING,
});

const setImages = (images: any) => ({
  type: IMAGES_PREVIEW_SUCCESS,
  payload: images,
});

const setError = (error: any) => ({
  type: IMAGES_PREVIEW_FAIL,
  payload: error,
});

const addToFavorite = (favoriteImage: any) => ({
  type: IMAGES_ADD_TO_FAVORITE,
  payload: favoriteImage,
});

const removeFromFavorite = (favoriteImage: any) => ({
  type: IMAGES_REMOVE_FROM_FAVORITE,
  payload: favoriteImage,
});

const removeFromGallery = (image: any) => ({
  type: IMAGE_DELETE,
  payload: image,
});

export {
  loadImages,
  setImages,
  setError,
  addToFavorite,
  removeFromFavorite,
  removeFromGallery,
};
