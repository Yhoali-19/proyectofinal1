// Script para enviar un mensaje
document.getElementById('sendMessageBtn').addEventListener('click', function () {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
  
    if (messageText !== "") {
      const messageContainer = document.createElement('div');
      messageContainer.classList.add('message');
  
      const messageContent = document.createElement('p');
      messageContent.innerHTML = `<strong>@nombredeusuario:</strong> ${messageText}`;
  
      messageContainer.appendChild(messageContent);
  
      // Agregar el mensaje al área de mensajes
      document.querySelector('.chat-messages').appendChild(messageContainer);
  
      // Limpiar el input después de enviar el mensaje
      messageInput.value = "";
      messageInput.focus();
    }
  });
  