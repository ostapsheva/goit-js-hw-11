const refs = {
	timerDate: document.querySelector(".timerDate"),
	days: document.querySelector('span[data-value="days"]'),
	hours: document.querySelector('span[data-value="hours"]'),
	mins: document.querySelector('span[data-value="mins"]'),
	secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate;
		this.intervalId = null;
	}

	start() {
		this.intervalId = setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = this.targetDate - currentTime;
			this.updateTimer(deltaTime);
		}, 1000);
	}

	updateTimer(time) {
		const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
		const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
		const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

		refs.days.textContent = days;
		refs.hours.textContent = hours;
		refs.mins.textContent = mins;
		refs.secs.textContent = secs;
	}

	pad(value) {
		return String(value).padStart(2, "0");
	}
}

const newTimer = new CountdownTimer({
	selector: "#timer-1",
	targetDate: new Date("Sep 1, 2020"),
});

refs.timerDate.textContent = `До данной даты "${newTimer.targetDate.getDate()}/${
	newTimer.targetDate.getMonth() + 1
}/${newTimer.targetDate.getFullYear()}" осталось:`;

newTimer.start();
