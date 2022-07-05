// letter count function thsat counts the specific letters in a word

const letterCount = (word, chr) => {
  let count = 0;
  for (let letter of word) {
    // == checks value so 4 == "4"
    // === checks value and dtat type 4 != "4"
    if (letter === chr) {
      count++;
    }
  }
  return count;
};

module.exports = letterCount;
