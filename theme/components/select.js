import { mode } from '@chakra-ui/theme-tools'

const Select = {
	baseStyle: {
		field: {
			fontWeight: 'medium',
			transition: '.4s'
		}
	},
	variants: {
		filled: (props) => ({
			field: {
				bg: mode('gray.50', '#2D374850')(props),
				_hover: {
					bg: props.colorScheme ? `${props.colorScheme}.a1` : mode('gray.100', '#2D374875')(props),
					color: props.colorScheme ? `${props.colorScheme}.500` : 'default'
				},
				_focus: {
					bg: props.colorScheme ? `${props.colorScheme}.a1` : mode('gray.100', '#2D374875')(props),
					borderColor: 'transparent',
					color: props.colorScheme ? `${props.colorScheme}.500` : 'default'
				}
			}
		}),
		outline: (props) => ({
			field: {
				borderColor: 'border',
				_hover: {
					bg: props.colorScheme ? `${props.colorScheme}.a1` : 'transparent',
					borderColor: props.colorScheme ? `${props.colorScheme}.500` : 'border-focus',
					color: props.colorScheme ? `${props.colorScheme}.500` : 'default'
				},
				_focus: {
					bg: props.colorScheme ? `${props.colorScheme}.a1` : 'transparent',
					borderColor: props.colorScheme ? `${props.colorScheme}.500` : 'border-focus',
					color: props.colorScheme ? `${props.colorScheme}.500` : 'default'
				}
			}
		})
	},
	sizes: {
		xs: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '32px'
			}
		},
		sm: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '36px',
				fontSize: 'xs'
			}
		},
		md: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: 10,
				fontSize: 'sm'
			}
		},
		lg: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: '44px',
				fontSize: 'sm'
			}
		},
		xl: {
			field: {
				borderRadius: 'lg',
				pl: 3,
				h: 12,
				fontSize: 'md'
			}
		}
	}
}

export default Select
