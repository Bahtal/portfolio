document.addEventListener('DOMContentLoaded', () => {
	const theme = document.getElementById('theme')
	const wrapper = document.querySelector('.wrapper')
	const links = document.querySelectorAll('.links')
	const logo = document.querySelector('.logo-title')
	const sectionTitle = document.querySelector('.section__title')
	const sectionSpan = document.querySelector('.section__span')
	const footerText = document.querySelector('.footer__bottom-text')

	document.addEventListener('mousemove', (event) => {
    const sectionInner = document.querySelector('.section__inner');
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;
		
    sectionInner.style.transform = `translate(${x * -35}px, ${y * -25}px)`;
});

	let clickCount = 0

	theme.addEventListener('click', () => {
		clickCount++
		if(clickCount === 0){
			wrapper.style.backgroundImage = "url('./../img/2.jpg')";
			links.forEach(link => {
				link.style.color = "#02a48b"
		})
			logo.style.color = "#02a48b"
			sectionTitle.style.color = '#fd0085'
			sectionTitle.style.textShadow = '3px 3px 15px #6b1c35'
			sectionSpan.style.textShadow = '2px 3px 10px #6b1c35'
			footerText.style.color = '#02a48b'

			document.documentElement.style.setProperty('--color-1', '#02a48b')
			document.documentElement.style.setProperty('--color-2', '#fd0085')
			document.documentElement.style.setProperty('--color-3', '#02443a')
			document.documentElement.style.setProperty('--color-4', '#770129')
		}else if(clickCount === 1) {
			wrapper.style.backgroundImage = "url('./../img/1.jpg')";
			links.forEach(link => {
				link.style.color = "#e0d29d"
		})
			logo.style.color = "#e0d29d"
			sectionTitle.style.color = '#e0d29d'
			sectionTitle.style.textShadow = '3px 3px 15px #f7c200'
			sectionSpan.style.textShadow = '2px 3px 10px #e0d29d'
			footerText.style.color = '#e0d29d'

			document.documentElement.style.setProperty('--color-1', '#e0d29d')
			document.documentElement.style.setProperty('--color-2', '#ff4e4e')
			document.documentElement.style.setProperty('--color-3', '#00aaff')
			document.documentElement.style.setProperty('--color-4', '#ffc928')
		}else if(clickCount === 2) {
			wrapper.style.backgroundImage = "url('./../img/7.jpg')";
			links.forEach(link => {
				link.style.color = "#1e9ebd"
		})
			logo.style.color = "#1e9ebd"
			sectionTitle.style.color = '#205e6d'
			sectionTitle.style.textShadow = '3px 3px 15px rgb(83, 217, 255)'
			sectionSpan.style.textShadow = '2px 3px 10px rgb(0, 115, 139)'
			footerText.style.color = 'rgb(0, 255, 255)'

			document.documentElement.style.setProperty('--color-1', '#1e9ebd')
			document.documentElement.style.setProperty('--color-2', '#0033fe')
			document.documentElement.style.setProperty('--color-3', '#f9f9f9')
			document.documentElement.style.setProperty('--color-4', '#00ffd9')
		}else if(clickCount === 3){
			wrapper.style.backgroundImage = "url('./../img/6.jpg')";
			links.forEach(link => {
				link.style.color = "#fe7062"
			
		})
			logo.style.color = "#fe7062"
			sectionTitle.style.color = '#0e2a2b'
			sectionTitle.style.textShadow = '3px 3px 15px #ffacac'
			sectionSpan.style.textShadow = '2px 3px 10px #ffacac'
			footerText.style.color = '#fe7062'

			document.documentElement.style.setProperty('--color-1', '#cb1e1e')
			document.documentElement.style.setProperty('--color-2', '#9c63ff')
			document.documentElement.style.setProperty('--color-3', '#fe7062')
			document.documentElement.style.setProperty('--color-4', '#cdbe69')
		}else if(clickCount === 4){
			wrapper.style.backgroundImage = "url('./../img/8.jpg')";
			links.forEach(link => {
				link.style.color = "#f3bd5d"
			
		})
			logo.style.color = "#f3bd5d"
			sectionTitle.style.color = '#434343'
			sectionTitle.style.textShadow = '3px -2px 1px #ffb300'
			sectionSpan.style.textShadow = '4px -1px 1px #ffb300'
			footerText.style.color = '#f3bd5d'

			document.documentElement.style.setProperty('--color-1', '#f19b07')
			document.documentElement.style.setProperty('--color-2', '#506f46')
			document.documentElement.style.setProperty('--color-3', '#f3bd5d')
			document.documentElement.style.setProperty('--color-4', '#616161')
			clickCount = -1
		}
		
	})
	

	})