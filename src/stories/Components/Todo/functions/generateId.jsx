const getRandomLetters = (length = 1) =>
  Array(length)
    .fill()
    .map((e) => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
    .join("");
const getRandomDigits = (length = 1) =>
  Array(length)
    .fill()
    .map((e) => Math.floor(Math.random() * 10))
    .join("");
export const generateUniqueID = (enteredTask) => {
  const existingIds = enteredTask.map((el) => el.id);
  let id = getRandomLetters(2) + getRandomDigits(4);
  while (existingIds.includes(id))
    id = getRandomLetters(2) + getRandomDigits(4);
  return id;
};
