## 📌 What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension that allows writing HTML-like code inside JavaScript.  
It makes the UI code easier to read and write.

**Why it is used:**
- Combines UI (HTML) with logic (JavaScript).
- Increases code readability.
- Compiles into JavaScript, which browsers can understand.

---

## 📌 What is the difference between State and Props?

- **State**  
  - Managed within the component.  
  - Mutable (can be updated).  
  - Used for data that changes over time.  

- **Props**  
  - Passed from parent to child components.  
  - Immutable (read-only).  
  - Used to pass data and functions.  

---

## 📌 What is the `useState` hook, and how does it work?

The `useState` hook lets functional components manage state.

**How it works:**
1. Import it:  
   ```js
   import { useState } from "react";