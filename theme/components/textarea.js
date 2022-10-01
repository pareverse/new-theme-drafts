import { mode } from '@chakra-ui/theme-tools'

const Textarea = {
	baseStyle: {
		_placeholder: {
			fontWeight: 'medium',
			color: 'muted'
		}
	},
	variants: {
		outline: {
			borderColor: 'border',
			_hover: {
				borderColor: 'border'
			},
			_focus: {
				borderColor: 'border-focus'
			}
		},
		filled: (props) => ({
			bg: mode('gray.50', '#2D374850')(props),
			_hover: {
				bg: mode('gray.100', '#2D374875')(props),
				borderColor: 'transparent'
			},
			_focus: {
				bg: mode('gray.100', '#2D374875')(props),
				borderColor: 'transparent'
			},
			_active: {
				borderColor: 'transparent'
			}
		})
	},
	sizes: {
		xs: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'xs'
		},
		sm: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'xs'
		},
		md: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'sm'
		},
		lg: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'sm'
		},
		xl: {
			borderRadius: 'lg',
			px: 3,
			fontSize: 'md'
		}
	}
}

export default Textarea
