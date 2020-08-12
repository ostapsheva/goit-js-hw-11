const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const refs = {
	body: document.querySelector("body"),
	startBtn: document.querySelector('button[data-action="start"]'),
	stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
let changeColor = null;

refs.startBtn.addEventListener("click", () => {
	changeColor = setInterval(() => {
		const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
		refs.body.style.background = colors[colorIndex];
	}, 1000);
	refs.startBtn.disabled = true;
});
refs.stopBtn.addEventListener("click", () => {
	clearInterval(changeColor);
	refs.startBtn.disabled = false;
});
