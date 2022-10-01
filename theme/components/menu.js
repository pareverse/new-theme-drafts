import { mode } from '@chakra-ui/theme-tools'

const Menu = {
	baseStyle: (props) => ({
		list: {
			bg: 'surface',
			borderColor: 'border',
			borderRadius: 'lg',
			shadow: mode('xl', 'dark-xl')(props),
			transition: 'box-shadow .4s'
		},
		item: {
			fontSize: 'sm',
			transition: '.4s',
			_hover: {
				bg: mode('gray.50', '#2D374850')(props)
			},
			_focus: {
				bg: 'transparent'
			},
			_active: {
				bg: 'transparent'
			}
		},
		divider: {
			opacity: 1,
			borderColor: 'border'
		}
	})
}

export default Menu
