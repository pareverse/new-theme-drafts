import { mode } from '@chakra-ui/theme-tools'

const Input = {
	baseStyle: {
		field: {
			transition: '.4s',
			_placeholder: {
				fontWeight: 'medium',
				color: 'muted'
			}
		}
	},
	variants: {
		filled: (props) => ({
			field: {
				bg: mode('gray.50', '#2D374850')(props),
				_hover: {
					bg: mode('gray.100', '#2D374875')(props)
				},
				_focus: {
					bg: mode('gray.100', '#2D374875')(props),
					borderColor: 'transparent'
				},
				_invalid: {
					borderColor: 'transparent'
				}
			}
		}),
		outline: (props) => ({
			field: {
				borderColor: 'border',
				_hover: {
					borderColor: 'border-focus'
				},
				_focus: {
					borderColor: 'border-focus'
				},
				_invalid: {
					borderColor: 'border',
					shadow: 'none',
					_hover: {
						borderColor: 'border-focus'
					}
				}
			}
		})
	},
	sizes: {
		xs: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '32px'
			}
		},
		sm: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '36px',
				fontSize: 'xs'
			}
		},
		md: {
			field: {
				borderRadius: 'lg',
				px: 3,
				fontSize: 'sm'
			}
		},
		lg: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: '44px',
				fontSize: 'sm'
			}
		},
		xl: {
			field: {
				borderRadius: 'lg',
				px: 3,
				h: 12,
				fontSize: 'md'
			}
		}
	}
}

export default Input
