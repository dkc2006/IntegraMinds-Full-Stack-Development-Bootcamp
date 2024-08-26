<!-- 1. Resume HTML & CSS --------------------------------
2. Timetable --------------------------------
3. Sticky --------------------------------
4. Chat Pseudo Element --------------------------------
5. Register form --------------------------------
6. Whatsapp Message
7. Link playing with css --------------------------------
8. Dark/Light --------------------------------
9. Github committed --------------------------------
10. Example 1 [table] --------------------------------
11. Color code --------------------------------
12. Log buttons --------------------------------
13. Grid Example
14. Flex Example --------------------------------
15. Google Home Example --------------------------------
16. Resume JSON --------------------------------
17. Working with Truthy & Falsy --------------------------------------------------------
18. Playing with Variable --------------------------------------------------------
19. Playing with console --------------------------------
20. Working with Array [JS] --------------------------------------------------------
21. Multi Dimensional Array --------------------------------
22. Medium.com Example ----------------------------------------------------------------
23. Two Errors --------------------------------
24. Async & Await - JSON Placeholder --------------------------------
25. querySelector ----------------------------------------------------------------
26. appendChild ---------------------------------------
27. Remove Element ------------------------------------------
28. setAttribute ----------------------------------------------------------------
29. Toggle ----------------------------------------------------------------
30. Updating the color using javascript ------------------------------------------------
31. Working with Mouse Event Listener --------------------------------
32. Try this api --------------------------------
    Main URL: https://jsonplaceholder.typicode.com/ -------------------------------- - JSON Placeholder - 1 (users) - https://jsonplaceholder.typicode.com/users -------------------------------- - JSON Placeholder - 1 (comments) - https://jsonplaceholder.typicode.com/comments -------------------------------- - JSON Placeholder - 1 (photos) - https://jsonplaceholder.typicode.com/photos -------------------------------- - JSON Placeholder - 1 (todos) - https://jsonplaceholder.typicode.com/todos -------------------------------------- - JSON Placeholder - 1 (albums) - https://jsonplaceholder.typicode.com/albums -----------------------------------
33. Normal Function & Arrow Functions [No Arguments, With Arguments, With Return, Implicit Return] -------------------------------- -->

Exercise # 1: User Component
Exercise # 2: List the users

Exercise #3:
https://www.npmjs.com/package/json-server

Exercise #4:

data show in server

https://reactrouter.com/en/main/start/tutorial

Step 1: Install React Router Dom
npm install react-router-dom --save

        Ref Link: https://reactrouter.com/en/main/start/tutorial

        Step 2: createBrowserRouter, RouterProvider import from react-router-dom
        import { createBrowserRouter, RouterProvider } from "react-router-dom";

        Step 3: Create a router object
        const router = createBrowserRouter([
          {
            "path": "/",
            "element": <div>Home Page</div>
          }
        ];

---

Step 3: Create a router object
const router = createBrowserRouter([
{
"path": "/",
"element": <div>Home Page</div>
}
];

        Step 4: Pass the router object to RouterProvider
        <RouterProvider router={router} />

        Step 5: Create a navigation bar
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>

---

Step 5: Create a navigation bar

<nav>
<ul>
<li>
<a href="/">Home</a>
</li>
<li>
<a href="/users">Users</a>
</li>
</ul>
</nav>

1.

import { createBrowserRouter, RouterProvider } from "react-router-dom";
Sivaraj S
12:15 PM 2.

const router = createBrowserRouter([
{
path: "/",
element: <div>Home Page</div>,
},
{
path: "/users",
element: <UsersList />,
},
]); 3.

<nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router} />

- Parent to child as props

https://react.dev/learn/passing-data-deeply-with-context

- Spread Operator
- Rest Operator
- concat
- Array Destr....

theme contexter

- use Memo
- use ref
- context
- routing
