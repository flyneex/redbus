const title = document.querySelectorAll('.faq_body')
const content = document.querySelectorAll('.faq_content')

for (let i = 0; i < title.length; i++) {
	title[i].addEventListener('click', () => {
		title[i].classList.toggle('active')
		content[i].classList.toggle('active')
	})
}

const cross = document.querySelector('.mobile_cross')
const bar = document.querySelector('.header_bar')
const menu = document.querySelector('.header')

bar.addEventListener('mousedown', () => {
	menu.classList.add('mobile_menu')
})
cross.addEventListener('mousedown', () => {
	console.log('1212')
	menu.classList.remove('mobile_menu')
})

const btn = document.querySelectorAll('.rent-modal')
const modal = document.getElementById('modal')
const close = document.querySelector('.modal_close')

btn.forEach(function (e) {
	e.addEventListener('mousedown', () => {
		modal.style.display = 'block'
	})
})
// close.addEventListener('mousedown', () => {
// 	modal.style.display = 'none'
// })
