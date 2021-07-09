import { types } from "../types/types";

const initialState = {
    loading: false
}


export const loadingReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.startLoading:
            return { loading: true };

        case types.finishLoading:
            return { loading: false };

        default:
            return state;

    }

}