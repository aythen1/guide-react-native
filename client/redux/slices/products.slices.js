import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from './../actions/products'

export const productsSlices = createSlice({
	name: 'products',
	initialState: {
		allProducts: [],
		loading: false,
		error: {},
	},
	reducers: {
		setProducts: (state, action) => {
			state.allProducts = action.payload
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.loading = false
				state.allProducts = action.payload
				state.error = null
			})
			.addCase(getAllProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export const { setProducts } = productsSlices.actions

export default productsSlices.reducer
