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
  res.redirect("/file");
});
app.get("/file", (req, res) => {
  res.set("Content-Disposition", 'attachment; filename="test.json"');
  res.send();
});
app.listen(process.env.PORT, () => console.log("running"));
