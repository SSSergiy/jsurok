const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
 function generateKey(length, characters) {
  let sum = "";
  for (let i = 0; i < length; i++) {
    const randomNumber =
      Math.floor(Math.random() * characters.length);
    sum = sum + characters[randomNumber];
  }
  return sum;
};
const key = generateKey(10, characters);
console.log(key);
