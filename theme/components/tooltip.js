import { cssVar, mode } from '@chakra-ui/theme-tools'

const $arrowBg = cssVar('popper-arrow-bg')

const Tooltip = {
	baseStyle: (props) => ({
		[$arrowBg.variable]: mode('#1A202C', 'white')(props),
		bg: 'surface-inverted',
		borderRadius: 'lg',
		shadow: 'none',
		py: 1,
		fontSize: 'sm',
		color: 'solid-inverted'
	})
}

export default Tooltip
