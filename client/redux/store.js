import { configureStore } from '@reduxjs/toolkit'
import productsSlices from './slices/products.slices'

export const store = configureStore({
	reducer: {
		products: productsSlices,
	},
})
