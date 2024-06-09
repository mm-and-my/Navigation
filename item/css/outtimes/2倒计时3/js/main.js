/*  Countdown
	/*----------------------------------------*/
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">天</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">时</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">分</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">秒</span></div>'));
		});
	});