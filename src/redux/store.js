import { configureStore } from "@reduxjs/toolkit";
import listTodoReducer from "src/redux/reducers/index";
const store = configureStore({
    reducer:{
        listTodoReducer: listTodoReducer,
    },
})

export default store;