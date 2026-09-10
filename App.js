const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello I'm Heading")
  )
);

//const heading = React.createElement("h1",{id:"heading"}, "Hello Uday!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
