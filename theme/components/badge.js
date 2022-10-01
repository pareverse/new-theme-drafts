import { mode } from '@chakra-ui/theme-tools'

const Badge = {
	baseStyle: {
		borderRadius: 'lg',
		fontWeight: 'medium',
		textTransform: 'normal',
		cursor: 'default'
	},
	variants: {
		solid: (props) => ({
			bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.500`,
			color: props.colorScheme === 'gray' ? 'default' : 'white'
		}),
		translucent: (props) => ({
			bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`,
			color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`
		})
	},
	sizes: {
		xs: {
			px: 2,
			py: 1,
			lineHeight: '16px'
		},
		sm: {
			px: 3,
			py: 1.5,
			lineHeight: '16px'
		},
		md: {
			px: 3,
			py: 1.5,
			fontSize: 'sm',
			lineHeight: '20px'
		},
		lg: {
			px: 3.5,
			py: 2,
			fontSize: 'sm',
			lineHeight: '20px'
		},
		xl: {
			px: 4,
			py: 2,
			fontSize: 'md'
		}
	},
	defaultProps: {
		variant: 'solid',
		size: 'sm',
		colorScheme: 'gray'
	}
}

export default Badge
