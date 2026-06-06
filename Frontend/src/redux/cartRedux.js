import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        email: '',
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.email = action.payload.email;
            state.products.push(action.payload);
        },
        removeProduct: (state,action)=>{
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if(index !== -1){
                state.products.splice(index, 1);
                state.quantity -= 1;
                state.total -= action.payload.price * action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.email = '';
        },
    },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;