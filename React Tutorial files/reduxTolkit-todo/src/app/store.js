//STEP 1:
import {configureStore} from '@reduxjs/toolkit'

//store ko reducers ki knowledge chahiye thi
import todoReducer from "../features/todo/todoSlice"
export const store = configureStore({

    reducer: todoReducer
});

