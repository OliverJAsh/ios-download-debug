const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      window.now = () => {
        console.log('now!')
        fetch('https://httpbin.org/post', { method: 'POST' });
      }
    </script>
    <a href="/download" download onclick="window.now()">download</a>`
  );
});
app.get("/download", (req, res) => {
  res.redirect(
    "https://httpbin.org/response-headers?Content-Disposition=attachment;%20filename%3d%22test.json%22"
  );
});
app.listen(process.env.PORT, () => console.log("running"));
