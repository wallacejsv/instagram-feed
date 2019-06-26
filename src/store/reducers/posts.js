const INITIAL_STATE = {
    feed: []
};

export default function post(state = INITIAL_STATE, action) {
    if(action.type == 'TOGGLE_POST') {
        return { ...state, };
    }
    return state;
}