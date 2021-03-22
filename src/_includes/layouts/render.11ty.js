const ReactDOMServer = require("react-dom/server");

const html = String.raw;
const template = ({ title, prefetch, content }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>${title}</title>
      <link rel="prefetch" href="/blog/" />
      <link rel="prefetch" href="/about/" />
      ${prefetch
        ? prefetch.map((url) => html`<link rel="prefetch" href="${url}" />`)
        : ""}
    </head>
    <body>
      ${content}
    </body>
  </html>
`;

exports.render = (data) => {
  const content = ReactDOMServer.renderToStaticMarkup(data.content);
  return template({ content, title: data.title, prefetch: data.prefetch });
};