## Introduction to React

React is a popular JavaScript library for building user interfaces, especially single-page applications where you need a responsive and dynamic user experience. The key concepts in React include components, JSX, props, and state. Let's break these down and look at how you can start using React with a simple example.

### **1. Setting Up a React Application**

To start a new React project, you can use tools like Vite or Create React App. Here's how to set up a React application using Vite:

**Using Vite:**

```bash
npm create vite@latest part1 --template react
cd part1
npm install
npm run dev
```

The application will start at `http://localhost:5173/` by default.

**Using Create React App:**

```bash
npx create-react-app part1
cd part1
npm start
```

### **2. Basic React Component**

A React component is a JavaScript function or class that returns a React element, which describes how a section of the UI should appear.

**File: `src/App.jsx`**

```jsx
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

export default App;
```

**File: `src/main.jsx`**

```jsx
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### **3. JSX Syntax**

JSX (JavaScript XML) allows you to write HTML-like syntax directly in your JavaScript files. Under the hood, JSX is compiled to `React.createElement` calls.

**JSX Example:**

```jsx
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};
```

**Compiled JavaScript:**

```jsx
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, `Hello world, it is ${now.toString()}`),
    React.createElement("p", null, `${a} plus ${b} is ${a + b}`)
  );
};
```

### **4. Creating and Using Multiple Components**

Components can be nested within other components, and they can be reused multiple times.

**File: `src/App.jsx`**

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  );
};

export default App;
```

### **5. Props: Passing Data to Components**

Props (short for properties) allow you to pass data from one component to another.

**File: `src/App.jsx`**

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
```

### **6. Common Issues and Solutions**

- **Rendering Objects**: React cannot render objects directly. Ensure that any dynamic data is a string or number.

  **Incorrect:**

  ```jsx
  const App = () => {
    const friends = [
      { name: "Peter", age: 4 },
      { name: "Maya", age: 10 },
    ];

    return (
      <div>
        <p>{friends[0]}</p>
        <p>{friends[1]}</p>
      </div>
    );
  };
  ```

  **Correct:**

  ```jsx
  const App = () => {
    const friends = [
      { name: "Peter", age: 4 },
      { name: "Maya", age: 10 },
    ];

    return (
      <div>
        <p>
          {friends[0].name} is {friends[0].age} years old
        </p>
        <p>
          {friends[1].name} is {friends[1].age} years old
        </p>
      </div>
    );
  };
  ```

- **Component Naming**: React components should start with a capital letter. If a component name starts with a lowercase letter, React treats it as a built-in HTML element.

  **Incorrect:**

  ```jsx
  const footer = () => {
    return <div>Footer content</div>;
  };
  ```

  **Correct:**

  ```jsx
  const Footer = () => {
    return <div>Footer content</div>;
  };
  ```

- **Single Root Element**: Each component must return a single root element. Use fragments (`<>...</>`) to group elements without adding extra nodes to the DOM.

  **With Fragment:**

  ```jsx
  const App = () => {
    return (
      <>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Footer />
      </>
    );
  };
  ```

### **7. ESLint Warnings**

Sometimes you might see warnings from ESLint about missing prop types. To suppress these warnings, you can modify your `.eslintrc.cjs` file:

**File: `.eslintrc.cjs`**

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": 0,
  },
};
```
