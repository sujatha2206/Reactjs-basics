
import * as ActionTypes from './actionTypes';
export const saveResult = (ctr) =>{
    // const updatedResult= ctr *2;
    return {
        type:ActionTypes.STORE_RESULT,
        cntr:ctr
    }
}
export const storeResult =(ctr)=>{
    return (dispatch,getState) => {
        const oldCounter = getState().ctr.counter;
        console.log(oldCounter);
        setTimeout(()=>{
            dispatch(saveResult(ctr))
        },2000)
    }
}
export const deleteResult = (ID) =>{
    return {
        type:ActionTypes.DELETE_RESULT,
        resultElId:ID
    }
}