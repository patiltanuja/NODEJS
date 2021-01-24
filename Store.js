import { createStore } from "redux";
const initialState = {
    counter: 100,
    title: "Project React"
};

function MyReducer(state = initialState, action) {
    //TODO
    switch (action.type) {
        case "INC":
            state = { ...state, counter: state.counter + 100 };
            return state;
            case "DEC":
                state = { ...state, counter: state.counter + 100 };
                return state;
        default:
            return state;
    }
}

const store = createStore(MyReducer);
export default store;