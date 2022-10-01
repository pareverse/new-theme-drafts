import { cssVar, mode } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')
const $arrowShadowColor = cssVar('popper-arrow-shadow-color')

const Popover = {
	baseStyle: (props) => ({
		content: {
			[$arrowBg.variable]: mode('white', '#1A202C')(props),
			[$arrowShadowColor.variable]: mode('#E2E8F0', '#2D3748')(props),
			bg: 'surface',
			borderColor: 'border',
			borderRadius: 'lg',
			shadow: mode('xl', 'dark-xl')(props)
		},
		header: {
			borderBottom: 'none',
			py: 3,
			fontWeight: 'medium',
			color: 'solid'
		},
		body: {
			py: 3
		},
		footer: {
			borderTop: 'none',
			py: 3
		}
	})
}

export default Popover
