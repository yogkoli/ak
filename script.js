function sendMessage() {
  var userInput = document.getElementById("user-input");
  var messageContainer = document.getElementById("message-container");
  
  var userMessage = userInput.value.trim();
  if (userMessage !== "") {
    // Display user message
	var ht = userInput.scrollHeight + "px";
	
    messageContainer.innerHTML += '<div class="message user-message"><textarea id="mtxtarea" readonly>' + userMessage + '</textarea></div>';

    // Send user message to the server and get the response
    var response = getChatGPTResponse(userMessage);
    
    // Display ChatGPT response
    messageContainer.innerHTML += '<div class="message chatgpt-response">' + response + '</div>';
    
    // Clear user input
    userInput.value = "";
	
	// Auto-adjust textarea height
    adjustTextareaHeight(userInput);
	mtxtarea.style.height = ht;
    
    // Scroll to the bottom of the chat window
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}

function getChatGPTResponse(message) {
  // Send the user message to the server and get the response using AJAX or fetch API
  // Implement the server-side logic to generate the ChatGPT response
  
  // For demonstration purposes, return a random response
  var responses = ["Hello!", "How can I assist you?", "Nice to meet you!"];
  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}


function adjustTextareaHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}