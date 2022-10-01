import { mode } from '@chakra-ui/theme-tools'

const Link = {
	baseStyle: (props) => ({
		fontSize: 'sm',
		fontWeight: 'medium',
		color: props.active ? (props.colorScheme ? `${props.colorScheme}.500` : 'solid') : 'default',
		transition: '.4s',
		_hover: {
			color: props.colorScheme ? `${props.colorScheme}.500` : 'solid',
			textDecoration: 'none'
		}
	}),
	variants: {
		filled: (props) => ({
			bg: mode(props.active ? 'gray.50' : 'transparent', props.active ? '#2D374850' : 'transparent')(props),
			borderRadius: 'md',
			px: 3,
			py: 2.5,
			lineHeight: '20px'
		})
	}
}

export default Link
