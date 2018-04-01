import {
  GET_DETAILS,
  GET_DETAILS_REQUEST,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE
} from './constants';

export const getDetails = () => ({ type: GET_DETAILS });
export const getDetailsRequest = () => ({ type: GET_DETAILS_REQUEST });
export const getDetailsSuccess = payload => ({ type: GET_DETAILS_SUCCESS, payload });
export const getDetailsFailure = error => ({ type: GET_DETAILS_FAILURE, error });
