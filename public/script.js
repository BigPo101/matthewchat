// Connect to the Socket.IO server
const socket = io();

// DOM elements
const messageForm = document.getElementById('message-form');
const usernameInput = document.getElementById('input-username');
const messageInput = document.getElementById('input-message');
const messagesList = document.getElementById('messages');

// Listen for "chat message" event
socket.on('chat message', function(data) {
  const { username, message } = data;
  const li = document.createElement('li');
  li.innerHTML = `<strong>${username}:</strong> ${message}`;
  messagesList.appendChild(li);
});

// Submit message form
messageForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = usernameInput.value;
  const message = messageInput.value;
  if (username && message) {
    // Send username and message to the server
    socket.emit('chat message', { username, message });
    messageInput.value = '';
  }
});