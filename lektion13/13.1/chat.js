const chatroomDropdown = document.getElementById("chatroom-dropdown");
const chatContainer = document.getElementById("chat-container");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

// Funktion til at hente chatrum og tilføje dem til dropdown-menuen
function loadChatrooms() {
  fetch("https://beskedserver.azurewebsites.net/api/chatRum/")
    .then((response) => response.json())
    .then((data) => {
      chatroomDropdown.innerHTML = ""; // Ryd dropdown-menuen
      data.forEach((chatroom) => {
        const option = document.createElement("option");
        option.value = chatroom; // Antager at chatrum er navnene som strenge
        option.textContent = chatroom;
        chatroomDropdown.appendChild(option);
      });
    })
    .catch((error) =>
      console.error("Fejl ved indlæsning af chatrum: " + error)
    );
}

// Funktion til at hente og vise beskeder i det valgte chatrum
function loadMessages(chatroomId) {
  fetch(`https://beskedserver.azurewebsites.net/api/SoegBeskeder/${chatroom}`)
    .then((response) => response.json())
    .then((data) => {
      chatContainer.innerHTML = ""; // Ryd chat-container
      data.forEach((message) => {
        const messageElement = document.createElement("div");
        messageElement.textContent = `${message.ChatRum}: ${message.Tekst}`;
        chatContainer.appendChild(messageElement);
      });
    })
    .catch((error) =>
      console.error("Fejl ved indlæsning af beskeder: " + error)
    );
}

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedChatroom = chatroomDropdown.value;
  const messageText = messageInput.value;

  fetch("https://beskedserver.azurewebsites.net/api/Beskeder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ChatRum: selectedChatroom, Tekst: messageText }),
  })
    .then((response) => {
      if (response.ok) {
        // Besked oprettet med succes, opdater beskeder
        loadMessages(selectedChatroom);
        messageInput.value = ""; // Ryd beskedinput
      } else {
        console.error("Fejl ved oprettelse af besked");
      }
    })
    .catch((error) => console.error("Fejl ved oprettelse af besked: " + error));
});

chatroomDropdown.addEventListener("change", () => {
  const selectedChatroom = chatroomDropdown.value;
  loadMessages(selectedChatroom);
});

// Initialiser chatrum og beskeder
loadChatrooms();
