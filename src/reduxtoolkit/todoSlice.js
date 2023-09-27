import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo: (state,action)=>{
            const newvalue = action.payload;
            state.push(newvalue)
        },
        checkTodo:(state,action)=>{
            const id = action.payload;
            const tab = state.find(s=>s.id === id)
            if(tab){
                tab.completed = !tab.completed
            }
        },

        deleteTodo:(state,action)=>{
            const id = action.payload;
            const index = state.findIndex(s=>s.id === id)
            if(index !== -1){
                state.splice(index,1)
            }
        }
    }
})

export const {addTodo , checkTodo , deleteTodo}= todoSlice.actions ;
 export default todoSlice.reducer;