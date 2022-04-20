import { configureStore } from '@reduxjs/toolkit';
import { counterSlices } from '../slices/counterSlices';
// import rootReducer from './reducers'

const store = configureStore({
    reducer:{
        counter : counterSlices,
    }
})

export default store;