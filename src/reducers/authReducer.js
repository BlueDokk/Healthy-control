import { types } from "../types/types";

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                uid: action.payload.uid,
                username: action.payload.displayName
            };

        case types.logout:
            return {};
        default:
            return state;

    }

}