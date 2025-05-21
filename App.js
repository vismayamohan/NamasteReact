//HTML Nested structure
{
  /* <div id="parent">
  <div id="child">
    <h1>I'm a h1 tag...!!</h1>
  </div>
</div> */
}

// Nested Html 
const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag...!"),
    React.createElement("h3", {}, "Hieeee... I'm h3 tag!!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", {}, "I'm a h2 tag...!"),
    React.createElement("h4", {}, "Hieeee... I'm h4 tag!!!"),
  ]),
]);

console.log(nestedElement);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!!!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElement);
