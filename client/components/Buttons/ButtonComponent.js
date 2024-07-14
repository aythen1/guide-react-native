import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

/**
 * ButtonComponent
 *
 * This component focuses solely on rendering a button and handling its press events,
 * adhering to the Single Responsibility Principle (SRP). Styles are managed within a
 * separate styles object to maintain a clean and focused component structure.
 *
 * @param {function} onPress - The function to be called when the button is pressed.
 * @param {object} style - Custom styles to be applied to the button.
 * @param {ReactNode} children - The content to be rendered inside the button.
 *
 * Open/Closed Principle (OCP):
 * - The children prop allows ButtonComponent to be extended with different types of content
 *   without modifying the component itself. Any new functionality can be added by changing
 *   the children passed to the component.
 *
 * Liskov Substitution Principle (LSP):
 * - ButtonComponent can be replaced with any other button component that follows the same
 *   interface. The App component demonstrates using ButtonComponent with various content,
 *   showing it can be substituted as needed.
 *
 * Interface Segregation Principle (ISP):
 * - ButtonComponent exposes a minimal and focused API (onPress, style, children). Users of
 *   ButtonComponent only need to interact with these specific props.
 *
 * Dependency Inversion Principle (DIP):
 * - ButtonComponent depends on abstract props rather than concrete implementations. This
 *   decoupling makes the component more flexible and easier to reuse in different contexts.
 *
 * This approach ensures that the ButtonComponent is well-structured, maintainable, and flexible,
 * adhering to the SOLID principles effectively.
 */

const ButtonComponent = ({ onPress, style, children }) => {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			{children}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#007bff',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default ButtonComponent
