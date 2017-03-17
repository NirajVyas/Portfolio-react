export default class Utils {

	constructor(extensions = {}) {
		this.prevCommands = [];
		this.prevCommandsIndex = 0;
	}

	executeCommand(input) {
		console.log("executeCommand: ", input)
		this.prevCommands.push(input);
		this.prevCommandsIndex = this.prevCommands.length;
	}

	getPrevCommand() {
			return this.prevCommands[--this.prevCommandsIndex];
	}

	getNextCommand() {
			return this.prevCommands[++this.prevCommandsIndex];
	}

	hasPrevCommand() {
			console.log("hasPrevCommand: ", this.prevCommands)
			return this.prevCommandsIndex !== 0;
	}

	hasNextCommand() {
			return this.prevCommandsIndex !== this.prevCommands.length - 1;
	}

}