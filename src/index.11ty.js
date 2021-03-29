const React = require("react");
const html = require("htm").bind(React.createElement);

exports.data = {
  layout: "layouts/main.11ty.js",
};

exports.render = (data) => {
  return html`
    <section class="landing-container">
      <div class="mockup-container">
        <img alt="Browser Mockup" draggable=”false” src="../assets/images/browser-mockup.svg"/>
        <h1 class="site-title">
          <span class="text1">
            I <span class="emphasise-text"> develop </span> user experiences.
          </span>
          <span class="text2">
            I <span class="emphasise-text">design</span> user experiences.
          </span>
        </h1>
      </div>
      <div class="glasses-container">
        <img alt="Glasses" draggable=”false” src="../assets/images/glasses.png"/>
      </div>
      <img class="tape-1" alt="" draggable=”false” src="../assets/images/tape1.svg"/>
    </section>
    <section class="posts-container">
      <img class="tape-2" alt="" draggable=”false” src="../assets/images/tape2.svg"/>
    </section>
  `;
};