// import React from 'react';
// import ReactDOM from 'react-dom';
// import  {createStore,combineReducers,applyMiddleware,compose} from'redux';
// import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import './index.css';
// import App from './App';
// import CounterReducer from './store/reducer/counter';
// import ResultReducer from './store/reducer/result';
// import registerServiceWorker from './registerServiceWorker';

// const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer=combineReducers({
//     ctr:CounterReducer,
//     res:ResultReducer
// })
// //middleware in between action nad reducer
// const logger = store =>{
//     return next =>{
//         return action =>{
//             console.log("[Middle Ware] action",action);
//            const result= next(action);  // this would be execute let action continue to reducer
//             console.log("[Middle Ware] action",store.getState());
//             return result;
//         }
//     }
// }
// const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger,ReduxThunk)));
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

