import { mode } from '@chakra-ui/theme-tools'

const Button = {
	baseStyle: {
		overflow: 'hidden',
		borderRadius: 'lg',
		fontWeight: 'medium',
		lineHeight: 'inherit',
		transition: '.4s'
	},
	variants: {
		default: (props) => ({
			bg: mode('gray.50', '#2D374850')(props),
			color: 'default',
			_hover: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.a1`,
				color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.a1`,
				color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`
			}
		}),
		solid: (props) => ({
			bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.500`,
			color: props.colorScheme === 'gray' ? 'default' : mode('white', 'white')(props),
			_hover: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.600`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.600`
			}
		}),
		outline: (props) => ({
			borderColor: props.colorScheme === 'gray' ? 'border' : `${props.colorScheme}.500`,
			color: props.colorScheme === 'gray' ? 'default' : mode(`${props.colorScheme}.500`, `${props.colorScheme}.500`)(props),
			_hover: {
				bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`
			}
		}),
		ghost: (props) => ({
			color: props.colorScheme === 'gray' && 'default',
			_hover: {
				bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`,
				color: props.colorScheme === 'gray' ? 'default' : `${props.colorScheme}.500`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`
			}
		}),
		translucent: (props) => ({
			bg: props.colorScheme === 'gray' ? mode('gray.50', '#2D374850')(props) : `${props.colorScheme}.a1`,
			color: props.colorScheme === 'gray' ? 'default' : mode(`${props.colorScheme}.500`, `${props.colorScheme}.500`)(props),
			_hover: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.a2`
			},
			_active: {
				bg: props.colorScheme === 'gray' ? mode('gray.100', '#2D374875')(props) : `${props.colorScheme}.a2`
			}
		}),
		light: (props) => ({
			bg: 'surface',
			color: 'default',
			_hover: {
				shadow: mode('xl', 'dark-xl')(props)
			}
		}),
		dark: (props) => ({
			bg: 'surface-inverted',
			color: 'default-inverted',
			_hover: {
				shadow: mode('dark-xl', 'xl')(props)
			}
		})
	},
	sizes: {
		xs: {
			px: 3,
			h: 8,
			minW: 8,
			fontSize: 'xs'
		},
		sm: {
			px: 4,
			h: 9,
			minW: 9,
			fontSize: 'xs'
		},
		md: {
			px: 4,
			h: 10,
			minW: 10,
			fontSize: 'sm'
		},
		lg: {
			px: 5,
			h: '44px',
			minW: '44px',
			fontSize: 'sm'
		},
		xl: {
			px: 5,
			h: 12,
			minW: 12,
			fontSize: 'md'
		}
	},
	defaultProps: {
		variant: 'default',
		colorScheme: 'gray'
	}
}

export default Button
