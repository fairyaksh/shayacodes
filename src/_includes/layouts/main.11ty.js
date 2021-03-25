const React = require("react");
const html = require("htm").bind(React.createElement);

const Title = require("../components/title");

exports.data = {
  layout: "layouts/render.11ty.js",
  title: "I design, develop, discuss user experiences",
};

exports.render = (data) => {
  return html`
    <header>
      <nav>
        <ul>
          <li><a href="/about">Who?</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contact">Let's talk</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <${Title}>${data.title}</${Title}>
      ${data.content}
    </main>
  `;
};