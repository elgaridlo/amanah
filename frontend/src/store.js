import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createQRCodeReducer, generateNomorUrutReducer, getAllQRCodeReducer } from './Reducer/QRCodeReducer'
import { tebakNomorReducer } from './Reducer/TebakNomorReducer'

const reducer = combineReducers({
    allQR: getAllQRCodeReducer,
    generateNomorUrut: generateNomorUrutReducer,
    createQRCode: createQRCodeReducer,
    tebakNomor: tebakNomorReducer
})


// ini initiate jadi ini bakal dijalankan terlebih dahulu
const initialState = {
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
