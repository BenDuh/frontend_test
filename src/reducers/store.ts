import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import RootReducer from '../reducers'
import allSagas from '../sagas'

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

const configureStore = (): Store => {
   const tStore: Store = createStore(
      RootReducer,
      applyMiddleware(sagaMiddleware)
   )
   sagaMiddleware.run(allSagas)
   return tStore
}

const store: Store = configureStore()

export default store