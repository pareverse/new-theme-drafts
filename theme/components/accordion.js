import { mode } from '@chakra-ui/theme-tools'

const Accordion = {
	baseStyle: (props) => ({
		container: {
			borderColor: 'border'
		},
		button: {
			px: 6,
			py: 0,
			h: 12,
			fontWeight: 'medium',
			_hover: {
				bg: mode('gray.50', '#2D374850')(props)
			}
		},
		panel: {
			px: 6,
			py: 6,
			fontSize: 'sm'
		}
	})
}

export default Accordion
