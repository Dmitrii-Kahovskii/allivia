const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
	document.body.classList.toggle('no-scroll');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});

			// ВИДЕО
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-owerlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function(){
	function toggleOwerlay(event) {
		if (event.type === 'mouseLeave') {
			videoOverlay.classList.add('hidden');
		}	else {
				videoOverlay.classList.remove('hidden');
			}
	}

	if (videoFile.paused) {
		videoFile.play();
		videoBtnIcon.src = './img/acons/pause-icons.svg';


		videoOverlay.onmouseleave = toggleOwerlay;
		videoOverlay.onmouseenter = toggleOwerlay;
	} else {
		videoFile.pause();
		videoBtnIcon.src = './img/acons/playerplay.svg';
		videoOverlay.onmouseLeave = null;
		videoOverlay.onmouseenter = null;
	}
})

