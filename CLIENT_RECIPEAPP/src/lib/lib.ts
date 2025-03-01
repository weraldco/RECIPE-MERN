export const makeFirstLetterCapital = (label: string | undefined) => {
  if (label) {
    const chars = label.split("");
    const firstLetter = chars[0].toUpperCase();
    chars[0] = firstLetter;
    return chars.join("");
  }
};
