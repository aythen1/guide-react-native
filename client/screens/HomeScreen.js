import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Title from '../components/Text/Title'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../components/ProductCard'
import { products } from '../constants/products'

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.homeScreenWrapper}>
			<View style={styles.titleContainer}>
				<Title
					title={`Products (${products.length})`}
					size={'xxl'}
					color={'#000'}
					weight={'600'}
				/>
			</View>
			<ScrollView
				contentContainerStyle={{ paddingBottom: 30 }}
				style={styles.scrollViewContainer}
				showsVerticalScrollIndicator={false}
			>
				{products.map((product, index) => (
					<ProductCard data={product} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	homeScreenWrapper: {
		flex: 1,
		backgroundColor: 'rgb(253,253,253)',
		paddingTop: 50,
		width: '100%',
	},
	titleContainer: {
		marginLeft: 10,
	},
	scrollViewContainer: {
		marginTop: 15,
	},
})
