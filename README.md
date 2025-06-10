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

- How to create the same using reactElement?

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

### How to add a sibiling element?
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


## Session - 2

### Is our React app ready to be on production? 
- For the same we have to do a lot of things like removing unwanted code, removing comments, optimize images and many more.

### If we want to build a fast production ready app can react itself do it?
- No, there are a lot of other packages that are required to make a production ready application. React will make our app fast, but to an extend there are lot of other things need to make our app fast.
- There are need of more packages for our app for the same.

### How to get these packages into our app?
- There is a package manager which helps us do it. It is called as NPM.
- It does not stands for node package manager but anything else 😅
- NPM does not have a full form.
- NPM is a standard repository for all the packages. It is one of the biggest package manager.

### How do we install NPM to our project?
- So we do it by using `npm init`.
- After adding all the details we will find a new file named `package.json`.

### What is `package.json`?
- This is a configuration file for our npm packages. It is in json format and we can see all the details that we have entered will we did `npm init`. It is a configuration for NPM. 

### Why do we need `package.json`?
- We need it to keep track of versions of the packages that are being installed in to our project. We will have a lot of packages in our app. They are called as dependencies.

### What are dependencies?
- Deoendencies are those packages which our apps are depended on.
- There are two type of dependencies
  - DevDependencies: used in development phase
  - Normal Dependencies: goes to production

### What are bundlers? 
- Bundler is a pcakage of things wrapped together. 
- When we have normal HTML,CSS, JS file our whole code needs to be bundled together by minifying, caching, compressing, clean code before it can be send to production. Bundlers help in doing all of these.
- Some of the bundlers are webpack, parcel, vite, etc.
- We will be using parcel.

### What is parcel?
- Parcel is a bundler. It is easy to configure and we will be igniting our app usisg parcel. Parcel will give strength to our app. If our project is skeleton parcel will give muscles to the project.

### How to add parcel to our app?
- Parcel comes as a node package, so we will be installing the same by `npm install parcel` and if we want it to be on dev dependency we write the command as `npm install -D parcel`.

### What is the command above?
- This is the command used to install any npm package. So if we want to install any package we can add it as `npm install abc` or `npm install -D abc`.

### what is `ˆ` and `˜` in package.json?
- ^ and ~ can be seen in front of the version of package. ^ is known as caret and ~ is known as tilda. Whenever there is a minor version updates ^ is used and will be automatically updated. Whenever there is major version updates ~ is used and will be automatically updates, but the same is not suggested as it may break our project/app.
- When we install a package we get another file named `package-lock.json`.

### What is `package.json` & `package-lock.json`?
- package.json is a configuration for npm. It keeps track of what version of that package is installed into our app/system.
- packahe-lock.json keeps the track of exact version that is being installed. package-lock.json will lock the version and keeps a record of it.
- package.json keeps the approximate version and package-lock.json will have the exact version which is there.
- There are many lengthy code present in package-lock.json. One of them is integrity.

### What is integrity? Why is hash present inside package-lock.js?
- Integrity is a hash sha512 hash. Sometimes things work on local and not on production so to avoid the same package-lock.json keeps a hash to verify that whatever is there in the dev machine is the same version which is being deployed onto the production.

### What are node_modules? What is there in node_modules?
- When we installed package/packages we can see node_module folder added to our project. Node moduldes contains all the code that we fetched from NPM. So when we installed a package it fetched all the code of the package as well as the code of the package's dependencies.

- package.json is a configuration for our npm where as node_modules is like a database. It contains the actual data of the packages/dependencies that our project needs.

### What is transitive dependencies?
- So when we installed a package i.e. parcel, our project need parcel and parcel as a project has its own dependencies and those dependencies can have their own dependencies and so on and this is known as transitive dependencies.

### How many package.json does our whole project has?
- Every dependecies has their own package.json file. So if we check our app has dependencies and that is in package.json and the installed dependencies has their own dependencies and that is in their own package.json and so on.

### Should we put the node modules to production/git?
- No. We will add them in .gitignore file as these packages can be regenerated we do not need to push them in git.

### Should we put package & package-lock.json to production/git?
- Yes. These both files maintains a note of what all dependencies our project needs. With the help of these files we can regenerate our node_modules.

### How to ignite our app?
- `npx parcel index.html` we give the source file. And just like npm we have npx. Npm means we are calling the command of npm. Npx means executing a packahe.
- So when we run this command parcel goes to the source that is index.html and build a development build app for our app. And the same is hoisted to `http://localhost:1234`.

### What is the correct way to add react and reactDOM to our project?
- We have added the same using CDN link. This is not a prefered way to bring React and ReactDOM into our project. As by using the same we will be doing a network call and the versions changes and if we install the package for the same it will be easy to use them.

### What is `type=module`?
- Whenever we inject react code in html using script tag it treats the script as a browser script. It treats the file as a normal JS file. So we have to tell the browser that it is a react file and not the normal JS file for the same we have to add `type=module` in the script tag.

### What are parcel doing in our project till now?
- There are many things that parcel is doing in our project some of them are:
  - Dev Build: Parcel gives us dev build as well as production build
  - Local Server: Parcel provides us with localhost:1234
  - Hot Module Replacement: Whenever we change something and the same is reflected on browser that is because parcel is watching every file
  - File Watching algorithm: This is the algorithm used to check the changes. This is writtrn using C++.
  - Caching: Everytime build is made on every save the time is reduced every time this is because parcel is caching things for us. We have parcel-cache folder where it is cached.
  - Image Optimization: This is one of the most expensive thing in our web browser is  to load image as parcel do the same for us by optimizing the same.
  - Minification: Parcel minifies our code
  - Error Handling: Error handling is made easy
  - Bundling: Whole files are bundled for us.
  - Compress: Parcel compress our file.
  - Consistent Hashing: Parcel consistently hash our files so as to make the build faster.
  - Tree Shaking: If there are many unwanted code and only less code parcel will remove the unused code for us.
  - Code Spliting
  - Differencial Bundling
  - Diagnostics
  - HTTPs Support: Parcel helps in checking our project in Https 

### Do we need to add an entry point in package.json?
- NPM needs an entry point where as for parcel we pass the same in command itself.

### How to build a production ready app? And where does it goes upto?
- For the same the command is `npx parcel build index.html`. By running the code it will bundle, minify and do all the things inside the dist folder. 

### What is dist folder?
- Dist is where all the development build and production build is put into. And when we refresh the file or save the file it will use .parcel-cache or dist to update the same using HMR.
- There are three main files in dist.
  - index.html
  - index.css
  - index.js
- If we have large files parcel will compress everything and minify to these three files and has all the code written in our app.
- These are production ready app.


### What is browserslist?
- To make our app compatible for older versions of browser we use browserlist.

## Session - 3

### What is script? And why to use them?
- When we have to build a dev or production build of our project we have to write a long command. To avoid the same we can create script for our project instead of writing long commands.
- We create script inside package.json.
- Inside package.json there is a section for script, we can create different script for build, development etc.
- We will be adding `"start": "parcel index.html"`
- It will run our project in development mode.

### How does this work?
- We write the command that needs to be executed by npm in the script. So the new command will be `npm run start` or `npm start`. (We can only skip run for start command).

### What is React Element?
- Just like we have DOM Elements in HTML in React we have React Elemets which are kindoff equvalent to DOM elements. React Element is not a HTML Element it is an object. When we render that object on to DOM it becomes and HTML Element.

#### React.createElemetnt => JS Object => Rendered => HTMLElement - using react.creatElement

#### JSX => React.createElemetnt => JS Object => Rendered => HTMLElement - using JSX

### What is JSX?
- JSX is a javascript syntax which is easier to create React Element. JSX is not a part of React. React & JSX are different. React tries to merge HTML & JS together using JSX. JSX is a convension where we kindoff merge these HTML & JS together. JSX is not HTML inside JS. This is not HTML it is JSX. JSX is HTML/XML like syntax. JSX code is transpiled into React.createELement. We use camelCase for attribute in JSX.

### How to create a H1 tag using JSX?
- `const jsxHeading = <h1>Namste React using JSX 🎀</h1>;`

### What is babel?
- The browser(JS Engine) does not understands JSX. Any pieces of JS code is such that JSEngine understands it. But it does not understands JSX. JS Engine only understands ECMAScript.
- Parcel helps in doing the job behind the back. Even before the code goes to the JS Engine it is transpiled first with the help of BABEL.
- The code is transpiled even before the it goes into root.render().
- As soon as we save the code babel converts the code quickly to a code that react will understand. Babel is transpiling our code. Babel is a JS compiler and we call this as a transpiler.

### What is React Component?
- There are two types of components
  - Class based component (old way)
  - Functional Component (new way)
- Class based component uses javascript classes
- Functional component uses functions to create component. 

### What is react functional component?
- It's a normal javascript function. While creating a component we need to start the name of the component using capital letter.
ex. `const Heading = () => {}`
- A functional component is normal javascript function which returns some JSX Element. Everything in react is component. We can all a component as many times as we want. 

### What is component composition?
- Composing two components into one another is known as component composition.

### Can we write vanilla javascript inside JSX?
- Yes, we can for that we have to use {} inside the JSX code. 

### Can JSX protect our code from cross site scripting? What is cross site scripting?
- Yes JSX does it. Cross site scripting is when we have an external attact through an API. JSX takes care of injection attack. JSX will escape the malacious attack. If we have an API and if it has malacious attack, JSX will take care of it and helps from attacking.
