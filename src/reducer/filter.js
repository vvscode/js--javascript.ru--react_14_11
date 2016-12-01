import { SET_FILTER_DATE } from '../constants'

const initialState = {
    from: null,
    to: null,
};

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_FILTER_DATE:
            return {
                ...state,
                from: payload.from,
                to: payload.to
            };
    }

    return state
}