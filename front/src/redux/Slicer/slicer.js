import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  data:[],
  basket:[]
}

export const fetchData = createAsyncThunk(
    'users/fetchData',
    async () => {
      const response = await axios.get("http://localhost:4000/")
      return response.data
    }
  )

  
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    salam: (state) => {
      console.log("salam")
    },
    addToBasket: (state,action)=>{
        
        const foundIndex = state.basket.findIndex(elem => elem.id == action.payload.id)
        
        if( foundIndex == -1 ){
            state.basket.push({...action.payload , quantity:1})
        } else {
           state.basket.forEach((elem,i)=>{
             if( elem.id == action.payload.id) {
                let index = i
                state.basket[index].quantity+=1
             }
           })
        }

        console.log(current(state.basket))
    }
    , 
    removeFromBasket: (state,action)=>{
        state.basket.forEach((elem,i)=>{
            if( elem.id == action.payload.id) {
               let index = i
               state.basket.splice(index,1)
            }
          })
    } , 
    increase: (state,action)=>{
        state.basket.forEach((elem,i)=>{
            if( elem.id == action.payload.id) {
               let index = i
               state.basket[index].quantity+=1
            }
          })
    } , 
    decrease: (state,action)=>{
        state.basket.forEach((elem,i)=>{
            if( elem.id == action.payload.id) {
               let index = i
               if( state.basket[index].quantity > 1){
                state.basket[index].quantity-=1
               }
            }
          })
    }  ,
    removeFromData: (state,action)=>{
      // state.data.forEach((elem,i)=>{
      //     if( elem.id == action.payload.id) {
      //        let index = i
      //        state.data.splice(index,1)
      //     }
      //   })
      state.basket = state.basket.filter(elem => elem.id !== action.payload.id)
  } , 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload
    })
  },
})

export const { salam , addToBasket  ,removeFromBasket , increase , decrease ,removeFromData} = counterSlice.actions

export default counterSlice.reducer