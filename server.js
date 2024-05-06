const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Handle chat messages
  socket.on('chat message', (data) => {
    console.log('Received message:', data);
    // Broadcast the message to all connected clients
    io.emit('chat message', data);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});