notifications = document.querySelectorAll('.nottifications')
notificationsUnread = document.querySelectorAll('.unread')
setAllReadButton = document.getElementById('set-all-btn')
redDot = document.querySelectorAll('#red-dot')
notificationsNumber = document.getElementById('notifications-number')

notificationsNumber.innerHTML = notificationsUnread.length

//dodanie kropek do klasy unread
for (var i = 0; i < notificationsUnread.length; i++) {
	notificationsUnread[i].querySelector('.dot').innerHTML = '<i id="red-dot" class="fa-solid fa-circle"></i>'
	redDot = document.querySelectorAll('#red-dot')
	console.log(redDot)
}
// wyczyszcenie nieprzeczytanych
function setAllRead() {
	for (var i = 0; i < notifications.length; i++) {
		notifications[i].classList.remove('unread')
	}
	for (var i = 0; i < redDot.length; i++) {
		redDot[i].style.display = 'none'
	}

	notificationsUnread = document.querySelectorAll('.unread')
	notificationsNumber.innerHTML = notificationsUnread.length
}

//czyszcenie samodzielnie
for (var i = 0; i < notificationsUnread.length; i++) {
	setRead(i)
	function setRead(i) {
		notificationsUnread[i].addEventListener('click', e => {
			notificationsUnread[i].querySelector('.dot').style.display = 'none'
			notificationsUnread[i].classList.remove('unread')
			notificationsUnreadRest = document.querySelectorAll('.unread')
			notificationsNumber.innerHTML = notificationsUnreadRest.length
		})
	}
}

setAllReadButton.addEventListener('click', setAllRead)
