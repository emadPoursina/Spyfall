const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
	roomCode : {
		type: String,
		immutable: true,
		required: true,
	},
	admin: {
		type: Schema.Types.ObjectId,
		ref: 'Player',
		required: true,
		unique: true,
	}
});

const Room = new mongoose.model('Room', roomSchema);

module.exports = Room;