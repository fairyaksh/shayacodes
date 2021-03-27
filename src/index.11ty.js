const React = require("react");
const html = require("htm").bind(React.createElement);

exports.data = {
  layout: "layouts/main.11ty.js",
};

exports.render = (data) => {
  return html`
    <section class="landing-container">
      <div class="mockup-container">
        <img alt="Browser Mockup" src="../assets/images/browser-mockup.svg"/>
        <h1 class="site-title">I design user experiences.</h1>
      </div>
      <div class="glasses-container">
        <img alt="Glasses" src="../assets/images/glasses.png"/>
      </div>
    </section>
    <img class="tape-1" alt="" src="../assets/images/tape1.svg"/>
    <section class="posts-container">
      <img class="tape-2" alt="" src="../assets/images/tape2.svg"/>
    </section>
  `;
};