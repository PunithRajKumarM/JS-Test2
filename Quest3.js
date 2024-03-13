// Make a function that returns the SHA-256 secure hash for a given string. The hash should be formatted in a hexadecimal digit string.
// Hash algorithms are easy to do one way, but essentially impossible to do in reverse. For example, if you hash something simple, like password123, it will give you a long code, unique to that word or phrase. Ideally, there's no way to do this in reverse. You can't take the hash code and go back to the word or phrase you started with.

const crypto = require("crypto");

function sha256Hash(str) {
  const hash = crypto.createHash("sha256").update(str).digest("hex");
  return hash;
}

const str = "password123";
const hashedStr = sha256Hash(str);

console.log(hashedStr);
// ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f
