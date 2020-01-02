export const UPDATE_BUGSTOSQUASH = 'UPDATE_BUGSTOSQUASH'
export const UPDATE_SQUASHING = 'UPDATE_SQUASHING'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'
export const UPDATE_SQUASHED = 'UPDATE_SQUASHED'

export const bugsToSquash = (input) => dispatch => {
    dispatch({type: UPDATE_BUGSTOSQUASH, payload: input})
}
export const squashing = (input) => dispatch => {
    dispatch({type: UPDATE_SQUASHING, payload: input})
}
export const review = (input) => dispatch => {
    dispatch({type: UPDATE_REVIEW, payload: input})
}
export const squashed = (input) => dispatch => {
    dispatch({type: UPDATE_SQUASHED, payload: input})
}
