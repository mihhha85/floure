import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@/types/product';

export interface ProductsState {
  total:number;
  products:IProduct[]|[];
}

const initialState: ProductsState = {
  total:0,
  products:[],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAll: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.total = action.payload.length;
    },
  }
});

export const { getAll } = productsSlice.actions;
export default productsSlice.reducer;
