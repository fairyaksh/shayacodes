const React = require("react");
const html = require("htm").bind(React.createElement);

exports.data = {
  layout: "layouts/main.11ty.js",
};

exports.render = (data) => {
  return html`
  <h1 class="contact-title">Contact me</h1>
    <div class="slide-text">
      <h2 class="contact-subtitle">
        <span class="emoji">👋</span> Hello. Come say hi. 
      </h2>
    </div>
    <section class="contact-wrapper">
      <form id="contact-form">
        <div class="wrap-input">
          <div class="wrap-input_text">
            <input placeholder="Your name"/>
          </div>
          <div class="wrap-input_text">
            <input placeholder="Your email"/>
          </div>
          <div class="wrap-input_text">
            <textarea placeholder="Message" form="contact-form" type="text"/>
          </div>
        </div>
        <div class="submit-btn">
          <button type="submit" form="contact-form" value="Submit">Send</button>
        </div>
      </form>
    </section>
  `;
};