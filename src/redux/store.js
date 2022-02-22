
import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import crudReducer from './crudDucks'

const rootReducer = combineReducers({
    crud: crudReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store
}