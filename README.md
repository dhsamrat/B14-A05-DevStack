# Dev Stack 🚀

**Dev Stack** is a responsive web application built with React and TypeScript that helps developers explore different technologies and create their own personalized development stack.

Users can browse available technologies, view technology details, and add or remove technologies from their personal stack.

## 🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* React Toastify
* Vite
* JSON

## ✨ Features

### 1. Explore Technologies

Users can explore different technologies from various categories such as:

* Frontend
* Backend
* Database
* Development Tools

Each technology includes useful information such as:

* Technology name
* Description
* Category
* Rating
* Difficulty level

### 2. Build Your Own Stack

Users can create their own development stack by adding technologies from the available technology list.

Selected technologies are displayed in the **My Stack** section.

### 3. Manage Your Stack

Users can easily manage their personal stack.

Available actions include:

* Add a technology to the stack
* Remove an individual technology
* Remove all selected technologies
* View the current number of selected technologies

Toast notifications are used to provide feedback when users perform different actions.

### 4. Responsive Design

The application is fully responsive and works smoothly across:

* Desktop
* Tablet
* Mobile devices

Tailwind CSS is used to create the responsive and modern user interface.

## 📂 Project Structure

```text
Dev-Stack/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── TechnologyCard.tsx
│   │   └── MyStack.tsx
│   │
│   ├── data/
│   │   └── data.json
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> The exact folder and file names may vary depending on the project implementation.

## ⚙️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Step 2: Go to the Project Directory

```bash
cd Dev-Stack
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Development Server

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## 🧠 React Questions & Answers

### I. What is JSX, and why is it used in React?

**Ans:** JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. React uses JSX because it makes creating and understanding user interfaces easier.

### II. What is the difference between props and state?

**Ans:** Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the component to re-render.

### III. What does the `useState` hook do, and where did you use it in this project?

**Ans:** `useState` is a React Hook used to create and manage data that can change over time.

In this project, I used `useState` to manage:

* Technology data
* Selected technologies
* Loading state
* Error state

Example:

```tsx
const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
```

### IV. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Ans:** `useEffect` is a React Hook used to perform side effects after a component renders.

I used `useEffect` to load the technology data from `data.json` when the application starts.

Example:

```tsx
useEffect(() => {
  // Load technology data
}, []);
```

### V. Why does every item in a `.map()` list need a unique `key` prop?

**Ans:** React uses the `key` prop to uniquely identify each item in a list. It helps React understand which items have been added, removed, or changed.

In this project, I used `tech.id` as the unique key.

```tsx
{technologies.map((tech) => (
  <TechnologyCard
    key={tech.id}
    tech={tech}
  />
))}
```

### VI. What is conditional rendering? Show one place you used it.

**Ans:** Conditional rendering means displaying different UI elements based on a specific condition.

I used conditional rendering in `MyStack.tsx`.

If no technology is selected, the application displays **"Your stack is empty."** Otherwise, it displays the selected technologies.

```tsx
{selectedTech.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  // Display selected technologies
)}
```

### VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** A parent component can pass data to a child component using **props**.

In this project, I pass `tech`, `isSelected`, and `onAdd` to the `TechnologyCard` component.

```tsx
<TechnologyCard
  tech={tech}
  isSelected={isSelected}
  onAdd={handleAdd}
/>
```

The child component can communicate back to the parent by calling a function received through props.

For example:

```tsx
<button onClick={() => onAdd(tech)}>
  Add to Stack
</button>
```

Here, the parent provides the `onAdd` function, and the child calls it when the user clicks the **Add to Stack** button.

## 📌 Key React Concepts Used

This project helped me practice several important React concepts:

* JSX
* Components
* Props
* State
* `useState`
* `useEffect`
* Conditional Rendering
* `.map()`
* Key Props
* Event Handling
* Parent-to-Child Data Passing
* Child-to-Parent Communication

## 🎯 Project Purpose

The main purpose of this project is to practice building a modern React application using **TypeScript, Tailwind CSS, component-based architecture, state management, and JSON data**.

It also demonstrates how users can interact with application data and dynamically manage their own technology stack.

## 👨‍💻 Author

**Delowar Hossain Samrat**

CSE Student | React & TypeScript Learner

---

⭐ If you find this project useful, consider giving the repository a star!
