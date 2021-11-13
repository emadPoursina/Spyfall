/**
 * Dependencies
 */
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require('path');

/**
 * Important variables
 */
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const PORT = process.env.PORT || 3000;

/**
 * Configures
 */
app.set('port', PORT);

/**
 * Middlewares
 */


/**
 * Render build production
 */
app.use(express.static(path.join(__dirname, '../public')));

io.on("connection", (socket) => {
	console.log('new connection.');
});

httpServer.listen(PORT, () => {
	console.log(`Start listening on http://localhost/${PORT}.`);
});