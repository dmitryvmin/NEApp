import axios from 'axios';
import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    SWATCHES_ENDPOINT,
    SELECTED_SWATCH,
    ACTIVE_PAGE,
    SWATCH_FILTER,
} from './../../Constants';

export const filterByColor = filter => ({
    type: SWATCH_FILTER,
    filter,
});

export const selectSwatch = swatch => ({
    type: SELECTED_SWATCH,
    swatch,
});

export const goToPage = page => ({
    type: ACTIVE_PAGE,
    page,
});

export const fetchSwatchesBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSwatchesSuccess = swatches => ({
    type: FETCH_SUCCESS,
    payload: { swatches }
});

export const fetchSwatchesFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});

export const fetchSwatches = () => {
    return dispatch => {
        dispatch(fetchSwatchesBegin());

        // mocked out for a swatches endpoint

        // return axios.get(SWATCHES_ENDPOINT)
        //     .then(response => {
        //         dispatch(fetchSwatchesSuccess(response.data))
        //     })
        //     .catch(error => {
        //         dispatch(fetchSwatchesFailure(error))
        //     });
    };
}
