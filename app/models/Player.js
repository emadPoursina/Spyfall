const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	playerStatus: {
		type: Boolean,
		default: false,
	}
});

playerSchema.methods.isReady = function () {
	return this.playerStatus;
}

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;