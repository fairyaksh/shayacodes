const ReactDOMServer = require("react-dom/server");

const html = String.raw;
const template = ({ title, prefetch, content }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="/assets/styles/style.css" />
      <link rel="stylesheet" href="/assets/styles/contact.css" />
      <link rel="stylesheet" href="/assets/styles/typewriter.css" />
      <link rel="stylesheet" href="/assets/styles/scrollbar.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap">
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Home | Shaya - Front End Engineer</title>
      <link rel="prefetch" href="/about/" />
      <link rel="prefetch" href="/blog/" />
      <link rel="prefetch" href="/contact/" />
      ${prefetch
        ? prefetch.map((url) => html`<link rel="prefetch" href="${url}" />`)
        : ""}
    </head>
    <body>
      ${content}
      <script src="/assets/cursor.js"></script>
    </body>
  </html>
`;

exports.render = (data) => {
  const content = ReactDOMServer.renderToStaticMarkup(data.content);
  return template({ content, title: data.title, prefetch: data.prefetch });
};