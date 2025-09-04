# Todo Manager - React Day 5 Mini Project

A simple Todo Manager web application built with React (Vite) and Tailwind CSS.

## Features

- ✅ Add new todos
- ✅ Delete todos
- ✅ Mark todos as completed (checkbox toggle)
- ✅ Filter todos: All | Active | Completed
- ✅ Conditional rendering with "No todos" message
- ✅ Uses `.map()` with unique `key` props
- ✅ Clean Tailwind CSS styling

## Project Structure

```
src/
├─ App.jsx
├─ main.jsx
├─ index.css
└─ components/
   └─ TodoManager.jsx
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Functional components with hooks (`useState`)

## Key Concepts Demonstrated

- **State Management**: Using `useState` for todos, new todo input, and filter
- **Array Methods**: `.map()` for rendering todo list, `.filter()` for filtering
- **Conditional Rendering**: Showing different messages based on todo count and filter
- **Event Handling**: Form submission, checkbox changes, button clicks
- **Unique Keys**: Each todo item has a unique `key` prop using `Date.now()`
- **Component Structure**: Clean separation of concerns with a dedicated TodoManager component

