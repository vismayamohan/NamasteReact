import React from "react";
import ReactDOM from "react-dom/client";

// Nested Html
// const nestedElement = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm a h1 tag...!"),
//     React.createElement("h3", {}, "Hieeee... I'm h3 tag!!!"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h2", {}, "I'm a h2 tag...!"),
//     React.createElement("h4", {}, "Hieeee... I'm h4 tag!!!"),
//   ]),
// ]);

// React Element
// console.log(nestedElement);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!!!"
// );

// console.log(heading);

// JSX => Babel transpiled it to React.createElement => React.createElement => JS Object => renders to HTML element

const jsxHeading = (
  <h1 id="heading" className="head">
    Hello from JSX 🎀
  </h1>
);
const abc = 10000;

// Functional component
const Title = () => <h1>Hello I'm title</h1>;
const HeadingComponent = () => (
  <div className="container">
  {
  jsxHeading
  }
    <Title />
    <h2>Hello welcome to my react 🎀</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
