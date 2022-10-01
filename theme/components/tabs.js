const Tabs = {
	baseStyle: {
		tab: {
			_focus: {
				transition: '.4s'
			}
		}
	},
	variants: {
		line: {
			tab: {
				fontWeight: 'medium',
				color: 'muted',
				margin: 0,
				_selected: {
					color: 'brand.500',
					borderColor: 'brand.500'
				},
				_active: {
					bg: 'transparent'
				}
			},
			tablist: {
				borderBottom: 'none',
				borderColor: 'transparent'
			},
			tabpanel: {
				mt: 6,
				p: 0
			}
		}
	}
}

export default Tabs
