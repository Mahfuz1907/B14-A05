# Website Description

## Name

Development Stack Website

## Description

A dynamic, responsive React application designed to manage and display different development tools.

---

## Technologies Used

- **Language:** Typescript, CSS
- **Framework:** Tailwind CSS
- **Library:** Daisy UI, React.tsx, React Toastify, React Icons
- **Data Source:** Local JSON dataset loaded via Fetch API

---

## Key Features

- **Dynamic Data Fetching:** Loads development tools data from fake api.
- **Responsive:** Website is fully responsive along mobile, tablet and desktop devices.
- **Adding and Removing Tools:** By clicking the add button the tools are added to the stack and after finishing it can be removed also.

---

# Question & Answers

## 1. What is JSX, and why is it used in React?

JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes component layout declarative, visual, and significantly easier to read and maintain.

## 2. What is the difference between props and state?

- **Props:** Read-only data passed from a parent component down to a child component to configure it. Props cannot be mutated by the receiving child.
- **State:** Dynamic, internal data created and managed within a component that can change over time. When state changes, React re-renders the component.

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows functional components to store and update local state variables. In this project, it was used to create stackArray and display them in the stack section.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook performs side effects in functional components, such as data fetching, subscriptions, or DOM updates. It was required to run the asynchronous `fetch()` call once when the component initially mounts to load the JSON dataset into state without blocking the initial UI render.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` prop provides a unique identity to list elements. React uses keys during its Virtual DOM reconciliation process to track which specific items were added, updated, or removed, avoiding unnecessary DOM re-renders.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering is displaying specific UI components or text based on a condition. In this project, it was used to show an "Empty Stack" when the item list contains zero items, also after clicking the 'Add to Stack' button when the button became disabled it showed 'Added to Stack'.
