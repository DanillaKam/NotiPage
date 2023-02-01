const notifications = document.querySelectorAll('.nottifications')
let notificationsUnread = document.querySelectorAll('.unread')
const setAllReadButton = document.getElementById('set-all-btn')
const redDot = document.querySelectorAll('#red-dot')
const notificationsNumber = document.getElementById('notifications-number')

const showActualNotiNumber = () => {
	let notificationsUnread = document.querySelectorAll('.unread')
	notificationsNumber.innerHTML = notificationsUnread.length
}

const addRedDot = () => {
	notificationsUnread.forEach(noti => {
		noti.querySelector('.dot').innerHTML = '<i id="red-dot" class="fa-solid fa-circle"></i>'
	})
}
const setAllRead = () => {
	notificationsUnread = document.querySelectorAll('.unread')
	notificationsUnread.forEach(noti => {
		noti.classList.remove('unread')
		noti.querySelector('.dot').innerHTML = ''
	})
	notificationsNumber.innerHTML = 0
}
const setUnread = () => {
	notificationsUnread.forEach(noti => {
		noti.addEventListener('click', () => {
			noti.classList.remove('unread')
			showActualNotiNumber()
			noti.querySelector('.dot').innerHTML = ''
		})
	})
}
showActualNotiNumber()
addRedDot()
setUnread()
setAllReadButton.addEventListener('click', setAllRead)
