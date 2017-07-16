class Message {
	constructor (id, sender, receiver, text) {
		this.id = id;
		this.sender = sender;
		this.receiver = receiver;
		this.text = text;
	}
}

// Something is being conceived :)
let messages = [
	new Message(0, 1, 2, 'Hello and let\'s drink!'),
	new Message(1, 2, 1, 'Hello! I just wanted to do it!'),
	new Message(2, 0, 1, 'Can I go with you?'),
	new Message(3, 1, 0, 'Of course! And call Bannister')
];

module.exports = {
	newMessage (data) {
		return new Message(Date.now(), data.sender, data.receiver, data.text);
	},

	findMessage (id) {
		return messages.find(message => message.id == id);
	},

	findSender (sender) {
		return messages.filter(message => message.sender == sender);
	},

	addMessage (message) {
		messages.push(message);
	},

	deleteMessage (id) {
		messages = messages.filter(message => message.id !== id);
	},

	updateMessage (id, props) {
		let message = module.exports.findMessage(id);
		for (let prop in props) {
			if (message.hasOwnProperty(prop)) {
				message[prop] = props[prop];
			}
		}
		return message;
	}
};