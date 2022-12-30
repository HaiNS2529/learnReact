import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    listTodo: ["play"],
}

export const listTodo = createSlice({
    name: 'listTodo',
    initialState,
    reducers:{
        addTodo : (state,action) =>{
            let newListTodo = [...state.listTodo];
            newListTodo.push(action.payload);
            return {
                ...state,
                listTodo: newListTodo,
            };
        },
        clearTodo: () =>{
            return initialState
        }
    },
})

export const {addTodo, clearTodo} = listTodo.actions;
export default listTodo.reducer;
