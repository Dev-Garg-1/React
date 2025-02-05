import { createRoot } from "react-dom/client";
import App from './App.jsx'

// function MyApp() {
//   return (
//     <div>
//       <h1>custom app !</h1>
//     </div>
//   )
// }
//
//can be passed in the render function as <MyApp /> and as MyApp()

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }
//
//the above object is not in the correct format which can be passed to the render function of viteReact

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     visit google
//   </a>
// );

// const anotherUser = 'Dev Garg'

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_blank" },
//   "click me to visit google",
//    anotherUser
// );

createRoot(document.getElementById("root")).render(
  <App />
);
