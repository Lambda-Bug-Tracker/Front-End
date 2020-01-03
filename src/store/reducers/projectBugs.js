import { UPDATE_BUGSTOSQUASH, UPDATE_SQUASHING, UPDATE_REVIEW, UPDATE_SQUASHED, UPDATE_BUGS } from '../actions/projectBugs'

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
        case UPDATE_BUGS :
            return action.payload
        case UPDATE_BUGSTOSQUASH :
            return {
                ...state,
                bugsToSquash: [...state.bugsToSquash, {...action.payload.item, bugState: 1}],
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
            console.log(action.payload.item)
            return {
                ...state,
                squashing: [...state.squashing, {...action.payload.item, bugState: 2}],
                
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
                review: [...state.review, {...action.payload.item, bugState: 3}],
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
                squashed: [...state.squashed, {...action.payload.item, bugState: 4}],
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