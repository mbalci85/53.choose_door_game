let doorImage1 = document.getElementById('door_a');
let doorImage2 = document.getElementById('door_b');
let doorImage3 = document.getElementById('door_c');

let flyDoorPath = 'findfly.png';
let oceanDoorPath = 'ocean.png';
let forestDoorPath = 'forest.png';

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = 'door_closed.png';

let currentlyPlaying = true;

let startButton = document.getElementById('start');

const isFly = (door) => {
	if (door.src.includes(flyDoorPath)) {
		return true;
	} else {
		return false;
	}
};

const isClicked = (door) => {
	console.log(door.src);
	if (door.src.includes(closedDoorPath)) {
		return false;
	} else {
		return true;
	}
};

const playDoor = (door) => {
	numClosedDoors--;
	if (numClosedDoors === 0) {
		gameOver('win');
	} else if (isFly(door)) {
		gameOver('lose');
	}
};

const randomFindDoorGenerator = () => {
	let findDoor = Math.floor(Math.random() * numClosedDoors);
	if (findDoor == 0) {
		openDoor1 = flyDoorPath;
		openDoor2 = oceanDoorPath;
		openDoor3 = forestDoorPath;
	} else if (findDoor == 1) {
		openDoor1 = forestDoorPath;
		openDoor2 = flyDoorPath;
		openDoor3 = oceanDoorPath;
	} else if (findDoor == 2) {
		openDoor1 = oceanDoorPath;
		openDoor2 = forestDoorPath;
		openDoor3 = flyDoorPath;
	}
};

doorImage1.onclick = () => {
	if (currentlyPlaying && !isClicked(doorImage1)) {
		doorImage1.src = openDoor1;
		playDoor(doorImage1);
	}
	console.log('img1');
	console.log(doorImage1.src);
	console.log(doorImage1);
};
doorImage2.onclick = () => {
	if (currentlyPlaying && !isClicked(doorImage2)) {
		doorImage2.src = openDoor2;
		playDoor(doorImage2);
	}
	console.log('img2');
};
doorImage3.onclick = () => {
	if (currentlyPlaying && !isClicked(doorImage3)) {
		doorImage3.src = openDoor3;
		playDoor(doorImage3);
	}
	console.log('img3');
};
startButton.onclick = () => {
	if (!currentlyPlaying) {
		startRound();
	}
};

const startRound = () => {
	numClosedDoors = 3;
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	startButton.innerHTML = 'Good luck!';
	currentlyPlaying = true;
	randomFindDoorGenerator();
};

const gameOver = (status) => {
	if (status == 'win') {
		startButton.innerHTML = 'You win! Play again?';
	} else {
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
};

startRound();
