const redux=require('redux');
const createStore=redux.createStore;

const intialState={
   counter:0
}
//reducer

const reduxReducer=((state=intialState,action)=>{
    if(action.type === 'INC_COUNTER'){
        return {...state,counter:state.counter+1};
    }else if(action.type === 'ADD_COUNTER'){
    return {...state,counter:state.counter+action.value }
    }
    return state;
});


//STORE
const store=createStore(reduxReducer);

//subscriptions
store.subscribe(()=>{
    console.log('Subscriptions: ',store.getState());
})
//action

store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});

console.log(store.getState());



