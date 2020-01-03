import { UPDATE_BUGSTOSQUASH, UPDATE_SQUASHING, UPDATE_REVIEW, UPDATE_SQUASHED, UPDATE_BUGS } from '../actions/projectBugs'

const initialState = {
    bugsToSquash:[],
    squashing:[],
    review:[],
    squashed:[]
}

export const projectBugs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BUGS :
            return {
                ...state,
                bugsToSquash: action.payload.bugs.filter(item => item.progress_tag === 1),
                squashing: action.payload.bugs.filter(item => item.progress_tag === 2),
                review: action.payload.bugs.filter(item => item.progress_tag === 3),
                squashed: action.payload.bugs.filter(item => item.progress_tag === 4)
            }
        case UPDATE_BUGSTOSQUASH :
            return {
                ...state,
                bugsToSquash: [...state.bugsToSquash, {...action.payload.item, progress_tag: 1}],
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
                squashing: [...state.squashing, {...action.payload.item, progress_tag: 2}],
                
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
                review: [...state.review, {...action.payload.item, progress_tag: 3}],
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
                squashed: [...state.squashed, {...action.payload.item, progress_tag: 4}],
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