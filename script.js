// Connect to the Socket.IO server
const socket = io();

// DOM elements
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('input-message');
const messagesList = document.getElementById('messages');

// Listen for "chat message" event
socket.on('chat message', function(message) {
  const li = document.createElement('li');
  li.textContent = message;
  messagesList.appendChild(li);
});

// Submit message form
messageForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = messageInput.value;
  if (message) {
    // Send message to the server
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});
