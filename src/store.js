import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart =createSlice({
   name: 'cart',
   initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] ,
   reducers : {
    increase(state, action){
      let num = state.findIndex((a)=> a.id === action.payload
      )
      state[num].count++
    },
   addItem(state, action){
    let num = state.findIndex((a)=> a.id === action.payload.id)
    if (num >= 0){ //num은 배열 내에 없을 시 -1을 반환
      state[num].count++;
    }else{
    state.push(action.payload)}
   },
   removeItem(state, action){
    state.pop(action.payload)
  }}
})

export default configureStore({
  reducer: {
    cart : cart.reducer
   }
}) 


export let {increase, addItem, removeItem} = cart.actions