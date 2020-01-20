import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import combineReducers from './reducers/rootReducer'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default createStore(combineReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
