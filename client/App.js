import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HomeScreen from './screens/HomeScreen'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<HomeScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(253,253,253)',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
