const React = require("react");
const html = require("htm").bind(React.createElement);

exports.data = {
  layout: "layouts/main.11ty.js",
  title: "Welcome to my blog",
};

exports.render = (data) => {
  return html`
    <p>
      This static site is generated by${" "}
      <a href="https://www.11ty.dev/">Eleventy</a>, but it uses React as the
      templating engine.
    </p>
    <p>
      <a
        href="https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup"
        ><code>ReactDOMServer.renderToStaticMarkup</code></a
      >${" "} allows us to turn a tree of React elements into an HTML string for
      Eleventy to render.
    </p>
    <p>
      I was too lazy to set up Babel to transpile JSX, so I'm using ${" "}
      <a href="https://github.com/developit/htm">htm</a> instead.
    </p>
  `;
};