import { mode } from '@chakra-ui/theme-tools'

const Table = {
	baseStyle: {
		table: {
			whiteSpace: 'nowrap'
		},
		th: {
			fontWeight: 'semibold',
			textTransform: 'normal',
			whiteSpace: 'nowrap'
		}
	},
	variants: {
		simple: {
			th: {
				bg: 'transparent',
				borderBottom: '1px dashed',
				borderColor: 'border',
				py: 0,
				h: 12,
				color: 'default'
			},
			td: {
				borderBottom: 'none',
				py: 3,
				color: 'muted'
			}
		},
		striped: (props) => ({
			th: {
				borderBottom: 'none',
				py: 0,
				h: 12,
				color: 'default'
			},
			td: {
				borderBottom: 'none',
				py: 3,
				color: 'muted'
			},
			tbody: {
				tr: {
					'&:nth-of-type(odd)': {
						td: {
							bg: mode('gray.50', '#2D374850')(props)
						}
					}
				}
			}
		})
	},
	sizes: {
		md: {
			th: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			},
			td: {
				fontSize: 'sm',
				lineHeight: 'inherit'
			}
		}
	}
}

export default Table
