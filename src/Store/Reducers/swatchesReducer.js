import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    SELECTED_SWATCH,
    ACTIVE_PAGE,
    SWATCH_FILTER,
} from './../../Constants';

import {
    getSwatches,
    colors
} from './../Utils';

const initialState = {
    colors,
    swatches: getSwatches(colors),
    loading: false,
    error: null,
    selected_swatch: null,
    active_page: 0,
    filter: 'All',
};

export default function swatchesReducer(state = initialState, action) {
    switch (action.type) {
        case SWATCH_FILTER:
            return {
                ...state,
                filter: action.filter
            }

        case ACTIVE_PAGE:
            return {
                ...state,
                active_page: action.page,
            }

        case SELECTED_SWATCH:
            return {
                ...state,
                selected_swatch: action.swatch,
            }

        case FETCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.swatches
            };

        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                products: []
            };

        default:
            return state;
    }
}