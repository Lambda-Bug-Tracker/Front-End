import { UPDATE_BUGSTOSQUASH, UPDATE_SQUASHING, UPDATE_REVIEW, UPDATE_SQUASHED } from '../actions/projectBugs'

initialState = {
    bugsToSquash:[],
    squashing:[],
    review:[],
    squashed:[]
}

export const projectBugs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BUGSTOSQUASH :
            return {
                ...state,
                
            }
        default:
            return state
    }
}