const sendButton = document.getElementById("sendButton");
const userInput = document.getElementById("userInput");
const messages = document.getElementById("messages");

const sessionId = '1234567890'; // Dialogflow session ID
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

sendButton.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (input) {
    const userMessage = createMessage("user-message", input);
    messages.appendChild(userMessage);
    messages.scrollTop = messages.scrollHeight;

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: input,
          languageCode: 'en-US'
        }
      }
    };

    sessionClient
      .detectIntent(request)
      .then(responses => {
        const response = responses[0];
        const aiMessage = createMessage("ai-message", response.queryResult.fulfillmentText);
        messages.appendChild(aiMessage);
        messages.scrollTop = messages.scrollHeight;
      })
      .catch(error => {
        console.error('Error during detectIntent:', error);
      });
  }
});

function createMessage(className, text) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(className);
  messageElement.innerText = text;
  return messageElement;
}
