import { UPDATE_BUGSTOSQUASH, UPDATE_SQUASHING, UPDATE_REVIEW, UPDATE_SQUASHED } from '../actions/projectBugs'

const initialState = {
    bugsToSquash:[{name:'Bad Bug',
     id: Math.random(),
    description: 'everything is broken!',
    bugType: 1,
    priority: 3,
    bugState: 1
    },
    {name:'Bad Bug 2',
     id: Math.random(),
    description: 'everything is broken again!',
    bugType: 2,
    priority: 1,
    bugState: 1
    }
],
    squashing:[],
    review:[],
    squashed:[]
}

export const projectBugs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BUGSTOSQUASH :
            return {
                ...state,
                bugsToSquash: [...state.bugsToSquash, action.payload.item],
                squashing: state.squashing.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                review: state.review.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                squashed: state.squashed.filter(item => {
                    return item.id !== action.payload.item.id
                })
            }
        case UPDATE_SQUASHING :
            return {
                ...state,
                squashing: [...state.squashing, action.payload.item],
                bugsToSquash: state.bugsToSquash.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                review: state.review.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                squashed: state.squashed.filter(item => {
                    return item.id !== action.payload.item.id
                })
            }
        case UPDATE_REVIEW :
            return {
                ...state,
                review: [...state.review, action.payload.item],
                squashing: state.squashing.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                bugsToSquash: state.bugsToSquash.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                squashed: state.squashed.filter(item => {
                    return item.id !== action.payload.item.id
                })
            }
        case UPDATE_SQUASHED :
            return {
                ...state,
                squashed: [...state.squashed, action.payload.item],
                squashing: state.squashing.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                review: state.review.filter(item => {
                    return item.id !== action.payload.item.id
                }),
                bugsToSquash: state.bugsToSquash.filter(item => {
                    return item.id !== action.payload.item.id
                })
            }
        default:
            return state
    }
}