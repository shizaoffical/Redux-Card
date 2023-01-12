import { createSlice } from "@reduxjs/toolkit";
import ProductCard from "../ProductCard";


const initialState = {
    cart: [],
    items: ProductCard,
    totalQuantity: 0,
    totalamount: 0,

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addcart: (state, action) => {
            let find = state.cart.findIndex((index) => index.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1;
            }
            else {
                state.cart.push(action.payload);
            }
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.totalPrice);
                if (item.id === action.payload.id) {

                    return { ...item, totalPrice: item.price * item.quantity }
                }

                return item
            })
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalamount } = state.cart.reduce(
                (CartTotal, cartItem) => {
                    console.log("CartTotal", CartTotal);
                    console.log("cartItem", cartItem);
                    const { price, quantity } = cartItem;
                    console.log(price, quantity)
                    const totalItem = price * quantity;
                    CartTotal.totalamount += totalItem;
                    CartTotal.totalQuantity += quantity;
                    return CartTotal;
                }, {
                totalQuantity: 0,
                totalamount: 0
            }
            );
            state.totalamount = parseInt(totalamount.toFixed(2));
            state.totalQuantity = totalQuantity

            // state.cart = state.cart.map((item) => {
            //     if (item.quantity === 0) {
            //         return { ...state.cart,  ...state.cart.filter((item) => item.id !== action.payload.id)}
            //     }
            //     return item;
            // })
        },
        removeIcon: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        icrement: (state, action) => {
            console.log("increase Quantity is running")
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.quantity);
                if (item.id === action.payload.id) {

                    return { ...item, quantity: item.quantity + 1 }
                }

                return item
            })
            state.cart = state.cart.map((item) => {
                console.log("item.quantity in increement", item.totalPrice);
                if (item.id === action.payload.id) {

                    return { ...item, totalPrice: item.price * item.quantity }
                }

                return item
            })
        },
        dcrement: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item;
            })
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    if(item.quantity > 0){
                    return { ...item, totalPrice: item.totalPrice - item.price }
                    }
                    else{
                        return{...item, quantity : 1}
                    }
                }
                return item;
            })
            // state.cart = state.cart.map((item) => {
            //     if (item.quantity === 0) {
            //         return {  ...item, ...item.quantity.filter((item) => item.id !== action.payload.id)}
            //     } 
                 
            //     console.log("hwllo");
            //     return item;
                
            // })
            

        },
    }
})

export const { addcart, getCartTotal, removeIcon, icrement, dcrement } = cartSlice.actions;
export default cartSlice.reducer; 