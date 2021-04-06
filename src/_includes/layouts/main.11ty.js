const React = require("react");
const html = require("htm").bind(React.createElement);

exports.data = {
  layout: "layouts/render.11ty.js",
};

exports.render = (data) => {
  return html`
    <header>
      <div>
        <a href="/">
          <img alt="Site Logo" draggable=”false” class="site-logo" src="../assets/images/sclogo.png"/>
        </a>
      </div>
      <label for="burger-menu" class="menu-icon" id="menu-icon" tabindex="0">
        ☰
      </label>
      <input type="checkbox" id="burger-menu" class="menu-checkbox"/>
      <nav class="navbar" aria-label="Main menu">
        <ul class="nav-container">
          <li><a href="/about">Who?</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Let's talk</a></li>
        </ul>
      </nav>
    </header>
    <main>
      ${data.content}
    </main>
  `;
};