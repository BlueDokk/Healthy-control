import { types } from "../types/types";

export const uiReducer = (state = {}, action) => {

    switch (action.type) {

        case types.lastBmi:
            return {
                ...state,
                lastWeight: action.payload.lastWeight,
                lastHeight: action.payload.lastHeight,
                lastBmi: action.payload.lastBmi,
            };

        case types.saveRecord:

            const record = {
                recordId: new Date().getTime(),
                weight: state.lastWeight,
                height: state.lastHeight,
                bmiScore: state.lastBmi
            };

            return {
                ...state,
                records: (state.records) ? [...state.records, record] : [record]
            }

        case types.updateRecords:
            return {
                ...state,
                records: action.payload.records
            }

            

        default:
            return state;

    }

}