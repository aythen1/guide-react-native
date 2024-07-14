import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ProductCard = ({ data }) => {
	return (
		<TouchableOpacity style={styles.card}>
			<Image
				source={require('../assets/images/iphone15.png')}
				style={styles.image}
			/>
			<View style={styles.infoContainer}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.price}>${data.price.toFixed(2)}</Text>
				<View style={styles.ratingContainer}>
					<Text style={styles.stars}>{'⭐'.repeat(data.stars)}</Text>
					<Text style={styles.review}>({data.review} reviews)</Text>
				</View>
				<Text numberOfLines={2} ellipsizeMode='tail' style={styles.description}>
					{data.description}
				</Text>
				<Text style={styles.shop}>Sold by: {data.shop}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 0,
		margin: 10,
		flexDirection: 'row',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 8,
	},
	image: {
		width: 120,
		height: '100%',
		borderRadius: 10,
	},
	infoContainer: {
		marginLeft: 5,
		gap: 4,
		padding: 10,
		flex: 1,
		justifyContent: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	price: {
		fontSize: 16,
		color: '#1c7430',
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	stars: {
		fontSize: 14,
		color: '#ffcc00',
		marginRight: 5,
	},
	review: {
		fontSize: 14,
		color: '#777',
	},
	description: {
		fontSize: 14,
		color: '#555',
	},
	shop: {
		fontSize: 14,
		color: '#007bff',
	},
})

export default ProductCard
