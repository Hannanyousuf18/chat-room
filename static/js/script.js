let rooms = [
  { id: 1, name: "Room 1", creator: "user1", messages: [] },
  { id: 2, name: "Room 2", creator: "user2", messages: [] },
];

function renderRooms() {
  const roomList = document.getElementById("room-list");
  roomList.innerHTML = "";

  if (rooms.length === 0) {
    roomList.innerHTML = "<li>No rooms available</li>";
  } else {
    rooms.forEach((room) => {
      const roomItem = document.createElement("li");
      roomItem.setAttribute("id", `room-${room.id}`);
      roomItem.innerHTML = `
                ${room.name}
                <button onclick="editRoom(${room.id})">Edit</button>
                <button onclick="deleteRoom(${room.id})">Delete</button>
                <button onclick="joinRoom(${room.id})">Join</button>
            `;
      roomList.appendChild(roomItem);
    });
  }
}

document.getElementById("create-room-form").onsubmit = function (event) {
  event.preventDefault();
  const roomName = document.getElementById("room-name").value.trim();

  if (roomName === "") {
    alert("Please enter a room name.");
    return;
  }

  const newRoom = {
    id: rooms.length + 1,
    name: roomName,
    creator: "user1",
    messages: [],
  };

  rooms.push(newRoom);
  renderRooms();
  document.getElementById("room-name").value = "";
};

function editRoom(roomId) {
  const room = rooms.find((r) => r.id === roomId);
  if (room) {
    const newName = prompt("Enter new room name:", room.name);
    if (newName) {
      room.name = newName;
      renderRooms();
    }
  }
}

function deleteRoom(roomId) {
  rooms = rooms.filter((room) => room.id !== roomId);
  renderRooms();
}

function renderMessages(roomId) {
  const room = rooms.find((r) => r.id === roomId);
  const messagesContainer = document.getElementById("messages");
  messagesContainer.innerHTML = "";

  if (room) {
    room.messages.forEach((message) => {
      const messageElement = document.createElement("div");
      messageElement.textContent = `${message.username}: ${message.content}`;
      messagesContainer.appendChild(messageElement);
    });
  }
}

function joinRoom(roomId) {
  const room = rooms.find((r) => r.id === roomId);
  if (room) {
    document.getElementById("messages-section").style.display = "block";
    renderMessages(roomId);

    document.getElementById("send-message-form").onsubmit = function (event) {
      event.preventDefault();
      const messageContent = document.getElementById("message-content").value;
      const newMessage = { username: "user1", content: messageContent };
      room.messages.push(newMessage);
      renderMessages(roomId);
      document.getElementById("message-content").value = "";
    };
  }
}

renderRooms();
