const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(
    `
    <style>
    body { color: white; background-color: black; }
    a { color: inherit; }
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>
      window.now = () => {
        setTimeout(() => {
          console.log('now!')
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", () => {});
          oReq.open("GET", "/");
          oReq.send();

          const img = document.createElement('img');
          img.src = 'https://images.unsplash.com/file-1606243029859-9e03fb70d982image';
          document.body.appendChild(img);
        }, 10)
      }
    </script>
    <a href="/file" download onclick="window.now()">download</a>
    <!-- <img src="https://images.unsplash.com/file-1606243029859-9e03fb70d982image" /> -->
  `
  );
});
app.get("/file", (req, res) => {
  res.set("Content-Disposition", 'attachment; filename="test.json"');
  res.send();
});
app.listen(process.env.PORT, () => console.log("running"));
