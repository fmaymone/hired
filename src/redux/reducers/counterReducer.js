import * as actionTypes from '../actions/actionTypes';

//We’re finally ready to talk about the action parameter. 
//What is it? Where does it come from? How can we use it to change the damn counter?
//An “action” is a JS object that describes a change that we want to make.
// The only requirement is that the object needs to have a type property, 
//and its value should be a string. Here’s an example of an action:


//Never Change State
//One more thing to never do: do not mutate the state. 
//State is immutable. You must never change it. That means you can’t do this:
const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case actionTypes.CHANGE:
            return {
                ...state,
                count: action.value
            };
        default:
            return state;
    }
}

export default reducer;