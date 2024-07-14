import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../utils/apiBackend'

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async () => {
		try {
			const { data } = await axiosInstance.get('/products')
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
)
export const postProducts = createAsyncThunk(
	'products/postProducts',
	async (body) => {
		try {
			const { data } = await axiosInstance.post('/products', body)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
)
export const updateProduct = createAsyncThunk(
	'products/updateProduct',
	async ({ productId, body }) => {
		try {
			const { data } = await axiosInstance.patch(`/products/${productId}`, body)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
)
export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	async (productId) => {
		try {
			const { data } = await axiosInstance.delete(`/products/${productId}`)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
)
