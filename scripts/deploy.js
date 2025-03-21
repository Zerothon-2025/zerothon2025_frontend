const TOKEN = process.argv[2] || null;

import * as ghpages from "gh-pages";

ghpages.publish(
  "dist",
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
