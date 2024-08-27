### Markdown Content for Your Assignment

Creating a Markdown file named `exercise.md` with the following content:

````markdown
# Exercise 0.4: New Note Diagram

```mermaid
sequenceDiagram
    participant user as User
    participant browser as Browser
    participant server as Server

    user->>browser: Write new note and click Save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 Found (redirect to /notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document with updated notes list
    deactivate server

    Note right of browser: The browser receives the updated notes list from the server and displays it to the user
```
````

# Exercise 0.5: Single Page App Diagram

```mermaid
sequenceDiagram
    participant user as User
    participant browser as Browser
    participant server as Server

    user->>browser: Go to https://studies.cs.helsinki.fi/exampleapp/spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The JavaScript code is executed in the browser and loads JSON data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data with notes
    deactivate server

    Note right of browser: JSON data is processed and notes are displayed on the page
```

# Exercise 0.6: New Note in Single Page App Diagram

```mermaid
sequenceDiagram
    participant user as User
    participant browser as Browser
    participant server as Server

    user->>browser: Write new note and click Save
    Note right of browser: The browser creates a new note using JavaScript and displays it locally

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message": "note saved successfully"}
    deactivate server

    Note right of browser: After receiving the response from the server, the UI is updated
```

I have completed exercises 0.4, 0.5, and 0.6 as part of this assignment. The diagrams were created using the Mermaid syntax and have been tested to ensure proper rendering on GitHub.

I encountered some challenges with the initial rendering of the diagrams, but resolved them by consulting the Mermaid documentation. All links and visual elements have been verified for accuracy.

Thank you for reviewing my submission. I look forward to any feedback you may have.
