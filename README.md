# Chat Rooms Application

A simple chat application that allows users to perform CRUD operations on chat rooms using HTMX, without page reloads. This application simulates the backend with JavaScript functions to handle the logic.

## Features

1. **Chat Room CRUD**:
   - Create new chat rooms with unique names.
   - Edit room names (only for the creator).
   - Delete chat rooms (only for the creator).
   - View a list of available chat rooms and "join" them.
2. **HTMX Integration**:

   - All CRUD operations (create, read, update, delete) are handled asynchronously with HTMX, providing a smooth user experience.
   - Dynamic update of chat rooms and messages without full page reloads.

3. **Responsive Layout**:
   - The layout is responsive, adjusting between desktop and mobile screens.
   - Chat rooms are displayed on the left, and the messages section is displayed on the right.

## File Structure

/chat-room

- index.html - Main HTML file.
- static/
  - css/
    - style.css - CSS file for styling the playground and elements
  - js/
    - script.js - JavaScript for handling the logic and HTMX requests
- README.md - This file

## Installation

Follow these steps to set up and run the project:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/htmx-chat-rooms.git
cd htmx-chat-rooms
```

### 2. Set up a local server

Since this is a static application, you can run it with any simple HTTP server:

1. npm install -g live-server
2. live-server
