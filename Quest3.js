const crypto = require("crypto");

function sha256Hash(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  return hash;
}

const str = "password123";
const hashedStr = sha256Hash(str);

console.log(hashedStr);
// ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f
