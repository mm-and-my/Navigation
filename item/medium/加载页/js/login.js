function loading() {
	const percentBox = document.querySelector(".loading_number_percent");
	const bannerBox = document.querySelector(".loading_banner_move");
	let percent = 0;
	const timer = setInterval(() => {
		// percent += Math.ceil(Math.random() * (25 - 10) + 10);
		percent ++;
		if (percent > 100) {
			percent = 100;
			clearInterval(timer);
		}
		percentBox.innerHTML = percent + '%';
		bannerBox.style.left = (percent - 10) + '%';
	// }, 1000);
	}, 30);
}

loading();