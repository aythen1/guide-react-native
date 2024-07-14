import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ size, color, weight, title }) => {
	return (
		<Text
			style={{
				color: color || '#000',
				fontSize:
					size === 'xs'
						? 8
						: size === 'sm'
						? 10
						: size === 'md'
						? 12
						: size === 'lg'
						? 14
						: size === 'xl'
						? 18
						: size === 'xxl'
						? 22
						: 12,
				fontWeight: weight || '500',
			}}
		>
			{title}
		</Text>
	)
}

export default Title
