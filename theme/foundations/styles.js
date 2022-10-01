const styles = {
	global: {
		'*, *::before, *::after': {
			letterSpacing: 'inherit'
		},
		html: {
			scrollBehavior: 'smooth',
			lineHeight: 1.5,
			letterSpacing: '0.0125rem'
		},
		body: {
			bg: 'surface',
			color: 'default'
		},
		'*:focus': {
			boxShadow: 'none !important'
		}
	}
}

export default styles
