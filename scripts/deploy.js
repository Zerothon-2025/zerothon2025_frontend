const TOKEN = process.argv[2] || null;

const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "main",
    repo: TOKEN
      ? `https://Zerothon-2025:${TOKEN}@github.com/Zerothon-2025/zerothon-2025.github.io.git`
      : "https://github.com/Zerothon-2025/zerothon-2025.github.io.git",
  },
  function (err) {
    console.log(err);
  },
);
