const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = path.join(root, "index.html");
const destDir = path.join(root, "web");
const dest = path.join(destDir, "index.html");

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("Synced web/index.html");
