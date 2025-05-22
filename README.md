# Namaste React 💫

## Session - 1

### React is a library, meaning we can use it in our project for a small section of code as well. Ex. For nav bar, side bar, header, footer, etc.

### It has been written by facebook developers.

### What we have done is:

- We have wrote hello world in HTML
- We have wrote hello world using javascript
- We have wrote hello world using react with CDN links

### We have added CDN link in our project for react.

### There are two CDN links added

- The first link is the react development which has core react code/algorithm.
- The second link is the react-dom, this is useful for DOM operations.

### why there are two files instead of one??

- It is because react does not just works on browsers it works on mobile phones and many other ways (react native, react 3D, etc...)
- So the second file behaves link a bridge to connect from core react to react DOM.

### React syntax is similar to javascript

example:

`const heading = React.createElement("h1", {}, "This is H1 tag");`

- We have wrote the code but it does not work like javascript it works little different. React need to have a root to render for DOM manupulations.

example:

`const root = ReactDOM.createRoot(document.getElementbyId("root"));`

### In the above examples we see that `createElement` comes from React and `createRoot` comes from ReactDOM.

- This is because `createElement` comes from core react element and to put it inside DOM `createRoot` is used so we use ReactDOM.
- We create a root for the react library.
- and we pass the above root to the HTML id where we want it to be rendered.

### What is the most expensive operation inside browser or webpage?

- The most costly operation in the webpage is when the webpage is interactive meaning when the DON nodes needs to be manipulated. i.e when we click a button and something shows up into a page or something hides into the page.

### What is {} object in the `React.createElemet()`?

- This object is the place where we will give attributes to our tags.

### What are the elements inside `React.createElemet()`?

- Example:

```
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "123"},
  "Hello World from vismaya"
);
```

- React element is nothing but a normal javascript object.
- It has something called as props.
- What are props?
- Props are children + attribute.
- What are children and attribute?
- in the above code: `{ id: "heading", xyz: "123"}` this are attributes.
- And `"Hello World from vismaya"` this is children.
- Both this combined together is called props.
- The object we pass are the attribute and text we pass are the children and both are called props.

### What is `root.render()`?

- So the above example is not HTML element it is the javascript object and this javascript object is then converted to HTML tag by this `root.render()`.
- So its job is to taka the object, create the h1 tag which the browesr understands and put that up inside the root.
- What happens behind the scene is when we did `React.createElemet()` it basically creates an object a JS object for us.
- It is a react element, and not h1 tag.
- The `root.render()` will basically be responsible to take the same object and put it up and convert it into that heading tag and put it up on the DOM.

### What is nested HTML element in react?

- HTML example:
```
<div id="parent">
  <div id="child">
    <h1>I'm a h1 tag</h1>
  </div>
</div>
````

- how to create the same using reactElement?
```
const nestedElement = React.createElement(
  "div", 
  { id: "parent"},
  React.createElement(
    "div",
    {"id": "child"},
    React.createElemet("h1", {}, "I'm a h1 tag")
    )
  );
```

### How ro add a sibiling element?
- HTML example:

```
<div id="parent">
  <div id="child">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
</div>
```

```
const nestedElement = React.createElement(
  "div", 
  { id: "parent"},
  React.createElement(
    "div",
    {"id": "child"},
    [React.createElemet("h1", {}, "I'm a h1 tag"),
    React.createElemet("h2", {}, "I'm a h2 tag")
    ]
    )
  );
```

- So for adding multiple children we will have to convert it into an array as shown in the above example.
- It is an array of children.
- And this method is lengthy, complicated, untidy and very tedious.
- This is the reason we have JSX.
- JSX is used to write HTML tags and complex code.

### Does the order of files matter?
- Yes it does. The order of files should always be in sequence, when we import links.

### What is `root.render()` doing?
- It is putting the object into the defined HTML Element.
- If we add anything directly into the HTML page and the same is we used for rendering the HTML content will be replaced by the react code.


### What is the difference between library and a framework?
- React is a library and it is called a library because it can be applied to a small portion of a page itself.
- React works only in the place whatever we make the root as.
- A framework comes with all whole load of things and we need to completely setup everything.
- React is a barebone minimal javascript library.

## SelfStudy
- What is emmet?
- What is CDN? Why do we use CDN?
- What is crossorigin?
