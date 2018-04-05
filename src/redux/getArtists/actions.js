import {
  GET_ARTISTS,
  GET_ARTISTS_REQUEST,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_FAILURE
} from './constants';

export const getArtists = () => ({ type: GET_ARTISTS });
export const getArtistsRequest = () => ({ type: GET_ARTISTS_REQUEST });
export const getArtistsSuccess = payload => ({ type: GET_ARTISTS_SUCCESS, payload });
export const getArtistsFailure = error => ({ type: GET_ARTISTS_FAILURE, error });
