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
    "https://images.unsplash.com/photo-1610372976107-95b5168db00f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=ramiz-dedakovic-ny29rJDM3MY-unsplash.jpg"
  );
});
app.listen(process.env.PORT, () => console.log("running"));
