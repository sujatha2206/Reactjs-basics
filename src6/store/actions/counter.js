import * as ActionTypes from './actionTypes';
export const increment = () =>{
    return {
        type:ActionTypes.INCREMENT
    }
}
export const decrement = () =>{
    return {
        type:ActionTypes.DECREMENT
    }
}
export const add = () =>{
    return {
        type:ActionTypes.ADD,
        val:5
    }
}
export const sub = () =>{
    return {
        type:ActionTypes.SUB,
        val:5
    }
}