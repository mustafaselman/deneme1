import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { addDoc, deleteDoc, doc } from "firebase/firestore";
import {db, productsRef} from "../config/firebase"

const initialState = {
    draftProduct: {
        name: 'asd',
        description: '',
        price: 0,
        tags: []
    },
    products: []
};
export const addProduct = createAsyncThunk("products/addProduct",
    async (_, {getState}) => {
        await addDoc(productsRef, getState().products.draftProduct);
    }
);

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) =>{
    await deleteDoc(doc(productsRef,id))
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        changeDraftProductName : (state,action) => {
            state.draftProduct.name= action.payload
        },
        changeDraftProductDescription : (state,action) => {
            state.draftProduct.description= action.payload
        },
        changeDraftProductPrice : (state,action) => {
            state.draftProduct.price= action.payload
        },
        addDraftProductTag : (state,action) => {
            state.draftProduct.tag.push(action.payload)
        },
        deleteDraftProductTag : (state,action) => {
            state.draftProduct.tags = state.draftProductTag.tags.filter((tag)=> tag !== action.payload)
        },
        clearDraftProduct: (state) => {
            state.draftProduct = initialState.draftProduct
        },
        setDraftProduct: (state,action) => {
            state.draftProduct = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
    }
});

export const {
    changeDraftProductName,
    changeDraftProductDescription,
    changeDraftProductPrice,
    addDraftProductTag,
    deleteDraftProductTag,
    clearDraftProduct,
    setDraftProduct,
    setProducts
} = productsSlice.actions

export default productsSlice.reducer