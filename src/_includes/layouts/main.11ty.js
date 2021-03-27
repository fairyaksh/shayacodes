const React = require("react");
const html = require("htm").bind(React.createElement);

const Title = require("../components/title");

exports.data = {
  layout: "layouts/render.11ty.js",
  // title: "I design, develop & discuss user experiences",
};

exports.render = (data) => {
  return html`
    <header>
      <nav class="navbar">
        <div>
          <a href="/">
            <img alt="Site Logo" class="site-logo" src="../assets/images/sclogo.png"/>
          </a>
        </div>
        <ul class="nav-container">
          <li><a href="/about">Who?</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contact">Let's talk</a></li>
        </ul>
      </nav>
    </header>
    <main>
      ${data.content}
    </main>
  `;
};