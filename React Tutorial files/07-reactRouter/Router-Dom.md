### **React Router DOM - Overview**
**React Router DOM** is a popular library used for handling navigation in **React applications**. It enables **client-side routing**, allowing users to navigate between different pages **without refreshing the browser**.

---

## **1️⃣ Core Concepts of React Router DOM**
### ✅ **Client-side Routing**
Instead of making requests to the server for each new page, React Router updates the **UI dynamically** using JavaScript.

### ✅ **Single Page Application (SPA)**
React Router helps in creating **SPAs** where only components update instead of reloading the entire page.

### ✅ **Declarative Routing**
Routes are defined as components using JSX, making them easy to read and maintain.

---

## **2️⃣ Installation**
To use React Router, install it via npm or yarn:

```bash
npm install react-router-dom
```
or
```bash
yarn add react-router-dom
```

---

## **3️⃣ Important Components & Hooks**
### 📌 **Components**
#### **1. `<BrowserRouter>`**
- Wraps the entire application and enables **HTML5 history API** for navigation.

#### **2. `<Routes>` & `<Route>`**
- Defines the route structure.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
Here:
- `/` → Renders `<Home />`
- `/about` → Renders `<About />`

#### **3. `<Link>`**
- Provides **client-side navigation** without reloading the page.

```jsx
<Link to="/about">Go to About Page</Link>
```

#### **4. `<NavLink>`**
- Works like `<Link>` but allows active styling.

```jsx
<NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
  About
</NavLink>
```

#### **5. `<Navigate>`**
- Used for **programmatic redirection**.

```jsx
<Navigate to="/home" replace />
```

---

### 📌 **Hooks**
#### **1. `useNavigate()`**  
- Used for **programmatic navigation**.

```jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
};
```

#### **2. `useParams()`**  
- Retrieves **dynamic route parameters**.

```jsx
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
};
```

**Example Route:**  
`/user/123` → Displays **"User ID: 123"**  

#### **3. `useLocation()`**  
- Gets the **current URL location**.

```jsx
import { useLocation } from "react-router-dom";

const LocationComponent = () => {
  const location = useLocation();
  return <p>Current Path: {location.pathname}</p>;
};
```

#### **4. `useSearchParams()`**  
- Reads and updates **query parameters**.

```jsx
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  return (
    <div>
      <p>Query: {searchParams.get("q")}</p>
      <button onClick={() => setSearchParams({ q: "react" })}>
        Search React
      </button>
    </div>
  );
};
```

---

## **4️⃣ Use Cases**
🔹 **Multi-page applications** (Dashboards, Blogs, E-commerce)  
🔹 **Dynamic URL routing** (`/product/:id`)  
🔹 **Client-side authentication** (Protect routes with middleware)  
🔹 **Query parameter handling** (`/search?q=react`)  
🔹 **Nested routing** (Parent-child components)

---

## **5️⃣ Advanced Features**
🔹 **Protected Routes** – Restrict access to pages based on authentication  
🔹 **Lazy Loading** – Load routes dynamically using `React.lazy`  
🔹 **Scroll Restoration** – Maintain scroll position across navigation  

---

### **Conclusion**
React Router DOM is an essential tool for **building modern React applications** with seamless navigation. Its **hooks & components** make routing efficient, dynamic, and declarative.

Let me know if you need examples for advanced use cases! 🚀