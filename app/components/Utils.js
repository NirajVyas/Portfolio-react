export default class Utils {

	constructor(extensions = {}) {
		this.history = [];
		this.historyIndex = 0;
	}

	addCommandToHistory(input) {
		this.history.push(input);
		this.historyIndex = this.history.length;
	}

	getPrevCommand() {
		return this.history[--this.historyIndex];
	}

	getNextCommand() {
		return this.history[++this.historyIndex];
	}

	hasPrevCommand() {
		return this.historyIndex !== 0;
	}

	hasNextCommand() {
		return this.historyIndex !== this.history.length - 1;
	}

	getDate() {
		const date=new Date();

		const month= ("0" + (date.getMonth()+1)).slice(-2);
		const hours = ("0" + date.getHours()).slice(-2);
		const minutes = ("0" + date.getMinutes()).slice(-2);
		const seconds = ("0" + date.getSeconds()).slice(-2);
		const day = date.getDay();
		const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		const dates = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

		const converted_date = `${dates[parseInt(day)]} ${months[parseInt(month)-1]} ${day} ${hours}:${minutes}:${seconds}` 

		return converted_date;
	}

}