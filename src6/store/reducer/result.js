import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const intialState={
   
    result:[]
}
function deleteResult(state,action){
    const updatedArray = state.result.filter((result)=> result.id !== action.resultElId);
    return   updateObject(state,{result:updatedArray})
}
const reducer = ((state=intialState,action)=>{
    switch(action.type){
        //change data
        case actionTypes.STORE_RESULT:
         return   updateObject(state,{ result:state.result.concat({id:new Date(),value:action.cntr})})
           
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // const newArray={...state.result};
            // newArray.splice(2,1)
        
         return  deleteResult(state,action);
           
    }
   
    return state;
})
export default reducer;